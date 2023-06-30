import SearchIcon from "./SearchIcon";
import ProductDetailInfo from "./ProductDetailInfo";

const ProductDetail = (props) => {
  console.log(props);
  const showModal = () => {
    const modal = document.getElementById(props.id);
    modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById(props.id);
    modal.close();
  };

  return (
    <>
      <>
        <button className="btn m-4 -mb-4" onClick={showModal}>
          <SearchIcon /> Product Details
        </button>
        <dialog id={props.id} className="modal">
          <div method="dialog" className="modal-box w-fit max-w-5xl">
            <ProductDetailInfo {...props} />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>Close</button>
          </form>
        </dialog>
      </>
    </>
  );
};

export default ProductDetail;
