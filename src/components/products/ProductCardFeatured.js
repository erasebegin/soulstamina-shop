import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import generateSlug from "../../utils/GenerateSlug";

export default function ProductCardFeatured({ data, isMobile }) {
  const { title, description, gallery } = data;

  const slug = generateSlug(title);

  const image = gallery[0].fluid;

  let trimmedDescription = description ? description.internal.content : "";

  if (trimmedDescription.length > 200) {
    trimmedDescription = trimmedDescription.slice(0, 199).concat("...");
  }

  if (isMobile) {
    return (
      <div className="section">
        <CardSmall className="column">
          <div className="featured">
            <h4>featured</h4>
          </div>
          <div className="product-image">
            <Link to={`/${slug}`}>
              <Img fluid={image} className="main-image" />
            </Link>
          </div>
          <div className="column product-info">
            <div className="product-text">
              <Link to={`/${slug}`}>
                <h1 className="my-2">{title.toLowerCase()}</h1>
              </Link>
              <h2>by yana</h2>
              <p className="mt-3 mb-2">
                {trimmedDescription}{" "}
                <Link to={`/${slug}`} className="more-link">
                  MORE &gt;&gt;
                </Link>
              </p>
            </div>
          </div>
        </CardSmall>
      </div>
    );
  } else if (!isMobile) {
    return (
      <div className="section">
        <CardLarge className="column">
          <div className="columns wrapper">
            <div className="column is-one-third product-image">
              <Link to={`/${slug}`}>
                <Img fluid={image} className="main-image" />
              </Link>
            </div>
            <div className="column product-info">
              <div className="featured">
                <h4>featured</h4>
              </div>
              <div className="product-text">
                <Link to={`/${slug}`}>
                  <h1 className="my-2">{title.toLowerCase()}</h1>
                </Link>
                <h2>by yana</h2>
                <p className="mt-3 mb-2">
                  {trimmedDescription}{" "}
                  <Link to={`/${slug}`} className="more-link">
                    MORE &gt;&gt;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </CardLarge>
      </div>
    );
  }
}

const CardSmall = styled.div`
  /* VIA CSS MATIC https://goo.gl/cIbnS */
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  background: #bc9f75;
  max-width: 500px;
  margin: auto;

  .featured {
    width: 50%;
    padding: 0.75em 0;
    background: #fff8ee;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);

    h4 {
      text-align: center;
      font-style: italic;
      letter-spacing: 0.15em;
    }
  }

  .product-image {
    padding: 0;

    .main-image {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 30px 0 rgba(0, 0, 0, 0.19);
      border-top-left-radius: 0;
      max-height: 400px;
      margin: 0 auto;
      object-fit: cover;
    }
  }

  .product-info {
    padding: 0;
    background: #fff8ee;
    border: 1px solid #8f795a;
    margin-top: -3%;

    .product-text {
      padding: 1em 2em;
      h1 {
        font-size: 34px;
        color: #474747;
        font-family: "Playfair Display", serif;
      }
      h2 {
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        color: #d2d2d2;
        letter-spacing: 0.2em;
      }
      p {
        color: #8d8d8d;
        line-height: 1.7em;
        font-size: 1.2rem;
        font-weight: lighter;
        overflow: hidden;

        .more-link {
          color: #bc9f75;
          font-size: 0.8rem;
          margin-left: 0.5em;
        }
      }
    }
  }
`;

const CardLarge = styled.div`
  margin: auto;
  margin-top: 2em;
  max-width: 1100px;
  .wrapper {
    /* VIA CSS MATIC https://goo.gl/cIbnS */
    -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    /* height: 300px; */
    background: #8f795a;
  }

  .product-image {
    padding: 0;
    .main-image {
      -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 30px 0 rgba(0, 0, 0, 0.19);
      width: 100%;
      max-height: 400px;
      min-height: 300px;
      margin: 0 auto;
      margin-top: -3.5%;
      margin-left: 4%;
      object-fit: cover;
    }
  }

  .product-info {
    padding: 0;

    .featured {
      padding: 1em 0;
      width: 25%;
      margin-left: 30%;
      background: #6e6546;
      color: #fff8ee;
      border-left: 2px solid #b18d17;
      border-right: 2px solid #b18d17;

      h4 {
        text-align: center;
        font-style: italic;
        letter-spacing: 0.15em;
      }
    }

    .product-text {
      padding: 1em 2em;
      width: 90%;
      background: #fff8ee;
      border: 1px solid #8f795a;
      border-left: 0;
      -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
      h1 {
        font-size: 34px;
        color: #474747;
        font-family: "Playfair Display", serif;
      }
      h2 {
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        color: #d2d2d2;
        letter-spacing: 0.2em;
      }
      p {
        color: #8d8d8d;
        line-height: 1.7em;
        font-size: 1.3rem;
        font-weight: lighter;
        text-overflow: ellipsis;

        .more-link {
          color: #bc9f75;
          font-size: 0.8rem;
          margin-left: 0.5em;
        }
      }
    }
  }
`;
