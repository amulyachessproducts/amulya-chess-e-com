/**
 * Centralized business configuration for Amulya Chess.
 * Use this file to update GST, Shipping costs, and Support contact details.
 */

export const BUSINESS_CONFIG = {
  company: {
    name: "Amulya Chess Products",
  },
  pricing: {
    gstPercentage: 18,
    shippingThreshold: 5000,
    shippingCost: 0, // Currently set to 0 as per requirements
  },
  support: {
    email: "amulyachessproducts@gmail.com",
    phone: "+91 90804 67299",
    whatsapp: "919080467299",
    address: "No.111, B.R.N.Garden, I Block, Broadway, Chennai - 600 108.",
    instagram: "amulyachessproducts",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=No.111,+B.R.N.Garden,+I+Block,+Broadway,+Chennai+-+600+108",
  },
};
