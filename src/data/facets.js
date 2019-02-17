const facets = [
  {
    key: "Age",
    type: "range",
    dimension: row => +row.age
  },
  {
    key: "Class",
    dimension: row => row.pclass
  },
  {
    key: "Gender",
    dimension: row => row.sex
  },
  {
    key: "Survived?",
    dimension: row => row.survived
  },
  {
    key: "Testing Composite",
    type: "composite",
    dimension: row => JSON.stringify([row.sex, row.pclass])

    // dimension: row => [
    //   row.sex + "|" + row.pclass,
    //   { sex: row.sex, class: row.pclass }
    // ]
  },
  {
    key: "Testing Tags",
    type: "tags",
    dimension: row => [row.sex, row.pclass]
  }
];

export default facets;
