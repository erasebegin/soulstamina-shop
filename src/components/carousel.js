import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { Carousel } from "react-responsive-carousel";
import { boolean, number } from "@storybook/addon-knobs";

export default function HeroCarousel({ data, isMobile }) {
  const tooglesGroupId = "Toggles";
  const valuesGroupId = "Values";

  const getConfigurableProps = () => ({
    showArrows: boolean("showArrows", true, tooglesGroupId),
    showStatus: boolean("showStatus", false, tooglesGroupId),
    showIndicators: boolean("showIndicators", true, tooglesGroupId),
    infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
    showThumbs: boolean("showThumbs", false, tooglesGroupId),
    useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
    autoPlay: boolean("autoPlay", true, tooglesGroupId),
    stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
    swipeable: boolean("swipeable", true, tooglesGroupId),
    dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
    emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
    thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
    selectedItem: number("selectedItem", 0, {}, valuesGroupId),
    interval: number("interval", 5000, {}, valuesGroupId),
    transitionTime: number("transitionTime", 300, {}, valuesGroupId),
    swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
  });

  return (
    <Container className="hero is-medium">
      <Carousel autoPlay infiniteLoop {...getConfigurableProps()}>
        {data.map((item) => {
          const defaultImage = item.node.product.image.file.url;
          const largeImage = item.node.largeImage
            ? item.node.largeImage.file.url
            : null;
          const smallImage = item.node.smallImage
            ? item.node.smallImage.file.url
            : null;

          return (
            <div className="img-container">
              <Link to={`/${item.node.product.slug}`}>
                {largeImage ? (
                  smallImage && isMobile ? (
                    <img src={smallImage} />
                  ) : (
                    <img src={largeImage} />
                  )
                ) : smallImage && isMobile ? (
                  <img src={smallImage} />
                ) : (
                  <img src={defaultImage} />
                )}
              </Link>
              <Link to={`/${item.node.product.slug}`}>
                <Button className="legend" color={item.node.textColor}>
                  EXPLORE
                </Button>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
}

const Container = styled.section`
  .img-container {
    height: 80vh;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled.p`
  color: ${({ color }) => (color === "Dark" ? "black" : "#fff8ee")} !important;
  background: none !important;
  border: 3px solid ${({ color }) => (color === "Dark" ? "black" : "#fff8ee")} !important;
  opacity: 100 !important;
  font-weight: 600;
  font-size: 1.4rem;
  font-family: "Heebo", sans-serif;
  border-radius: 0 !important;
  width: 50% !important;
  margin-left: -25% !important;
  transition: ease-in-out 200ms !important;

  &:hover {
    background: ${({ color }) =>
      color === "Dark" ? "#fff8ee" : "black"} !important;
    transition: ease-in-out 200ms !important;
  }
`;
