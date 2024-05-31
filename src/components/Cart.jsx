import { products } from "../data/products";
import SubTotal from "./SubTotal";
import Total from "./Total";
import Card from "./card/Card";
const Cart = () => {
  return (
    <div className="card-container">
      {products.map((product, index) => {
        return <Card data={product} key={index} />;
      })}
      <SubTotal />
      <Total />
    </div>
  );
};

export default Cart;
