//https://github.com/erikras/ducks-modular-redux
//https://github.com/sillsdev/appbuilder-portal/tree/master/source/SIL.AppBuilder.Portal.Frontend/src/redux-store
import React, { Component } from "react";
import Crossfilter, {
  updateActiveFilters,
  checkActiveBucket
} from "../../utils/crossfilterUtil";

import data from "../../data/data";
import facetDefinitions from "../../data/facets";
import Facet from "./Facet";

// const xf = new Crossfilter(data, []);

class Facets extends Component {
  constructor() {
    super();
    this.state = {
      facets: [],
      facetOptions: facetDefinitions,
      filters: {}
    };
  }

  componentWillMount() {
    const xf = new Crossfilter(data, []);
    this.setState({ xf });
  }

  filterFacet(bucket, key, type) {
    console.log(bucket);
    let newFilters = updateActiveFilters(this.state.filters[key], bucket, type);
    this.setState({
      filters: { ...this.state.filters, [key]: newFilters }
    });

    this.state.xf.applyFilter(key, newFilters);
    this.updateFacets();
  }

  toggleFacet(facet) {
    const xf = this.state.xf;
    if (xf.facetExists(facet.key)) {
      xf.removeFacet(facet.key);
    } else {
      xf.addFacet(facet);
    }
    this.setState({
      filters: { ...this.state.filters, [facet.key]: [] }
    });

    //Testing range filter
    if (facet.key === "Age" && xf.facetExists("Age")) {
      this.filterFacet([[1, 12]], "Age");
    } else {
      this.updateFacets();
    }
  }

  updateFacets() {
    this.setState({ facets: this.state.xf.reduce() });
  }

  render() {
    const { facets, facetOptions, xf, filters } = this.state;
    console.log(xf, facets);

    return (
      <div>
        <div>
          {facetOptions.map(option => (
            <div
              onClick={e => this.toggleFacet(option, e)}
              key={option.key}
              style={{
                backgroundColor: xf.facetExists(option.key) ? "#00ffff" : ""
              }}
            >
              {option.key}{" "}
              <span>{xf.facetExists(option.key) ? "(Active)" : ""}</span>
            </div>
          ))}
        </div>
        <hr />

        <div>
          {facets.map(facet => (
            <Facet
              key={facet.key}
              facetKey={facet.key}
              type={facet.type}
              buckets={facet.buckets}
              filterFacet={(bucket, key, type) =>
                this.filterFacet(bucket, key, type)
              }
              checkBucket={checkActiveBucket}
              filters={filters[facet.key]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Facets;
