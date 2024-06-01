import { useTotal } from "../contexts/TotalContext";
import "./components.css";

const SubTotal = () => {
  const { total } = useTotal();
  return (
    <>
      <div className="sub-total">
        <div className="name">
          <h3>SUBTOTAL :</h3>
          <h4>SHIPPING :</h4>
        </div>
        <div className="sub-amount">
          <h3>${total}</h3>
          <h4>FREE</h4>
        </div>
      </div>
    </>
  );
};

export default SubTotal;
