import React, { useEffect } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

export default function ImageModal({
  imageFixed,
  imageFluid,
  open,
  close,
  isMobile,
}) {
  const closeModal = () => {
    close();
  };

  useEffect(() => {
    const modalContainer = document.querySelector(".modal-container");

    modalContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-container")) {
        closeModal();
      }
    });
  }, []);

  return (
    <Container open={open} isMobile={isMobile} className="modal-container">
      {isMobile ? (
        <Img fixed={imageFixed} className="modal-image" />
      ) : (
        <Img fluid={imageFluid} className="modal-image" />
      )}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #000000bb;
  height: 100%;
  width: 100%;
  z-index: 100;
  opacity: ${(props) => (props.open ? "1" : "0")};
  pointer-events: ${(props) => (props.open ? "all" : "none")};
  transition: all 200ms ease-out;
  padding: ${(props) => (props.isMobile ? "0" : "2% 10%")};  
  
  .modal-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${(props) =>
      props.open
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0.5)"};
    height: 90%;
    transition: all 200ms ease-out;

    /* @media (min-width: 700px) {
      height: 1000px;

    } */
  }
`;
