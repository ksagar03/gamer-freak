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

function App() {
  const [{}, dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((user) =>{ 
      if(user){
        dispatch({
          type: "USER_NAME",
          user_name: user.displayName
        })
      }
      console.log(user)});
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
      </Routes>
    </Router>
  );
}

export default App;
