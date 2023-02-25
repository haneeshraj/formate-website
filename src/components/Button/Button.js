import { useRef } from "react";
import style from "./Button.module.css";

function Button({ children, height, width, main, bg }) {
  const styling = {
    height: !height ? "40px" : height,
    width: !width ? "175px" : width,
  };
  const audioRef = useRef();
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    } else {
      // Throw error
    }
  };
  return (
    <div style={styling} className={style.button} onClick={play}>
      <audio ref={audioRef} src="sfx.mp3" />
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
