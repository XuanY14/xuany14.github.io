import GAME from '../config/game.js';

const CLASSES = Object.entries(GAME.classes).map(([key, c]) => ({ key, ...c }));
const WEATHERS = [
  { key: 'clear', label: GAME.weather.clear.label, desc: '晴朗视野，弹道最稳定' },
  { key: 'rain', label: GAME.weather.rain.label, desc: '降水降低能见度，湿滑' },
  { key: 'storm', label: GAME.weather.storm.label, desc: '风暴浓雾，近战环境' },
];

export default function Overlays({ view, selectedClass, setSelectedClass, selectedWeather, setSelectedWeather, onStart, onResume, onRestart, result }) {
  if (view === 'playing') return null;

  if (view === 'menu') {
    return (
      <div className="overlay menu">
        <div className="menu-card">
          <div className="brand">
            <h1>{GAME.title}</h1>
            <p className="sub">{GAME.subtitle}</p>
            <p className="tagline">真实战场 · 大规模战术对抗 · 载具协同 · 据点争夺</p>
          </div>

          <div className="section">
            <h3>选择兵种</h3>
            <div className="grid">
              {CLASSES.map(c => (
                <button key={c.key} className={`pick ${selectedClass === c.key ? 'on' : ''}`} style={{ '--c': c.color }}
                  onClick={() => setSelectedClass(c.key)}>
                  <div className="pick-name">{c.name}</div>
                  <div className="pick-wpn">{c.weapon.name}</div>
                  <div className="pick-ab"><b>Q</b> {c.ability.name}</div>
                  <div className="pick-desc">{c.ability.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <h3>战场天气</h3>
            <div className="grid grid-3">
              {WEATHERS.map(w => (
                <button key={w.key} className={`pick ${selectedWeather === w.key ? 'on' : ''}`} onClick={() => setSelectedWeather(w.key)}>
                  <div className="pick-name">{w.label}</div>
                  <div className="pick-desc">{w.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <button className="start-btn" onClick={onStart}>▶ 进入战场</button>
          <div className="controls-help">
            WASD 移动 · 鼠标瞄准 · 左键开火 · R 换弹 · Shift 疾跑 · 空格跳 · Q 技能 · F 上下载具 · 右键(侦察兵)瞄准镜 · Esc 暂停
          </div>
        </div>
      </div>
    );
  }

  if (view === 'paused') {
    return (
      <div className="overlay">
        <div className="panel">
          <h2>已暂停</h2>
          <button className="start-btn" onClick={onResume}>继续战斗</button>
          <button className="ghost-btn" onClick={onRestart}>重新开始</button>
          <div className="controls-help">提示：点击「继续战斗」会重新锁定鼠标</div>
        </div>
      </div>
    );
  }

  if (view === 'ended') {
    const win = result?.result === 'victory';
    return (
      <div className="overlay">
        <div className="panel">
          <h2 className={win ? 'win' : 'lose'}>{win ? '🏆 战斗胜利' : '💀 任务失败'}</h2>
          <p className="stats">得分 <b>{result?.score ?? 0}</b> · 击杀 <b>{result?.kills ?? 0}</b></p>
          <button className="start-btn" onClick={onRestart}>再来一局</button>
          <div className="controls-help">胜利条件：耗尽敌军兵力值或清剿敌军；失败：我方兵力值归零</div>
        </div>
      </div>
    );
  }
  return null;
}
