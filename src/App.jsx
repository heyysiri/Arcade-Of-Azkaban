import { useState } from 'react';
import { Wand, GamepadIcon, Bird } from 'lucide-react';
import { Link } from 'react-router-dom';
import SidebarLeft from './sidebarleft';
import SideBarRight from './sidebarright';
import MagicGif from './assets/magic.gif'
const App = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [hitCounter, setHitCounter] = useState(1337);

  const sectionContent = {
    
  };

  return (
    <div 
      className="w-screen min-h-screen bg-[#C0C0C0] text-black 
      font-['MS_Sans_Serif'] p-4 flex flex-col items-center 
      overflow-x-hidden relative"
      style={{
        backgroundImage: 'repeating-linear-gradient(#FFFFFF22 0 1px, transparent 1px 100%)',
        backgroundSize: '100% 5px'
      }}
    >
      <SidebarLeft />
      <SideBarRight />

      {/* Animated Scrolling Text */}
      <div className="w-[90%] overflow-hidden bg-black text-white py-1 z-20">
        <div className="animate-marquee whitespace-nowrap inline-block">
          🌟 WIZARD WEB: THE ULTIMATE MAGICAL EXPERIENCE! NEW AND IMPROVED! NETSCAPE NAVIGATOR RECOMMENDED! 🌟
        </div>
      </div>
      
      {/* Retro Header */}
      <header 
        className="bg-pink-600 text-white p-4 
        w-full max-w-md text-center mb-6
        border-4 border-white border-b-[#808080] border-r-[#808080]"
      >
        <h1 className="text-4xl font-bold tracking-wider uppercase">
          Arcade Of Azkaban
        </h1>
        
      </header>
        
      {/* Navigation */}
      <nav className="flex flex-wrap justify-center space-x-4 mb-6 items-center">
      <img 
          src={MagicGif} 
          alt="Magic Sparkle" 
          className="w-16 h-16 ml-2" // Adjust size and margin
        />
        {Object.keys(sectionContent).map((section) => (
          <button 
            key={section}
            onClick={() => setActiveSection(section)}
            className={`
              pixel-button
              flex items-center space-x-2 p-2 m-1
              ${activeSection === section 
                ? 'pixel-button-active' 
                : 'pixel-button-inactive'}
            `}
          >

            <span className="uppercase text-xs">{section}</span>
          </button>
        ))}
        <Link 
          to="/characters"
          className="pixel-button flex items-center space-x-2 m-1"
        >
          <Bird className="w-5 h-5" />
          <span className="uppercase text-xs font-bold">Characters</span>
        </Link>
        <Link 
          to="/spells"
          className="pixel-button flex items-center space-x-2 m-1"
        >
          <Wand className="w-5 h-5" />
          <span className="uppercase text-xs font-bold">Spells</span>
        </Link>
        <Link 
          to="/game"
          className="pixel-button flex items-center space-x-2 m-1"
        >
          <GamepadIcon className="w-5 h-5" />
          <span className="uppercase text-xs font-bold">Game</span>
        </Link>
        <img 
          src={MagicGif} 
          alt="Magic Sparkle" 
          className="w-16 h-16 ml-2" // Adjust size and margin
        />
      </nav>

      {/* Content Section */}
      <main 
        className="bg-white p-6 
        w-full max-w-md
        border-4 border-[#808080] border-b-white border-r-white
        relative"
      >


        <div className="text-center">
          <h2 className="text-2xl mb-4 text-black uppercase">
            <p>Welcome to the Wizard Web!</p>
          </h2>
          <p className="text-sm leading-loose tracking-wider">
            Step right up and enter the magical realm of the <strong>Arcade of Azkaban</strong>! ✨
            Here, every spell, every potion, and every prank is at your fingertips. Whether you're a brave Gryffindor or a clever Ravenclaw, this is the ultimate fan hub for all things Hogwarts. So grab your broomstick and join the adventure — fun, mischief, and magic await!
          </p>
        </div>
        
      </main>
          
      {/* Hit Counter */}
      <div className="mt-4 flex items-center space-x-2">
        <span>Visitors:</span>
        <div className="flex">
          {hitCounter.toString().split('').map((digit, index) => (
            <div 
              key={index} 
              className="w-6 h-8 bg-black text-white flex items-center justify-center mx-1"
            >
              {digit}
            </div>
          ))}
        </div>
        <button 
          onClick={() => setHitCounter(hitCounter + 1)}
          className="pixel-button text-xs ml-2"
        >
          Increment
        </button>
      </div>

      {/* Footer */}
      <footer 
        className="text-center text-xs text-black 
        mt-6 flex flex-col items-center"
      >
        <p>🌟 MAGICAL MEMORIES © 1999 🌟</p>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
           marquee {
          white-space: nowrap;
          overflow: hidden;
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }

        body {
          font-family: 'MS Sans Serif', sans-serif;
          background-color: #C0C0C0;
         // cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='14' fill='%23000000' stroke='white' stroke-width='2'/%3E%3C/svg%3E"), auto;
        }

        /* 90s Pixel Button Styles */
        .pixel-button {
          background-color: #C0C0C0;
          color: black;
          border: 2px solid;
          border-top-color: white;
          border-left-color: white;
          border-bottom-color: #808080;
          border-right-color: #808080;
          padding: 5px 10px;
          text-transform: uppercase;
          box-shadow: 1px 1px 0 black;
          transition: all 0.1s ease;
        }

        .pixel-button:hover {
          border-top-color: #808080;
          border-left-color: #808080;
          border-bottom-color: white;
          border-right-color: white;
        }

        .pixel-button:active {
          transform: translate(1px, 1px);
          box-shadow: none;
          border-top-color: #808080;
          border-left-color: #808080;
          border-bottom-color: white;
          border-right-color: white;
        }

        .pixel-button-active {
          background-color: #808080;
          color: white;
          border-top-color: #808080;
          border-left-color: #808080;
          border-bottom-color: white;
          border-right-color: white;
        }

        /* 90s scrollbar */
        ::-webkit-scrollbar {
          width: 16px;
          background-color: #C0C0C0;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #808080;
          border: 2px solid white;
        }
        ::-webkit-scrollbar-track {
          background-color: #C0C0C0;
        }
      `}</style>
    </div>
  );
};

export default App;