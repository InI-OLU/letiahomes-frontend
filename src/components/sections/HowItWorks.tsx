// src/components/sections/HowItWorks.tsx

import Link from "next/link"
import { Search, Hand, ClipboardList, LucideIcon } from "lucide-react"
import { howItWorksSteps, HowItWorksStep } from "@/data/marketing-content"

const iconMap: Record<string, LucideIcon> = {
  "search": Search,
  "hand-pointer": Hand,
  "clipboard-list": ClipboardList,
}

type StepCardProps = {
  step: HowItWorksStep
}

function StepCard({ step }: StepCardProps) {
  const Icon = iconMap[step.icon]

  return (
    <div className="flex flex-col items-center text-center rounded-2xl bg-[#1a1a1a] border border-white/8 px-8 py-10">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
        {Icon && <Icon className="h-5 w-5 text-white" />}
      </div>

      <h3 className="mt-6 text-white text-xl font-semibold">
        {step.title}
      </h3>
      <p className="mt-3 text-white/50 text-sm leading-6 max-w-xs">
        {step.description}
      </p>

      <Link
        href={step.href}
        className="mt-8 text-sm text-white/50 hover:text-white transition-colors underline-offset-4 hover:underline"
      >
        Learn more
      </Link>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section className="bg-[#0d0d0d] px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-4xl font-bold uppercase tracking-wide">
          How It Works
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <StepCard key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}