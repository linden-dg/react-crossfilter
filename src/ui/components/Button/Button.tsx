import React, { FC } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

const Button: FC<{
  className?: string;
  onClick?: (e: {}) => void;
  variant?: string;
  rounded?:boolean
}> = ({ className, onClick, variant, rounded, children }) => (
  <button
    className={classnames(
      styles.button,
      {
        [styles.solid]: variant === "solid",
        [styles.outline]: variant === "outline",
        [styles.rounded]: rounded
      },
      className
    )}
    onClick={onClick ? e => onClick(e) : () => {}}
    type="button"
  >
    {children}
  </button>
);

export default Button;
