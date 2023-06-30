import React from "react";
import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

const Modal = () => {
  return (
    <>
      <button
        className="btn-accent p-5 rounded-full"
        onClick={() => window.my_modal_2.showModal()}
      >
        <CartIcon />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div method="dialog" className="modal-box w-fit max-w-5xl">
          <CartItems />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
