import { useStateValue } from "./StateProvider";

import React from "react";
import CartProducts from "./CartProducts";

const UserCart = () => {
  const [{ Cart }, dispactch] = useStateValue();

  return (
    <div className="mt-4">
      <h5>Hello Guest</h5>
      <h2>Your Cart</h2>
      <div>
        {Cart.map((item)=>
        (
          <CartProducts
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          ratings={item.ratings}
          />
        ))}
      </div>
    </div>
    
);
};

export default UserCart;
