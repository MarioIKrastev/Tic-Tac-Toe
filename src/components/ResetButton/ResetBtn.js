import style from "./ResetBtn.module.css";

const ResetBtn = ({ restart }) => {
  return (
    <div className={style["btn-container"]}>
      <button onClick={restart} className={style.btn}>
        Restart
      </button>
    </div>
  );
};
export default ResetBtn;
