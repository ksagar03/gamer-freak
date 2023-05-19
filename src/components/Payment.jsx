import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import CartProducts from "./CartProducts";
import { Link } from "react-router-dom";
// import StripeCheckout from "react-stripe-checkout";
import CurrencyFormat from "react-currency-format";
import { final_subtotal } from "./Reducer";
import AxiosToFetch from "../axios";
const Payment = () => {
  const [{ Cart }] = useStateValue();
  var total_price = final_subtotal(Cart);
  const toGetClientSecretKey = async () => {
    // let price_id = Cart.map((items) => items.id);
    // price_id= JSON.stringify(price_id)
    let products  = JSON.stringify(Cart)
    const response = await AxiosToFetch({
      method: "post",
      url: `/create-checkout-session`,
      data: products,
      headers: { "Content-Type": "multipart/form-data" }
      
    //   // In above code we have given a url which will featch a secret key from clint side
    //   //  this secret chnages when ever we add or remove item from the basket
    //   // here we have multiplied a function with 100 and this is beacuse stripe only accepts currency
    //   // in sub currency format(i.e 1rupee in 100paise )
    })

    console.log(response);
    // setClientSecretKey(response.data.clientSecret);
  };
  // the above useeffect is used to create a unique key to make payment ,
  //useEffect is like a function which will be executed at the start of the application(i.e it exuctes only one time), but by introducing "[Cart]" dependency, useEffect function will execute when ever there is change in the "Cart"
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
        <div className="card-body">
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
              onClick={toGetClientSecretKey}
              className=" btn btn-warning "
              style={{ minWidth: "20rem" }}
              disabled={total_price === 0 ? true : false}
            >
              Buy Now
            </button>
            {/* <StripeCheckout
              stripeKey={Public_key}
              token={clientSecretKey}
              name="Buy items"
              amount={total_price * 100}
              currency="INR"
              shippingAddress
              billingAddress
              disabled={total_price === 0 ? true : false}
            >
              <button
                className=" btn btn-warning "
                style={{ minWidth: "20rem" }}
                disabled={total_price === 0 ? true : false}
              >
                Buy Now
              </button>
            </StripeCheckout> */}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Payment;
