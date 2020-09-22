import React from "react";
import ProductCard from "./ProductCard";
import ProductCardLarge from "./ProductCardLarge";
import styled from "styled-components";

export default function ProductList({
  items,
  isMobile,
  limit,
  columnSize
}) {
  if (items) {
    const products = items.slice(0, limit);
    return (
      <Container className="is-paddingless">
        <div className="card-container">
          {products.map((product, index) => {
            if (isMobile === true) {
              return <ProductCard data={product} key={index} />;
            } else {
              return (
                <div className={`column ${columnSize}`}>
                  <ProductCardLarge data={product} key={index} />
                </div>
              );
            }
          })}
        </div>
      </Container>
    );
  } else {
    return <></>;
  }
}

const Container = styled.section`
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 2em auto;

    @media (min-width: 900px) {
      flex-flow: row wrap;
    }
  }
`;

ProductList.defaultProps = {
  limit: 5,
  cardClass: "columns is-desktop is-multiline",
  columnSize: "is-half"
};
