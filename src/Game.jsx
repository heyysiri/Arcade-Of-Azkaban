import { useState, useEffect, useRef, useCallback } from 'react';
import { Clock, Target, ChevronLeft } from 'lucide-react';
import snitchImage from './assets/snitch.png';
import HarryPotterBroom from './assets/harry_potter_broom.png';
import { useNavigate } from 'react-router-dom';

// Pixel Button CSS
const pixelButtonStyles = `
  .pixel-button {
    font-family: 'Press Start 2P', cursive;
    border: 2px solid #000;
    background-color: #A0A0A0;
    box-shadow: 3px 3px 0 #4A4A4A;
    transition: all 0.2s ease;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    space-x: 2;
    padding: 0.5rem;
    margin: 0.25rem;
  }

  .pixel-button:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 #4A4A4A;
  }

  .pixel-button-active {
    background-color: #00ff00;
    color: #000;
  }

  .pixel-button-inactive {
    background-color: #808080;
    color: #FFFFFF;
  }
`;

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
    width: '150px',
    height: '150px',
    backgroundImage: `url(${HarryPotterBroom})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transform: 'translate(-50%, -50%)', 
    top: position.y,
    left: position.x,
    zIndex: 100,
    pointerEvents: 'none',
    filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))'
  };

  return <div style={cursorStyle}></div>;
};

const SnitchGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [snitchPosition, setSnitchPosition] = useState({ top: '0px', left: '0px' });
  const [snitchVisible, setSnitchVisible] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const snitchTimerRef = useRef(null);
  const gameTimerRef = useRef(null);
  const navigate = useNavigate();

  // Retro pixel font
  const pixelFont = {
    fontFamily: "'Press Start 2P', cursive",
    color: '#ff0000',
   // textShadow: '2px 2px #000000'
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
    if (gameOver || !gameStarted) return;

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
  }, [gameOver, gameStarted]);

  // Handle snitch click
  const handleSnitchClick = () => {
    if (snitchVisible && gameStarted && !gameOver) {
      setScore(prevScore => prevScore + 1);
      setSnitchVisible(false);
    }
  };

  // Game timer
  useEffect(() => {
    if (gameTimerRef.current) {
      clearInterval(gameTimerRef.current);
    }

    if (gameStarted) {
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
    }

    return () => {
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
      }
    };
  }, [gameStarted, gameOver]);

  // Periodic snitch movement
  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      moveSnitchRandomly();

      const periodicTimer = setInterval(moveSnitchRandomly, 1000);

      return () => {
        clearInterval(periodicTimer);
        if (snitchTimerRef.current) {
          clearTimeout(snitchTimerRef.current);
        }
      };
    }
  }, [gameStarted, gameOver, timeLeft, moveSnitchRandomly]);

  // Restart game
  const restartGame = () => {
    setScore(0);
    setTimeLeft(15);
    setGameOver(false);
    setSnitchVisible(false);
    setGameStarted(false);
  };

  // Back to main page
  const goToMainPage = () => {
    navigate('/');
  };

  // If game hasn't started, show intro screen
  if (!gameStarted) {
    return (
      <>
        <style>{pixelButtonStyles}</style>
        <div 
          className="fixed inset-0 w-screen h-screen overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: '#000080',
            backgroundImage: 'repeating-linear-gradient(#00000033 0 1px, transparent 1px 100%)',
            backgroundSize: '100% 4px'
          }}
        >
          <div 
            className="p-8 text-center"
            style={{
              backgroundColor: '#A0A0A0',
              border: '4px solid #000',
              boxShadow: '8px 8px 0 #4A4A4A',
              maxWidth: '600px',
              ...pixelFont
            }}
          >
            <h1 className="text-3xl mb-6">Escape from Azkaban!</h1>
            <p className="mb-8 text-lg">Help Harry catch snitches to free Sirius Black from Azkaban! The more Snitches you catch, the closer Sirius gets to freedom. Can you help Harry save his godfather?</p>
            <div className="flex space-x-4">
            <button 
              onClick={() => setGameStarted(true)}
              className="pixel-button pixel-button-active"
            >
              Start Game
            </button>
            <button 
                onClick={goToMainPage}
                className="pixel-button pixel-button-inactive"
              >
                <ChevronLeft size={20} /> Main Page
              </button>
              </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{pixelButtonStyles}</style>
      <div 
        className="fixed inset-0 w-screen h-screen overflow-hidden"
        style={{
          backgroundColor: '#000080',
          backgroundImage: 'repeating-linear-gradient(#00000033 0 1px, transparent 1px 100%)',
          backgroundSize: '100% 4px',
          cursor: 'none'
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
            <div className="flex space-x-4">
              <button 
                onClick={restartGame}
                className="pixel-button pixel-button-active"
              >
                Restart Game
              </button>
              <button 
                onClick={goToMainPage}
                className="pixel-button pixel-button-inactive"
              >
                <ChevronLeft size={20} /> Main Page
              </button>
            </div>
          </div>
        )}

        {/* Main Page Button */}
        <button 
          onClick={goToMainPage}
          className="absolute bottom-4 left-4 z-50 pixel-button pixel-button-inactive"
        >
          <ChevronLeft size={20} /> Main Page
        </button>

        {/* Harry Cursor */}
        <HarryCursor />
      </div>
    </>
  );
};

export default SnitchGame;