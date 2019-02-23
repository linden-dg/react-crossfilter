import React, { Component } from "react";
import classnames from "classnames";
import styles from "./Bucket.module.scss";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";

type Props = {
  name: string;
  count?: number;
  toggleBucket: (bucketKey: string, e: {}) => void;
  active: boolean;
  type?: string;
};

class Bucket extends Component<Props> {
  render() {
    const { name, count, toggleBucket, active, type } = this.props;

    return (
      <div
        onClick={e => toggleBucket(name, e)}
        className={classnames(styles.bucket, { [styles.active]: active })}
      >
        <div className={styles.label}>
          {type === "composite" ? JSON.parse(name) : name}&nbsp;
        </div>
        <div className={styles.count}>({count})</div>
        {/*{active && (*/}
        <div className={styles.close}>
          <CloseIcon />
        </div>
        {/*)}*/}
      </div>
    );
  }
}

export default Bucket;
