import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { SiEtsy } from "react-icons/si";

import "./style.scss";
import soulstaminaLogo from "../images/logo_feb.png";

const Navbar = () => {
  const [navActive, setNavActive] = useState("");

  const setNav = () => {
    navActive === "" ? setNavActive("is-active") : setNavActive("");
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
          data-target="navbarBasicExample"
          onClick={setNav}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${navActive}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/print" className="navbar-item nn">
            Print
          </Link>
          <Link to="/canvas" className="navbar-item nn">
            Canvas
          </Link>
          <Link to="/postcards" className="navbar-item nn">
            Postcards
          </Link>
            <button class="snipcart-checkout checkout-button">
              <RiShoppingCart2Fill />
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
  
  .navbar-item {
    font-weight: 600;
    color: #222;

    &:hover {
      color: #BC9F75;
      background: none;
    }
  }

  .checkout-button {
    border: none;
    color: #BC9F75;
    background: none;
    font-size: 1.3rem;
    cursor: pointer;
    transition: ease-in-out 200ms;

    &:hover {
      background: #BC9F75;
      color: white;
      transition: ease-in-out 200ms;
    }
  }

  .main-logo {
    min-height: 60px;
    margin: 1em;
    margin-right: 2em;
    @media(max-width: 600px) {
    min-height: 30px;
  }
  }
`;
