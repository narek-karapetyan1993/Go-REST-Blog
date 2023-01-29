import Loading from "components/Common/Loading";
import { selectLiked } from "features/liked/likedSlice";
import { IPost } from "features/posts/postsSlice";
import React from "react";
import { useAppSelector } from "store/hooks";
import { generateRandomString } from "utils/ts/generateRandomIndex";
import { PostListProps } from "./";
import { Post } from "./Post";

import styles from "./PostList.module.css";

export function PostList({ postsData }: PostListProps) {
  const likedState = useAppSelector(selectLiked);

  return (
    <div className={styles.wrapper}>
      {postsData.status && postsData.status === "loading" && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}

      {postsData.status === "succeeded" && postsData.posts.length === 0 && (
        <div className={styles.emptyPost}>no posts</div>
      )}

      {postsData.status === "succeeded" && postsData.posts.length > 0 && (
        <ul className={styles.list}>
          {postsData.posts.map((post: IPost) => {
            if (likedState.liked && !post.liked) {
              return null;
            } else return <Post key={generateRandomString()} post={post} />;
          })}
        </ul>
      )}

      {postsData.status && postsData.status === "failed" && (
        <div className={styles.error}>{postsData.status}</div>
      )}
    </div>
  );
}
