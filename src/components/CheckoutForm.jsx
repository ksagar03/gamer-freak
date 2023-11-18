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
import { db } from "../firebase";
import { doc, collection, setDoc } from "firebase/firestore";

const CheckoutForm = () => {
  const [{ Cart, user }, dispatch] = useStateValue();
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
    const usersCollection = collection(db, "users");
    const userDoc = doc(usersCollection, user?.uid);
    const userOrderCollection = collection(userDoc, "orders");
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://gamer-freak.web.app/order",
        // return_url: "http://localhost:3000/order",
      },
      redirect: "if_required",
      //  this above code will only redirect when the it required
      // i Have written this because the below what and all code i have written are not executing due to redirecting
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && user) {
      const userOrderDoc = doc(userOrderCollection, paymentIntent.id);
      // const userOrderData  = collection(doc(collection(db,"users"),user?.uid), paymentIntent.id)
      // by using the above line I'm getting some error 

      console.log("userOrder path has been defined");
      await setDoc(userOrderDoc, {
        Cart: Cart,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
    }
    // .then(({ paymentIntent }) => {
    //   let setOrderdata = collection(
    //     doc(collection(db, "users"), user?.id),
    //     paymentIntent.id
    //   );
    //   console.log("orderdata", setOrderdata);
    //   setDoc(setOrderdata, {
    //     Cart: Cart,
    //     amount: paymentIntent.amount,
    //     created: paymentIntent.created,
    //   });

    setProcessing("false");
    dispatch({
      type: "EMPTY_BASKET",
    });
    navigate("/order");
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
            {processing ? "Processing..." : "Buy Now"}
          </button>
          <div className="text-danger pt-1">{message}</div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
