import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const SpellsPage = () => {
  const spells = [
    { 
      name: "Expelliarmus", 
      description: "Ron & Harry's favorite spell! Disarms your opponent and sends their wand flying! As seen in the Chamber of Secrets! 🪄", 
      discoveredBy: "Unknown Wizard",
      firstAppearance: "Hogwarts Dueling Club"
    },
    { 
      name: "Patronus Charm", 
      description: "The ultimate defense against Dementors! Harry learns this advanced spell from Professor Lupin. So cool! 😱", 
      discoveredBy: "Professor Remus Lupin",
      firstAppearance: "Defense Against the Dark Arts Class"
    },
    { 
      name: "Wingardium Leviosa", 
      description: "Make objects float! Hermione was TOTALLY right about the pronunciation. Swish and flick! 🧙‍♀️", 
      discoveredBy: "Professor Flitwick",
      firstAppearance: "Charms Class"
    },
    { 
      name: "Alohomora", 
      description: "The Unlocking Charm! Perfect for sneaking around Hogwarts and solving magical mysteries! 🔑", 
      discoveredBy: "Ancient Wizarding Families",
      firstAppearance: "Unknown"
    },
    { 
      name: "Lumos", 
      description: "Light up your wand like a magical flashlight! Super useful in dark corridors and forbidden areas! 💡", 
      discoveredBy: "Wandlore Experts",
      firstAppearance: "Standard First-Year Spell"
    },
    { 
      name: "Riddikulus", 
      description: "Turn scary boggarts into hilarious jokes! Professor Lupin's BEST lesson EVER! Laughter defeats fear! 😂", 
      discoveredBy: "Defense Against the Dark Arts Curriculum",
      firstAppearance: "Hogwarts Defensive Magic"
    },
    { 
      name: "Accio", 
      description: "Summon ANY object from a distance! Harry uses this ALL the time. So convenient! 🏠", 
      discoveredBy: "Advanced Summoning Wizards",
      firstAppearance: "Triwizard Tournament"
    },
    { 
      name: "Expecto Patronum", 
      description: "Create a magical guardian to fight Dementors! Only the most POWERFUL wizards can do this! ✨", 
      discoveredBy: "Professor Lupin",
      firstAppearance: "Dementor Defense Training"
    }
  ];

  return (
    <div 
      className="w-screen h-screen bg-[#C0C0C0] text-black 
      font-['MS_Sans_Serif'] p-4 flex flex-col items-center"
    >
      {/* Retro Header */}
      <header 
        className="bg-[#008080] text-white p-4 
        w-full max-w-4xl text-center mb-6
        border-4 border-white border-b-[#808080] border-r-[#808080]"
      >
        <h1 className="text-4xl font-bold tracking-wider uppercase">
          Harry Potter's Spell Book 🧙‍♂️
        </h1>
        <p className="text-xs mt-2">
          * Totally Magical * Last Updated: Summer Vacation 1999! *
        </p>
      </header>

      {/* Spells Grid */}
      <main 
        className="grid grid-cols-4 gap-4 
        w-full max-w-4xl"
      >
        {spells.map((spell, index) => (
          <div 
            key={index} 
            className="spell-card bg-white 
            border-4 border-[#808080] border-b-white border-r-white
            p-4 shadow-md hover:shadow-lg 
            transition-all duration-300 
            cursor-pointer"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold uppercase">
                {spell.name}
              </h3>
              <Sparkles className="w-6 h-6 text-[#008080]" />
            </div>
            <p className="text-xs mb-2 text-gray-600">
              {spell.description}
            </p>
            <div className="text-xs mt-2">
              <p><strong>Discovered By:</strong> {spell.discoveredBy}</p>
              <p><strong>First Seen:</strong> {spell.firstAppearance}</p>
            </div>
          </div>
        ))}
      </main>

      {/* Back Button & 90s Footer */}
      <footer className="mt-6 text-center w-full max-w-4xl">
        <Link 
          to="/" 
          className="pixel-button mr-4"
        >
          Back to Wizard World
        </Link>
        <div className="text-xs mt-4">
          🌟 Magical Webmaster: Harry P. © 1999 🌟
          <br />
          <marquee>Under magical construction! Best viewed with Netscape Navigator!</marquee>
        </div>
      </footer>

      <style jsx global>{`
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
        }
      `}</style>
    </div>
  );
};

export default SpellsPage;