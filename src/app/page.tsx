// src/app/page.tsx

import { Navbar } from "@/components/layout/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturedListings } from "@/components/sections/FeaturedListings"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Testimonials } from "@/components/sections/Testimonials"
import { Footer } from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      <div className="bg-[#e8e8e8]">
        <Navbar />
        <HeroSection />
      </div>
      <FeaturedListings />
      <WhyChooseUs />
      <CtaBanner />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  )
}