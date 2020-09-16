import React from "react";
import styled from "styled-components";

export default function Title({ title, styleClassH1, styleClassH2, subtitle }) {
  return (
    <TitleContainer>
      <h1 className={styleClassH1}>{title}</h1>
      {subtitle === "subtitle" ? (
        ""
      ) : (
        <h2 className={styleClassH2}>{subtitle}</h2>
      )}
    </TitleContainer>
  );
}

Title.defaultProps = {
  title: "title",
  subtitle: "subtitle",
  styleClassH1: "is-size-2 has-text-centered",
  styleClassH2: "is-size-4 has-text-centered"
};

const TitleContainer = styled.div`
  font-family: "Playfair Display", serif;
  text-transform: lowercase;

  h2 {
    font-family: "Heebo", sans-serif;
    font-weight: 100;
    line-height: 0.5em;
  }
`;
