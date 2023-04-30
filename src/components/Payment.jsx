import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import CartProducts from "./CartProducts";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import CurrencyFormat from "react-currency-format";
import { final_subtotal } from "./Reducer";
const Payment = () => {
  const [{ Cart }] = useStateValue();
  const [product, setProduct] = useState();
  var total_price = final_subtotal(Cart);
  let Public_key =
    "pk_test_51Lx20gSHgvSf9YWJnU5hpwZ8HmOUodPhMjoimQNjuu1GPQumoAV0ip6OficVVnszkjpFijVv5Kl8Amt0imLnt3pD00MtJASpXe";
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
            <StripeCheckout
              stripeKey={Public_key}
              token=""
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
            </StripeCheckout>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Payment;
