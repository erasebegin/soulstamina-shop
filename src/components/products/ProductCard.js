import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import CategoryButton from "../globals/CategoryButton";
import styled from "styled-components";
import CartButton from "../cart/AddToCartButton";

export default function productCard({ data }) {
  const {
    id,
    title,
    description,
    price,
    image,
    slug,
    productCategory: category,
    small
  } = data.node;

  return (
    <Card className="column">
      <div className="card card-equal-height">
        <div className="card-image">
          <figure className="image">
            <Link to={`/${slug}`}>
              <Img fixed={small.fixed} className="product-image" alt="a random image" />
            </Link>
          </figure>
        </div>
        <div className="card-content">
          <div className="title-container">
            <Link to={`/${slug}`}>
              <p className="card-title">{title.toLowerCase()}</p>
            </Link>
            <CategoryButton title={category} category={category} />
          </div>
          <div className="content">
            <p>{description.internal.content}</p>
          </div>
        </div>
        <div className="footer">
          <p className="price">${price}</p>
          <CartButton
            id={id}
            title={title}
            description={description.internal.content}
            image={image}
            slug={slug}
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

    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 2em;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
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
    /* max-width: 96.5%;
    max-height: 96.5%; */
    margin: 0 auto;
    margin-top: -3.5%;
    margin-left: -2%;
    object-fit: cover;
  }
`;
