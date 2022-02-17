import React from "react";
import Helmet from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";
import GlobalStyles from "../styles/GlobalStyles";
import TypographyStyles from "../styles/TypographyStyles";

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/bbd4cpa.css" />
      </Helmet>
      <GlobalStyles />
      <TypographyStyles />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;


