import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-primary bg-primary">
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
                <IconButton>
                  {" "}
                  <HomeIcon sx={{ color: "white" }} />{" "}
                </IconButton>
                <IconButton
                  aria-label="Sign In or Sign Out"
                  className="text-white"
                >
                  <AccountCircleIcon sx={{ color: "white" }} />
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
          <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
