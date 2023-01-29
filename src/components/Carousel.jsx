import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          {/* <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button> */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.youtube.com/vi/CU_dlbxpbjE/hqdefault.jpg"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://voltcave.com/wp-content/uploads/2020/04/robeytech-senna-featured-image.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dlcdnwebimgs.asus.com/gain/1B5E5B9C-4413-44A0-9B66-074A75A20172/fwebp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          {/* <div className="carousel-item">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/1932206591/display_1500/stock-photo-moscow-russia-march-presentation-of-a-new-product-from-sony-wireless-white-console-1932206591.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
