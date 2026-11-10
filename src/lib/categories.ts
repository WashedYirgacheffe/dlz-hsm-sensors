import type { Category } from "@/lib/content-types";

/**
 * Category copy. Each entry has to earn its place: an engineer landing on
 * /products/level should know within one line whether this is the right
 * family for their tank, and within one paragraph what the measurement
 * options actually are.
 */
export const categories: readonly Category[] = [
  {
    slug: "flow",
    name: "Flow Sensors & Switches",
    shortName: "Flow",
    tagline: "Thermal flow switches and closed-loop flow controllers for pipe networks",
    intro:
      "Thermal-dispersion flow switches detect whether liquid or gas in a pipe is moving above a set point, then switch a relay. There is no paddle, no vane and no moving part in the flow path, so debris and scale do not jam the instrument. Our range covers the standard single set-point switch, a dual set-point version for alarm-and-trip duty, and a digital model that shows live flow velocity on an LED display. All three are fully sealed and rated IP67, with a wetted probe in SUS 316L. Where you need regulation rather than detection, the S400 controller closes the loop with a proportional valve.",
    measures: ["Flow velocity", "Set-point crossing", "Volumetric flow (controller)"],
    outputs: ["Relay (SPDT)", "PNP / NPN", "4–20 mA"],
  },
  {
    slug: "level",
    name: "Level Sensors & Transmitters",
    shortName: "Level",
    tagline: "Float, magnetic, capacitive, submersible and magnetostrictive level measurement",
    intro:
      "Liquid level is the widest part of our catalogue because no single principle suits every tank. Float switches give a dry contact at one or more discrete points and need no power. Magnetic level gauges read directly from a red-and-white flip column — no electronics at all — and can add a 4–20 mA transmitter for remote indication. Magnetic-induction and magnetostrictive transmitters give continuous 4–20 mA or RS485 output over 3 to 5 metres. Submersible transmitters convert hydrostatic head into a signal and suit deep wells and reservoirs. Capacitive models handle viscous and coating media. Where foam, build-up or aggressive chemistry rules out contact sensing, the microwave switch detects through the wall of the vessel.",
    measures: ["Point level", "Continuous level", "Interface"],
    outputs: ["Dry contact", "Relay", "4–20 mA", "0–10 V", "RS485 Modbus"],
  },
  {
    slug: "pressure",
    name: "Pressure Transmitters & Controllers",
    shortName: "Pressure",
    tagline: "Differential pressure, gauge pressure and pressure-switching controllers",
    intro:
      "Our pressure line splits into two jobs. For pure measurement, the PDD series covers differential pressure from ±100 Pa up to 40 MPa with 0.2 or 0.5 accuracy class, a 40:1 turndown and a two-wire 4–20 mA output. For measurement plus local control, the PCD and PCC controllers add a bright LED display, configurable alarm points set from the keypad, and four or five relay outputs that can trip pumps, valves or alarms directly — no separate PLC needed for a small skid. Both families share stainless-steel housings, IP65 protection and standard G1/2 or M20×1.5 process connections, with custom threads available.",
    measures: ["Differential pressure", "Gauge pressure", "Absolute pressure"],
    outputs: ["4–20 mA (2-wire)", "1–5 V (3-wire)", "Relay ×4–5", "RS485"],
  },
  {
    slug: "temperature",
    name: "Temperature Sensors & Transmitters",
    shortName: "Temperature",
    tagline: "Pt100 probes, integrated transmitters and fibre-optic sensing for high voltage",
    intro:
      "The TPS and TPT families are built around Pt100 and Pt1000 platinum elements in stainless-steel probes, covering −200 to +600 °C. You can take the bare resistance signal, or add an integrated transmitter for a two-wire 4–20 mA output; the TPT201 and TPT2088 add local display and up to five relay outputs, and the TPT100 adds RS485 Modbus. Probe length, diameter and thread are made to order. For switchgear, transformers and other locations where a metal probe would be a liability, the fluorescent fibre-optic system measures temperature on a purely dielectric path and withstands 100 kV at the fibre lead.",
    measures: ["Process temperature", "Surface temperature", "HV hotspot temperature"],
    outputs: ["Pt100 / Pt1000 resistance", "4–20 mA", "1–5 V", "Relay", "RS485", "USART"],
  },
  {
    slug: "ultrasonic",
    name: "Ultrasonic Proximity Sensors",
    shortName: "Ultrasonic",
    tagline: "Non-contact distance sensing from 120 mm to 4 m, unaffected by colour or gloss",
    intro:
      "Ultrasonic sensors time the echo of a sound pulse, so they detect clear glass, polished metal, black rubber and liquid surfaces that optical sensors miss. The UB series covers seven sensing ranges from 120 mm to 4000 mm in M12, M18 and M30 threaded barrels, all with PNP or NPN switching output and an adjustable window. Because the measurement is acoustic rather than optical, dust, mist and ambient light do not degrade it. Typical duty is presence detection on a conveyor, fill-level checking in a bin, loop control on a web, and collision avoidance on AGVs.",
    measures: ["Distance", "Presence", "Fill height"],
    outputs: ["PNP", "NPN", "Analogue (selected models)"],
  },
  {
    slug: "gas",
    name: "Laser Methane Detection",
    shortName: "Gas",
    tagline: "TDLAS methane detectors for pipelines, confined spaces and unmanned inspection",
    intro:
      "These instruments use tunable diode laser absorption spectroscopy (TDLAS) to measure methane along the line of sight rather than at a single point. A laser is aimed at the target surface and the reflected beam is analysed, so a leak several tens of metres away is detected without walking into the hazard. Response is 0.06 s on the wearable unit, which matters when a patrol is moving. The range includes a helmet-mounted detector for walk-around inspection, a long-range handheld, and an explosion-proof pan-tilt head for fixed installation on a gantry or tank farm.",
    measures: ["Methane concentration (path-integrated)", "Leak localisation"],
    outputs: ["Alarm", "RS485", "4–20 mA", "Relay (pan-tilt)"],
  },
  {
    slug: "displacement",
    name: "Linear Displacement Transducers",
    shortName: "Displacement",
    tagline: "Rod, draw-wire and magnetostrictive position feedback for machine control",
    intro:
      "Position feedback for hydraulics, presses, gates and test rigs. The MPS rod-type transducer couples directly to a moving member and delivers 4–20 mA or 0–10 V with 0.05 % linearity and a 100-million-cycle life. The MDS draw-wire unit measures up to 20 m from a compact housing where a rod will not fit. The MMS magnetostrictive unit is non-contact, so there is nothing to wear, and it reports position and velocity with 0.002 % FS repeatability. ER and ESC models cover the short-stroke, low-cost end of the range for general automation.",
    measures: ["Linear position", "Stroke", "Velocity (magnetostrictive)"],
    outputs: ["4–20 mA", "0–10 V", "0–5 V", "RS485"],
  },
  {
    slug: "analytical",
    name: "Analytical Instruments",
    shortName: "Analytical",
    tagline: "Dissolved oxygen and pH measurement for water, fermentation and process plant",
    intro:
      "Dissolved oxygen and pH are the two measurements that decide whether a biological process is healthy. The DOG-208FA polarographic electrode withstands 130 °C steam sterilisation and is built for small bioreactors; the DOG200 transmitter drives it with automatic temperature compensation, isolated 4–20 mA output and dual relay control. The PHG-2091Pro accepts a range of analogue pH electrodes through a built-in A/D stage and reports over Modbus RTU, with a solid-electrolyte reference that resists blocking in dirty service.",
    measures: ["Dissolved oxygen", "pH", "Temperature (compensation)"],
    outputs: ["4–20 mA", "Relay", "RS485 Modbus RTU"],
  },
  {
    slug: "iot",
    name: "Industrial IoT & Wireless Sensing",
    shortName: "Industrial IoT",
    tagline: "Battery-powered sensors and edge gateways for unmanned remote monitoring",
    intro:
      "For sites with no mains power and no cable route — oil and gas pipelines, heating networks, fire-water mains, reservoirs — the wireless series combines a low-power sensing element with 4G, LoRa or NB-IoT transport and battery or cyclic-supply operation. Pressure, temperature, level and gas variants share the same enclosure and cloud path, so one gateway brings a whole site online. The edge gateway handles 4G, Wi-Fi and broadband uplinks, protocol parsing, TLS-encrypted transport and local configuration, and is the piece that turns raw sensor traffic into data your SCADA or dashboard can use.",
    measures: ["Pressure", "Temperature", "Level", "Gas concentration"],
    outputs: ["4G", "LoRa", "NB-IoT", "RS485 Modbus RTU", "I²C", "0.25–2.5 V"],
  },
  {
    slug: "motion",
    name: "Motion, Photoelectric & Metering",
    shortName: "Motion & Metering",
    tagline: "Encoders, laser displacement sensors, load cells and power meters",
    intro:
      "The instruments that sit around a machine rather than inside the process. The HSM41 laser displacement sensor resolves 50 mm to 400 mm with a 655 nm spot, and a TOF variant reaches 2.5 m or 4 m on an infrared beam — used for dispensing, packaging, pharmaceutical filling and AGV guidance. The incremental encoder gives 2048 PPR on a hollow shaft for speed and position feedback. The HS101 and HS-201 load cells measure tension and compression from 5 kN to 5000 kg. The BDL50 power meter brings three-phase metering into the same DIN-rail cabinet.",
    measures: ["Position", "Speed", "Force / weight", "Electrical energy"],
    outputs: ["Push-pull / TTL", "4–20 mA", "0–10 V", "mV/V", "RS485 Modbus"],
  },
];

const categoryIndex = new Map(categories.map((c) => [c.slug, c]));

export function getCategory(slug: string): Category | undefined {
  return categoryIndex.get(slug as Category["slug"]);
}

export function isCategorySlug(slug: string): boolean {
  return categoryIndex.has(slug as Category["slug"]);
}
