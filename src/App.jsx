import { useState, useEffect, useRef, useCallback } from 'react';
import { Clock, Target } from 'lucide-react';
import snitchImage from './assets/snitch.png';
import HarryPotterBroom from './assets/harry_potter_broom.png';

const HarryCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  const cursorStyle = {
    position: 'fixed',
    width: '150px',  // Increased size
    height: '150px', // Increased size
    backgroundImage: `url(${HarryPotterBroom})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transform: 'translate(-50%, -50%)', // Center the image on the cursor
    top: position.y,
    left: position.x,
    zIndex: 100,
    pointerEvents: 'none', // Ensure cursor doesn't interfere with clicks
    filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))' // Optional: add a slight shadow
  };
  

  return <div style={cursorStyle}></div>;
};

const App = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [snitchPosition, setSnitchPosition] = useState({ top: '0px', left: '0px' });
  const [snitchVisible, setSnitchVisible] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const snitchTimerRef = useRef(null);
  const gameTimerRef = useRef(null);

  // Retro pixel font
  const pixelFont = {
    fontFamily: "'Press Start 2P', cursive",
    color: '#00ff00',
    textShadow: '2px 2px #000000'
  };

  // Pixel-style scoreboard background
  const scoreboardStyle = {
    backgroundColor: '#1A237E',
    border: '4px solid #000',
    boxShadow: '4px 4px 0 #FFD700',
    padding: '10px',
    borderRadius: '8px'
  };

  // Randomize snitch position
  const moveSnitchRandomly = useCallback(() => {
    if (gameOver) return;

    const snitchWidth = 60;
    const snitchHeight = 60;
    const maxWidth = window.innerWidth - snitchWidth;
    const maxHeight = window.innerHeight - snitchHeight;

    const newTop = Math.floor(Math.random() * maxHeight);
    const newLeft = Math.floor(Math.random() * maxWidth);

    setSnitchPosition({ top: `${newTop}px`, left: `${newLeft}px` });
    setSnitchVisible(true);

    if (snitchTimerRef.current) {
      clearTimeout(snitchTimerRef.current);
    }

    // Hide snitch after 1 second
    snitchTimerRef.current = setTimeout(() => {
      setSnitchVisible(false);
    }, 1000);
  }, [gameOver]);

  // Handle snitch click
  const handleSnitchClick = () => {
    if (snitchVisible && !gameOver) {
      setScore(prevScore => prevScore + 1);
      setSnitchVisible(false);
    }
  };

  // Game timer
  useEffect(() => {
    if (gameTimerRef.current) {
      clearInterval(gameTimerRef.current);
    }

    gameTimerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(gameTimerRef.current);
          setGameOver(true);
          setSnitchVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
      }
    };
  }, [gameOver]);

  // Periodic snitch movement
  useEffect(() => {
    if (!gameOver && timeLeft > 0) {
      moveSnitchRandomly();

      const periodicTimer = setInterval(moveSnitchRandomly, 1000);

      return () => {
        clearInterval(periodicTimer);
        if (snitchTimerRef.current) {
          clearTimeout(snitchTimerRef.current);
        }
      };
    }
  }, [gameOver, timeLeft, moveSnitchRandomly]);

  // Restart game
  const restartGame = () => {
    setScore(0);
    setTimeLeft(15);
    setGameOver(false);
    setSnitchVisible(false);
  };

  return (
    <div 
      className="fixed inset-0 w-screen h-screen overflow-hidden"
      style={{
        backgroundColor: '#000080',
        backgroundImage: 'repeating-linear-gradient(#00000033 0 1px, transparent 1px 100%)',
        backgroundSize: '100% 4px',
        cursor: 'none' // Hide default cursor
      }}
    >
      {/* Pixelated Hogwarts Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Castle Silhouette */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[30%] bg-black opacity-30"
          style={{
            clipPath: 'polygon(0% 100%, 0% 50%, 10% 60%, 20% 50%, 30% 60%, 40% 50%, 50% 65%, 60% 50%, 70% 60%, 80% 50%, 90% 65%, 100% 50%, 100% 100%)'
          }}
        />

        {/* Pixelated Stars */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white"
            style={{
              width: '4px',
              height: '4px',
              imageRendering: 'pixelated',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random()
            }}
          />
        ))}
      </div>

      {/* Pixel Scoreboard */}
      <div 
        className="absolute top-4 left-4 flex flex-col z-20" 
        style={{...pixelFont, ...scoreboardStyle}}
      >
        <div className="flex items-center space-x-2 mb-2">
          <Clock size={24} color="#00ff00" />
          <span>Time: {timeLeft}s</span>
        </div>
        <div className="flex items-center space-x-2">
          <Target size={24} color="#00ff00" />
          <span>Score: {score}</span>
        </div>
      </div>

      {/* Snitch */}
      {snitchVisible && !gameOver && (
        <div
          onClick={handleSnitchClick}
          className="absolute cursor-pointer hover:scale-110 transition-transform z-30 animate-pulse"
          style={{
            top: snitchPosition.top,
            left: snitchPosition.left,
            width: '100px',
            height: '100px',
            backgroundImage: `url(${snitchImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            imageRendering: 'pixelated'
          }}
        />
      )}

      {/* Game Over Overlay */}
      {gameOver && (
        <div 
          className="fixed inset-0 flex flex-col items-center justify-center z-50"
          style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            ...pixelFont
          }}
        >
          <h1 className="text-4xl mb-8">GAME OVER</h1>
          <p className="text-2xl mb-4">Your Score: {score}</p>
          <button 
            onClick={restartGame}
            className="px-6 py-3 bg-green-500 text-black hover:bg-green-400 transition-colors"
            style={pixelFont}
          >
            RESTART GAME
          </button>
        </div>
      )}

      {/* Harry Cursor */}
      <HarryCursor />
    </div>
  );
};

export default App;