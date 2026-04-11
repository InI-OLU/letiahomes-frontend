// src/components/layout/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { footerContent } from "@/data/marketing-content";

const socialIconMap: Record<string, React.ReactNode> = {
  Instagram: <FaInstagram className="h-4 w-4" />,
  Facebook: <FaFacebook className="h-4 w-4" />,
  X: <FaXTwitter className="h-4 w-4" />,
};

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 px-8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <span className="text-white font-bold text-xl tracking-tight">
            ▌NIH
          </span>
        </div>

        {/* Four columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <div>
            <p className="text-white text-sm font-semibold">Email</p>

            <a
              href={`mailto:${footerContent.email}`}
              className="mt-3 block text-white/50 text-sm hover:text-white transition-colors"
            >
              {footerContent.email}
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-white text-sm font-semibold">Phone Number</p>

            <a
              href={`tel:${footerContent.phone}`}
              className="mt-3 block text-white/50 text-sm hover:text-white transition-colors"
            >
              {footerContent.phone}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white text-sm font-semibold">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {footerContent.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <p className="text-white text-sm font-semibold">Explore</p>
            <ul className="mt-3 space-y-2">
              {footerContent.exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Socials */}
          <div className="flex items-center gap-6">
            {footerContent.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
              >
                {socialIconMap[social.platform]}
                <span>{social.handle}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-xs">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
