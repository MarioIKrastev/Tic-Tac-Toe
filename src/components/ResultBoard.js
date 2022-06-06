import "./ResultBoard.css";

const ResultBoard = ({ scores, xPlayer }) => {
  const { playerX, playerO } = scores;

  return (
    <section className="scoreBoard">
      <span className={`score x-score ${!xPlayer && "inactive"}`}>
        X-Player: {playerX}
      </span>
      <span className={`score o-score ${xPlayer && "inactive"}`}>
        O-Player: {playerO}
      </span>
    </section>
  );
};
export default ResultBoard;
