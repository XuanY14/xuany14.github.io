import { CONTROLS_HELP, GAME } from '../config/game.js'

// 主菜单
export function MenuOverlay({ onPlay }) {
  return (
    <div className="overlay menu">
      <div className="menu-card">
        <div className="badge">浏览器 · 第一人称射击</div>
        <h1 className="game-title">{GAME.title}</h1>
        <p className="game-sub">{GAME.subtitle}</p>
        <p className="menu-desc">
          霓虹竞技场中，一波波无人机向你逼近。瞄准、开火、活下去，刷新你的高分。
        </p>
        <button className="btn-primary" onClick={onPlay}>开始游戏</button>

        <div className="controls-grid">
          {CONTROLS_HELP.map((c) => (
            <div className="ctrl" key={c.keys}>
              <kbd>{c.keys}</kbd><span>{c.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 暂停
export function PauseOverlay({ onResume, onMenu }) {
  return (
    <div className="overlay pause">
      <div className="menu-card small">
        <h2>已暂停</h2>
        <p className="menu-desc">点击继续以重新锁定鼠标。</p>
        <button className="btn-primary" onClick={onResume}>继续游戏</button>
        <button className="btn-ghost" onClick={onMenu}>返回主菜单</button>
      </div>
    </div>
  )
}

// 结束
export function GameOverOverlay({ score, wave, onRestart, onMenu }) {
  return (
    <div className="overlay over">
      <div className="menu-card">
        <h2 className="over-title">任务失败</h2>
        <div className="result">
          <div className="result-item"><b>{score}</b><span>最终分数</span></div>
          <div className="result-item"><b>{wave}</b><span>到达波次</span></div>
        </div>
        <button className="btn-primary" onClick={onRestart}>再来一局</button>
        <button className="btn-ghost" onClick={onMenu}>返回主菜单</button>
      </div>
    </div>
  )
}
