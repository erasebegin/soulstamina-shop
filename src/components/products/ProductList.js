import React from "react";
import ProductCard from "./ProductCard";
import ProductCardLarge from "./ProductCardLarge";

export default function ProductList({ items, isMobile }) {

  const products = items.edges;

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-desktop is-centered">
          {products.map((product) => {
            if (isMobile === true) {
              return <ProductCard data={product} key={product.node.id} />;
            } else {
              return <ProductCardLarge data={product} key={product.node.id} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}
