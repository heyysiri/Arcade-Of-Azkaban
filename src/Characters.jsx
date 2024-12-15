//import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import SideBarRight from './sidebarright';
import SidebarLeft from './sidebarleft';
import HarryImage from './assets/p_harry.jpg'
import Hermione from './assets/p_hermione.png'
import Ron from './assets/p_ron.png'
import Dumbledore from './assets/p_dumbledore.png'
import Snape from './assets/p_snape.png'
import Draco from './assets/p_draco.png'
import Luna from './assets/p_luna.png'
import Neville from './assets/p_neville.png'
const CharactersPage = () => {
  const characters = [
    { 
      name: "Harry Potter", 
      quote: '"I solemnly swear that I am up to no good!"',
      description: "The Boy Who Lived! Famous wizard with a lightning bolt scar, known for defeating You-Know-Who as a baby. Gryffindor's most legendary student!",
      house: "Gryffindor",
      bestFriends: "Ron & Hermione",
      favoriteSubject: "Defense Against the Dark Arts",
      imageUrl: `${HarryImage}`
    },
    { 
      name: "Hermione Granger", 
      quote: '"It\'s LeviOsa, not LevioSA!"',
      description: "The smartest witch of her age! Brilliant, bossy, and always with her nose in a book. Muggle-born genius who saves the day with her intelligence!",
      house: "Gryffindor",
      bestFriends: "Harry & Ron",
      favoriteSubject: "Arithmancy",
      imageUrl: `${Hermione}`
    },
    { 
      name: "Ron Weasley", 
      quote: '"Bloody hell!"',
      description: "Harry's loyal best friend and chess master! Part of the famous Weasley clan, always ready with a joke and a sandwich. Brave Gryffindor with a heart of gold!",
      house: "Gryffindor",
      bestFriends: "Harry & Hermione",
      favoriteSubject: "Care of Magical Creatures",
      imageUrl: `${Ron}`
    },
    { 
      name: "Albus Dumbledore", 
      quote: '"Nitwit! Blubber! Oddment! Tweak!"',
      description: "Hogwarts' most powerful headmaster! Wise, eccentric, and always one step ahead. The greatest wizard of modern times with a love for sherbet lemons!",
      house: "Gryffindor (Alumni)",
      bestFriends: "Magical Creatures",
      favoriteSubject: "Transfiguration",
      imageUrl: `${Dumbledore}`
    },
    { 
      name: "Severus Snape", 
      quote: '"Turn to page 394..."',
      description: "Mysterious Potions Master with a dark past. Complicated hero who protects Harry while pretending to hate him. Master of the dramatic entrance!",
      house: "Slytherin",
      bestFriends: "None (Complicated!)",
      favoriteSubject: "Potions",
      imageUrl: `${Snape}`
    },
    { 
      name: "Draco Malfoy", 
      quote: '"My father will hear about this!"',
      description: "Slytherin's most famous troublemaker! Rich, arrogant, and always causing drama. Harry's school nemesis with perfect blonde hair and a bad attitude!",
      house: "Slytherin",
      bestFriends: "Crabbe & Goyle",
      favoriteSubject: "Dark Arts",
      imageUrl: `${Draco}`
    },
    { 
      name: "Luna Lovegood", 
      quote: '"Things we lose have a way of coming back to us in the end."',
      description: "Wonderfully weird Ravenclaw girl! Sees the world differently, believes in magical creatures others can't see. Ultimate free spirit of Hogwarts!",
      house: "Ravenclaw",
      bestFriends: "Ginny Weasley",
      favoriteSubject: "Care of Magical Creatures",
      imageUrl: `${Luna}`
    },
    { 
      name: "Neville Longbottom", 
      quote: '"I will fight you!"',
      description: "The ultimate underdog who becomes a hero! Clumsy but brave Gryffindor who grows from scared kid to legendary wizard. Defeats Nagini in the final battle!",
      house: "Gryffindor",
      bestFriends: "Herbology Club",
      favoriteSubject: "Herbology",
      imageUrl: `${Neville}`
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
          Hogwarts Character Encyclopedia 🧙‍♂️
        </h1>
      </header>
      <SidebarLeft />
      <SideBarRight />
      {/* Characters Grid */}
      <main 
        className="grid grid-cols-4 gap-4 
        w-[70%] max-auto"
      >
        {characters.map((character, index) => (
          <div 
            key={index} 
            className="character-card bg-white 
            border-4 border-[#808080] border-b-white border-r-white
            p-4 shadow-md hover:shadow-lg 
            transition-all duration-300 
            cursor-pointer"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold uppercase">
                {character.name}
              </h3>
              <Star className="w-6 h-6 text-[#008080]" />
            </div>
            <div className="text-center mb-2">
              <div className="w-32 h-40 mx-auto flex items-center justify-center mb-2">
              <img
            src={character.imageUrl} // Correctly use imageUrl for each character
            alt={character.name}
            className="w-full h-full object-cover"
          />
              </div>
            </div>
            <p className="text-xs italic mb-2 text-center">
              {character.quote}
            </p>
            <p className="text-xs mb-2 text-gray-600">
              {character.description}
            </p>
            <div className="text-xs">
              <p><strong>House:</strong> {character.house}</p>
              <p><strong>Best Friends:</strong> {character.bestFriends}</p>
              <p><strong>Favorite Subject:</strong> {character.favoriteSubject}</p>
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
          Back to Mainpage
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

export default CharactersPage;