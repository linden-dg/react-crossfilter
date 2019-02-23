import React, { FC, useState } from "react";
import classnames from "classnames";
import styles from "./Facet.module.scss";
import { ReactComponent as Chevron } from "../../../assets/icons/chevron-up.svg";
import { ReactComponent as ClearFilter } from "../../../assets/icons/filter-remove.svg";
import Bucket from "./Bucket";

type Props = {
  facetKey: string;
  buckets: {
    key: string;
    value: number;
  }[];
  type: string;
  filterFacet: (
    bucketKey: string | null,
    facetKey: string,
    facetType: string
  ) => void;
  checkBucket: (key: string, filters: []) => boolean;
  filters: [];
};

const Facet: FC<Props> = ({
  facetKey,
  buckets,
  type,
  checkBucket,
  filters,
  filterFacet
}) => {
  const [collapse, toggleCollapse] = useState(false);

  return (
    <div
      key={facetKey}
      className={classnames(styles.facet, { [styles.collapse]: collapse })}
    >
      <div className={styles.title}>
        <div className={styles.flex}>
          <div>{facetKey}</div>
          <div className={styles.flex}>
            {filters.length > 0 && (
              <div
                className={styles.filter}
                onClick={() => filterFacet(null, facetKey, type)}
              >
                <ClearFilter />
              </div>
            )}

            <div
              className={styles.chevron}
              onClick={() => toggleCollapse(!collapse)}
            >
              <Chevron />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["bucket-list"]}>
        {buckets.map(bucket => (
          <Bucket
            key={`${facetKey}-${bucket.key}`}
            name={bucket.key}
            count={bucket.value}
            toggleBucket={(name: string) => filterFacet(name, facetKey, type)}
            type={type}
            active={checkBucket(bucket.key, filters)}
          />
        ))}
      </div>
    </div>
  );
};

export default Facet;
