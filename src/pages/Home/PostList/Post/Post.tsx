import { selectLiked } from "features/liked/likedSlice";
import { like, deletePost } from "features/posts/postsSlice";
import { EColor, EIcons } from "helpers/enumeration";
import { Icon } from "helpers/Icon";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { PostProps } from "./";

import styles from "./Post.module.css";

export function Post({ post }: PostProps) {
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(true);
  const likedState = useAppSelector(selectLiked);

  useEffect(() => {
    if (!likedState.liked) {
      return;
    } else if (likedState.liked && !post.liked) {
      console.log("like");

      setShow(false);
    }
  }, [likedState, post.liked]);

  return (
    <>
      {show && (
        <li className={styles.item}>
          <article className={styles.article}>
            <header className={styles.header}>
              <h3 className={styles.heading}>{post.title}</h3>
            </header>
            <footer className={styles.footer}>
              <button
                className={styles.btnLike}
                type="button"
                onClick={() => dispatch(like(post.id))}
              >
                <Icon
                  name={EIcons.like}
                  color={post.liked ? EColor.secondary : EColor.grey}
                />
              </button>
              <button
                className={styles.btnDelete}
                type="button"
                onClick={() => dispatch(deletePost(post.id))}
              >
                <Icon name={EIcons.delete} color={EColor.red_input} />
              </button>
            </footer>
          </article>
        </li>
      )}
    </>
  );
}
