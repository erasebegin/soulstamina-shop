import React from "react";
import { Link } from "gatsby";
import CategoryButton from "../globals/CategoryButton";
import styled from "styled-components";

export default function productCardLarge({ data }) {
  const {
    title,
    description,
    price,
    image,
    slug,
    productCategory: category,
  } = data.node;
  return (
    <Card className="column">
      <div className="wrapper columns">
        <div className="column is-half product-image">
          <Link to={`/${slug}`}>
            <img src={image.file.url} />
          </Link>
        </div>
        <div className="column product-info">
          <div className="product-text">
            <div className="title-container">
              <div className="title-inner">
                <h1>{title.toLowerCase()}</h1>
                <h2>by yana</h2>
              </div>
              <CategoryButton category={category} title={category} />
            </div>
            <p>{description.internal.content}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  .wrapper {
    border-radius: 7px 7px 7px 7px;
    /* VIA CSS MATIC https://goo.gl/cIbnS */
    -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    height: 300px;
  }

  .product-image {
    padding: 0;
    img {
      border-radius: 7px 0 0 7px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: auto;
    }
  }

  .product-info {
    padding: 1.5em;
    padding-top: 1em;
    .product-text {
      h1 {
        font-size: 34px;
        color: #474747;
        font-family: "Playfair Display", serif;
      }
      .title-container {
        display: flex;
        align-items: center;
        gap: 1em;

        .title-inner {
          display: flex;
          flex-direction: column;
          h2 {
            font-size: 13px;
            font-weight: 400;
            text-transform: uppercase;
            color: #d2d2d2;
            letter-spacing: 0.2em;
          }
        }
      }
      p {
        color: #8d8d8d;
        line-height: 1.7em;
        font-size: 15px;
        font-weight: lighter;
        overflow: hidden;
      }
    }
  }

  .product-price-btn p {
    font-family: "Heebo", sans-serif;
    font-weight: 100;
    color: #474747;
    font-size: 1.5rem;
  }

  .product-price-btn button {
    display: inline-block;
    padding: 0.5em 1em;
    box-sizing: border-box;
    border: transparent;
    border-radius: 60px;
    /* font-family: "Raleway", sans-serif; */
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #ffffff;
    background-color: #c9a26c;
    cursor: pointer;
    outline: none;
  }

  .product-price-btn button:hover {
    background-color: #bc9f75;
  }
`;
