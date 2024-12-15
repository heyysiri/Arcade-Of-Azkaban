import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import SideBarRight from './sidebarright';
import SidebarLeft from './sidebarleft';
const SpellsPage = () => {
  const spells = [
    { 
      name: "Avada Kedavra", 
      description: "The Killing Curse! A spell that instantly kills anyone it touches. One of the three Unforgivable Curses, it leaves a green flash in its wake. 💀", 
      discoveredBy: "Dark Wizards",
      firstAppearance: "Used by Voldemort in the Forbidden Forest to kill Harry’s parents"
    },
    { 
      name: "Crucio", 
      description: "The Cruciatus Curse! Causes excruciating pain to the victim, used to torture and break wills. One of the Unforgivable Curses. 😈", 
      discoveredBy: "Dark Arts Masters",
      firstAppearance: "Used by Bellatrix Lestrange on Neville Longbottom at Malfoy Manor"
    },
    { 
      name: "Imperius", 
      description: "The Imperius Curse! Controls the victim’s mind, bending them to the caster’s will. Use it, and you could lose yourself too. 🧠", 
      discoveredBy: "Dark Wizards",
      firstAppearance: "Used by Barty Crouch Jr. on Viktor Krum during the Triwizard Tournament"
    },
    { 
      name: "Morsmordre", 
      description: "The Dark Mark! A terrifying symbol of Voldemort’s Death Eaters, summoned into the sky to signal terror. ☠️", 
      discoveredBy: "Lord Voldemort",
      firstAppearance: "Summoned by Death Eaters at the Quidditch World Cup"
    },
    { 
      name: "Sectumsempra", 
      description: "A dangerous curse that cuts deep, causing severe wounds. It’s dark magic that leaves victims bleeding and broken. ⚔️", 
      discoveredBy: "Severus Snape (Half-Blood Prince)",
      firstAppearance: "Used by Harry in the bathroom during his duel with Draco Malfoy"
    },
    { 
      name: "Dolohov's Curse", 
      description: "A spell known for causing death or severe injury with a single blast. It’s incredibly dark and dangerous. 💥", 
      discoveredBy: "Antonin Dolohov",
      firstAppearance: "Used by Dolohov in the Battle of the Department of Mysteries"
    },
    { 
      name: "Fiendfyre", 
      description: "A magical fire that’s uncontrollable and can destroy anything in its path. A dangerous force of nature that burns through everything. 🔥", 
      discoveredBy: "Ancient Dark Magic",
      firstAppearance: "Unleashed by Vincent Crabbe in the Room of Requirement"
    },
    { 
      name: "Reducto", 
      description: "The Blasting Curse! This spell causes objects to explode with violent force, and it can be deadly if aimed at a person. 💣", 
      discoveredBy: "Dark Wizards",
      firstAppearance: "Used by Bellatrix Lestrange during the Battle of the Department of Mysteries"
    },
    { 
      name: "Confringo", 
      description: "The Blasting Curse! Similar to Reducto, it’s used to destroy objects and can cause deadly explosions. Dangerous in the wrong hands. 💥", 
      discoveredBy: "Dark Wizards",
      firstAppearance: "Used by Death Eaters during the Battle of Hogwarts"
    },
    { 
      name: "Obliviate", 
      description: "The Memory Charm! Used to erase memories, sometimes to cover up dark deeds. While not deadly, it’s ethically questionable. 🧠", 
      discoveredBy: "Wizarding Memory Experts",
      firstAppearance: "Hermione uses it on her parents to protect them from Voldemort's forces"
    },
    { 
      name: "Carpe Retractum", 
      description: "A spell that pulls objects or people toward you with a magical rope-like force. While not fatal, it’s often used for dark and dangerous purposes. 🪢", 
      discoveredBy: "Dark Wizards",
      firstAppearance: "Used by Draco Malfoy on Harry during the Battle of Hogwarts"
    },
    { 
      name: "Langlock", 
      description: "A spell that locks someone’s tongue to the roof of their mouth, rendering them speechless. Not fatal, but it can be humiliating. 🙊", 
      discoveredBy: "Dark Wizards",
      firstAppearance: "Used by Draco Malfoy on Harry during their encounter in the bathroom"
    }
];


  return (
    <div 
      className="w-full min-h-screen bg-[#C0C0C0] text-black 
      font-['MS_Sans_Serif'] p-4 flex flex-col items-center"
    >
      {/* Retro Header */}
      <header 
        className="bg-pink-600 text-white p-4 
        w-full max-w-4xl text-center mb-6
        border-4 border-white border-b-[#808080] border-r-[#808080]"
      >
        <h1 className="text-4xl font-bold tracking-wider uppercase">
        Curses & Chaos: The Dark Arts Unleashed 🧙‍♂️
        </h1>
        <p className="text-xs mt-2">
          * Totally Magical * Last Updated: Summer Vacation 1999!!
        </p>
      </header>
      <SidebarLeft />
      <SideBarRight />
      {/* Spells Grid */}
      <main 
        className="grid grid-cols-4 gap-4 
        w-[70%] max-auto"
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
          Back to mainpage
        </Link>
        <div className="text-xs mt-4">
        🌟 MAGICAL MEMORIES © 1999 🌟
          <br />
          <marquee>Under construction! Best viewed with Netscape Navigator!</marquee>
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