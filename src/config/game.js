// 第一人称 FPS 游戏的可调参数。改这里即可平衡难度 / 手感。
export const GAME = {
  title: 'NEON STRIKE',
  subtitle: '第一人称射击 · 霓虹竞技场',
  arena: {
    size: 50,        // 竞技场边长（正方形）
    wallHeight: 6,
  },
  player: {
    eyeHeight: 1.7,
    radius: 0.45,
    maxHealth: 100,
    speed: 7.5,       // 移动速度 (m/s)
    sprintMul: 1.6,   // 按住 Shift 的加速倍率
    jumpSpeed: 6.5,
    gravity: 20,
  },
  weapon: {
    magazine: 12,
    damage: 34,       // 每发伤害
    fireRate: 130,    // 两发之间最小间隔 (ms)
    reloadTime: 1100, // 换弹时间 (ms)
    range: 250,
  },
  enemy: {
    baseSpeed: 3.0,
    speedPerWave: 0.4,
    hp: 3,            // 需要几发命中
    contactDamage: 16, // 接触时每秒造成的伤害
    contactDist: 1.7,
    points: 100,
    hoverY: 1.15,
  },
  wave: {
    baseEnemies: 5,
    step: 2,          // 每波新增数量
    cooldown: 2.5,    // 波间冷却 (s)
  },
  crates: 9,          // 场地内障碍物（箱子）数量
}

export const CONTROLS_HELP = [
  { keys: 'W A S D', desc: '移动' },
  { keys: '鼠标', desc: '转动视角' },
  { keys: '左键', desc: '开火' },
  { keys: 'Shift', desc: '疾跑' },
  { keys: '空格', desc: '跳跃' },
  { keys: 'R', desc: '换弹' },
  { keys: 'Esc', desc: '暂停 / 释放鼠标' },
]
