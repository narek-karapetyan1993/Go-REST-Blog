import React from "react";
import { {{pascalCase}}Props } from "./";

import styles from "./{{pascalCase}}.module.css";

export function {{pascalCase}}({ prop = "default value" }: {{pascalCase}}Props) {
  return <div className={styles.wrapper}>{{pascalCase}} {prop}</div>;
}
