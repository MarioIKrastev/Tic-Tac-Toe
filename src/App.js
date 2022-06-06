import "./App.css";
import WIN_CONDITIONS from "./components/WinConditions";

import GameBoard from "./components/GameBoard";

function App() {
  const gameBoard = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <div className="App">
      <GameBoard board={gameBoard} onClick={null} />
    </div>
  );
}

export default App;
