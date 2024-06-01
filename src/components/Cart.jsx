import { useEffect } from "react";
import { TotalProvider } from "../contexts/TotalContext";
import { products } from "../data/products";
import SubTotal from "./SubTotal";
import Total from "./Total";
import Card from "./card/Card";
const Cart = () => {
  const prices = {};
  useEffect(() => {
    for (let product of products) {
      prices[product.id] = { price: product.price, quantity: 1 };
    }
  }, []);

  return (
    <div className="card-container">
      <TotalProvider>
        {products.map((product, index) => {
          return <Card data={product} key={index} prices={prices} />;
        })}
        <SubTotal />
        <Total />
      </TotalProvider>
    </div>
  );
};

export default Cart;
