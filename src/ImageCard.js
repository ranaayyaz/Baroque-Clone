function ImageCard(props) {
  return (
    <div>
      <img src={props.imgUrl} alt={props.title || "Baroque collection"} />
      <hr />
      <h1 className="text-3xl">{props.title}</h1>
    </div>
  );
}

export default ImageCard;
