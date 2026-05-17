// src/components/sections/CtaBanner.tsx

import Image from "next/image"
import Link from "next/link"
import { ctaBannerContent } from "@/data/marketing-content"

export function CtaBanner() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cta-banner.png"
        alt="Luxury shortlet interior"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65"  />

      {/* Content — sits above overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h2 className="text-white text-4xl lg:text-5xl font-bold uppercase tracking-wide max-w-3xl leading-tight">
          {ctaBannerContent.headline}
        </h2>
        <p className="mt-5 text-white/60 text-base leading-7 max-w-xl">
          {ctaBannerContent.subtext}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <Link
            href={ctaBannerContent.primaryCta.href}
            className="rounded-sm border border-white/30 bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            {ctaBannerContent.primaryCta.label}
          </Link>
          <Link
            href={ctaBannerContent.secondaryCta.href}
            className="rounded-sm bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors"
          >
            {ctaBannerContent.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}