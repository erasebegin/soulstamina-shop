import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { FaCartPlus } from "react-icons/fa";

export default function AddToCartButton({id}) {
  const { addToCart } = useContext(CartContext);
  return (
    <button className="button is-warning is-light is-size-3 is-size-4-mobile">
      <FaCartPlus onClick={() => addToCart(id)} />
    </button>
  );
}
