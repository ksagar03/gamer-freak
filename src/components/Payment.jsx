import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import CartProducts from "./CartProducts";
import { Link, useNavigate } from "react-router-dom";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { final_subtotal } from "./Reducer";
import { db } from "../firebase";

const Payment = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ Cart, user }, dispatch] = useStateValue();

  let total_price = final_subtotal(Cart);
  useEffect(() => {
    if (!stripe) {
      return;
    }
    // const toGetClientSecretKey = () => {
    //   const response = AxiosToFetch.post(
    //     `/payment/create?total=${final_subtotal(Cart) * 100}`
    //   );
    //   setClientSecret(response.data.clientSecret);
    // };
    //   // In above code we have given a url which will featch a secret key from clint side
    //   //  this secret chnages when ever we add or remove item from the basket
    //   // here we have multiplied a function with 100 and this is beacuse stripe only accepts currency
    //   // in sub currency format(i.e 1rupee in 100paise )
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("payment succeeded");
          break;
        case "processing":
          setMessage("payment processing");
          break;
        case "requires_payment_method":
          setMessage("payment was un-successful, please try again later ");
          break;
        default:
          setMessage("something went wrong.");
          break;
      }
    });
  }, [stripe, Cart, clientSecret]);
  // the above useeffect is used to create a unique key to make payment ,
  //useEffect is like a function which will be executed at the start of the application(i.e it exuctes only one time), but by introducing "[Cart]" dependency, useEffect function will execute when ever there is change in the "Cart"

  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: navigate("/order"),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("user")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            Cart: Cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
      });

    dispatch({
      type: "EMPTY_BASKET",
    });

    if (error.type === "card_error" || error.type === "validation error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured");
    }
    setIsLoading("false");
  };
  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center p-2">
        Checkout{" "}
        <Link style={{ color: "yellowgreen" }} to="/cart">
          {Cart.length} items
        </Link>
      </h2>
      <hr />
      {/* this above tag is used to draw a horizontal line */}
      <h3 className="mt-2">Review items and dehlivery </h3>
      <div className="container">
        {Cart.map((item) => (
          <CartProducts
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            ratings={0}
          />
        ))}
      </div>
      <hr />
      <div className="card container " style={{ width: "30rem" }}>
        <div className="card-body" onSubmit={handlesubmit}>
          <div className="card-title">
            <PaymentElement
              id="payment-element"
              options={paymentElementOptions}
            />
          </div>
          <div className="card-title text-dark">
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
              disabled={total_price === 0 ? true : false}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Payment;

// stripe check out button

// {/* <StripeCheckout
//               stripeKey={Public_key}
//               token={clientSecretKey}
//               name="Buy items"
//               amount={total_price * 100}
//               currency="INR"
//               shippingAddress
//               billingAddress
//               disabled={total_price === 0 ? true : false}
//             >
//               <button
//                 className=" btn btn-warning "
//                 style={{ minWidth: "20rem" }}
//                 disabled={total_price === 0 ? true : false}
//               >
//                 Buy Now
//               </button>
//             </StripeCheckout> */}
