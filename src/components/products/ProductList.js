import React from "react";
import ProductCard from "./ProductCard";
import ProductCardLarge from "./ProductCardLarge";

export default function ProductList({ items, isMobile, limit }) {
  console.log({items})
  if (items) {
    const products = items.slice(0, limit);
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-desktop is-multiline">
            {products.map((product) => {
              if (isMobile === true) {
                return <ProductCard data={product} key={product.node.id} />;
              } else {
                return (
                  <div className="column is-half">
                    <ProductCardLarge data={product} key={product.node.id} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
}

ProductList.defaultProps = {
  limit: 5,
};
