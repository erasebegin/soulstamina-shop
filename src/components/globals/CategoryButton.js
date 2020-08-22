import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function CategoryButton({ title, category, size }) {
  return (
    <Link to={`/${category.toLowerCase()}`}>
      <Button className="button is-marginless">{title}</Button>
    </Link>
  );
}

const Button = styled.button`
  /* margin: auto .4em; */
`;
CategoryButton.defaultProps = {
  category: "category",
  title: "category",
  size: "small"
};
