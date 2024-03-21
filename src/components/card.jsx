function MyCard({ image, name, description }) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
  
  export default MyCard;
  