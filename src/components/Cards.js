import StarIcon from "@mui/icons-material/Star";
import Currency from "./Currency";
import { useStateValue } from "./StateProvider";


const Cards = ({ id, image, title, price, ratings }) => {
  const [{ Cart }, dispatch] = useStateValue();
  const add_to_cart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        ratings: ratings,
      },
    });
  };
  return (
    <div className="col">
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={image} alt="" />
        </div>
        <div className="card-body text-white">
          <h6 className="card-title mt-2">{title}</h6>
          <h5 className="card-title mt-1">
            <Currency price_value={price} />
          </h5>
          <span className="d-flex flex-row">
            {Array(ratings)
              .fill()
              .map((_, i) => (
                // <p>⭐</p>
                <StarIcon sx={{ color: "yellow" }} />
              ))}
          </span>
          <br />
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-warning btn-block text-center text-white"
              onClick={add_to_cart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
