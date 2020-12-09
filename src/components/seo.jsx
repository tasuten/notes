import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useSiteMetadata } from "../hooks/site-metadata";

const SEO = ({ location, title, description }) => {
  const pathPrefix = useStaticQuery(graphql`
    query {
      site {
        pathPrefix
      }
    }
  `).site.pathPrefix;

  const site = useSiteMetadata();

  const isTop =
    location.pathname === "/" || // develop mode
    location.pathname === pathPrefix + "/"; // product build

  const lang = site.lang;

  const seoTitle = isTop ? site.title : `${title} - ${site.title}`;

  const seoDescription = isTop ? site.description : description;

  // it does not work well dev mode
  const favicon = pathPrefix + "/favicon.ico";

  const ogType = isTop ? "website" : "article";

  const image = site.url + site.ogpImagePath;

  const url = site.url + location.pathname;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
    >
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="icon" href={favicon} />

      <meta property="twitter:card" content="summary" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

export default SEO;
