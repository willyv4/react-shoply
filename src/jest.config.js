import rootReducer from "./rootReducer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_OF_ITEM,
} from "./actionTypes";

test("ADD_TO_CART action adds item to the cart", () => {
  const initialState = { cart: [] };
  const action = {
    type: ADD_TO_CART,
    payload: { id: 1, name: "Item 1" /* item data */ },
  };

  const newState = rootReducer(initialState, action);

  expect(newState.cart).toHaveLength(1);
  expect(newState.cart[0]).toEqual(action.payload);
});

test("REMOVE_FROM_CART action removes item from the cart", () => {
  const initialState = { cart: [{ id: 1, name: "Item 1" /* item data */ }] };
  const action = {
    type: REMOVE_FROM_CART,
    payload: 1, // item ID to remove
  };

  const newState = rootReducer(initialState, action);

  expect(newState.cart).toHaveLength(0);
});

test("REMOVE_ALL_OF_ITEM action removes all instances of an item from the cart", () => {
  const initialState = {
    cart: [
      { id: 1, name: "Item 1" /* item data */ },
      { id: 1, name: "Item 1" /* item data */ },
      { id: 2, name: "Item 2" /* item data */ },
    ],
  };
  const action = {
    type: REMOVE_ALL_OF_ITEM,
    payload: 1, // item ID to remove
  };

  const newState = rootReducer(initialState, action);

  expect(newState.cart).toHaveLength(1);
  expect(newState.cart[0]).toEqual({ id: 2, name: "Item 2" /* item data */ });
});
