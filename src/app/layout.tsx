// src/app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { Rajdhani, Barlow } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-rajdhani",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "INIH Homes",
  description: "Where your next stay begins",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}