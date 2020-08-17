import React from "react";
import Parallax from "react-rellax";
import styled from "styled-components";

import "./style.scss";

const Header = ({ background }) => {
  const bgImage = background.homePageHeaderImage.file.url;

  return (
    <>
      <Container
        className="hero is-fullheight-with-navbar"
        background={bgImage}
      >
        <div>
          <div className="container center">
            <article className="media">
              <figure className="is-left"></figure>
              <figure className="is-left"></figure>
              <div className="media-content">
                <div className="parallax-container">
                  <Parallax speed={-5} centered={true}>
                    <div
                      className="parallax para1"
                      alt="part of the parallax graphic"
                    />
                  </Parallax>
                  <Parallax centered={true}>
                    <h1 className="is-uppercase is-size-4 has-text-black has-text-weight-light has-text-centered para2">
                      Yana Soulstamina
                    </h1>
                  </Parallax>
                  <Parallax centered={true}>
                    <p className="subtitle has-text-black is-size-3 alt-font has-text-centered para3">
                      creative soul and conscientious designer{" "}
                    </p>
                  </Parallax>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  .parallax {
    height: 80vh;
    width: 100%;
    object-fit: cover;
    background: ${({ background }) =>
      background
        ? `url(${background})`
        : "linear-gradient(to right, $primary-color, $secondary-color);"};
  }

  .parallax-container {
    width: 100%;
    overflow: hidden;
  }

  /* .para1 {
  transform: translateY(-20%);
  position: absolute;
  bottom: 100;
  left: 0;
  width: 100%;
} */

  .para2 {
    transform: translate(0px, -450px);
  }

  .para3 {
    transform: translate(0px, -350px);
  }
`;
