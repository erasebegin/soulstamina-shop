import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
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
  console.log({ price });
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
                <div className="padding"></div>
              )}
            </div>
            <div className="price-button-container">
              <p>${price}</p>
              <div className="buttons">
                <button className="button is-warning is-light is-size-3 is-size-4-mobile">
                  <FaCartPlus />
                </button>
                <button className="button is-warning is-light is-size-4 is-size-5-mobile">
                  |&nbsp;&nbsp;BUY NOW &gt;&gt;
                </button>
              </div>
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
      margin-bottom: 0.5em;
      order: 2;
    }
    .product-header-description {
      margin-bottom: 2em;
      order: 3;
    }
    .padding {
      order: 1;
      padding: 0.5em;
    }
    .carousel-container {
      order: 1;
    }
    .price-button-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      order: 4;
      border-top: 1px solid #6e6546;
      p {
        font-size: 1.8rem;
        font-weight: 100;
        color: gray;
      }
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        padding-left: 1em;
        background: #f1de9e;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        button {
          font-weight: 100;
          padding: 0;
          margin-right: 0.5em;
          background: none;
        }
      }
    }

    @media (min-width: 780px) {
      .product-header-title {
        order: 1;
      }
      .product-header-description {
        order: 2;
        margin-bottom: 0.5em;
      }
      .carousel-container {
        order: 3;
      }
      .padding {
        order: 3;
        padding: 1em;
      }
      .price-button-container {
        max-width: 90%;
      }
    }
  }
`;
