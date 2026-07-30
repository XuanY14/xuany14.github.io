import { useEffect, useRef, useState } from 'react';
import FPSGame from './game/FPSGame.js';
import HUD from './components/HUD.jsx';
import Overlays from './components/Overlays.jsx';

export default function App() {
  const containerRef = useRef(null);
  const gameRef = useRef(null);
  const [view, setView] = useState('menu');
  const [hud, setHud] = useState(null);
  const [result, setResult] = useState(null);
  const [selectedClass, setSelectedClass] = useState('assault');
  const [selectedWeather, setSelectedWeather] = useState('clear');

  const buildGame = () => {
    if (gameRef.current) { try { gameRef.current.dispose(); } catch (e) {} }
    const game = new FPSGame(containerRef.current, {
      onHUD: (s) => setHud(s),
      onPause: () => setView('paused'),
      onEnd: (r) => { setResult(r); setView('ended'); },
      onLockChange: (locked) => {
        if (!locked && view !== 'ended' && view !== 'menu') setView('paused');
        if (locked && view === 'paused') setView('playing');
      },
    });
    game.init();
    gameRef.current = game;
    return game;
  };

  useEffect(() => {
    buildGame();
    return () => { if (gameRef.current) gameRef.current.dispose(); };
    // eslint-disable-next-line
  }, []);

  const launch = (classKey, weatherKey, toMenu = false) => {
    const g = gameRef.current || buildGame();
    g.setWeather(weatherKey);
    g.start(classKey);
    setResult(null);
    setView('playing');
  };

  const onStart = () => launch(selectedClass, selectedWeather);
  const onRestart = () => launch(selectedClass, selectedWeather);
  const onResume = () => { setView('playing'); gameRef.current?.resume(); };

  return (
    <div className="game-root">
      <div className="canvas-host" ref={containerRef} />
      {view === 'playing' && hud && <HUD hud={hud} />}
      <Overlays
        view={view}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        selectedWeather={selectedWeather}
        setSelectedWeather={setSelectedWeather}
        onStart={onStart}
        onResume={onResume}
        onRestart={onRestart}
        result={result}
      />
    </div>
  );
}
