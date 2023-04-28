import React from "react";
import { useStateValue } from "./StateProvider";
import CartProducts from "./CartProducts";
import { Link } from "react-router-dom";
const Payment = () => {
  const [{ Cart }] = useStateValue();
  return (
    <div className="container-fluid">
      <h2 className="text-center p-2">
        Checkout <Link to="/cart">{Cart.length} items</Link>{" "}
      </h2>
      <hr />
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
    </div>
  );
};

export default Payment;
