import React from 'react';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <header>
        <h1>Memory card game</h1>
        <div className='score-div'>
            <h3>Current score:</h3>
            <h3>0</h3>
            <h3>Best score:</h3>
            <h3>0</h3>
        </div>
      </header>
      <main>
        <Cards />
      </main>
      <footer>
        <p>Copyright © 2023 DragicevicS</p>
      </footer>
    </>
  );
};


export default App;
