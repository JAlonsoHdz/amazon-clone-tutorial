import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

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
          <storng>{props.price}</storng>
        </p>
        <p className="checkout__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        <button onClick={removeFromBaskket} className="checkout__removeButton">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
