import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { final_subtotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

const CheckoutForm = () => {
  const [{ Cart }, dispatch] = useStateValue();
  let total_price = final_subtotal(Cart);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [processing, setProcessing] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      alert("getting in valid response");
    }
    setProcessing(true);
    console.log(elements);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: navigate("/order"),
      },
    });
    console.log(elements);
    if (error) {
      setMessage(error.message);
    }
    setProcessing("false");
  };

  return (
    <form
      className="card container bg-dark "
      style={{ width: "30rem" }}
      onSubmit={handlesubmit}
    >
      <div className="card-body">
        <div className="card-title">
          <PaymentElement />
        </div>
        <div className="card-title ">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <h5>
                  Order Total ({Cart?.length} items) : {value}
                </h5>
              </>
            )}
            decimalScale={2}
            displayType="text"
            value={total_price}
            thousandSeparator={true}
            prefix="₹"
          />
        </div>

        <div className="card-title text-center pt-1">
          <button
            className=" btn btn-warning "
            style={{ minWidth: "20rem" }}
            disabled={total_price === 0 ? true : false && processing}
          >
            Buy Now
          </button>
          <div className="text-danger pt-1">{message}</div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
