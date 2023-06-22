import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';
import biomechBasilisk from './images/biomech-basilisk.png';
import celestialRavager from './images/celestial-ravager.png';
import chromatech from './images/chromatech.png';
import chronospike from './images/chronospike.png';
import galaxianLeviathan from './images/galaxian-leviathan.png';
import ionclawAlpha from './images/ionclaw-alpha.png';
import metamorphisaur from './images/metamorphisaur.png';
import plasmaDrifter from './images/plasma-drifter.png';
import synthrosaur from './images/synthrosaur.png';
import technovore from './images/technovore.png';
import voidshifter from './images/voidshifter.png';
import xenothrasher from './images/xenothrasher.png';

function App() {
  const [ currentScore, setCurrentScore ] = useState(0);
  const [ bestScore, setBestScore ] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    const initialCards = [
      {
        id: 0,
        name: 'Biomech Basilisk',
        url: biomechBasilisk,
      },
      {
        id: 1,
        name: 'Celestial Ravager',
        url: celestialRavager,
      },
      {
        id: 2,
        name: 'Chromatech',
        url: chromatech,
      },
      {
        id: 3,
        name: 'Chronospike',
        url: chronospike,
      },
      {
        id: 4,
        name: 'Galaxian Leviathan',
        url: galaxianLeviathan,
      },
      {
        id: 5,
        name: 'Ionclaw Alpha',
        url: ionclawAlpha,
      },
      {
        id: 6,
        name: 'Metamorphisaur',
        url: metamorphisaur,
      },
      {
        id: 7,
        name: 'Plasma Drifter',
        url: plasmaDrifter,
      },
      {
        id: 8,
        name: 'Synthrosaur',
        url: synthrosaur,
      },
      {
        id: 9,
        name: 'Technovore',
        url: technovore,
      },
      {
        id: 10,
        name: 'Voidshifter',
        url: voidshifter,
      },
      {
        id: 11,
        name: 'Xenothrasher',
        url: xenothrasher,
      },
    ];

    const shuffledCards = shuffleArray(initialCards);
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (clickedCardId) => {
    if (clickedCards.includes(clickedCardId)) {
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 >= bestScore) {
        setBestScore(currentScore + 1);
      }
  
      setClickedCards((prevClickedCards) => [...prevClickedCards, clickedCardId]);
  
      const shuffledCards = shuffleArray(cards);
      setCards(shuffledCards);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <>
      <header>
        <h1>Memory card game: Sci-Fi Beasts Edition</h1>
        <div className='score-div'>
            <h3>Current score:</h3>
            <h3>{currentScore}</h3>
            <h3>Best score:</h3>
            <h3>{bestScore}</h3>
        </div>
      </header>
      <main>
        <h2>Get points by clicking on an image but don't click on any more than once!</h2>
        <Cards cards={cards} onCardClick={handleCardClick} />
      </main>
      <footer>
        <p>Copyright © 2023 DragicevicS</p>
      </footer>
    </>
  );
};

export default App;
