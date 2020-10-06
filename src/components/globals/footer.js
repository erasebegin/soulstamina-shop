import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import logo from "../../images/soulstamina_logo_2020.png";
import etsyicon from "../../images/icons_Etsy-02.svg";
import instaicon from "../../images/icon_IG-01.svg";
import mailicon from "../../images/icons_mail-01-01.svg";

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
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className="container-right">
          <article className="icon-container">
            <span>
              <Link className="first" to="/contact">
                <img src={mailicon} className="icon" />
              </Link>
            </span>
            <span>
              <a
                href={data.site.siteMetadata.etsy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={etsyicon} className="icon" />
              </a>
            </span>
            <span>
              <a
                href={data.site.siteMetadata.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaicon} className="icon" />
              </a>
            </span>
          </article>
          <p className="copyright">&copy; yana soulstamina</p>
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
    max-height: 80px;
    padding: .5em .5em;
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
      border: none;
      cursor: pointer;
      transition: ease-out 200ms;
      margin-left: 1em;

      &:hover {
        transition: ease-in-out 200ms;
      }

      .icon {
        transition: 200ms ease-in-out;
        border-radius: 100%;

        &:hover {
          transform: scale(1.1);
          box-shadow: 0px 0px 3px #b18d17;
          transition: 200ms ease-in-out;
        }
      }
    }

    .copyright {
      display: none;
      @media (min-width: 700px) {
        display: initial;
        font-size: 1rem;
        font-weight: lighter;
        margin-bottom: .5em;
      }
    }

    .first {
      margin-left: 0;
    }
  }
`;
