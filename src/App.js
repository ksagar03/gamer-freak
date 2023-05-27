import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import UserCart from "./components/UserCart";
import Login from "./components/Login";
import SubTotal from "./components/SubTotal";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import Order from "./components/Order";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function App() {
  const [{}, dispatch] = useStateValue();
  
  // const promise= loadStripe(process.env.REACT_APP_STRIPE_KEY)
  const promise= loadStripe("pk_test_51Lx20gSHgvSf9YWJnU5hpwZ8HmOUodPhMjoimQNjuu1GPQumoAV0ip6OficVVnszkjpFijVv5Kl8Amt0imLnt3pD00MtJASpXe")
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "USER_NAME",
          user_name: user.displayName,
          user: user,
        });
      } else {
        dispatch({
          type: "USER_NAME",
          user_name: null,
        });
      }
      console.log(user);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div className="container-fluid bg-dark">
              <div className="row  ">
                <Navbar />
              </div>
              <div className="row mt-5">
                <UserCart />
              </div>
            </div>
          }
        />
        <Route
          path="/sub"
          element={
            <div>
              <SubTotal />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/payment"
          element={
            <div>
              <Elements stripe={promise}>
              <Payment  />
              </Elements>
            </div>
          }
        />
        <Route
          path="/order"
          element={
            <div>
              <Order />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
