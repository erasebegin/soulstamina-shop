import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function CategorySelector() {
  const categories = [
    { title: "canvases", slug: "canvas" },
    { title: "postcards", slug: "postcards" },
    { title: "prints", slug: "prints" }
  ];
  return (
    <Container className="section">
      <div className="columns is-multiline">
        {categories.map(category => {
          return (
            <Link className="column" to={category.slug}>
              <div className="category-card">
                <h1>{category.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  * {
    border: 1px solid red;
  }

  .category-card {
    background {
    }
  }
`;
