import React from "react";

export default function CartItem({ data }) {
  const product = data.node;
  return (
    <div className="columns">
      <div className="column">{product.title}</div>
      <div className="column">{product.price}</div>
      <div className="column">{product.count}</div>
    </div>
  );
}
