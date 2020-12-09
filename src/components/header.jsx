import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useSiteMetadata } from "../hooks/site-metadata";

const Header = ({ location }) => {
  const { title } = useSiteMetadata();

  const pathPrefix = useStaticQuery(graphql`
    query {
      site {
        pathPrefix
      }
    }
  `).site.pathPrefix;

  const isTop =
    location.pathname === "/" || // develop mode
    location.pathname === pathPrefix + "/"; // product build

  let heading;
  if (isTop) {
    heading = (
      <h1>
        <Link to={`/`}>{title}</Link>
      </h1>
    );
  } else {
    heading = <Link to={`/`}>{title}</Link>;
  }

  return <header id="site-title">{heading}</header>;
};

export default Header;
