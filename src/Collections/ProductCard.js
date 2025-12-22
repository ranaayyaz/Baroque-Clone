import { IoHeartOutline } from "react-icons/io5";
import ImageCard from "../ImageCard";

const ProductCard = ({ imgUrl, name, price, season }) => {
  return (
    <div className="relative flex flex-col items-center">
      <span className="cursor-pointer w-full">
        <ImageCard imgUrl={imgUrl} />
      </span>

      {/* Heart button on top-right corner */}
      <button
        className={`absolute top-2 left-2 p-2 rounded-full shadow-md z-10`}
      >
        <IoHeartOutline />
      </button>

      <span className="space- text-center mt-4 leading-7">
        <span className="tracking-widest uppercase">{name}</span>
        <br />
        <strong>PKR {price}</strong>
        <br />
        <span className="text-sm text-upercase">{season}</span>
      </span>
    </div>
  );
};

export default ProductCard;
