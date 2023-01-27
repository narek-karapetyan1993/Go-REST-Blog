import React from "react";
import { Link } from "react-router-dom";

import styles from "./nomatch.module.css";

export function NoMatch() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <span>По вашему запросу ничего не нашлось</span>
        <Link to={"/"}>Вернутся на главную</Link>
      </div>
    </div>
  );
}
