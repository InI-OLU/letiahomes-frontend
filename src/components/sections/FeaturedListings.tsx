// src/components/sections/FeaturedListings.tsx

import { featuredProperties } from "@/data/properties"
import { PropertyCard } from "@/components/ui/PropertyCard"

export function FeaturedListings() {
  return (
    <section className="bg-[#111111] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-xl font-semibold border-b border-white/20 pb-3 inline-block">
          Explore top rated selected homes
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}