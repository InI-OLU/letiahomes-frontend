// src/data/marketing-content.ts

export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Properties", href: "/properties" },
]

export const heroContent = {
  headline: "WHERE YOUR NEXT STAY BEGINS",
  subtext:
    "Looking for a place that truly fits your needs? From short visits to extended stays, we connect you with spaces that feel just right.",
  primaryCta: { label: "Get Started", href: "/signup" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
} as const

export type Stat = {
  value: string
  label: string
}

export const heroStats: Stat[] = [
  { value: "100+", label: "Stays" },
  { value: "300+", label: "Guests" },
  { value: "20+", label: "Locations" },
  { value: "24/7", label: "Support" },
]
// Add to the bottom of src/data/marketing-content.ts

export type WhyChooseUsItem = {
  icon: string
  title: string
  description: string
}

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    icon: "shield-check",
    title: "Verified Spaces",
    description:
      "Every apartment is carefully checked to ensure quality, comfort, and reliability.",
  },
  {
    icon: "map-pin",
    title: "Stay Anywhere",
    description: "Find the perfect space whereever you go.",
  },
  {
    icon: "clipboard-list",
    title: "Easy Booking",
    description: "Book your space in minutes with a simple secure process.",
  },
]

export const ctaBannerContent = {
  headline: "YOUR PERFECT STAY STARTS HERE",
  subtext:
    "Explore a wide range of shortlet spaces in your preferred location, with options designed to match your comfort, style, and budget",
  primaryCta: { label: "Search", href: "/properties" },
  secondaryCta: { label: "Register", href: "/signup" },
} as const
// Add to the bottom of src/data/marketing-content.ts

export type HowItWorksStep = {
  icon: string
  title: string
  description: string
  href: string
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    icon: "search",
    title: "Search",
    description: "Find stays in your preferred location.",
    href: "/properties",
  },
  {
    icon: "hand-pointer",
    title: "Choose",
    description: "Browse and pick what fits you.",
    href: "/properties",
  },
  {
    icon: "clipboard-list",
    title: "Book",
    description: "Secure your stay in minutes.",
    href: "/properties",
  },
]
// Add to the bottom of src/data/marketing-content.ts

export type Testimonial = {
  id: string
  quote: string
  name: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "I needed a place on a short notice and found one within minutes. The location was perfect and the stay was stress-free.",
    name: "Amaka O.",
    avatar: "",
  },
  {
    id: "2",
    quote:
      "Very reliable platform. No surprises, no issues, just a great place to stay and relax.",
    name: "David E.",
    avatar: "",
  },
]

export const testimonialsContent = {
  heading: "WHAT OUR GUEST SAYS",
  subtext:
    "We are committed to delivering an exceptional experience for every guest. From easy booking to well prepared spaces, our goal is to make every stay stress-free and enjoyable. Here's what people who have used our platform have to say about their experience.",
} as const

// Add to the bottom of src/data/marketing-content.ts

export const footerContent = {
  email: "contact@inihhomes.com",
  phone: "+234 801 234 5678",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],
  exploreLinks: [
    { label: "Featured Stays", href: "/properties" },
    { label: "Popular Locations", href: "/locations" },
    { label: "Guest Reviews", href: "/reviews" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Shortlet Guide", href: "/guide" },
    { label: "FAQs", href: "/faqs" },
  ],
  socials: [
    { platform: "Instagram", handle: "inihhomes", href: "https://instagram.com/inihhomes" },
    { platform: "Facebook", handle: "inihhomes", href: "https://facebook.com/inihhomes" },
    { platform: "X", handle: "inihhomes", href: "https://x.com/inihhomes" },
  ],
  copyright: "© 2026 INIH. All rights reserved.",
} as const