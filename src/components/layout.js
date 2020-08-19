import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Navbar from "../components/navbar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="columns">
    <div className="column">
      <Helmet />
      <Navbar />
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          {children}
          </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
