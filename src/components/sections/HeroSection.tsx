"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { heroContent, heroStats } from "@/data/marketing-content"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
}

export function HeroSection() {
  return (
    <section className="relative bg-[#e8e8e8] overflow-hidden min-h-[580px]">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 items-center gap-10 pt-16 pb-0">

        {/* Left — Text */}
        <motion.div
          className="pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight uppercase"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            variants={slideUpVariants}
            className="mt-6 text-black/60 text-base leading-7 max-w-md"
          >
            {heroContent.subtext}
          </motion.p>

          <motion.div
            variants={slideUpVariants}
            className="mt-8 flex items-center gap-6"
          >
            <Link
              href={heroContent.primaryCta.href}
              className="rounded-sm bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-black/80 transition-colors"
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="text-sm text-black/70 hover:text-black transition-colors"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.ul
            variants={slideUpVariants}
            className="mt-12 space-y-2"
          >
            {heroStats.map((stat) => (
              <li key={stat.label} className="text-black/70 text-sm">
                • {stat.value} {stat.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          className="relative h-[540px] w-full self-end"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{
              y: [0, -16, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
              },
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/hero-building.png"
              alt="INIH featured property building"
              fill
              priority
              className="object-contain object-bottom"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}