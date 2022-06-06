import "./ResetBtn.css";

const ResetBtn = ({ restart }) => {
  return (
    <div className="btn-container">
      <button onClick={restart} className="btn">
        Restart
      </button>
    </div>
  );
};
export default ResetBtn;
