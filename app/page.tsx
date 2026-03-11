"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import * as Icons from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
// import { ImageEditor } from "@/components/image-editor"

const caseStudies = [
  {
    title: "i-Kfz: Digital Vehicle Document for Germany - over 1 million downloads",
    role: "Lead Product & Accessibility Designer",
    challenge: "Designing Germany's first fully accessible government app for 1M+ users",
    outcome: "1M+ users, 300+ five-star reviews, full BITV accessibility certification",
    tags: ["Design Leadership", "Accessibility", "Team Scaling"],
    url: "/case-studies/digital-drivers-licence",
    image: "/images/ikfz-phone-mockup-home.png",
  },
  {
    title: "Consultant for AI Risk & Responsibility Frameworks",
    role: "AI Governance & Risk Consultant",
    challenge: "Bridging EU AI Act requirements with practical cybersecurity implementation",
    outcome:
      "Comprehensive AI governance frameworks for cybersecurity contexts, bridging EU regulations with practical implementation",
    tags: ["AI Governance", "Cybersecurity", "Risk Management", "EU AI Act"],
    url: "/case-studies/trust-by-design-framework",
    image: "/images/trust-meeting.png",
    isWIP: true,
  },
  {
    title: "Accessibility Audit & BITV Certification",
    role: "Lead UX & Accessibility Designer",
    challenge: "Designing a digital identity service usable by everyone, including field verification by police",
    outcome: "BITV pre-audit complete (98/98 criteria)",
    tags: ["Accessibility", "BITV 2.0", "Inclusive Design", "Public Sector"],
    url: "/case-studies/digital-identity-services",
    image: "/accessible-government-portal.jpg",
  },
]

export default function Page() {
  const [activeMode, setActiveMode] = useState<string | null>(null)
  const [mobileActiveMode, setMobileActiveMode] = useState("All")
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([])
  const [showAllServices, setShowAllServices] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // pixels above the element
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
    }
  }

  const filteredServices = activeMode ? caseStudies.filter((service) => service.tags.includes(activeMode)) : caseStudies

  const mobileFilteredServices =
    mobileActiveMode === "All" ? caseStudies : caseStudies.filter((service) => service.tags.includes(mobileActiveMode))

  const toggleAccordion = (index: number) => {
    setExpandedAccordions((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Mobile First */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage src="/images/design-mode/me2.png" alt="Jennifer Simonds-Spellmann" />
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">JS</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-sm font-semibold text-foreground">Jennifer Simonds</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  Product Designer · Adoption · AI · Accessibility · Consultation{" "}
                </p>
              </div>
            </div>

            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <Button
                size="sm"
                className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold h-9 shadow-sm"
                asChild
              >
                <a href="mailto:info@jennifersimonds.com">
                  <Icons.Mail className="h-3.5 w-3.5 mr-1.5" />
                  Contact
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="h-9 w-9 p-0" asChild>
                <a
                  href="https://www.linkedin.com/in/simondsjennifer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="flex items-center justify-center"
                >
                  <Icons.Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 hover:bg-accent rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <Icons.Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 z-50 sm:hidden" onClick={() => setMobileMenuOpen(false)} />

          {/* Slide-in menu */}
          <nav className="fixed top-0 right-0 bottom-0 w-64 bg-card border-l border-border z-50 sm:hidden shadow-lg animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Menu header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-semibold">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-accent rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <Icons.X className="h-5 w-5" />
                </button>
              </div>

              {/* Menu links */}
              <div className="flex-1 flex flex-col gap-2 p-4">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                >
                  Work
                </a>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                >
                  Services
                </a>
              </div>

              {/* Contact button at bottom */}
              <div className="p-4 border-t border-border space-y-3">
                <Button
                  size="sm"
                  className="w-full bg-white text-[oklch(0.65_0.15_85)] hover:bg-white/90 font-semibold h-10 shadow-sm"
                  asChild
                >
                  <a href="mailto:info@jennifersimonds.com">
                    <Icons.Mail className="h-4 w-4 mr-2" />
                    Contact
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="w-full h-10 bg-transparent" asChild>
                  <a
                    href="https://www.linkedin.com/in/simondsjennifer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Icons.Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        </>
      )}

      <main className="container mx-auto px-4 py-6">
        {/* Hero Section - Mobile First with Visual Signal Blocks */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN: Hero + Case Studies */}
          <div className="lg:col-span-2 order-1 space-y-6">
            {/* Hero Card */}
            <Card className="relative rounded-2xl shadow-sm border-border overflow-hidden bg-[oklch(0.65_0.15_85)]">
              <CardContent className="relative z-10 p-8 min-h-[280px] flex flex-col justify-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display leading-[1.1] tracking-tight mb-4 text-balance text-white">
                  <span className="font-light block">Designing</span>
                  <span className="font-black block relative">
                    Trustworthy
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-white/30" />
                  </span>
                  <span className="font-medium block">Digital Systems</span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-white/95">
                  Product Design · Research · Systems · Strategy · Risk Analysis · AI Governance · Inclusion ·
                  Accessibility
                </p>
                <Button
                  onClick={() => {
                    const element = document.getElementById("case-studies")
                    if (element) {
                      const offset = 80 // pixels above the element
                      const elementPosition = element.getBoundingClientRect().top + window.scrollY
                      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
                    }
                  }}
                  className="mt-6 lg:hidden bg-white text-[oklch(0.65_0.15_85)] hover:bg-white/90 font-semibold"
                >
                  See Work
                </Button>
              </CardContent>
            </Card>

            {/* About Me Card - Mobile: appears after hero */}
            <Card className="rounded-2xl shadow-sm border-border bg-card p-0 overflow-hidden order-2 lg:hidden">
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/images/f8f19abf-9d96-47d9-8b32-26be54979267.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/60 to-card" />
              </div>

              <CardContent className="p-8 -mt-8 relative z-10">
                <h3 className="text-xl font-bold mb-6 text-primary">About Me</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I design trustworthy digital systems for complex, regulated contexts.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    My work connects human needs with system-level thinking — creatively, responsibly, and hands-on.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategy and execution come together, with trust, accessibility, and risk designed in from the
                    start.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8" id="case-studies">
              {/* Case Studies Card */}
              <Card className="rounded-2xl shadow-lg border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-primary">Case Studies</h2>

                  {/* Replaced Card-based Mobile Layout with Editorial Summary Blocks */}
                  <div className="flex flex-col gap-3 sm:flex sm:flex-col sm:gap-6 lg:flex lg:flex-col lg:gap-6">
                    {/* Case Study 1: Responsible AI - Mobile: Editorial Summary, Tablet+: Card */}
                    <div className="max-sm:space-y-4 max-sm:py-6 max-sm:border-b max-sm:border-border/30">
                      {/* Mobile Summary View (≤640px) */}
                      <div className="sm:hidden">
                        <h3 className="text-xl font-bold mb-2 text-foreground">Responsible AI — Case Study</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          Created Trust by Design framework through independent research at ELISAVA
                        </p>
                        <ul className="space-y-2 mb-6 text-sm text-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Master's research in Responsible AI</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>EU AI Act practical implementation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Trust & risk framework design</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Cross-stakeholder alignment</span>
                          </li>
                        </ul>
                        <Link
                          href="/case-studies/trust-by-design-framework"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          View Full Case Study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      {/* Tablet & Desktop Card View (≥640px) */}
                      <Card className="hidden sm:block rounded-2xl shadow-sm shadow-amber-600/10 border-2 border-amber-600/30 bg-[#E8E5E1] transition-all duration-300 hover:shadow-md hover:shadow-amber-600/20 hover:border-amber-600/40">
                        <CardContent className="p-4 lg:p-8">
                          <div className="flex flex-col gap-3 lg:gap-6">
                            <div className="w-full">
                              <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4 text-foreground leading-tight">
                                Responsible AI
                              </h3>
                              <p className="text-xs lg:text-[15px] italic text-[#6B7280] mb-2 lg:mb-3 leading-snug lg:leading-relaxed">
                                <span className="lg:hidden">Trust by Design at ELISAVA</span>
                                <span className="hidden lg:inline">
                                  Created Trust by Design framework through independent research at ELISAVA
                                </span>
                              </p>
                              <p className="hidden lg:block text-base text-muted-foreground leading-relaxed mb-6">
                                Mixed-method research · Impact & risk analysis
                              </p>

                              <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2 lg:gap-3 mb-3 lg:mb-6">
                                <div className="flex flex-row items-center gap-2 p-2 lg:p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.GraduationCap className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-xs lg:text-base text-foreground leading-tight">
                                      Built Responsible AI design capability
                                    </span>
                                    <span className="text-[11px] lg:text-sm text-muted-foreground leading-snug">
                                      Masters in Design for Responsible AI
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-row items-center gap-2 p-2 lg:p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.Scale className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-xs lg:text-base text-foreground leading-tight">
                                      Translated regulation into practice
                                    </span>
                                    <span className="text-[11px] lg:text-sm text-muted-foreground leading-snug">
                                      Operationalized EU AI Act, NIST & OECD
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-row items-center gap-2 p-2 lg:p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.Layers className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-xs lg:text-base text-foreground leading-tight">
                                      Enabled trust in AI systems
                                    </span>
                                    <span className="text-[11px] lg:text-sm text-muted-foreground leading-snug">
                                      Risk analysis and strategy
                                    </span>
                                  </div>
                                </div>

                                {/* Badge 4 - Desktop only */}
                                <div className="hidden lg:flex flex-row items-center gap-2 p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-base text-foreground leading-tight">
                                      Enabled cross-stakeholder alignment
                                    </span>
                                    <span className="text-sm text-muted-foreground leading-snug">
                                      Design, policy & delivery teams
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <p className="hidden lg:block text-sm italic text-[#6B7280] mb-4 leading-relaxed">
                                Making AI systems trustworthy for everyone—from citizens to regulators
                              </p>

                              <Button
                                className="w-full h-9 lg:h-14 text-sm lg:text-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] rounded-xl"
                                asChild
                              >
                                <a
                                  href="/case-studies/trust-by-design-framework"
                                  className="flex items-center justify-center gap-2"
                                >
                                  View Full Case Study
                                  <ArrowRight className="h-5 w-5 hidden sm:inline" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Subtle divider between case studies - hidden on tablet */}
                    <div className="hidden lg:flex items-center justify-center py-1">
                      <div className="border-t border-border/30 w-full max-w-md" />
                    </div>

                    {/* Case Study 2: UX & Product Design - Mobile: Editorial Summary, Tablet+: Card */}
                    <div className="max-sm:space-y-4 max-sm:py-6 max-sm:border-b max-sm:border-border/30">
                      {/* Mobile Summary View (≤640px) */}
                      <div className="sm:hidden">
                        <h3 className="text-xl font-bold mb-2 text-foreground">UX & Product Design — Case Study</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          Conceived and led i-Kfz from 6-person team to 1M+ users
                        </p>
                        <ul className="space-y-2 mb-6 text-sm text-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Germany's first BITV-certified government app</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>4.8★ iOS rating with 1M+ users</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>15+ years regulated systems delivery</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>400+ user interviews conducted</span>
                          </li>
                        </ul>
                        <Link
                          href="/case-studies/digital-drivers-licence"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          View Full Case Study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      {/* Tablet & Desktop Card View (≥640px) */}
                      <Card className="hidden sm:block rounded-2xl shadow-sm shadow-amber-600/10 border-2 border-amber-600/30 bg-[#E8E5E1] transition-all duration-300 hover:shadow-md hover:shadow-amber-600/20 hover:border-amber-600/40">
                        <CardContent className="p-4 lg:p-8">
                          <div className="flex flex-col gap-3 lg:gap-6">
                            <div className="w-full">
                              <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-2 text-foreground leading-tight">
                                UX & Product Design
                              </h3>
                              <p className="text-xs lg:text-base italic text-[#6B7280] mb-2 lg:mb-3 leading-snug lg:leading-relaxed">
                                <span className="lg:hidden">i-Kfz: 6-person team to 1M+ users</span>
                                <span className="hidden lg:inline">
                                  Conceived, pitched, and led i-Kfz from 6-person team to 1M+ users—Germany's first 100%
                                  BITV-certified government app
                                </span>
                              </p>
                              <p className="text-xs lg:text-base text-muted-foreground leading-snug lg:leading-relaxed mb-2 lg:mb-6">
                                <span className="lg:hidden">Design systems · Figma</span>
                                <span className="hidden lg:inline">
                                  Design systems · Figma · Production-ready prototypes
                                </span>
                              </p>

                              <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2 lg:gap-3 mb-3 lg:mb-6">
                                <div className="flex flex-row items-center gap-2 p-2 lg:p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.Figma className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-xs lg:text-base text-foreground leading-tight">
                                      Figma Expert
                                    </span>
                                    <span className="text-[11px] lg:text-sm text-muted-foreground leading-snug">
                                      Production-ready systems
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-row items-center gap-2 p-2 lg:p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.Award className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-xs lg:text-base text-foreground leading-tight">
                                      15+ Years
                                    </span>
                                    <span className="text-[11px] lg:text-sm text-muted-foreground leading-snug">
                                      Regulated systems delivery
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-row items-center gap-2 p-2 lg:p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.Star className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-xs lg:text-base text-foreground leading-tight">
                                      4.8★ iOS Rating
                                    </span>
                                    <span className="text-[11px] lg:text-sm text-muted-foreground leading-snug">
                                      User satisfaction
                                    </span>
                                  </div>
                                </div>

                                {/* Badge 4 - Desktop only */}
                                <div className="hidden lg:flex flex-row items-center gap-2 p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.Search className="h-5 w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-base text-foreground leading-tight">
                                      400+ User Interviews
                                    </span>
                                    <span className="text-sm text-muted-foreground leading-snug">
                                      Qualitative user research
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <p className="hidden lg:block text-sm italic text-[#6B7280] mb-4 leading-relaxed">
                                Delivering accessible government services at scale
                              </p>

                              <Button
                                className="w-full h-9 lg:h-14 text-sm lg:text-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] rounded-xl"
                                asChild
                              >
                                <a
                                  href="/case-studies/digital-drivers-licence"
                                  className="flex items-center justify-center gap-2"
                                >
                                  View Full Case Study
                                  <ArrowRight className="h-5 w-5 hidden sm:inline" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Subtle divider between case studies - hidden on tablet */}
                    <div className="hidden lg:flex items-center justify-center py-1">
                      <div className="border-t border-border/30 w-full max-w-md" />
                    </div>

                    {/* Case Study 3: Digital Identity Services - Mobile: Editorial Summary, Tablet+: Card */}
                    <div className="max-sm:space-y-4 max-sm:py-6">
                      {/* Mobile Summary View (≤640px) */}
                      <div className="sm:hidden">
                        <h3 className="text-xl font-bold mb-2 text-foreground">
                          Digital Identity Services — Case Study
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          Led accessibility design achieving 98/98 WCAG audit criteria
                        </p>
                        <ul className="space-y-2 mb-6 text-sm text-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>BITV-certified with 1M+ users</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Led agile project work across teams</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>20+ accessibility training sessions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>National adoption scale achieved</span>
                          </li>
                        </ul>
                        <Link
                          href="/case-studies/digital-identity-services"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          View Full Case Study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      {/* Tablet & Desktop Card View (≥640px) */}
                      <Card className="hidden sm:block rounded-2xl shadow-sm shadow-amber-600/10 border-2 border-amber-600/30 bg-[#E8E5E1] transition-all duration-300 hover:shadow-md hover:shadow-amber-600/20 hover:border-amber-600/40">
                        <CardContent className="p-4 lg:p-8">
                          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                            <div className="w-full">
                              <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-3 text-foreground leading-tight">
                                Digital Identity Services
                              </h3>
                              <p className="text-xs lg:text-base italic text-[#6B7280] mb-2 lg:mb-3 leading-snug lg:leading-relaxed">
                                Led accessibility design for Germany's first BITV-certified government app, achieving
                                98/98 audit criteria
                              </p>
                              <p className="text-xs lg:text-base text-muted-foreground leading-snug lg:leading-relaxed mb-3 lg:mb-6">
                                Innovation · Enablement · Change management
                              </p>

                              <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2 lg:gap-3 mb-3 lg:mb-6">
                                <div className="flex flex-row items-center gap-2 p-2 lg:p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-xs lg:text-base text-foreground leading-tight">
                                      BITV Certified
                                    </span>
                                    <span className="text-[11px] lg:text-sm text-muted-foreground leading-snug">
                                      Germany's first gov app
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-row items-center gap-2 p-2 lg:p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.Users className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-xs lg:text-base text-foreground leading-tight">
                                      1M+ Users
                                    </span>
                                    <span className="text-[11px] lg:text-sm text-muted-foreground leading-snug">
                                      National adoption scale
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-row items-center gap-2 p-2 lg:p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <Icons.Briefcase className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-xs lg:text-base text-foreground leading-tight">
                                      Project Management
                                    </span>
                                    <span className="text-[11px] lg:text-sm text-muted-foreground leading-snug">
                                      Led agile project work
                                    </span>
                                  </div>
                                </div>

                                <div className="hidden lg:flex flex-col gap-1.5 p-4 rounded-lg bg-[#FFF8E7] border border-border/50">
                                  <div className="flex items-center gap-2.5">
                                    <Icons.Book className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="font-semibold text-base text-foreground leading-tight">
                                      Accessibility Training
                                    </span>
                                  </div>
                                  <span className="text-sm text-muted-foreground leading-relaxed">
                                    20+ sessions facilitated
                                  </span>
                                </div>
                              </div>

                              <p className="hidden lg:block text-sm italic text-[#6B7280] mb-4 leading-relaxed">
                                Scaling accessible digital services
                              </p>

                              <Button
                                size="lg"
                                className="w-full h-9 lg:h-14 text-sm lg:text-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] rounded-xl"
                                asChild
                              >
                                <a
                                  href="/case-studies/digital-identity-services"
                                  className="flex items-center justify-center gap-2"
                                >
                                  View Full Case Study
                                  <Icons.ArrowRight className="h-5 w-5 hidden sm:inline" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6 order-4">
            <Card className="hidden lg:block rounded-2xl shadow-sm border-border bg-card p-0 overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/images/f8f19abf-9d96-47d9-8b32-26be54979267.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/60 to-card" />
              </div>

              <CardContent className="p-8 -mt-8 relative z-10">
                <h3 className="text-xl font-bold mb-6 text-primary">About Me</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I am creative and systematic in designing trustworthy accessible digital systems for complex,
                    regulated contexts.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I approach problems as innovation challenges. My work connects human needs with system-level
                    thinking — creatively, responsibly, and hands-on.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategy and execution come together, with trust, accessibility, and risk designed in from the
                    start.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* My Expertise Card */}
            <Card className="rounded-2xl shadow-sm border-border bg-card">
              <CardContent className="p-8 px-4">
                <h3 className="text-xl font-bold mb-6 text-primary">My Expertise</h3>

                <div className="grid grid-cols-1 gap-3">
                  {/* Accessibility Strategist - Moved to the top */}
                  <details className="group rounded-lg bg-secondary/5 border border-border/50 overflow-hidden md:rounded-none md:border-0 md:border-b md:border-border/30 md:bg-transparent md:pb-0 lg:rounded-lg lg:border lg:border-border/50 lg:bg-secondary/5">
                    <summary className="cursor-pointer list-none p-4 flex items-center justify-between hover:bg-secondary/10 transition-colors md:p-3 md:hover:bg-transparent lg:p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 md:w-8 md:h-8 lg:w-10 lg:h-10">
                          <Icons.Accessibility className="h-5 w-5 text-primary md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-foreground">Accessibility Strategist</h5>
                          <p className="text-xs text-muted-foreground">WCAG 2.2, EN 301 549, BITV 2.0 expert</p>
                        </div>
                      </div>
                      <Icons.ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 pt-2 md:px-0 md:pl-11 md:pb-3 lg:px-4 lg:pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Integrating accessibility from concept through deployment. Making inclusive experiences core to
                        brand and product strategy, ensuring WCAG 2.2, EN 301 549, and BITV 2.0 compliance from day one.
                      </p>
                    </div>
                  </details>

                  {/* Designing for AIx */}
                  <details className="group rounded-lg bg-secondary/5 border border-border/50 overflow-hidden">
                    <summary className="cursor-pointer list-none p-4 flex items-center justify-between hover:bg-secondary/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icons.Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-foreground">Designing for AIx</h5>
                          <p className="text-xs text-muted-foreground">AI Experience Design Framework</p>
                        </div>
                      </div>
                      <Icons.ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 pt-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Creating transparent, explainable AI interactions with trust, ethics, and security at the core.
                      </p>
                    </div>
                  </details>

                  {/* User Research & Insight */}
                  <details className="group rounded-lg bg-secondary/5 border border-border/50 overflow-hidden">
                    <summary className="cursor-pointer list-none p-4 flex items-center justify-between hover:bg-secondary/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icons.Search className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-foreground">User Research & Insight</h5>
                          <p className="text-xs text-muted-foreground">Mixed-method research approach</p>
                        </div>
                      </div>
                      <Icons.ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 pt-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Interviews, co-design, surveys, and accessibility testing to validate decisions and reduce risk.
                      </p>
                    </div>
                  </details>

                  {/* Journey & CX Mapping */}
                  <details className="group rounded-lg bg-secondary/5 border border-border/50 overflow-hidden">
                    <summary className="cursor-pointer list-none p-4 flex items-center justify-between hover:bg-secondary/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icons.Map className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-foreground">Journey & CX Mapping</h5>
                          <p className="text-xs text-muted-foreground">End-to-end experience design</p>
                        </div>
                      </div>
                      <Icons.ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 pt-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Mapping processes and governance stages with clear journey maps and system diagrams.
                      </p>
                    </div>
                  </details>

                  {/* Design & Adoption Systems */}
                  <details className="group rounded-lg bg-secondary/5 border border-border/50 overflow-hidden">
                    <summary className="cursor-pointer list-none p-4 flex items-center justify-between hover:bg-secondary/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icons.Layers className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-foreground">Design & Adoption Systems</h5>
                          <p className="text-xs text-muted-foreground">Scalable patterns</p>
                        </div>
                      </div>
                      <Icons.ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 pt-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Building accessible brand, UX, and UI systems. Driving adoption through workshops and public
                        speaking.
                      </p>
                    </div>
                  </details>

                  {/* Accessibility Auditor */}
                  <details className="group rounded-lg bg-secondary/5 border border-border/50 overflow-hidden">
                    <summary className="cursor-pointer list-none p-4 flex items-center justify-between hover:bg-secondary/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icons.Search className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-foreground">Accessibility Auditor</h5>
                          <p className="text-xs text-muted-foreground">WCAG, EN 301 549, BITV 2.0</p>
                        </div>
                      </div>
                      <Icons.ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 pt-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Conducting thorough accessibility audits to ensure compliance and improve user experiences.
                      </p>
                    </div>
                  </details>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
