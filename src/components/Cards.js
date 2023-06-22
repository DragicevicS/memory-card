import React from 'react';

function Cards({ cards, onCardClick}) { 
    return (
      <div className='cards-container'>
        {cards.map((card) => (
          <div key={card.id} className='card' onClick={() => onCardClick(card.id)}>
            <div>
              <img src={card.url} alt='Card' draggable='false' />
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