import style from "./GameBoard.module.css";
import Box from "../Box/Box";

type Props = {
    gameBoard: string[];
    onClick: (idx: number) => void;
};

const GameBoard: React.FC<Props> = ({ gameBoard, onClick }) => {
    return (
        <div className={style.gameBoard}>
            {gameBoard.map((value, idx) => {
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
