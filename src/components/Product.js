import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>Amazon alexa bundle</p>
        <p className="product__price">
          <small>$</small>
          <strong>199.99</strong>
        </p>
        <div className="product__rating">
          <p>💣</p>
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        atl=""
      />

      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
