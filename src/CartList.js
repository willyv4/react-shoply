import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  REMOVE_ALL_OF_ITEM,
} from "./actionTypes";
import { useDispatch } from "react-redux";

const CartList = ({ item, qty }) => {
  const dispatch = useDispatch();
  const addToCart = (id, name, price, description, image_url) =>
    dispatch({
      type: ADD_TO_CART,
      payload: { id, name, price, description, image_url },
    });

  const removeFromCart = (id) =>
    dispatch({ type: REMOVE_FROM_CART, payload: id });

  const removeAll = (id) => dispatch({ type: REMOVE_ALL_OF_ITEM, payload: id });

  return (
    <tr>
      <td>
        <button
          onClick={() => removeAll(item.id)}
          className="ml-1 join-item btn-sm text-black/60 bg-primary/50"
        >
          x
        </button>
        <div className="flex items-center">
          <img
            className="w-32 h-fit rounded"
            src={item.image_url}
            alt="cartItem"
          />
          <div>
            <div className="ml-4 font-bold">{item.name.toUpperCase()}</div>
            <div className="ml-4 text-sm opacity-50">${item.price}</div>
          </div>
        </div>
      </td>
      <td className="w-52">
        {item.description}
        <br />
      </td>
      <td>
        <div className="join">
          <button
            onClick={() => removeFromCart(item.id)}
            className="join-item btn-sm text-black/60 bg-primary/50"
          >
            «
          </button>
          <button className="join-item btn-sm text-black/60 bg-primary/50">
            qty: {qty}
          </button>
          <button
            onClick={() =>
              addToCart(
                item.id,
                item.name,
                item.price,
                item.description,
                item.image_url
              )
            }
            className="join-item btn-sm text-black/60 bg-primary/50"
          >
            »
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartList;
