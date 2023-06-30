import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import CartList from "./CartList";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartItemIds = cartItems.map((item) => item.id);

  const filteredCart = cartItemIds.reduce((uniqueItems, itemId) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    const notUnique = !uniqueItems.find(
      (uniqueItem) => uniqueItem.item.id === item.id
    );

    if (item && notUnique) {
      uniqueItems.push({ item: item, qty: 1 });
    } else {
      const existingItem = uniqueItems.find(
        (uniqueItem) => uniqueItem.item.id === item.id
      );
      if (existingItem) existingItem.qty += 1;
    }
    return uniqueItems;
  }, []);

  if (cartItems.length === 0)
    return <div className="font-bold">Nothing in the cart yet!</div>;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          {filteredCart.map((item) => (
            <CartList key={uuid()} item={item.item} qty={item.qty} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;
