import React from "react";
import styled from 'styled-components';

export default function Title({ title, styleClass }) {
  return (
    <TitleContainer>
        <h1 className={styleClass}>{title}</h1>
    </TitleContainer>
  );
}

Title.defaultProps = {
  title: "default title",
  styleClass: "is-size-2 has-text-centered"
};

const TitleContainer = styled.div`
  font-family: "Playfair Display", serif;
  text-transform: lowercase;
`