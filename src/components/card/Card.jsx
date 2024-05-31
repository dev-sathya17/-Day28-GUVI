import "./Card.css";
const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="product">
        <div className="thumbnail">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div className="details">
          <h2>{data.title}</h2>
          <p className="description">Description:</p>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="price-container">
        <div className="quantity">
          <input type="number" className="quantity-input" value={1} />
        </div>
        <div className="amount">
          <h3>${data.price}</h3>
          <span className="btn">REMOVE</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
