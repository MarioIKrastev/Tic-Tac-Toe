import "./App.css";
import WIN_CONDITIONS from "./components/utility/WinConditions";

import GameBoard from "./components/GameBoard/GameBoard";
import ResultBoard from "./components/ResultBoard/ResultBoard";
import ResetBtn from "./components/ResetButton/ResetBtn";

import { Players } from "./components/utility/types";
import { useState } from "react";

function App() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
  const [scores, setScores] = useState<Players>({ playerX: 0, playerO: 0 });
  const [gameOver, setGameOver] = useState(false);

  const boxClickHandler = (boxId: number) => {
    const updatedGameBoard: string[] = gameBoard.map(
      (value: string, idx: number) => {
        if (idx === boxId) {
          return xPlayer === true ? "X" : "O";
        } else {
          return value;
        }
      }
    );

    const winner = checkWinner(updatedGameBoard);

    if (winner) {
      if (winner === "X") {
        let { playerX } = scores;
        playerX += 1;
        setScores({ ...scores, playerX });
      } else {
        let { playerO } = scores;
        playerO += 1;
        setScores({ ...scores, playerO });
      }
    }

    setGameBoard(updatedGameBoard);
    setXPlayer(!xPlayer);
  };

  const checkWinner = (gameBoard: number[] | string[]) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (
        gameBoard[x] &&
        gameBoard[x] === gameBoard[y] &&
        gameBoard[y] === gameBoard[z]
      ) {
        setGameOver(true);
        return gameBoard[x];
      }
    }
  };

  const resetGameHandler = () => {
    setGameOver(false);
    setGameBoard(Array(9).fill(""));
    setXPlayer(true);
  };

  return (
    <div className="App">
      <ResultBoard scores={scores} xPlayer={xPlayer} />
      <GameBoard
        board={gameBoard}
        onClick={gameOver ? resetGameHandler : boxClickHandler}
      />
      <ResetBtn restart={resetGameHandler} />
    </div>
  );
}

export default App;
