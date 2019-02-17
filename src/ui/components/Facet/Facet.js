import React, { Component } from "react";

class Facet extends Component {
  render() {
    const {
      facetKey,
      buckets,
      type,
      filterFacet,
      checkBucket,
      filters
    } = this.props;

    return (
      <div key={facetKey}>
        <h2>{facetKey}</h2>
        <ul>
          {buckets.map(bucket => (
            <li
              onClick={e => filterFacet(bucket.key, facetKey, type, e)}
              key={`${facetKey}-${bucket.key}`}
              style={{
                backgroundColor: checkBucket(bucket.key, filters)
                  ? "#00ffad"
                  : ""
              }}
            >
              {type === "composite" ? JSON.parse(bucket.key) : bucket.key} - (
              {bucket.value})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Facet;
