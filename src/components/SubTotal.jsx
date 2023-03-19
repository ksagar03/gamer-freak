import React from "react";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { final_subtotal } from "./Reducer";
import "../css/subtotal.css"

const SubTotal = () => {
  const [{ Cart }, dispactch] = useStateValue();
  return (
    <div className="card cardstyle">
      <div className="card-body">
        <div className="card-title text-dark mt-1">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <h5>
                  Subtotal ({Cart?.length} items): {value}
                </h5>
                
              </>
            )}
            decimalScale={2}
            displayType={"text"}
            value={final_subtotal(Cart)}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </div>
        <div className="card-title">
          <button className="btn btn-outline btn-warning">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubTotal;
