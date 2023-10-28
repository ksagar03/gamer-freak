import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { final_subtotal } from "./Reducer";
import React from "react";
import AxiosToFetch from "../axios";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import CartProducts from "./CartProducts";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const Payments = () => {
  const [{ Cart }, dispatch] = useStateValue();
  const [stripepromise, setStripepromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  /* eslint-disable */
  useEffect(() => {
    AxiosToFetch({
      method: "post",
      url: `/payment/create?total=${final_subtotal(Cart) * 100}`,
    }).then(async (res) => {
      console.log(res);
      const clintSecret = await res.data.clientSecret;
      setClientSecret(clintSecret);
    });
  }, [Cart]);
  useEffect(() => {
    AxiosToFetch.get("/config").then(async (r) => {
      const { publishablekey } = await r.data;

      setStripepromise(loadStripe(publishablekey));
    });
  }, []);
  const appearance = {
    theme: "night",
    labels: "floating",
  };
  return (
    <div className="container-fluid">
      <h2 className="text-center p-2">
        Your Checkout{" "}
        <Link className="text-warning" to="/cart">
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
      {clientSecret && stripepromise && (
        <Elements stripe={stripepromise} options={{ clientSecret, appearance,}}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payments;
