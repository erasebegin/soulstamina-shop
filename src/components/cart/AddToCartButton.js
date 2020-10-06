import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

export default function AddToCartButton({
  id,
  title,
  image,
  price,
  description,
  slug,
  alt
}) {
  if (alt) {
    return (
      <Button
        className="snipcart-add-item is-size-4 is-size-4-mobile"
        data-item-id={id}
        data-item-price={price}
        data-item-url={`/${slug}`}
        data-item-description={description}
        data-item-image={image ? image.fixed.src : null}
        data-item-name={title}
      >
        add to cart <FaCartPlus />
      </Button>
    );
  } else {
    return (
      <Button
        className="snipcart-add-item is-size-3 is-size-4-mobile"
        data-item-id={id}
        data-item-price={price}
        data-item-url={`/${slug}`}
        data-item-description={description}
        data-item-image={image ? image.fixed.src : null}
        data-item-name={title}
      >
        <FaCartPlus size="1.8rem" />
      </Button>
    );
  }
}

const Button = styled.button`
display: flex;
align-items: center;
gap: .75em;
  padding: 0em 0.4em 0 0.3em;
  border: none;
  color: #bc9f75;
  background: #fff8ee;
  cursor: pointer;
  transition: ease-out 200ms;

  &:hover {
    background: #bc9f75;
    color: #fff8ee;
    transition: ease-in-out 200ms;
  }
`;
