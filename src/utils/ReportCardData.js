export const ReportCardData = [
  {
    heading: "Trifecta",
    description: `These markers are the ones to watch on-going in order to monitor if
      things are starting to go sideways. They are inflammation markers and
      will typically be the first to show signs if things are not progressing
      in a positive way.`,
    tables: [
      {
        tableHeading: "",
        tableData: [
          {
            lab: "hsCRP",
            range: {
              min: 0.0,
              max: 1.0,
            },
            enter: 1.2,
            status: "↑",
          },
          {
            lab: "LDH/LD",
            range: {
              min: 140,
              max: 200,
            },
            enter: 180,
            status: "-",
          },
          {
            lab: "SED Rate/ESR",
            range: {
              min: 0.0,
              max: 10.0,
            },
            enter: 10,
            status: "-",
          },
        ],
      },
    ],
  },
  {
    heading: "Metabolic Balance",
    description:
      "Cancer is a metabolic disease and is fed by blood sugar. Bringing balance to your blood sugar will slow down the fuel to the cancer.",
    tables: [
      {
        tableHeading: "",
        tableData: [
          {
            lab: "HbA1c",
            range: {
              min: 4.1,
              max: 5.4,
            },
            enter: 5.6,
            status: "↑",
          },
          {
            lab: "Insulin",
            range: {
              min: 2.0,
              max: 8.0,
            },
            enter: 8.5,
            status: "↑",
          },
          {
            lab: "Glucose",
            range: {
              min: 70,
              max: 90,
            },
            enter: 92,
            status: "↑",
          },
          {
            lab: "IGF-1",
            range: {
              min: 0,
              max: 100,
            },
            enter: 180,
            status: "↑",
          },
          {
            lab: "LDH/LD",
            range: {
              min: 140,
              max: 200,
            },
            enter: 180,
            status: "-",
          },
          {
            lab: "G6PD",
            range: {
              min: 127,
              max: 427,
            },
            enter: 10,
            status: "-",
          },
        ],
      },
    ],
  },
  {
    heading: "Mental and Emotional Well-Being",
    description:
      "A large portion of cancer develops after trauma and while it is often hard to deal with, it is often critical to true healing. This area does not have lab testing and is much harder to pinpoint and easier to avoid – don't make that mistake!",
    tables: [
      {
        tableHeading: "",
        tableData: [
          {
            lab: "Adverse Childhood Events",
            range: {
              min: "0",
              max: "3",
            },
            enter: "",
            status: "-",
          },
        ],
      },
    ],
  },
  {
    heading: "Inflammation and Oxidative Stress",
    description:
      "Our bodies produce most of our oxidative stress with energy production, but there are many other toxins and stresses on the body that will allow the fire of inflammation and rust of oxidative stress to get out of control. These are important markers to monitor things and make up our Trifecta.",
    tables: [
      {
        tableHeading: "",
        tableData: [
          {
            lab: "hsCRP",
            range: {
              min: "0.0",
              max: "1.0",
            },
            enter: "1.2",
            status: "↑",
          },
          {
            lab: "SED Rate/ESR",
            range: {
              min: "0.0",
              max: "10.0",
            },
            enter: "10.0",
            status: "-",
          },
          {
            lab: "LDH/LD",
            range: {
              min: "140",
              max: "200",
            },
            enter: "180.0",
            status: "-",
          },
          {
            lab: "Homocysteine",
            range: {
              min: "4.0",
              max: "7.0",
            },
            enter: "10.0",
            status: "↑",
          },
          {
            lab: "Total Iron",
            range: {
              min: "85",
              max: "130",
            },
            enter: "110.0",
            status: "-",
          },
          {
            lab: "Ferritin",
            range: {
              min: "50",
              max: "122",
            },
            enter: "75.0",
            status: "-",
          },
          {
            lab: "TIBC",
            range: {
              min: "250",
              max: "350",
            },
            enter: "320.0",
            status: "-",
          },
          {
            lab: "% Saturation",
            range: {
              min: "20",
              max: "35",
            },
            enter: "34.0",
            status: "-",
          },
          {
            lab: "Albumin",
            range: {
              min: "49.2",
              max: "10.0",
            },
            enter: "9.5",
            status: "-",
          },
        ],
      },
    ],
  },
  {
    heading: "Microbiome Balance",
    description:
      "You have more cells that are NOT you than are! Your microbiome, if healthy, will make nutrients for you and keep you running strong. Here we want to look at digestion, leaky gut, and dysbiosis.",
    tables: [
      {
        tableHeading: "",
        tableData: [
          {
            lab: "H pylori",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Morganella",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Pseudomonas",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Pseudomonas aeroginosa",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Desulfovibrio",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Citrobacter",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Citrobacter freundii",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Klebsiella",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Klebsiella pneumoniae",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Proteus",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Proteus mirabilis",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Fusobacterium",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Any Yeasts",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Any parasites",
            range: {
              min: "0",
              max: "present/elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Steatocrit",
            range: {
              min: "0",
              max: "5",
            },
            enter: "3",
            status: "-",
          },
          {
            lab: "Elastase - 1",
            range: {
              min: "500",
              max: "9999",
            },
            enter: "400",
            status: "↑",
          },
          {
            lab: "Electrolytes",
            range: {
              min: "9",
              max: "9",
            },
            enter: "11.0",
            status: "-",
          },
        ],
      },
    ],
  },
  {
    heading: "Hormone Balance",
    description:
      "Many cancers are driven by imbalances with the sex hormones. Instead of just eliminating them completely, bring them back into balance so that they aren't driving cancer but not creating awful symptoms. The thyroid hormones are also key to making sure the body has the energy for all this healing work.",
    tables: [
      {
        tableHeading: "Thyroid Hormones",
        tableData: [
          {
            lab: "TSH",
            range: {
              min: "1.00",
              max: "2.00",
            },
            enter: "2.3",
            status: "↑",
          },
          {
            lab: "Free T3",
            range: {
              min: "3.0",
              max: "3.3",
            },
            enter: "3.2",
            status: "-",
          },
          {
            lab: "Free T4",
            range: {
              min: "1.0",
              max: "1.5",
            },
            enter: "1.2",
            status: "-",
          },
          {
            lab: "Total T3",
            range: {
              min: "90",
              max: "168",
            },
            enter: "110",
            status: "-",
          },
          {
            lab: "Total T4",
            range: {
              min: "7.5",
              max: "8.1",
            },
            enter: "8.5",
            status: "↑",
          },
          {
            lab: "Reverse T3",
            range: {
              min: "14.9",
              max: "5.0",
            },
            enter: "15.0",
            status: "-",
          },
          {
            lab: "Albumin",
            range: {
              min: "4.6",
              max: "26.7",
            },
            enter: "4.2",
            status: "-",
          },
        ],
      },
      {
        tableHeading: "Sex Homeones",
        tableData: [
          {
            lab: "Estrogen",
            range: {
              min: "depressed",
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Progesterone",
            range: {
              min: "depressed",
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Testosterone",
            range: {
              min: "depressed",
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "4-OH pathway",
            range: {
              min: "0",
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "b-glucuronidase",
            range: {
              min: "0",
              max: "2,486",
            },
            enter: "1",
            status: "-",
          },
        ],
      },
    ],
  },
  {
    heading: "Stress & Circadian Rhythm",
    description:
      "The adrenal hormones determine the rhythm of the body in terms of the sleep/wake cycle. Deep healing happens while we sleep so it is imperative to optimize this area. Our stress levels, blood sugar, inflammation, and infections all will affect these adrenal hormones.",
    tables: [
      {
        tableHeading: "",
        tableData: [
          {
            lab: "Cortisol",
            range: {
              min: "depressed",
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "DHEA",
            range: {
              min: "depressed",
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Melatonin",
            range: {
              min: "depressed",
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
        ],
      },
    ],
  },

  {
    heading: "Toxin Load",
    description:
      "We are exposed to many chemicals, toxic metals, mold, viruses, and more every day. You often may not even know what you’ve been exposed to!",
    tables: [
      {
        tableHeading: "",
        tableData: [
          {
            lab: "GGT/GGTP",
            range: {
              min: 10,
              max: 24,
            },
            enter: 25,
            status: "↑",
          },
          {
            lab: "SGOT/AST",
            range: {
              min: 9,
              max: 21,
            },
            enter: 22,
            status: "↑",
          },
          {
            lab: "SGPT/ALT",
            range: {
              min: 10,
              max: 19,
            },
            enter: 18,
            status: "-",
          },
          {
            lab: "Molds",
            range: {
              min: 0,
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Chemicals",
            range: {
              min: 0,
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Heavy Metals",
            range: {
              min: 0,
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "8-OHdG",
            range: {
              min: 0,
              max: "elevated",
            },
            enter: "elevated",
            status: "↑",
          },
          {
            lab: "Pyroglutamate",
            range: {
              min: "depressed",
              max: "elevated",
            },
            enter: "depressed",
            status: "-",
          },
        ],
      },
    ],
  },
  {
    heading: "Immune Modulation",
    description:
      "The Immune System is where the detection and elimination of rogue cancer cells should happen, but if it is out of control and attacking itself as in autoimmune conditions, or completely depleted, then it will miss it's job.",
    tables: [
      {
        tableHeading: "",
        tableData: [
          {
            lab: "WBC",
            range: {
              min: "5.0",
              max: "7.5",
            },
            enter: "7.5",
            status: "-",
          },
          {
            lab: "Neutrophiles %",
            range: {
              min: "40",
              max: "60",
            },
            enter: "55",
            status: "-",
          },
          {
            lab: "Lymphocytes %",
            range: {
              min: "24",
              max: "44",
            },
            enter: "35",
            status: "-",
          },
          {
            lab: "Monocytes %",
            range: {
              min: "0.0",
              max: "7.0",
            },
            enter: "6.0",
            status: "-",
          },
          {
            lab: "Eosinophils %",
            range: {
              min: "0.0",
              max: "3.0",
            },
            enter: "2.0",
            status: "-",
          },
          {
            lab: "Basophils %",
            range: {
              min: "0.0",
              max: "1.0",
            },
            enter: "0.8",
            status: "-",
          },
          {
            lab: "Vitamin D (25-Hydoxy)",
            range: {
              min: "0.0",
              max: "120",
            },
            enter: "35",
            status: "↑",
          },
          {
            lab: "ANA",
            range: {
              min: "80",
              max: "positive",
            },
            enter: "negative",
            status: "-",
          },
          {
            lab: "TGB antibodies",
            range: {
              min: "negative",
              max: "positive",
            },
            enter: "negative",
            status: "-",
          },
          {
            lab: "TPO antibodies",
            range: {
              min: "negative",
              max: "positive",
            },
            enter: "negative",
            status: "-",
          },
          {
            lab: "EBV ab EA IgG",
            range: {
              min: "negative",
              max: "positive",
            },
            enter: "negative",
            status: "-",
          },
          {
            lab: "EBV ab VCA IgM",
            range: {
              min: "negative",
              max: "positive",
            },
            enter: "negative",
            status: "-",
          },
        ],
      },
    ],
  },
  {
    heading: "Angiogenesis and Metastasis",
    description:
      "When cells become cancerous, their metabolism shifts to anaerobic and they need huge amounts of blood sugar to grow. Therefore, they develop new sources by creating new blood vessels – angiogenesis.",
    tables: [
      {
        tableHeading: "",
        tableData: [
          {
            lab: "Copper",
            range: {
              min: "0",
              max: "100",
            },
            enter: "110",
            status: "↑",
          },
          {
            lab: "Ceruloplasmin",
            range: {
              min: "0",
              max: "20",
            },
            enter: "30",
            status: "↑",
          },
          {
            lab: "VEGF - serum",
            range: {
              min: "0",
              max: "350",
            },
            enter: "75",
            status: "-",
          },
          {
            lab: "VEGF - plasma",
            range: {
              min: "0",
              max: "50",
            },
            enter: "50",
            status: "-",
          },
          {
            lab: "Fibriogen",
            range: {
              min: "200",
              max: "300",
            },
            enter: "300",
            status: "-",
          },
          {
            lab: "D-dimer",
            range: {
              min: "0",
              max: "300",
            },
            enter: "1",
            status: "-",
          },
          {
            lab: "CEA",
            range: {
              min: "0.0",
              max: "2.0",
            },
            enter: "2.5",
            status: "↑",
          },
          {
            lab: "CA 125",
            range: {
              min: "0",
              max: "30",
            },
            enter: "15",
            status: "-",
          },
          {
            lab: "CA 27.29",
            range: {
              min: "0",
              max: "30",
            },
            enter: "20",
            status: "-",
          },
          {
            lab: "CA15-3",
            range: {
              min: "0",
              max: "30",
            },
            enter: "18",
            status: "-",
          },
        ],
      },
    ],
  },
];
