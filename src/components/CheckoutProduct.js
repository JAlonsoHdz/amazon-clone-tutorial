import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = props => {
  const [, dispatch] = useStateValue();

  const removeFromBaskket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id
    });
  };

  return (
    <div className="checkout__product">
      <img className="checkout__image" src={props.image} alt="" />
      <div className="checkout__productInfo">
        <p className="checkout__title">{props.title}</p>
        <p className="checkout__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <p className="checkout__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <span key={i++}>⭐</span>
            ))}
        </p>
        <button onClick={removeFromBaskket} className="checkout__removeButton">
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
