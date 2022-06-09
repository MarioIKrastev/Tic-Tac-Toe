import style from "./GameBoard.module.css";
import Box from "../Box/Box";

const GameBoard = ({ board, onClick }) => {
  return (
    <div className={style.gameBoard}>
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
