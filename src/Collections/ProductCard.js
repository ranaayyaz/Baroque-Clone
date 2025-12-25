import { IoHeartOutline } from "react-icons/io5";
import ImageCard from "../ImageCard";
import { Link } from "react-router-dom";

const ProductCard = ({
  productId,
  imgUrl,
  name,
  price,
  season,
  layout = "grid",
  compact = false,
}) => {
  if (compact) {
    return (
      <Link to={`/product/${productId || ""}`}>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <ImageCard imgUrl={imgUrl} />
          </div>
        </div>
      </Link>
    );
  }

  if (layout === "list") {
    return (
      <div className="flex items-center gap-4 p-4 border-b">
        <div className="w-36 h-36 flex-shrink-0">
          <ImageCard imgUrl={imgUrl} />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="tracking-widest uppercase">{name}</h4>
            <button className={`p-2 rounded-full shadow-md`}>
              <IoHeartOutline />
            </button>
          </div>
          <div className="mt-2">
            <strong>PKR {price}</strong>
            <div className="text-sm text-gray-600">{season}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/product/${productId || ""}`}>
      <div className="relative flex flex-col items-center">
        <span className="cursor-pointer w-full ">
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
    </Link>
  );
};

export default ProductCard;
