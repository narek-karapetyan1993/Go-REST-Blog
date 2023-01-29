import { setLikedTrue, setLikedFalse } from "features/liked/likedSlice";
import { getPosts, selectPosts } from "features/posts/postsSlice";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";

import styles from "./Home.module.css";
import { PostList } from "./PostList";

export function Home() {
  const dispatch = useAppDispatch();
  const postsData = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.filter}>
          <button
            type="button"
            className={styles.likedBtn}
            onMouseDown={() => {
              dispatch(setLikedTrue());
            }}
            onMouseUp={() => {
              dispatch(setLikedFalse());
            }}
          >
            Show liked
          </button>
        </div>
        <PostList postsData={postsData} />
      </div>
    </div>
  );
}
