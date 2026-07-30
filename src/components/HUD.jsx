import { useEffect, useRef } from 'react';

// 战场 HUD：血量/弹药/兵种/分数/兵力值/据点/天气/载具/小地图/准星
export default function HUD({ hud }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const cv = mapRef.current; if (!cv || !hud) return;
    const ctx = cv.getContext('2d');
    const S = cv.width; const half = hud.mapHalf;
    ctx.clearRect(0, 0, S, S);
    ctx.fillStyle = 'rgba(10,16,12,0.55)'; ctx.fillRect(0, 0, S, S);
    ctx.strokeStyle = 'rgba(120,160,120,0.4)'; ctx.strokeRect(1, 1, S - 2, S - 2);
    const toXY = (x, z) => [S / 2 + (x / half) * (S / 2 - 6), S / 2 + (z / half) * (S / 2 - 6)];
    // 据点
    for (const b of hud.blips) {
      if (b.t === 'c') {
        const [x, y] = toXY(b.x, b.z);
        ctx.fillStyle = b.owner === 'player' ? '#3fa7ff' : b.owner === 'enemy' ? '#ff4444' : '#888';
        ctx.beginPath(); ctx.arc(x, y, 4, 0, 7); ctx.fill();
      }
    }
    // 单位
    for (const b of hud.blips) {
      const [x, y] = toXY(b.x, b.z);
      if (b.t === 'e') { ctx.fillStyle = b.s ? '#ffcc00' : '#ff5050'; ctx.beginPath(); ctx.arc(x, y, 2.5, 0, 7); ctx.fill(); }
      else if (b.t === 'a') { ctx.fillStyle = '#3fa7ff'; ctx.beginPath(); ctx.arc(x, y, 2.5, 0, 7); ctx.fill(); }
      else if (b.t === 'p') { ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(x, y, 3.5, 0, 7); ctx.fill(); ctx.strokeStyle = '#fff'; ctx.stroke(); }
    }
  }, [hud]);

  if (!hud) return null;
  const hpPct = (hud.health / hud.maxHealth) * 100;
  const tp = hud.tickets.player, te = hud.tickets.enemy;
  const tpPct = (tp / 250) * 100, tePct = (te / 250) * 100;
  const abPct = hud.abilityMax ? (1 - hud.abilityCd / hud.abilityMax) * 100 : 100;

  return (
    <div className="hud">
      {/* 准星 */}
      <div className="crosshair">
        <span className="ch ch-t" /><span className="ch ch-b" /><span className="ch ch-l" /><span className="ch ch-r" /><span className="ch-dot" />
      </div>

      {/* 左下：血量 + 兵种 */}
      <div className="hud-bl">
        <div className="hp-wrap">
          <div className="hp-bar"><div className="hp-fill" style={{ width: `${hpPct}%`, background: hpPct > 40 ? '#7ec850' : '#e0533a' }} /></div>
          <div className="hp-text">{hud.health} HP</div>
        </div>
        <div className="class-tag" style={{ borderColor: hud.classColor, color: hud.classColor }}>{hud.className}</div>
      </div>

      {/* 右下：弹药 + 技能 */}
      <div className="hud-br">
        <div className="ammo">
          <span className="ammo-cur">{hud.ammo}</span><span className="ammo-sep">/</span><span className="ammo-mag">{hud.mag}</span>
          <span className="ammo-res">备弹 {hud.reserve}</span>
        </div>
        <div className="ability" style={{ opacity: abPct >= 100 ? 1 : 0.5 }}>
          <span className="ab-key">Q</span> {hud.abilityName}
          <div className="ab-bar"><div style={{ width: `${abPct}%` }} /></div>
        </div>
        {hud.inVehicle && (
          <div className="veh-stat">🚙 载具装甲 <b>{hud.vehicleHealth}</b> · 左键主炮 / 同轴机枪</div>
        )}
      </div>

      {/* 顶部中：兵力值 */}
      <div className="hud-top">
        <div className="ticket ticket-p">我方 <b>{Math.round(tp)}</b></div>
        <div className="ticket-bars">
          <div className="tb tb-p" style={{ width: `${tpPct}%` }} />
          <div className="tb tb-e" style={{ width: `${tePct}%` }} />
        </div>
        <div className="ticket ticket-e"><b>{Math.round(te)}</b> 敌军</div>
      </div>

      {/* 据点状态 */}
      <div className="points">
        {hud.points.map(p => (
          <div key={p.id} className={`pt pt-${p.owner}`}>
            <span className="pt-id">{p.id}</span> {p.name}
            <div className="pt-bar"><div className="pt-fill" style={{ width: `${Math.abs(p.progress) * 100}%`, background: p.progress > 0 ? '#3fa7ff' : '#ff4444' }} /></div>
          </div>
        ))}
      </div>

      {/* 分数/天气 */}
      <div className="hud-tr">
        <div>得分 {hud.score} · 击杀 {hud.kills}</div>
        <div className="weather">天气：{hud.weather}</div>
      </div>

      {/* 小地图 */}
      <div className="minimap">
        <canvas ref={mapRef} width={150} height={150} />
        <div className="mm-label">战术地图</div>
      </div>

      {/* 底部提示 */}
      <div className="hud-hint">WASD 移动 · 鼠标瞄准 · 左键开火 · R 换弹 · Shift 疾跑 · 空格跳 · Q 技能 · F 上下载具 · 右键(侦察)瞄准镜 · Esc 暂停</div>
    </div>
  );
}
