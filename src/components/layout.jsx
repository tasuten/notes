/* Base layout of all pages */
import React from "react";
import Webfont from "./webfont";
import Header from "./header";

const Layout = ({ location, children }) => {
  return (
    <>
      <Webfont />
      <Header location={location} />
      <main>{children}</main>
      <footer>
        <p id="copyright">
          <small>
            Unless otherwise noted, content is licensed under a{" "}
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
              CC-BY-4.0
            </a>
            .
          </small>
        </p>
      </footer>
    </>
  );
};

export default Layout;
