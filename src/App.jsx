import { useEffect, useRef, useState } from 'react'
import { FPSGame } from './game/FPSGame.js'
import HUD from './components/HUD.jsx'
import { MenuOverlay, PauseOverlay, GameOverOverlay } from './components/Overlays.jsx'

export default function App() {
  const containerRef = useRef(null)
  const gameRef = useRef(null)
  const overRef = useRef(false)
  const hitTimer = useRef(0)

  const [screen, setScreen] = useState('menu') // menu | playing | paused | over
  const [stats, setStats] = useState(null)
  const [result, setResult] = useState({ score: 0, wave: 0 })
  const [hitFlash, setHitFlash] = useState(false)

  useEffect(() => {
    const game = new FPSGame(containerRef.current, {
      onStats: (s) => setStats(s),
      onLockChange: (locked) => {
        if (locked) setScreen('playing')
        else if (!overRef.current) setScreen('paused')
      },
      onHit: (pos) => {
        setHitFlash(true)
        game.playHit()
        clearTimeout(hitTimer.current)
        hitTimer.current = setTimeout(() => setHitFlash(false), 130)
      },
      onGameOver: ({ score, wave }) => {
        overRef.current = true
        setResult({ score, wave })
        setScreen('over')
      },
    })
    game.paused = true // 菜单阶段只渲染背景，不更新模拟
    game.start()
    gameRef.current = game
    return () => game.dispose()
  }, [])

  const handlePlay = () => {
    overRef.current = false
    gameRef.current?.reset()
    gameRef.current?.lock()
  }
  const handleResume = () => gameRef.current?.lock()
  const handleRestart = () => {
    overRef.current = false
    gameRef.current?.reset()
    gameRef.current?.lock()
  }
  const handleMenu = () => {
    overRef.current = false
    if (gameRef.current) gameRef.current.paused = true
    setScreen('menu')
  }

  return (
    <div className="game-root">
      <div ref={containerRef} className="game-canvas" />

      {screen === 'playing' && <HUD stats={stats} hitFlash={hitFlash} />}

      {screen === 'menu' && <MenuOverlay onPlay={handlePlay} />}
      {screen === 'paused' && <PauseOverlay onResume={handleResume} onMenu={handleMenu} />}
      {screen === 'over' && (
        <GameOverOverlay
          score={result.score}
          wave={result.wave}
          onRestart={handleRestart}
          onMenu={handleMenu}
        />
      )}
    </div>
  )
}
