import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PostList from "./postlist/PostList";
import PostHelper from "../helpers/postHelpers";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import config from "../siteconfig";

const Main: React.FC = () => {
  const [postsList, setPostsList] = useState<PostsList>();

  useEffect(() => {
    PostHelper.getPostList().then((data) => {
      setPostsList(data);
    });
  }, []);

  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{config.SITE.TITLE}</title>
        <link rel="canonical" href="https://zeight.github.io" />
      </Helmet>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {postsList && <PostList {...postsList} />}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
