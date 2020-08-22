import React from "react";
import { Link } from "gatsby";
import CategoryButton from "../globals/CategoryButton";
import styled from "styled-components";

export default function productCard({ data }) {
  const {
    title,
    description,
    price,
    image,
    slug,
    productCategory: category,
  } = data.node;

  return (
    <Card className="column">
      <div className="card card-equal-height">
        <div className="card-image">
          <figure className="image is-4by3">
            <Link to={`/${slug}`}>
              <img src={image.file.url} alt="a random image" />
            </Link>
          </figure>
        </div>
        <div className="card-content">
          <div className="title-container">
            <Link to={`/${slug}`}>
              <p className="title">{title.toLowerCase()}</p>
            </Link>
            <CategoryButton title={category} category={category} />
          </div>
          <div className="content">
            <p>{description.internal.content}</p>
          </div>
        </div>
        <div className="footer">
          <p className="">{`$${price}`}</p>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 2em;
  }

  .footer {
    margin-top: auto;
    width: 100%;
    padding: 1em;

    p {
      width: 100%;
      text-align: center;
      font-family: "Playfair Display", serif;
      font-weight: 400;
      font-size: 1.3rem;
    }
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    margin-bottom: 1em;
    margin-top: -8%;
    .title {
      font-family: "Playfair Display", serif;
      font-size: 1.8rem;
      line-height: 0;
    }
  }

  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5rem;
    max-width: 96.5%;
    max-height: 96.5%;
    margin: 0 auto;
    margin-top: -3.5%;
    object-fit: cover;
  }
`;
