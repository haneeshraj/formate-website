import Link from "next/link";
import Rating from "../Rating/Rating";
import style from "./ReviewBox.module.css";

function ReviewBox({ rating, comment, website, services, styling }) {
  const serv = !services
    ? ["services 1", "services 2", "services 3"]
    : services;

  return (
    <div className={style.container} style={styling}>
      <div className={style.clientName}>The Formante</div>
      <div className={style.reviewDetails}>
        <p className={style.comment}>
          {!comment
            ? "Consequat ad reprehenderit esse sunt magna elit velit esse aliquip. Lorem ex nisi occaecat exercitation."
            : comment}
        </p>
        <div className={style.source}>
          <span>
            <Rating rating={rating} />
          </span>
          <Link href={"https://www" + website}>
            <span className={style.website}>
              {!website ? "fiverr.com" : website}
            </span>
          </Link>
        </div>
      </div>
      <div className={style.services}>
        {serv.map((service, index) => {
          return (
            <div key={index} className={style.box}>
              {service}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewBox;
