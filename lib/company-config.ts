// Global Company Configuration
// Update all company details in one place

export const companyConfig = {
  name: 'Horizon India Technologies',
  owner: 'T V Shankar',
  
  // Contact Information
  phone: '+91 97514 58300',
  email: 'horizonindiatechnologies@gmail.com',
  whatsapp: '919751458300',
  whatsappMessage: 'Hi, I am interested in your products and services. Please contact me.',
  
  // Locations
  headOffice: {
    address: '3/126, Mettu Street',
    area: 'Mettumahadhanapuram, Mahadhanapuram North',
    city: 'Karur',
    pincode: '639105',
    state: 'Tamil Nadu',
    country: 'India',
    fullAddress: '3/126, Mettu Street, Mettumahadhanapuram, Mahadhanapuram North, Karur – 639105, Tamil Nadu, India',
  },
  
  branchOffice: {
    address: '182, Nanjappa Nagar, 5th Street West',
    area: 'Singanallur',
    city: 'Coimbatore',
    pincode: '641005',
    state: 'Tamil Nadu',
    country: 'India',
    fullAddress: '182, Nanjappa Nagar, 5th Street West, Singanallur, Coimbatore – 641005, Tamil Nadu, India',
  },
  
  // Company Info
  foundedYear: 2005,
  description: 'Leading supplier of precision testing instruments and calibration services across Tamil Nadu.',
  tagline: 'NABL Certified Precision Testing Equipment Supplier',
  
  // Social Media (update as needed)
  social: {
    linkedin: '#',
    twitter: '#',
    facebook: '#',
  },
  
  // Business Hours
  businessHours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 2:00 PM',
    sunday: 'Closed',
  },
  
  // Response Time
  responseTime: '24 hours',
  
  // SEO Keywords
  keywords: [
    'precision testing instruments',
    'calibration services',
    'measurement equipment',
    'NABL certified',
    'Tamil Nadu',
    'Karur',
    'Coimbatore',
    'industrial instruments',
  ],
}

export const getWhatsAppLink = (message?: string) => {
  const text = message || companyConfig.whatsappMessage
  return `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(text)}`
}

export const getPhoneLink = () => {
  return `tel:${companyConfig.phone}`
}

export const getEmailLink = () => {
  return `mailto:${companyConfig.email}`
}
