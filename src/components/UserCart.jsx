import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import React from "react";
import CartProducts from "./CartProducts";
import SubTotal from "./SubTotal";
const UserCart = () => {
  const [{ Cart }, dispactch] = useStateValue();
  const toshowsubtotal = (c) => {
    if (c === 0) {
      return (
        <Link className="text-white" to={"/"}>
          Please add items to the Cart
        </Link>
      );
    } else {
      return <SubTotal />;
    }
  };
  return (
    <div className="mt-4 text-white">
      <h5>Hello Guest</h5>
      <h2>Your Cart</h2>
      <div>
        {Cart.map((item) => (
          <CartProducts
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            ratings={item.ratings}
          />
        ))}
        {toshowsubtotal(Cart?.length)}
      </div>
    </div>
  );
};

export default UserCart;
