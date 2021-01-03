import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({id, image, title, price, rating, hiddenButton}) => {
  const [, dispatch] = useStateValue();

  const removeFromBaskket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <div className="checkout__product">
      <img className="checkout__image" src={image} alt="" />
      <div className="checkout__productInfo">
        <p className="checkout__title">{title}</p>
        <p className="checkout__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkout__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i++}>⭐</span>
            ))}
        </p>
        {!hiddenButton && (<button onClick={removeFromBaskket} className="checkout__removeButton">
          Remove from basket
        </button>)}
      </div>
    </div>
  );
};

export default CheckoutProduct;
