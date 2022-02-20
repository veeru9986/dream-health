import React from "react";
import Helmet from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";
import GlobalStyles from "../styles/GlobalStyles";
import TypographyStyles from "../styles/TypographyStyles";

function Layout({ children, location }) {
  console.log(location);
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/bbd4cpa.css" />
      </Helmet>
      <GlobalStyles />
      <TypographyStyles />
      <Navbar
        positionS={
          location.pathname.match("/sign-in/*") ||
          location.pathname.match("/sign-up/*")
            ? 0
            : 1
        }
      />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
