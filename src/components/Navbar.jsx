import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [{ Cart }] = useStateValue();
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-primary gradient-custom">
        <div className="container-fluid">
          <button
            className="navbar-toggler justify-content-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto justify-content-end">
              <li className="nav-item active">
                <IconButton
                  onClick={(e) => {
                    navigate("/");
                  }}
                >
                  <HomeIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                  aria-label="Sign In or Sign Out"
                  className="text-white"
                  >
                   <div className="dropdown"data-bs-toggle="dropdown"
                  id="dropdownmenu" >
                  <AccountCircleIcon sx={{ color: "white" }}  />
                  <ul className="dropdown-menu">
                  <li>
                       <span className="dropdown-item-text">hello</span> 
                       <button className="btn btn-warning btn-outline">
                        SignIN
                       </button>
                      </li>
                     </ul>
                  </div>
                </IconButton>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-white"
              type="submit"
            >
              Search
            </button>
          </form>
          <IconButton
            onClick={(e) => {
              navigate("/cart");
            }}
            aria-label="add to shopping cart"
          >
            <AddShoppingCartIcon sx={{ color: "white" }} />
            <span className="small text-white">{Cart.length}</span>
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
