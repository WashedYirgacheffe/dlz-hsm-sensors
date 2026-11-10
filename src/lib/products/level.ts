import type { Product } from "@/lib/content-types";

/**
 * Level products. Seventeen models across six measuring principles:
 * float switch, magnetic gauge, magnetic-induction transmitter,
 * magnetostrictive transmitter, hydrostatic (submersible) transmitter,
 * capacitive transmitter, plus one microwave switch for non-contact duty.
 */
export const levelProducts: readonly Product[] = [
  {
    slug: "hws10-float-level-switch",
    model: "HWS10",
    name: "Rod Float Level Switch",
    variant: "1–4 set-points",
    category: "level",
    summary:
      "Discrete level switch with one to four magnetic reed points on a stainless guide rod. Passive dry contacts need no power supply, and the reed elements never touch the liquid. Rod diameter 9–25 mm, pressure to 6.3 MPa, temperature to 150 °C.",
    intro:
      "The HWS10 places one or more magnetic reed elements inside a stainless guide rod; a float carrying a permanent magnet rides up and down the rod and closes each reed as it passes. Because the contact is passive, the switch needs no supply — two wires are enough. The reed element is sealed inside the rod, so it never sees the medium; only stainless steel does. Up to four points can be positioned anywhere along the rod to your drawing, which makes one instrument do the job of several. Simple, with no electronics to drift and nothing to calibrate.",
    highlights: [
      "Passive dry contact — no power supply needed",
      "Reed elements sealed inside the rod, never wetted",
      "1–4 independently positioned set-points",
      "Rod and float in SUS 304 or 316L",
      "Maintenance-free, no calibration",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "To customer specification" },
          { label: "Set-points", value: "1–4, positions to customer drawing" },
          { label: "Media", value: "Water, oil and similar liquids" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Contact rating", value: "10 W" },
          { label: "Contact resistance", value: "Max. 0.2 Ω" },
          { label: "Insulation resistance", value: "100 MΩ at 500 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Working pressure", value: "0–6.3 MPa" },
          { label: "Medium temperature", value: "−20 to +150 °C" },
          { label: "Rod diameter", value: "Φ9 mm – Φ25 mm" },
          { label: "Rod / float / flange material", value: "SUS 304 or 316L" },
          { label: "Terminal box", value: "Aluminium alloy" },
          { label: "Mounting", value: "Flange or thread" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/hws10-float-level-switch.jpg",
    applications: [
      "Tank high and low level alarm",
      "Pump start/stop on sumps and reservoirs",
      "Oil level monitoring in hydraulic reservoirs",
      "Multi-point batching in mixing vessels",
    ],
    legacyPath: "/productinfo/1536043.html",
  },
  {
    slug: "hws20-float-level-switch",
    model: "HWS20",
    name: "Rod Float Level Switch",
    variant: "Extended body",
    category: "level",
    summary:
      "The HWS20 shares the HWS10's reed-on-rod principle with a longer, heavier-duty body for deeper tanks and wider mounting spans. Same passive dry-contact output, 1–4 set-points, 6.3 MPa and 150 °C ratings.",
    intro:
      "Where the HWS10 mounts close to the vessel, the HWS20 extends the rod and terminal arrangement for tanks with thick insulation or long nozzles. The sensing principle is unchanged: a magnetic float trips sealed reed elements inside a stainless rod, producing passive dry contacts with no supply wiring. Up to four points can be set to your drawing, each with a separate pair of wires, and the wetted parts are all stainless so the switch tolerates water, oil and mildly aggressive media.",
    highlights: [
      "Longer body for insulated or deep tanks",
      "Passive dry contact, no power required",
      "1–4 custom-positioned set-points",
      "All-stainless wetted path",
      "No calibration, no electronics to drift",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "To customer specification" },
          { label: "Set-points", value: "1–4, positions to customer drawing" },
          { label: "Media", value: "Water, oil and similar liquids" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Contact rating", value: "10 W" },
          { label: "Contact resistance", value: "Max. 0.2 Ω" },
          { label: "Insulation resistance", value: "100 MΩ at 500 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Working pressure", value: "0–6.3 MPa" },
          { label: "Medium temperature", value: "−20 to +150 °C" },
          { label: "Rod diameter", value: "Φ9 mm – Φ25 mm" },
          { label: "Rod / float / flange material", value: "SUS 304 or 316L" },
          { label: "Terminal box", value: "Aluminium alloy" },
          { label: "Mounting", value: "Flange or thread" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/hws20-float-level-switch.jpg",
    applications: [
      "Deep tanks with long mounting nozzles",
      "Insulated process vessels",
      "Reservoir and sump level control",
    ],
    legacyPath: "/productinfo/1536044.html",
  },
  {
    slug: "hls01-cable-float-switch",
    model: "HLS01",
    name: "Cable Float Level Switch",
    variant: "SPDT, 15 A",
    category: "level",
    summary:
      "Injection-moulded float on a flexible rubber cable, switching 15 A at 250 V AC through an SPDT contact. Suits long cable runs, multiple points on one drop, submersible pumps and media carrying granular solids. IP68, specific gravity above 0.6.",
    intro:
      "The HLS01 hangs a sealed float from a rubber cable. As the liquid rises the float tilts, a steel ball inside rolls and operates a microswitch, and the SPDT contact changes state. The 15 A rating is high enough to switch a pump directly, without a contactor, which is unusual for a float of this size. Because the float is small and the cable flexible, several can be hung at different depths on one drop to give multi-point control. It tolerates granular and lumpy media that would jam a guided float, and the cord grip and moulding are rated IP68.",
    highlights: [
      "Switches 15 A / 250 V AC directly — no contactor needed",
      "Suitable for granular and lumpy media",
      "Multiple floats on one cable for multi-point control",
      "Rubber cable resists acid and alkali",
      "IP68 sealed, submersible",
    ],
    specs: [
      {
        title: "Electrical",
        rows: [
          { label: "Contact rating", value: "15 A at 250 V AC" },
          { label: "Contact form", value: "SPDT" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Material", value: "Polypropylene, SUS 304" },
          { label: "Rated pressure", value: "0–0.5 MPa" },
          { label: "Cable", value: "Rubber-sheathed" },
          { label: "Medium temperature", value: "−10 to +80 °C" },
          { label: "Minimum specific gravity", value: "> 0.6 g/cm³" },
          { label: "Ingress protection", value: "IP68" },
        ],
      },
    ],
    image: "/images/products/hls01-cable-float-switch.jpg",
    applications: [
      "Submersible pump control in dirty sumps",
      "Sewage and wastewater wet wells",
      "Water towers and cisterns",
      "Long-distance or multi-point level control",
    ],
    legacyPath: "/productinfo/1536048.html",
  },
  {
    slug: "hts11-magnetic-level-gauge-top",
    model: "HTS11",
    name: "Magnetic Level Gauge",
    variant: "Top-mounted",
    category: "level",
    summary:
      "Direct-reading magnetic flip gauge for top mounting, 200–6000 mm range, 10 MPa and up to 450 °C. Red-and-white flip column needs no power; a 4–20 mA transmitter and magnetic memory switches can be added for remote indication and alarms.",
    intro:
      "A magnetic level gauge is a manometer with a magnetic twist: a float inside the chamber carries a magnet, and that magnet flips small bicolour vanes on the outside as the level moves. The boundary between red and white is the level. No power, no electronics, nothing to drift — an operator reads it through a window and trusts it. The HTS11 is the top-mounted pattern for vessels where the side is obstructed. Add the optional 4–20 mA transmitter for a control-room signal and magnetic memory switches for alarms, and the same instrument covers local and remote indication. Rated to 10 MPa and available for media up to 450 °C.",
    highlights: [
      "Reads directly — no power required, nothing to drift",
      "Range 200–6000 mm, pressure to 10 MPa",
      "Available for media up to 450 °C",
      "Optional 4–20 mA transmitter for remote indication",
      "Optional magnetic memory switches for alarms",
      "Luminous vanes available for night reading",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "200–6000 mm" },
          { label: "Vane resolution", value: "10 mm" },
          { label: "Analogue output (option)", value: "4–20 mA, two-wire" },
          { label: "Analogue resolution", value: "5 mm" },
          { label: "Media", value: "Water, oil and similar liquids" },
        ],
      },
      {
        title: "Electrical (options)",
        rows: [
          { label: "Alarm switch", value: "Magnetic memory switch" },
          { label: "Alarm contact rating", value: "40 W" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Working pressure", value: "0–10 MPa" },
          { label: "Medium temperature", value: "80 °C / 120 °C / 180 °C / 450 °C versions" },
          { label: "Body / float / flange material", value: "SUS 304 or 316L" },
          { label: "Terminal box", value: "Aluminium alloy" },
          { label: "Mounting", value: "Flange" },
          { label: "Ingress protection", value: "IP66" },
        ],
      },
    ],
    image: "/images/products/hts11-magnetic-level-gauge-top.jpg",
    applications: [
      "Boiler drums and feedwater tanks",
      "Chemical storage where power is not available at the vessel",
      "High-temperature oil and heat-transfer systems",
      "Tanks where a sight glass is not permitted",
    ],
    legacyPath: "/productinfo/1536050.html",
  },
  {
    slug: "hts22-magnetic-level-gauge-side",
    model: "HTS22",
    name: "Magnetic Level Gauge",
    variant: "Side-mounted",
    category: "level",
    summary:
      "Side-mounted direct-reading magnetic flip gauge, 200–6000 mm, 10 MPa, up to 450 °C. Flange or threaded connection, optional 4–20 mA output and magnetic memory switches. Explosion-proof and corrosion-resistant construction for hazardous and high-pressure service.",
    intro:
      "The side-mounted pattern is the standard arrangement for a vertical tank with accessible side nozzles. A float in the chamber follows the liquid, its magnet flips the external bicolour vanes, and the red/white boundary is the level. Because the chamber is sealed and the vanes are outside it, the gauge suits flammable, high-pressure and high-temperature service where a glass sight glass would be a risk. The optional transmitter gives a 4–20 mA signal, and magnetic memory switches latch at set levels so an alarm stays on after the level has passed.",
    highlights: [
      "Side-mounted, direct reading, no power required",
      "Rated to 10 MPa and 450 °C",
      "Suitable for flammable and explosive service",
      "Optional 4–20 mA transmitter and latching alarm switches",
      "Flange or threaded connection",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "200–6000 mm" },
          { label: "Vane resolution", value: "10 mm" },
          { label: "Analogue output (option)", value: "4–20 mA, two-wire" },
          { label: "Analogue resolution", value: "5 mm" },
          { label: "Media", value: "Water, oil and similar liquids" },
        ],
      },
      {
        title: "Electrical (options)",
        rows: [
          { label: "Alarm switch", value: "Magnetic memory switch" },
          { label: "Alarm contact rating", value: "40 W" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Working pressure", value: "0–10 MPa" },
          { label: "Medium temperature", value: "80 °C / 120 °C / 180 °C / 450 °C versions" },
          { label: "Body / float / flange material", value: "SUS 304 or 316L" },
          { label: "Terminal box", value: "Aluminium alloy" },
          { label: "Mounting", value: "Flange or thread" },
          { label: "Ingress protection", value: "IP66" },
        ],
      },
    ],
    image: "/images/products/hts22-magnetic-level-gauge-side.jpg",
    applications: [
      "Chemical reactors and storage tanks",
      "High-pressure separators",
      "Flammable liquid storage",
      "Steam and condensate vessels",
    ],
    legacyPath: "/productinfo/1536051.html",
  },
  {
    slug: "hwt10-magnetic-level-transmitter",
    model: "HWT10",
    name: "Magnetic Induction Level Transmitter",
    variant: "Continuous, 4–20 mA",
    category: "level",
    summary:
      "Continuous level transmitter using a chain of magnetic reed modules inside a stainless guide tube. Range to 3000 mm, 4–20 mA two-wire output, 5 mm resolution, 750 Ω load. Explosion-proof aluminium housing, IP67, flange or threaded mounting.",
    intro:
      "Instead of separate switch points, the HWT10 fills the guide tube with a series of reed modules and precision resistors. A magnetic float closes the reeds at its own height, and the resulting resistance is converted to a continuous 4–20 mA signal proportional to level. The electronics live inside an explosion-proof aluminium housing, and the tube and float are 316L or 304 stainless, so the instrument suits fuel and chemical tanks as well as water. There is no capacitive drift and no ultrasonic dead zone; the output follows the float directly.",
    highlights: [
      "Continuous 4–20 mA output, two-wire",
      "Range up to 3000 mm, 5 mm resolution",
      "Explosion-proof aluminium housing",
      "All-stainless wetted parts, 316L or 304",
      "Unaffected by foam, vapour or dielectric change",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "0–3000 mm" },
          { label: "Resolution", value: "5 mm" },
          { label: "Output", value: "4–20 mA DC" },
          { label: "Load impedance", value: "750 Ω" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V (12–36 V)" },
          { label: "Power consumption", value: "≤ 0.72 W" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Working temperature", value: "−10 to +100 °C" },
          { label: "Working pressure", value: "0–1 MPa, or to customer specification" },
          { label: "Guide tube diameter", value: "Φ9 – Φ25 mm" },
          { label: "Tube material", value: "Stainless steel 316L / 304" },
          { label: "Housing material", value: "Aluminium alloy" },
          { label: "Connection", value: "Flange or thread" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/hwt10-magnetic-level-transmitter.jpg",
    applications: [
      "Fuel and lube oil tank gauging",
      "Chemical storage with flammable contents",
      "Water and wastewater level control",
      "Tanks where ultrasonic or radar would be defeated by foam",
    ],
    legacyPath: "/productinfo/1536055.html",
  },
  {
    slug: "hwt20-magnetic-level-transmitter-display",
    model: "HWT20",
    name: "Magnetic Induction Level Transmitter",
    variant: "Local LCD display",
    category: "level",
    summary:
      "Reed-chain level transmitter with a local LCD head showing the level on the vessel. 0–3000 mm, 4–20 mA or 1–5 V output, 5 mm resolution, explosion-proof housing, IP67. Suits tanks where operators need a local readout as well as a control-room signal.",
    intro:
      "The HWT20 is the HWT10 with an LCD head. The measuring element is the same reed-and-resistor chain, so the output follows the float with no drift and no dead zone, but the technician standing at the tank can read the level directly instead of trusting that the signal is right. Output is 4–20 mA or 1–5 V, both with 750 Ω load capability, and the aluminium housing is explosion-proof for flammable service.",
    highlights: [
      "Local LCD display plus remote signal",
      "Continuous output, 4–20 mA or 1–5 V",
      "Explosion-proof housing",
      "Range up to 3000 mm, 5 mm resolution",
      "No drift, no dead zone",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "0–3000 mm" },
          { label: "Resolution", value: "5 mm" },
          { label: "Output", value: "4–20 mA or 1–5 V" },
          { label: "Load impedance", value: "750 Ω" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V (12–36 V)" },
          { label: "Power consumption", value: "≤ 0.72 W" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Working temperature", value: "−10 to +100 °C" },
          { label: "Working pressure", value: "0–1 MPa, or to customer specification" },
          { label: "Guide tube diameter", value: "Φ9 – Φ25 mm" },
          { label: "Tube material", value: "Stainless steel 316L / 304" },
          { label: "Housing material", value: "Aluminium alloy" },
          { label: "Connection", value: "Flange or thread" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/hwt20-magnetic-level-transmitter-display.jpg",
    applications: [
      "Tanks where operators take manual dips",
      "Fuel depots with local and central indication",
      "Water treatment chemical tanks",
    ],
    legacyPath: "/productinfo/1536056.html",
  },
  {
    slug: "hwt2088-magnetic-level-controller",
    model: "HWT2088",
    name: "Magnetic Induction Level Controller",
    variant: "4 relay outputs",
    category: "level",
    summary:
      "Reed-chain level transmitter with four configurable relay outputs, bright LED display and keypad-set alarm points. 0–3000 mm range, 4–20 mA or 1–5 V output, IP67. Replaces a transmitter plus separate alarm module.",
    intro:
      "The HWT2088 adds a controller to the reed-chain transmitter: four relays, each with an alarm point set from the front keypad, alongside the standard analogue output. That means a single instrument can start and stop a pump, raise high and low alarms, and still feed a 4–20 mA signal to the control room, without a separate trip amplifier. The LED display is readable in daylight, and the settings are changed by key rather than by internal jumpers, so a change of duty does not need the housing opened.",
    highlights: [
      "Four relay outputs with keypad-set alarm points",
      "Bright LED display readable in daylight",
      "4–20 mA or 1–5 V analogue output in parallel",
      "Explosion-proof housing",
      "Settings changed without opening the housing",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "0–3000 mm" },
          { label: "Resolution", value: "5 mm" },
          { label: "Output", value: "4–20 mA or 1–5 V" },
          { label: "Alarm outputs", value: "4 relays" },
          { label: "Load impedance", value: "750 Ω" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V (12–36 V)" },
          { label: "Power consumption", value: "≤ 2 W" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Working temperature", value: "−10 to +100 °C" },
          { label: "Working pressure", value: "0–1 MPa, or to customer specification" },
          { label: "Guide tube diameter", value: "Φ9 – Φ25 mm" },
          { label: "Tube material", value: "Stainless steel 316L / 304" },
          { label: "Housing material", value: "Aluminium alloy" },
          { label: "Connection", value: "Flange or thread" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/hwt2088-magnetic-level-controller.jpg",
    applications: [
      "Pump control with high and low cut-outs from one probe",
      "Tank farms without a dedicated PLC",
      "Chemical dosing tank level interlock",
    ],
    legacyPath: "/productinfo/1536057.html",
  },
  {
    slug: "hwt100-magnetic-level-controller",
    model: "HWT100",
    name: "Magnetic Induction Level Controller",
    variant: "5 relays, dual supply",
    category: "level",
    summary:
      "Five relay outputs plus 4–20 mA or 1–5 V, keypad-configured, with dual 24 V DC / 220 V AC supply so it can be wired straight into an existing panel. LED display, IP67, range to 3000 mm.",
    intro:
      "The HWT100 is the top of the magnetic-induction range: five relays instead of four, and a supply that accepts either 24 V DC or 220 V AC. That dual supply matters in retrofit work, where the panel may only have a 220 V rail available and adding a 24 V power supply is an extra component and an extra failure point. Everything else follows the family: reed-chain measurement, LED display, keypad-set points, and a parallel analogue output.",
    highlights: [
      "Five relay outputs",
      "Accepts 24 V DC or 220 V AC supply",
      "Keypad-set alarm points",
      "Parallel 4–20 mA or 1–5 V output",
      "IP67 aluminium housing",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "0–3000 mm" },
          { label: "Resolution", value: "5 mm" },
          { label: "Output", value: "4–20 mA or 1–5 V" },
          { label: "Alarm outputs", value: "5 relays" },
          { label: "Load impedance", value: "750 Ω" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V or AC-DC 220 V" },
          { label: "Power consumption", value: "≤ 3 W" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Working temperature", value: "−10 to +100 °C" },
          { label: "Working pressure", value: "0–1 MPa, or to customer specification" },
          { label: "Guide tube diameter", value: "Φ9 – Φ25 mm" },
          { label: "Tube material", value: "Stainless steel 316L / 304" },
          { label: "Housing material", value: "Aluminium alloy" },
          { label: "Connection", value: "Flange or thread" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/hwt100-magnetic-level-controller.jpg",
    applications: [
      "Retrofit into panels with only a 220 V rail",
      "Multi-stage pump sequencing",
      "Tank high-high, high, low and low-low interlocks",
    ],
    legacyPath: "/productinfo/1536059.html",
  },
  {
    slug: "hms10-magnetostrictive-level-transmitter",
    model: "HMS10",
    name: "Magnetostrictive Level Transmitter",
    variant: "High accuracy",
    category: "level",
    summary:
      "Non-contact magnetostrictive level transmitter, 50–5000 mm, with 0.005 % FS non-linearity and 0.002 % FS repeatability — an order of magnitude better than reed-chain instruments. 4–20 mA, 0–10 V or RS485 output, explosion-proof, IP67.",
    intro:
      "Magnetostrictive measurement sends a current pulse down a waveguide and times the return twist produced where the float's magnet sits. There is no contact between the float and the sensing element, so nothing wears and accuracy does not degrade with use — non-linearity is 0.005 % FS and repeatability 0.002 % FS, which is roughly ten times better than a reed chain. Because the waveguide reports position and velocity, the same instrument can serve custody-transfer-adjacent duties and interface measurement in a tank with two liquids. Explosion-proof construction and a 316 stainless rod make it suitable for fuel and chemical service.",
    highlights: [
      "0.005 % FS non-linearity, 0.002 % FS repeatability",
      "Non-contact — nothing to wear",
      "4–20 mA, 0–10 V or RS485 output",
      "Explosion-proof, IP67",
      "Also reports velocity and interface",
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
          { label: "Working temperature", value: "−25 to +80 °C" },
          { label: "Storage temperature", value: "−40 to +100 °C" },
          { label: "Rod material", value: "304 / 316 stainless steel" },
          { label: "Electronic head", value: "304 / 316 stainless steel" },
          { label: "Explosion protection", value: "Exd IIB T (flameproof)" },
          { label: "Ingress protection", value: "IP67" },
        ],
      },
    ],
    image: "/images/products/hms10-magnetostrictive-level-transmitter.jpg",
    applications: [
      "Fuel and solvent tank gauging",
      "Interface measurement between two liquids",
      "High-accuracy process vessels",
      "Tanks where drift-free measurement is required",
    ],
    legacyPath: "/productinfo/1536061.html",
  },
  {
    slug: "hps10-submersible-level-transmitter",
    model: "HPS10",
    name: "Submersible Level Transmitter",
    variant: "Hydrostatic, IP68",
    category: "level",
    summary:
      "Hydrostatic level transmitter for wells, reservoirs and sumps. Range 0.05–300 m, 4–20 mA two-wire, 0.1 or 0.2 accuracy class, ceramic-capacitive or piezoresistive sensor. Ventilated cable prevents condensation, IP68.",
    intro:
      "The HPS10 measures hydrostatic head: the pressure at the bottom of a column of liquid is proportional to its height, so a pressure sensor lowered to the bottom of a well reads the level directly once you enter the density. The ceramic-capacitive element is temperature-compensated and linearised before the 4–20 mA conversion, and the accuracy class is 0.1 or 0.2. A ventilated cable equalises the reference side with atmosphere so barometric changes do not appear as level changes, and the vent design resists condensation, which is the usual failure mode for submersible transmitters in cool wells.",
    highlights: [
      "Range 0.05–300 m",
      "Accuracy class 0.1 or 0.2",
      "Ventilated cable for accurate atmospheric reference",
      "Condensation-resistant vent design",
      "IP68, fully submersible",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "0.05–300 m" },
          { label: "Accuracy class", value: "0.1 or 0.2" },
          { label: "Response time", value: "1.0 ms" },
          { label: "Temperature effect", value: "0.03 % FS/°C" },
          { label: "Long-term stability", value: "0.2 % FS/year" },
          { label: "Safe overload", value: "5× range (ceramic-capacitive); 2× range (piezoresistive)" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V (12–32 V)" },
          { label: "Output", value: "4–20 mA" },
          { label: "Load impedance", value: "750 Ω" },
          { label: "Insulation resistance", value: "≥ 100 MΩ at 100 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Medium temperature", value: "−20 to +80 °C" },
          { label: "Ambient humidity", value: "0–100 % RH" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Ingress protection", value: "IP68" },
        ],
      },
    ],
    image: "/images/products/hps10-submersible-level-transmitter.jpg",
    applications: [
      "Deep wells and boreholes",
      "Reservoirs and dams",
      "Sump and wet-well level",
      "Canal and river gauging",
    ],
    notes: [
      "Enter the medium density into the calibration; a transmitter set for water will over-read in brine and under-read in light hydrocarbons.",
    ],
    legacyPath: "/productinfo/1536063.html",
  },
  {
    slug: "hps20-submersible-level-transmitter-display",
    model: "HPS20",
    name: "Submersible Level Transmitter",
    variant: "Local display",
    category: "level",
    summary:
      "The HPS10 hydrostatic transmitter with a local display head, so the level can be read at the well head. 0.05–300 m, 4–20 mA, accuracy class 0.1 or 0.2, IP68 probe, condensation-resistant vent.",
    intro:
      "Same hydrostatic sensing element as the HPS10, with a display in the head so the reading is visible where the cable is terminated. In practice that saves the maintenance technician from carrying a multimeter to every well to check whether the transmitter is alive, and it makes hydrostatic readings comparable with a manual dip without opening the control cabinet.",
    highlights: [
      "Local display at the cable head",
      "Range 0.05–300 m",
      "Accuracy class 0.1 or 0.2",
      "4–20 mA two-wire output",
      "IP68 submersible probe",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Range", value: "0.05–300 m" },
          { label: "Accuracy class", value: "0.1 or 0.2" },
          { label: "Response time", value: "1.0 ms" },
          { label: "Temperature effect", value: "0.03 % FS/°C" },
          { label: "Long-term stability", value: "0.2 % FS/year" },
          { label: "Safe overload", value: "5× range (ceramic-capacitive); 2× range (piezoresistive)" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V (12–32 V)" },
          { label: "Output", value: "4–20 mA" },
          { label: "Load impedance", value: "750 Ω" },
          { label: "Insulation resistance", value: "≥ 100 MΩ at 100 V DC" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Medium temperature", value: "−20 to +80 °C" },
          { label: "Ambient humidity", value: "0–100 % RH" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Ingress protection", value: "IP68" },
        ],
      },
    ],
    image: "/images/products/hps20-submersible-level-transmitter-display.jpg",
    applications: [
      "Well heads without a control panel",
      "Reservoir monitoring where local verification is required",
      "Sump level with on-site reading",
    ],
    legacyPath: "/productinfo/1536064.html",
  },
  {
    slug: "hps2088-submersible-level-controller",
    model: "HPS2088",
    name: "Submersible Level Controller",
    variant: "4 relays",
    category: "level",
    summary:
      "Submersible hydrostatic transmitter with a 24-bit A/D front end, LED display, four relay outputs and 4–20 mA / 0–10 V / 1–5 V analogue output. Range 0.5–300 m, alarm points set from the keypad, stainless and aluminium housing.",
    intro:
      "The HPS2088 puts the measurement and the control in the same head: a hydrostatic probe feeds a 24-bit A/D converter, the microcontroller linearises and displays the depth, and four relays act on your alarm points. For a pump station that otherwise needs a transmitter plus a separate level relay, that is one instrument instead of two, and one calibration instead of two that can disagree. Analogue output is selectable between 4–20 mA, 0–10 mA, 0–10 V and 0–5 V.",
    highlights: [
      "24-bit A/D conversion",
      "Four relay outputs with keypad-set points",
      "Selectable 4–20 mA, 0–10 mA, 0–10 V or 0–5 V output",
      "LED display, 4 readings per second",
      "Range 0.5–300 m",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "0.5–300 m" },
          { label: "Sensor type", value: "Piezoresistive or ceramic piezoresistive" },
          { label: "Accuracy class", value: "0.2 or 0.5" },
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
          { label: "Relay rating", value: "5 A at 250 V AC, 5 A at 30 V DC" },
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
          { label: "Connection", value: "Flange or thread" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/hps2088-submersible-level-controller.jpg",
    applications: [
      "Pump stations needing level control without a PLC",
      "Reservoir high and low alarm with pump start/stop",
      "Wet wells with duty/standby sequencing",
    ],
    legacyPath: "/productinfo/1536066.html",
  },
  {
    slug: "hps100-pressure-controller",
    model: "HPS100",
    name: "Submersible Level / Pressure Controller",
    variant: "5 relays, RS485",
    category: "level",
    summary:
      "Five relay outputs plus RS485 Modbus and selectable analogue output, in the 100 mm round case. 0.5–300 m range, dual 24 V DC / 110–220 V AC-DC supply, high-brightness dual-row LED. For pump control with remote supervision.",
    intro:
      "The HPS100 is the communications-equipped member of the family: five relays, RS485 Modbus for supervisory systems, and a 24 V DC or 110–220 V AC-DC supply so it can be dropped into an existing panel. The 100 mm round case takes the place of a standard pressure gauge, which makes it a straightforward retrofit where a mechanical gauge currently sits and someone has to walk out and read it. Dual-row LED display shows live value and set-points at the same time.",
    highlights: [
      "Five relays plus RS485 Modbus",
      "Dual-row high-brightness LED display",
      "Drops into a standard 100 mm gauge cut-out",
      "Accepts 24 V DC or 110–220 V AC-DC",
      "Range 0.5–300 m",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "0.5–300 m" },
          { label: "Sensor type", value: "Piezoresistive, ceramic piezoresistive or ceramic capacitive" },
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
          { label: "Supply voltage", value: "DC 24 V, AC-DC 110 V, AC-DC 220 V" },
          { label: "Power consumption", value: "≤ 5 W" },
          {
            label: "Analogue output",
            value: "4–20 mA / 0–10 or 20 mA / 0–5 or 1–5 V DC",
          },
          { label: "Relay outputs", value: "5 pairs" },
          { label: "Relay rating", value: "3 A at 250 V AC, 3 A at 30 V DC" },
          { label: "Relay life", value: "> 100 000 operations" },
          { label: "Communications", value: "RS485" },
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
          { label: "Connection", value: "Flange or thread" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/hps100-pressure-controller.jpg",
    applications: [
      "Replacing mechanical pressure gauges with a switched, reporting instrument",
      "Pump control with SCADA supervision",
      "Water network pressure and level monitoring",
    ],
    legacyPath: "/productinfo/1536069.html",
  },
  {
    slug: "hct100-capacitive-level-controller",
    model: "HCT100",
    name: "Capacitive Level Controller",
    variant: "5 relays, RS485",
    category: "level",
    summary:
      "Coaxial capacitive level transmitter and controller, 100–5000 mm, with 24-bit A/D, five relays, RS485 Modbus and selectable analogue output. Handles viscous and coating media where float instruments would seize. 316 stainless probe.",
    intro:
      "Capacitance measurement uses the medium itself as the dielectric between two coaxial electrodes. As the level rises, more of the probe is immersed, the capacitance changes, and the electronics convert that to a level. There is no float to jam and nothing that needs to move, which is why capacitive instruments are used on slurries, viscous products and media that coat — the three cases where a float switch stops working. The 24-bit front end resolves the small capacitance change, and five relays plus RS485 cover both local control and supervisory reporting.",
    highlights: [
      "No moving parts — suits viscous and coating media",
      "24-bit A/D for small capacitance changes",
      "Five relays plus RS485 Modbus",
      "Range 100–5000 mm",
      "316 stainless probe, IP65 housing",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "100–5000 mm" },
          { label: "Sensor type", value: "Coaxial capacitance" },
          { label: "Accuracy class", value: "0.2 or 0.5" },
          { label: "Sampling rate", value: "4 readings per second" },
          { label: "Display range", value: "−1999 to 9999" },
          { label: "Long-term stability", value: "0.5 % FS/year" },
          { label: "Power supply effect", value: "≤ 0.1 % FS" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V, AC-DC 110 V, AC-DC 220 V" },
          { label: "Power consumption", value: "≤ 3 W" },
          {
            label: "Analogue output",
            value: "4–20 mA / 0–10 or 20 mA / 0–5 or 1–5 V DC",
          },
          { label: "Relay outputs", value: "5 pairs" },
          { label: "Relay rating", value: "5 A at 250 V AC, 5 A at 30 V DC" },
          { label: "Relay life", value: "> 100 000 operations" },
          { label: "Communications", value: "RS485" },
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
          { label: "Housing material", value: "Aluminium alloy" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Connection", value: "G1/2, M20×1.5 or to order" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/hct100-capacitive-level-controller.jpg",
    applications: [
      "Viscous and paste-like products",
      "Slurries and suspensions",
      "Media that coat or crystallise on metal",
      "Chemical tanks with aggressive contents",
    ],
    notes: [
      "The dielectric constant of the medium affects the reading; a calibration on the actual product is required, not on water.",
    ],
    legacyPath: "/productinfo/1536075.html",
  },
  {
    slug: "hct40-capacitive-level-controller",
    model: "HCT40",
    name: "Capacitive Level Controller",
    variant: "2 relays",
    category: "level",
    summary:
      "Coaxial capacitive level controller with two relay outputs, LED display and 24-bit A/D. 100–5000 mm, 4–20 mA / 0–10 V / 1–5 V selectable, stainless probe. The compact option for simple high/low control on viscous media.",
    intro:
      "A two-relay version of the capacitive controller for duties that only need high and low: fill-and-drain on a small tank, high-level alarm plus low-level cut-out on a day tank. The measuring element is identical to the HCT100, so the same suitability for viscous and coating media applies, and the plastic or aluminium housing is lighter where the instrument is bracket-mounted rather than panel-mounted.",
    highlights: [
      "Two relay outputs for simple high/low duty",
      "No moving parts, suits coating media",
      "Range 100–5000 mm",
      "Plastic or aluminium housing",
      "Selectable analogue output",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "100–5000 mm" },
          { label: "Sensor type", value: "Coaxial capacitance" },
          { label: "Accuracy class", value: "0.2 or 0.5" },
          { label: "Sampling rate", value: "4 readings per second" },
          { label: "Display range", value: "−1999 to 9999" },
          { label: "Long-term stability", value: "0.5 % FS/year" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "DC 24 V, AC-DC 110 V, AC-DC 220 V" },
          { label: "Power consumption", value: "≤ 3 W" },
          {
            label: "Analogue output",
            value: "4–20 mA / 0–10 or 20 mA / 0–5 or 1–5 V DC",
          },
          { label: "Relay outputs", value: "2 pairs" },
          { label: "Relay rating", value: "5 A at 250 V AC, 5 A at 30 V DC" },
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
          { label: "Housing material", value: "Plastic or aluminium alloy" },
          { label: "Probe material", value: "Stainless steel" },
          { label: "Connection", value: "G1/2, M20×1.5 or to order" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
    ],
    image: "/images/products/hct40-capacitive-level-controller.jpg",
    applications: [
      "Day tanks and small mixing vessels",
      "High-level alarm with low-level pump cut-out",
      "Coating and viscous product level",
    ],
    legacyPath: "/productinfo/1536076.html",
  },
  {
    slug: "hsm-vb106-microwave-level-switch",
    model: "HSM-VB106 / VB107",
    name: "Microwave Level Switch",
    variant: "Non-contact through-wall",
    category: "level",
    summary:
      "Microwave resonance switch that detects level through the vessel wall, so nothing protrudes into the process. Works on solids and liquids with dielectric constant above 1.5, ignores foam, and tolerates sticky conductive build-up. PEEK and stainless wetted parts, 115 °C standard or 150 °C with heat sink.",
    intro:
      "The VB106/107 forms a high-frequency resonant circuit between its probe, its metal housing and the internal electronics. When medium covers the probe — or when the local dielectric constant changes — the resonant frequency shifts, and the unit compares the new frequency against your alarm setting. The consequence is a switch that does not care about foam, does not care about sticky or conductive build-up on the probe, and works on solids as well as liquids. Because it can be mounted to sense through the wall, it also serves hygienic vessels where a protruding probe would create a cleaning problem. PEEK and stainless are the wetted materials, so it holds up in food, pharmaceutical and industrial service.",
    highlights: [
      "Unaffected by foam",
      "Tolerates sticky and conductive build-up",
      "Works on solids and liquids with εr ≥ 1.5",
      "PEEK and stainless wetted parts for hygienic service",
      "Set-point and live value visible on site",
      "115 °C standard, 150 °C with heat sink",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Minimum dielectric constant", value: "≥ 1.5" },
          { label: "Media", value: "Solids and liquids" },
          { label: "Foam sensitivity", value: "None" },
          { label: "Adjustment", value: "Field-settable alarm point, live value shown" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "12–30 V DC" },
          { label: "Current consumption", value: "40 mA" },
          { label: "Output", value: "PNP or NPN" },
          { label: "Maximum external load", value: "20 mA" },
          { label: "Ambient temperature", value: "−40 to +85 °C" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Wetted materials", value: "PEEK and stainless steel" },
          { label: "Medium temperature", value: "115 °C standard; 150 °C with heat sink" },
        ],
      },
    ],
    image: "/images/products/hsm-vb106-microwave-level-switch.jpg",
    applications: [
      "Hygienic vessels where probes must not protrude",
      "Powder and granule bin high-level detection",
      "Pulp, slurry and coating media",
      "Vessels with heavy foam on the surface",
    ],
    legacyPath: "/productinfo/1607895.html",
  },
];
