import React from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import shortid from "shortid";

const Payment = () => {
  const getRandomKey = () => {
    return shortid.generate();
  };
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>12345 playschool dr</p>
            <p>New york, New york</p>
            <p>09876</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items for delivery</h3>
          </div>
        </div>
        <div className="payment_items">
          {basket.map(item => {
            const keyNew = getRandomKey();
            return (
              <CheckoutProduct
                key={keyNew}
                id={item.id}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
              />
            );
          })}
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
