import { useStateValue } from "./StateProvider";

import React from "react";

const UserCart = () => {
  const [{ Cart }, dispactch] = useStateValue();

  return <div className="container-fluid">
        <h2>Hello Guest</h2>
        <h2>Your Cart</h2>
      </div>
};

export default UserCart;
