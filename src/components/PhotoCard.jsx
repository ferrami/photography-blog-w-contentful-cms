function PhotoCard({ title, image, description, altText }) {
  return (
    <div className="card">
      <img src={image} alt={altText} className="card-img-top" />

      <div className="card-body">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PhotoCard;
