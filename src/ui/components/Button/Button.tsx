import React, { Component } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

type Props = {
  className?: string;
};

class Button extends Component<Props> {
  render() {
    const { className, children } = this.props;

    return (
      <button className={classnames(styles.button, className)} type="button">
        {children}
      </button>
    );
  }
}

export default Button;
