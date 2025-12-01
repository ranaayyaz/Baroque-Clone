// ImageCard.jsx
function ImageCard({ 
  imageUrl, 
  title, 
  description,
  className = "", // ✅ Yeh add kiya
  imgClassName = "" // ✅ Image ke liye alag class
}) {
  return (
    <div className={` ${className}`}>
      <img 
        src={imageUrl} 
        alt={title} 
        className={`w-full h-auto object-cover ${imgClassName}`} 
      />
      <h3 className="text-xl font-bold mt-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ImageCard;