import * as THREE from 'three'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import { GAME } from '../config/game.js'

// 第一人称射击引擎（基于 Three.js）。
// 通过 callbacks 把状态/事件回传给 React（HUD、菜单、结束界面）。
export class FPSGame {
  constructor(container, callbacks = {}) {
    this.container = container
    this.cb = callbacks // { onStats, onHit, onKill, onWave, onGameOver, onLockChange }
    this.running = false
    this.paused = false
    this.gameOver = false
    this.keys = Object.create(null)
    this.enemies = []
    this.enemyMeshes = []
    this.obstacles = []   // { box: THREE.Box3 }
    this.crateMeshes = []
    this.score = 0
    this.wave = 0
    this.health = GAME.player.maxHealth
    this.ammo = GAME.weapon.magazine
    this.reloading = false
    this.lastShot = 0
    this.waveCooldown = 0
    this.waitingNextWave = false
    this.muzzleT = 0
    this._lastStats = ''
    this.clock = new THREE.Clock()
    this._raf = 0
    this._vy = 0
    this._onGround = true
    this._audCtx = null
    this._tmpV = new THREE.Vector3()

    this._init()
  }

  _init() {
    const w = this.container.clientWidth || window.innerWidth
    const h = this.container.clientHeight || window.innerHeight

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(w, h)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.container.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x05060a)
    this.scene.fog = new THREE.FogExp2(0x05060a, 0.018)

    this.camera = new THREE.PerspectiveCamera(78, w / h, 0.1, 1000)
    this.camera.position.set(0, GAME.player.eyeHeight, 0)

    this._buildLights()
    this._buildArena()
    this._buildGun()
    this._buildCrosshairRay()

    this.controls = new PointerLockControls(this.camera, this.renderer.domElement)
    this.controls.addEventListener('lock', () => {
      this.paused = false
      this.cb.onLockChange?.(true)
    })
    this.controls.addEventListener('unlock', () => {
      if (!this.gameOver) this.paused = true
      this.cb.onLockChange?.(false)
    })

    this._onKeyDown = (e) => this._handleKey(e, true)
    this._onKeyUp = (e) => this._handleKey(e, false)
    this._onMouseDown = (e) => { if (e.button === 0) this.shoot() }
    this._onResize = () => this._resize()
    window.addEventListener('keydown', this._onKeyDown)
    window.addEventListener('keyup', this._onKeyUp)
    this.renderer.domElement.addEventListener('mousedown', this._onMouseDown)
    window.addEventListener('resize', this._onResize)
  }

  _buildLights() {
    this.scene.add(new THREE.HemisphereLight(0x8899ff, 0x080810, 0.6))
    this.scene.add(new THREE.AmbientLight(0x404060, 0.5))
    const dir = new THREE.DirectionalLight(0xa0c0ff, 0.5)
    dir.position.set(10, 30, 10)
    dir.castShadow = true
    dir.shadow.mapSize.set(1024, 1024)
    dir.shadow.camera.left = -40; dir.shadow.camera.right = 40
    dir.shadow.camera.top = 40; dir.shadow.camera.bottom = -40
    this.scene.add(dir)
    // 跟随玩家的霓虹点光，提升近处可见度
    this.playerLight = new THREE.PointLight(0x33ddff, 0.7, 30, 2)
    this.playerLight.position.set(0, 4, 0)
    this.scene.add(this.playerLight)
  }

  _buildArena() {
    const s = GAME.arena.size
    const half = s / 2

    const floorMat = new THREE.MeshStandardMaterial({ color: 0x0b0e16, roughness: 0.9, metalness: 0.1 })
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(s, s), floorMat)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    this.scene.add(floor)

    const grid = new THREE.GridHelper(s, s / 2, 0x1f6feb, 0x123456)
    grid.position.y = 0.02
    grid.material.opacity = 0.35
    grid.material.transparent = true
    this.scene.add(grid)

    // 边界墙（视觉）
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x121a2e, roughness: 0.7, metalness: 0.2, emissive: 0x0a1530, emissiveIntensity: 0.4 })
    const wallGeo = new THREE.BoxGeometry(s, GAME.arena.wallHeight, 1)
    const positions = [
      [0, GAME.arena.wallHeight / 2, -half],
      [0, GAME.arena.wallHeight / 2, half],
      [-half, GAME.arena.wallHeight / 2, 0],
      [half, GAME.arena.wallHeight / 2, 0],
    ]
    for (const [x, y, z] of positions) {
      const m = new THREE.Mesh(wallGeo, wallMat)
      m.position.set(x, y, z)
      if (x !== 0) m.rotation.y = Math.PI / 2
      m.receiveShadow = true
      this.scene.add(m)
    }

    // 霓虹边框线
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x22d3ee })
    const pts = [
      new THREE.Vector3(-half, 0.05, -half), new THREE.Vector3(half, 0.05, -half),
      new THREE.Vector3(half, 0.05, half), new THREE.Vector3(-half, 0.05, half),
      new THREE.Vector3(-half, 0.05, -half),
    ]
    const edge = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), edgeMat)
    this.scene.add(edge)

    // 障碍物（箱子）
    const crateMat = new THREE.MeshStandardMaterial({ color: 0x1b2540, roughness: 0.6, metalness: 0.3, emissive: 0x102040, emissiveIntensity: 0.5 })
    for (let i = 0; i < GAME.crates; i++) {
      const cw = 1.6 + Math.random() * 1.8
      const ch = 1.2 + Math.random() * 2.2
      const cd = 1.6 + Math.random() * 1.8
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(cw, ch, cd), crateMat)
      let x, z, ok = false, tries = 0
      while (!ok && tries++ < 30) {
        x = (Math.random() - 0.5) * (s - 10)
        z = (Math.random() - 0.5) * (s - 10)
        ok = Math.hypot(x, z) > 5 // 出生点附近留空
        if (ok) for (const o of this.obstacles) {
          const b = o.box
          if (Math.abs(x - (b.min.x + b.max.x) / 2) < (cw + (b.max.x - b.min.x)) / 2 + 1 &&
              Math.abs(z - (b.min.z + b.max.z) / 2) < (cd + (b.max.z - b.min.z)) / 2 + 1) { ok = false; break }
        }
      }
      mesh.position.set(x, ch / 2, z)
      mesh.castShadow = true
      mesh.receiveShadow = true
      this.scene.add(mesh)
      this.crateMeshes.push(mesh)
      const box = new THREE.Box3().setFromObject(mesh)
      this.obstacles.push({ box })
    }
  }

  _buildGun() {
    const gun = new THREE.Group()
    const dark = new THREE.MeshStandardMaterial({ color: 0x2a2f3a, roughness: 0.5, metalness: 0.7 })
    const accent = new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0aa, emissiveIntensity: 0.8, roughness: 0.3 })

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.42), dark)
    body.position.set(0, 0, -0.1)
    const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.5), dark)
    barrel.position.set(0, 0.02, -0.45)
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.12), dark)
    grip.position.set(0, -0.16, 0.05)
    grip.rotation.x = 0.25
    const sight = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.06, 0.03), accent)
    sight.position.set(0, 0.1, -0.1)
    const tip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.06), accent)
    tip.position.set(0, 0.02, -0.7)
    gun.add(body, barrel, grip, sight, tip)

    // 枪口闪光
    this.muzzle = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffee88 })
    )
    this.muzzle.position.set(0, 0.02, -0.78)
    this.muzzle.visible = false
    gun.add(this.muzzle)
    this.muzzleLight = new THREE.PointLight(0xffdd66, 0, 6, 2)
    this.muzzleLight.position.copy(this.muzzle.position)
    gun.add(this.muzzleLight)

    gun.position.set(0.32, -0.28, -0.55)
    this.gun = gun
    this.camera.add(gun)
    this.scene.add(this.camera)
  }

  _buildCrosshairRay() {
    this.raycaster = new THREE.Raycaster()
    this.raycaster.far = GAME.weapon.range
  }

  // ---- 输入 ----
  _handleKey(e, down) {
    this.keys[e.code] = down
    if (down && e.code === 'KeyR') this.reload()
  }

  lock() { this.controls.lock() }
  unlock() { if (this.controls.isLocked) this.controls.unlock() }

  shoot() {
    if (!this.controls.isLocked || this.reloading || this.gameOver) return
    const now = performance.now()
    if (now - this.lastShot < GAME.weapon.fireRate) return
    if (this.ammo <= 0) { this._sfx('empty'); return }
    this.ammo--
    this.lastShot = now
    this._sfx('shoot')

    this.muzzle.visible = true
    this.muzzleLight.intensity = 3
    this.muzzleT = now + 60

    // 射线检测：敌人优先于箱子（被箱子挡住则无效）
    this.raycaster.setFromCamera({ x: 0, y: 0 }, this.camera)
    const targets = this.enemyMeshes.concat(this.crateMeshes)
    const hits = this.raycaster.intersectObjects(targets, false)
    if (hits.length) {
      const obj = hits[0].object
      const enemy = obj.userData.enemy
      if (enemy && enemy.alive) {
        enemy.hp -= GAME.weapon.damage
        if (enemy.hp <= 0) this._killEnemy(enemy)
        else this.cb.onHit?.(enemy.mesh.position.clone())
      }
    }
    this._emitStats()
  }

  reload() {
    if (this.reloading || this.ammo === GAME.weapon.magazine || this.gameOver) return
    this.reloading = true
    this._sfx('reload')
    setTimeout(() => {
      if (this._disposed) return
      this.ammo = GAME.weapon.magazine
      this.reloading = false
      this._emitStats()
    }, GAME.weapon.reloadTime)
  }

  _killEnemy(enemy) {
    enemy.alive = false
    this.score += GAME.enemy.points
    const idx = this.enemies.indexOf(enemy)
    if (idx >= 0) this.enemies.splice(idx, 1)
    const midx = this.enemyMeshes.indexOf(enemy.mesh)
    if (midx >= 0) this.enemyMeshes.splice(midx, 1)
    this.scene.remove(enemy.mesh)
    enemy.mesh.geometry.dispose()
    this.cb.onKill?.(enemy.mesh.position.clone())
    this._emitStats()
  }

  // ---- 波次 ----
  _startWave(n) {
    this.wave = n
    const count = GAME.wave.baseEnemies + (n - 1) * GAME.wave.step
    const s = GAME.arena.size / 2 - 3
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2
      const r = s * (0.6 + Math.random() * 0.4)
      const x = Math.cos(ang) * r
      const z = Math.sin(ang) * r
      this._spawnEnemy(x, z, n)
    }
    this.waitingNextWave = false
    this.cb.onWave?.(n)
    this._emitStats()
  }

  _spawnEnemy(x, z, wave) {
    const grp = new THREE.Group()
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xff2d55, emissive: 0xff0033, emissiveIntensity: 0.7, roughness: 0.4 })
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.6, 0), bodyMat)
    body.castShadow = true
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xffee66 })
    )
    eye.position.set(0, 0, 0.5)
    grp.add(body, eye)
    grp.position.set(x, GAME.enemy.hoverY, z)
    this.scene.add(grp)

    const enemy = {
      mesh: grp,
      body,
      hp: GAME.enemy.hp,
      speed: GAME.enemy.baseSpeed + (wave - 1) * GAME.enemy.speedPerWave,
      alive: true,
      spin: Math.random() * Math.PI,
    }
    grp.userData.enemy = enemy
    body.userData.enemy = enemy
    this.enemies.push(enemy)
    this.enemyMeshes.push(grp)
  }

  // ---- 更新 ----
  _update(dt) {
    this._updatePlayer(dt)
    this._updateEnemies(dt)
    this._updateWaves(dt)

    const now = performance.now()
    if (this.muzzle.visible && now > this.muzzleT) { this.muzzle.visible = false; this.muzzleLight.intensity = 0 }

    this.playerLight.position.set(this.camera.position.x, this.camera.position.y + 3, this.camera.position.z)
    this._emitStats()
  }

  _updatePlayer(dt) {
    const p = GAME.player
    const fwd = (this.keys['KeyW'] ? 1 : 0) - (this.keys['KeyS'] ? 1 : 0)
    const right = (this.keys['KeyD'] ? 1 : 0) - (this.keys['KeyA'] ? 1 : 0)
    const sprint = (this.keys['ShiftLeft'] || this.keys['ShiftRight']) ? p.sprintMul : 1
    const speed = p.speed * sprint * dt
    if (fwd) this.controls.moveForward(fwd * speed)
    if (right) this.controls.moveRight(right * speed)

    // 跳跃 / 重力
    if (this.keys['Space'] && this._onGround) { this._vy = p.jumpSpeed; this._onGround = false }
    this._vy -= p.gravity * dt
    this.camera.position.y += this._vy * dt
    if (this.camera.position.y <= p.eyeHeight) { this.camera.position.y = p.eyeHeight; this._vy = 0; this._onGround = true }

    this._collide(this.camera.position)
  }

  _collide(pos) {
    const r = GAME.player.radius
    const half = GAME.arena.size / 2 - r - 0.6
    pos.x = Math.max(-half, Math.min(half, pos.x))
    pos.z = Math.max(-half, Math.min(half, pos.z))
    for (const o of this.obstacles) {
      const b = o.box
      const qx = Math.max(b.min.x, Math.min(pos.x, b.max.x))
      const qz = Math.max(b.min.z, Math.min(pos.z, b.max.z))
      let dx = pos.x - qx
      let dz = pos.z - qz
      const d2 = dx * dx + dz * dz
      if (d2 < r * r) {
        if (d2 > 1e-6) {
          const d = Math.sqrt(d2)
          const push = r - d
          pos.x += (dx / d) * push
          pos.z += (dz / d) * push
        } else {
          const left = pos.x - b.min.x, right2 = b.max.x - pos.x
          const back = pos.z - b.min.z, front = b.max.z - pos.z
          const m = Math.min(left, right2, back, front)
          if (m === left) pos.x = b.min.x - r
          else if (m === right2) pos.x = b.max.x + r
          else if (m === back) pos.z = b.min.z - r
          else pos.z = b.max.z + r
        }
      }
    }
  }

  _updateEnemies(dt) {
    const pp = this.camera.position
    for (const e of this.enemies) {
      e.spin += dt * 2
      e.mesh.rotation.y = e.spin
      const dx = pp.x - e.mesh.position.x
      const dz = pp.z - e.mesh.position.z
      const dist = Math.hypot(dx, dz) || 1
      if (dist > GAME.enemy.contactDist) {
        e.mesh.position.x += (dx / dist) * e.speed * dt
        e.mesh.position.z += (dz / dist) * e.speed * dt
        e.mesh.lookAt(pp.x, e.mesh.position.y, pp.z)
      } else {
        this.health -= GAME.enemy.contactDamage * dt
        if (this.health <= 0) { this.health = 0; this._end(); return }
      }
    }
  }

  _updateWaves(dt) {
    if (this.enemies.length === 0) {
      if (!this.waitingNextWave) {
        this.waitingNextWave = true
        this.waveCooldown = GAME.wave.cooldown
      }
      this.waveCooldown -= dt
      if (this.waveCooldown <= 0) this._startWave(this.wave + 1)
    }
  }

  _end() {
    if (this.gameOver) return
    this.gameOver = true
    this.unlock()
    this.cb.onGameOver?.({ score: this.score, wave: this.wave })
  }

  _emitStats() {
    const stats = {
      health: Math.ceil(this.health),
      maxHealth: GAME.player.maxHealth,
      score: this.score,
      ammo: this.ammo,
      magazine: GAME.weapon.magazine,
      reloading: this.reloading,
      wave: this.wave,
      enemiesLeft: this.enemies.length,
    }
    const key = JSON.stringify(stats)
    if (key !== this._lastStats) {
      this._lastStats = key
      this.cb.onStats?.(stats)
    }
  }

  // ---- 生命周期 ----
  start() {
    if (this.running) return
    this.running = true
    this.clock.start()
    this._loop()
  }

  reset() {
    for (const e of this.enemies) { this.scene.remove(e.mesh); e.mesh.geometry.dispose() }
    this.enemies = []
    this.enemyMeshes = []
    this.score = 0
    this.wave = 0
    this.health = GAME.player.maxHealth
    this.ammo = GAME.weapon.magazine
    this.reloading = false
    this.gameOver = false
    this.paused = false
    this._vy = 0
    this._onGround = true
    this.camera.position.set(0, GAME.player.eyeHeight, 0)
    this._lastStats = ''
    this._startWave(1)
    this._emitStats()
  }

  _loop() {
    if (!this.running) return
    this._raf = requestAnimationFrame(() => this._loop())
    const dt = Math.min(this.clock.getDelta(), 0.05)
    if (!this.paused && !this.gameOver) this._update(dt)
    this.renderer.render(this.scene, this.camera)
  }

  _resize() {
    const w = this.container.clientWidth || window.innerWidth
    const h = this.container.clientHeight || window.innerHeight
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
  }

  // ---- 简单音效（WebAudio，失败静默） ----
  _sfx(type) {
    try {
      if (!this._audCtx) this._audCtx = new (window.AudioContext || window.webkitAudioContext)()
      const ctx = this._audCtx
      if (ctx.state === 'suspended') ctx.resume()
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.connect(g); g.connect(ctx.destination)
      const t = ctx.currentTime
      if (type === 'shoot') {
        o.type = 'square'; o.frequency.setValueAtTime(420, t); o.frequency.exponentialRampToValueAtTime(120, t + 0.08)
        g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.1)
        o.start(t); o.stop(t + 0.1)
      } else if (type === 'hit') {
        o.type = 'sine'; o.frequency.setValueAtTime(880, t); g.gain.setValueAtTime(0.08, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.12)
        o.start(t); o.stop(t + 0.12)
      } else if (type === 'reload') {
        o.type = 'triangle'; o.frequency.setValueAtTime(200, t); g.gain.setValueAtTime(0.05, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.15)
        o.start(t); o.stop(t + 0.15)
      } else if (type === 'empty') {
        o.type = 'square'; o.frequency.setValueAtTime(120, t); g.gain.setValueAtTime(0.05, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05)
        o.start(t); o.stop(t + 0.05)
      }
    } catch (_) { /* 忽略音频错误 */ }
  }

  playHit() { this._sfx('hit') }

  dispose() {
    this._disposed = true
    this.running = false
    cancelAnimationFrame(this._raf)
    window.removeEventListener('keydown', this._onKeyDown)
    window.removeEventListener('keyup', this._onKeyUp)
    this.renderer.domElement.removeEventListener('mousedown', this._onMouseDown)
    window.removeEventListener('resize', this._onResize)
    this.controls.dispose?.()
    this.renderer.dispose()
    if (this.renderer.domElement.parentNode) this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)
  }
}
