import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link className={styles.logo} to={"/Go-REST-Blog"}>
            Go REST Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
