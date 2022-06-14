import style from "./Box.module.css";

type Props = {
  value: string;
  onClick: () => void;
};

const Box: React.FC<Props> = ({ value, onClick }) => {
  const styled = value === "X" ? style.x : style.o;
  return (
    <button className={`${style.box} ${styled}`} onClick={onClick}>
      {value}
    </button>
  );
};
export default Box;
