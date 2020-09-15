import React, { useState, useEffect, createContext } from "react";
import useProductData from "./hooks/useProductData";

export const CartContext = createContext();

export function CartProvider(props) {
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState([]);
  const [cart, setCart] = useState([]);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [purchase, setPurchased] = useState([]);

  //pull in product data using gatsby static query in custom hook
  const allProducts = useProductData();

  const getProducts = () => {
    let tempProducts = [];
    allProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    setProducts(tempProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getItem = (id) => {
    const product = products.find((item) => id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetail(product);
  };

  const addToCart = (id) => {
    const checkDuplicate = cart.find((item) => {
      return item.node.id === id;
    });

    if (checkDuplicate) {
      increment(id);
    } else {
      const tempProducts = [...products];
      const index = tempProducts.indexOf(getItem(id));
      const product = tempProducts[index];
      product.node.inCart = true;
      const price = product.node.price;
      product.node.total = price;
      product.node.count = 1;
      setProducts([...tempProducts]);
      setCart((prevCart) => [...prevCart, product]);
    }

    console.log({ cart });
  };

  const increment = (id) => {
    const tempCart = [...cart];
    const index = tempCart.indexOf(getItem(id));
    const product = tempCart[index];
    product.node.count += 1;
    product.node.total = product.node.price * product.node.count;

    setCart([...tempCart]);
  };

  const decrement = (id) => {
    const tempCart = [...cart];
    const index = tempCart.indexOf(getItem(id));
    const product = tempCart[index];
    product.count -= 1;
    product.total = product.price * product.count;

    setCart([...tempCart]);

    if (product.count <= 0) {
      removeItem(id);
    }
  };

  const removeItem = (id) => {
    const tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = false;
    product.count = 0;
    setProducts([...tempProducts]);
    setCart([...tempCart]);
  };

  const clearCart = () => {
    if (purchaseComplete === true) {
      setPurchased(cart);
    }
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        detail,
        cart,
        handleDetail,
        addToCart,
        increment,
        decrement,
        removeItem,
        clearCart,
        purchaseComplete,
        setPurchaseComplete,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
