import { useState } from "react";
import "./Card.css";
import { useTotal } from "../../contexts/TotalContext";
const Card = ({ data, prices }) => {
  const [quantity, setQuantity] = useState(1);
  const { setTotal } = useTotal();
  const handleChange = (e, id) => {
    if (quantity !== "") setQuantity(parseInt(e.target.value));

    prices[id].quantity = parseInt(e.target.value);

    updateTotal();
  };

  const updateTotal = () => {
    let total = 0;
    for (let price in prices) {
      total += prices[price].price * prices[price].quantity;
    }
    setTotal(total);
  };

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
          <input
            type="number"
            className="quantity-input"
            min={1}
            value={quantity}
            onChange={(e) => handleChange(e, data.id)}
          />
        </div>
        <div className="amount">
          <h3>${!isNaN(data.price * quantity) ? data.price * quantity : ""}</h3>
          <span className="btn">REMOVE</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
