//TODO: Check that this is a good way of doing types...

export type Data = {}[];
export type Facet = {
  key: string;
  dimension?: (d: { [key: string]: any }) => any;
  reducer?: any;
  group?: (d: { [key: string]: any }) => any;
  facets?: [];
  type?: string;
};
export type Dimension = {
  key: string;
  dimension?: (d: { [key: string]: any }) => any;
  type?: string;
};
export type Group = {
  key: string;
  reducer?: any;
  group?: (d: { [key: string]: any }) => any;
  facetKey?: string;
};
