import React from "react";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { final_subtotal } from "./Reducer";

const SubTotal = () => {
  const [{ Cart }, dispactch] = useStateValue();
  return (
    <div className=" row justify-content-center mb-2">
      
    <div className="card" style={{width:"30rem"}}>
      <div className="card-body">
        <div className="card-title text-dark mt-1">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <h5>
                  Final Subtotal ({Cart?.length} items): {value}
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
        <div className="card-title text-center pt-3">
          <button className=" btn btn-outline btn-warning ">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubTotal;
