import { useEffect, useState } from "react";
import { TotalProvider } from "../contexts/TotalContext";
import { products } from "../data/products";
import SubTotal from "./SubTotal";
import Total from "./Total";
import Card from "./card/Card";
const Cart = () => {
  const prices = {};
  const [items, setItems] = useState(products);

  useEffect(() => {
    for (let product of products) {
      prices[product.id] = { price: product.price, quantity: 1 };
    }
  }, []);

  const handleRender = (id) => {
    const newProducts = items.filter((product) => {
      return product.id !== id;
    });
    setItems(newProducts);
  };

  return (
    <div className="card-container">
      <TotalProvider>
        {items.map((product, index) => {
          return (
            <Card
              data={product}
              key={index}
              prices={prices}
              handleRender={handleRender}
            />
          );
        })}
        <SubTotal />
        <Total />
      </TotalProvider>
    </div>
  );
};

export default Cart;
