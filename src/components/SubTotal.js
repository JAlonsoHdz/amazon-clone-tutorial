import React from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";

function SubTotal() {
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order This order containts a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={1220.99}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="subTotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
