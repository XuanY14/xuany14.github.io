// ============================================================================
//  真实战场配置 —— 所有可调参数集中在此，改这里即可调整手感/难度/规模
// ============================================================================

export const GAME = {
  title: 'OPERATION FRONTLINE',
  subtitle: '战术行动 · 写实第一人称射击',
  // 地图（正方形，单位：米）。half = 半边长
  map: { half: 130, groundSegments: 120 },

  player: {
    eyeHeight: 1.7,
    radius: 0.4,
    walkSpeed: 5.2,
    runSpeed: 8.6,
    crouchSpeed: 2.6,
    jumpSpeed: 6.2,
    gravity: 22,
    maxHealth: 100,
    regenDelay: 6, // 秒，脱战后开始回血
    regenRate: 8, // 每秒
  },

  // 四类兵种：武器 + 专属技能
  classes: {
    assault: {
      name: '突击兵',
      color: '#d9a441',
      weapon: { name: 'M4 突击步枪', type: 'auto', mag: 30, reserve: 180, damage: 26, fireRate: 0.095, spread: 0.012, range: 320, reload: 2.1, drop: 0.0006, recoil: 0.022, auto: true },
      ability: { key: 'Q', name: '补给弹药', cd: 25, desc: '立即补满弹匣与备弹' },
    },
    medic: {
      name: '医疗兵',
      color: '#5fb0e0',
      weapon: { name: 'MP5 冲锋枪', type: 'auto', mag: 25, reserve: 150, damage: 19, fireRate: 0.08, spread: 0.018, range: 220, reload: 1.9, drop: 0.0009, recoil: 0.018, auto: true },
      ability: { key: 'Q', name: '战地救治', cd: 18, desc: '治疗自己及周围队友' },
    },
    engineer: {
      name: '工程兵',
      color: '#7bbf6a',
      weapon: { name: 'M870 霰弹枪', type: 'shotgun', mag: 8, reserve: 48, damage: 14, pellets: 8, fireRate: 0.8, spread: 0.06, range: 70, reload: 2.8, drop: 0.004, recoil: 0.06, auto: false },
      ability: { key: 'Q', name: '维修载具', cd: 12, desc: '修复附近载具装甲' },
    },
    recon: {
      name: '侦察兵',
      color: '#c77dff',
      weapon: { name: 'M24 狙击枪', type: 'bolt', mag: 5, reserve: 30, damage: 95, fireRate: 1.1, spread: 0.0015, range: 600, reload: 2.6, drop: 0.0, recoil: 0.09, auto: false, scope: 3.2 },
      ability: { key: 'Q', name: '标记敌军', cd: 14, desc: '高亮显示附近敌人位置' },
    },
  },

  squad: { allies: 3, health: 80, speed: 5.0, damage: 18, fireRate: 0.18, range: 260, color: '#3fa7ff' },

  enemy: {
    count: 14,
    health: 70,
    speed: 3.4,
    damage: 12,
    fireRate: 0.55,
    range: 280,
    spread: 0.04,
    color: '#c0392b',
    tickets: 250,
  },

  // 据点（占点决定兵力值增减）
  capturePoints: [
    { id: 'A', name: '阿尔法', pos: [-70, 0, -60], radius: 14 },
    { id: 'B', name: '布拉沃', pos: [0, 0, 0], radius: 16 },
    { id: 'C', name: '查理', pos: [70, 0, 60], radius: 14 },
  ],
  tickets: { player: 250, captureRate: 2.0, decay: 1.0 },

  // 载具：可驾驶装甲车（主炮 + 同轴机枪）
  vehicle: {
    name: '装甲侦察车',
    health: 600,
    speed: 26,
    reverse: 12,
    turn: 1.8,
    turretTurn: 2.4,
    cannonDamage: 130,
    cannonSplash: 9,
    cannonCooldown: 1.3,
    mgDamage: 16,
    mgFireRate: 0.09,
    mgSpread: 0.02,
  },

  // 动态天气预设（雾密度 + 雨量 + 风力）
  weather: {
    clear: { label: '晴', fog: 0.0016, rain: 0, wind: 0.0, sun: 1.0 },
    rain: { label: '降雨', fog: 0.012, rain: 1400, wind: 0.7, sun: 0.55 },
    storm: { label: '风暴', fog: 0.03, rain: 3200, wind: 1.5, sun: 0.32 },
  },

  // 环境道具密度
  props: { crates: 26, walls: 10, rocks: 18, trees: 22, sandbags: 14, buildings: 6 },
};

export default GAME;
