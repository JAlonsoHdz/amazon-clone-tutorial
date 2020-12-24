import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt=""
        ></img>
        <div className="checkout__title">
          <h2>Your shopping basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <h2>SubTotal component</h2>
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;