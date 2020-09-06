import React from "react";
import styled from "styled-components"

import "./style.scss";
import Helmet from "./helmet";
import Navbar from "../components/navbar";
import Footer from "./globals/footer";

const Layout = ({ children }) => (
  <Container className="columns">
    <div className="column">
      <Helmet />
      <Navbar />
      <div className="columns is-centered">
        <div className="column main-body">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  </Container>
);

const Container = styled.div`
  .main-body {
    min-height: 78vh;
  }
`

export default Layout;
