import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="記事一覧" description="記事一覧ページ" location={location} />
      <article id="all-posts">
        <h1>記事一覧</h1>
        <dl>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div className="post" key={node.fields.slug}>
                <dt className="post-title">
                  <Link to={node.fields.slug}>{title}</Link>
                </dt>
                <dd className="post-date">
                  <time dateTime={node.frontmatter.hyphenedDate}>
                    {node.frontmatter.readableDate}
                  </time>
                </dd>
              </div>
            );
          })}
        </dl>
      </article>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query allPosts {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, DESC]
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            hyphenedDate: date(formatString: "y-MM-DD")
            readableDate: date(formatString: "MMMM D y")
            title
          }
        }
      }
    }
  }
`;
