import { products } from "../data/products";
import SubTotal from "./SubTotal";
import Card from "./card/Card";
const Cart = () => {
  return (
    <div className="card-container">
      {products.map((product, index) => {
        return <Card data={product} key={index} />;
      })}
      <SubTotal />
    </div>
  );
};

export default Cart;
