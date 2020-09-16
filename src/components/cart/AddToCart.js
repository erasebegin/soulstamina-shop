import React, { useState } from "react";

export default function AddToCart({ currentProduct }) {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cartData")) {
      setCartData(JSON.parse(localStorage.getItem("cartData")));
    }
  }, []);

  const addItem = () => {
    setCartData([...cartData, currentProduct]);
  };

  let products;
  if (localStorage.getItem("cartItems")) {
    products = JSON.parse(localStorage.getItem("cartItems"));
    let newArr = [...products, newProduct];
    localStorage.setItem("cartItems", JSON.stringify(newArr));
  } else {
    localStorage.setItem("cartItems", JSON.stringify([newProduct]));
    products = newProduct;
  }

  const quantity = products.length;

  console.log("products: ", products, "qty: ", quantity);

  return (
    <button className="button is-warning is-light is-size-3 is-size-4-mobile">
      <FaCartPlus onClick={addItem} />
    </button>
  );
}
