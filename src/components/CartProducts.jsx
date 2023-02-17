import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Currency from "./Currency";

const CartProducts = ({ id, image, title, price, ratings }) => {
  return (
    <div style={{ maxWidth: "800px" }} className="card mb-3 text-white">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt="" className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8 bg-dark">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h5>
              <Currency price_value={price} />
            </h5>
            <span className="d-flex flex-row">
              {Array(ratings)
                .fill()
                .map((_, i) => (
                  <StarIcon sx={{ color: "yellow" }} />
                ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
