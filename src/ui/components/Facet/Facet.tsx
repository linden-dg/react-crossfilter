import React, { Component } from "react";
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
  filterFacet: (bucketKey: string | null, facetKey: string, facetType: string) => void;
  checkBucket: (key: string, filter: []) => boolean;
  filters: [];
};

type State = {
  collapse: boolean;
};

class Facet extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  toggleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleBucket(bucket: string | null) {
    const { filterFacet, facetKey, type } = this.props;
    filterFacet(bucket, facetKey, type);
  }

  resetFilter(){
    this.toggleBucket(null)
  }

  render() {
    const { facetKey, buckets, type, checkBucket, filters } = this.props;
    const { collapse } = this.state;

    return (
      <div
        key={facetKey}
        className={classnames(styles.facet, { [styles.collapse]: collapse })}
      >
        <div className={styles.title} >
          <div className={styles.flex}>
            <div>{facetKey}</div>
            <div className={styles.flex}>
              {filters.length>0 &&
              <div className={styles.filter} onClick={() => this.resetFilter()}>
                <ClearFilter />
              </div>}

              <div className={styles.chevron} onClick={() => this.toggleCollapse()}>
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
              toggleBucket={(name: string) => this.toggleBucket(name)}
              type={type}
              active={checkBucket(bucket.key, filters)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Facet;
