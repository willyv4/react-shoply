import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "./actionTypes";
import CartIcon from "./CartIcon";

const ProductDetailInfo = ({ id, name, price, description, image_url }) => {
  const dispatch = useDispatch();

  const addToCart = () =>
    dispatch({
      type: ADD_TO_CART,
      payload: { id, name, price, description, image_url },
    });

  return (
    <div className="card bg-base-100 image-full w-[60rem] h-[40rem]">
      <figure>
        <img className="absolute object-fill" src={image_url} alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name.toUpperCase()} ${price}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={() => addToCart()} className="btn btn-accent w-full">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
