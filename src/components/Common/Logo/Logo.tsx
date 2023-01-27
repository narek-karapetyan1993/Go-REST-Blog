import { EIcons } from "helpers/enumeration";
import { Icon } from "helpers/Icon";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./logo.module.css";

export function Logo() {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/" className={styles.logoLink}>
        <Icon name={EIcons.logo} />
      </NavLink>
    </div>
  );
}
