
import { CreditCard, Clock, Mail, MapPin, MessageSquare, Phone, ShieldCheck, Truck } from "lucide-react";

export const brand = {
  name: "VIJYAPANA",
  suffix: "SHOP", 
  logo: "/brand/logo-official.png",

  logoWidth: 315,
  logoHeight: 263,
  home: "/",
  phone: "+91 6307622215",
  phoneHref: "tel:+916307622215",
  whatsapp: "https://wa.me/916307622215",
  email: "support@vijyapana.com",
  emailHref: "mailto:support@vijyapana.com",
  store: "shop.vijyapana.com",
  tagline: "Precision Custom Printing",
  tagline2: "Pan-India Logistics",
};

// header nav 
export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Request a Quote", short: "Quote", href: "/contact" },
};

// footer: trust strip 
export const trust = [
  { icon: ShieldCheck, title: "Pre-Press Artwork Proof", sub: "Free design check before print" },
  { icon: Truck, title: "Pan-India Delivery", sub: "Doorstep express courier dispatch" },
  { icon: CreditCard, title: "GST Invoice Billing", sub: "100% tax input credit for B2B" },
  { icon: Clock, title: "Bulk Quantity Discounts", sub: "Tiered savings on high volumes" },
];

// footer: link columns 
export const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About Vijyapana", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Contact Support Desk", href: "/contact" },
      { label: "Start a Conversation", href: "/contact" },
    ],
  },
  {
    heading: "What We Do",
    links: [
      { label: "Branding", href: "/about#the-idea" },
      { label: "Advertising", href: "/about#what-you-need" },
      { label: "Digital & Social", href: "/about#the-idea" },
      { label: "Websites", href: "/about#the-idea" },
      { label: "Packaging", href: "/about#what-we-believe" },
      { label: "SEO", href: "/about#what-we-believe" },
    ],
  },
  {
    heading: "Why Vijyapana",
    links: [
      { label: "Who We Are", href: "/about#who-we-are" },
      { label: "Why We Exist", href: "/about#why-vijyapana-exists" },
      { label: "Not a Vendor", href: "/about#not-a-vendor" },
      { label: "What We Believe", href: "/about#what-we-believe" },
      { label: "The Future We Want", href: "/about#the-future" },
      { label: "The Vijyapana Promise", href: "/about#promise" },
    ],
  },
];

// footer: contact chips 
export const contactChips = [
  { icon: MessageSquare, label: "WhatsApp Support", href: brand.whatsapp, external: true, tone: "whatsapp" },
  { icon: Phone, label: brand.phone, href: brand.phoneHref, external: false, tone: "default" },
  { icon: Mail, label: brand.email, href: brand.emailHref, external: false, tone: "default" },
];

// footer: address strip 
export const address = {
  line: "Kanpur, Uttar Pradesh, India",
  hotline: brand.phone,
  mapIcon: MapPin,
};