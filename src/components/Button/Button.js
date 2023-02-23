import style from "./Button.module.css";

function Button({ children, height, width, main, bg }) {
  const styling = {
    height: !height ? "40px" : height,
    width: !width ? "175px" : width,
  };
  return (
    <div style={styling} className={style.button}>
      <div
        className={style.top}
        style={{
          background: !main ? "#2cb67d" : main,
          borderColor: !bg ? "#1b724e" : bg,
        }}
      >
        {children}
      </div>
      <div
        className={style.bottom}
        style={{ background: !bg ? "#1b724e" : bg }}
      />
    </div>
  );
}

export default Button;
