// ============================================================================
//  OPERATION FRONTLINE —— 写实第一人称战术射击引擎 (Three.js)
//  子系统：写实世界/天空/雾/阴影 · 弹道(散布/下坠/后坐/曳光) · 可破坏掩体
//          动态天气(雨/雾/风) · 可驾驶载具(主炮+同轴机枪) · 敌我AI小队
//          据点占领 + 兵力值胜负 · WebAudio 程序化音效
// ============================================================================
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import GAME from '../config/game.js';

const TMP_V = new THREE.Vector3();
const TMP_V2 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

export default class FPSGame {
  constructor(container, { onHUD, onPause, onEnd, onLockChange } = {}) {
    this.container = container;
    this.onHUD = onHUD || (() => {});
    this.onPause = onPause || (() => {});
    this.onEnd = onEnd || (() => {});
    this.onLockChange = onLockChange || (() => {});

    this.classKey = 'assault';
    this.running = false;
    this.paused = false;
    this.inVehicle = false;
    this.ended = false;
    this.time = 0;

    this.keys = {};
    this.mouseDown = false;
    this.rightDown = false;
    this.fireCooldown = 0;
    this.reloadTimer = 0;
    this.recoil = 0;
    this.spread = 0;
    this.abilityCd = 0;
    this.health = GAME.player.maxHealth;
    this.vy = 0;
    this.onGround = true;
    this.score = 0;
    this.kills = 0;

    this.soldiers = []; // 所有士兵(玩家小队+敌军)
    this.enemies = [];
    this.allies = [];
    this.debris = [];
    this.tracers = [];
    this.sparks = [];
    this.worldMeshes = []; // 地面+实体(挡弹/视线)
    this.solidProps = []; // 可碰撞实体

    this.tickets = { player: GAME.tickets.player, enemy: GAME.enemy.tickets };
    this.capturePoints = [];

    this._raf = null;
    this._listeners = {};
  }

  // -------------------------------------------------------------- 初始化
  init() {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x9aa6a0, GAME.weather.clear.fog);

    this.camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1200);
    this.camera.position.set(0, GAME.player.eyeHeight, 90);

    this.controls = new PointerLockControls(this.camera, this.renderer.domElement);
    this.controls.addEventListener('lock', () => { this.onLockChange(true); });
    this.controls.addEventListener('unlock', () => {
      this.onLockChange(false);
      if (this.running && !this.ended && !this._exitingVehicle) this.pause();
    });

    this._buildSky();
    this._buildLights();
    this._buildGround();
    this._buildProps();
    this._buildCapturePoints();
    this._buildVehicle();
    this._buildEnemyTank();
    this._buildSquad();
    this._buildPooled();

    this._setupAudio();
    this._setupInput();

    this.clock = new THREE.Clock();
    this._animate = this._animate.bind(this);
    this._raf = requestAnimationFrame(this._animate);

    this.setWeather('clear');
  }

  // -------------------------------------------------------------- 天空 / 光照
  _buildSky() {
    const sky = new Sky();
    sky.scale.setScalar(10000);
    const u = sky.material.uniforms;
    u.turbidity.value = 6;
    u.rayleigh.value = 1.6;
    u.mieCoefficient.value = 0.005;
    u.mieDirectionalG.value = 0.8;
    const phi = THREE.MathUtils.degToRad(90 - 28); // 太阳高度
    const theta = THREE.MathUtils.degToRad(35);
    const sun = new THREE.Vector3().setFromSphericalCoords(1, phi, theta);
    u.sunPosition.value.copy(sun);
    this.scene.add(sky);
    this._sunDir = sun;

    this.scene.add(new THREE.HemisphereLight(0xbcd0e0, 0x4a4030, 0.7));
  }

  _buildLights() {
    const sun = new THREE.DirectionalLight(0xfff2d8, 2.2);
    sun.position.copy(this._sunDir).multiplyScalar(200);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const d = GAME.map.half + 20;
    sun.shadow.camera.left = -d; sun.shadow.camera.right = d;
    sun.shadow.camera.top = d; sun.shadow.camera.bottom = -d;
    sun.shadow.camera.near = 1; sun.shadow.camera.far = 600;
    sun.shadow.bias = -0.0004;
    this.scene.add(sun);
    this.scene.add(sun.target);
    this.sun = sun;
    this.scene.add(new THREE.AmbientLight(0x404a4a, 0.5));
  }

  // -------------------------------------------------------------- 程序化贴图
  _tex(base, blobs, sz = 256) {
    const c = document.createElement('canvas'); c.width = c.height = sz;
    const g = c.getContext('2d');
    g.fillStyle = base; g.fillRect(0, 0, sz, sz);
    for (const b of blobs) {
      for (let i = 0; i < (b.n || 400); i++) {
        const x = Math.random() * sz, y = Math.random() * sz, r = Math.random() * (b.r || 3) + 0.5;
        g.fillStyle = `rgba(${b.c[0]},${b.c[1]},${b.c[2]},${b.a || 0.5})`;
        g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
      }
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }

  _buildGround() {
    const half = GAME.map.half;
    const tex = this._tex('#5b5341', [
      { c: [70, 64, 50], n: 600, r: 4 }, { c: [90, 82, 64], n: 500, r: 3 }, { c: [40, 38, 30], n: 400, r: 2 },
    ]);
    tex.repeat.set(half / 8, half / 8);
    const geo = new THREE.PlaneGeometry(half * 2, half * 2, GAME.map.groundSegments, GAME.map.groundSegments);
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, metalness: 0.0, color: 0x8a8270 });
    const ground = new THREE.Mesh(geo, mat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.ground = ground;
    this.worldMeshes.push(ground);
  }

  // -------------------------------------------------------------- 环境道具 + 可破坏
  _addSolid(mesh, { destructible = false, hp = 0, radius = 1 } = {}) {
    mesh.castShadow = true; mesh.receiveShadow = true;
    mesh.userData.solidRef = { destructible, hp, maxHp: hp, alive: true, radius };
    this.scene.add(mesh);
    this.worldMeshes.push(mesh);
    this.solidProps.push(mesh);
    return mesh;
  }

  _buildProps() {
    const half = GAME.map.half - 8;
    const P = GAME.props;
    const crateTex = this._tex('#7a5a32', [{ c: [50, 35, 18], n: 50, r: 2, a: 0.6 }]);
    const concreteTex = this._tex('#8d8d86', [{ c: [60, 60, 58], n: 300, r: 3 }, { c: [120, 120, 116], n: 200, r: 2 }]);
    const placed = [];
    const free = (x, z, r) => placed.every(p => Math.hypot(p.x - x, p.z - z) > p.r + r + 6);
    const spot = (r) => {
      for (let i = 0; i < 40; i++) {
        const x = (Math.random() * 2 - 1) * half, z = (Math.random() * 2 - 1) * half;
        if (free(x, z, r)) { placed.push({ x, z, r }); return [x, z]; }
      }
      return null;
    };

    for (let i = 0; i < P.crates; i++) {
      const s = 1.2 + Math.random() * 0.6; const p = spot(s); if (!p) continue;
      const m = new THREE.Mesh(new THREE.BoxGeometry(s, s, s),
        new THREE.MeshStandardMaterial({ map: crateTex, roughness: 0.9 }));
      m.position.set(p[0], s / 2, p[1]);
      m.rotation.y = Math.random() * Math.PI;
      this._addSolid(m, { destructible: true, hp: 45, radius: s * 0.7 });
    }
    for (let i = 0; i < P.walls; i++) {
      const p = spot(2); if (!p) continue;
      const w = 4 + Math.random() * 3, h = 2.2 + Math.random();
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.6),
        new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.95 }));
      m.position.set(p[0], h / 2, p[1]); m.rotation.y = Math.random() * Math.PI;
      this._addSolid(m, { destructible: true, hp: 120, radius: Math.max(w, 2) * 0.5 });
    }
    for (let i = 0; i < P.rocks; i++) {
      const p = spot(1.5); if (!p) continue;
      const r = 1 + Math.random() * 1.6;
      const m = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 0),
        new THREE.MeshStandardMaterial({ color: 0x6b6660, roughness: 1 }));
      m.position.set(p[0], r * 0.6, p[1]); m.rotation.set(Math.random(), Math.random(), Math.random());
      this._addSolid(m, { radius: r });
    }
    for (let i = 0; i < P.trees; i++) {
      const p = spot(1.2); if (!p) continue;
      const g = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 3, 6),
        new THREE.MeshStandardMaterial({ color: 0x4a3522, roughness: 1 }));
      trunk.position.y = 1.5; trunk.castShadow = true;
      const crown = new THREE.Mesh(new THREE.ConeGeometry(1.6, 4, 7),
        new THREE.MeshStandardMaterial({ color: 0x3c5a2e, roughness: 1 }));
      crown.position.y = 4.4; crown.castShadow = true;
      g.add(trunk, crown); g.position.set(p[0], 0, p[1]);
      this.scene.add(g);
      // 树作为可碰撞实体(无破坏)
      this._addSolid(crown, { radius: 1.4 }).position.set(p[0], 4.4, p[1]);
      crown.userData.solidRef.radius = 1.4;
      this.solidProps.pop(); this.solidProps.push(crown);
    }
    for (let i = 0; i < P.sandbags; i++) {
      const p = spot(1.5); if (!p) continue;
      const g = new THREE.Group();
      for (let k = 0; k < 4; k++) {
        const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.5, 3, 6),
          new THREE.MeshStandardMaterial({ color: 0x9a8d5a, roughness: 1 }));
        b.rotation.z = Math.PI / 2; b.position.set((k - 1.5) * 0.7, 0.4, 0); b.castShadow = true; b.receiveShadow = true;
        g.add(b);
      }
      g.position.set(p[0], 0, p[1]); g.rotation.y = Math.random() * Math.PI;
      this.scene.add(g);
      const ref = { destructible: false, alive: true, radius: 1.5 };
      g.traverse(o => { if (o.isMesh) { o.userData.solidRef = ref; this.worldMeshes.push(o); } });
      this.solidProps.push(g.children[0]);
      g.children[0].userData.solidRef = ref;
    }
    for (let i = 0; i < P.buildings; i++) {
      const p = spot(6); if (!p) continue;
      const w = 8 + Math.random() * 6, d = 8 + Math.random() * 6, hgt = 5 + Math.random() * 4;
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, hgt, d),
        new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.97, color: 0x9a958c }));
      m.position.set(p[0], hgt / 2, p[1]); m.castShadow = true; m.receiveShadow = true;
      const ref = { destructible: false, alive: true, radius: Math.max(w, d) * 0.6 };
      m.userData.solidRef = ref; this.scene.add(m); this.worldMeshes.push(m); this.solidProps.push(m);
    }
  }

  // -------------------------------------------------------------- 据点
  _buildCapturePoints() {
    for (const cp of GAME.capturePoints) {
      const g = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.TorusGeometry(cp.radius, 0.25, 8, 48),
        new THREE.MeshStandardMaterial({ color: 0x888888, emissive: 0x222222 }));
      ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05;
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 30, 12, 1, true),
        new THREE.MeshBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.12, side: THREE.DoubleSide }));
      beam.position.y = 15;
      const flag = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x888888, emissive: 0x222222 }));
      flag.position.set(0, 6, 0);
      g.add(ring, beam, flag);
      g.position.set(cp.pos[0], 0, cp.pos[2]);
      this.scene.add(g);
      this.capturePoints.push({ ...cp, group: g, ring, beam, flag, owner: 'neutral', progress: 0, flagMat: flag.material });
    }
  }

  // -------------------------------------------------------------- 载具（玩家）
  _buildVehicle() {
    const v = GAME.vehicle;
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x4a4f3a, roughness: 0.7, metalness: 0.3 });
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.0, 5.4), bodyMat);
    chassis.position.y = 0.9; chassis.castShadow = true;
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.0, 2.4), bodyMat);
    cab.position.set(0, 1.7, -0.4); cab.castShadow = true;
    const turret = new THREE.Group(); turret.position.set(0, 2.2, 0.4);
    const tBody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.7, 2.2), bodyMat); tBody.castShadow = true;
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.2, 10), new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.6, roughness: 0.4 }));
    barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 0.1, 1.8);
    turret.add(tBody, barrel);
    const wheelGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.5, 12);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    for (const x of [-1.5, 1.5]) for (const z of [-1.8, 0, 1.8]) {
      const wh = new THREE.Mesh(wheelGeo, wheelMat); wh.rotation.z = Math.PI / 2;
      wh.position.set(x, 0.6, z); g.add(wh);
    }
    g.add(chassis, cab, turret);
    g.position.set(6, 0, 80);
    this.scene.add(g);
    this.vehicle = { group: g, turret, barrel, health: v.health, maxHealth: v.health, heading: 0, speed: 0, cooldown: 0, mgCd: 0, alive: true, mat: bodyMat };
  }

  _buildEnemyTank() {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x6b2f2a, roughness: 0.6, metalness: 0.4 });
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(4, 1.2, 7), mat); chassis.position.y = 1.0; chassis.castShadow = true;
    const turret = new THREE.Group(); turret.position.y = 1.9;
    const tb = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.0, 3), mat); tb.castShadow = true;
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 4, 10), new THREE.MeshStandardMaterial({ color: 0x111111 }));
    barrel.rotation.x = Math.PI / 2; barrel.position.z = 2.4;
    turret.add(tb, barrel);
    g.add(chassis, turret);
    const cp = GAME.capturePoints[2];
    g.position.set(cp.pos[0], 0, cp.pos[2] - 6);
    this.scene.add(g);
    this.enemyTank = { group: g, turret, barrel, cooldown: 3, alive: true, hp: 400 };
  }

  // -------------------------------------------------------------- 士兵模型
  _makeSoldier(team) {
    const color = team === 'enemy' ? GAME.enemy.color : GAME.squad.color;
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.8 });
    const legs = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.8, 0.4), new THREE.MeshStandardMaterial({ color: 0x2b2b2b, roughness: 1 }));
    legs.position.y = 0.4;
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.35), mat); torso.position.y = 1.2;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.32), new THREE.MeshStandardMaterial({ color: 0xc9a07a, roughness: 1 })); head.position.y = 1.78;
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color, roughness: 0.7 })); helmet.position.y = 1.9;
    const gun = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.9), new THREE.MeshStandardMaterial({ color: 0x151515 })); gun.position.set(0.22, 1.2, 0.5);
    [legs, torso, head, helmet, gun].forEach(m => { m.castShadow = true; g.add(m); });
    g.userData.parts = [legs, torso, head, helmet, gun];
    return g;
  }

  _spawnSoldier(team, pos) {
    const g = this._makeSoldier(team);
    g.position.copy(pos);
    this.scene.add(g);
    const s = {
      team, root: g, alive: true, hp: team === 'enemy' ? GAME.enemy.health : GAME.squad.health,
      maxHp: team === 'enemy' ? GAME.enemy.health : GAME.squad.health,
      vel: new THREE.Vector3(), fireCd: Math.random() * 1.5, strafe: Math.random() > 0.5 ? 1 : -1, strafeT: 1 + Math.random() * 2,
      parts: g.userData.parts, hitFlash: 0,
    };
    g.userData.parts.forEach(p => { p.userData.soldier = s; });
    this.soldiers.push(s);
    if (team === 'enemy') this.enemies.push(s); else this.allies.push(s);
    return s;
  }

  _buildSquad() {
    // 敌军成组分布在地图远端
    for (let i = 0; i < GAME.enemy.count; i++) {
      const a = Math.random() * Math.PI * 2, r = 60 + Math.random() * 50;
      this._spawnSoldier('enemy', new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r - 20));
    }
    // 友军小队（初始在玩家附近）
    for (let i = 0; i < GAME.squad.allies; i++) {
      this._spawnSoldier('ally', new THREE.Vector3(-3 - i * 2, 0, 84));
    }
  }

  // -------------------------------------------------------------- 对象池
  _buildPooled() {
    const tracerGeo = new THREE.CylinderGeometry(0.025, 0.025, 1, 6);
    const tracerMat = new THREE.MeshBasicMaterial({ color: 0xffd27f, transparent: true, opacity: 0.9 });
    for (let i = 0; i < 60; i++) {
      const m = new THREE.Mesh(tracerGeo, tracerMat.clone()); m.visible = false; this.scene.add(m);
      this.tracers.push({ mesh: m, life: 0 });
    }
    const sparkGeo = new THREE.SphereGeometry(0.12, 6, 6);
    for (let i = 0; i < 40; i++) {
      const m = new THREE.Mesh(sparkGeo, new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true })); m.visible = false; this.scene.add(m);
      this.sparks.push({ mesh: m, life: 0, vel: new THREE.Vector3() });
    }
    this.muzzleLight = new THREE.PointLight(0xffcc66, 0, 12); this.scene.add(this.muzzleLight);
  }

  // -------------------------------------------------------------- 音频（程序化）
  _setupAudio() {
    try {
      this.audio = new (window.AudioContext || window.webkitAudioContext)();
      this._noiseBuf = (() => {
        const b = this.audio.createBuffer(1, this.audio.sampleRate * 0.3, this.audio.sampleRate);
        const d = b.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        return b;
      })();
    } catch (e) { this.audio = null; }
  }
  _sfx(type) {
    if (!this.audio) return;
    const t = this.audio.currentTime;
    if (type === 'shoot' || type === 'mg' || type === 'cannon') {
      const src = this.audio.createBufferSource(); src.buffer = this._noiseBuf;
      const g = this.audio.createGain(); const f = this.audio.createBiquadFilter();
      f.type = 'lowpass'; f.frequency.value = type === 'cannon' ? 600 : 1800;
      g.gain.setValueAtTime(type === 'cannon' ? 0.6 : 0.25, t); g.gain.exponentialRampToValueAtTime(0.001, t + (type === 'cannon' ? 0.4 : 0.12));
      src.connect(f); f.connect(g); g.connect(this.audio.destination); src.start(t); src.stop(t + 0.4);
    } else if (type === 'explosion') {
      const o = this.audio.createOscillator(); const g = this.audio.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(30, t + 0.5);
      g.gain.setValueAtTime(0.7, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
      o.connect(g); g.connect(this.audio.destination); o.start(t); o.stop(t + 0.6);
    }
  }

  // -------------------------------------------------------------- 输入
  _setupInput() {
    this._listeners.keydown = (e) => {
      this.keys[e.code] = true;
      if (e.code === 'KeyR') this._reload();
      if (e.code === 'KeyQ') this._useAbility();
      if (e.code === 'KeyF') this._toggleVehicle();
    };
    this._listeners.keyup = (e) => { this.keys[e.code] = false; };
    this._listeners.mousedown = (e) => { if (e.button === 0) this.mouseDown = true; if (e.button === 2) this.rightDown = true; };
    this._listeners.mouseup = (e) => { if (e.button === 0) this.mouseDown = false; if (e.button === 2) this.rightDown = false; };
    this._listeners.contextmenu = (e) => e.preventDefault();
    this._listeners.resize = () => this._resize();
    window.addEventListener('keydown', this._listeners.keydown);
    window.addEventListener('keyup', this._listeners.keyup);
    this.renderer.domElement.addEventListener('mousedown', this._listeners.mousedown);
    window.addEventListener('mouseup', this._listeners.mouseup);
    window.addEventListener('contextmenu', this._listeners.contextmenu);
    window.addEventListener('resize', this._listeners.resize);
  }
  _resize() {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  // -------------------------------------------------------------- 武器/射击
  get weapon() { return GAME.classes[this.classKey].weapon; }
  get ability() { return GAME.classes[this.classKey].ability; }

  _reload() {
    if (this.reloadTimer > 0 || this.inVehicle) return;
    const w = this.weapon;
    if (this.ammo >= w.mag || this.reserve <= 0) return;
    this.reloadTimer = w.reload;
    const need = w.mag - this.ammo;
    const take = Math.min(need, this.reserve);
    this.ammo += take; this.reserve -= take;
  }
  _useAbility() {
    if (this.abilityCd > 0) return;
    const a = this.ability; this.abilityCd = a.cd;
    if (this.classKey === 'medic') {
      this.health = Math.min(GAME.player.maxHealth, this.health + 60);
      this.allies.forEach(s => { if (s.alive && s.root.position.distanceTo(this.camera.position) < 25) s.hp = Math.min(s.maxHp, s.hp + 50); });
    } else if (this.classKey === 'engineer') {
      if (this.vehicle.alive && this.vehicle.group.position.distanceTo(this.camera.position) < 20)
        this.vehicle.health = Math.min(this.vehicle.maxHealth, this.vehicle.health + 250);
    } else if (this.classKey === 'assault') {
      const w = this.weapon; this.ammo = w.mag; this.reserve = w.reserve;
    } else if (this.classKey === 'recon') {
      this._spotTimer = 8; // 标记敌人高亮
    }
  }

  _muzzle() {
    return TMP_V.copy(this.camera.position).add(TMP_V2.copy(this._forward()).multiplyScalar(0.6)).clone();
  }
  _forward() { this.camera.getWorldDirection(TMP_V2); return TMP_V2.clone(); }

  shoot(auto = false) {
    const w = this.weapon;
    if (this.reloadTimer > 0) return;
    if (this.fireCooldown > 0) return;
    if (this.ammo <= 0) { this._reload(); return; }
    this.fireCooldown = w.fireRate;
    this.ammo--;
    this.recoil = Math.min(0.16, this.recoil + w.recoil);
    this.spread = Math.min(0.12, this.spread + w.spread * 1.6 + (this._moving ? 0.01 : 0));

    const origin = this._muzzle();
    const dir = this._forward();
    // 散布
    const sp = this.spread + (this.onGround ? 0 : 0.04);
    dir.x += (Math.random() - 0.5) * sp; dir.y += (Math.random() - 0.5) * sp; dir.z += (Math.random() - 0.5) * sp;
    dir.normalize();
    // 弹道下坠（距离越远落点越低）
    const drop = w.drop * 300;
    dir.y -= drop;
    dir.normalize();

    if (w.type === 'shotgun') {
      for (let i = 0; i < w.pellets; i++) {
        const d2 = dir.clone(); d2.x += (Math.random() - 0.5) * w.spread; d2.y += (Math.random() - 0.5) * w.spread; d2.z += (Math.random() - 0.5) * w.spread; d2.normalize();
        this._hitscan(origin, d2, w.damage, w.range, 0xcfd8dc);
      }
    } else {
      this._hitscan(origin, dir, w.damage, w.range, 0xffd27f);
    }
    this._flash(origin);
    this._sfx(w.type === 'bolt' ? 'shoot' : 'shoot');
  }

  _hitscan(origin, dir, damage, range, color) {
    const ray = new THREE.Raycaster(origin, dir, 0.1, range);
    const targets = [...this.worldMeshes]; this.enemies.forEach(e => { if (e.alive) e.parts.forEach(p => targets.push(p)); });
    const hits = ray.intersectObjects(targets, false);
    let end = origin.clone().add(dir.clone().multiplyScalar(range));
    if (hits.length) {
      const h = hits[0]; end = h.point.clone();
      const sol = h.object.userData.soldier;
      if (sol && sol.team === 'enemy' && sol.alive) {
        this._damageEnemy(sol, damage);
      } else if (h.object.userData.solidRef && h.object.userData.solidRef.destructible) {
        this._damageProp(h.object, damage);
      }
      this._spark(end, color);
    }
    this._tracer(origin, end, color);
  }

  _tracer(a, b, color) {
    const t = this.tracers.find(x => x.life <= 0) || this.tracers[0];
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const len = a.distanceTo(b);
    t.mesh.position.copy(mid);
    t.mesh.scale.set(1, len, 1);
    t.mesh.quaternion.setFromUnitVectors(UP, b.clone().sub(a).normalize());
    t.mesh.material.color.setHex(color); t.mesh.material.opacity = 0.9; t.mesh.visible = true;
    t.life = 0.06;
  }
  _spark(p, color) {
    const s = this.sparks.find(x => x.life <= 0) || this.sparks[0];
    s.mesh.position.copy(p); s.mesh.material.color.setHex(color); s.mesh.visible = true; s.life = 0.18;
    s.vel.set((Math.random() - 0.5) * 4, Math.random() * 4, (Math.random() - 0.5) * 4);
  }
  _flash(p) { this.muzzleLight.position.copy(p); this.muzzleLight.intensity = 3; }

  // -------------------------------------------------------------- 伤害
  _damageEnemy(s, dmg) {
    s.hp -= dmg; s.hitFlash = 0.12;
    if (s.hp <= 0 && s.alive) {
      s.alive = false; this.kills++; this.score += 100;
      this.tickets.enemy = Math.max(0, this.tickets.enemy - 10);
      this._ragdoll(s);
    }
  }
  _damageProp(mesh, dmg) {
    const ref = mesh.userData.solidRef;
    if (!ref.alive) return;
    ref.hp -= dmg;
    if (ref.hp <= 0) { ref.alive = false; this._shatter(mesh); }
  }
  _shatter(mesh) {
    const pos = mesh.position.clone(); const col = mesh.material.color ? mesh.material.color.getHex() : 0x888888;
    this.scene.remove(mesh);
    this.worldMeshes = this.worldMeshes.filter(m => m !== mesh);
    this.solidProps = this.solidProps.filter(m => m !== mesh);
    for (let i = 0; i < 8; i++) {
      const d = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), new THREE.MeshStandardMaterial({ color: col }));
      d.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 1.5, Math.random() * 1, (Math.random() - 0.5) * 1.5));
      d.castShadow = true; this.scene.add(d);
      this.debris.push({ mesh: d, vel: new THREE.Vector3((Math.random() - 0.5) * 5, Math.random() * 6 + 2, (Math.random() - 0.5) * 5), life: 3 });
    }
  }
  _ragdoll(s) {
    s.root.rotation.x = Math.PI / 2; s.root.position.y = 0.4;
    setTimeout(() => { this.scene.remove(s.root); }, 4000);
  }

  // -------------------------------------------------------------- 载具
  _toggleVehicle() {
    if (this.inVehicle) { this._exitVehicle(); return; }
    if (this.vehicle.alive && this.vehicle.group.position.distanceTo(this.camera.position) < 5) this._enterVehicle();
  }
  _enterVehicle() {
    this.inVehicle = true; this._exitingVehicle = true;
    this.health = GAME.player.maxHealth; // 进入载具视为上装甲
  }
  _exitVehicle() {
    this.inVehicle = false;
    const v = this.vehicle.group;
    this.camera.position.set(v.position.x + 3, GAME.player.eyeHeight, v.position.z + 3);
    setTimeout(() => { this._exitingVehicle = false; }, 50);
  }

  _fireCannon() {
    const v = this.vehicle; if (!v.alive || v.cooldown > 0) return;
    v.cooldown = GAME.vehicle.cannonCooldown;
    const dir = this._forward();
    const origin = v.barrel.getWorldPosition(new THREE.Vector3());
    const ray = new THREE.Raycaster(origin, dir, 0.1, 600);
    const targets = [...this.worldMeshes]; this.enemies.forEach(e => { if (e.alive) e.parts.forEach(p => targets.push(p)); });
    const hits = ray.intersectObjects(targets, false);
    let end = origin.clone().add(dir.clone().multiplyScalar(400));
    if (hits.length) { end = hits[0].point.clone(); const sol = hits[0].object.userData.soldier; if (sol && sol.alive) this._damageEnemy(sol, GAME.vehicle.cannonDamage); }
    // 溅射
    this.enemies.forEach(e => { if (e.alive && e.root.position.distanceTo(end) < GAME.vehicle.cannonSplash) this._damageEnemy(e, GAME.vehicle.cannonDamage * 0.6); });
    this._tracer(origin, end, 0xff7733); this._sfx('cannon'); this._spark(end, 0xff7733); this._sfx('explosion');
  }

  // -------------------------------------------------------------- AI
  _los(from, to) {
    const dir = to.clone().sub(from); const dist = dir.length(); dir.normalize();
    const ray = new THREE.Raycaster(from, dir, 0.1, dist - 1);
    const hits = ray.intersectObjects(this.worldMeshes, false);
    return hits.length === 0;
  }
  _updateSoldier(s, dt, isEnemy) {
    if (!s.alive) return;
    const target = isEnemy
      ? this._nearestOf(s, [this.playerProxy(), ...this.allies.filter(a => a.alive)])
      : this._nearestEnemy(s);
    s.strafeT -= dt; if (s.strafeT <= 0) { s.strafe *= -1; s.strafeT = 1.5 + Math.random() * 2; }
    if (target) {
      const to = target.position.clone().sub(s.root.position); to.y = 0; const dist = to.length(); to.normalize();
      const desired = isEnemy ? 38 : 45;
      const speed = isEnemy ? GAME.enemy.speed : GAME.squad.speed;
      let move = new THREE.Vector3();
      if (dist > desired + 6) move.add(to);
      else if (dist < desired - 8) move.sub(to);
      else move.add(new THREE.Vector3(-to.z, 0, to.x).multiplyScalar(s.strafe)); // 横向走位
      move.normalize().multiplyScalar(speed * dt);
      const np = s.root.position.clone().add(move);
      // 简单避障
      for (const p of this.solidProps) { const r = (p.userData.solidRef && p.userData.solidRef.radius) || 1; if (np.distanceTo(p.position) < r + 0.6) { np.add(np.clone().sub(p.position).setY(0).normalize().multiplyScalar(0.8)); } }
      np.x = THREE.MathUtils.clamp(np.x, -GAME.map.half, GAME.map.half); np.z = THREE.MathUtils.clamp(np.z, -GAME.map.half, GAME.map.half);
      s.root.position.copy(np);
      s.root.lookAt(target.position.x, s.root.position.y, target.position.z);
      // 开火
      s.fireCd -= dt;
      const eye = s.root.position.clone().add(new THREE.Vector3(0, 1.4, 0));
      const tEye = target.position.clone().add(new THREE.Vector3(0, 1.2, 0));
      if (dist < (isEnemy ? GAME.enemy.range : GAME.squad.range) && s.fireCd <= 0 && this._los(eye, tEye)) {
        s.fireCd = isEnemy ? GAME.enemy.fireRate : GAME.squad.fireRate;
        this._tracer(eye, tEye, isEnemy ? 0xff5544 : 0x66aaff);
        // 命中判定（基于距离概率，简化）
        const chance = isEnemy ? Math.max(0.15, 1 - dist / (GAME.enemy.range * 1.4)) * (1 - GAME.enemy.spread) : 0.7;
        if (Math.random() < chance) {
          const dmg = isEnemy ? GAME.enemy.damage : GAME.squad.damage;
          if (isEnemy) this._damagePlayer(dmg); else { const tgt = this._nearestEnemy(s); if (tgt) this._damageEnemy(tgt, dmg); }
        }
      }
    } else if (!isEnemy) {
      // 友军跟随玩家
      const pp = this.playerProxy();
      const off = s.root.position.clone().sub(pp); off.y = 0;
      if (off.length() > 6) { off.normalize().multiplyScalar(GAME.squad.speed * dt); s.root.position.add(off); }
    }
    if (s.hitFlash > 0) { s.hitFlash -= dt; s.parts.forEach(p => p.material.emissive && p.material.emissive.setHex(0xff0000)); }
  }
  _nearestEnemy(s) { let best = null, bd = 1e9; for (const e of this.enemies) { if (!e.alive) continue; const d = e.root.position.distanceTo(s.root.position); if (d < bd) { bd = d; best = e; } } return best; }
  _nearestOf(s, arr) { let best = null, bd = 1e9; for (const e of arr) { if (!e || (e.alive === false)) continue; const p = e.root ? e.root.position : e.position; const d = p.distanceTo(s.root.position); if (d < bd) { bd = d; best = e; } } return best; }
  playerProxy() { return { position: this.camera.position, alive: this.health > 0 }; }

  _damagePlayer(dmg) {
    if (this.inVehicle) return; // 载具内免伤
    this.health -= dmg; this._lastHit = this.time;
    if (this.health <= 0) { this.health = 0; this._end('defeat'); }
  }

  // -------------------------------------------------------------- 天气
  setWeather(key) {
    const w = GAME.weather[key]; if (!w) return;
    this.weatherKey = key;
    this.scene.fog.density = w.fog;
    this.sun.intensity = 2.2 * w.sun;
    if (!this.rain) {
      const geo = new THREE.BufferGeometry();
      const N = 3500; const pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) { pos[i * 3] = (Math.random() - 0.5) * 260; pos[i * 3 + 1] = Math.random() * 80; pos[i * 3 + 2] = (Math.random() - 0.5) * 260; }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      this.rain = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xaecadb, size: 0.25, transparent: true, opacity: 0.6 }));
      this.scene.add(this.rain);
    }
    this.rain.material.opacity = w.rain > 0 ? 0.6 : 0; this.rain.visible = w.rain > 0;
    this.rainCount = w.rain; this.wind = w.wind;
  }

  // -------------------------------------------------------------- 据点 / 胜负
  _updateCapture(dt) {
    for (const cp of this.capturePoints) {
      let p = 0, e = 0;
      if (this.camera.position.distanceTo(cp.group.position) < cp.radius) p++;
      this.allies.forEach(a => { if (a.alive && a.root.position.distanceTo(cp.group.position) < cp.radius) p++; });
      this.enemies.forEach(en => { if (en.alive && en.root.position.distanceTo(cp.group.position) < cp.radius) e++; });
      const dir = p > e ? 1 : e > p ? -1 : 0;
      if (dir !== 0 && !(p > 0 && e > 0)) cp.progress = THREE.MathUtils.clamp(cp.progress + dir * dt * 0.25, -1, 1);
      if (cp.progress >= 1 && cp.owner !== 'player') { cp.owner = 'player'; }
      if (cp.progress <= -1 && cp.owner !== 'enemy') { cp.owner = 'enemy'; }
      if (cp.progress > -1 && cp.progress < 1) { if (p === 0 && e === 0) cp.owner = 'neutral'; }
      const col = cp.owner === 'player' ? 0x3fa7ff : cp.owner === 'enemy' ? 0xff4444 : 0x888888;
      cp.flagMat.color.setHex(col); cp.ring.material.color.setHex(col); cp.beam.material.color.setHex(col);
    }
    // 兵力值：占点方缓慢恢复，丢失则衰减
    const pOwned = this.capturePoints.filter(c => c.owner === 'player').length;
    const eOwned = this.capturePoints.filter(c => c.owner === 'enemy').length;
    this.tickets.player = Math.min(GAME.tickets.player, this.tickets.player + (pOwned - eOwned) * GAME.tickets.captureRate * dt);
    this.tickets.enemy = Math.max(0, this.tickets.enemy - (pOwned - eOwned) * GAME.tickets.captureRate * dt);
    if (this.tickets.enemy <= 0) this._end('victory');
    if (this.tickets.player <= 0) this._end('defeat');
  }

  _end(result) {
    if (this.ended) return;
    this.ended = true; this.running = false;
    try { this.controls.unlock(); } catch (e) {}
    this.onEnd({ result, score: this.score, kills: this.kills });
  }

  // -------------------------------------------------------------- 主循环
  start(classKey) {
    this.classKey = classKey || 'assault';
    const w = this.weapon; this.ammo = w.mag; this.reserve = w.reserve;
    this.health = GAME.player.maxHealth; this.score = 0; this.kills = 0;
    this.tickets = { player: GAME.tickets.player, enemy: GAME.enemy.tickets };
    this.ended = false; this.paused = false; this.running = true;
    this.abilityCd = 0; this._lastHit = -99; this._spotTimer = 0;
    this.controls.lock();
  }
  pause() { if (this.ended) return; this.paused = true; this.onPause(); }
  resume() { this.paused = false; this.controls.lock(); }

  _animate() {
    this._raf = requestAnimationFrame(this._animate);
    const dt = Math.min(0.05, this.clock.getDelta());
    if (this.running && !this.paused) this._update(dt);
    this.renderer.render(this.scene, this.camera);
  }

  _update(dt) {
    this.time += dt;
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.reloadTimer = Math.max(0, this.reloadTimer - dt);
    this.abilityCd = Math.max(0, this.abilityCd - dt);
    this.recoil = Math.max(0, this.recoil - dt * 0.6);
    this.spread = Math.max(this.weapon.spread, this.spread - dt * 0.05);
    if (this._spotTimer > 0) this._spotTimer -= dt;

    if (this.inVehicle) this._updateVehicle(dt); else this._updatePlayer(dt);

    // 开火（玩家）
    if (!this.inVehicle && this.mouseDown && this.fireCooldown <= 0) {
      this._moving = (this.keys['KeyW'] || this.keys['KeyA'] || this.keys['KeyS'] || this.keys['KeyD']) && this.onGround;
      this.shoot();
    }
    // 狙击镜
    const wantScope = this.weapon.scope && this.rightDown;
    const targetFov = wantScope ? 75 / this.weapon.scope : 75;
    if (Math.abs(this.camera.fov - targetFov) > 0.5) { this.camera.fov += (targetFov - this.camera.fov) * 0.3; this.camera.updateProjectionMatrix(); }

    // 后坐：抬枪口
    this.camera.rotation.x = (this.camera.rotation.x || 0); // 由 PointerLockControls 控制，叠加体现
    this._applyRecoil();

    // 敌人/友军 AI
    this.enemies.forEach(e => this._updateSoldier(e, dt, true));
    this.allies.forEach(a => this._updateSoldier(a, dt, false));
    // 敌军补充（维持战斗规模）
    if (this.enemies.filter(e => e.alive).length < 4) this._spawnReinforcements();

    // 敌方坦克
    this._updateEnemyTank(dt);

    // 天气
    this._updateWeather(dt);

    // 对象池衰减
    this._updatePooled(dt);

    // 据点/胜负
    this._updateCapture(dt);

    // 脱战回血
    if (this.health > 0 && this.time - this._lastHit > GAME.player.regenDelay && !this.inVehicle)
      this.health = Math.min(GAME.player.maxHealth, this.health + GAME.player.regenRate * dt);

    this._emitHUD();
  }

  _applyRecoil() {
    // 通过相机俯仰叠加（PointerLockControls 写入 camera.rotation）
    const r = this.recoil;
    if (r > 0) { this.camera.rotateX(-r * 0.5); }
  }

  _updatePlayer(dt) {
    const p = GAME.player;
    const speed = this.keys['ShiftLeft'] ? p.runSpeed : p.walkSpeed;
    const fwd = (this.keys['KeyW'] ? 1 : 0) - (this.keys['KeyS'] ? 1 : 0);
    const str = (this.keys['KeyD'] ? 1 : 0) - (this.keys['KeyA'] ? 1 : 0);
    if (fwd) this.controls.moveForward(fwd * speed * dt);
    if (str) this.controls.moveRight(str * speed * dt);
    // 跳跃 / 重力
    if (this.keys['Space'] && this.onGround) { this.vy = p.jumpSpeed; this.onGround = false; }
    this.vy -= p.gravity * dt;
    this.camera.position.y += this.vy * dt;
    if (this.camera.position.y <= p.eyeHeight) { this.camera.position.y = p.eyeHeight; this.vy = 0; this.onGround = true; }
    // 边界 + 碰撞
    this._collidePlayer();
    this.camera.position.x = THREE.MathUtils.clamp(this.camera.position.x, -GAME.map.half, GAME.map.half);
    this.camera.position.z = THREE.MathUtils.clamp(this.camera.position.z, -GAME.map.half, GAME.map.half);
  }

  _collidePlayer() {
    const r = GAME.player.radius;
    for (const m of this.solidProps) {
      const ref = m.userData.solidRef; if (!ref || !ref.alive) continue;
      const pr = ref.radius || 1;
      const dx = this.camera.position.x - m.position.x, dz = this.camera.position.z - m.position.z;
      const d = Math.hypot(dx, dz); const min = r + pr;
      if (d < min && d > 0.0001) {
        const push = (min - d);
        this.camera.position.x += (dx / d) * push; this.camera.position.z += (dz / d) * push;
      }
    }
  }

  _updateVehicle(dt) {
    const v = this.vehicle; if (!v.alive) return;
    const cfg = GAME.vehicle;
    v.cooldown = Math.max(0, v.cooldown - dt); v.mgCd = Math.max(0, v.mgCd - dt);
    const g = v.group;
    if (this.keys['KeyW']) v.speed += cfg.speed * dt;
    else if (this.keys['KeyS']) v.speed -= cfg.reverse * dt;
    else v.speed *= 0.92;
    v.speed = THREE.MathUtils.clamp(v.speed, -cfg.reverse, cfg.speed);
    if (this.keys['KeyA']) v.heading += cfg.turn * dt;
    if (this.keys['KeyD']) v.heading -= cfg.turn * dt;
    g.rotation.y = v.heading;
    g.position.x -= Math.sin(v.heading) * v.speed * dt;
    g.position.z -= Math.cos(v.heading) * v.speed * dt;
    g.position.x = THREE.MathUtils.clamp(g.position.x, -GAME.map.half, GAME.map.half);
    g.position.z = THREE.MathUtils.clamp(g.position.z, -GAME.map.half, GAME.map.half);
    // 炮塔跟随视角
    const yaw = Math.atan2(this._forward().x, this._forward().z);
    v.turret.rotation.y = yaw - v.heading;
    g.updateMatrixWorld(true);
    // 相机置于炮塔
    const tp = v.turret.getWorldPosition(new THREE.Vector3());
    this.camera.position.copy(tp).add(new THREE.Vector3(0, 0.4, 0));
    // 武器
    if (this.mouseDown) { if (v.cooldown <= 0) this._fireCannon(); if (v.mgCd <= 0) { v.mgCd = cfg.mgFireRate; this._mgFire(); } }
  }
  _mgFire() {
    const dir = this._forward(); const origin = this.vehicle.barrel.getWorldPosition(new THREE.Vector3());
    const d = dir.clone(); d.x += (Math.random() - 0.5) * GAME.vehicle.mgSpread; d.y += (Math.random() - 0.5) * GAME.vehicle.mgSpread; d.normalize();
    const ray = new THREE.Raycaster(origin, d, 0.1, 300);
    const targets = [...this.worldMeshes]; this.enemies.forEach(e => { if (e.alive) e.parts.forEach(p => targets.push(p)); });
    const hits = ray.intersectObjects(targets, false);
    let end = origin.clone().add(d.clone().multiplyScalar(250));
    if (hits.length) { end = hits[0].point.clone(); const sol = hits[0].object.userData.soldier; if (sol && sol.alive) this._damageEnemy(sol, GAME.vehicle.mgDamage); }
    this._tracer(origin, end, 0xffd27f); this._sfx('mg');
  }

  _updateEnemyTank(dt) {
    const t = this.enemyTank; if (!t.alive) return;
    const pp = this.playerProxy().position;
    const to = pp.clone().sub(t.group.position); const yaw = Math.atan2(to.x, to.z);
    t.turret.rotation.y = yaw - t.group.rotation.y;
    t.group.updateMatrixWorld(true);
    t.cooldown -= dt;
    if (t.cooldown <= 0 && t.group.position.distanceTo(pp) < 200 && this._los(t.barrel.getWorldPosition(new THREE.Vector3()), pp.clone().add(new THREE.Vector3(0, 1.2, 0)))) {
      t.cooldown = 3.2;
      const dir = pp.clone().add(new THREE.Vector3(0, 1.2, 0)).sub(t.barrel.getWorldPosition(new THREE.Vector3())).normalize();
      const end = pp.clone().add(new THREE.Vector3(0, 1.2, 0));
      this._tracer(t.barrel.getWorldPosition(new THREE.Vector3()), end, 0xff7733); this._sfx('cannon'); this._sfx('explosion');
      if (this.inVehicle) { /* 载具免伤 */ } else this._damagePlayer(28);
      // 溅射附近敌人友军无伤
    }
  }

  _spawnReinforcements() {
    const a = Math.random() * Math.PI * 2, r = 70 + Math.random() * 40;
    const s = this._spawnSoldier('enemy', new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r - 20));
  }

  _updateWeather(dt) {
    if (this.rain && this.rain.visible) {
      const pos = this.rain.geometry.attributes.position;
      const arr = pos.array; const cam = this.camera.position;
      for (let i = 0; i < this.rainCount; i++) {
        arr[i * 3 + 1] -= (40 + this.wind * 20) * dt;
        arr[i * 3] += this.wind * 8 * dt;
        if (arr[i * 3 + 1] < 0) { arr[i * 3] = cam.x + (Math.random() - 0.5) * 260; arr[i * 3 + 1] = 60 + Math.random() * 20; arr[i * 3 + 2] = cam.z + (Math.random() - 0.5) * 260; }
      }
      pos.needsUpdate = true;
    }
    this.muzzleLight.intensity = Math.max(0, this.muzzleLight.intensity - dt * 30);
    if (this._spotTimer > 0) this.enemies.forEach(e => { if (e.alive) e.parts.forEach(p => p.material.emissive && p.material.emissive.setHex(0x442200)); });
  }

  _updatePooled(dt) {
    for (const t of this.tracers) { if (t.life > 0) { t.life -= dt; t.mesh.material.opacity = Math.max(0, t.life / 0.06 * 0.9); if (t.life <= 0) t.mesh.visible = false; } }
    for (const s of this.sparks) { if (s.life > 0) { s.life -= dt; s.mesh.position.addScaledVector(s.vel, dt); s.vel.y -= 12 * dt; s.mesh.material.opacity = Math.max(0, s.life / 0.18); if (s.life <= 0) s.mesh.visible = false; } }
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i]; d.life -= dt; d.vel.y -= 22 * dt; d.mesh.position.addScaledVector(d.vel, dt);
      if (d.mesh.position.y < 0.15) { d.mesh.position.y = 0.15; d.vel.set(0, 0, 0); }
      if (d.life <= 0) { this.scene.remove(d.mesh); this.debris.splice(i, 1); }
    }
    // 命中闪白恢复
    this.soldiers.forEach(s => { if (s.alive && s.hitFlash <= 0) s.parts.forEach(p => p.material.emissive && p.material.emissive.setHex(0x000000)); });
  }

  _emitHUD() {
    const w = this.weapon;
    const blips = [];
    this.enemies.forEach(e => { if (e.alive) blips.push({ x: e.root.position.x, z: e.root.position.z, t: 'e', s: this._spotTimer > 0 }); });
    this.allies.forEach(a => { if (a.alive) blips.push({ x: a.root.position.x, z: a.root.position.z, t: 'a' }); });
    this.capturePoints.forEach(c => blips.push({ x: c.pos[0], z: c.pos[2], t: 'c', owner: c.owner }));
    blips.push({ x: this.camera.position.x, z: this.camera.position.z, t: 'p' });
    this.onHUD({
      health: Math.round(this.health), maxHealth: GAME.player.maxHealth,
      ammo: this.ammo, mag: w.mag, reserve: this.reserve,
      className: GAME.classes[this.classKey].name, classColor: GAME.classes[this.classKey].color,
      abilityName: this.ability.name, abilityCd: this.abilityCd, abilityMax: this.ability.cd,
      score: this.score, kills: this.kills,
      tickets: this.tickets,
      points: this.capturePoints.map(c => ({ id: c.id, name: c.name, owner: c.owner, progress: c.progress })),
      weather: GAME.weather[this.weatherKey].label,
      inVehicle: this.inVehicle, vehicleHealth: this.vehicle.alive ? Math.round(this.vehicle.health) : 0,
      blips, mapHalf: GAME.map.half,
    });
  }

  // -------------------------------------------------------------- 销毁
  dispose() {
    if (this._raf) cancelAnimationFrame(this._raf);
    window.removeEventListener('keydown', this._listeners.keydown);
    window.removeEventListener('keyup', this._listeners.keyup);
    this.renderer.domElement.removeEventListener('mousedown', this._listeners.mousedown);
    window.removeEventListener('mouseup', this._listeners.mouseup);
    window.removeEventListener('contextmenu', this._listeners.contextmenu);
    window.removeEventListener('resize', this._listeners.resize);
    try { this.controls.disconnect(); } catch (e) {}
    if (this.audio) this.audio.close();
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode) this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
  }
}
