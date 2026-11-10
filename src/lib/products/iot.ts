import type { Product } from "@/lib/content-types";

export const iotProducts: readonly Product[] = [
  {
    slug: "wireless-pressure-sensor",
    model: "HSM-WP",
    name: "Wireless Pressure Sensor",
    variant: "4G / LoRa / NB-IoT",
    category: "iot",
    summary:
      "Battery-powered pressure sensor for unmanned pipeline and network monitoring. Wired, battery or cyclic supply; RS485 Modbus, I²C or 0.25–2.5 V output locally; 4G, LoRa or NB-IoT to the cloud. CE (EMC) compliant with digital temperature compensation.",
    intro:
      "Built for the places where there is no mains power and no cable route: oil and gas gathering lines, heating networks, fire-water mains and remote valve chambers. The sensing element is a low-power pressure die with on-chip temperature compensation, calibrated values stored in the chip and applied automatically, so winter-to-summer drift does not appear as a pressure change. Locally the sensor gives RS485 Modbus RTU, I²C or a 0.25–2.5 V analogue output; remotely it reports over 4G, LoRa or NB-IoT, and the data lands in a cloud platform for storage and trending.",
    highlights: [
      "Battery or cyclic supply — no mains needed",
      "4G, LoRa or NB-IoT uplink",
      "On-chip temperature compensation, no seasonal drift",
      "RS485 Modbus RTU, I²C and analogue outputs",
      "Designed against RF, EMI and surge, CE (EMC) compliant",
      "Polarity-protected",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measured quantity", value: "Gauge or absolute pressure" },
          { label: "Element", value: "Low-power pressure die with digital temperature compensation" },
          { label: "Compensation", value: "Calibration values stored on chip and applied automatically" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Local output", value: "RS485 Modbus RTU, I²C, or 0.25–2.5 V analogue" },
          { label: "Wireless uplink", value: "4G / LoRa / NB-IoT" },
          { label: "Power", value: "Wired, battery, or cyclic supply" },
          { label: "Protection", value: "Reverse polarity; designed against RF, EMI and surge" },
          { label: "Compliance", value: "IEC and CE (EMC)" },
        ],
      },
    ],
    image: "/images/products/wireless-pressure-sensor.jpg",
    applications: [
      "Oil and gas gathering and transmission lines",
      "District heating networks",
      "Fire-water main pressure",
      "Unmanned valve and metering chambers",
      "Remote wellheads",
    ],
    notes: [
      "Range, process connection and battery life are fixed at order — specify the expected reporting interval so the power budget can be sized.",
    ],
    legacyPath: "/productinfo/2094472.html",
  },
  {
    slug: "wireless-temperature-sensor",
    model: "HSM-WT",
    name: "Wireless Temperature Sensor",
    variant: "4G / LoRa / NB-IoT",
    category: "iot",
    summary:
      "Battery-powered temperature sensor for remote networks, using a Pt100/Pt1000 element in a 304 or 316 stainless probe. Wired, battery or cyclic supply; RS485 Modbus or analogue locally; 4G, LoRa or NB-IoT uplink.",
    intro:
      "A platinum element in a stainless sheath, packaged with a low-power radio and a battery. The Pt100/Pt1000 response is linear with temperature, so the calibration is stable and the reading can be checked against a reference at any time. Intended for supply networks, environmental monitoring, cold chain, HV transmission assets and any site where a walk-round temperature check is currently the only option.",
    highlights: [
      "Pt100 / Pt1000 element in 304 or 316 stainless",
      "4G, LoRa or NB-IoT uplink",
      "Battery or cyclic supply",
      "RS485 Modbus and analogue local outputs",
      "CE (EMC) compliant, surge-protected",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Element", value: "Pt100 / Pt1000 platinum resistance" },
          { label: "Probe", value: "304 or 316 stainless steel" },
          { label: "Response", value: "Linear with temperature" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Local output", value: "RS485 Modbus RTU, or 0.25–2.5 V analogue" },
          { label: "Wireless uplink", value: "4G / LoRa / NB-IoT" },
          { label: "Power", value: "Wired, battery, or cyclic supply" },
          { label: "Protection", value: "Designed against RF, surge and EMI" },
          { label: "Compliance", value: "IEC and CE (EMC)" },
        ],
      },
    ],
    image: "/images/products/wireless-temperature-sensor.jpg",
    applications: [
      "Water and gas supply network temperature",
      "Cold chain and warehouse monitoring",
      "HV transmission asset temperature",
      "Environmental and agricultural monitoring",
      "Unmanned manufacturing sites",
    ],
    legacyPath: "/productinfo/2094484.html",
  },
  {
    slug: "wireless-level-sensor",
    model: "HSM-WL",
    name: "Wireless Level Sensor",
    variant: "Submersible or capacitive",
    category: "iot",
    summary:
      "Battery-powered level sensor for reservoirs, tanks and networks. Hydrostatic submersible or capacitive sensing, RS485 Modbus or analogue locally, 4G / LoRa / NB-IoT uplink. For sites with no power and no cable route.",
    intro:
      "Two sensing principles in one product family: a submersible hydrostatic probe that converts head pressure to level, and a capacitive probe that measures the change in capacitance as the level rises. The choice depends on the medium — hydrostatic for clean water in deep wells, capacitive for tanks where a suspended probe is impractical. Both are packaged with the same low-power radio and battery, so a site can mix the two and use one gateway.",
    highlights: [
      "Hydrostatic or capacitive sensing",
      "Suits reservoirs, tanks and networks",
      "4G, LoRa or NB-IoT uplink",
      "Battery or cyclic supply",
      "RS485 Modbus and analogue local outputs",
      "CE (EMC) compliant",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Hydrostatic variant", value: "Submersible probe, head pressure converted to level" },
          { label: "Capacitive variant", value: "Coaxial probe, capacitance change converted to level" },
          { label: "Typical applications", value: "Reservoir high/low level, hydraulic tanks, tankers, building automation, constant-pressure water supply" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Local output", value: "RS485 Modbus RTU, or 0.25–2.5 V analogue" },
          { label: "Wireless uplink", value: "4G / LoRa / NB-IoT" },
          { label: "Power", value: "Wired, battery, or cyclic supply" },
          { label: "Protection", value: "Designed against RF, surge and EMI" },
          { label: "Compliance", value: "IEC and CE (EMC)" },
        ],
      },
    ],
    image: "/images/products/wireless-level-sensor.jpg",
    applications: [
      "Reservoir and dam level monitoring",
      "Petrochemical and environmental water networks",
      "Hydraulic oil tanks and tanker trucks",
      "Locomotive braking systems",
      "Building automation and constant-pressure supply",
    ],
    legacyPath: "/productinfo/2094499.html",
  },
  {
    slug: "wireless-gas-sensor",
    model: "HSM-WG",
    name: "Wireless Gas Sensor",
    variant: "Toxic and combustible",
    category: "iot",
    summary:
      "Wireless gas sensor for toxic and combustible gas monitoring in plants and buildings, with wired or battery supply and a choice of wireless uplink. Used for confined-space safety, combustion monitoring, food and beverage process control and medical diagnostics.",
    intro:
      "A gas sensing element with a low-power radio, for locations where a fixed wired detector would mean a cable route across a plant. Applications range from safety monitoring for toxic and combustible gases in oil, mining and semiconductor facilities through to combustion efficiency in flues, sulphur dioxide control in food and beverage processing, and diagnostic measurement such as blood carbon dioxide and oxygen concentration.",
    highlights: [
      "Toxic and combustible gas detection",
      "Wired, battery or cyclic supply",
      "Wired and wireless transmission options",
      "Suits confined spaces and remote plant",
      "Combustion and process-gas monitoring",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Gas types", value: "Toxic and combustible, to the sensing element specified" },
          { label: "Typical duty — safety", value: "Oil, mining and semiconductor plant; building environment monitoring" },
          { label: "Typical duty — combustion", value: "Vehicle and flue exhaust measurement" },
          { label: "Typical duty — process", value: "Sulphur dioxide control in food and beverage preservation" },
          { label: "Typical duty — medical", value: "Blood carbon dioxide and oxygen concentration" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Power", value: "Wired or battery" },
          { label: "Transmission", value: "Wired and wireless options" },
        ],
      },
    ],
    image: "/images/products/wireless-gas-sensor.jpg",
    applications: [
      "Confined-space and plant safety monitoring",
      "Flue and vehicle exhaust combustion control",
      "Food and beverage preservation",
      "Medical diagnostic gas measurement",
    ],
    notes: [
      "The sensing element is selected for the target gas; a single unit cannot be re-ranged between gas types in the field.",
    ],
    legacyPath: "/productinfo/2094502.html",
  },
  {
    slug: "edge-gateway",
    model: "HSM-EG",
    name: "Industrial Edge Gateway",
    variant: "4G / Wi-Fi / broadband",
    category: "iot",
    summary:
      "Edge gateway with 4G, Wi-Fi and broadband uplinks, protocol parsing and edge computing. Local configuration software reports CPU/RAM/ROM, firmware, network state; NAT and port mapping, TLS transport encryption, hardware and software watchdog.",
    intro:
      "The gateway is the piece that turns sensor traffic into usable data. It accepts 4G, Wi-Fi and broadband uplinks, parses industrial protocols, and forwards the results — either to a cloud platform or to a local SCADA — with TLS encryption on the transport. Edge computing capability means some of the processing happens before the data leaves the site, which reduces both bandwidth cost and latency. Local configuration software reports CPU utilisation, RAM and ROM usage, hostname, model, firmware and kernel version, uptime and network state, and the unit ships with a firewall supporting NAT and port mapping. A hardware and software watchdog pair keeps it running unattended.",
    highlights: [
      "4G, Wi-Fi and broadband uplinks",
      "Protocol parsing and edge computing",
      "TLS-encrypted transport",
      "Local management software with full system telemetry",
      "Built-in firewall with NAT and port mapping",
      "Hardware and software watchdogs",
    ],
    specs: [
      {
        title: "Connectivity",
        rows: [
          { label: "Uplinks", value: "4G, Wi-Fi, broadband Ethernet" },
          { label: "Protocol parsing", value: "Industrial protocols parsed at the edge" },
          { label: "Edge computing", value: "Local processing of sensor data before uplink" },
        ],
      },
      {
        title: "Security and management",
        rows: [
          { label: "Transport encryption", value: "TLS" },
          { label: "Firewall", value: "Built-in, NAT and port mapping" },
          { label: "Watchdog", value: "Hardware and software" },
          {
            label: "Local management",
            value:
              "CPU, RAM and ROM utilisation; hostname; model; firmware version; kernel version; local time; uptime; network state",
          },
        ],
      },
    ],
    image: "/images/products/edge-gateway.png",
    gallery: [
      "/images/products/edge-gateway-2.png",
      "/images/products/edge-gateway-3.png",
    ],
    applications: [
      "Bringing a legacy machine onto a cloud platform",
      "Site-wide sensor aggregation over one uplink",
      "Remote sites with intermittent connectivity",
      "Protocol translation between PLC generations",
    ],
    legacyPath: "/productinfo/1665415.html",
  },
];
