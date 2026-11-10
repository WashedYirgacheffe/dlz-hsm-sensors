import type { Product } from "@/lib/content-types";

export const analyticalProducts: readonly Product[] = [
  {
    slug: "dog200-dissolved-oxygen-meter",
    model: "HSM-DOG200",
    name: "Dissolved Oxygen Meter",
    variant: "Panel-mount, 96 × 96",
    category: "analytical",
    summary:
      "Panel-mount dissolved oxygen transmitter reading 0–19.99 mg/L or 0–199.9 %, with automatic temperature compensation, isolated 4–20 mA output and dual relay control. 96 × 96 mm DIN case, 230 V AC supply.",
    intro:
      "The DOG200 drives a polarographic dissolved oxygen electrode and displays the result in mg/L or percent saturation. It handles the compensation aeration processes actually need: temperature compensation from 0 to 65 °C, and an isolated 4–20 mA output so the signal reaching the PLC does not carry the plant's earth noise. Two relays with adjustable set-points can run a blower or an alarm directly. The 96 × 96 mm cut-out is the standard panel instrument size, which means it drops into an existing cut-out.",
    highlights: [
      "Reads 0–19.99 mg/L or 0–199.9 % saturation",
      "Automatic temperature compensation 0–65 °C",
      "Isolated 4–20 mA output",
      "Two ON/OFF relay outputs",
      "Standard 96 × 96 mm panel cut-out",
      "Ten-year parameter retention without backup battery",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "0.00–19.99 mg/L; 0.0–199.9 %" },
          { label: "Resolution", value: "0.01 mg/L; 0.01 %" },
          { label: "Accuracy", value: "±1.5 % FS" },
          { label: "Control range", value: "0.00–19.99 mg/L; 0.0–199.9 %" },
          { label: "Temperature compensation", value: "0–65 °C" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply voltage", value: "230 V AC ±10 %, 50/60 Hz" },
          { label: "Output", value: "Isolated 4–20 mA" },
          { label: "Output load", value: "Max. 500 Ω" },
          { label: "Control output", value: "ON/OFF relay contacts" },
          { label: "Relay rating", value: "5 A at 230 V AC; 10 A at 115 V AC" },
          { label: "Isolation", value: "500 V DC minimum to earth" },
        ],
      },
      {
        title: "Mechanical and environment",
        rows: [
          { label: "Dimensions", value: "96 × 96 × 115 mm" },
          { label: "Panel cut-out", value: "91 × 91 mm" },
          { label: "Weight", value: "1 kg" },
          { label: "Ambient temperature", value: "5–55 °C" },
          { label: "Relative humidity", value: "≤ 80 %" },
          { label: "Magnetic environment", value: "No strong field beyond the earth's" },
        ],
      },
    ],
    image: "/images/products/dog200-dissolved-oxygen-meter.jpg",
    gallery: ["/images/products/dog200-dissolved-oxygen-meter-2.jpg"],
    applications: [
      "Activated sludge aeration control",
      "Aquaculture and fish-farm oxygen monitoring",
      "Boiler feedwater deaeration",
      "Beverage and brewing process water",
    ],
    legacyPath: "/productinfo/1534456.html",
  },
  {
    slug: "dog-208fa-dissolved-oxygen-electrode",
    model: "DOG-208FA",
    name: "Dissolved Oxygen Electrode",
    variant: "Steam-sterilisable, 130 °C",
    category: "analytical",
    summary:
      "Polarographic dissolved oxygen electrode that withstands 130 °C steam sterilisation, with a self-pressure-balancing design and an imported BJC membrane. 0.01–20 ppm range, 10 s response, 12 mm insertion diameter in 120, 280 or 450 mm lengths.",
    intro:
      "The DOG-208FA is built for bioreactors and fermenters, where the electrode has to survive repeated steam-in-place cycles and still hold calibration. The pressure-balancing construction prevents the membrane from being pushed off its seat when the vessel is pressurised, which is the usual failure mode for an ordinary electrode in a fermenter. The membrane head is an imported BJC type, and the body is stainless with a built-in NTC thermistor for temperature compensation, so the transmitter does not need a separate probe in the same vessel.",
    highlights: [
      "Withstands 130 °C steam sterilisation",
      "Self-pressure-balancing — membrane stays seated",
      "Imported BJC membrane head",
      "Built-in 22 kΩ NTC temperature sensor",
      "Insertion lengths 120, 280 or 450 mm",
      "Response about 10 s to 95 %",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Operating range", value: "0.01–20 ppm" },
          { label: "Response time", value: "About 10 s to 95 % (rising)" },
          { label: "Response current in air", value: "About 60 nA" },
          { label: "Response current in nitrogen", value: "< 1 % of the in-air value" },
          { label: "Stability", value: "Drift < 3 % per week at constant temperature and oxygen partial pressure" },
          { label: "Stirring effect", value: "< 3 % in water at room temperature" },
          { label: "Temperature coefficient", value: "About 3 % at room temperature" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Body material", value: "Stainless steel" },
          { label: "Membrane", value: "Fluoroplastic / silicone rubber / stainless wire mesh composite" },
          { label: "Cathode", value: "0.5 mm platinum wire" },
          { label: "Anode", value: "0.3 mm silver wire" },
          { label: "Electrolyte", value: "Chloride solution" },
          { label: "Temperature sensor", value: "22 kΩ NTC thermistor at room temperature" },
          { label: "Insertion diameter", value: "12 mm" },
          { label: "Insertion length", value: "120 mm, 280 mm or 450 mm" },
        ],
      },
    ],
    image: "/images/products/dog-208fa-dissolved-oxygen-electrode.jpg",
    gallery: ["/images/products/dog-208fa-dissolved-oxygen-electrode-2.jpg"],
    applications: [
      "Fermenters and bioreactors with SIP",
      "Cell culture vessels",
      "Pharmaceutical and food fermentation",
    ],
    notes: [
      "Pair with the DOG200 transmitter, or any polarographic DO input with 22 kΩ NTC compensation.",
      "Membrane and electrolyte are consumables; keep spares on site for sterilisation cycles.",
    ],
    legacyPath: "/productinfo/1534549.html",
  },
  {
    slug: "phg-2091pro-ph-orp-controller",
    model: "PHG-2091Pro",
    name: "pH / ORP Controller",
    variant: "Two analogue outputs, RS485",
    category: "analytical",
    summary:
      "pH and ORP controller accepting a range of analogue electrodes through a built-in A/D stage. −2 to 16 pH, −2000 to 2000 mV, ±1 % FS, two 4–20 mA outputs, five relays, Modbus RTU, ABS housing, IP65.",
    intro:
      "The PHG-2091Pro is a pH/ORP transmitter and controller that does not lock you into one electrode. A built-in A/D stage accepts the high-impedance analogue output of most pH and ORP probes, so the instrument can be brought into service with the electrode already on the vessel. Two isolated 4–20 mA outputs carry pH and temperature separately, five relays handle dosing and alarms, and Modbus RTU over RS485 reports everything to a supervisory system. The paired electrodes use a solid-electrolyte reference with a large-area PTFE junction, which resists the blocking that stops conventional references in dirty or high-solids service.",
    highlights: [
      "Accepts most analogue pH / ORP electrodes",
      "Two isolated 4–20 mA outputs",
      "Five relay outputs plus Modbus RTU",
      "Solid-electrolyte reference resists blocking",
      "Signal cable runs over 40 m without interference",
      "IP65 ABS housing",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "pH range", value: "−2 to 16 pH" },
          { label: "ORP range", value: "−2000 to 2000 mV" },
          { label: "Temperature range", value: "−30 to +130 °C" },
          { label: "Accuracy", value: "±1 % FS; ±0.5 °C" },
          { label: "Temperature compensation", value: "Pt1000 / NTC10K" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Supply", value: "AC 90–260 V, 50/60 Hz; or DC 24 V" },
          { label: "Power consumption", value: "4 W" },
          { label: "Analogue outputs", value: "2 × 4–20 mA" },
          { label: "Relays", value: "5 A at 250 V AC; 5 A at 30 V DC" },
          { label: "Communications", value: "Modbus RTU over RS485" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Housing", value: "ABS plastic" },
          { label: "Dimensions", value: "98.2 × 98.2 × 128.3 mm" },
          { label: "Weight", value: "0.9 kg" },
          { label: "Ingress protection", value: "IP65" },
        ],
      },
      {
        title: "Compatible electrodes",
        rows: [
          { label: "pH", value: "pH8012, pH8012F, pH8010, pH8010F" },
          { label: "ORP", value: "ORP8083" },
        ],
      },
    ],
    image: "/images/products/phg-2091pro-ph-orp-controller.png",
    gallery: [
      "/images/products/phg-2091pro-ph-orp-controller-2.png",
      "/images/products/phg-2091pro-ph-orp-controller-3.png",
    ],
    applications: [
      "Wastewater neutralisation and dosing control",
      "Power plant cycle chemistry",
      "Chemical and metallurgical process control",
      "Pharmaceutical and food process water",
      "Municipal drinking water treatment",
    ],
    legacyPath: "/productinfo/2023069.html",
  },
];
