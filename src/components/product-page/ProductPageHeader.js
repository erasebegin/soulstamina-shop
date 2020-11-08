import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import ImageModal from "./ImageModal";

import ImageCarousel from "./ImageCarousel";
import AddToCartButton from "../cart/AddToCartButton";

export default function ProductPageHeader({
  title,
  price,
  description,
  galleryThumbnail,
  galleryFixed,
  gallery,
  id,
  slug,
  isMobile,
}) {
  const [currDispFluid, setCurrDispFluid] = useState(gallery[0].fluid);
  const [currDispFixed, setCurrDispFixed] = useState(galleryFixed[0].fixed);
  const [displayCarousel, setDisplayCarousel] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    if (gallery.length > 1) {
      setDisplayCarousel(true);
    }
  }, []);

  const setCurrImg = (index) => {
    setCurrDispFluid(gallery[index].fluid);
    setCurrDispFixed(galleryFixed[index].fixed);
  };

  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <Container
        className="section is-desktop is-centered my-4"
        displayCarousel={displayCarousel}
      >
        <ImageModal
          imageFixed={currDispFixed}
          imageFluid={currDispFluid}
          open={displayModal}
          close={closeModal}
          isMobile={isMobile}
        />
        <div className="columns">
          <figure className="image column is-half-desktop" onClick={openModal}>
            <Img fluid={currDispFluid} className="product-image-main" />
          </figure>
          <div className="column py-0 is-half-desktop product-header-info">
            <p className="is-size-3 is-light is-centered product-header-title">
              {title}
            </p>
            <p className="is-size-5 is-size-6-mobile is-italic product-header-description">
              {description ? description.description : ""}
            </p>
            <div className="carousel-container">
              {galleryThumbnail !== null && galleryThumbnail.length > 0 ? (
                <ImageCarousel
                  thumbArr={galleryThumbnail}
                  setCurr={setCurrImg}
                />
              ) : (
                <div className="padding"></div>
              )}
            </div>
            <div className="price-button-container">
              <p>${(Math.round(price * 100) / 100).toFixed(2)}</p>
              <div className="buttons">
                {isMobile ? (
                  <AddToCartButton
                    id={id}
                    title={title}
                    image={gallery[0].fluid.src}
                    price={price}
                    description={description ? description.description : ""}
                    slug={slug}
                  />
                ) : (
                  <AddToCartButton
                    id={id}
                    title={title}
                    image={gallery[0].fluid.src}
                    price={price}
                    description={description ? description.description : ""}
                    slug={slug}
                    alt
                  />
                )}
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
  /* VIA CSS MATIC https://goo.gl/cIbnS */
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  @media (min-width: 1500px) {
    width: 100%;
    max-width: 80vw;
  }

  .product-image-main {
    margin: auto;
    object-fit: cover;
    order: 2;

    @media (min-width: 750px) {
      max-width: 100%;
      height: 600px;
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
      display: ${(props) => (props.displayCarousel ? "initial" : "none")};
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
        padding-left: 1em;
      }
    }

    @media (min-width: 1000px) {
      .price-button-container{
        height: 60px;
      }
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
    }
  }
`;
