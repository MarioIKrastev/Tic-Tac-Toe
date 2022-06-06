import "./GameBoard.css";
import Box from "./Box";

const GameBoard = ({ board, onClick }) => {
  return (
    <>
      {board.map((value, idx) => {
        return (
          <Box
            value={value}
            onClick={() => {
              onClick(idx);
            }}
          />
        );
      })}
    </>
  );
};
export default GameBoard;
