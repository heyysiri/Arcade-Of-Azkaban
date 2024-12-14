import { useState } from 'react';
import { Wand, GamepadIcon, Bird } from 'lucide-react';
import { Link } from 'react-router-dom';

const App = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const sectionContent = {
    //welcome: "Welcome to the Magical Realm of Wizardry! 🧙‍♂️✨",
    //characters: "Explore Legendary Wizards and Witches! 🔮",
  };

  return (
    <div 
      className="w-screen h-screen bg-[#C0C0C0] text-black 
      font-['MS_Sans_Serif'] p-4 flex flex-col items-center 
      overflow-hidden relative"
      style={{
        backgroundImage: 'repeating-linear-gradient(#FFFFFF22 0 1px, transparent 1px 100%)',
        backgroundSize: '100% 5px'
      }}
    >
      {/* Retro Header */}
      <header 
        className="bg-[#008080] text-white p-4 
        w-full max-w-md text-center mb-6
        border-4 border-white border-b-[#808080] border-r-[#808080]"
      >
        <h1 className="text-4xl font-bold tracking-wider uppercase">
          Wizard Web 90s
        </h1>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center space-x-4 mb-6">
        {Object.keys(sectionContent).map((section) => (
          <button 
            key={section}
            onClick={() => setActiveSection(section)}
            className={`
              pixel-button
              flex items-center space-x-2 p-2 
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
          className="pixel-button flex items-center space-x-2"
        >
          <Bird className="w-5 h-5" />
          <span className="uppercase text-xs font-bold">Characters</span>
        </Link>
        <Link 
          to="/spells"
          className="pixel-button flex items-center space-x-2"
        >
          <Wand className="w-5 h-5" />
          <span className="uppercase text-xs font-bold">Spells</span>
        </Link>
        {/* Game Button */}
        <Link 
          to="/game"
          className="pixel-button flex items-center space-x-2"
        >
          <GamepadIcon className="w-5 h-5" />
          <span className="uppercase text-xs font-bold">Game</span>
        </Link>
      </nav>

      {/* Content Section */}
      <main 
        className="bg-white p-6 
        w-full max-w-md
        border-4 border-[#808080] border-b-white border-r-white"
      >
        <div className="text-center">
          <h2 className="text-2xl mb-4 text-black uppercase">
            {activeSection}
          </h2>
          <p className="text-sm leading-loose tracking-wider">
            {sectionContent[activeSection]}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="text-center text-xs text-black 
        mt-6"
      >
        <p>© 1990-1999 MAGICAL MEMORIES</p>
      </footer>

      <style jsx global>{`
        body {
          font-family: 'MS Sans Serif', sans-serif;
          background-color: #C0C0C0;
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='14' fill='%23000000' stroke='white' stroke-width='2'/%3E%3C/svg%3E"), auto;
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
      `}</style>
    </div>
  );
};

export default App;