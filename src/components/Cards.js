import React from 'react';
import biomechBasilisk from '../images/biomech-basilisk.png';
import celestialRavager from '../images/celestial-ravager.png';
import chromatech from '../images/chromatech.png';
import chronospike from '../images/chronospike.png';
import galaxianLeviathan from '../images/galaxian-leviathan.png';
import ionclawAlpha from '../images/ionclaw-alpha.png';
import metamorphisaur from '../images/metamorphisaur.png';
import plasmaDrifter from '../images/plasma-drifter.png';
import synthrosaur from '../images/synthrosaur.png';
import technovore from '../images/technovore.png';
import voidshifter from '../images/voidshifter.png';
import xenothrasher from '../images/xenothrasher.png';

function Cards() {
  const cards =
    [
      {
        id: 1,
        name: 'Biomech Basilisk',
        url: biomechBasilisk,
        clicked: false
      },
      {
        id: 2,
        name: 'Celestial Ravager',
        url: celestialRavager,
        clicked: false
      },
      {
        id: 3,
        name: 'Chromatech',
        url: chromatech,
        clicked: false
      },
      {
        id: 4,
        name: 'Chronospike',
        url: chronospike,
        clicked: false
      },
      {
        id: 5,
        name: 'Galaxian Leviathan',
        url: galaxianLeviathan,
        clicked: false
      },
      {
        id: 6,
        name: 'Ionclaw Alpha',
        url: ionclawAlpha,
        clicked: false
      },
      {
        id: 7,
        name: 'Metamorphisaur',
        url: metamorphisaur,
        clicked: false
      },
      {
        id: 8,
        name: 'Plasma Drifter',
        url: plasmaDrifter,
        clicked: false
      },
      {
        id: 9,
        name: 'Synthrosaur',
        url: synthrosaur,
        clicked: false
      },
      {
        id: 10,
        name: 'Technovore',
        url: technovore,
        clicked: false
      },
      {
        id: 11,
        name: 'Voidshifter',
        url: voidshifter,
        clicked: false
      },
      {
        id: 12,
        name: 'Xenothrasher',
        url: xenothrasher,
        clicked: false
      },
    ];

  
    return (
      <div className='cards-container'>
        {cards.map((card) => (
          <div key={card.id} className='card'>
            <div>
              <img src={card.url} alt='Card' />
            </div>
            <div>
              <h3>{card.name}</h3>
            </div>
          </div>
        ))}
      </div>
    ); 
};

export default Cards;