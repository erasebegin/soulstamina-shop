import React from "react";
import { Link } from "gatsby";
import { SiEtsy } from "react-icons/si";
import { AiFillMail, AiFillInstagram } from "react-icons/ai";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import logo from "../../images/soulstamina_logo_2020.png";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            email
            etsy
            instagram
          }
        }
      }
    `}
    render={(data) => (
      <Container className="has-background-light is-paddingless">
        <img src={logo} className="logo" />
        <div className="container-right">
          <article className="icon-container">
            <span>
              <Link className="first" to="/contact">
                <AiFillMail />
              </Link>
            </span>
            <span>
              <a
                href={data.site.siteMetadata.etsy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiEtsy />
              </a>
            </span>
            <span>
              <a
                href={data.site.siteMetadata.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </span>
          </article>
          <p className="is-size-5 copyright">&copy; yana soulstamina</p>
        </div>
      </Container>
    )}
  />
);

export default Footer;

const Container = styled.footer`
  display: flex;
  padding: 0;

  .logo {
    max-height: 70px;
    padding: 1em 1em;
    opacity: 70%;
  }

  .container-right {
    display: flex;
    gap: 1em;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1em;

    a {
      padding: 0.2em 0.4em 0 0.3em;
      border: none;
      color: #b18d17;
      background: #fff8ee;
      cursor: pointer;
      transition: ease-out 200ms;
      margin-left: 1em;
      font-size: 1.5rem;

      &:hover {
        background: #b18d17;
        color: #fff8ee;
        transition: ease-in-out 200ms;
      }
    }

    .copyright {
      display: none;
      @media (min-width: 700px) {
        display: initial;
      }
    }

    .first {
      margin-left: 0;
    }
  }
`;
