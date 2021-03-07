import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { RiShoppingCart2Fill } from 'react-icons/ri';

import generateSlug from '../utils/GenerateSlug';
import './style.scss';
import soulstaminaLogo from '../images/soulstamina_logo_2020.png';

const NavCategories = ({ data }) => {
  return (
    <div className="dynamic-nav-container">
      {data.allContentfulProductCategories.edges.map((item, index) => {
        return (
          <Link
            to={`/categories/${generateSlug(item.node.title)}`}
            className="navbar-item"
            key={index}
          >
            {item.node.title}
          </Link>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query categories {
      allContentfulProductCategories {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `);

  const [navActive, setNavActive] = useState('');

  const setNav = () => {
    navActive === '' ? setNavActive('is-active') : setNavActive('');
  };

  return (
    <Nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={soulstaminaLogo} className="main-logo" />
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="nav-menu"
          onClick={setNav}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${navActive}`}>
        <div className="navbar-start">
          <Link to="/about" className="navbar-item">
            about
          </Link>
          <Link to="/contact" className="navbar-item">
            contact
          </Link>
          <NavCategories data={data} />
          <a
            href="https://www.soulstamina.art"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item nav-special"
          >
            blog
          </a>
        </div>
        <div className="navbar-end">
          <button className="snipcart-checkout checkout-button">
            <RiShoppingCart2Fill size="1.2em" />
          </button>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: white;
  z-index: 0;
  font-family: 'Heebo', sans-serif;

  .navbar-item {
    font-weight: 400;
    color: #222;
    font-size: 1.3rem !important;

    &:hover {
      color: #bc9f75;
      background: none;
    }

    @media (min-width: 1125px) {
      font-size: initial !important;
    }
  }

  .dynamic-nav-container {
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
      flex-direction: row;
    }
  }

  .nav-special {
    background: #f1de9e;
    box-shadow: 1px 1px 0 #6e6546, 2px 2px 0 #c9a26c;
    transition: ease-in-out 200ms;
    width: 70px;
    margin: auto;
    margin-left: 0.5em;
    /* padding-bottom: 0.5em; */

    &:hover {
      color: #f1de9e;
      background: #6e6546;
      box-shadow: 3px 3px 0 #c9a26c, 6px 6px 0 #6e6546;
      transition: ease-in-out 200ms;
    }

    &:visited {
      color: black;
      background: #f1de9e;
    }

    @media (min-width: 1125px) {
      padding-bottom: 0.5em;
      width: auto;
    }
  }

  .navbar-burger {
    height: 5rem;
  }

  .checkout-button {
    border: none;
    color: #bc9f75;
    background: none;
    font-size: 1.8rem;
    cursor: pointer;
    transition: ease-in-out 200ms;
    margin: auto;
    margin-right: 2em;
    margin-top: 0.5em;
    padding-left: 0.6em;

    &:hover {
      background: #bc9f75;
      color: white;
      transition: ease-in-out 200ms;
    }

    @media (min-width: 1125px) {
      padding: 0.1em 0.1em 0 0.2em !important;
      margin-top: auto;
      font-size: 1.4rem;
    }
  }

  .main-logo {
    min-height: 40px;

    @media (min-width: 1125px) {
      min-height: 60px;
      margin: 1em;
      margin-right: 2em;
    }
  }
`;
