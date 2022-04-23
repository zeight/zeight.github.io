import React from "react";
import { Link } from "react-router-dom";
import PostHelper from "../../helpers/postHelpers";

//Styles
import styles from "./PostList.module.scss";

const PostList: React.FC<PostsList> = (props) => {
  return (
    <div className={styles.postList}>
      <div className="row">
        <div className="col-12">
          <ul>
            {props.posts.map((post: Post) => {
              let postUrl = "/posts/" + post.slug;
              return (
                <li key={post.slug} className={styles.listItem}>
                  <time className={styles.postDate}>
                    {PostHelper.convertDateToLocale(post.date)}
                  </time>
                  <Link to={postUrl} className={styles.postLink}>
                    {post.title}
                  </Link>
                  <div className={styles.abstract}>{post.abstract}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostList;
