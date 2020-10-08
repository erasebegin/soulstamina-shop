import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import generateSlug from "../../utils/GenerateSlug"
import CategoryButton from "../globals/CategoryButton";
import CartButton from "../cart/AddToCartButton";

export default function productCardLarge({ data, nodeless }) {
  const {
    title,
    description,
    price,
    gallery,
    id,
    category,
  } = data ? data.node : nodeless;
  console.log({nodeless})
  return (
    <Card>
      <div className="product-image-container">
        <Link to={`/${generateSlug(title)}`}>
          <Img fluid={gallery[0].fluid} className="product-image" />
        </Link>
        <CategoryButton category={category.title} title={category.title} size="large" />
      </div>
      <div className="column product-info">
        <div className="top-wrapper">
          <Link to={`/${generateSlug(title)}`}>
            <h1>{title.toLowerCase()}</h1>
          </Link>
          <hr />
          <p>{description.internal.content}</p>
        </div>
        <div className="price-button-container">
          <CartButton
            id={id}
            title={title}
            description={description.internal.content}
            image={gallery[0].fluid.src}
            slug={generateSlug(title)}
            price={price}
          />
          <p className="price">${price}&nbsp;</p>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  font-family: "Heebo";
  margin: auto;
  margin-top: 1em;
  width: 500px;
  height: 400px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);

  .product-image-container {
    position: relative;
    padding: 0;
    max-width: 50%;
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
    .product-image {
      width: 250px;
      height: 100%;
      margin: auto;
    }
  }

  .product-info {
    padding: 1.5em;
    padding-top: 1em;
    border-top: 2px solid #b18d17;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 34px;
      color: #474747;
      font-family: "Playfair Display", serif;
    }
    hr {
      margin-top: 1em;
    }
    p {
      color: #8d8d8d;
      line-height: 1.7em;
      font-size: 15px;
      font-weight: lighter;
      overflow: hidden;
    }
  }

  .price-button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-top: 1em;
    margin-left: 0;
    .price {
      font-family: "Playfair Display", serif;
      font-weight: 400;
      font-size: 1.3rem !important;
    }
  }
`;
