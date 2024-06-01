import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data/products";

const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = products.reduce((accumulator, value) => {
      return accumulator + value.price;
    }, 0);
    setTotal(newTotal);
  }, [products]);

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

export const useTotal = () => useContext(TotalContext);
