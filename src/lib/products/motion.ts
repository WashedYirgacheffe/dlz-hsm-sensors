import type { Product } from "@/lib/content-types";

/**
 * Motion, photoelectric and metering instruments: the devices that sit
 * around a machine rather than inside the process.
 */
export const motionProducts: readonly Product[] = [
  {
    slug: "sbg10-air-damper-control-system",
    model: "SBG10",
    name: "Air Damper Control System",
    variant: "Manual / automatic",
    category: "motion",
    summary:
      "Integrated pneumatic control block for air dampers: two imported hand valves plus a vertical solenoid valve on one manifold, with automatic and manual modes that interlock so only one is active. 0.2–1.0 MPa air, DC 24/110/220 V or AC 110 V.",
    intro:
      "A damper on a duct needs more than one actuator: it needs to open, close, and reverse-flush, under either automatic or manual control. The SBG10 puts all of that on one aluminium manifold — two imported hand valves and a vertical solenoid valve, with the mode selected by turning the left-hand valve. In automatic, the right-hand valve sits at zero and the solenoid's left and right coils drive close and reverse-flush. Switch to manual, and the right-hand valve selects close or flush directly. The two modes interlock mechanically, so an operator cannot be fighting the solenoid. A pressure gauge module and filter can be added on the same block.",
    highlights: [
      "Automatic and manual modes with mechanical interlock",
      "Two imported hand valves plus a vertical solenoid valve on one block",
      "No interconnecting pipework — compact and light",
      "Imported solenoid with high resistance to contaminated air",
      "Optional pressure gauge module and filter",
      "Ports 8, 10 and 15 mm",
    ],
    specs: [
      {
        title: "Pneumatic",
        rows: [
          { label: "Operating pressure", value: "0.2–1.0 MPa" },
          { label: "Medium", value: "Air" },
          { label: "Port size", value: "8 mm, 10 mm, 15 mm" },
          { label: "Connection", value: "G1/2, M20×1.5, M22×1.5" },
          { label: "Manifold material", value: "Aluminium alloy, silver" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V, DC 110 V, DC 220 V, AC 110 V" },
          { label: "Power consumption", value: "< 10 W" },
        ],
      },
      {
        title: "Operation",
        rows: [
          {
            label: "Automatic mode",
            value:
              "Left valve to AUTO, right valve to 0 — left and right solenoid coils drive damper close and reverse-flush",
          },
          {
            label: "Manual mode",
            value:
              "Left valve to MANUAL — right valve selects close or reverse-flush directly",
          },
        ],
      },
    ],
    image: "/images/products/sbg10-air-damper-control-system.jpg",
    applications: [
      "Duct damper actuation in ventilation systems",
      "Furnace and kiln air control",
      "Bag-filter reverse-flush sequencing",
      "Manual override during commissioning or maintenance",
    ],
    legacyPath: "/productinfo/1536006.html",
  },
  {
    slug: "hsm41-laser-displacement-sensor",
    model: "HSM41",
    name: "Laser Displacement Sensor",
    variant: "50–400 mm, 4-digit",
    category: "motion",
    summary:
      "Laser displacement sensor with a 655 nm spot measuring a 50–400 mm centre distance, plus a 940 nm infrared TOF variant reaching 2.5 m or 4 m. Metal housing, LED display and keypad setup, four-digit readout. For dispensing, packaging, automotive and AGV duty.",
    intro:
      "Two measurement techniques in one family. The 655 nm triangulation sensor measures 50 mm to 400 mm from the housing face with a small, bright spot — the right tool for gap, step and height on a dispenser, a filling nozzle or a packaging web. The 940 nm time-of-flight variant measures 2.5 m or 4 m and carries a visible aiming beam, which suits AGV obstacle sensing and vehicle positioning over a long range. Both share a metal housing, a four-digit white LED display and keypad configuration, so switching between the versions on one machine does not change the setup procedure.",
    highlights: [
      "655 nm triangulation spot for 50–400 mm",
      "940 nm TOF variant reaching 2.5 m or 4 m",
      "Four-digit white LED display",
      "Keypad setup, multiple detection modes",
      "Metal housing",
      "Visible aiming beam on the TOF version",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Triangulation version", value: "655 nm laser, 50–400 mm centre distance" },
          { label: "TOF version", value: "940 nm infrared, 2.5 m or 4 m" },
          { label: "Detection modes", value: "Multiple, selectable by keypad" },
          { label: "Display", value: "Four-digit white LED" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Housing", value: "Metal" },
        ],
      },
    ],
    image: "/images/products/hsm41-laser-displacement-sensor.png",
    applications: [
      "Dispensing needle height control",
      "Packaging web and film position",
      "Pharmaceutical fill-level inspection",
      "Automotive body gap measurement",
      "AGV and robot obstacle sensing (TOF version)",
    ],
    notes: [
      "Images for this model are pending — request the current datasheet for dimensional drawings.",
    ],
    legacyPath: "/productinfo/2664084.html",
  },
  {
    slug: "incremental-encoder",
    model: "HSM-ENC",
    name: "Incremental Encoder",
    variant: "2048 PPR, hollow shaft",
    category: "motion",
    summary:
      "Photoelectric incremental encoder with a Φ76 mm body, hollow shaft in Φ12, Φ20 or Φ25 mm, up to 2048 PPR. Supply 5 V DC, 5–30 V DC or 9–26 V DC, IP54 or IP65.",
    intro:
      "An incremental encoder turns shaft rotation into a pulse train, and the control system counts pulses to derive speed and position. The photoelectric sensing principle gives clean edges at high resolution; 2048 pulses per revolution on a Φ76 mm body suits most general machine-feedback duties. The hollow-shaft mounting slides directly over the machine shaft, which avoids the coupling alignment problems that shorten the life of a solid-shaft encoder.",
    highlights: [
      "Up to 2048 PPR",
      "Hollow shaft Φ12, Φ20 or Φ25 mm",
      "Three supply options: 5 V, 5–30 V, 9–26 V DC",
      "Photoelectric sensing",
      "IP54 or IP65",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Sensing principle", value: "Photoelectric" },
          { label: "Maximum resolution", value: "2048 PPR" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "5 V DC; 5–30 V DC; 9–26 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Body diameter", value: "Φ76 mm" },
          { label: "Shaft", value: "Hollow, Φ12 / Φ20 / Φ25 mm" },
          { label: "Ingress protection", value: "IP54 / IP65" },
        ],
      },
    ],
    image: "/images/products/incremental-encoder.jpg",
    applications: [
      "Motor speed feedback",
      "Conveyor speed and length measurement",
      "Machine axis position",
      "Winding and unwinding tension control",
    ],
    legacyPath: "/productinfo/2664148.html",
  },
  {
    slug: "hs101-load-cell",
    model: "HS101-13",
    name: "Tension / Compression Load Cell",
    variant: "5–100 kN",
    category: "motion",
    summary:
      "Strain-gauge load cell for 5–100 kN tension or compression, 0.1 % FS accuracy, 1.2–2.0 mV/V output, 150 % safe overload and 200 % ultimate. Stainless construction, IP65, 5–10 V DC excitation.",
    intro:
      "A strain-gauge bridge bonded to a machined element: force deflects the element, the gauges change resistance, and the bridge outputs a millivolt signal proportional to load. The 0.1 % FS accuracy class and 1.2–2.0 mV/V sensitivity are the standard figures a weighing or force-control amplifier expects, so the cell drops into existing instrumentation without a special interface. Temperature compensation is applied over −10 to +40 °C, with sensitivity and zero drift both held to ±0.1 % FS per 10 °C.",
    highlights: [
      "5–100 kN range",
      "0.1 % FS accuracy class",
      "1.2–2.0 mV/V output",
      "150 % safe overload, 200 % ultimate",
      "Temperature compensated −10 to +40 °C",
      "IP65",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "5–100 kN" },
          { label: "Accuracy class", value: "0.1 % FS" },
          { label: "Rated output", value: "1.2–2.0 mV/V" },
          { label: "Zero output", value: "±0.05 mV/V" },
          { label: "Non-linearity", value: "±0.1 % FS" },
          { label: "Hysteresis", value: "±0.1 % FS" },
          { label: "Repeatability", value: "±0.1 % FS" },
          { label: "Creep (30 min)", value: "±0.1 % FS" },
          { label: "Temperature effect on sensitivity", value: "±0.1 % FS per 10 °C" },
          { label: "Temperature effect on zero", value: "±0.1 % FS per 10 °C" },
          { label: "Safe overload", value: "150 % FS" },
          { label: "Ultimate overload", value: "200 % FS" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Input resistance", value: "780 ± 20 Ω" },
          { label: "Output resistance", value: "700 ± 10 Ω" },
          { label: "Insulation resistance", value: "≥ 5000 MΩ at 50 V DC" },
          { label: "Recommended excitation", value: "5–10 V DC" },
          { label: "Maximum excitation", value: "15 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Temperature compensation range", value: "−10 to +40 °C" },
          { label: "Operating temperature range", value: "−20 to +60 °C" },
          { label: "Cable", value: "Φ5.0 × 3000 mm" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/hs101-load-cell.svg",
    applications: [
      "Web tension measurement",
      "Press and stamping force",
      "Crane and hoist load limiting",
      "Material testing rigs",
    ],
    notes: [
      "Images for this model are pending — request the current datasheet for dimensional drawings.",
    ],
    legacyPath: "/productinfo/2159692.html",
  },
  {
    slug: "hs-201-load-cell",
    model: "HS-201-04",
    name: "Compression Load Cell",
    variant: "100–5000 kg",
    category: "motion",
    summary:
      "Stainless compression load cell for 100–5000 kg, 0.5 % FS accuracy, 1.0–2.0 mV/V output, 150 % safe and 200 % ultimate overload. IP65, 5–10 V DC excitation, Φ4 or Φ5 mm cable.",
    intro:
      "A weighing cell rather than a force-measurement cell: 100 kg to 5 tonnes, 0.5 % FS, stainless body, sealed to IP65. The 0.5 % class is the appropriate grade for tank weighing, hopper content and platform scales, where the accuracy requirement is content estimation rather than force calibration. Both sensitivity and zero are compensated across −10 to +40 °C.",
    highlights: [
      "100–5000 kg capacity",
      "0.5 % FS accuracy class",
      "Stainless steel body",
      "150 % safe overload",
      "IP65 sealed",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "100–5000 kg" },
          { label: "Accuracy class", value: "0.5 % FS" },
          { label: "Rated output", value: "1.0–2.0 mV/V" },
          { label: "Zero output", value: "±0.05 mV/V" },
          { label: "Non-linearity", value: "±0.5 % FS" },
          { label: "Hysteresis", value: "±0.5 % FS" },
          { label: "Repeatability", value: "±0.5 % FS" },
          { label: "Creep (30 min)", value: "±0.5 % FS" },
          { label: "Temperature effect on sensitivity", value: "±0.5 % FS per 10 °C" },
          { label: "Temperature effect on zero", value: "±0.5 % FS per 10 °C" },
          { label: "Safe overload", value: "150 % FS" },
          { label: "Ultimate overload", value: "200 % FS" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Input resistance", value: "750 ± 20 Ω" },
          { label: "Output resistance", value: "700 ± 10 Ω" },
          { label: "Insulation resistance", value: "≥ 5000 MΩ at 50 V DC" },
          { label: "Recommended excitation", value: "5–10 V DC" },
          { label: "Maximum excitation", value: "15 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Material", value: "Stainless steel" },
          { label: "Temperature compensation range", value: "−10 to +40 °C" },
          { label: "Operating temperature range", value: "−20 to +60 °C" },
          { label: "Cable", value: "Φ4.0 or Φ5.0 × 3000 mm" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/hs-201-load-cell.svg",
    applications: [
      "Tank and silo weighing",
      "Hopper content measurement",
      "Platform and floor scales",
      "Batching systems",
    ],
    notes: [
      "Images for this model are pending — request the current datasheet for dimensional drawings.",
    ],
    legacyPath: "/productinfo/2159714.html",
  },
  {
    slug: "bdl50-multifunction-power-meter",
    model: "HSM-BDL50",
    name: "Multifunction Power Meter",
    variant: "DIN rail, RS485",
    category: "motion",
    summary:
      "DIN-rail three-phase power meter with a dedicated metering chip, 0.55 accuracy class for active energy, full-parameter monitoring and RS485 for remote reading. LED pulse outputs to DIN 43864, LCD display, 35 mm rail mounting.",
    intro:
      "A dedicated metering chip measures three-phase voltage, current, power, power factor, frequency and imported/exported energy at 0.55 accuracy class, and the LCD shows any of them. RS485 Modbus allows remote meter reading, so a sub-distribution board can be monitored without hiring an energy contractor. The pulse outputs for active and reactive energy follow DIN 43864, which means an existing pulse-counting system can be connected without changes, and the 35 mm rail mount fits standard enclosures.",
    highlights: [
      "0.55 accuracy class for active energy",
      "Full-parameter three-phase monitoring",
      "RS485 Modbus for remote reading",
      "DIN 43864 active and reactive pulse outputs",
      "Programmable address and communication format",
      "35 mm DIN rail mounting",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Metering accuracy", value: "0.55 accuracy class, active energy" },
          { label: "Parameters", value: "Three-phase voltage, current, power, power factor, frequency, energy" },
          { label: "Pulse output", value: "LED indication for active and reactive energy, DIN 43864" },
        ],
      },
      {
        title: "Electrical and mechanical",
        rows: [
          { label: "Communications", value: "RS485" },
          { label: "Configuration", value: "Programmable keys for meter address and communication format" },
          { label: "Display", value: "LCD" },
          { label: "Mounting", value: "35 mm DIN rail" },
        ],
      },
    ],
    image: "/images/products/bdl50-multifunction-power-meter.png",
    gallery: [
      "/images/products/bdl50-multifunction-power-meter-2.png",
      "/images/products/bdl50-multifunction-power-meter-3.png",
    ],
    applications: [
      "Sub-metering in distribution boards",
      "Machine-level energy consumption",
      "Energy cost allocation between departments",
      "Building energy management",
    ],
    legacyPath: "/productinfo/6261978.html",
  },
];
