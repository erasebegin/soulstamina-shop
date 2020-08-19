import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function productCard({ data }) {
  const { title, description, price, image, slug, id } = data.node;

  return (
    <Card className="column">
      <div className="card card-equal-height">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image.file.url} alt="a random image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title has-text-centered">{title.toLowerCase()}</p>
          <div className="content">
            <p>{description.internal.content}</p>
          </div>
        </div>
        <div className="footer">
          <p className="">{`$${price}`}</p>
          <Link to={`/${slug}`}>
            <button type="button">buy now</button>
          </Link>
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
    margin-top: auto;
  }

  .footer {
    margin-top: auto;
    width: 100%;
    padding: 1em;

    p {
      width: 100%;
      text-align: right;
      font-family: "Playfair Display", serif;
      font-weight: 400;
      font-size: 1.3rem;
    }
  }

  .title {
    font-family: "Playfair Display", serif;
  }

  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5rem;
    max-width: 96.5%;
    max-height: 96.5%;
    margin: 0 auto;
    margin-top: -3.5%;
    object-fit: cover;

    @media (min-width: 500px) {
      /* max-width: 20%; */
    }
  }
`;
