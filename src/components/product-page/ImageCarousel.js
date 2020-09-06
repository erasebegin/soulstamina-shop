import React, { useState } from "react";
import styled from "styled-components";

export default function Gallery({ imgArr, setCurr }) {
  //limit number of images to maximum of 4
  const cutToFour = imgArr.slice(0, 3);

  const setCurrImg = (img) => {
    setCurr(img);
  };

  return (
    <GalleryContainer>
      <div className="subcontainer">
        {cutToFour.map((image) => {
          return (
            <img
              className="gallery-image"
              src={image.file.url}
              onClick={() => setCurrImg(image.file.url)}
              alt="soulstamina product"
              key={image.file.url}
            />
          );
        })}
      </div>
    </GalleryContainer>
  );
}

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;

  @media (min-width: 780px) {
    max-width: 100%;
    justify-content: flex-start;
    margin-left: -10%;
  }
  .gallery-image {
    max-width: 50px;
    object-fit: cover;
    transition: 200ms;
    margin: 0 0.5em;

    @media (min-width: 600px) {
      max-width: 100px;
    }

    &:hover {
      transform: translate(-2px, -1px);
      transition: 200ms;
      cursor: pointer;
      filter: contrast(1.5);
    }
  }

  .subcontainer {
    display: flex;
    justify-content: center;
    background: #bc9f75;
    padding: 0.5em;
    margin: 0.5em;

    &:first-child {
      margin-left: 1em;
    }

    @media (min-width: 780px) {
      padding-left: 2em;
    }
  }
`;
