import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_OF_ITEM,
} from "./actionTypes";

const INITIAL_STATE = { cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      const idx = state.cart.findIndex((item) => item.id === action.payload);
      if (idx !== -1) {
        const newCart = [...state.cart];
        newCart.splice(idx, 1);

        return {
          ...state,
          cart: newCart,
        };
      }
      return state;

    case REMOVE_ALL_OF_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}
// end

export default rootReducer;
