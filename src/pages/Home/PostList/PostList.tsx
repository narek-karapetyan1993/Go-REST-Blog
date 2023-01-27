import Loading from "components/Common/Loading";
import { IPost } from "features/posts/postsSlice";
import React from "react";
import { generateRandomString } from "utils/ts/generateRandomIndex";
import { PostListProps } from "./";
import { Post } from "./Post";

import styles from "./PostList.module.css";

export function PostList({ postsData }: PostListProps) {
  return (
    <div className={styles.wrapper}>
      {postsData.posts.length === 0 &&
        postsData.status &&
        postsData.status === "idle" && (
          <div className={styles.emptyPost}>{"Нет ни одного поста"}</div>
        )}

      {postsData.status && postsData.status === "loading" && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}

      {postsData.posts.length > 0 && (
        <ul className={styles.list}>
          {postsData.posts.map((post: IPost) => (
            <Post key={generateRandomString()} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
}
