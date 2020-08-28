import React from "react";
import ParallaxPart from "react-rellax";
import styled from "styled-components";

export default function Parallax({ type, background }) {
  if (type === "small") {
    return (
      <Container className="parallax-container-small" background={background}>
        <ParallaxPart speed={-5} centered={true}>
          <div className="parallax para1" alt="part of the parallax graphic" />
        </ParallaxPart>
        <ParallaxPart speed={-4} centered={true}>
          <h1 className="is-uppercase is-size-4 has-text-black has-text-weight-light has-text-centered para2">
            Yana Soulstamina
          </h1>
        </ParallaxPart>
        <ParallaxPart speed={-3} centered={true}>
          <p className="subtitle has-text-black is-size-3 alt-font has-text-centered para3">
            creative soul
          </p>
          <p className="subtitle has-text-black is-size-3 alt-font has-text-centered para3">
            and conscientious
          </p>
          <p className="subtitle has-text-black is-size-3 alt-font has-text-centered para3">
            designer
          </p>
        </ParallaxPart>
      </Container>
    );
  } else if (type === "large") {
    return (
      <ContainerLarge
        className="parallax-container-large"
        background={background}
      >
        <ParallaxPart speed={-5} centered={true}>
          <div className="parallax para1" alt="part of the parallax graphic" />
        </ParallaxPart>
        <ParallaxPart speed={-4} centered={true}>
          <h1 className="is-uppercase is-size-4 has-text-black has-text-weight-light has-text-left para2">
            Yana Soulstamina
          </h1>
        </ParallaxPart>
        <ParallaxPart speed={-1} centered={true}>
          <p className="subtitle has-text-black is-size-3 alt-font has-text-right para3">
            creative soul
          </p>
          <p className="subtitle has-text-black is-size-3 alt-font has-text-right para3">
            and conscientious
          </p>
          <p className="subtitle has-text-black is-size-3 alt-font has-text-right para3">
            designer
          </p>
        </ParallaxPart>
      </ContainerLarge>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  z-index: 0;
  overflow: hidden;
  border: 1px solid green;

  .parallax-container {
    width: 100%;
  }

  .para1 {
    height: 80vh;
    width: 100%;
    object-fit: cover;
    background: ${({ background }) =>
      background
        ? `linear-gradient(to top, white, rgba(0,0,0,0)),url(${background})`
        : "linear-gradient(to right, $primary-color, $secondary-color);"};
    background-blend-mode: lighten;
  }

  .para2 {
    transform: translate(0px, -450px);
  }

  .para3 {
    transform: translate(0px, -350px);
    line-height: 15px;
  }
`;

const ContainerLarge = styled.div`

  z-index: 0;
  overflow: hidden;
  width: 100vw;

  .parallax-container {
    width: 100%;
  }

  .para1 {
    height: 80vh;
    min-width: 50vw;
    object-fit: cover;
    background: ${({ background }) =>
      background
        ? `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.7679446778711485) 54%, rgba(255,255,255,1) 74%, rgba(255,255,255,1) 100%), url(${background})`
        : "linear-gradient(to right, $primary-color, $secondary-color);"};
    background-blend-mode: lighten;
    background-position: center;
  }

  .para2 {
    transform: translate(100px, -500px);
  }

  .para3 {
    transform: translate(70vw, -250px);
    max-width: 300px;
    text-shadow: 1px 1px 3px lightgray;
    text-align: right;
  }
`;

Parallax.defaultProps = {
  type: "small",
};
