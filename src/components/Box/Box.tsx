import style from "./Box.module.css";

const Box = ({ value, onClick }) => {
  const styled = value === "X" ? style.x : style.o;
  return (
    <button className={`${style.box} ${styled}`} onClick={onClick}>
      {value}
    </button>
  );
};
export default Box;
