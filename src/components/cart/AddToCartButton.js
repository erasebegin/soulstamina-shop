import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components"

export default function AddToCartButton({ id, title, image, price, description, slug }) {
  return (
    <Button
      className="snipcart-add-item is-light is-size-3 is-size-4-mobile"
      data-item-id={id}
      data-item-price={price}
      data-item-url={`/${slug}`}
      data-item-description={description}
      data-item-image={image.file.url}
      data-item-name={title}
    >
      <FaCartPlus size=".75em"/>
    </Button>
  );
}

const Button = styled.button`
  padding: 0em 0.4em 0 0.3em;
  border: none;
  color: #b18d17;
  background: #fff8ee;
  cursor: pointer;
  transition: ease-out 200ms;

  &:hover{
    background: #b18d17;
    color: #fff8ee;
    transition: ease-in-out 200ms;
  }
`
