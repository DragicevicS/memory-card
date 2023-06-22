import React from 'react';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <header>
        <h1>Memory card game: Sci-Fi Beasts Edition</h1>
        <div className='score-div'>
            <h3>Current score:</h3>
            <h3>0</h3>
            <h3>Best score:</h3>
            <h3>0</h3>
        </div>
      </header>
      <main>
        <h2>Get points by clicking on an image but don't click on any more than once!</h2>
        <Cards />
      </main>
      <footer>
        <p>Copyright © 2023 DragicevicS</p>
      </footer>
    </>
  );
};


export default App;
