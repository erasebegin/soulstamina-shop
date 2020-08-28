import React from "react"
import { CartProvider } from "./src/CartContext"
export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
)