import style from "./ResultBoard.module.css";

const ResultBoard = ({ scores, xPlayer }) => {
  const { playerX, playerO } = scores;

  return (
    <section className={style.scoreBoard}>
      <span
        className={`${style.score} ${style["x-score"]} ${
          !xPlayer && style.inactive
        }`}
      >
        X-Player: {playerX}
      </span>
      <span
        className={`${style.score} ${style["o-score"]} ${
          xPlayer && style.inactive
        }`}
      >
        O-Player: {playerO}
      </span>
    </section>
  );
};
export default ResultBoard;
