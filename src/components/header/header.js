import React from "react";
import styled from "styled-components";
import Parallax from "./Parallax";

import "../style.scss";

const Header = ({ background, isMobile }) => {
  const bgImage = background.homePageHeaderImage.file.url;

  return (
    <>
      <Container className="hero is-fullheight-with-navbar">
        <div>
          <div className="container center">
            <article className="media">
              <figure className="is-left"></figure>
              <figure className="is-left"></figure>
              <div>
                {isMobile ? (
                  <Parallax type="small" background={bgImage} />
                ) : (
                  <Parallax type="large" background={bgImage} />
                )}
              </div>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div``;
