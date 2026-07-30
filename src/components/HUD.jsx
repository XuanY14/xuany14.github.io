// 游戏内 HUD：血量、分数、波次、弹药、准星、命中标记
export default function HUD({ stats, hitFlash }) {
  if (!stats) return null
  const hpPct = Math.max(0, Math.min(100, (stats.health / stats.maxHealth) * 100))
  const lowHp = hpPct <= 30
  return (
    <div className="hud" aria-hidden="true">
      {/* 准星 */}
      <div className={`crosshair ${hitFlash ? 'hit' : ''}`}>
        <span className="ch ch-t" />
        <span className="ch ch-b" />
        <span className="ch ch-l" />
        <span className="ch ch-r" />
        <span className="ch-dot" />
      </div>

      {/* 左上：血量 */}
      <div className="hud-health">
        <div className="hud-label">生命</div>
        <div className="hp-bar">
          <div className={`hp-fill ${lowHp ? 'low' : ''}`} style={{ width: hpPct + '%' }} />
          <span className="hp-num">{stats.health}</span>
        </div>
      </div>

      {/* 右上：分数 / 波次 / 剩余敌人 */}
      <div className="hud-stats">
        <div className="stat"><b>{stats.score}</b><span>分数</span></div>
        <div className="stat"><b>{stats.wave}</b><span>波次</span></div>
        <div className="stat"><b>{stats.enemiesLeft}</b><span>剩余敌人</span></div>
      </div>

      {/* 底部：弹药 */}
      <div className="hud-ammo">
        {stats.reloading ? (
          <span className="reloading">换弹中…</span>
        ) : (
          <span><b>{stats.ammo}</b><i>/ {stats.magazine}</i></span>
        )}
      </div>

      {lowHp && <div className="dmg-vignette" />}
    </div>
  )
}
