/**
 * All copy for /about. The components in components/about only decide layout
 * and style, so text edits should only ever need this file.
 *
 * Headline "lines" take `accent: true` to paint that line in brand blue.
 * Images live in public/images/about/.
 */
import {
  BarChart3, Briefcase, Camera, CalendarDays, ClipboardList, Eye, FileText, Gift,
  Globe, HandCoins, Handshake, IndianRupee, Laptop, Lightbulb, LogOut, Maximize2,
  Megaphone, MessageCircle, Mic, Network, Package, PenTool, Pencil, Play, Printer,
  Rocket, Search, Settings, ShieldCheck, Store, Tag, TrendingUp, User, UserPlus,
  Users, type LucideIcon,
} from "lucide-react";

// shared types
export interface ImageAsset { src: string; alt: string; position?: string } // position = CSS object-position
export interface Line { text: string; accent?: boolean; case?: "upper" | "lower" | "normal"; }                   // one headline line
export interface IconItem { label: string; icon: LucideIcon }

const IMG = "/images/about"; // base folder inside /public

// SEO + structured data
export const seo = {
  title: "About Vijyapana | Marketing & Advertising Agency in Kanpur",
  description:
    "Vijyapana is a marketing and advertising partner for businesses that want to build, grow and be remembered. One call. One partner. One responsibility.",
  url: "https://shop.vijyapana.com/about",
  ogImage: `${IMG}/og-about.jpg`, // 1200x630 image
};

export const company = {
  name: "Vijyapana",
  url: "https://shop.vijyapana.com",
  logo: "/brand/logo-official.png", // official Vijyapana logo (fetched from shop.vijyapana.com)
  logoWidth: 315, // intrinsic size — scale via CSS with w-auto / h-auto
  logoHeight: 263,
  founded: "2017",
  location: "Kanpur, India",
  tagline: "One call. One partner. One responsibility.",
};

// HERO
export const hero = {
  label: { num: "01", text: "WHO WE ARE ?" },
  title: [{ text: "WE DON'T JUST" }, { text: "DO MARKETING.", accent: true }] as Line[],
  sub: { text: "We Take Responsibility For It.", case: "upper" } as Line,
  body: "Vijyapana is a marketing and advertising partner for businesses that want to build, grow, and be remembered.",
  tagline: [
    { text: "You Build The Business.", case: "normal" },
    { text: "We Build The Brand.", accent: true, case: "normal" },
  ] as Line[],

  image: { src: `${IMG}/hero-team.webp`, alt: "Vijyapana team planning brand strategy on a whiteboard" } as ImageAsset,
};

// WHY VIJYAPANA EXISTS
export const why = {
  label: { num: "02", text: "WHY VIJYAPANA EXISTS" },
  title: [{ text: "BUSINESS OWNERS ALREADY HAVE ENOUGH" }, { text: "ON THEIR PLATE.", accent: true }] as Line[],
  body: "They are already busy managing a million things every single day.",

  image: { src: `${IMG}/why-owner.webp`, alt: "Stressed business owner managing too many responsibilities" } as ImageAsset,

  chips: [
    { label: "HIRING", icon: UserPlus, pos: "top-[4%] left-[18%]" },
    { label: "FINANCE", icon: IndianRupee, pos: "top-[0%] right-[22%]" },
    { label: "SALES", icon: BarChart3, pos: "top-[20%] left-[4%]" },
    { label: "GST", icon: FileText, pos: "top-[18%] right-[6%]" },
    { label: "MANAGEMENT", icon: Network, pos: "top-[34%] right-[0%]" },
    { label: "OPERATIONS", icon: Settings, pos: "top-[36%] left-[0%]" },
    { label: "EXPANSION", icon: Maximize2, pos: "top-[50%] right-[2%]" },
    { label: "CUSTOMERS", icon: User, pos: "top-[52%] left-[8%]" },
    { label: "GROWTH", icon: TrendingUp, pos: "top-[66%] right-[14%]" },
  ] as (IconItem & { pos: string })[],
  headache: {
    title: [{ text: "MARKETING SHOULDN'T" }, { text: "BE ANOTHER HEADACHE.", accent: true }] as Line[],
    intro: "A business owner should not have to call ten different vendors.",
    oneFor: ["printing", "website", "social media", "photography", "corporate gifts", "branding", "advertising", "packaging", "events", "SEO", "videos"],
    vendors: [
      { label: "PRINTING", icon: Printer }, { label: "WEBSITE", icon: Globe },
      { label: "SOCIAL MEDIA", icon: MessageCircle }, { label: "PHOTOGRAPHY", icon: Camera },
      { label: "CORPORATE GIFTS", icon: Gift }, { label: "BRANDING", icon: PenTool },
      { label: "ADVERTISING", icon: Megaphone }, { label: "PACKAGING", icon: Package },
      { label: "EVENTS", icon: CalendarDays }, { label: "SEO", icon: Search }, { label: "VIDEOS", icon: Play }, { label: "AUDIO PRODUCTION", icon: Play }
    ] as IconItem[],
    links: [
      ["PRINTING", "CORPORATE GIFTS"], ["PRINTING", "PACKAGING"],
      ["WEBSITE", "CORPORATE GIFTS"], ["WEBSITE", "BRANDING"],
      ["SOCIAL MEDIA", "BRANDING"], ["SOCIAL MEDIA", "EVENTS"],
      ["PHOTOGRAPHY", "CORPORATE GIFTS"], ["PHOTOGRAPHY", "ADVERTISING"],
      ["CORPORATE GIFTS", "PACKAGING"], ["BRANDING", "PACKAGING"],
      ["BRANDING", "EVENTS"], ["ADVERTISING", "EVENTS"],
      ["PACKAGING", "SEO"], ["EVENTS", "VIDEOS"], ["SEO", "VIDEOS"], ["VIDEOS", "AUDIO PRODUCTION"], ["EVENTS", "AUDIO PRODUCTION"],
    ] as [string, string][],
  },
  oneVendor: {
    // title: [{ text: "WHY MANAGE" }, { text: "TEN VENDORS " }, { text: "WHEN YOU CAN HAVE ONE PARTNER?"}] as Line[],
    title: [{ text: "WHY MANAGE" }, { text: "TEN VENDORS ?" }, { text: "WHEN YOU CAN HAVE ONE PARTNER." }] as Line[],
    body: "From strategy and branding to digital content, packaging and growth, we bring every part of your brand together & everything in between.",
    callout: "EXPLORE WHAT WE DO →",
    cta: {
    primary: { label: "START A CONVERSATION", href: "/contact" },
    secondary: { label: "EXPLORE WHAT WE DO", href: "/work" },
    },
  },
};


export const orbitItems: IconItem[] = [
  { label: "BRANDING", icon: Tag }, { label: "DIGITAL", icon: Globe },
  { label: "SOCIAL MEDIA", icon: MessageCircle }, { label: "VIDEO", icon: Play },
  { label: "AUDIO", icon: Mic }, { label: "WEBSITES", icon: Laptop },
  { label: "PACKAGING", icon: Package }, { label: "SEO", icon: Search },
  { label: "PRINT", icon: Printer }, { label: "ADVERTISING", icon: Megaphone },
];

export const serviceItems:IconItem[] = [
  { label: "BRANDING", icon: Tag }, { label: "DIGITAL", icon: Globe },
  { label: "SOCIAL MEDIA", icon: MessageCircle }, { label: "VIDEO", icon: Play },
  { label: "AUDIO", icon: Mic }, { label: "WEBSITES", icon: Laptop },
  { label: "PACKAGING", icon: Package }, { label: "SEO", icon: Search },
  { label: "PRINT", icon: Printer }, { label: "ADVERTISING", icon: Megaphone },
];


// THE IDEA
export const idea = {
  label: { num: "03", text: "THE IDEA" },
  title: [{ text: "ONE CALL." }, { text: "ONE PARTNER.", accent: true }, { text: "ONE RESPONSIBILITY." }] as Line[],
  body: "Vijyapana brings your marketing and advertising needs together under one roof.",
  orbitCenter: ["ONE PARTNER.", "ONE RESPONSIBILITY."],
  statement: [{ text: "THESE ARE NOT" }, { text: "WHAT WE ARE SELLING." }, { text: "THEY ARE THE TOOLS" }, { text: "WE USE TO BUILD" }, { text: "YOUR BRAND." }] as Line[],

  image: { src: `${IMG}/building.webp`, alt: "Vijyapana office building", position: "right bottom" } as ImageAsset,
};

// WHAT DO YOU ACTUALLY NEED
export const need = {
  label: { num: "04", text: "WE ASK BEFORE WE SELL" },
  title: [{ text: "WHAT DO" }, { text: "YOU ACTUALLY", accent: true }, { text: "NEED?" }] as Line[],
  body: "We don't recommend something just because we sell it.",
  callout: "If you don't need it, we'll tell you.",

  image: { src: `${IMG}/need-thinker.webp`, alt: "Consultant thinking through a client's real needs" } as ImageAsset,
  questions: ["WHAT?", "WHY?", "WHO?", "WHEN?", "WHERE?", "HOW?", "HOW MUCH?"],
  finalQuestion: "SHOULD WE EVEN DO IT?",
  sometimes: [
    { top: "THE BEST WEBSITE", accent: "IS NO WEBSITE.", icon: Globe },
    { top: "THE BEST ADVERTISEMENT", accent: "IS BETTER PACKAGING.", icon: Package },
    { top: "THE BEST BRANDING", accent: "IS SIMPLY FIXING THE CUSTOMER EXPERIENCE.", icon: User },
  ],
  outcomes: {
    title: [{ text: "WE SELL OUTCOMES." }, { text: "NOT SERVICES.", accent: true }] as Line[],
    body: ["Your growth is the result.", "We just make it happen."],
  },
};

// NOT A VENDOR
export const partner = {
  label: { num: "05", text: "NOT A VENDOR" },
  title: [{ text: "WE DON'T WANT" }, { text: "CLIENTS,", accent: true }, { text: "WE WANT" }, { text: "PARTNERS.", accent: true }] as Line[],
  body: ["A different relationship.", "A shared responsibility."],

  image: { src: `${IMG}/partner-handshake.webp`, alt: "Vijyapana and a client shaking hands as partners" } as ImageAsset,
  client: { title: "A CLIENT", points: [{ label: "Pays for a service.", icon: HandCoins }, { label: "Gives a requirement.", icon: FileText }, { label: "Gets a deliverable.", icon: Package }, { label: "Moves on.", icon: LogOut }] as IconItem[] },
  partnerCol: { title: "A PARTNER", points: [{ label: "Gives us responsibility.", icon: ShieldCheck }, { label: "Gives us trust.", icon: Users }, { label: "Grows with us.", icon: BarChart3 }, { label: "Builds with us.", icon: TrendingUp }] as IconItem[] },
  focus: {
    left: [{ text: "YOU FOCUS ON" }, { text: "BUILDING THE BUSINESS.", accent: true }] as Line[],
    right: [{ text: "WE FOCUS ON" }, { text: "BUILDING THE BRAND.", accent: true }] as Line[],
 
    image: { src: `${IMG}/focus-banner.webp`, alt: "" } as ImageAsset, 
  },
  responsibility: {
    title: "OUR RESPONSIBILITY. YOUR FREEDOM.",
    steps: [
      { label: "THINK.", sub: "We think from every angle.", icon: Lightbulb },
      { label: "PLAN.", sub: "We plan with purpose.", icon: ClipboardList },
      { label: "RESEARCH.", sub: "We research what matters.", icon: Search },
      { label: "COORDINATE.", sub: "We align every moving part.", icon: Users },
      { label: "EXECUTE.", sub: "We execute flawlessly.", icon: Rocket },
      { label: "IMPROVE.", sub: "We improve continuously.", icon: BarChart3 },
    ] as (IconItem & { sub: string })[],
    footer: { pre: "If Vijyapana is connected,", accent: "marketing is no longer the owner's headache." },
  },
};

// WHAT WE BELIEVE
export const belief = {
  label: { num: "06", text: "WHAT WE BELIEVE" },
  title: [{ text: "BRANDING" }, { text: "IS NOT", accent: true }, { text: "DECORATION." }] as Line[],

  image: { src: `${IMG}/belief-building.webp`, alt: "Vijyapana headquarters" } as ImageAsset,
  chain: [
    { label: "BRANDING", sub: "Creates identity.", icon: PenTool },
    { label: "PERCEPTION", sub: "Shapes how people see you.", icon: Eye },
    { label: "TRUST", sub: "Builds confidence and reliability.", icon: Handshake },
    { label: "SALES", sub: "Turns trust into action.", icon: BarChart3 },
    { label: "BUSINESS", sub: "Creates value and stability.", icon: Briefcase },
    { label: "GROWTH", sub: "Expands impact and opportunities.", icon: TrendingUp },
  ] as (IconItem & { sub: string })[],
  infra: {
    title: [{ text: "BRANDING IS" }, { text: "INFRASTRUCTURE.", accent: true }] as Line[],
    pre: "Every business deserves professional branding—not simply because it looks beautiful,",
    accent: "but because it changes perception.",
 
    image: { src: `${IMG}/infra-skyline.webp`, alt: "" } as ImageAsset,
  },
};

// THE FUTURE WE WANT
export const future = {
  label: { num: "07", text: "THE FUTURE WE WANT" },
  title: [{ text: "YOU RUN" }, { text: "YOUR BUSINESS," }, { text: "WE BRING YOU", accent: true }, { text: "CUSTOMERS.", accent: true }] as Line[],

  image: { src: `${IMG}/future-sunset.webp`, alt: "Business leader looking over an Indian city skyline at sunset", position: "70% center" } as ImageAsset,
  beliefs: [
    { pre: "Every shop should have an", accent: "identity.", icon: Store },
    { pre: "Every brand should tell a", accent: "story.", icon: MessageCircle },
    { pre: "Good design should be", accent: "normal.", icon: Pencil },
    { pre: "Technology should be", accent: "normal.", icon: Laptop },
    { pre: "Professional marketing should be", accent: "normal.", icon: Megaphone },
  ],
  footnote: { pre: "Not because we want every city to look like London or New York. But because every Indian business deserves the power of", accent: "great branding." },
  vision: {
    label: "OUR VISION",
    title: [{ text: "INDIA'S MOST TRUSTED" }, { text: "MARKETING & BRANDING", accent: true }, { text: "PARTNER." }] as Line[],
    body: "That is what we are building.",

    image: { src: `${IMG}/india-map.png`, alt: "" } as ImageAsset,
  },
};

// THE PROMISE (closing panel)
export const promise = {
  label: "THE VIJYAPANA PROMISE",
  title: [{ text: "WE DON'T PROMISE TO DO EVERYTHING." }] as Line[],
  title2: [{ text: "WE PROMISE" , accent: true}, { text: "TO TAKE RESPONSIBILITY.", accent: true }] as Line[],
   sub: { text: "WE PROMISE TO TAKE THE RESPONSIBILITY", case: "upper" , accent: true } as Line,
  chain: [
    { pre: "RESPONSIBILITY CREATES", accent: "TRUST.", icon: ShieldCheck },
    { pre: "TRUST CREATES", accent: "BRANDS.", icon: Users },
    { pre: "BRANDS CREATE", accent: "BUSINESSES.", icon: BarChart3 },
    { pre: "BUSINESSES BUILD", accent: "NATIONS.", icon: Globe },
  ],
  closing: { pre: "AND THAT IS WHY", accent: "VIJYAPANA EXISTS." },
  cta: {
    heading: "LET'S BUILD SOMETHING THAT MATTERS.",
    primary: { label: "START A CONVERSATION", href: "/contact" },
    secondary: { label: "EXPLORE OUR WORK", href: "/work" },
  },
  footer: { left: "MARKETING | BRANDING | GROWTH", mid: ["ONE CALL.", "ONE PARTNER.", "ONE RESPONSIBILITY."], right: "EST. 2017 · KANPUR, INDIA" },
};
