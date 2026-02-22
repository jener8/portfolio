"use client"

import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sparkles,
  Mail,
  Linkedin,
  Instagram,
  Menu,
  X,
  Brain,
  Check,
  CheckCircle2,
  Smartphone,
  Star,
  Users,
  ArrowRight,
  ChevronDown,
  Search,
  MapPin,
  Layers,
  Heart,
  Calendar,
  Send,
  Loader2,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  BarChart3,
  ShieldCheck,
  Target,
  Eye,
  Code2,
  Image as ImageIcon,
  Database,
  Wrench,
  TrendingUp,
  TrendingDown,
  XCircle,
  AlertTriangle,
  HelpCircle,
} from "lucide-react"

import type { LucideProps } from "lucide-react"

// Custom icons for ones not available in all lucide-react versions
const Accessibility = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="16" cy="4" r="1" /><path d="m18 19 1-7-6 1" /><path d="m5 8 3-3 5.5 3-2.36 3.5" /><path d="M4.24 14.5a5 5 0 0 0 6.88 6" /><path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
  </svg>
)

const Handshake = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" />
  </svg>
)

const ScaleIcon = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
)

const MessagesSquare = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
  </svg>
)

const Icons = {
  Sparkles,
  Mail,
  Linkedin,
  Instagram,
  Menu,
  X,
  Brain,
  Check,
  CheckCircle: CheckCircle2,
  Smartphone,
  Star,
  Award: Star,
  Users,
  Accessibility,
  ArrowRight,
  ChevronDown,
  Search,
  Map: MapPin,
  Layers,
  Heart,
  Calendar,
  Send,
  Loader2,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  BarChart3,
  ShieldCheck,
  Target,
  Handshake,
  Leaf: Sparkles,
  Eye,
  Code2,
  ImageIcon,
  MessagesSquare,
  Database,
  Wrench,
  TrendingUp,
  TrendingDown,
  XCircle,
  Scale: ScaleIcon,
  AlertTriangle,
  HelpCircle,
}
import { useEffect, useState, useRef } from "react"

import Link from "next/link"
// import { ImageEditor } from "@/components/image-editor"
import { RememberHomeScroll } from "@/components/scroll-to-top"

const caseStudies = [
  {
    title: "i-Kfz: Germany's #1 Government App",
    role: "Lead Product & Accessibility Designer",
    challenge: "I designed an accessible app used by over 1 million people.",
    outcome: "1M+ downloads, 300+ five-star reviews, fully certified accessible.",
    tags: ["Design Leadership", "Accessibility", "Team Scaling"],
    url: "/case-studies/digital-drivers-licence",
    image: "/images/ikfz-phone-mockup-home.png",
  },
  {
    title: "AI Risk & Safety Framework",
    role: "AI Governance & Risk Consultant",
    challenge: "I built rules to make AI safe and compliant with EU law.",
    outcome: "Clear AI governance frameworks now used across cybersecurity teams.",
    tags: ["AI Governance", "Cybersecurity", "Risk Management", "EU AI Act"],
    url: "/case-studies/trust-by-design-framework",
    image: "/images/trust-meeting.png",
    isWIP: true,
  },
  {
    title: "Accessibility Audit: 98/98 Passed",
    role: "Lead UX & Accessibility Designer",
    challenge: "I tested a government ID service against all 98 accessibility rules.",
    outcome: "Passed all 98 checks. The service now works for everyone.",
    tags: ["Accessibility", "BITV 2.0", "Inclusive Design", "Public Sector"],
    url: "/case-studies/digital-identity-services",
    image: "/accessible-government-portal.jpg",
  },
  {
    title: "TrustBridge: AI Interaction Design",
    role: "AI Interaction Designer",
    challenge: "What happens when a real person meets an AI system. How that moment is designed determines whether they trust it.",
    outcome: "4 case studies across 3 user groups, EU AI Act Art. 13 ready, WCAG accessible.",
    tags: ["Consent Design", "Explainability", "AI Interaction", "Trust"],
    url: "/case-studies/trustbridge",
    image: "/images/trustbridge-hero.png",
  },
]

export default function Page() {
  const [activeMode, setActiveMode] = useState<string | null>(null)
  const [mobileActiveMode, setMobileActiveMode] = useState("All")
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([])
  const [showAllServices, setShowAllServices] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Reduce-motion toggle
  useEffect(() => {
    if (reducedMotion) {
      document.body.classList.add('reduced')
    } else {
      document.body.classList.remove('reduced')
    }
  }, [reducedMotion])
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", message: "", preferredDate: "", preferredTime: "" })
  const [bookingSubmitting, setBookingSubmitting] = useState(false)
  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [feedbackVotes, setFeedbackVotes] = useState<Record<string, string>>({})
  const [feedbackCounts, setFeedbackCounts] = useState<Record<string, number>>({
    "easy_yes": 24, "easy_no": 3,
    "understand_yes": 31, "understand_no": 2,
    "work_yes": 18, "work_maybe": 12, "work_no": 5,
    "contact_yes": 29, "contact_no": 4
  })
  const [expandedExpertise, setExpandedExpertise] = useState<number | null>(null)
  const [feedbackText, setFeedbackText] = useState("")
  const [submittedQuestions, setSubmittedQuestions] = useState<{text: string, timestamp: number}[]>([])
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  // Load saved feedback data from localStorage
  useEffect(() => {
    try {
      const savedVotes = localStorage.getItem("feedbackVotes")
      if (savedVotes) {
        setFeedbackVotes(JSON.parse(savedVotes))
      }
      const savedCounts = localStorage.getItem("feedbackCounts")
      if (savedCounts) {
        setFeedbackCounts(prev => ({ ...prev, ...JSON.parse(savedCounts) }))
      }
      const savedQuestions = localStorage.getItem("feedbackQuestions")
      if (savedQuestions) {
        setSubmittedQuestions(JSON.parse(savedQuestions))
      }
    } catch (e) {
      console.error("Error loading feedback data:", e)
    }
  }, [])

  const handleFeedbackVote = (questionId: string, option: string) => {
    // Allow multiple votes - update selection and increment count
    const newVotes = { ...feedbackVotes, [questionId]: option }
    setFeedbackVotes(newVotes)
    localStorage.setItem("feedbackVotes", JSON.stringify(newVotes))
    
    const countKey = `${questionId}_${option}`
    const newCounts = { ...feedbackCounts, [countKey]: (feedbackCounts[countKey] || 0) + 1 }
    setFeedbackCounts(newCounts)
    localStorage.setItem("feedbackCounts", JSON.stringify(newCounts))
  }

  const handleSubmitQuestion = () => {
    if (!feedbackText.trim()) return
    const newQuestion = { text: feedbackText.trim(), timestamp: Date.now() }
    const newQuestions = [...submittedQuestions, newQuestion].slice(-5) // Keep last 5
    setSubmittedQuestions(newQuestions)
    localStorage.setItem("feedbackQuestions", JSON.stringify(newQuestions))
    setFeedbackText("")
  }

  const getPercentage = (questionId: string, option: string) => {
    const yesKey = `${questionId}_yes`
    const noKey = `${questionId}_no`
    const maybeKey = `${questionId}_maybe`
    
    const yes = feedbackCounts[yesKey] || 0
    const no = feedbackCounts[noKey] || 0
    const maybe = feedbackCounts[maybeKey] || 0
    const total = yes + no + maybe
    
    if (total === 0) return 0
    return Math.round((feedbackCounts[`${questionId}_${option}`] || 0) / total * 100)
  }
  
  const getTotalVotes = () => Object.values(feedbackCounts).reduce((a, b) => a + b, 0)

  const galleryScrollRef = useRef<HTMLDivElement>(null)

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBookingSubmitting(true)
    
    // Send email via mailto (opens email client)
    const subject = encodeURIComponent(`Booking Request from ${bookingForm.name}`)
    const body = encodeURIComponent(
      `Name: ${bookingForm.name}\nEmail: ${bookingForm.email}\nPreferred Date: ${bookingForm.preferredDate}\nPreferred Time: ${bookingForm.preferredTime}\n\nMessage:\n${bookingForm.message}`
    )
    window.location.href = `mailto:info@jennifersimonds.com?subject=${subject}&body=${body}`
    
    setBookingSubmitting(false)
    setBookingSubmitted(true)
    setTimeout(() => {
      setBookingModalOpen(false)
      setBookingSubmitted(false)
      setBookingForm({ name: "", email: "", message: "", preferredDate: "", preferredTime: "" })
    }, 2000)
  }

  const ToolsUsedCard = (
    null
  )

  useEffect(() => {
    const hash = window.location.hash?.replace("#", "")
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
      }
    }
  }, [])

  // Removed the duplicate useEffect for scroll restoration.
  // The RememberHomeScroll component will now handle this logic.

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

  const handleGalleryClick = () => {
    sessionStorage.setItem("homepage-scroll-position", window.scrollY.toString())
    if (galleryScrollRef.current) {
      sessionStorage.setItem("scrollLeft:inside-the-work", galleryScrollRef.current.scrollLeft.toString())
    }
  }

  useEffect(() => {
    const savedScrollLeft = sessionStorage.getItem("scrollLeft:inside-the-work")
    if (savedScrollLeft && galleryScrollRef.current) {
      galleryScrollRef.current.scrollLeft = Number.parseInt(savedScrollLeft, 10)
    }

    // Save horizontal scroll position while user scrolls
    const container = galleryScrollRef.current
    if (!container) return

    const handleScroll = () => {
      sessionStorage.setItem("scrollLeft:inside-the-work", container.scrollLeft.toString())
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <RememberHomeScroll />

      {/* Header - iOS Glass Pill Nav */}
      <header className="sticky top-0 z-40 py-3">
        <div className="container mx-auto px-4">
          <div className="glass-nav px-4 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-11 w-11 min-w-[44px] min-h-[44px]" style={{ background: 'linear-gradient(135deg, #c9960a, #8a5c00)', padding: '2px' }}>
                <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me%20gold-jqUw9JRBFNYLumFONY7dGqY8lrmEB1.jpg" alt="Jennifer Simonds-Spellmann" className="rounded-full" />
                <AvatarFallback style={{ background: 'linear-gradient(135deg, #c9960a, #8a5c00)', color: '#f5f0e8' }} className="text-sm font-bold">JS</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-sm font-semibold" style={{ color: '#1a1200' }}>Jennifer Simonds</h1>
                <p className="text-xs hidden sm:block" style={{ color: '#5a4a20' }}>
                  AI UX Designer · Service Designer · Design Strategist
                </p>
              </div>
            </div>

            <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-1 text-sm">
              <a href="#case-studies" className="px-3 py-2 rounded-full text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#3d2800' }}>Work</a>
              <a href="#about" className="px-3 py-2 rounded-full text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#3d2800' }}>About</a>
              <a href="#expertise" className="px-3 py-2 rounded-full text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#3d2800' }}>Expertise</a>
              <a href="#inside-the-work" className="px-3 py-2 rounded-full text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#3d2800' }}>Gallery</a>
              <a href="#tools" className="px-3 py-2 rounded-full text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#3d2800' }}>Tools</a>
              
              <Button
                size="sm"
                className="h-9 min-h-[44px] font-bold rounded-full px-5"
                style={{ background: '#1a1200', color: '#f5c842' }}
                asChild
              >
                <a href="mailto:info@jennifersimonds.com">
                  <Icons.Mail className="h-3.5 w-3.5 mr-1.5" />
                  Contact
                </a>
              </Button>
              <Button size="sm" className="h-9 w-9 min-w-[44px] min-h-[44px] p-0 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full" asChild>
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
              className="sm:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md transition-colors"
              style={{ color: '#1a1200' }}
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
          <div className="fixed inset-0 bg-black/20 z-50 sm:hidden" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />

          {/* Slide-in menu */}
          <nav aria-label="Mobile navigation" className="fixed top-0 right-0 bottom-0 w-64 glass-card-solid border-l z-50 sm:hidden shadow-lg animate-in slide-in-from-right duration-300" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
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
                  href="#case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                >
                  Work
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#expertise"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                >
                  Expertise
                </a>
                <a
                  href="#inside-the-work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                >
                  Gallery
                </a>
                <a
                  href="#tools"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                >
                  Tools
                </a>

              </div>

              {/* Contact button at bottom */}
              <div className="p-4 border-t border-border space-y-3">
                <Button
                  size="sm"
                  className="w-full font-semibold h-10 min-h-[44px] shadow-sm rounded-full"
                  style={{ background: '#1a1200', color: '#f5c842' }}
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

      <main id="main-content" className="container mx-auto px-4 pt-6 pb-2">
        {/* Hero Section - Mobile First with Visual Signal Blocks */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN: Hero + Case Studies */}
          <div className="lg:col-span-2 order-1 space-y-6">
            {/* Hero Card - Consulting Portfolio */}
            <Card className="glass-card overflow-hidden" style={{ padding: '36px', marginBottom: '48px' }}>
              <CardContent className="p-0 flex flex-col justify-center max-w-4xl mx-auto sm:p-4 lg:p-8">
                {/* Label */}
                <p className="section-label mb-0" style={{ fontSize: '10px', letterSpacing: '0.14em', fontWeight: 700, color: '#8a5c00', textTransform: 'uppercase' }}>Senior CX UX AI Researcher &amp; Discovery Lead</p>

                {/* H1 */}
                <h1 className="text-balance" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#1a1200', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  I find out what{"'"}s really going on before you build the wrong thing
                </h1>

                {/* Primary body */}
                <p style={{ fontSize: '1rem', color: '#2d2000', lineHeight: 1.75, marginBottom: '24px' }}>
                  I run discovery programmes that turn ambiguity into evidence {"—"} mixed-method research, field studies, stakeholder alignment, and insight synthesis that gives product teams the confidence to commit. I{"'"}ve led research across government, AI, and regulated industries, and I work best with teams who want to challenge assumptions before writing a single line of code.
                </p>

                {/* Secondary body */}
                <p style={{ fontSize: '0.9rem', color: '#5a4a20', lineHeight: 1.75, marginBottom: '24px' }}>
                  Products built on guesswork fail. Products built on evidence ship with conviction. I make sure you have the evidence.
                </p>

                {/* Primary CTA */}
                <div style={{ marginBottom: '24px' }}>
                  <Button
                    onClick={() => {
                      const element = document.getElementById("case-studies")
                      if (element) {
                        const offset = 80
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY
                        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
                      }
                    }}
                    size="lg"
                    className="font-bold px-8 shadow-lg min-h-[44px]"
                    style={{ background: '#1a1200', color: '#f5c842', borderRadius: '100px' }}
                  >
                    {"See the Evidence"}
                  </Button>
                </div>

                {/* Secondary credentials line */}
                <p style={{ fontSize: '11px', color: '#7a6030' }}>
                  Discovery Lead | Mixed-Methods Researcher | AI &amp; Accessibility Specialist
                </p>
              </CardContent>
            </Card>

            <section id="case-studies" aria-labelledby="case-studies-heading">
              {/* Case Studies Card */}
              <Card className="glass-card">
                <CardContent className="p-5 sm:p-6">
                  <h2 id="case-studies-heading" className="text-xl sm:text-2xl font-bold mb-5 text-primary">
                    Case Studies
                  </h2>

                  <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-3">
                    {[
                      {
                        href: "/case-studies/trust-by-design-framework",
                        label: "Discovery \u00B7 AI Governance \u00B7 Strategy",
                        title: "Trust by Design Framework",
                        role: "Lead Researcher \u00B7 Stakeholder Alignment \u00B7 Framework Synthesis",
                        icon: Icons.Brain,
                        stat: "EU AI Act",
                        context: "Led discovery across high-risk AI regulation to build an actionable trust framework",
                      },
                      {
                        href: "/case-studies/digital-drivers-licence",
                        label: "Field Research \u00B7 Discovery \u00B7 Scale",
                        title: "Germany\u2019s #1 Gov App",
                        role: "Discovery Lead \u00B7 200+ User Interviews \u00B7 Field Studies",
                        icon: Icons.Smartphone,
                        stat: "1M+ Users",
                        context: "Led the research programme that shaped Germany\u2019s most-used government consumer app",
                      },
                      {
                        href: "/case-studies/digital-identity-services",
                        label: "Mixed Methods \u00B7 Accessibility \u00B7 Compliance",
                        title: "100% BITV Accessible",
                        role: "Research Lead \u00B7 Co-creation Workshops \u00B7 Audit & Testing",
                        icon: Icons.Accessibility,
                        stat: "98/98 Criteria",
                        context: "Research-driven accessibility programme that achieved full BITV certification",
                      },
                      {
                        href: "/case-studies/trustbridge",
                        label: "Generative Research \u00B7 AI Trust \u00B7 Prototyping",
                        title: "TrustBridge Discovery",
                        role: "Discovery Lead \u00B7 3 User Groups \u00B7 Hypothesis-Driven Sprints",
                        icon: Icons.ShieldCheck,
                        stat: "4 Tested Journeys",
                        context: "End-to-end discovery programme across B2B, Health, SaaS, and Education",
                      },
                    ].map((study, i) => (
                      <Link key={i} href={study.href} aria-label={`View case study: ${study.title}`} className="group block">
                        <div className="bg-white/40 hover:bg-white/50 transition-all duration-200 rounded-2xl border border-[#d4c9a8] hover:border-primary/50 p-6 sm:p-5 lg:p-7 flex flex-col items-center text-center h-full">
                          <study.icon className="h-8 w-8 text-primary mb-4" />
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">{study.label}</p>
                          <h3 className="text-base font-bold text-foreground mb-2">{study.title}</h3>
                          <p className="text-[11px] text-muted-foreground mb-6">{study.role}</p>

                          <div className="flex-1 flex flex-col items-center justify-center mb-6">
                            <div className="text-3xl lg:text-4xl font-bold text-primary leading-tight">{study.stat}</div>
                          </div>

                          <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{study.context}</p>

                          <span className="text-sm font-semibold text-primary group-hover:underline mt-auto flex items-center gap-1">
                            {"View Case Study"} <Icons.ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* How I Got Here */}
            <div
              id="about"
              className="mt-4 rounded-2xl p-6 sm:p-8 scroll-mt-24"
              style={{ background: '#f9f6f0', border: '1px solid rgba(212,201,168,0.4)' }}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jennifer-avatar-Ap5BfKFSx9SM1wfwz0gV6ZXbHs8pD2.jpg"
                  alt="Jennifer Simonds"
                  className="w-[88px] h-[88px] rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    How I got here
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#2d2000' }}>
                    {"I started as a fine artist, made magic for Harry Potter, and landed in Berlin running research programmes for products used by millions. I\u2019m British-German, a mum of two, and I bring curiosity and imagination into every discovery. I see the world in patterns and stories \u2014 and that\u2019s what makes me good at finding the insight others miss."}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block mt-4">{ToolsUsedCard}</div>
          </div>

          <div className="lg:col-span-1 space-y-6 order-4">
            <Card className="glass-card p-0 overflow-hidden" role="region" aria-labelledby="about-heading">
              <div className="relative h-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1200, #3d2800)' }}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f8f19abf-9d96-47d9-8b32-26be54979267-4IKbuW7Ee5jefw7w9jmpaghNW5iSZy.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-8 relative z-10" style={{ padding: '36px' }}>
                <h2 id="about-heading" className="text-xl font-bold mb-6 text-primary">What I bring to a research programme</h2>
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed" style={{ color: '#2d2000' }}>
                    {"I run the discovery nobody else wants to do. The ambiguous problem space. The stakeholders who can\u2019t agree. The user needs nobody has actually validated yet."}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#2d2000' }}>
                    {"I synthesise complex evidence into clear, actionable insights. I\u2019ve done it for 10+ years on products used by millions of people."}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#2d2000' }}>
                    {"I\u2019m hands-on in the field \u2014 but I also zoom out and connect findings to strategy, roadmap, and business outcomes."}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#2d2000' }}>
                    {"I align the room. Engineers, legal, product, and executives \u2014 I get them working from the same evidence and moving in the same direction."}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* My Expertise Card */}
            <Card id="expertise" className="glass-card scroll-mt-24" role="region" aria-labelledby="expertise-heading">
              <CardContent className="p-6 sm:p-8">
                <h2 id="expertise-heading" className="text-xl font-bold mb-6 text-primary">My Expertise</h2>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      icon: Icons.Search,
                      title: "Discovery Programmes",
                      subtitle: "From ambiguity to evidence-based direction",
                      description: "I scope and run end-to-end discovery \u2014 defining research questions, recruiting participants, running fieldwork, and synthesising findings into clear product direction.",
                      linkText: "See the i-Kfz discovery programme \u2192",
                      linkHref: "/case-studies/digital-drivers-licence",
                    },
                    {
                      icon: Icons.Target,
                      title: "Mixed-Method Research",
                      subtitle: "Qualitative depth, quantitative confidence",
                      description: "Interviews, contextual inquiry, diary studies, surveys, usability testing, co-creation workshops \u2014 I choose and combine methods based on what the question actually needs.",
                      linkText: "See how I ran 200+ user interviews \u2192",
                      linkHref: "/case-studies/digital-drivers-licence",
                    },
                    {
                      icon: Icons.Handshake,
                      title: "Stakeholder Alignment",
                      subtitle: "Getting the room to a decision",
                      description: "I\u2019ve aligned engineers, legal, executives, and frontline teams around research findings. I know how to turn contested insights into shared conviction.",
                      linkText: "See how I run alignment workshops \u2192",
                      linkHref: "/case-studies/trust-by-design-framework",
                    },
                    {
                      icon: Icons.Map,
                      title: "Insight-to-Action Synthesis",
                      subtitle: "From raw data to strategic recommendations",
                      description: "I don\u2019t just hand over a research report. I synthesise findings into prioritised recommendations, opportunity maps, and frameworks that product teams can act on immediately.",
                      linkText: "See the Trust by Design framework \u2192",
                      linkHref: "/case-studies/trust-by-design-framework",
                    },
                    {
                      icon: Icons.ShieldCheck,
                      title: "AI & Regulated Contexts",
                      subtitle: "Research in high-stakes environments",
                      description: "I\u2019ve led research in government, healthcare, and EU AI Act contexts. I understand how to navigate compliance, ethics boards, and sensitive user groups.",
                      linkText: "See the Responsible AI case study \u2192",
                      linkHref: "/case-studies/trust-by-design-framework",
                    },
                    {
                      icon: Icons.Accessibility,
                      title: "Inclusive Research",
                      subtitle: "Reaching the users others miss",
                      description: "I\u2019ve run research with assistive technology users, elderly citizens, non-native speakers, and low-digital-literacy groups. Accessibility isn\u2019t an afterthought \u2014 it\u2019s built into my research design.",
                      linkText: "See the BITV accessibility programme \u2192",
                      linkHref: "/case-studies/digital-identity-services",
                    },
                    {
                      icon: Icons.Users,
                      title: "Research Ops & Scaling",
                      subtitle: "Building research culture in teams",
                      description: "I set up participant panels, research repositories, and insight-sharing rituals. I\u2019ve embedded research practices across 14+ product teams.",
                      linkText: "See my research approach \u2192",
                      linkHref: "/case-studies/digital-drivers-licence",
                    },
                    {
                      icon: Icons.Sparkles,
                      title: "Generative & Evaluative Research",
                      subtitle: "Exploring the unknown, validating the known",
                      description: "I run generative research to uncover new opportunities and evaluative research to test assumptions. I know when to explore and when to validate.",
                      linkText: "See the TrustBridge discovery sprints \u2192",
                      linkHref: "/case-studies/trustbridge",
                    },
                  ].map((item, index) => {
                    const isExpanded = expandedExpertise === index
                    const IconComponent = item.icon
                    return (
                      <div
                        key={index}
                        className="w-full rounded-xl glass-card overflow-hidden transition-all duration-200 hover:shadow-md hover:shadow-[rgba(0,0,0,0.08)]"
                      >
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={`expertise-content-${index}`}
                          onClick={() => setExpandedExpertise(isExpanded ? null : index)}
                          className="w-full text-left p-4 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-[#c4a052]" aria-hidden="true" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                              <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                            </div>
                          </div>
                          <Icons.ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-auto ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                        <div
                          id={`expertise-content-${index}`}
                          className="overflow-hidden transition-all duration-300 ease-in-out"
                          role="region"
                          aria-hidden={!isExpanded}
                          style={{ maxHeight: isExpanded ? '300px' : '0px', opacity: isExpanded ? 1 : 0 }}
                        >
                          <div className="px-4 pb-4 pt-2 border-t border-border/30">
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            <Link
                              href={item.linkHref}
                              onClick={(e) => e.stopPropagation()}
                              className="mt-3 inline-flex items-center text-xs font-medium text-primary hover:underline transition-colors"
                            >
                              {item.linkText}
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="lg:hidden mt-4">{ToolsUsedCard}</div>
          </div>

        </div>
      </main>

      {/* Inside the Work - Full-width below case studies & expertise */}
      <section id="inside-the-work" className="container mx-auto px-4 scroll-mt-24 pt-0">
        <div className="glass-card rounded-2xl p-4 lg:p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-foreground">Inside the Work</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Selected artifacts & deliverables</p>
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Icons.ArrowRight className="h-3 w-3" aria-hidden="true" />
              <span className="hidden sm:inline">Scroll</span>
            </div>
          </div>

          {/* Horizontal scrolling gallery */}
          <div ref={galleryScrollRef} className="overflow-x-auto -mx-4 px-4 lg:-mx-5 lg:px-5 scrollbar-hide">
            <div className="flex gap-3 pb-2">
              {/* Gallery Item 1: Risk Assessment */}
              <Link
                href="/case-studies/trust-by-design-framework"
                onClick={handleGalleryClick}
                className="flex-shrink-0 w-[260px] lg:w-[320px] 2xl:w-[380px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <div className="glass-card-solid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-glass-border hover:border-primary/30">
                  <div className="aspect-[4/3] relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2012%2C%202026%2C%2004_03_56%20PM-XdSjEVNbdZME28ONow9B8HPraoh3Kx.png"
                      alt="Workshop materials showing risk assessment framework with sticky notes and decision tree diagrams"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 lg:p-4">
                    <p className="text-sm font-medium text-foreground line-clamp-1">Risk Assessment</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Decision Framework</p>
                  </div>
                </div>
              </Link>

              {/* Gallery Item 2: AI Governance Dashboard */}
              <Link
                href="/case-studies/trust-by-design-framework#diagram-trust-layer-architecture"
                onClick={handleGalleryClick}
                className="flex-shrink-0 w-[260px] lg:w-[320px] 2xl:w-[380px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <div className="glass-card-solid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-glass-border hover:border-primary/30">
                  <div className="aspect-[4/3] relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2012%2C%202026%2C%2004_12_12%20PM-VfkUOiUO0Cx1lb2BRIRNAJzb8ovvaz.png"
                      alt="Dashboard interface showing trust framework metrics and governance controls"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 lg:p-4">
                    <p className="text-sm font-medium text-foreground line-clamp-1">AI Governance</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Trust Framework</p>
                  </div>
                </div>
              </Link>

              {/* Gallery Item 3: Government Portal */}
              <Link
                href="/case-studies/digital-drivers-licence#phone"
                onClick={handleGalleryClick}
                className="flex-shrink-0 w-[260px] lg:w-[320px] 2xl:w-[380px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <div className="glass-card-solid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-glass-border hover:border-primary/30">
                  <div className="aspect-[4/3] relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2012%2C%202026%2C%2004_12_17%20PM-1yftyVDDwPWVwEDyrkjXj8OoWGczLg.png"
                      alt="Mobile phone displaying accessible government service interface with high contrast design"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 lg:p-4">
                    <p className="text-sm font-medium text-foreground line-clamp-1">Gov Design</p>
                    <p className="text-xs text-muted-foreground mt-0.5">UX & Accessibility</p>
                  </div>
                </div>
              </Link>

              {/* Gallery Item 4: Compliance Documentation */}
              <Link
                href="/case-studies/digital-identity-services"
                onClick={handleGalleryClick}
                className="flex-shrink-0 w-[260px] lg:w-[320px] 2xl:w-[380px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <div className="glass-card-solid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-glass-border hover:border-primary/30">
                  <div className="aspect-[4/3] relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2012%2C%202026%2C%2004_12_18%20PM-ceq2RndAumXrwKt0NGxsqnX1ycPvgc.png"
                      alt="BITV compliance checklist showing 98 of 98 criteria met"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 lg:p-4">
                    <p className="text-sm font-medium text-foreground line-clamp-1">WCAG BITV Compliance</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Documentation</p>
                  </div>
                </div>
              </Link>

              {/* Gallery Item 5: Inclusive Design System */}
              <Link
                href="/case-studies/trustbridge"
                onClick={handleGalleryClick}
                className="flex-shrink-0 w-[260px] lg:w-[320px] 2xl:w-[380px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <div className="glass-card-solid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-glass-border hover:border-primary/30">
                  <div className="aspect-[4/3] relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2012%2C%202026%2C%2004_25_46%20PM-4loRj3v503tpXMdCGipoh3q61yEssX.png"
                      alt="Component library showing accessible form elements and color system"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 lg:p-4">
                    <p className="text-sm font-medium text-foreground line-clamp-1">Inclusive Design System</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Dynamic Content Architecture</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Tools - Standalone Card */}
      <section id="tools" className="container mx-auto px-4 pt-6 scroll-mt-24">
        <Link href="/case-studies/workshop-tools" className="group block">
          <div
            className="relative rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(212,201,168,0.5)",
            }}
          >
            {/* Rainbow top border */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{
                height: "3px",
                background: "linear-gradient(90deg, #ff6b6b, #ffa94d, #ffd43b, #69db7c, #4dabf7, #9775fa, #f06595)",
                opacity: 0.85,
              }}
            />
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Left: Thumbnail + Title */}
              <div className="flex items-center gap-5 lg:w-2/5">
                <div
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-sm"
                  style={{
                    width: "120px",
                    height: "120px",
                    border: "2px solid rgba(212,201,168,0.5)",
                  }}
                >
                  <img
                    src="/images/workshop-tools-abstract.jpg"
                    alt="Abstract illustration of workshop facilitation tools"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">Workshop Tools</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">Facilitation artefacts I designed for hard conversations</p>
                </div>
              </div>

              {/* Middle: Quick stats */}
              <div className="flex flex-wrap gap-3 lg:w-1/3 lg:justify-center">
                <div className="flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid #d4c9a8" }}>
                  <Icons.Layers className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-semibold text-foreground">3 Contexts</span>
                </div>
                <div className="flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid #d4c9a8" }}>
                  <Icons.CheckCircle className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-semibold text-foreground">1 Toolkit Live</span>
                </div>
                <div className="flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid #d4c9a8" }}>
                  <Icons.Check className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-semibold text-foreground">EU AI Act Ready</span>
                </div>
              </div>

              {/* Right: CTA arrow */}
              <div className="lg:w-1/3 flex lg:justify-end">
                <span className="text-sm font-semibold text-primary group-hover:underline flex items-center gap-1.5">
                  Explore the tools <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Who I Work With */}
      <section className="container mx-auto px-4 pb-6">
        <div className="rounded-2xl p-8 sm:p-12 lg:p-16 my-6 mb-0.5" style={{ background: '#F5F0E8' }}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
            {/* Decorative illustration — connected nodes */}
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(212,201,168,0.4)' }}
            >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines */}
                <line x1="28" y1="14" x2="14" y2="34" stroke="#c9960a" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="28" y1="14" x2="42" y2="34" stroke="#c9960a" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="14" y1="34" x2="42" y2="34" stroke="#c9960a" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="28" y1="14" x2="28" y2="44" stroke="#c9960a" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="14" y1="34" x2="28" y2="44" stroke="#c9960a" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="42" y1="34" x2="28" y2="44" stroke="#c9960a" strokeWidth="1.5" strokeOpacity="0.4" />
                {/* Nodes */}
                <circle cx="28" cy="14" r="6" fill="#c9960a" fillOpacity="0.15" stroke="#c9960a" strokeWidth="1.5" />
                <circle cx="28" cy="14" r="2.5" fill="#c9960a" />
                <circle cx="14" cy="34" r="5" fill="#c9960a" fillOpacity="0.15" stroke="#c9960a" strokeWidth="1.5" />
                <circle cx="14" cy="34" r="2" fill="#c9960a" />
                <circle cx="42" cy="34" r="5" fill="#c9960a" fillOpacity="0.15" stroke="#c9960a" strokeWidth="1.5" />
                <circle cx="42" cy="34" r="2" fill="#c9960a" />
                <circle cx="28" cy="44" r="4" fill="#c9960a" fillOpacity="0.15" stroke="#c9960a" strokeWidth="1.5" />
                <circle cx="28" cy="44" r="1.5" fill="#c9960a" />
                {/* Small accent dots */}
                <circle cx="21" cy="24" r="1.5" fill="#c9960a" fillOpacity="0.3" />
                <circle cx="35" cy="24" r="1.5" fill="#c9960a" fillOpacity="0.3" />
                <circle cx="21" cy="39" r="1" fill="#c9960a" fillOpacity="0.25" />
                <circle cx="35" cy="39" r="1" fill="#c9960a" fillOpacity="0.25" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#1a1200' }}>
                Who I work with
              </h2>
              <p className="text-sm" style={{ color: '#5a4a20' }}>
                Teams who{"'"}ve hit one of these research gaps:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Icons.TrendingDown,
                title: "You shipped without evidence",
                desc: "The feature launched but nobody uses it. I run the research to find out what users actually need \u2014 before the next build cycle.",
              },
              {
                icon: Icons.XCircle,
                title: "Stakeholders can\u2019t agree on the problem",
                desc: "Everyone has a different hypothesis. I gather the evidence that aligns the room and turns debate into direction.",
              },
              {
                icon: Icons.Scale,
                title: "Nobody has talked to users yet",
                desc: "Assumptions are driving the roadmap. I set up and run the fieldwork that gives your team real confidence.",
              },
              {
                icon: Icons.Sparkles,
                title: "The insight never reaches the roadmap",
                desc: "Research happens but nothing changes. I synthesise findings into prioritised, actionable recommendations that product teams can ship.",
              },
              {
                icon: Icons.HelpCircle,
                title: "Complex user journeys keep breaking",
                desc: "Users drop off and nobody knows where or why. I map end-to-end journeys and pinpoint the moments that matter.",
              },
              {
                icon: Icons.Map,
                title: "Regulated contexts slow everything down",
                desc: "Legal, compliance, and ethics reviews keep blocking progress. I embed research into the process so discovery and governance move together.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5"
                style={{
                  background: 'rgba(255,255,255,0.45)',
                  border: '1px solid rgba(212,201,168,0.4)',
                  borderRadius: '16px',
                }}
              >
                <item.icon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#c9960a' }} />
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: '#1a1200' }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#5a4a20' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-6 rounded-xl p-5" style={{ background: 'rgba(201,150,10,0.06)', border: '2px solid rgba(201,150,10,0.3)' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#2d2000' }}>
              I work best when someone senior has already decided: getting AI right for users is a requirement, not a nice-to-have.
            </p>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {["200+ user interviews", "10+ years in research", "Mixed-methods specialist"].map((stat) => (
              <span
                key={stat}
                className="px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background: '#1a1200', color: '#ffffff' }}
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Available + Booking Section */}
      <section className="container mx-auto px-4 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Currently Available For */}
          <div className="rounded-2xl p-8 flex flex-col justify-center" style={{ background: '#f9f6f0' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center" style={{ color: '#1a1200' }}>
              Currently available for
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {["Senior CX Researcher", "Discovery Lead", "Research Programme Lead", "Contract & Freelance"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: 'rgba(201,150,10,0.1)', color: '#3d2800', border: '1px solid rgba(201,150,10,0.25)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-center" style={{ color: '#5a4a20' }}>
              Based in Berlin {"\u00B7"} Remote-first {"\u00B7"} English and German
            </p>
          </div>

          {/* Booking Card */}
          <Card className="rounded-3xl shadow-sm glass-card overflow-hidden">
  <CardContent className="p-6">
  <div className="flex items-center gap-3 mb-4">
  <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center">
  <Icons.Calendar className="h-5 w-5 text-primary" />
  </div>
  <h2 id="booking-heading" className="text-lg font-semibold text-foreground">Book a Conversation</h2>
  </div>

  {bookingSubmitted ? (
    <div className="text-center py-6">
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
        <Icons.Check className="h-6 w-6 text-green-600" />
      </div>
      <p className="text-sm font-medium text-foreground">Opening your email client...</p>
      <p className="text-xs text-muted-foreground mt-1">Complete the email to send your request.</p>
    </div>
  ) : (
    <form onSubmit={handleBookingSubmit} className="space-y-3">
      <div>
        <label htmlFor="inline-booking-name" className="block text-xs font-medium text-foreground mb-1">
          Name
        </label>
        <input
          id="inline-booking-name"
          type="text"
          required
          aria-required="true"
          value={bookingForm.name}
          onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="inline-booking-email" className="block text-xs font-medium text-foreground mb-1">
          Email
        </label>
        <input
          id="inline-booking-email"
          type="email"
          required
          aria-required="true"
          value={bookingForm.email}
          onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="your@email.com"
        />
      </div>
<div className="space-y-3">
  <div>
  <label htmlFor="inline-booking-date" className="block text-xs font-medium text-foreground mb-1">
  Preferred Date
  </label>
  <input
  id="inline-booking-date"
  type="text"
  required
  aria-required="true"
  placeholder="e.g. 15 Feb 2026"
  value={bookingForm.preferredDate}
  onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
  />
  </div>
  <div>
  <label htmlFor="inline-booking-time" className="block text-xs font-medium text-foreground mb-1">
  Preferred Time
  </label>
  <input
  id="inline-booking-time"
  type="text"
  required
  aria-required="true"
  placeholder="e.g. 14:00 or 2pm"
  value={bookingForm.preferredTime}
  onChange={(e) => setBookingForm({ ...bookingForm, preferredTime: e.target.value })}
  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
  />
  </div>
  </div>
      <div>
        
        
      </div>
      <Button
        type="submit"
        disabled={bookingSubmitting}
        className="w-full font-semibold min-h-[44px]" style={{ background: '#1a1200', color: '#f5c842', borderRadius: '12px' }}
      >
        {bookingSubmitting ? (
          <>
            <Icons.Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Icons.Send className="h-4 w-4 mr-2" />
            Send Booking Request
          </>
        )}
      </Button>
    </form>
  )}
  </CardContent>
  </Card>

        </div>
      </section>

      <footer className="glass-card border-t border-glass-border mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Jennifer Simonds. All rights reserved.</p>
            <nav aria-label="Footer navigation" className="flex gap-6">
              <Link href="/imprint" className="hover:text-foreground transition-colors">
                Imprint
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
