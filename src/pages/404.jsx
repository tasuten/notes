import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="404 Not Found"
        description="404 Not Found"
        location={location}
      />
      <section id="not-found">
        <h1>404 Not Found</h1>
        <p>
          このサイトのトップページは<Link to={"/"}>こちら</Link>へ<br />
          記事タイトル一覧は<Link to={"/all"}>こちら</Link>
        </p>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
