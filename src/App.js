import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

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
      </Routes>
    </Router>
  );
}

export default App;
