import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary g-0" data-bs-theme="dark">
        <div className="container-fluid ">
          <a className="navbar-brand " href="/">
            <HomeIcon />
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <h6>
            Hello,Guest <br />
            Sign In
          </h6>
          <h6>
            Returns <br />& orders
          </h6>
          <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
