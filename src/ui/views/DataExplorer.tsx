import React, { Component } from "react";
import Crossfilter, {
  updateActiveFilters,
  checkActiveBucket
} from "../../store/Crossfilter";
import { Facet as FacetType } from "../../store/CrossfilterTypes";
import Facet from "./dataExplorer/Facet";
import Button from "../components/Button/Button";

// import data from "../../data/data";
// import facetDefinitions from "../../data/facets";
import { data, facetDefinitions } from "../../data/constipation"

type Props = {};
type State = {
  facets: {
    key: string;
    buckets: { key: string; value: number }[];
    type?: string;
  }[];
  facetOptions: FacetType[];
  filters: { [key: string]: any };
  xf: Crossfilter;
};

class Facets extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      facets: [],
      facetOptions: facetDefinitions,
      filters: {},
      xf: new Crossfilter()
    };
  }

  componentWillMount() {
    this.state.xf.init(data);
  }

  filterFacet(bucket: any, key: string, type?: string) {
    let newFilters = updateActiveFilters(this.state.filters[key], bucket, type);
    this.setState({
      filters: { ...this.state.filters, [key]: newFilters }
    });

    this.state.xf.applyFilter(key, newFilters);
    this.updateFacets();
  }

  toggleFacet(facet: FacetType) {
    const xf = this.state.xf;
    if (xf.facetExists(facet.key)) {
      xf.removeFacet(facet.key);
    } else {
      xf.addFacet(facet);
    }
    this.setState({
      filters: { ...this.state.filters, [facet.key]: [] }
    });

    // //Testing range filter
    // if (facet.key === "Age" && xf.facetExists("Age")) {
    //   this.filterFacet([[1, 12]], "Age");
    // } else {
      this.updateFacets();
    // }
  }

  updateFacets() {
    this.setState({ facets: this.state.xf.reduce() });
  }

  render() {
    const { facets, facetOptions, xf, filters } = this.state;

    console.log(facets);

    return (
      <div>
        <div>
          {facetOptions.map(option => (
            <Button
              onClick={() => this.toggleFacet(option)}
              key={option.key}
              variant={xf.facetExists(option.key)?"solid":""}
            >
              {option.key}
            </Button>
          ))}
        </div>
        <hr />

        <div>
          {facets.map(facet => ( facet.key !== 'data' &&
            <Facet
              key={facet.key}
              facetKey={facet.key}
              type={facet.type}
              buckets={facet.buckets}
              filterFacet={(bucket, key, type?: string) =>
                this.filterFacet(bucket, key, type)
              }
              checkBucket={checkActiveBucket}
              filters={filters[facet.key]}
            />
          ))}
        </div>
        <div>
          {facets.map(facet => ( facet.key === 'data' &&
            <div key={facet.key}>
              {
                facet.buckets.map((b:any) => (
                  <div key={b.key[0]}>
                    {b.key[1].disease}
                  </div>
                ))
              }
            </div>
          ))}
        </div>
      </div>

    );
  }
}

export default Facets;
