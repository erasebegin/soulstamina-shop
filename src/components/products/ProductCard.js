import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import generateSlug from "../../utils/GenerateSlug";
import CategoryButton from "../globals/CategoryButton";
import CartButton from "../cart/AddToCartButton";

export default function productCard({ data, nodeless }) {
  const { id, title, description, price, category, gallery } = data
    ? data.node
    : nodeless;

  return (
    <Card className="column">
      <div className="card card-equal-height">
        <div className="card-image">
          <figure className="image">
            <Link to={`/${generateSlug(title)}`}>
              <Img
                fluid={gallery[0].fluid}
                className="product-image"
                alt="a random image"
              />
            </Link>
          </figure>
        </div>
        <div className="card-content">
          <div className="title-container">
            <Link to={`/${generateSlug(title)}`}>
              <p className="card-title">{title.toLowerCase()}</p>
            </Link>
            <CategoryButton title={category.title} category={category.title} />
          </div>
          <div className="content">
            <p>{description ? description.internal.content : ""}</p>
          </div>
        </div>
        <div className="footer">
          <p className="price">${(Math.round(price * 100) / 100).toFixed(2)}</p>
          <CartButton
            id={id}
            title={title}
            description={description ? description.internal.content : ""}
            image={gallery[0].fluid.src}
            slug={generateSlug(title)}
            price={price}
          />
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
    width: 100%;
    padding: 1em 2em;
    border-top: 2px solid #f1de9e;

    p {
      width: 100%;
      font-family: "Playfair Display", serif;
      font-weight: 400;
      font-size: 1.3rem;
    }
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    margin-bottom: 1em;
    margin-top: -8%;
    .card-title {
      font-family: "Playfair Display", serif;
      font-size: 1.6rem;
      color: #6e6546;
    }
  }

  .product-image {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    max-width: 96.5%;
    height: 300px;
    margin: 0 auto;
    margin-top: -3.5%;
    margin-bottom: 1.5em;
    object-fit: cover;
  }
`;
