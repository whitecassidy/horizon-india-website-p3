export interface Product {
  id: string
  name: string
  category: 'Precision Measuring' | 'Electronic Meters' | 'Portable Tools' | 'Gauge Sets' | 'Calibration' | 'Testing Equipment'
  description: string
  shortDescription: string
  image: string
  specs: string[]
  modelCode: string
  features: string[]
  applications: string[]
  specifications: Record<string, string>
  pdfSheet?: string
}

export const products: Product[] = [
  {
    id: 'digital-micrometer-001',
    name: 'Digital Micrometer 0-25mm',
    category: 'Precision Measuring',
    description: 'High-precision digital micrometer with LCD display and automatic zero setting.',
    shortDescription: 'Digital micrometer for precision measurements',
    image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=300&h=240&fit=crop',
    specs: ['Range: 0-25mm', 'Accuracy: ±0.02mm', 'LCD Display', 'Automatic Zero'],
    modelCode: 'DM-001',
    features: [
      'Large LCD display with high contrast',
      'Automatic zero setting button',
      'Metric and inch conversion',
      'Low battery indicator',
      'Quick measurement reading',
    ],
    applications: [
      'Automotive parts inspection',
      'Electronic component measurement',
      'Quality control in manufacturing',
      'Research and development',
    ],
    specifications: {
      'Range': '0-25 mm',
      'Resolution': '0.01 mm',
      'Accuracy': '±0.02 mm',
      'Display': 'LCD, 8 digits',
      'Power': 'SR44 Battery',
      'Weight': '150g',
    },
  },
  {
    id: 'vernier-caliper-001',
    name: 'Vernier Caliper 150mm',
    category: 'Precision Measuring',
    description: 'Stainless steel vernier caliper with fine adjustment and clear scale markings.',
    shortDescription: 'Professional grade vernier caliper',
    image: 'https://images.unsplash.com/photo-1593642632823-8f3c59fa0dcc?w=300&h=240&fit=crop',

    specs: ['Range: 0-150mm', 'Resolution: 0.05mm', 'Stainless Steel', 'Fine Adjustment'],
    modelCode: 'VC-150',
    features: [
      'Hardened stainless steel construction',
      'Fine adjustment screw for precision',
      'Metric and inch scales',
      'Lower measuring jaw for internal measurements',
      'Upper measuring jaw for external measurements',
    ],
    applications: [
      'Dimensional inspection',
      'Quality control testing',
      'Manufacturing and production',
      'Laboratory measurements',
    ],
    specifications: {
      'Range': '0-150 mm',
      'Resolution': '0.05 mm',
      'Accuracy': '±0.05 mm',
      'Material': 'Stainless Steel',
      'Weight': '120g',
      'Graduation': 'Metric/Inch',
    },
  },
  {
    id: 'dial-gauge-001',
    name: 'Dial Gauge 0-10mm',
    category: 'Gauge Sets',
    description: 'Precision dial gauge with smooth needle movement and easy-to-read scale.',
    shortDescription: 'Dial gauge for precision measurement',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=240&fit=crop',

    specs: ['Range: 0-10mm', 'Graduation: 0.01mm', 'Magnetic Stand Available', 'Heavy Duty'],
    modelCode: 'DG-10',
    features: [
      'Large easy-to-read dial face',
      'Smooth needle movement',
      'Fine lug for quick zero setting',
      'Durable internal mechanism',
      'Water-resistant housing',
    ],
    applications: [
      'Runout measurement',
      'Flatness and parallelism checking',
      'Tool setting',
      'Quality assurance',
    ],
    specifications: {
      'Range': '0-10 mm',
      'Graduation': '0.01 mm',
      'Dial Diameter': '58 mm',
      'Back Lug': 'M16',
      'Accuracy': '±0.05 mm',
      'Weight': '280g',
    },
  },
  {
    id: 'multimeter-digital-001',
    name: 'Digital Multimeter 3.5 Digit',
    category: 'Electronic Meters',
    description: 'Compact digital multimeter with AC/DC voltage, current, and resistance measurement.',
    shortDescription: 'Handheld digital multimeter',
    image: 'https://images.unsplash.com/photo-1579089531341-6d16a4fbe5d3?w=300&h=240&fit=crop',

    specs: ['3.5 Digit Display', 'DC: 200V-1000V', 'AC: 200V-750V', 'Ohm: 200Ω-20MΩ'],
    modelCode: 'DM-3.5',
    features: [
      'Large LCD display',
      'Auto-ranging functionality',
      'Overload protection',
      'Low battery indicator',
      'Durable rubber holster',
    ],
    applications: [
      'Electrical troubleshooting',
      'Electronics testing',
      'Automotive diagnostics',
      'Field service maintenance',
    ],
    specifications: {
      'DC Voltage': '200mV to 1000V',
      'AC Voltage': '200V to 750V',
      'DC Current': '200μA to 20A',
      'Resistance': '200Ω to 20MΩ',
      'Display': 'LCD 3.5 digits',
      'Power': 'AA Battery',
    },
  },
  {
    id: 'depth-gauge-001',
    name: 'Depth Gauge 300mm',
    category: 'Portable Tools',
    description: 'Precision depth gauge for measuring holes and recesses with accuracy.',
    shortDescription: 'Depth measurement tool',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=240&fit=crop',

    specs: ['Range: 0-300mm', 'Resolution: 0.1mm', 'Easy Reading', 'Portable Design'],
    modelCode: 'DPG-300',
    features: [
      'Clear metric graduations',
      'Fine adjustment screw',
      'Hardened steel construction',
      'Lightweight and portable',
      'Protective carrying case included',
    ],
    applications: [
      'Drilling depth control',
      'Hole depth measurement',
      'Surface recess measurement',
      'Manufacturing quality control',
    ],
    specifications: {
      'Range': '0-300 mm',
      'Main Scale Division': '1 mm',
      'Vernier Division': '0.1 mm',
      'Accuracy': '±0.2 mm',
      'Material': 'Hardened Steel',
      'Weight': '220g',
    },
  },
  {
    id: 'pressure-gauge-001',
    name: 'Pressure Gauge 0-10 Bar',
    category: 'Testing Equipment',
    description: 'Industrial pressure gauge with glycerin-filled case for vibration resistance.',
    shortDescription: 'Pressure measurement instrument',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=240&fit=crop',

    specs: ['Range: 0-10 Bar', 'Accuracy: ±1.6%', 'Glycerin Filled', 'Back Mount'],
    modelCode: 'PG-10',
    features: [
      'Glycerin-filled case',
      'Vibration resistant',
      'Large easy-to-read scale',
      'Durable construction',
      'IP54 rating',
    ],
    applications: [
      'Hydraulic system monitoring',
      'Pneumatic pressure control',
      'Industrial process monitoring',
      'Equipment maintenance',
    ],
    specifications: {
      'Range': '0-10 Bar',
      'Accuracy Class': '1.6%',
      'Dial Diameter': '100 mm',
      'Connection': 'M20x1.5 Back Mount',
      'Case': 'Steel Glycerin-filled',
      'Temperature Range': '-20°C to +60°C',
    },
  },
  {
    id: 'thickness-gauge-001',
    name: 'Thickness Gauge Ultrasonic',
    category: 'Portable Tools',
    description: 'Non-destructive ultrasonic thickness measurement for metals and plastics.',
    shortDescription: 'Ultrasonic thickness measurement',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=240&fit=crop',

    specs: ['Range: 1.5-300mm', 'Accuracy: ±1%', 'LCD Display', 'Data Storage'],
    modelCode: 'UTG-300',
    features: [
      'Large LCD display',
      'Data memory (up to 50 readings)',
      'Auto-shutdown function',
      'Statistical analysis',
      'Carrying case included',
    ],
    applications: [
      'Steel pipe inspection',
      'Coating thickness measurement',
      'Material quality testing',
      'Equipment maintenance prediction',
    ],
    specifications: {
      'Measurement Range': '1.5-300 mm (Steel)',
      'Accuracy': '±1% or ±0.3 mm',
      'Display': 'LCD Digital',
      'Power': 'AAA Battery',
      'Temperature Range': '0°C to +40°C',
      'Storage Capacity': '50 readings',
    },
  },
  {
    id: 'bore-gauge-001',
    name: 'Bore Gauge 50-160mm',
    category: 'Precision Measuring',
    description: 'Three-point bore gauge for accurate internal diameter measurement.',
    shortDescription: 'Bore measurement gauge',
    image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=300&h=240&fit=crop',

    specs: ['Range: 50-160mm', 'Resolution: 0.01mm', 'Three-Point Contact', 'Fine Adjustment'],
    modelCode: 'BG-160',
    features: [
      'Three-point contact system',
      'Fine adjustable anvil',
      'Quick-lock adjustment',
      'Hardened and ground moving elements',
      'Protective carrying case',
    ],
    applications: [
      'Engine block honing',
      'Hole inspection',
      'Bearing bore measurement',
      'Cylinder measurement',
    ],
    specifications: {
      'Measuring Range': '50-160 mm',
      'Resolution': '0.01 mm',
      'Accuracy': '±0.05 mm',
      'Minimum Bore Size': '50 mm',
      'Material': 'Hardened Steel',
      'Weight': '380g',
    },
  },
  {
    id: 'pin-gauge-set-001',
    name: 'Pin Gauge Set 1-10mm',
    category: 'Gauge Sets',
    description: 'Complete set of hardened steel pin gauges for hole inspection and setup.',
    shortDescription: 'Pin gauge set for hole inspection',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=240&fit=crop',

    specs: ['Range: 1-10mm', '49 Pieces', 'Hardened Steel', 'Carrying Case Included'],
    modelCode: 'PGS-10',
    features: [
      'Complete 49-piece set',
      'Hardened and ground to precise tolerance',
      'Smooth finish',
      'Organized carrying case',
      'Clear labeling on each pin',
    ],
    applications: [
      'Hole size verification',
      'Plug gauge replacement',
      'Tool setup and calibration',
      'Manufacturing quality control',
    ],
    specifications: {
      'Gauge Range': '1-10 mm',
      'Total Pieces': '49',
      'Tolerance': '±0.02 mm',
      'Material': 'Hardened Steel',
      'Surface Finish': 'Polished Chrome',
      'Accuracy Grade': 'ASME B4.1 Grade A',
    },
  },
  {
    id: 'oscilloscope-probe-001',
    name: 'Oscilloscope Probe 60MHz',
    category: 'Electronic Meters',
    description: 'High-quality oscilloscope probe with 60MHz bandwidth for accurate signal measurement.',
    shortDescription: 'Oscilloscope probe for signal measurement',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=240&fit=crop',
    price: '₹2,200',
    specs: ['Bandwidth: 60MHz', 'Attenuation: 1x/10x', 'Spring-Loaded Hook', 'Adjustable Impedance'],
    modelCode: 'OSP-60',
    features: [
      'Low capacitance design',
      'Both 1x and 10x attenuation',
      'Spring-loaded hook clip',
      'Compact design',
      'Shielded cable',
    ],
    applications: [
      'Electronic circuit testing',
      'Signal monitoring',
      'Frequency measurement',
      'Waveform analysis',
    ],
    specifications: {
      'Bandwidth': '60 MHz',
      'Attenuation': '1x / 10x',
      'Input Impedance': '10 MΩ',
      'Probe Resistance': '1 MΩ / 10 MΩ',
      'Cable Length': '1.5 m',
      'Connector': 'BNC Standard',
    },
  },
  {
    id: 'flow-meter-001',
    name: 'Digital Flow Meter',
    category: 'Testing Equipment',
    description: 'Digital flow meter for measuring liquid and gas flow rates with high accuracy.',
    shortDescription: 'Flow rate measurement device',
    image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=300&h=240&fit=crop',
    price: '₹12,500',
    specs: ['Range: 0-100 L/min', 'Accuracy: ±2%', 'LCD Display', 'Pulse Output'],
    modelCode: 'DFM-100',
    features: [
      'Large LCD display',
      'Pulse output for data logging',
      'Low pressure drop',
      'Easy installation',
      'Temperature compensation',
    ],
    applications: [
      'Hydraulic system monitoring',
      'Coolant flow measurement',
      'Water treatment verification',
      'Industrial process control',
    ],
    specifications: {
      'Measurement Range': '0-100 L/min',
      'Accuracy': '±2%',
      'Pressure Drop': '< 0.5 bar',
      'Power Supply': '24V DC',
      'Output': 'Pulse / 4-20mA',
      'Temperature Range': '0°C to +50°C',
    },
  },
  {
    id: 'standard-weight-001',
    name: 'Calibration Weight Set 1-20kg',
    category: 'Calibration',
    description: 'Precision calibration weights in stainless steel for scale and balance verification.',
    shortDescription: 'Calibration weight set',
    image: 'https://images.unsplash.com/photo-1626505153263-ce37db0e5205?w=300&h=240&fit=crop',
    price: '₹8,900',
    specs: ['Range: 1-20kg', 'Accuracy: Class M1', 'Stainless Steel', '11 Pieces'],
    modelCode: 'CW-20',
    features: [
      'Class M1 accuracy grade',
      'Stainless steel construction',
      'Smooth polished surfaces',
      'Organized storage case',
      'Calibration certificate included',
    ],
    applications: [
      'Scale calibration',
      'Balance verification',
      'Laboratory measurement',
      'Quality assurance testing',
    ],
    specifications: {
      'Weight Range': '1-20 kg',
      'Accuracy Class': 'M1 (±0.5% to ±1%)',
      'Total Pieces': '11',
      'Material': 'Stainless Steel',
      'Sizes': '1kg, 2kg, 5kg, 10kg, 20kg',
      'Certification': 'ISO/IEC 17025',
    },
  },
  {
    id: 'hardness-tester-001',
    name: 'Portable Hardness Tester',
    category: 'Testing Equipment',
    description: 'Portable hardness testing device for on-site material hardness evaluation.',
    shortDescription: 'Portable hardness tester',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=240&fit=crop',
    price: '₹15,800',
    specs: ['Scale: HRA/HB/HV', 'Accuracy: ±3-5%', 'LCD Display', 'Wireless Data Transfer'],
    modelCode: 'PHT-100',
    features: [
      'Multiple hardness scales',
      'Auto zero and calibration',
      'Impact-resistant housing',
      'Data storage (up to 100 readings)',
      'Bluetooth connectivity',
    ],
    applications: [
      'Material testing in production',
      'Quality control verification',
      'On-site hardness assessment',
      'Equipment wear monitoring',
    ],
    specifications: {
      'Hardness Scales': 'HRA, HB, HV',
      'Measurement Range': '20-65 HRC',
      'Accuracy': '±3-5%',
      'Display': 'LCD Digital',
      'Data Storage': '100 readings',
      'Power': 'Rechargeable Li-ion Battery',
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getCategories(): string[] {
  return Array.from(new Set(products.map(p => p.category)))
}
