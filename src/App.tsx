import React, { useEffect } from 'react';
import useDeckService from './hooks/API/useDeckService';
import GameBoard from './components/GameBoard/GameBoard';

function App() {
  const deckData = useDeckService();

  useEffect(() => {
    console.log('deckData: ', deckData);
  }, [deckData])

  return (
    <div className="app-container">
      <div className="app-content">
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
