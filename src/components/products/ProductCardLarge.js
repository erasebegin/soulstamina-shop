import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";

export default function productCard({ data }) {
  const { title, description, price, image, slug, id } = data.node;

  return (
    <Card className="column">
      <div className="columns wrapper">
        <div className="column product-img">
          <img src={image.file.url} />
        </div>
        <div className="column product-info">
          <div className="product-text">
            <h1>{title.toLowerCase()}</h1>
            <h2>by yana</h2>
            <p>{description.internal.content}</p>
          </div>
          <div className="product-price-btn">
            <p>
              <span>{`$${price}`}</span>
            </p>
            <Link to={`/${slug}`}>
              <button type="button">buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`

  width: 200px;

  .wrapper {
    border-radius: 7px 7px 7px 7px;
    /* VIA CSS MATIC https://goo.gl/cIbnS */
    -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  }

  .product-img {

  }

  .product-img img {
    border-radius: 7px 0 0 7px;
    object-fit: cover;
    /* height: 200px;
    width: 200px; */
  }

  .product-info {
    display: flex;
    flex-direction:column;
    border-radius: 0 7px 10px 7px;
    background-color: #ffffff;
  }

  .product-text h1 {
    font-size: 34px;
    color: #474747;
    font-family: "Playfair Display", serif;
  }

  .product-text h1,
  .product-price-btn p {
    /* font-family: "Bentham", serif; */
  }

  .product-text h2 {
    font-size: 13px;
    /* font-family: "Raleway", sans-serif; */
    font-weight: 400;
    text-transform: uppercase;
    color: #d2d2d2;
    letter-spacing: 0.2em;
  }

  .product-text p {
    /* font-family: "Playfair Display", serif; */
    color: #8d8d8d;
    line-height: 1.7em;
    font-size: 15px;
    font-weight: lighter;
    overflow: hidden;
  }

  .product-price-btn {
    display: flex;
    justify-content:space-between;
  }

  .product-price-btn p {
    font-family: "Heebo", sans-serif;
    font-weight: 100;
    color: #474747;
    font-size: 1.5rem;
  }

  .product-price-btn button {
    display: inline-block;
    padding: .5em 1em;
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
    background-color:  #BC9F75;
  }
`;
