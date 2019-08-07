export const facetDefinitions = [
  {
    key: "Age",
    dimension: row => row.age
  },
  {
    key: "Gender",
    dimension: row => row.sex
  },
  {
    key: "Morbidity",
    dimension: row => row.morbidity
  },
  {
    key: "Commonness",
    dimension: row => row.common
  },
  {
    key: "Symptoms Onset",
    type: "tags",
    dimension: row => row.onset
  },
  {
    key: "data",
    dimension: row => [row.id, {
      id: row.id,
      disease: row.disease,
      system: row.system,
      sieve: row.sieve,
      common: row.common,
      morbidity: row.morbidity,
    }],
    // reducer: {
    //   init: () => {
    //     return {};
    //   },
    //   add: (p,v)=>{
    //     return {
    //       id: v.id,
    //       disease: v.disease,
    //       system: v.system,
    //       sieve: v.sieve,
    //       common: v.common,
    //       morbidity: v.morbidity,
    //     }
    //   },
    //   remove: (p,v)=>{
    //     return {}
    //   }
    // }
  }
];

export const data = [
  {
    id: 1,
    disease: "Abdominal Injury",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "T-Trauma",
    anatomy: "Abdomen",
    onset_cat: "Hours to a Day",
    morbidity: "High Morbidity",
    common: "Uncommon",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 4,
    disease: "Anal Fissure",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "A-Allergy & Diet",
    anatomy: "Anorectal",
    onset_cat: "Days",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: ["Hours to a Day", "A few days", "Up to a Week", "1-2 Weeks"]
  },
  {
    id: 5,
    disease: "Anorectal Fistula",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "I-Infection",
    anatomy: "Anorectal",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 8,
    disease: "Bowel Obstruction ",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Bowel",
    onset_cat: "Days",
    morbidity: "Medium Morbidity",
    common: "Rare",
    onset: ["Hours to a Day", "A few days", "Up to a Week", "1-2 Weeks"]
  },
  {
    id: 9,
    disease: "Complicated Inguinal Hernia",
    age: "0-1.",
    sex: "M",
    system: "Digestive",
    sieve: "A-Autoimmune & Inflammatory",
    anatomy: "Bowel",
    onset_cat: "Hours to a Day",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 10,
    disease: "Constipation",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Bowel",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 11,
    disease: "Dehydration",
    age: "0-1.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Kidney",
    onset_cat: "Hours to a Day",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 13,
    disease: "Dietary Cause",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "A-Allergy & Diet",
    anatomy: "Stomach and lower Oesophagus",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 15,
    disease: "Hirshsprungs Disease",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "C-Congenital",
    anatomy: "Bowel",
    onset_cat: "Days",
    morbidity: "Medium Morbidity",
    common: "Rare",
    onset: ["Hours to a Day", "A few days", "Up to a Week", "1-2 Weeks"]
  },
  {
    id: 16,
    disease: "Hypercalcaemia",
    age: "0-1.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Parathyroid",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 17,
    disease: "Hypokalaemia",
    age: "0-1.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Kidney",
    onset_cat: "Hours to a Day",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 18,
    disease: "Hypothyroid",
    age: "0-1.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Thyroid",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 19,
    disease: "Intussusception",
    age: "0-1.",
    sex: "B",
    system: "Reproduction & Development",
    sieve: "C-Congenital",
    anatomy: "Bowel",
    onset_cat: "Hours to a Day",
    morbidity: "High Morbidity",
    common: "Rare",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 20,
    disease: "Ischaemic Bowel",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "V-Vascular",
    anatomy: "Bowel",
    onset_cat: "Hours to a Day",
    morbidity: "High Morbidity",
    common: "Rare",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 21,
    disease: "Medications",
    age: "0-1.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "M-Medications & Iatrogenic",
    anatomy: "Kidney",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 26,
    disease: "Peritonitis",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "A-Autoimmune & Inflammatory",
    anatomy: "Abdomen",
    onset_cat: "Hours to a Day",
    morbidity: "High Morbidity",
    common: "Rare",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 27,
    disease: "Post Abdominal Surgery",
    age: "0-1.",
    sex: "B",
    system: "Digestive",
    sieve: "M-Medications & Iatrogenic",
    anatomy: "Abdomen",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 28,
    disease: "Post Procedure",
    age: "0-1.",
    sex: "B",
    system: "Other",
    sieve: "M-Medications & Iatrogenic",
    anatomy: "Other",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 29,
    disease: "Post Surgery",
    age: "0-1.",
    sex: "B",
    system: "Other",
    sieve: "M-Medications & Iatrogenic",
    anatomy: "Other",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 34,
    disease: "Traumatic Fracture",
    age: "0-1.",
    sex: "B",
    system: "Musculoskeletal",
    sieve: "T-Trauma",
    anatomy: "Other",
    onset_cat: "Hours to a Day",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 1,
    disease: "Abdominal Injury",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "T-Trauma",
    anatomy: "Abdomen",
    onset_cat: "Hours to a Day",
    morbidity: "High Morbidity",
    common: "Uncommon",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 2,
    disease: "Acute Appendicitis",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "A-Autoimmune & Inflammatory",
    anatomy: "Bowel",
    onset_cat: "Hours to a Day",
    morbidity: "High Morbidity",
    common: "Common",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 3,
    disease: "Anal Cancer",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "N-Neoplasm",
    anatomy: "Anorectal",
    onset_cat: "All Time Periods",
    morbidity: "High Morbidity",
    common: "Rare",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 4,
    disease: "Anal Fissure",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "A-Allergy & Diet",
    anatomy: "Anorectal",
    onset_cat: "Days",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: ["Hours to a Day", "A few days", "Up to a Week", "1-2 Weeks"]
  },
  {
    id: 5,
    disease: "Anorectal Fistula",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "I-Infection",
    anatomy: "Anorectal",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 6,
    disease: "Anorexia",
    age: "18-34.",
    sex: "B",
    system: "Psychological",
    sieve: "B-Behaviour",
    anatomy: "Other",
    onset_cat: "Months",
    morbidity: "Medium Morbidity",
    common: "Rare",
    onset: ["1-2 Weeks"]
  },
  {
    id: 7,
    disease: "Bipolar",
    age: "18-34.",
    sex: "B",
    system: "Psychological",
    sieve: "B-Behaviour",
    anatomy: "Other",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 8,
    disease: "Bowel Obstruction ",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Bowel",
    onset_cat: "Days",
    morbidity: "Medium Morbidity",
    common: "Rare",
    onset: ["Hours to a Day", "A few days", "Up to a Week", "1-2 Weeks"]
  },
  {
    id: 9,
    disease: "Complicated Inguinal Hernia",
    age: "18-34.",
    sex: "M",
    system: "Digestive",
    sieve: "A-Autoimmune & Inflammatory",
    anatomy: "Bowel",
    onset_cat: "Hours to a Day",
    morbidity: "Medium Morbidity",
    common: "Rare",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 10,
    disease: "Constipation",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Bowel",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 11,
    disease: "Dehydration",
    age: "18-34.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Kidney",
    onset_cat: "Hours to a Day",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 12,
    disease: "Depression",
    age: "18-34.",
    sex: "B",
    system: "Psychological",
    sieve: "B-Behaviour",
    anatomy: "Other",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 13,
    disease: "Dietary Cause",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "A-Allergy & Diet",
    anatomy: "Stomach and lower Oesophagus",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 14,
    disease: "Drug Dependancy",
    age: "18-34.",
    sex: "B",
    system: "Psychological",
    sieve: "M-Medications & Iatrogenic",
    anatomy: "Other",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 16,
    disease: "Hypercalcaemia",
    age: "18-34.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Parathyroid",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 17,
    disease: "Hypokalaemia",
    age: "18-34.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Kidney",
    onset_cat: "Hours to a Day",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 18,
    disease: "Hypothyroid",
    age: "18-34.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Thyroid",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 20,
    disease: "Ischaemic Bowel",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "V-Vascular",
    anatomy: "Bowel",
    onset_cat: "Hours to a Day",
    morbidity: "High Morbidity",
    common: "Uncommon",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 21,
    disease: "Medications",
    age: "18-34.",
    sex: "B",
    system: "Regulation of Body Function",
    sieve: "M-Medications & Iatrogenic",
    anatomy: "Kidney",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 22,
    disease: "Multiple Sclerosis",
    age: "18-34.",
    sex: "B",
    system: "Nervous",
    sieve: "A-Autoimmune & Inflammatory",
    anatomy: "Nerves",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 23,
    disease: "Ovarian Cyst",
    age: "18-34.",
    sex: "F",
    system: "Reproduction & Development",
    sieve: "C-Congenital",
    anatomy: "Pelvis",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Rare",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 24,
    disease: "Pelvic Floor Dysfunction",
    age: "18-34.",
    sex: "F",
    system: "Reproduction & Development",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Pelvis",
    onset_cat: "Weeks",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: ["A few days", "1-2 Weeks"]
  },
  {
    id: 25,
    disease: "Pelvic Inflammatory Disease",
    age: "18-34.",
    sex: "F",
    system: "Reproduction & Development",
    sieve: "I-Infection",
    anatomy: "Pelvis",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Rare",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 26,
    disease: "Peritonitis",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "A-Autoimmune & Inflammatory",
    anatomy: "Abdomen",
    onset_cat: "Hours to a Day",
    morbidity: "High Morbidity",
    common: "Uncommon",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 27,
    disease: "Post Abdominal Surgery",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "M-Medications & Iatrogenic",
    anatomy: "Abdomen",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 28,
    disease: "Post Procedure",
    age: "18-34.",
    sex: "B",
    system: "Other",
    sieve: "M-Medications & Iatrogenic",
    anatomy: "Other",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 29,
    disease: "Post Surgery",
    age: "18-34.",
    sex: "B",
    system: "Other",
    sieve: "M-Medications & Iatrogenic",
    anatomy: "Other",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 30,
    disease: "Pregnancy",
    age: "18-34.",
    sex: "F",
    system: "Reproduction & Development",
    sieve: "E-Endocrine & Pregnancy",
    anatomy: "Pregnancy",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 31,
    disease: "Rectal Cancer",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "N-Neoplasm",
    anatomy: "Bowel",
    onset_cat: "All Time Periods",
    morbidity: "High Morbidity",
    common: "Rare",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 32,
    disease: "Sacral Nerve Pathology",
    age: "18-34.",
    sex: "B",
    system: "Musculoskeletal",
    sieve: "T-Trauma",
    anatomy: "Nerves",
    onset_cat: "Days",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: ["Hours to a Day", "A few days", "Up to a Week", "1-2 Weeks"]
  },
  {
    id: 33,
    disease: "Thrombosed Haemorrhoid",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "V-Vascular",
    anatomy: "Anorectal",
    onset_cat: "All Time Periods",
    morbidity: "Low Morbidity",
    common: "Common",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  },
  {
    id: 34,
    disease: "Traumatic Fracture",
    age: "18-34.",
    sex: "B",
    system: "Musculoskeletal",
    sieve: "T-Trauma",
    anatomy: "Other",
    onset_cat: "Hours to a Day",
    morbidity: "Medium Morbidity",
    common: "Common",
    onset: ["Hours to a Day", "Few Hours", "A few days", "Up to a Week"]
  },
  {
    id: 35,
    disease: "UC",
    age: "18-34.",
    sex: "B",
    system: "Digestive",
    sieve: "A-Autoimmune & Inflammatory",
    anatomy: "Bowel",
    onset_cat: "All Time Periods",
    morbidity: "Medium Morbidity",
    common: "Uncommon",
    onset: [
      "Hours to a Day",
      "Few Hours",
      "A few days",
      "Up to a Week",
      "1-2 Weeks"
    ]
  }
];
