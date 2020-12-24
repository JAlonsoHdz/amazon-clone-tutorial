import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
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
          {basket.map(item => {
            return (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
              />
            );
          })}
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
