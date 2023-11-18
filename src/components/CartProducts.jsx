import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Currency from "./Currency";
import { useStateValue } from "./StateProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";

const CartProducts = ({ id, image, title, price, ratings , hidebutton}) => {
  const [{ Cart }, dispatch] = useStateValue();
  function RemoveFromCart() {
    dispatch({
      type: "REMOVE_FROM_THE_CART",
      id: id,
    });
  }
  return (
    <div style={{ maxWidth: "800px" }} className="card mb-3 text-white">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt="" className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8 bg-dark">
          <div className="card-body">
            <h6 className="">{title}</h6>
            <h6>
              <Currency price_value={price} />
            </h6>
            <span className="d-flex flex-row mb-2">
              {Array(ratings)
                .fill()
                .map((_, i) => (
                  <StarIcon sx={{ color: "yellow" }} fontSize="small" />
                ))}
            </span>
            {/* bellow Button component is material ui component  */}
            { !hidebutton && <Button 
              variant="contained"
              onClick={RemoveFromCart}
              endIcon={<DeleteIcon />}
              color="warning"
            >
              Remove From Cart
              {/* <IconButton>
                <DeleteIcon sx={{ color: "white" }} />
              </IconButton> */}
            </Button>}
            {/* <button
              type="button"
              className="btn btn-outline-warning btn-block text-center text-white avtive"
              onClick={RemoveFromCart}
            >
              Remove From Cart{" "}
              <IconButton size="small">  <DeleteIcon sx={{ color: "white" }} fontSize="small" /></IconButton>
              {/* <DeleteIcon sx={{ color: "white" }} fontSize="small" /> */}
            {/* </button> */} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
