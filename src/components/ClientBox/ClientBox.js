import style from "./ClientBox.module.css";

function ClientBox() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1>Client Name</h1>
        <p>Artist, Graphic Designer, Producer</p>
      </div>
    </div>
  );
}

export default ClientBox;
