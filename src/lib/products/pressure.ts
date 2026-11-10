import type { Product } from "@/lib/content-types";

export const pressureProducts: readonly Product[] = [
  {
    slug: "pdd3051-differential-pressure-transmitter",
    model: "PDD3051",
    name: "Differential Pressure Transmitter",
    variant: "0.2 class, 40:1 turndown",
    category: "pressure",
    summary:
      "Differential pressure transmitter covering 0–0.2 kPa to 40 MPa with a 40:1 turndown and 0.2 accuracy class. Two-wire 4–20 mA, 750 Ω load, stainless housing, IP65. Built on a δ-cell capacitive sensor with a 0.10 mm measuring diaphragm.",
    intro:
      "The PDD3051 uses a δ-cell: a tensioned measuring diaphragm between two capacitor plates, with the process pressure transmitted to it through fill fluid and isolating diaphragms on the high and low sides. Diaphragm displacement is at most 0.10 mm, and the change in capacitance is converted linearly to a two-wire 4–20 mA signal. The practical benefit of the 40:1 turndown is that one transmitter model covers a wide span, so a plant can standardise on a single spare instead of stocking a range for every application. Non-linearity is 0.2, hysteresis is under 0.01 % of span, and long-term stability is 0.15 % FS per year.",
    highlights: [
      "40:1 turndown — one spare covers many duties",
      "0.2 accuracy class, hysteresis ≤ 0.01 % FS",
      "0.15 % FS/year long-term stability",
      "Two-wire 4–20 mA, 750 Ω load",
      "Stainless housing, IP65",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "0–0.2 kPa to 40 MPa" },
          { label: "Turndown", value: "40:1" },
          { label: "Accuracy class", value: "0.2 or 0.5" },
          { label: "Non-linearity", value: "0.2" },
          { label: "Hysteresis", value: "≤ 0.01 % of span" },
          { label: "Long-term stability", value: "0.15 % FS/year" },
          { label: "Overload capability", value: "2–3× span" },
          { label: "Temperature effect", value: "0.15 %/K" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V (14–36 V)" },
          { label: "Output", value: "Two-wire 4–20 mA" },
          { label: "Load impedance", value: "750 Ω" },
          { label: "Insulation resistance", value: "≥ 100 MΩ at 100 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Medium", value: "Liquid, gas or steam" },
          { label: "Housing material", value: "Stainless steel" },
          { label: "Ambient temperature", value: "−30 to +70 °C" },
          { label: "Medium temperature", value: "−40 to +100 °C" },
          { label: "Storage temperature", value: "−40 to +85 °C" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/pdd3051-differential-pressure-transmitter.jpg",
    applications: [
      "Filter and strainer differential pressure",
      "Flow measurement across an orifice plate",
      "Tank level from hydrostatic head",
      "Pump differential head",
      "Steam and condensate service with the appropriate seals",
    ],
    legacyPath: "/productinfo/1535581.html",
  },
  {
    slug: "pdd2088-differential-pressure-transmitter",
    model: "PDD2088",
    name: "Differential Pressure Transmitter",
    variant: "Bidirectional, 2088 housing",
    category: "pressure",
    summary:
      "Bidirectional differential pressure transmitter spanning −100 kPa to 200 kPa, in the standard 2088 housing with a liquid-crystal head. Two-wire 4–20 mA or three-wire 1–5 V, 0.2 accuracy class, stainless body, IP65.",
    intro:
      "The PDD2088 covers the low-pressure end where most differential measurements actually live: draught, filter loading, cleanroom and duct pressure, and low-range level. It reads both directions, from −100 kPa to +200 kPa, so gauge and vacuum duties share one model. Output is two-wire 4–20 mA or three-wire 1–5 V, and the 2088 housing is the industry-standard shape, which means existing brackets, manifolds and spare parts fit. Process connection is G1/2 or M20×1.5, with custom threads available.",
    highlights: [
      "Bidirectional −100 kPa to +200 kPa",
      "Standard 2088 housing — existing brackets fit",
      "Two-wire 4–20 mA or three-wire 1–5 V",
      "0.2 accuracy class",
      "G1/2 or M20×1.5, custom to order",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "−100 kPa to +200 kPa (bi-directional)" },
          { label: "Accuracy class", value: "0.2 or 0.5" },
          { label: "Non-linearity", value: "0.2" },
          { label: "Hysteresis", value: "≤ 0.01 % of span" },
          { label: "Long-term stability", value: "0.15 % FS/year" },
          { label: "Overload capability", value: "2–3× span" },
          { label: "Temperature effect", value: "0.15 %/K" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V (12–36 V)" },
          { label: "Output", value: "Two-wire 4–20 mA; three-wire 1–5 V" },
          { label: "Load impedance", value: "750 Ω" },
          { label: "Insulation resistance", value: "≥ 100 MΩ at 100 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Medium", value: "Gases compatible with 316L" },
          { label: "Housing material", value: "Stainless steel" },
          { label: "Process connection", value: "G1/2″, M20×1.5 or to order" },
          { label: "Ambient temperature", value: "−30 to +70 °C" },
          { label: "Medium temperature", value: "−30 to +80 °C" },
          { label: "Storage temperature", value: "−40 to +85 °C" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/pdd2088-differential-pressure-transmitter.jpg",
    applications: [
      "Filter and bag-house differential pressure",
      "Duct and cleanroom pressure",
      "Low-range tank and reservoir level",
      "Airflow measurement in ventilation",
    ],
    legacyPath: "/productinfo/1535584.html",
  },
  {
    slug: "pdd1020-differential-pressure-transmitter",
    model: "PDD1020",
    name: "Differential Pressure Transmitter",
    variant: "Compact stainless body",
    category: "pressure",
    summary:
      "Compact differential pressure transmitter, −100 kPa to 200 kPa, in a small stainless body for tight installation space. Two-wire 4–20 mA or three-wire 1–5 V, 0.2 accuracy class, G1/2 or M20×1.5, IP65.",
    intro:
      "The PDD1020 does the same job as the PDD2088 in a smaller stainless housing, for panels and skids where the 2088 head will not fit or where the extra volume is simply not needed. The measuring range and accuracy are identical, as are the electrical options, so a plant can mix the two without introducing a second set of spares, wiring conventions or configuration instructions.",
    highlights: [
      "Compact stainless body for tight spaces",
      "Same range and accuracy as the PDD2088",
      "Two-wire 4–20 mA or three-wire 1–5 V",
      "0.2 accuracy class, 0.15 % FS/year stability",
      "G1/2 or M20×1.5",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "−100 kPa to +200 kPa (bi-directional)" },
          { label: "Accuracy class", value: "0.2 or 0.5" },
          { label: "Non-linearity", value: "0.2" },
          { label: "Hysteresis", value: "≤ 0.01 % of span" },
          { label: "Long-term stability", value: "0.15 % FS/year" },
          { label: "Overload capability", value: "2–3× span" },
          { label: "Temperature effect", value: "0.15 %/K" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V (12–36 V)" },
          { label: "Output", value: "Two-wire 4–20 mA; three-wire 1–5 V" },
          { label: "Load impedance", value: "750 Ω" },
          { label: "Insulation resistance", value: "≥ 100 MΩ at 100 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Medium", value: "Gases compatible with 316L" },
          { label: "Housing material", value: "Stainless steel" },
          { label: "Process connection", value: "G1/2″, M20×1.5 or to order" },
          { label: "Ambient temperature", value: "−30 to +70 °C" },
          { label: "Medium temperature", value: "−30 to +80 °C" },
          { label: "Storage temperature", value: "−40 to +85 °C" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/pdd1020-differential-pressure-transmitter.jpg",
    applications: [
      "Compact skids and packaged plant",
      "Panel-mounted differential pressure",
      "Instrument air and gas train monitoring",
    ],
    legacyPath: "/productinfo/1535590.html",
  },
  {
    slug: "pcd2088-pressure-transmitter-controller",
    model: "PCD2088",
    name: "Pressure Transmitter Controller",
    variant: "4 relays",
    category: "pressure",
    summary:
      "Pressure transmitter with a 24-bit A/D, LED display, four relay outputs and selectable analogue output. −0.1 to 60 MPa, 0.2 accuracy class, diffusion-silicon, ceramic piezoresistive or ceramic capacitive sensor, stainless and aluminium housing.",
    intro:
      "The PCD2088 pairs a pressure sensor with a controller in one 2088 head: 24-bit conversion, a display readable across a plant room, four relays with keypad-set trip points, and a selectable analogue output to the control system. It is the right instrument when a pressure switch and a transmitter are both currently installed on the same line — one device then covers measurement, local indication and interlock, and there is only one calibration record to keep. Sensor type is selected to suit the medium: diffusion silicon for clean gas and liquid, ceramic piezoresistive or capacitive for chemically aggressive service.",
    highlights: [
      "Four relay outputs with keypad-set trip points",
      "Selectable 4–20 mA, 0–10/20 mA, 0–5 or 1–5 V output",
      "24-bit A/D, 4 readings per second",
      "−0.1 to 60 MPa range",
      "Choice of diffusion-silicon or ceramic sensor",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Pressure range", value: "−0.1 to 0, and 0 to 60 MPa" },
          {
            label: "Sensor type",
            value: "Diffusion silicon, ceramic piezoresistive or ceramic capacitive",
          },
          { label: "Accuracy class", value: "0.2 or 0.5" },
          { label: "Overload pressure", value: "1.5× full-scale" },
          { label: "Sampling rate", value: "4 readings per second" },
          { label: "Display range", value: "−1999 to 9999" },
          { label: "Long-term stability", value: "0.5 % FS/year" },
          { label: "Power supply effect", value: "≤ 0.1 % FS" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V" },
          { label: "Power consumption", value: "≤ 3 W" },
          {
            label: "Analogue output",
            value: "4–20 mA / 0–10 or 20 mA / 0–5 or 1–5 V DC",
          },
          { label: "Relay outputs", value: "4 pairs" },
          { label: "Relay rating", value: "3 A at 250 V AC, 3 A at 30 V DC" },
          { label: "Relay life", value: "> 100 000 operations" },
          { label: "A/D conversion", value: "24-bit" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Ambient temperature", value: "−20 to +70 °C" },
          { label: "Medium temperature", value: "−20 to +80 °C" },
          { label: "Storage temperature", value: "−40 to +100 °C" },
          { label: "Relative humidity", value: "0–80 %" },
          { label: "Housing material", value: "Stainless steel + aluminium alloy" },
          { label: "Connection", value: "G1/2, M20×1.5 or to order" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/pcd2088-pressure-transmitter-controller.jpg",
    applications: [
      "Replacing separate pressure switch and transmitter",
      "Pump and compressor pressure interlock",
      "Hydraulic power-unit monitoring",
      "Pressure control on gas trains",
    ],
    legacyPath: "/productinfo/1535593.html",
  },
  {
    slug: "pcc216-pressure-controller",
    model: "PCC216",
    name: "Pressure Transmitter Controller",
    variant: "5 relays, 150 mm case",
    category: "pressure",
    summary:
      "Five relay outputs in a Φ150 mm gauge case, with dual 24 V DC / 220 V AC supply so it replaces a mechanical gauge in situ. −0.1 to 60 MPa, 0.2 accuracy class, high-brightness LED display, selectable analogue output.",
    intro:
      "The PCC216 is built into a 150 mm round case — the size of a standard process pressure gauge — so it drops into an existing gauge mounting without a bracket or a panel cut-out. Five relays, a dual 24 V DC / 220 V AC supply and a bright LED display make it a direct functional replacement for a gauge that someone currently has to walk out and read, with alarm and interlock capability added at the same time. The 216 designation refers to the case size, not to a 216 mm dimension.",
    highlights: [
      "Φ150 mm case — replaces a standard gauge in situ",
      "Five relay outputs",
      "24 V DC or 220 V AC supply",
      "−0.1 to 60 MPa",
      "Dual-row high-brightness LED",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Pressure range", value: "−0.1 to 0, and 0 to 60 MPa" },
          {
            label: "Sensor type",
            value: "Diffusion silicon, ceramic piezoresistive or ceramic capacitive",
          },
          { label: "Accuracy class", value: "0.2 or 0.5" },
          { label: "Overload pressure", value: "1.5× full-scale" },
          { label: "Sampling rate", value: "4 readings per second" },
          { label: "Display range", value: "−1999 to 9999" },
          { label: "Power supply effect", value: "≤ 0.1 % FS" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V, AC 220 V ±15 %" },
          { label: "Power consumption", value: "≤ 5 W" },
          {
            label: "Analogue output",
            value: "4–20 mA / 0–10 or 20 mA / 0–5 or 1–5 V DC",
          },
          { label: "Relay outputs", value: "5 pairs" },
          { label: "Relay rating", value: "3 A at 250 V AC, 3 A at 30 V DC" },
          { label: "Relay life", value: "> 100 000 operations" },
          { label: "A/D conversion", value: "24-bit" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Ambient temperature", value: "−20 to +70 °C" },
          { label: "Medium temperature", value: "−20 to +80 °C" },
          { label: "Storage temperature", value: "−40 to +100 °C" },
          { label: "Relative humidity", value: "0–80 %" },
          { label: "Housing material", value: "Stainless steel" },
          { label: "Connection", value: "G1/2, M20×1.5 or to order" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/pcc216-pressure-controller.jpg",
    applications: [
      "Direct replacement of mechanical pressure gauges",
      "Booster and compressor control",
      "Water network pressure management",
      "Tank farm pump control",
    ],
    legacyPath: "/productinfo/1535598.html",
  },
  {
    slug: "pcc100-pressure-controller",
    model: "PCC100",
    name: "Pressure Transmitter Controller",
    variant: "5 relays, Φ100 mm case",
    category: "pressure",
    summary:
      "The 100 mm version of the pressure controller: five relays, −0.1 to 60 MPa, 0.2 accuracy class, LED display, selectable analogue output. Fits the cut-out a 100 mm mechanical gauge leaves behind.",
    intro:
      "Where space is tighter, the PCC100 provides the same five-relay control in a 100 mm case. It is the instrument to specify when a 150 mm gauge will not fit but the duty still calls for local display, alarms and an analogue signal to the control room. Storage temperature extends to 120 °C, useful in hot valve rooms.",
    highlights: [
      "Φ100 mm case for tighter mounting",
      "Five relay outputs",
      "−0.1 to 60 MPa, 0.2 accuracy class",
      "Storage to 120 °C",
      "Selectable analogue output",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Pressure range", value: "−0.1 to 0, and 0 to 60 MPa" },
          {
            label: "Sensor type",
            value: "Diffusion silicon, ceramic piezoresistive or ceramic capacitive",
          },
          { label: "Accuracy class", value: "0.2 or 0.5" },
          { label: "Overload pressure", value: "1.5× full-scale" },
          { label: "Sampling rate", value: "4 readings per second" },
          { label: "Display range", value: "−1999 to 9999" },
          { label: "Power supply effect", value: "≤ 0.1 % FS" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V, AC 220 V ±15 %" },
          { label: "Power consumption", value: "≤ 5 W" },
          {
            label: "Analogue output",
            value: "4–20 mA / 0–10 or 20 mA / 0–5 or 1–5 V DC",
          },
          { label: "Relay outputs", value: "5 pairs" },
          { label: "Relay rating", value: "3 A at 250 V AC, 3 A at 30 V DC" },
          { label: "Relay life", value: "> 100 000 operations" },
          { label: "A/D conversion", value: "24-bit" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Ambient temperature", value: "−20 to +70 °C" },
          { label: "Medium temperature", value: "−20 to +80 °C" },
          { label: "Storage temperature", value: "−40 to +120 °C" },
          { label: "Relative humidity", value: "0–80 %" },
          { label: "Housing material", value: "Stainless steel + aluminium alloy" },
          { label: "Connection", value: "G1/2, M20×1.5 or to order" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/pcc100-pressure-controller.jpg",
    applications: [
      "Compact panels and skids",
      "Hot valve rooms",
      "Machine-level pressure interlock",
    ],
    legacyPath: "/productinfo/1535602.html",
  },
];
