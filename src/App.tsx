import React, { useState } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import { useAppSelector } from './hooks/state';
import { selectPoints } from './state/features';
import GamePreview from './components/GamePreview';
import useDeckService from './hooks/API/useDeckService';
import { SuitState } from './state/store/storeTypes';

function App() {
  const boardPoints = useAppSelector(selectPoints);
  const { data: { status, payload }, shuffleDeck } = useDeckService();
  const [gameInProgress, setGameInProgress] = useState(false);

  const startGame = () => {
    setGameInProgress(true);
  };

  const setNewGame: React.MouseEventHandler<HTMLButtonElement> = () => {
    shuffleDeck();
    setGameInProgress(false);
  };

  return (
    <div className="app-container d-flex items-center flex-column">
      <Header
        setNewGame={setNewGame}
        gameInProgress={gameInProgress as boolean}
        boardPoints={boardPoints as SuitState} />
      <div className="app-content">
        {gameInProgress ? <GameBoard cards={payload} /> : <GamePreview startGame={startGame} status={status} />}
      </div>
    </div>
  );
}

export default App;
