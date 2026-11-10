import type { Product } from "@/lib/content-types";

/**
 * The UB series is a family: seven sensing ranges in three barrel sizes.
 * Each model is its own product page because buyers search by sensing range
 * and barrel size, not by family name.
 */
const sharedSpecs = (range: string, blind: string, resolution: string, response: string, freq: string, hysteresis: string, size: string, weight: string, connector: string) => [
  {
    title: "Measurement",
    rows: [
      { label: "Sensing range", value: range },
      { label: "Dead zone", value: blind },
      { label: "Resolution", value: resolution },
      { label: "Repeatability", value: "±0.15 % of full scale" },
      { label: "Accuracy", value: "±1 % with built-in temperature drift compensation" },
      { label: "Response time", value: response },
      { label: "Switching hysteresis", value: hysteresis },
      { label: "Switching frequency", value: freq },
    ],
  },
  {
    title: "Electrical",
    rows: [
      { label: "Supply voltage", value: "10–30 V DC, reverse-polarity protected" },
      { label: "Output", value: "1 switching output, NPN or PNP, NO or NC" },
      { label: "Input", value: "Synchronisation and teach-in" },
      { label: "No-load current", value: "≤ 30 mA" },
      { label: "Overload protection", value: "200 mA; red and green LEDs flash together" },
      { label: "Load impedance", value: "I: 0–300 Ω; U: > 1 kΩ" },
      {
        label: "Indication",
        value:
          "Red LED on with no target, flashes during teach-in; green LED on with target detected",
      },
    ],
  },
  {
    title: "Mechanical",
    rows: [
      { label: "Barrel size", value: size },
      { label: "Construction", value: "Cylindrical" },
      { label: "Material", value: "Nickel-plated brass sleeve, plastic parts, glass-filled epoxy resin" },
      { label: "Connection", value: connector },
      { label: "Weight", value: weight },
      { label: "Ambient temperature", value: "−25 to +70 °C" },
      { label: "Storage temperature", value: "−40 to +85 °C" },
      { label: "Ingress protection", value: "IP67" },
    ],
  },
];

export const ultrasonicProducts: readonly Product[] = [
  {
    slug: "ub120-ultrasonic-sensor",
    model: "UB120-12GM55",
    name: "Ultrasonic Proximity Sensor",
    variant: "20–120 mm, M12",
    category: "ultrasonic",
    summary:
      "M12 ultrasonic sensor with a 20–120 mm sensing range, 20 mm dead zone and 0.1 mm resolution. Detects clear glass, polished metal and liquid that optical sensors miss. PNP/NPN switching output, teach-in, IP67, 16 g.",
    intro:
      "A 120 mm ultrasonic sensor in an M12 barrel for close-range presence detection where optical sensing is unreliable. Sound reflects from any surface with an acoustic impedance mismatch, so clear PET bottles, mirror-finish stainless and dark matte rubber all return an echo — the three cases where a photoelectric sensor gives up. The 20 mm dead zone means the target can be brought quite close to the face, and 0.1 mm resolution allows more than just presence detection: the analogue-window behaviour is good enough for simple positioning.",
    highlights: [
      "Detects clear, polished and dark targets",
      "0.1 mm resolution",
      "Teach-in configuration, no PC needed",
      "20 mm dead zone",
      "M12 barrel, 16 g",
    ],
    specs: sharedSpecs("20–120 mm", "0–20 mm", "0.1 mm", "18 ms", "55 Hz", "±1 mm", "M12 × 55 mm", "16 g", "4-pin M12"),
    image: "/images/products/ub120-ultrasonic-sensor.jpg",
    applications: [
      "Clear bottle and glass presence on a filling line",
      "Web and film loop control",
      "Small-part presence on assembly machines",
    ],
    legacyPath: "/productinfo/2088512.html",
  },
  {
    slug: "ub200-ultrasonic-sensor",
    model: "UB200-12GM65",
    name: "Ultrasonic Distance Sensor",
    variant: "20–120 mm, analogue",
    category: "ultrasonic",
    summary:
      "The analogue-output member of the M12 family: 4–20 mA, 0–10 V, RS485 Modbus and IO-Link on one sensor, with a 20–120 mm range. Use it where you need the distance value, not just a switch.",
    intro:
      "Same acoustic front end as the UB120, with an output stage that reports the measured distance rather than a threshold crossing. Four interfaces are available on the same body — 4–20 mA, 0–10 V, RS485 Modbus RTU and IO-Link — so the sensor can be specified once and integrated into whichever control platform the machine uses. That matters for machine builders who ship the same mechanism to customers with different PLC standards.",
    highlights: [
      "Analogue distance output, not just a switch",
      "4–20 mA, 0–10 V, RS485 Modbus and IO-Link",
      "0.1 mm resolution",
      "Teach-in and synchronisation",
      "M12 barrel, 20 g",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Sensing range", value: "20–120 mm" },
          { label: "Dead zone", value: "0–20 mm" },
          { label: "Resolution", value: "0.1 mm" },
          { label: "Repeatability", value: "±0.15 % of full scale" },
          { label: "Accuracy", value: "±1 % with built-in temperature drift compensation" },
          { label: "Response time", value: "22 ms" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "10–30 V DC, reverse-polarity protected" },
          {
            label: "Output",
            value:
              "4–20 mA analogue, 0–10 V analogue, RS485 Modbus RTU, push-pull with IO-Link",
          },
          { label: "Input", value: "Synchronisation and teach-in" },
          { label: "No-load current", value: "≤ 30 mA" },
          { label: "Overload protection", value: "200 mA; red and green LEDs flash together" },
          { label: "Load impedance", value: "I: 0–300 Ω; U: > 1 kΩ" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Barrel size", value: "M12 × 65 mm" },
          { label: "Construction", value: "Cylindrical" },
          { label: "Material", value: "Nickel-plated brass sleeve, plastic parts, glass-filled epoxy resin" },
          { label: "Connection", value: "4-pin M12" },
          { label: "Weight", value: "20 g" },
          { label: "Ambient temperature", value: "−25 to +70 °C" },
          { label: "Storage temperature", value: "−40 to +85 °C" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/ub200-ultrasonic-sensor.jpg",
    applications: [
      "Distance measurement on a moving web",
      "Fill-height monitoring in a small hopper",
      "IO-Link machine diagnostics",
    ],
    legacyPath: "/productinfo/2088589.html",
  },
  {
    slug: "ub300-ultrasonic-sensor",
    model: "UB300-18GM45",
    name: "Ultrasonic Proximity Sensor",
    variant: "30–300 mm, M18",
    category: "ultrasonic",
    summary:
      "M18 ultrasonic sensor, 30–300 mm range, 30 mm dead zone, 0.1 mm resolution, 22 ms response. PNP/NPN switching output with teach-in, IP67, 35 g. The general-purpose size for medium detection distances.",
    intro:
      "The 300 mm range in an M18 barrel is the workhorse of the family — long enough to clear fixtures and guarding, short enough to keep the sound cone tight. At 22 ms response and 45 Hz switching frequency it handles conveyor speeds without missing items, and the ±2 mm hysteresis stops chatter on a target that sits near the threshold.",
    highlights: [
      "30–300 mm range in an M18 barrel",
      "0.1 mm resolution",
      "Teach-in with synchronisation",
      "IP67, nickel-plated brass",
      "35 g",
    ],
    specs: sharedSpecs("30–300 mm", "0–30 mm", "0.1 mm", "22 ms", "45 Hz", "±2 mm", "M18 × 45 mm", "35 g", "5-pin M12"),
    image: "/images/products/ub300-ultrasonic-sensor.jpg",
    applications: [
      "Conveyor item counting",
      "Box and pallet presence",
      "Guarding and clearance detection",
    ],
    legacyPath: "/productinfo/2088611.html",
  },
  {
    slug: "ub500-ultrasonic-sensor",
    model: "UB500-18GM45",
    name: "Ultrasonic Proximity Sensor",
    variant: "50–500 mm, M18",
    category: "ultrasonic",
    summary:
      "M18 ultrasonic sensor with a 50–500 mm range and 50 mm dead zone. 0.15 mm resolution, 32 ms response, PNP/NPN output, teach-in, IP67. For longer approaches through fixtures and guards.",
    intro:
      "Half a metre of range from the same M18 barrel, for applications where the sensor has to sit behind a guard or outside a spray zone and still see the target. Resolution drops slightly to 0.15 mm and response extends to 32 ms, which is still fast enough for most packaging and materials-handling duties.",
    highlights: [
      "500 mm range from an M18 barrel",
      "0.15 mm resolution",
      "32 ms response",
      "Teach-in and synchronisation",
      "IP67",
    ],
    specs: sharedSpecs("50–500 mm", "0–50 mm", "0.15 mm", "32 ms", "31 Hz", "±2 mm", "M18 × 45 mm", "35 g", "5-pin M12"),
    image: "/images/products/ub500-ultrasonic-sensor.jpg",
    applications: [
      "Sensing through machine guarding",
      "Level in shallow bins",
      "Vehicle and pallet approach",
    ],
    legacyPath: "/productinfo/2088627.html",
  },
  {
    slug: "ub1000-ultrasonic-sensor",
    model: "UB1000-18GM55",
    name: "Ultrasonic Proximity Sensor",
    variant: "60–1000 mm, M18",
    category: "ultrasonic",
    summary:
      "Metre-range M18 ultrasonic sensor: 60–1000 mm, 60 mm dead zone, 0.17 mm resolution, 52 ms response. PNP/NPN switching, teach-in, IP67, 38 g.",
    intro:
      "One metre of range in an 18 mm barrel is useful for bin and hopper work where the sensor mounts on the lid and has to see the product surface at low fill. Sound at these distances spreads widely, so mount away from side walls and structural steel — the 60 mm dead zone is the near limit, but the practical limit is usually reflection from surrounding surfaces.",
    highlights: [
      "1 m range from an M18 barrel",
      "0.17 mm resolution",
      "Teach-in configuration",
      "IP67, 38 g",
      "Suits bin and hopper fill height",
    ],
    specs: sharedSpecs("60–1000 mm", "0–60 mm", "0.17 mm", "52 ms", "19 Hz", "±2 mm", "M18 × 55 mm", "38 g", "5-pin M12"),
    image: "/images/products/ub1000-ultrasonic-sensor.jpg",
    applications: [
      "Bin and hopper fill height",
      "Tank level where contact is undesirable",
      "Large pallet detection",
    ],
    legacyPath: "/productinfo/2088635.html",
  },
  {
    slug: "ub2000-ultrasonic-sensor",
    model: "UB2000-30GM60",
    name: "Ultrasonic Proximity Sensor",
    variant: "100–2000 mm, M30",
    category: "ultrasonic",
    summary:
      "Two-metre range in an M30 barrel with a 100 mm dead zone. 0.17 mm resolution, 82 ms response, PNP/NPN output, teach-in, IP67, 105 g. For warehouse and vehicle-scale distances.",
    intro:
      "The M30 barrel carries a larger transducer, which is what makes 2 m possible. Response extends to 82 ms — still adequate for a vehicle entering a bay or a stacker approaching a rack, but not for fast small-item counting. The 100 mm dead zone should be kept clear of fixtures.",
    highlights: [
      "2 m sensing range",
      "0.17 mm resolution",
      "M30 barrel, 105 g",
      "Teach-in and synchronisation",
      "IP67",
    ],
    specs: sharedSpecs("100–2000 mm", "0–100 mm", "0.17 mm", "82 ms", "10 Hz", "±2 mm", "M30 × 60 mm", "105 g", "5-pin M12"),
    image: "/images/products/ub2000-ultrasonic-sensor.jpg",
    applications: [
      "Vehicle presence in a loading bay",
      "Rack and stacker clearance",
      "Large tank or silo level",
    ],
    legacyPath: "/productinfo/2088650.html",
  },
  {
    slug: "ub4000-ultrasonic-sensor",
    model: "UB4000-30GM60",
    name: "Ultrasonic Proximity Sensor",
    variant: "200–4000 mm, M30",
    category: "ultrasonic",
    summary:
      "Four-metre ultrasonic range in an M30 barrel: 200–4000 mm, 200 mm dead zone, 0.17–1.5 mm resolution, 162 ms response, PNP/NPN switching. For silos, large vessels and AGV obstacle detection.",
    intro:
      "The longest range in the family, and the one where mounting discipline matters most. At 4 m the sound cone is wide and the return is weak, so the target needs a reasonable surface area and the background needs to be either far enough away or handled by the sensor's window setting. Response is 162 ms, appropriate for slowly changing distances rather than fast scanning.",
    highlights: [
      "4 m sensing range",
      "M30 barrel, 145 g",
      "0.17–1.5 mm resolution",
      "Teach-in with synchronisation",
      "IP67",
    ],
    specs: sharedSpecs("200–4000 mm", "0–200 mm", "0.17–1.5 mm", "162 ms", "5 Hz", "±4 mm", "M30 × 60 mm", "145 g", "5-pin M12"),
    image: "/images/products/ub4000-ultrasonic-sensor.jpg",
    applications: [
      "Silo and large vessel level",
      "AGV and AMR obstacle detection",
      "Yard and dock distance measurement",
    ],
    notes: [
      "Keep the 200 mm dead zone clear; a target inside it will not be detected reliably.",
      "At maximum range, mount away from large flat surfaces that produce strong secondary echoes.",
    ],
    legacyPath: "/productinfo/2088667.html",
  },
];
