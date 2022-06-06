import "./GameBoard.css";
import Box from "./Box";

const GameBoard = ({ board, onClick }) => {
  return (
    <div className="gameBoard">
      {board.map((value, idx) => {
        return (
          <Box
            value={value}
            onClick={() => {
              value === null && onClick(idx);
            }}
          />
        );
      })}
    </div>
  );
};
export default GameBoard;
