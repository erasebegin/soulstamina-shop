import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function CategoryButton({ title, category, size }) {
  return (
    <Link to={`/${category.toLowerCase()}`}>
      <Button size={size}>{title}</Button>
    </Link>
  );
}

const Button = styled.button`
  color: white;
  background: #b18d17;
  padding: .5em .75em;
  border: none;
  border-radius: ${({ size }) => (size === "small" ? "10px" : 0)};
  border-bottom-left-radius: 10px;
  font-family: "Heebo", sans-serif;
  font-weight: 200;
  letter-spacing: .08em;
`;
CategoryButton.defaultProps = {
  category: "category",
  title: "category",
  size: "small",
};
