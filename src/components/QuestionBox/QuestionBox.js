import { FiTriangle } from "react-icons/fi";
import style from "./QuestionBox.module.css";
import bruh from "../../../public/data/aboutQuestion";
import Image from "next/image";

function QuestionBox({ question, answer, icon }) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1 className={style.question}>
          <FiTriangle
            style={{
              fontSize: "1rem",
              transform: "rotate(90deg) scale(0.6)",
              marginRight: "0.5rem",
            }}
          />
          {!question
            ? "Officia ut deserunt occaecat enim labore duis irure nisi tempor mollit veniam."
            : question}
        </h1>
        <p className={style.answer}>
          {!answer
            ? "Tempor consectetur magna irure laboris. Deserunt nostrud quis anim mollit veniam esse eu non. Tempor consectetur magna irure laboris. Deserunt nostrud quis anim mollit veniam esse eu non."
            : answer}
        </p>
      </div>
      <Image
        className={style.icon}
        width={206 / 2.5}
        height={212 / 2.5}
        src={`/images/${!icon ? "icon1" : icon}.png`}
        alt={icon}
      />
    </div>
  );
}

export default QuestionBox;
