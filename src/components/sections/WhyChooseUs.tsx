// src/components/sections/WhyChooseUs.tsx

import { ShieldCheck, MapPin, ClipboardList, LucideIcon } from "lucide-react"
import { whyChooseUsItems, WhyChooseUsItem } from "@/data/marketing-content"

// Icon resolver — maps string keys to Lucide components
const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "map-pin": MapPin,
  "clipboard-list": ClipboardList,
}

type FeatureColumnProps = {
  item: WhyChooseUsItem
  isLast: boolean
}

function FeatureColumn({ item, isLast }: FeatureColumnProps) {
  const Icon = iconMap[item.icon]

  return (
    <div className="relative flex flex-col items-center text-center px-8">
      {/* Vertical divider — shown between columns, not after the last */}
      {!isLast && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-white/15 hidden lg:block" />
      )}

      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
        {Icon && <Icon className="h-6 w-6 text-black" />}
      </div>

      <h3 className="mt-6 text-white text-xl font-semibold">
        {item.title}
      </h3>
      <p className="mt-3 text-white/50 text-sm leading-6 max-w-xs">
        {item.description}
      </p>
    </div>
  )
}

export function WhyChooseUs() {
  return (
    <section className="bg-[#111111] px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white text-4xl font-bold uppercase tracking-wide">
            Why Choose Us
          </h2>
          <p className="mt-5 text-white/50 text-base leading-7">
            We make short stays simple, reliable, and comfortable. Whether
            you&apos;re booking for a few nights or a longer stay, our platform
            is designed to give you a smooth experience from start to finish.
            No stress, no surprises.
          </p>
        </div>

        {/* Feature columns */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {whyChooseUsItems.map((item, index) => (
            <FeatureColumn
              key={item.title}
              item={item}
              isLast={index === whyChooseUsItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}