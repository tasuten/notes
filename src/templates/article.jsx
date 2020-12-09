import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useSiteMetadata } from "../hooks/site-metadata";

const ArticleTemplate = ({ data, location }) => {
  const article = data.markdownRemark;
  const siteTitle = useSiteMetadata().title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={article.frontmatter.title}
        description={article.frontmatter.description || article.excerpt}
        location={location}
      />
      <article>
        <header id="note-prologue">
          <h1>{article.frontmatter.title}</h1>
          <p>
            <time dateTime={article.frontmatter.hyphenedDate}>
              {article.frontmatter.readableDate}
            </time>
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: article.html }} />
        {/* <footer> 記事のフッター（投稿者名など）はここ？</footer> */}
      </article>

      {/* 記事コンテンツではないが記事固有のパーツ（隣の記事へのリンクなど）を挟むならここ */}
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160, truncate: true)
      html
      frontmatter {
        title
        hyphenedDate: date(formatString: "y-MM-DD")
        readableDate: date(formatString: "MMMM D y")
        description
      }
    }
  }
`;
