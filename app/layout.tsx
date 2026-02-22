import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-serif-display",
})

export const metadata: Metadata = {
  title: "Jennifer Simonds-Spellmann — Senior CX Researcher & Discovery Lead",
  description: "Discovery programmes and mixed-method research for complex, regulated digital products — AI, accessibility, and public services.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Jennifer Simonds-Spellmann — Senior CX Researcher & Discovery Lead",
    description: "Discovery programmes and mixed-method research for complex, regulated digital products — AI, accessibility, and public services.",
    type: "website",
    url: "https://jennifersimonds.com",
    siteName: "Jennifer Simonds-Spellmann",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jennifer Simonds-Spellmann — Senior CX Researcher & Discovery Lead",
    description: "Discovery programmes and mixed-method research for complex, regulated digital products — AI, accessibility, and public services.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        {/* Fixed blob background for iOS 26 Liquid Glass aesthetic */}
        <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true" style={{ backgroundColor: '#f5f0e8' }}>
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="relative z-10">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          {children}
        </div>
      </body>
    </html>
  )
}
