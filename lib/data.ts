export const products = [
  {
    slug: "aerolite-1",
    name: "Aerolite 1",
    tagline: "Ultra-light productivity notebook",
    price: "$1299",
    isNew: true,
    images: ["/images/aerolite-1-1.jpg", "/images/aerolite-1-2.jpg"],
    specs: [
      { label: "Weight", value: "1.1kg" },
      { label: "Battery", value: "18h" },
      { label: "Display", value: "14\" 2400x1600" }
    ],
    specMap: { weight: "1.1kg", battery: "18h", display: "14\" 2400x1600" }
  },
  {
    slug: "aerolite-1-pro",
    name: "Aerolite 1 Pro",
    tagline: "Pro-grade performance in a thin chassis",
    price: "$1899",
    isNew: false,
    images: ["/images/aerolite-pro-1.jpg", "/images/aerolite-pro-2.jpg"],
    specs: [
      { label: "Weight", value: "1.3kg" },
      { label: "Battery", value: "22h" },
      { label: "Display", value: "16\" 3000x2000" }
    ],
    specMap: { weight: "1.3kg", battery: "22h", display: "16\" 3000x2000" }
  },
  {
    slug: "arc-pad",
    name: "Arc Pad",
    tagline: "Creative tablet with precision pen",
    price: "$699",
    isNew: true,
    images: ["/images/arc-pad-1.jpg"],
    specs: [
      { label: "Weight", value: "0.6kg" },
      { label: "Battery", value: "12h" },
      { label: "Display", value: "11\" 2200x1600" }
    ],
    specMap: { weight: "0.6kg", battery: "12h", display: "11\" 2200x1600" }
  }
];

export const faqs = [
  { q: "What warranty do you provide?", a: "All products include a two-year limited warranty." },
  { q: "Do you ship internationally?", a: "Yes, we ship to over 40 countries." },
  { q: "Can I return a product?", a: "Products can be returned within 30 days in original condition." }
];
