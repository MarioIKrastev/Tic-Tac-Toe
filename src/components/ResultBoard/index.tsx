import style from "./ResultBoard.module.css";

import { Players } from "../utility/types";

const ResultBoard = (props: { scores: Players; xPlayer: boolean }) => {
  const { playerX, playerO } = props.scores;

  return (
    <section className={style.scoreBoard}>
      <span
        className={`${style.score} ${style["x-score"]} ${
          !props.xPlayer && style.inactive
        }`}
      >
        X-Player: {playerX}
      </span>
      <span
        className={`${style.score} ${style["o-score"]} ${
          props.xPlayer && style.inactive
        }`}
      >
        O-Player: {playerO}
      </span>
    </section>
  );
};
export default ResultBoard;
