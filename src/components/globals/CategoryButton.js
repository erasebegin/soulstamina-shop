import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function CategoryButton({ title, category, size }) {
  return (
    <Link to={`/${category.toLowerCase()}`}>
      <Button size={size}>{title.toLowerCase()}</Button>
    </Link>
  );
}

const Button = styled.button`
  color: white;
  background: #b18d17;
  padding: 0.5em 0.75em;
  border: none;
  border-radius: ${({ size }) => (size === "small" ? "10px" : 0)};
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  letter-spacing: 0.08em;
  cursor: pointer;
`;
CategoryButton.defaultProps = {
  category: "category",
  title: "category",
  size: "small"
};
