/* webfont load */

import React from "react";
import { Helmet } from "react-helmet";

const Webfont = () => {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Webfont;
