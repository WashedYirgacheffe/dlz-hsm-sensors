import type { Product } from "@/lib/content-types";

export const displacementProducts: readonly Product[] = [
  {
    slug: "mps10-rod-displacement-transducer",
    model: "MPS10",
    name: "Rod-Type Linear Transducer",
    variant: "0.05 % linearity",
    category: "displacement",
    summary:
      "Rod-type linear position transducer for direct coupling to a moving member. Strokes 50–1250 mm, 0.05 % linearity, 0.01 mm resolution, 100-million-cycle life, 4–20 mA or 0–10 V output, IP65.",
    intro:
      "The MPS10 links a moving member to a resistive element through a rod, so the wiper position tracks the stroke directly. Linearity is 0.05 % and resolution 0.01 mm, which is enough for press depth, gate position and valve travel. The 100-million-cycle life comes from the contact design and the special laser trimming of the track; where the duty will exceed that, the non-contact MMS10 is the instrument to specify. Travel speed is up to 5 m/s in the standard version and 10 m/s in the high-speed version.",
    highlights: [
      "0.05 % linearity, 0.01 mm resolution",
      "100 million cycle life",
      "Strokes 50–1250 mm, custom to order",
      "Travel speed to 10 m/s",
      "4–20 mA, 0–5 V or 0–10 V output",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Standard strokes", value: "50 / 100 / 130 / 150 / 175 / 200 / 225 / 250 / 400 / 450 / 500 / 600 / 750 / 900 / 1000 / 1250 mm, custom to order" },
          { label: "Linearity", value: "0.05 %" },
          { label: "Resolution", value: "0.01 mm" },
          { label: "Temperature drift", value: "< 1.5 ppm/°C" },
          { label: "Maximum travel speed", value: "≤ 5 m/s standard; ≤ 10 m/s high-speed" },
          { label: "Operating force", value: "≤ 10 N (special version)" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V" },
          { label: "Output", value: "4–20 mA / 0–5 V / 0–10 V" },
          { label: "Maximum current", value: "20 mA" },
          { label: "Insulation resistance", value: "> 100 MΩ at 500 V" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Operating temperature", value: "−30 to +100 °C" },
          { label: "Storage temperature", value: "−50 to +120 °C" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/mps10-rod-displacement-transducer.jpg",
    applications: [
      "Hydraulic cylinder and press stroke",
      "Gate and damper position",
      "Valve travel feedback",
      "Test rig displacement measurement",
    ],
    legacyPath: "/productinfo/1536077.html",
  },
  {
    slug: "mds10-draw-wire-transducer",
    model: "MDS10",
    name: "Draw-Wire Displacement Transducer",
    variant: "50–20 000 mm",
    category: "displacement",
    summary:
      "Draw-wire position transducer measuring up to 20 m from a compact housing where a rod will not fit. 0.05 % FS repeatability, 0.25 % FS linearity, 4–20 mA or 0–10 V, stainless 316L cable, IP65.",
    intro:
      "A draw-wire transducer unreels a stainless cable from a spring-loaded drum and measures the rotation. Because the cable is flexible, the measuring range can be long while the body stays small — up to 20 m from a unit that fits in your hand. That makes it the practical choice for overhead cranes, telescopic booms, lift travel and anything where a 10 m rod is not an option. Linearity is 0.25 % FS and repeatability 0.05 % FS, so it is a positioning instrument rather than a metrology reference.",
    highlights: [
      "Up to 20 m measuring range",
      "Compact body — fits where a rod cannot",
      "Stainless 316L cable, 0.3 kg minimum tension",
      "4–20 mA, 0–5 V, 0–10 V or 0–5 kΩ output",
      "IP65",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "50–20 000 mm" },
          { label: "Repeatability", value: "0.05 % FS" },
          { label: "Linearity", value: "0.25 % FS" },
          { label: "Cable tension", value: "≥ 0.3 kg" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 12–24 V" },
          { label: "Output", value: "4–20 mA, 0–5 / 0–10 V, 0–5 kΩ" },
          { label: "Load impedance", value: "≥ 5000 Ω (voltage); ≤ 750 Ω (current)" },
          { label: "Power consumption", value: "1 W (current); 2 W (voltage)" },
          { label: "Insulation resistance", value: "≥ 100 MΩ" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Cable material", value: "Stainless steel 316L" },
          { label: "Operating temperature", value: "−20 to +80 °C" },
          { label: "Storage temperature", value: "−50 to +120 °C" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/mds10-draw-wire-transducer.jpg",
    applications: [
      "Overhead crane and hoist position",
      "Telescopic boom extension",
      "Lift and elevator travel",
      "Long-stroke test rigs",
    ],
    notes: [
      "The cable is a wear item; route it to avoid abrasion at the exit and do not allow it to snap back unloaded.",
    ],
    legacyPath: "/productinfo/1536080.html",
  },
  {
    slug: "mms10-magnetostrictive-displacement-transducer",
    model: "MMS10",
    name: "Magnetostrictive Displacement Transducer",
    variant: "Non-contact, 0.002 % FS",
    category: "displacement",
    summary:
      "Non-contact magnetostrictive position transducer with 0.005 % FS non-linearity and 0.002 % FS repeatability. Strokes 50–5000 mm, 4–20 mA, 0–10 V or RS485, explosion-proof, IP67. No wiper to wear out.",
    intro:
      "The MMS10 times a torsional pulse along a waveguide to a permanent magnet on the moving member. Nothing touches the sensing element, so there is no wiper to wear, no contact resistance to drift and no limit on the number of cycles — the reason magnetostrictive is used for injection-moulding clamps, servo-hydraulic actuators and any duty where a contact transducer would be replaced regularly. Non-linearity is 0.005 % FS and repeatability 0.002 % FS, roughly an order of magnitude better than a resistive rod.",
    highlights: [
      "No contact with the sensing element — unlimited cycles",
      "0.005 % FS non-linearity, 0.002 % FS repeatability",
      "Strokes 50–5000 mm",
      "Reports position and velocity",
      "Explosion-proof, IP67",
      "Immune to shock, surge and RF interference",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "50–5000 mm, to customer specification" },
          { label: "Non-linearity", value: "0.005 % FS" },
          { label: "Repeatability", value: "≤ 0.002 % FS" },
          { label: "Resolution", value: "≤ 0.002 % FS" },
          { label: "Hysteresis", value: "≤ 0.002 % FS" },
          { label: "Temperature effect", value: "50 ppm/°C" },
          { label: "Span adjustment", value: "20 % FS" },
          { label: "Zero adjustment", value: "20 % FS" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Output", value: "0–10 V, 4–20 mA or RS485" },
          { label: "Supply voltage", value: "DC 24 V" },
          { label: "Cable", value: "PVC screened cable" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Operating temperature", value: "−25 to +80 °C" },
          { label: "Storage temperature", value: "−40 to +100 °C" },
          { label: "Sensor rod material", value: "304 / 316 stainless steel" },
          { label: "Electronic head material", value: "304 / 316 stainless steel" },
          { label: "Explosion protection", value: "Exd IIB T (flameproof)" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/mms10-magnetostrictive-displacement-transducer.jpg",
    applications: [
      "Injection moulding machine clamp position",
      "Servo-hydraulic actuator feedback",
      "Roll gap control in rolling mills",
      "High-cycle machine automation",
    ],
    legacyPath: "/productinfo/1536084.html",
  },
  {
    slug: "er-displacement-sensor",
    model: "ER",
    name: "Linear Displacement Sensor",
    variant: "50–1000 mm, 1 ms update",
    category: "displacement",
    summary:
      "Linear displacement sensor with 50–1000 mm travel, 1 ms update time on four-wire connection, 0.05 % FS non-linearity and ±0.1 mm resolution. 4–20 mA or 0–10 V, aluminium housing, 304L rod, M12 five-pin connector.",
    intro:
      "The ER series is a shorter-stroke, faster-updating position sensor for general automation. Update time is 1 ms on the four-wire connection, which is quick enough to close a position loop rather than merely report a position. Resolution is ±0.1 mm below 400 mm of travel and range/4096 above it. The aluminium extrusion carries a 304L stainless rod and terminates in an M12 five-pin aviation connector, so it drops into a standard machine wiring harness.",
    highlights: [
      "1 ms update on four-wire connection",
      "0.05 % FS non-linearity",
      "4–20 mA or 0–10 V output",
      "Aluminium body, 304L stainless rod",
      "M12 five-pin connector",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Effective stroke", value: "50–1000 mm, other lengths to order" },
          { label: "Non-linearity", value: "0.05 % FS" },
          {
            label: "Resolution",
            value: "±0.1 mm (stroke < 400 mm); stroke ÷ 4096 (stroke > 400 mm)",
          },
          { label: "Repeatability", value: "Same as resolution" },
          { label: "Update time", value: "1 ms (four-wire connection)" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Current output", value: "4–20 mA or 0–20 mA (load 0–500 Ω)" },
          { label: "Voltage output", value: "0–10 V DC or 0–5 V DC (load ≥ 10 kΩ)" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Housing", value: "Extruded aluminium" },
          { label: "Rod", value: "304L stainless steel" },
          { label: "Connection", value: "M12 five-pin aviation connector" },
        ],
      },
    ],
    image: "/images/products/er-displacement-sensor.png",
    gallery: ["/images/products/er-displacement-sensor-2.png"],
    applications: [
      "Machine tool axis position",
      "Valve and damper feedback",
      "Packaging machine stroke",
    ],
    legacyPath: "/productinfo/2115521.html",
  },
  {
    slug: "esc-displacement-sensor",
    model: "ESC",
    name: "Magnetostrictive Displacement Sensor",
    variant: "25–2500 mm, 16-bit",
    category: "displacement",
    summary:
      "Non-contact magnetostrictive position sensor, 25–2500 mm stroke, 16-bit D/A giving ±0.01 mm resolution on the voltage output. 1 ms update to 1 m stroke, 0.05 % FS non-linearity, IP67, −40 to +75 °C.",
    intro:
      "The ESC is a compact non-contact sensor for strokes up to 2.5 m, with a 16-bit D/A converter that gives ±0.01 mm resolution on the voltage output. Because the magnet slides without touching the waveguide, there is no wear limit and no restriction on magnet speed. Update time scales with stroke — 1 ms up to 1 m, 2 ms to 2 m, 3 ms beyond — which is worth knowing when the stroke is long and the loop is fast. The PFA rod and PP head suit washdown and mildly aggressive environments.",
    highlights: [
      "±0.01 mm resolution (16-bit, voltage output)",
      "No contact, unlimited magnet speed",
      "Strokes 25–2500 mm",
      "1 ms update up to 1 m stroke",
      "IP67, −40 to +75 °C",
      "PFA rod, PP head",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Effective stroke", value: "25–2500 mm, other lengths to order" },
          { label: "Non-linearity", value: "0.05 % FS" },
          {
            label: "Resolution",
            value: "±0.01 mm at 16-bit D/A (current output ±0.1 mm at 12-bit)",
          },
          { label: "Repeatability", value: "Same as resolution" },
          {
            label: "Update time",
            value: "1 ms (stroke ≤ 1 m); 2 ms (1 m < stroke ≤ 2 m); 3 ms (stroke > 2 m)",
          },
          { label: "Magnet speed", value: "Unrestricted" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Current output", value: "4–20 mA or 20–4 mA (load 0–500 Ω)" },
          { label: "Voltage output", value: "0–10 V DC or 0–5 V DC (load ≥ 10 kΩ)" },
          { label: "Supply voltage", value: "24 V DC ±20 % or 12 V DC ±20 %" },
        ],
      },
      {
        title: "Environment and mechanical",
        rows: [
          { label: "Operating temperature", value: "−40 to +75 °C" },
          { label: "Humidity", value: "90 %, no condensation" },
          { label: "Shock", value: "50 g / 6 ms (GB/T 2423.5)" },
          { label: "Vibration", value: "15 g at 10–2000 Hz (GB/T 2423.10)" },
          { label: "Electronic head", value: "PP" },
          { label: "Rod", value: "PFA" },
          { label: "Connection", value: "M12 aviation connector" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/esc-displacement-sensor.png",
    applications: [
      "High-resolution position on long strokes",
      "Washdown machine environments",
      "Magnetostrictive feedback where a rod will not fit",
    ],
    legacyPath: "/productinfo/2115757.html",
  },
];
