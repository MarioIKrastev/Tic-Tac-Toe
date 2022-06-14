import style from "./ResetBtn.module.css";

type Props = {
  restart: () => void;
};

const ResetBtn: React.FC<Props> = ({ restart }) => {
  return (
    <div className={style["btn-container"]}>
      <button onClick={restart} className={style.btn}>
        Restart
      </button>
    </div>
  );
};
export default ResetBtn;
