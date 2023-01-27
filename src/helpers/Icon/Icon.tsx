import * as Icons from "assets/Icons";
import classNames from "classnames";
import React from "react";

import { EColor, EIcons } from "../enumeration";
import styles from "./icon.module.css";

type TIconSizes =
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30;

interface IIconProps {
  name: EIcons;
  size?: TIconSizes;
  color?: EColor;
  className?: string;
}

export function Icon({ name, size, color, className }: IIconProps) {
  const Icon = Icons[name];

  return (
    <span
      className={classNames(styles[`s${size}`], styles[`${color}`], className)}
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon />
    </span>
  );
}
