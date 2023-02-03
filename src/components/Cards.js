import React from "react";

const Cards = ({ image, title, price }) => {
  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top img-fluid" src={image} alt="" />
      </div>
      <div className="card-body text-white">
        <h6 className="card-title mt-2">{title}</h6>
        <p className="card-text mt-1"><span className="strong">₹</span>{price}</p>
      </div>
    </div>
  );
};

export default Cards;
