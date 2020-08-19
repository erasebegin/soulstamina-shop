import React from "react";
import styled from "styled-components";

export default function ProductPageHeader({
  title,
  image,
  price,
  description,
}) {
  return (
    <>
      <Container className="columns is-desktop is-vcentered my-4 mx-1 product-page-header">
        <figure className="image column is-half-desktop">
          <img src={image.file.url} className="product-image-main" />
        </figure>
        <div className="column mx-2 is-half-desktop">
          <p className="is-size-4 is-light is-centered product-header-title">{title}</p>
          <p className="is-size-5 is-size-6-mobile is-italic product-header-description">
            {description.description}
          </p>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  background: #ebebeb;
  border-radius: 7px 7px 7px 7px;
  /* VIA CSS MATIC https://goo.gl/cIbnS */
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);

  @media (min-width: 600px) {
    width: 100%;
  }

  .product-image-main {
    border-radius: 7px;
    max-width: 95%;
    margin: auto;

    @media (min-width: 600px) {
      border-radius: 7px 0 0 7px;
      max-width: 100%;
    }
  }

  .product-header-title {
    font-family: "Playfair Display", serif;
    text-transform:lowercase;
  }
`;
