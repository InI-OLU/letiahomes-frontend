// src/components/ui/PropertyCard.tsx

import Image from "next/image"
import Link from "next/link"
import { BedDouble, Bath, Car, Maximize2 } from "lucide-react"
import { Property } from "@/types/property"

type PropertyCardProps = {
  property: Property
}

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function PropertyCard({ property }: PropertyCardProps) {
  const {
    id,
    name,
    address,
    price,
    images,
    beds,
    baths,
    garages,
    sqft,
    hostAvatar,
  } = property

  const mainImage = images[0] ?? null

  return (
    <Link
      href={`/properties/${id}`}
      className="group block rounded-lg overflow-hidden bg-[#1a1a1a] border border-white/8 hover:border-white/20 transition-colors"
    >
      {/* Image */}
      <div className="relative h-52 w-full bg-white/5">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-white/20 text-xs">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-bold text-sm tracking-wide uppercase">
          {name}
        </h3>
        <p className="mt-1 text-white/50 text-xs">{address}</p>

        {/* Amenities */}
        <div className="mt-3 flex items-center gap-4 text-white/50 text-xs">
          <span className="flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5" />
            {beds} beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3.5 w-3.5" />
            {baths} baths
          </span>
          <span className="flex items-center gap-1">
            <Car className="h-3.5 w-3.5" />
            {garages} garages
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 className="h-3.5 w-3.5" />
            {sqft} sqft
          </span>
        </div>

        {/* Price + Avatar */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-white font-semibold text-sm">
            {formatPrice(price)}
            <span className="text-white/40 font-normal">/day</span>
          </p>
          <div className="relative h-8 w-8 rounded-full overflow-hidden bg-white/10">
            {hostAvatar && (
              <Image
                src={hostAvatar}
                alt="Host"
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}