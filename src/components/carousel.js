import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaShoppingBag } from "react-icons/fa";

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
    swipeScrollTolerance: number("swipeScrollTolerance", 10, {}, valuesGroupId)
  });

  return (
    <Container className="hero is-medium">
      <Carousel autoPlay infiniteLoop {...getConfigurableProps()}>
        {data.map((item, index) => {
          const defaultImage = item.node.product.image.file.url;
          const largeImage = item.node.largeImage
            ? item.node.largeImage.file.url
            : null;
          const smallImage = item.node.smallImage
            ? item.node.smallImage.file.url
            : null;

          return (
            <div className="img-container" key={index}>
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
                  explore&nbsp; <FaShoppingBag size="1em" />
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
  color: ${({ color }) => (color === "Dark" ? "white" : "black")} !important;
  background: ${({ color }) =>
    color === "Dark" ? "black" : "white"} !important;
  border: 3px solid ${({ color }) => (color === "Dark" ? "black" : "white")} !important;
  opacity: 100 !important;
  font-weight: 600 !important;
  font-size: 1.4rem !important;
  font-family: "Playfair Display", sans-serif;
  letter-spacing: 0.07em;
  border-radius: 0 !important;
  width: 50% !important;
  margin-left: -25% !important;
  transition: ease-in-out 200ms !important;

  @media (min-width: 700px) {
    margin-left: 15% !important;
    width: 25% !important;
    font-size: 1.7rem !important;
  }

  &:hover {
    background: ${({ color }) =>
      color === "Dark" ? "white" : "black"} !important;
    color: ${({ color }) => (color === "Dark" ? "black" : "white")} !important;
    transition: ease-in-out 200ms !important;
  }
`;
