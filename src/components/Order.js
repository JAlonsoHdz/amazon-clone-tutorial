import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import shortid from "shortid";

function Order({ order }) {
  const getRandomKey = () => {
    return shortid.generate();
  };

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, hmma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item => (
        <CheckoutProduct
          key={getRandomKey()}
          id={item.id}
          image={item.image}
          price={item.price}
          rating={item.rating}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default Order;
