import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import UserCart from "./components/UserCart";
import Login from "./components/Login";
import SubTotal from "./components/SubTotal";

function App() {
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
            <SubTotal/>
          </div>
        }/>
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
