import React, { FC } from "react";
import classnames from "classnames";
import styles from "./Bucket.module.scss";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";

type Props = {
  name: string;
  toggleBucket: (bucketKey: string) => void;
  count?: number;
  active?: boolean;
  type?: string;
};

const Bucket: FC<Props> = ({ name, toggleBucket, count, active, type }) => (
  <div
    onClick={() => toggleBucket(name)}
    className={classnames(styles.bucket, { [styles.active]: active })}
  >
    <div className={styles.label}>
      {type === "composite" ? JSON.parse(name) : name}
    </div>
    {count && <div className={styles.count}>({count})</div>}
    <div className={styles.close}>
      <CloseIcon />
    </div>
  </div>
);

export default Bucket;
