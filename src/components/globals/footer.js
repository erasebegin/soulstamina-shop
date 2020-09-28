import React from "react";
import {Link} from "gatsby";
import { SiEtsy } from "react-icons/si";
import { AiFillMail, AiFillInstagram } from "react-icons/ai";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

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
    render={data => (
      <Container className="footer center has-background-light is-paddingless">
        <div className="has-text-centered">
          <article className="center">
            <span>
              <Link className="first" to="/contact">
                <AiFillMail />
              </Link>
            </span>
            &nbsp;
            <span>
              <a href={data.site.siteMetadata.etsy} target="_blank" rel="noopener noreferrer">
                <SiEtsy />
              </a>
            </span>
            &nbsp;
            <span>
              <a href={data.site.siteMetadata.instagram} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </span>
            &nbsp;
          </article>
          &nbsp;
          <p className="is-size-5">Soulstamina &copy;</p>
        </div>
      </Container>
    )}
  />
);

export default Footer;

const Container = styled.footer`
  height: 150px;
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

  .first {
    margin-left: 0;
  }
`;
