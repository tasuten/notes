import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const queried = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
          author
          description
          url
          lang
          ogpImagePath
        }
      }
    }
  `);
  return queried.site.siteMetadata;
};
