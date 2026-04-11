// src/components/layout/Navbar.tsx

import Link from "next/link"
import { Search } from "lucide-react"
import { navLinks } from "@/data/marketing-content"

export function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight text-black">
          ▌NIH
        </span>
      </Link>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-black/60 hover:text-black transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Search */}
      <div className="hidden md:flex items-center gap-2 rounded-full border border-black/20 bg-white/60 px-4 py-2">
        <input
          type="text"
          placeholder="I am looking for..."
          className="bg-transparent text-sm text-black placeholder:text-black/40 outline-none w-44"
        />
        <Search className="h-4 w-4 text-black/40" />
      </div>
    </header>
  )
}