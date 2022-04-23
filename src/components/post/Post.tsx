import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fm from "front-matter";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet";
import PostHelper from "../../helpers/postHelpers";
import PostContent from "./PostContent";
//Styles
import styles from "./Post.module.scss";

interface FrontMatterData {
  title: string;
  date: string;
  abstract: string;
}
interface PageParams {
  slug: string;
}
const Post: React.FC = () => {
  let { slug } = useParams<PageParams>();
  const [post, setPost] = useState<string>();
  const [frontMatter, setFrontMatter] = useState<FrontMatterData>();

  const markdownImport = () => {
    import(`../../posts/${slug}.md`)
      .then((result) => {
        fetch(result.default)
          .then((res) => res.text())
          .then((res) => {
            setPost(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const frontMatterParse = (currentPost: string) => {
    if (currentPost) {
      let frontMatterData = fm(currentPost);
      let attributes = frontMatterData.attributes as FrontMatterData;
      setFrontMatter(attributes);
    }
  };

  useEffect(() => {
    markdownImport();
  });

  useEffect(() => {
    post && frontMatterParse(post);
  }, [post]);

  return (
    <div className={styles.postPage}>
      <Helmet>
        <title>{`${frontMatter?.title}`}</title>
        <meta name="description" content={`${frontMatter?.abstract}`} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Header />
      <article className="container">
        <div className={`row ${styles.postHeader}`}>
          <div className="col-12">
            {frontMatter && <h1>{frontMatter?.title}</h1>}
          </div>
          <time className="col-12">
            {frontMatter && PostHelper.convertDateToLocale(frontMatter?.date)}
          </time>
        </div>
        <section className="row">
          <div className="col-12">{post && <PostContent post={post} />}</div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default Post;
