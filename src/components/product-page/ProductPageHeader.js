import React, { useState } from "react";
import {FaCartPlus} from "react-icons/fa"
import styled from "styled-components";
import ImageCarousel from "./ImageCarousel";

export default function ProductPageHeader({
  title,
  image,
  price,
  description,
  gallery,
}) {
  const [currDispImg, setCurrDispImg] = useState(image.file.url);
  const setCurrImg = (currImg) => {
    setCurrDispImg(currImg);
  };
  return (
    <>
      <Container className="section is-desktop is-centered my-4">
        <div className="columns">
          <figure className="image column is-half-desktop">
            <img src={currDispImg} className="product-image-main" />
          </figure>
          <div className="column py-0 is-half-desktop product-header-info">
            <p className="is-size-3 is-light is-centered product-header-title">
              {title}
            </p>
            <p className="is-size-5 is-size-6-mobile is-italic product-header-description">
              {description.description}
            </p>
            <div className="carousel-container">
              {gallery !== null && gallery.length > 0 ? (
                <ImageCarousel imgArr={gallery} setCurr={setCurrImg} />
              ) : (
                ""
              )}
            </div>
            <div className="button-container">
                <button className="button is-warning is-light is-size-3"><FaCartPlus/></button>
                <button className="button is-warning is-light is-size-4">BUY NOW &gt;&gt;</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: auto;
  background: #fff8ee;
  border-radius: 7px 7px 7px 7px;
  /* VIA CSS MATIC https://goo.gl/cIbnS */
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 80vw;
  }

  .product-image-main {
    border-radius: 7px;
    height: 300px;
    margin: auto;
    object-fit: cover;
    order: 2;

    @media (min-width: 600px) {
      border-radius: 7px 0 0 7px;
      max-width: 100%;
    }
  }

  .product-header-info {
    display: flex;
    flex-direction: column;
    .product-header-title {
      font-family: "Playfair Display", serif;
      text-transform: lowercase;
      order: 2;
    }
    .product-header-description {
      order: 3;
    }
    .carousel-container {
      order: 1;
    }
    .button-container {
      display: flex;
      align-items: center;
      justify-content: start;
      order: 4;
      border-top: 1px solid gold;
      padding: 0;
      button {
        font-weight: 100;
        padding: 0;
        margin-right: 1em;
      }
    }

    @media (min-width: 780px) {
      .product-header-title {
      order: 1;
    }
    .product-header-description {
      order: 2;
    }
    .carousel-container {
      order: 3;
    }
    }
    
  }
`;
