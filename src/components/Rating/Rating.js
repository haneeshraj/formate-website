import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

function Rating({ rating }) {
  return (
    <div>
      {rating >= 1 ? (
        <AiFillStar />
      ) : rating >= 0.5 ? (
        <BsStarHalf />
      ) : (
        <AiOutlineStar />
      )}
      {rating >= 2 ? (
        <AiFillStar />
      ) : rating >= 1.5 ? (
        <BsStarHalf />
      ) : (
        <AiOutlineStar />
      )}
      {rating >= 3 ? (
        <AiFillStar />
      ) : rating >= 2.5 ? (
        <BsStarHalf />
      ) : (
        <AiOutlineStar />
      )}
      {rating >= 4 ? (
        <AiFillStar />
      ) : rating >= 3.5 ? (
        <BsStarHalf />
      ) : (
        <AiOutlineStar />
      )}
      {rating >= 5 ? (
        <AiFillStar />
      ) : rating >= 4.5 ? (
        <BsStarHalf />
      ) : (
        <AiOutlineStar />
      )}
    </div>
  );
}

export default Rating;
