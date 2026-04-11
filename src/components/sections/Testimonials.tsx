// src/components/sections/Testimonials.tsx

import Image from "next/image"
import { testimonials, testimonialsContent, Testimonial } from "@/data/marketing-content"

type TestimonialCardProps = {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex items-start justify-between gap-6 rounded-2xl bg-[#1a1a1a] border border-white/8 p-6">
      <div className="flex-1">
        <p className="text-white/70 text-sm leading-7">
          {testimonial.quote}
        </p>
        <p className="mt-4 text-white font-semibold text-sm">
          -{testimonial.name}
        </p>
      </div>

      {/* Avatar */}
      <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden bg-white/10">
        {testimonial.avatar && (
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover grayscale"
          />
        )}
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-[#111111] px-8 py-20">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left — Heading */}
        <div>
          <h2 className="text-white text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight">
            {testimonialsContent.heading}
          </h2>
          <p className="mt-6 text-white/50 text-sm leading-7 max-w-sm">
            {testimonialsContent.subtext}
          </p>
        </div>

        {/* Right — Cards */}
        <div className="flex flex-col gap-5">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}