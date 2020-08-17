import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Navbar from "../components/navbar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
