import type { Product } from "@/lib/content-types";

export const temperatureProducts: readonly Product[] = [
  {
    slug: "tps10-rtd-temperature-sensor",
    model: "TPS10",
    name: "RTD Temperature Probe",
    variant: "Pt100 / Pt1000",
    category: "temperature",
    summary:
      "Bare Pt100 or Pt1000 probe in a stainless sheath with a standard terminal head. −200 to +600 °C, resistance signal straight out, probe length and diameter made to order. The element to specify when the transmitter lives in the panel, not on the pipe.",
    intro:
      "The TPS10 is the sensing element on its own: a high-accuracy platinum resistance element in a stainless tube, with the internals packed in a thermally conductive compound so the element follows the process temperature rather than lagging behind it. The resistance follows the standard Pt100 index table exactly, which means the reading is interchangeable with any other compliant instrument and can be verified with a decade box at commissioning. Where a 4–20 mA output is wanted, the TPT family adds a transmitter module to the same probe.",
    highlights: [
      "Resistance output follows the standard Pt100 index exactly",
      "Field-verifiable with a decade box",
      "Stainless sheath resists corrosion",
      "Probe length and diameter to order",
      "Transmitter module can be added without changing the probe",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "−200 to +600 °C" },
          { label: "Element", value: "Pt100 or Pt1000" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Wiring", value: "2-, 3- or 4-wire, selectable at order" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Probe length", value: "To customer specification" },
          { label: "Probe diameter", value: "8 mm standard, others to order" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Process connection", value: "To customer specification (G1/2, M20×1.5, etc.)" },
        ],
      },
    ],
    image: "/images/products/tps10-rtd-temperature-sensor.jpg",
    applications: [
      "Bearing and gearbox temperature",
      "Water and steam pipe temperature",
      "Oven and furnace monitoring",
      "Panel-mounted transmitter applications",
    ],
    legacyPath: "/productinfo/1535956.html",
  },
  {
    slug: "tpt10-integrated-temperature-transmitter",
    model: "TPT10",
    name: "Integrated Temperature Transmitter",
    variant: "4–20 mA, 2-wire",
    category: "temperature",
    summary:
      "Pt100 probe with an integrated transmitter in the head, giving a two-wire 4–20 mA signal directly from the sensor. −200 to +600 °C, 0.1 or 0.2 accuracy class, epoxy-potted and intrinsically safe module, IP65.",
    intro:
      "The TPT10 puts the transmitter on the probe rather than in the panel. The element's resistance is linearised, protected against supply reversal, and converted to a two-wire 4–20 mA current in the head, so the cable run carries a signal that does not pick up resistance error from long leads. The module is epoxy-potted, which is what makes it survive vibration and humidity in a plant room, and it is an intrinsically safe design for hazardous areas. Accuracy class is 0.1 or 0.2, and the probe length is made to your requirement.",
    highlights: [
      "Two-wire 4–20 mA straight from the head — no long RTD leads",
      "Epoxy-potted: vibration and humidity resistant",
      "Intrinsically safe transmitter module",
      "Accuracy class 0.1 or 0.2",
      "Reverse-polarity and short-circuit protection",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "−200 to +600 °C, to customer specification" },
          { label: "Element", value: "Pt100, Pt1000 and similar" },
          { label: "Accuracy class", value: "0.1 or 0.2" },
          { label: "Non-linearity", value: "0.2" },
          { label: "Hysteresis", value: "Better than 0.01 % of span" },
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
          { label: "Probe length", value: "To customer specification" },
          { label: "Probe diameter", value: "8 mm standard, others to order" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Process connection", value: "G1/2″, M20×1.5 or to order" },
          { label: "Ambient temperature", value: "−20 to +60 °C" },
          { label: "Ambient humidity", value: "< 85 %" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/tpt10-integrated-temperature-transmitter.jpg",
    applications: [
      "Long cable runs where RTD lead resistance would matter",
      "Hazardous areas needing an intrinsically safe loop",
      "Retrofit of bare RTD probes without a panel transmitter",
    ],
    legacyPath: "/productinfo/1535964.html",
  },
  {
    slug: "tpt20-temperature-transmitter-display",
    model: "TPT20",
    name: "Temperature Transmitter",
    variant: "Local display",
    category: "temperature",
    summary:
      "Integrated temperature transmitter with a local display in the head, so the temperature is readable at the measurement point. −200 to +600 °C, two-wire 4–20 mA, 0.1 or 0.2 accuracy class, epoxy-potted, IP65.",
    intro:
      "The TPT20 is the TPT10 with a display head. On plant where the maintenance team walks the line, that removes the need to interrogate the control system to see whether a sensor has failed — they can look at it. The electrical and mechanical specification is otherwise the same, so the two models are interchangeable in a spares strategy.",
    highlights: [
      "Local display at the measurement point",
      "Two-wire 4–20 mA output",
      "Epoxy-potted, vibration and moisture resistant",
      "Accuracy class 0.1 or 0.2",
      "Interchangeable with the TPT10",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "−200 to +600 °C, to customer specification" },
          { label: "Element", value: "Pt100, Pt1000 and similar" },
          { label: "Accuracy class", value: "0.1 or 0.2" },
          { label: "Non-linearity", value: "0.2" },
          { label: "Hysteresis", value: "Better than 0.01 % of span" },
          { label: "Long-term stability", value: "0.15 % FS/year" },
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
          { label: "Probe length", value: "To customer specification" },
          { label: "Probe diameter", value: "8 mm standard, others to order" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Process connection", value: "G1/2″ or to order" },
          { label: "Ambient temperature", value: "−20 to +60 °C" },
          { label: "Ambient humidity", value: "< 85 %" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/tpt20-temperature-transmitter-display.jpg",
    applications: [
      "Plant rooms with walk-round inspection",
      "Local verification of process temperature",
      "Skids without a local control panel",
    ],
    legacyPath: "/productinfo/1535987.html",
  },
  {
    slug: "tpt201-temperature-transmitter",
    model: "TPT201",
    name: "Smart Temperature Transmitter",
    variant: "MCU, 2 alarm outputs",
    category: "temperature",
    summary:
      "Microcontroller-based temperature transmitter with a wide −200 to +600 °C span, 0.1 or 0.2 accuracy class, local display and two opto-isolated alarm outputs. 4–20 mA or 1–5 V, 750 Ω load, IP65.",
    intro:
      "The TPT201 replaces the analogue transmitter circuit with an industrial microcontroller and a high-resolution A/D converter. The practical difference is range flexibility: one model spans from −200 to +600 °C without a range card, and the same unit can be configured for a narrow band where a finer resolution is needed. Two opto-isolated alarm outputs are available (not fitted as standard) for high and low temperature trips, and the local display shows the process value.",
    highlights: [
      "One model spans −200 to +600 °C",
      "Microcontroller with high-resolution A/D",
      "Two opto-isolated alarm outputs (optional)",
      "Accuracy class 0.1 or 0.2",
      "Local display",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "−200 to +600 °C, to customer specification" },
          { label: "Element", value: "Pt100, Pt1000 and similar" },
          { label: "Accuracy class", value: "0.1 or 0.2" },
          { label: "Non-linearity", value: "0.2" },
          { label: "Hysteresis", value: "Better than 0.01 % of span" },
          { label: "Long-term stability", value: "0.15 % FS/year" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V" },
          { label: "Output", value: "4–20 mA or 1–5 V" },
          { label: "Alarm output", value: "2 opto-isolated (not fitted as standard)" },
          { label: "Load impedance", value: "750 Ω" },
          { label: "Insulation resistance", value: "≥ 100 MΩ at 100 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Probe length", value: "To customer specification" },
          { label: "Probe diameter", value: "8 mm standard, others to order" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Mounting thread", value: "G1/2″ or to order" },
          { label: "Ambient temperature", value: "−20 to +80 °C" },
          { label: "Ambient humidity", value: "< 85 %" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/tpt201-temperature-transmitter.jpg",
    applications: [
      "Wide-range duties spanning ambient and process temperatures",
      "Temperature alarm without a separate trip amplifier",
      "Furnace, oven and kiln monitoring",
    ],
    notes: [
      "State at order whether the two alarm outputs are required; they are not fitted as standard.",
    ],
    legacyPath: "/productinfo/1535991.html",
  },
  {
    slug: "tpt2088-temperature-controller",
    model: "TPT2088",
    name: "Temperature Transmitter Controller",
    variant: "4 relays, 2088 housing",
    category: "temperature",
    summary:
      "Temperature transmitter and controller in the standard 2088 housing: 24-bit A/D, bright LED display, four relays and 4–20 mA / 1–5 V output. −200 to +600 °C, 0.1 or 0.2 accuracy class, IP65.",
    intro:
      "The TPT2088 is the temperature member of the 2088 controller family. It reads a Pt100 or Pt1000 element through a 24-bit converter, displays the value on a high-brightness LED, and operates four relays against keypad-set set-points, while providing an analogue output in parallel. On a heater bank or a heat-treatment furnace it replaces the transmitter plus a separate temperature trip, and the set-points can be adjusted from the front without opening the housing.",
    highlights: [
      "Four relay outputs with keypad-set points",
      "24-bit A/D, high-brightness LED",
      "Parallel 4–20 mA or 1–5 V output",
      "Standard 2088 housing",
      "Settings changed without opening the housing",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "−200 to +600 °C, to customer specification" },
          { label: "Element", value: "Pt100, Pt1000 and similar" },
          { label: "Accuracy class", value: "0.1 or 0.2" },
          { label: "Non-linearity", value: "0.2" },
          { label: "Hysteresis", value: "Better than 0.01 % of span" },
          { label: "Long-term stability", value: "0.15 % FS/year" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V" },
          { label: "Output", value: "4–20 mA or 1–5 V" },
          { label: "Alarm outputs", value: "4 relays" },
          { label: "Load impedance", value: "750 Ω" },
          { label: "Insulation resistance", value: "≥ 100 MΩ at 100 V DC" },
          { label: "A/D conversion", value: "24-bit" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Probe length", value: "To customer specification" },
          { label: "Probe diameter", value: "8 mm standard, others to order" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Process connection", value: "G1/2″ or to order" },
          { label: "Ambient temperature", value: "−20 to +80 °C" },
          { label: "Ambient humidity", value: "< 85 %" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/tpt2088-temperature-controller.jpg",
    applications: [
      "Heat-treatment and tempering furnaces",
      "Heater bank over-temperature interlock",
      "Multi-stage temperature control without a PLC",
    ],
    legacyPath: "/productinfo/1535992.html",
  },
  {
    slug: "tpt100-temperature-transmitter-controller",
    model: "TPT100",
    name: "Temperature Transmitter Controller",
    variant: "5 relays, RS485",
    category: "temperature",
    summary:
      "Five relay outputs plus RS485 Modbus on a Pt100/Pt1000 temperature transmitter. −200 to +600 °C, 24-bit A/D, LED display, parallel analogue output, IP65. For temperature control with supervisory reporting.",
    intro:
      "The TPT100 adds RS485 Modbus and a fifth relay to the temperature controller. The communications port is what makes it useful on a plant with a supervisory system: the same instrument that runs the local interlock can report the measured value and the relay states to a SCADA or building-management system, so the operator does not have to infer what happened from a separate data logger.",
    highlights: [
      "Five relays plus RS485 Modbus",
      "Reports measured value and relay state to SCADA",
      "24-bit A/D, high-brightness LED display",
      "−200 to +600 °C",
      "Keypad-set alarm points",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "−200 to +600 °C, to customer specification" },
          { label: "Element", value: "Pt100, Pt1000 and similar" },
          { label: "Accuracy class", value: "0.1 or 0.2" },
          { label: "Non-linearity", value: "0.2" },
          { label: "Hysteresis", value: "Better than 0.01 % of span" },
          { label: "Long-term stability", value: "0.15 % FS/year" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V" },
          { label: "Output", value: "4–20 mA or 1–5 V" },
          { label: "Alarm outputs", value: "5 relays" },
          { label: "Communications", value: "RS485" },
          { label: "Load impedance", value: "750 Ω" },
          { label: "Insulation resistance", value: "≥ 100 MΩ at 100 V DC" },
          { label: "A/D conversion", value: "24-bit" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Probe length", value: "To customer specification" },
          { label: "Probe diameter", value: "8 mm standard, others to order" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Process connection", value: "G1/2″ or to order" },
          { label: "Ambient temperature", value: "−20 to +60 °C" },
          { label: "Ambient humidity", value: "< 85 %" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/tpt100-temperature-transmitter-controller.jpg",
    applications: [
      "Temperature control with SCADA reporting",
      "Multi-zone heater control",
      "Process vessels with remote supervision",
    ],
    legacyPath: "/productinfo/1535995.html",
  },
  {
    slug: "tpt00-temperature-transmitter-module",
    model: "TPT00",
    name: "Temperature Transmitter Module",
    variant: "Head-mount or DIN-rail",
    category: "temperature",
    summary:
      "Bare transmitter module for mounting inside a connection head or on a DIN rail. Converts a Pt100/Pt1000 resistance to 4–20 mA, 0–5 V, 1–5 V or 0–10 V. 12–36 V supply, 0.1/0.2/0.5 accuracy class, epoxy-potted.",
    intro:
      "The TPT00 is the electronics without the probe. It is what you fit when the sensor already exists — when a probe is being replaced, or when a panel needs to condition several RTD inputs in one enclosure. Because it is epoxy-potted, it can go inside a field connection head where condensation is likely, and the four selectable output types cover most legacy control-system inputs without needing signal converters.",
    highlights: [
      "Fits inside a connection head or on DIN rail",
      "Four output types: 4–20 mA, 0–5 V, 1–5 V, 0–10 V",
      "Accuracy class 0.1, 0.2 or 0.5",
      "Epoxy-potted for humid field enclosures",
      "12–36 V wide supply",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "−200 to +600 °C, to customer specification" },
          { label: "Element", value: "Pt100, Pt1000 and similar" },
          { label: "Accuracy class", value: "0.1, 0.2 or 0.5" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "12–36 V" },
          { label: "Output", value: "4–20 mA / 0–5 V / 1–5 V / 0–10 V" },
        ],
      },
    ],
    image: "/images/products/tpt00-temperature-transmitter-module.jpg",
    applications: [
      "Replacing the electronics in an existing connection head",
      "Panel-mounted RTD conditioning",
      "Interfacing an RTD to a PLC analogue card",
    ],
    legacyPath: "/productinfo/1535998.html",
  },
  {
    slug: "fibre-optic-temperature-sensor",
    model: "HSM-FO",
    name: "Fluorescent Fibre-Optic Temperature Sensor",
    variant: "Dielectric, HV-rated",
    category: "temperature",
    summary:
      "Fluorescent-decay temperature sensing on a quartz fibre, with no electrical path to the measurement point. −40 to +200 °C (to 300 °C on request), ±1 °C, 0.1 °C resolution, USART output, immune to electromagnetic fields and rated for 100 kV at the lead.",
    intro:
      "A fluorescent material at the fibre tip is excited by a light pulse; how quickly its glow decays depends on temperature, and the decay is timed optically. There is no electrical connection between the sensing tip and the instrument — no thermocouple, no RTD lead, no metal path. That is the whole point: at 100 kV, a metal probe in a transformer winding is a liability, while a quartz fibre is not. The same property makes the sensor immune to electromagnetic interference, immune to chemical attack, and small enough to place in a winding hot spot or a switchgear contact.",
    highlights: [
      "Zero electrical connection to the measurement point",
      "Immune to electromagnetic interference",
      "Withstands 100 kV at the fibre lead (0.4 m, 5 min)",
      "Sensing tip as small as 600 µm",
      "±1 °C accuracy, 0.1 °C resolution",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "−40 to +200 °C (higher ranges to order)" },
          { label: "Accuracy", value: "±1 °C (higher accuracy on request)" },
          { label: "Resolution", value: "0.1 °C" },
          { label: "Channels", value: "1–16" },
          { label: "Update period", value: "300 ms" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 5 V" },
          { label: "Output", value: "USART serial; unique address required per unit on a shared bus" },
          { label: "Baud rate", value: "9600" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Sensor type", value: "Quartz optical fibre, 5 m standard" },
          { label: "Minimum tip diameter", value: "600 µm" },
          { label: "Withstand voltage", value: "100 kV AC at 50 Hz for 5 min, 0.4 m lead to earth" },
        ],
      },
    ],
    image: "/images/products/fibre-optic-temperature-sensor.jpg",
    gallery: [
      "/images/products/fibre-optic-temperature-sensor-2.jpg",
      "/images/products/fibre-optic-temperature-sensor-3.jpg",
    ],
    applications: [
      "Transformer winding hot-spot measurement",
      "Switchgear and breaker contact temperature",
      "High-voltage cable joint monitoring",
      "Photovoltaic and inverter hotspot detection",
      "MRI and other strong-field environments",
    ],
    legacyPath: "/productinfo/1574843.html",
  },
  {
    slug: "fibre-optic-temperature-probe",
    model: "HSM-FOP",
    name: "Fluorescent Fibre-Optic Probe",
    variant: "ST connector",
    category: "temperature",
    summary:
      "Replacement or additional fibre probe for the fluorescent system: ST connector, quartz fibre with PTFE jacket, rare-earth sensing tip, 3 mm overall diameter, rated to 200 °C. Bend radius 13.2 cm long-term, 4.4 cm short-term.",
    intro:
      "The probe is the consumable part of a fibre-optic temperature system. It carries light from the module to the sensing tip and back, and it is the part exposed to the process. The quartz core is clad and then sheathed in PTFE, so the fibre survives chemicals that would attack a plastic-jacketed cable, and the ST connector is a standard fit for the transmitter module. Probes are supplied in standard 5 m lengths and can be ordered shorter or longer.",
    highlights: [
      "Quartz fibre with PTFE jacket — chemically resistant",
      "Rare-earth sensing tip, no electrical path",
      "ST connector, standard fit",
      "3 mm overall diameter",
      "200 °C rating, 100 kV withstand",
    ],
    specs: [
      {
        title: "Optical",
        rows: [
          { label: "Connector", value: "ST" },
          { label: "Fibre", value: "Quartz core, cladding, PTFE outer jacket" },
          { label: "Sensing tip", value: "Rare-earth fluorescent material" },
          { label: "Overall diameter", value: "3 mm" },
          { label: "Long-term bend radius", value: "13.2 cm" },
          { label: "Short-term bend radius", value: "4.4 cm" },
          { label: "Maximum fibre temperature", value: "200 °C" },
          { label: "Withstand voltage", value: "100 kV AC at 50 Hz for 5 min, 0.4 m lead to earth" },
        ],
      },
      {
        title: "Environment",
        rows: [
          { label: "Ambient temperature", value: "−20 to +55 °C" },
          { label: "Ambient humidity", value: "≤ 95 % at 25 °C" },
        ],
      },
    ],
    image: "/images/products/fibre-optic-temperature-probe.jpg",
    gallery: ["/images/products/fibre-optic-temperature-probe-2.jpg"],
    applications: [
      "Replacement probes for existing fibre-optic systems",
      "Adding channels to a multi-channel module",
      "Retrofit of HV equipment already fitted with fibre ports",
    ],
    legacyPath: "/productinfo/1574867.html",
  },
  {
    slug: "fibre-optic-temperature-system",
    model: "HSM-FOS",
    name: "Fluorescent Fibre-Optic Temperature System",
    variant: "Multi-channel, 1–32",
    category: "temperature",
    summary:
      "Complete multi-channel fibre-optic temperature system: 1–32 channels, −40 to +200 °C (300 °C on request), ±1 °C, ±0.1 °C resolution, RS485 Modbus RTU, 100–300 V AC supply, 2.3 mm probes rated for 100 kV.",
    intro:
      "The system pairs a multi-channel transmitter with a set of fluorescent probes. Each channel is independent and interrogated in turn, so one instrument covers every hot spot in a transformer, a switchgear line-up or a cable trench. Output is RS485 Modbus RTU, which means the values land directly in a SCADA or protection relay without an intermediate converter. Because the probes contain no metal and carry no current, the installation does not compromise the insulation coordination of the equipment being monitored — which is the reason this technique exists at all.",
    highlights: [
      "1–32 channels on one instrument",
      "RS485 Modbus RTU — direct to SCADA",
      "Probes rated 100 kV, 2.3 mm diameter",
      "±1 °C accuracy, 0.1 °C resolution",
      "Up to 300 °C on request",
      "100–300 V AC wide-range supply",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "−40 to +200 °C (up to 300 °C to order)" },
          { label: "Accuracy", value: "±1 °C (higher accuracy on request)" },
          { label: "Resolution", value: "0.1 °C" },
          { label: "Channels", value: "1–32, expandable" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "100–300 V AC" },
          { label: "Output", value: "RS485 / Modbus RTU" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Ambient temperature", value: "−20 to +65 °C" },
          { label: "Ambient humidity", value: "≤ 95 % at 25 °C" },
          { label: "Fibre", value: "Imported quartz fibre, 5 m standard, other lengths to order" },
          { label: "Probe diameter", value: "2.3 mm (other diameters to order)" },
          { label: "Probe withstand voltage", value: "100 kV (40 mm withstand length, 5 min)" },
        ],
      },
    ],
    image: "/images/products/fibre-optic-temperature-system.jpg",
    gallery: ["/images/products/fibre-optic-temperature-system-2.jpg"],
    applications: [
      "Transformer hot-spot monitoring across all windings",
      "Switchgear and GIS contact temperature",
      "Cable trench and joint monitoring along a route",
      "Arc-furnace and induction-heating equipment",
    ],
    legacyPath: "/productinfo/1574909.html",
  },
];
