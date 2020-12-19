import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO location={location} />
      <section id="about-site">
        <h2>このサイトについて</h2>
        <p>
          ここは、私tasutenが主に技術・科学系の話について備忘録も兼ねて記しているサイトになります。
          記事一覧については<Link to={"/all"}>/all</Link>より辿れます。
        </p>
        <p>
          私自身についてはそのうちプロフィールページを別に作る予定ですが、上記以外のトピックについては『
          <a href="https://tasuten-diary.hatenablog.com/">鴨と子規と。</a>
          』というブログに書いています。また、
          <a href="https://twitter.com/tasuten">Twitter</a>および
          <a href="https://github.com/tasuten">GitHub</a>
          もともにtasutenというIDになります。
        </p>
        <p>
          このサイトについてなど連絡事項がありましたら上記のTwitter、当サイトのGitHubの<a href="https://github.com/tasuten/notes/discussions">Discussions</a>や<a href="https://github.com/tasuten/notes/issues">Issues</a>、もしくはheliopause64+technoteのあとに@gmail.comを付与したアドレスへのメールまで。
        </p>
      </section>
      <section id="recently-posts">
        <h2>直近の投稿</h2>
        {posts.map(({ node }) => {
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link to={node.fields.slug}>
                    {node.frontmatter.title || node.fields.slug}
                  </Link>
                </h3>
                <small>
                  <time dateTime={node.frontmatter.hyphenedDate}>
                    {node.frontmatter.readableDate}
                  </time>
                </small>
              </header>
              <section>
                <p>{node.frontmatter.description || node.excerpt}</p>
              </section>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query recentlyPosts {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, DESC]
      }
      limit: 5
    ) {
      edges {
        node {
          excerpt(truncate: true)
          fields {
            slug
          }
          frontmatter {
            hyphenedDate: date(formatString: "y-MM-DD")
            readableDate: date(formatString: "MMMM D y")
            title
            description
          }
        }
      }
    }
  }
`;
