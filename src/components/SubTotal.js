import React from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order This order containts a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="subTotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
