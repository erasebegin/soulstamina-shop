import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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
          <img src={soulstaminaLogo} className="main-logo"/>
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

      <div id="navbarBasicExample" className={`navbar-menu ${navActive}`}>
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">About</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Print</a>
              <a className="navbar-item">Canvas</a>
              <a className="navbar-item">Photography</a>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: white !important;
  @media (min-width: 400px) {
    height: 200px;
  }
`;
