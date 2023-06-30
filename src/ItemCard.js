import CartIcon from "./CartIcon";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "./actionTypes";

const ItemCard = ({ id, name, price, description, image_url }) => {
  const dispatch = useDispatch();

  const addToCart = () =>
    dispatch({
      type: ADD_TO_CART,
      payload: { id, name, price, description, image_url },
    });

  return (
    <div id={id} className="card w-96 h-full bg-base-100 shadow-xl m-4">
      <figure className="px-10 pt-10">
        <img
          src={image_url}
          alt="item"
          className="rounded-xl h-60 w-60 object-scale-down"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {name.toUpperCase()} ${price}
        </h2>
        <button onClick={() => addToCart()} className="btn btn-primary w-full">
          <CartIcon />
        </button>
      </div>
    </div>
  );
};
export default ItemCard;
