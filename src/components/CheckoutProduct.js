import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct(props) {
  console.log("this is he basket", props);

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
        <button className="checkout__removeButton">Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
