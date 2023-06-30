import shopItems from "./data.json";
import ItemCard from "./ItemCard";
import ProductDetail from "./ProductDetail";
import { v4 as uuid } from "uuid";

const CardContainer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.entries(shopItems.products).map(([itemId, item]) => (
        <div key={itemId} className="flex flex-col">
          <ProductDetail id={itemId} {...item} />
          <ItemCard id={itemId} {...item} />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
