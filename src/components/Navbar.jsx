import HomeIcon from "@mui/icons-material/Home";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <HomeIcon />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
