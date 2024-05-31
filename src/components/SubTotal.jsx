import "./components.css";

const SubTotal = () => {
  return (
    <>
      <div className="sub-total">
        <div className="name">
          <h3>SUBTOTAL :</h3>
          <h4>SHIPPING :</h4>
        </div>
        <div className="sub-amount">
          <h3>$1000</h3>
          <h4>FREE</h4>
        </div>
      </div>
    </>
  );
};

export default SubTotal;
