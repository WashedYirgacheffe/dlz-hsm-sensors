import type { Product } from "@/lib/content-types";

export const gasProducts: readonly Product[] = [
  {
    slug: "hsm300-wearable-methane-detector",
    model: "HSM300",
    name: "Wearable Laser Methane Detector",
    variant: "Helmet-mounted, 60 m",
    category: "gas",
    summary:
      "Helmet-mounted TDLAS methane detector with a 60 m detection distance and 0.06 s response, so a walking inspector sweeps an area without stopping. 0–100 000 ppm·m range, 6.5 h battery, IP68, Exib IIC T4 Gb, 260 g.",
    intro:
      "TDLAS works by tuning a diode laser across a methane absorption line and measuring how much light is absorbed along the round trip to a surface and back. Because the measurement is path-integrated rather than point, the instrument reports the concentration along the beam — which is what you want when you are looking for a leak somewhere on a pipe rack 30 m away. Mounted on a hard hat, it frees both hands and lets the operator point the visible green aiming laser while walking. The 0.06 s response is the figure that makes walking inspection practical: the detector reacts as fast as the beam sweeps across a plume.",
    highlights: [
      "0.06 s response — fast enough for walking inspection",
      "60 m detection distance",
      "Helmet-mount, hands free",
      "Visible green aiming laser",
      "6.5 h battery, replaceable lithium cell",
      "IP68 and Exib IIC T4 Gb",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "0–100 000 ppm·m" },
          { label: "Detection distance", value: "60 m" },
          { label: "Response time", value: "0.06 s" },
          { label: "Aiming", value: "Green indicator laser" },
          { label: "Alarm", value: "LCD display and audible alarm" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Power", value: "Replaceable lithium battery" },
          { label: "Operating time", value: "6.5 h" },
        ],
      },
      {
        title: "Environment",
        rows: [
          { label: "Operating temperature", value: "−10 to +55 °C" },
          { label: "Storage temperature", value: "−30 to +60 °C" },
          { label: "Operating humidity", value: "99 % RH, non-condensing" },
          { label: "Operating pressure", value: "80–116 kPa" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Dimensions", value: "130 × 37.5 × 40 mm" },
          { label: "Weight", value: "0.26 kg" },
          { label: "Ingress protection", value: "IP68" },
          { label: "Explosion protection", value: "Exib IIC T4 Gb" },
        ],
      },
    ],
    image: "/images/products/hsm300-wearable-methane-detector.jpg",
    applications: [
      "Gas distribution network patrols",
      "Landfill and biogas plant inspection",
      "Confined spaces and overhead pipe racks",
      "Compressor stations and city gate stations",
    ],
    legacyPath: "/productinfo/1596057.html",
  },
  {
    slug: "hsm1000-long-range-methane-detector",
    model: "HSM1000",
    name: "Long-Range Laser Methane Detector",
    variant: "Handheld, 100 m",
    category: "gas",
    summary:
      "Handheld TDLAS methane detector with a 100 m detection distance and 0.1 s response. 0–100 000 ppm·m, 10 h battery, IP68, Exib IIC T4, 1.2 kg. For inspecting structures that cannot be approached on foot.",
    intro:
      "The handheld counterpart to the wearable unit, with double the detection distance and a battery that lasts a working shift. At 100 m the beam reaches elevated pipework, tank roofs and flare stacks that would otherwise require scaffolding or a climb. Low false-alarm rate matters more at this distance, because the operator cannot easily walk over and confirm: TDLAS is selective for methane and does not respond to other hydrocarbons, dust or water vapour the way a catalytic or infrared point sensor would.",
    highlights: [
      "100 m detection distance",
      "0.1 s response",
      "10 h battery life",
      "Selective for methane — low false alarm rate",
      "Stable, no zero drift",
      "IP68, Exib IIC T4",
    ],
    specs: [
      {
        title: "Measurement",
        rows: [
          { label: "Measuring range", value: "0–100 000 ppm·m" },
          { label: "Detection distance", value: "100 m" },
          { label: "Response time", value: "0.1 s" },
          { label: "Aiming", value: "Green indicator laser" },
          { label: "Alarm", value: "LCD display and audible alarm" },
        ],
      },
      {
        title: "Electrical",
        rows: [
          { label: "Power", value: "Replaceable lithium battery, 7.5 V, 3500 mAh" },
          { label: "Operating time", value: "10 h" },
        ],
      },
      {
        title: "Environment",
        rows: [
          { label: "Operating temperature", value: "−20 to +60 °C" },
          { label: "Storage temperature", value: "−40 to +65 °C" },
          { label: "Operating humidity", value: "99 % RH, non-condensing" },
          { label: "Operating pressure", value: "80–116 kPa" },
        ],
      },
      {
        title: "Mechanical",
        rows: [
          { label: "Dimensions", value: "200 × 75 × 120 mm" },
          { label: "Weight", value: "1.2 kg" },
          { label: "Ingress protection", value: "IP68" },
          { label: "Explosion protection", value: "Exib IIC T4" },
        ],
      },
    ],
    image: "/images/products/hsm1000-long-range-methane-detector.jpg",
    applications: [
      "Tank roof and flare stack inspection",
      "Elevated pipework and rack inspection",
      "Gas processing plant surveys",
      "Underground storage and wellhead checks",
    ],
    legacyPath: "/productinfo/1596064.html",
  },
  {
    slug: "laser-methane-explosion-proof-ptz",
    model: "HSM-PTZ-M",
    name: "Explosion-Proof PTZ Methane Camera",
    variant: "Fixed installation",
    category: "gas",
    summary:
      "Fixed explosion-proof pan-tilt head combining a TDLAS methane detector with a 40× optical zoom camera. 400–55 000 ppm·m, 100 m range, 360° continuous pan, 255 presets, 200 m IR, Exd IIC T6 Gb, IP68.",
    intro:
      "A fixed installation version of the same TDLAS measurement, mounted on a pan-tilt head with a 40× zoom camera. The value is in the combination: the detector finds a plume, the camera zooms in on it, and the operator sees both the concentration and the physical location — a leaking flange rather than a sector of the plant. Continuous 360° pan, 255 presets and eight cruise patterns mean the unit can sweep a tank farm on a schedule, and the image is available over standard video interfaces with alarm inputs and outputs for integration.",
    highlights: [
      "TDLAS detection plus 40× optical zoom camera",
      "360° continuous pan, −90° to +90° tilt",
      "255 presets, 8 cruise patterns, 3D positioning",
      "200 m infrared illumination",
      "Exd IIC T6 Gb, IP68",
      "PoE++ or 100–220 V AC supply",
    ],
    specs: [
      {
        title: "Gas detection",
        rows: [
          { label: "Measuring range", value: "400–55 000 ppm·m" },
          { label: "Detection distance", value: "100 m" },
          { label: "Manual gas-detection trigger", value: "Supported" },
          { label: "Method", value: "TDLAS — no calibration required" },
        ],
      },
      {
        title: "Camera",
        rows: [
          { label: "Sensor", value: '1/2.5″ progressive scan CMOS' },
          { label: "Maximum image size", value: "2560 × 1440" },
          { label: "Minimum illumination", value: "Colour 0.0005 lux (F1.2, AGC on); B/W 0.0001 lux; 0 lux with IR" },
          { label: "Lens", value: "6.0–240 mm, 40× optical zoom" },
          { label: "Field of view", value: "56.6°–1.8° (wide to tele)" },
          { label: "Zoom speed", value: "Approx. 4.5 s (wide to tele)" },
          { label: "White balance", value: "Auto, auto-tracking, sodium, fluorescent, indoor, outdoor, manual, lock" },
        ],
      },
      {
        title: "Pan-tilt",
        rows: [
          { label: "Pan range", value: "360° continuous" },
          { label: "Tilt range", value: "−90° to +90°" },
          { label: "Pan speed", value: "0.1°–40°/s" },
          { label: "Tilt speed", value: "0.1°–40°/s" },
          { label: "Presets", value: "255" },
          { label: "Cruise patterns", value: "8" },
          { label: "3D positioning", value: "Supported" },
          { label: "Azimuth display", value: "Supported" },
          { label: "IR distance", value: "200 m" },
        ],
      },
      {
        title: "Video and network",
        rows: [
          { label: "Frame rate", value: "25 fps at 50 Hz; 30 fps at 60 Hz" },
          { label: "H.264", value: "Baseline / Main / High Profile" },
          { label: "H.265", value: "Main Profile" },
          { label: "Smart codec", value: "Smart264 and Smart265 supported" },
          { label: "Protocols", value: "Open API, ISAPI, SDK, third-party platforms, GB/T28181, Ehome 2.0/4.0, EZVIZ, ISUP" },
          { label: "Storage", value: "NAS (NFS, SMB/CIFS)" },
          { label: "Browsers", value: "IE10+, Chrome 57+, Firefox 52+, Safari 12+" },
          { label: "Image enhancement", value: "120 dB WDR, defog, highlight suppression, EIS, Smart IR" },
        ],
      },
      {
        title: "Electrical and mechanical",
        rows: [
          { label: "Supply", value: "AC 100–220 V; PoE++" },
          { label: "Maximum power", value: "60 W" },
          { label: "Network port", value: "1 × RJ45 10/100 M adaptive Ethernet" },
          { label: "Audio", value: "1 in (line), 1 out (line)" },
          { label: "Alarm I/O", value: "2 in, 2 out" },
          { label: "Operating temperature", value: "−30 to +60 °C" },
          { label: "Operating humidity", value: "< 95 %" },
          { label: "Dimensions", value: "584 × 395 mm" },
          { label: "Weight", value: "34 kg" },
          { label: "Ingress protection", value: "IP68" },
          { label: "Explosion protection", value: "Exd IIC T6 Gb / Ex tD A21 IP68 T80 °C" },
        ],
      },
    ],
    image: "/images/products/laser-methane-explosion-proof-ptz.jpg",
    applications: [
      "Tank farm and loading gantry surveillance",
      "Compressor and metering station monitoring",
      "Landfill gas collection headers",
      "Unmanned remote wellhead sites",
    ],
    notes: [
      "34 kg head requires a substantial mounting structure; allow for wind loading on the 584 mm body.",
      "Camera and gas data are separate streams and must be integrated at the recorder or VMS.",
    ],
    legacyPath: "/productinfo/1596069.html",
  },
];
