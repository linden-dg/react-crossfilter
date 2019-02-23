import React, { FC } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

const Button: FC<{
  className?: string;
  onClick?: (e: {}) => void;
}> = ({ className, onClick, children }) => (
  <button
    className={classnames(styles.button, className)}
    onClick={onClick ? e => onClick(e) : () => {}}
    type="button"
  >
    {children}
  </button>
);

export default Button;
