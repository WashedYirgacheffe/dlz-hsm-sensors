import type { Product } from "@/lib/content-types";

export const flowProducts: readonly Product[] = [
  {
    slug: "hsm10-thermal-flow-switch",
    model: "HSM10",
    name: "Thermal Flow Switch",
    variant: "Single set-point",
    category: "flow",
    summary:
      "Thermal-dispersion flow switch with a single adjustable set-point, sealed all-in-one stainless body rated IP67 and 100 bar. Relay, PNP, NPN or 4–20 mA output, G1/2 thread as standard. No paddle and no moving part in the flow path, so scale and debris cannot jam it.",
    intro:
      "The HSM10 detects flow by heating a probe slightly above the medium temperature and measuring how quickly that heat is carried away. Moving liquid or gas removes heat faster than a still column, so the electronics can decide whether the pipe is flowing and trip a relay at your set-point. Because the sensing element is a solid stainless probe with no paddle, vane or orifice, there is nothing for scale, sludge or debris to block. The probe face receives a surface treatment that resists the corrosion and fouling that shorten the life of ordinary flow switches in poor-quality water. Once the trip point is set, the unit holds it without periodic adjustment, which matters on plant that cannot tolerate an instrument drifting out of calibration.",
    highlights: [
      "No moving parts in the flow path — unaffected by debris and scale",
      "All-in-one sealed construction, fully waterproof",
      "Low thermal drift, so the set-point stays where you put it",
      "Relay, PNP, NPN and 4–20 mA output options",
      "Treated probe resists fouling in poor-quality water",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range — water", value: "0–5 m/s" },
          { label: "Measuring range — oil", value: "0–10 m/s" },
          { label: "Measuring range — gas", value: "0–20 m/s" },
          { label: "Maximum pressure", value: "100 bar" },
          { label: "Temperature gradient", value: "Max. 250 K/min" },
          { label: "Thermal response time", value: "≤ 12 s" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V / AC-DC 110 V / AC-DC 220 V" },
          { label: "Current consumption", value: "< 80 mA" },
          {
            label: "Output",
            value: "Relay, PNP, NPN or 4–20 mA (specify at order)",
          },
          {
            label: "Switch timing",
            value: "ON typ. 2 s (1–13 s); OFF typ. 2 s (1–15 s)",
          },
          {
            label: "Indication",
            value: "6 LEDs; red = below set-point, yellow = at or above set-point",
          },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Wetted material", value: "SUS 316L" },
          { label: "Process connection", value: "G1/2″ standard, others to order" },
          { label: "Medium temperature", value: "−20 to +80 °C (high-temperature version available)" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/hsm10-thermal-flow-switch.jpg",
    applications: [
      "Pump dry-run protection on water and coolant loops",
      "Cooling-water flow confirmation on welders, furnaces and induction heaters",
      "Lubrication and hydraulic circuit monitoring",
      "Boiler feedwater and condensate lines",
      "HVAC chilled-water and hot-water branches",
    ],
    notes: [
      "Set-point is fixed at the factory to your stated velocity unless you ask for field adjustability.",
      "For sanitary or aggressive media, specify the probe material and thread at the time of enquiry.",
    ],
    legacyPath: "/productinfo/1490462.html",
  },
  {
    slug: "hsm20-thermal-flow-switch-dual",
    model: "HSM20",
    name: "Thermal Flow Switch",
    variant: "Dual set-point",
    category: "flow",
    summary:
      "Two independently adjustable set-points on one thermal flow switch, giving alarm and trip from a single instrument. Two potentiometers set the thresholds; red, yellow and green LEDs report which band the flow is in. IP68 sealed body, relay or PNP/NPN output, rated to 100 bar.",
    intro:
      "The HSM20 is the HSM10 with two set-points instead of one. Two potentiometers are adjusted independently, so you can set a low threshold that raises a warning and a second threshold that trips the plant, from the same probe. Three indicator states — red below the first set-point, yellow above the first, green above the second — let an operator read the flow band from across the room without a display or a control system. The all-in-one sealed construction is rated IP68 rather than IP67, so the body survives washdown and temporary flooding. It uses the same thermal-dispersion principle and the same treated 316L probe as the rest of the range, which means the same immunity to fouling and the same absence of moving parts.",
    highlights: [
      "Two independent set-points — warning and trip from one probe",
      "Dual potentiometer adjustment, set accurately in the field",
      "Three-colour LED band indication readable at a distance",
      "IP68 sealed body for washdown and wet locations",
      "Upgrade path from conventional single-point flow switches",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range — water", value: "0–5 m/s" },
          { label: "Measuring range — oil", value: "0–10 m/s" },
          { label: "Measuring range — gas", value: "0–20 m/s" },
          { label: "Maximum pressure", value: "100 bar" },
          { label: "Temperature gradient", value: "Max. 250 K/min" },
          { label: "Thermal response time", value: "≤ 12 s" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V / AC-DC 110 V / AC-DC 220 V" },
          { label: "Current consumption", value: "< 80 mA" },
          {
            label: "Output",
            value: "Relay, or PNP / NPN — two channels selectable",
          },
          { label: "Adjustment", value: "Dual potentiometer" },
          {
            label: "Switch timing",
            value: "ON typ. 2 s (1–13 s); OFF typ. 2 s (1–15 s)",
          },
          {
            label: "Indication",
            value:
              "Red = below set-point 1; yellow = above set-point 1; green = above set-point 2",
          },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Wetted material", value: "SUS 316L" },
          { label: "Process connection", value: "G1/2″ standard, others to order" },
          { label: "Medium temperature", value: "−20 to +80 °C (high-temperature version available)" },
          { label: "Ingress protection", value: "IP68" },
        ],
      },
    ],
    image: "/images/products/hsm20-thermal-flow-switch-dual.jpg",
    applications: [
      "Cooling circuits needing both a warning and a shutdown threshold",
      "Pump protection where a second stage must isolate the drive",
      "Process lines with a minimum-flow alarm and a no-flow trip",
      "Machine tools with independent coolant and lubrication monitoring",
    ],
    legacyPath: "/productinfo/1490867.html",
  },
  {
    slug: "hsm30-thermal-flow-switch-digital",
    model: "HSM30",
    name: "Digital Thermal Flow Switch",
    variant: "LED display",
    category: "flow",
    summary:
      "Thermal flow switch with a four-digit LED display showing live flow velocity, set by two front-panel keys rather than a screwdriver. Reverse-polarity, short-circuit and overload protected. Handles media up to 100 °C and pressures to 100 bar, sealed to IP67.",
    intro:
      "The HSM30 replaces the potentiometer with a digital display and a two-key interface. Instead of guessing at a screw position, the maintenance technician reads the actual velocity on the LED display, presses the key when the flow is at the value they want, and the trip point is stored. That makes commissioning repeatable across several identical machines, and it makes fault-finding possible without a separate flow meter: if the pump is running and the display reads zero, the problem is upstream. The electronics include reverse-polarity, short-circuit and overload protection, which is the difference between a blown fuse and a dead instrument on a badly wired panel. It also extends the medium temperature ceiling to 100 °C, above the 80 °C limit of the analogue models.",
    highlights: [
      "Live four-digit LED display of flow velocity",
      "Two-key set-point entry — no screwdriver, no guessing",
      "Reverse-polarity, short-circuit and overload protection",
      "Medium temperature up to 100 °C",
      "Relay, PNP, NPN or 4–20 mA output",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range — water", value: "3–300 cm/s" },
          { label: "Measuring range — oil", value: "3–300 cm/s" },
          { label: "Measuring range — gas", value: "200–3000 cm/s" },
          { label: "Maximum pressure", value: "100 bar" },
          { label: "Temperature gradient", value: "Max. 250 K/min" },
          { label: "Thermal response time", value: "≤ 12 s" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V / AC-DC 110 V / AC-DC 220 V" },
          { label: "Current consumption", value: "< 80 mA" },
          {
            label: "Output",
            value: "Relay, PNP, NPN or 4–20 mA (specify at order)",
          },
          { label: "Display", value: "Four-digit LED" },
          { label: "Configuration", value: "Two front-panel keys" },
          {
            label: "Protection",
            value: "Reverse polarity, short circuit, overload",
          },
          {
            label: "Switch timing",
            value: "ON typ. 2 s (1–13 s); OFF typ. 2 s (1–15 s)",
          },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Wetted material", value: "SUS 316L" },
          { label: "Process connection", value: "G1/2″ standard, others to order" },
          { label: "Medium temperature", value: "−20 to +100 °C" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/hsm30-thermal-flow-switch-digital.jpg",
    applications: [
      "Machines where commissioning must be identical across many units",
      "Plant rooms where operators need to read flow without a control system",
      "Cooling circuits on lasers, spindles and power supplies",
      "Water-treatment dosing lines",
    ],
    legacyPath: "/productinfo/1490872.html",
  },
  {
    slug: "s400-flow-controller",
    model: "S400",
    name: "Mass Flow Controller",
    variant: "Closed loop, 100–200 L/min",
    category: "flow",
    summary:
      "Closed-loop gas flow controller combining a thermal flow sensor and a normally-closed solenoid valve in one body. Three ranges — 100, 150 and 200 L/min — with ±1 % FS accuracy, 2 s response and 5–100 % control range. Swagelok or VCR fittings, ±15 V DC supply.",
    intro:
      "Where the HSM switches detect flow, the S400 regulates it. A thermal sensor measures the actual flow and a normally-closed solenoid valve modulates in response, so the controller holds the set-point instead of merely reporting it. Control range is 5–100 % of full scale, which means the valve still has authority at low flow rather than shutting off abruptly. Linearity is ±0.5 % FS and repeatability ±0.2 % FS, with a 2 s settling time to within ±2 % of set-point. Accuracy is specified between 15 and 35 °C; outside that band the unit still works, but the specification widens. Body is rated to 3 MPa with a helium leak rate below 1×10⁻² Pa·m³/s, and the fittings are Swagelok 3/8″ or 10 mm, or VCR 1/2″.",
    highlights: [
      "True closed-loop control, not just measurement",
      "Three flow ranges: 100, 150 and 200 L/min",
      "±1.0 % FS accuracy, ±0.2 % FS repeatability",
      "Normally-closed valve — fails safe on loss of power",
      "Mounts in any orientation",
    ],
    specs: [
      {
        title: "Flow",
        rows: [
          { label: "Flow ranges", value: "100 L/min, 150 L/min, 200 L/min" },
          { label: "Control range", value: "5–100 % of full scale" },
          { label: "Measuring range", value: "0–100 % of full scale" },
          { label: "Accuracy", value: "±1.0 % FS" },
          { label: "Linearity", value: "±0.5 % FS" },
          { label: "Repeatability", value: "±0.2 % FS" },
          { label: "Response time", value: "2 s (T98 within ±2 % FS of set-point)" },
          {
            label: "Differential pressure required",
            value:
              "100 L/min: 0.1–0.3 MPa; 150 L/min: 0.15–0.3 MPa; 200 L/min: 0.2–0.3 MPa",
          },
          { label: "Proof pressure", value: "3 MPa" },
          { label: "Leak rate", value: "1×10⁻² Pa·m³/s (helium)" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply", value: "±15 V DC ±5 %, 15 V at 1 MΩ" },
          {
            label: "Set-point input",
            value: "4–20 mA, 1–5 V DC or 0–5 V DC",
          },
          {
            label: "Flow output",
            value: "0–5 V DC (≤ 3 mA load), 4–20 mA, 1–5 V DC or 0–5 V DC",
          },
          { label: "Connector", value: "D-SUB 15, D-SUB 9" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Valve type", value: "Solenoid proportional, normally closed" },
          { label: "Mounting orientation", value: "Any" },
          { label: "Fittings", value: "Swagelok 3/8″ or 10 mm; VCR 1/2″" },
          { label: "Ambient temperature", value: "5–45 °C" },
          { label: "Accuracy-guaranteed temperature", value: "15–35 °C" },
          { label: "Weight", value: "2.8 kg" },
        ],
      },
    ],
    image: "/images/products/s400-flow-controller.jpg",
    applications: [
      "Analytical instrument gas supply",
      "Semiconductor and vacuum process gas lines",
      "Laboratory rigs needing a repeatable flow set-point",
      "Packaging and welding shielding gas control",
    ],
    notes: [
      "Specify gas type at order — the calibration is gas-specific and cannot be transferred between media without recalibration.",
      "Requires the stated differential pressure; below it the valve loses control authority at the top of the range.",
    ],
    legacyPath: "/productinfo/2139315.html",
  },
];
