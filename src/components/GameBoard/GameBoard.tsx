import style from "./GameBoard.module.css";
import Box from "../Box/Box";

type Props = {
  board: string[];
  onClick: (idx: number) => void;
};

const GameBoard: React.FC<Props> = ({ board, onClick }) => {
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
