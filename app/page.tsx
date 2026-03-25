"use client"

import React from "react"
import Image from "next/image"

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
              <Avatar className="h-11 w-11 min-w-[44px] min-h-[44px]" style={{ background: 'linear-gradient(135deg, #0891b2, #164e63)', padding: '2px' }}>
                <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me%20gold-jqUw9JRBFNYLumFONY7dGqY8lrmEB1.jpg" alt="Jennifer Simonds-Spellmann" className="rounded-full" />
                <AvatarFallback style={{ background: 'linear-gradient(135deg, #0891b2, #164e63)', color: '#ffffff' }} className="text-sm font-bold">JS</AvatarFallback>
              </Avatar>
              <div>
                        <h1 className="text-sm font-semibold" style={{ color: '#0a1628' }}>Jennifer Simonds</h1>
                        <p className="text-xs hidden sm:block" style={{ color: '#64748b' }}>
                  AI UX Designer · Service Designer · Design Strategist
                </p>
              </div>
            </div>

            <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-1 text-sm">
<a href="#case-studies" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#1e293b' }}>Work</a>
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#1e293b' }}>About</a>
                <a href="#expertise" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#1e293b' }}>Expertise</a>
                <a href="#inside-the-work" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#1e293b' }}>Gallery</a>
                <a href="#tools" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-black/5" style={{ color: '#1e293b' }}>Tools</a>
              
              <Button
                size="sm"
                className="h-9 min-h-[44px] font-bold rounded-md px-5"
                style={{ background: '#0891b2', color: '#ffffff' }}
                asChild
              >
                <a href="mailto:info@jennifersimonds.com">
                  <Icons.Mail className="h-3.5 w-3.5 mr-1.5" />
                  Contact
                </a>
              </Button>
              <Button size="sm" className="h-9 w-9 min-w-[44px] min-h-[44px] p-0 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-md" asChild>
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
                        style={{ color: '#0a1628' }}
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
                  className="w-full font-semibold h-10 min-h-[44px] shadow-sm rounded-md"
                        style={{ background: '#0891b2', color: '#ffffff' }}
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
            {/* Hero - Split Layout */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12">
              {/* Left: Text Content */}
              <div className="flex-1">
                {/* Label */}
                <p className="mb-3" style={{ fontSize: '11px', letterSpacing: '0.12em', fontWeight: 600, color: '#0891b2', textTransform: 'uppercase' }}>
                  Research &amp; Discovery | Digital Trust
                </p>

                {/* H1 */}
                <h1 className="text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0a1628', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '20px' }}>
                  Creating Trust in Digital Systems
                </h1>

                {/* Primary body */}
                <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.75, marginBottom: '24px' }}>
                  I lead research and discovery programmes for organisations building secure, compliant digital products. From EU AI Act governance to accessible government services, I deliver the evidence that enables confident decisions.
                </p>

                {/* Primary CTA */}
                <div className="flex flex-wrap items-center gap-4">
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
                    className="font-bold px-8 shadow-sm min-h-[48px]"
                    style={{ background: '#0891b2', color: '#ffffff', borderRadius: '6px' }}
                  >
                    View Case Studies
                  </Button>
                  <a
                    href="https://www.linkedin.com/in/jennifer-simonds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline flex items-center gap-1.5"
                    style={{ color: '#0a1628' }}
                  >
                    <Icons.Linkedin className="h-4 w-4" /> Connect on LinkedIn
                  </a>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {["EU AI Act", "BITV 2.0", "Government", "Critical Infrastructure"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded bg-slate-100" style={{ color: '#64748b' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Photo */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-md overflow-hidden shadow-lg">
                  <Image
                    src="/images/jennifer-avatar.jpg"
                    alt="Jennifer Simonds - Research & Discovery Lead"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-center mt-3 text-sm font-medium" style={{ color: '#0a1628' }}>Jennifer Simonds</p>
                <p className="text-center text-xs" style={{ color: '#64748b' }}>Research & Discovery Lead</p>
              </div>
            </div>

            <section id="case-studies" aria-labelledby="case-studies-heading">
              {/* Case Studies Card */}
              <Card className="glass-card">
                <CardContent className="p-5 sm:p-6">
                  <h2 id="case-studies-heading" className="text-xl sm:text-2xl font-bold mb-5 text-primary">
                    Case Studies
                  </h2>

                  <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4">
                    {[
                      {
                        href: "/case-studies/trust-by-design-framework",
                        title: "Trust by Design",
                        stat: "EU AI Act",
                        image: "/images/case-study-trust.jpg",
                      },
                      {
                        href: "/case-studies/digital-drivers-licence",
                        title: "i-Kfz Digital Services",
                        stat: "1M+ Users",
                        image: "/images/case-study-ikfz.jpg",
                      },
                      {
                        href: "/case-studies/digital-identity-services",
                        title: "BITV Certification",
                        stat: "98/98 Criteria",
                        image: "/images/case-study-bitv.jpg",
                      },
                      {
                        href: "/case-studies/trustbridge",
                        title: "TrustBridge",
                        stat: "4 Verticals",
                        image: "/images/case-study-trustbridge.jpg",
                      },
                    ].map((study, i) => (
                      <Link key={i} href={study.href} aria-label={`View case study: ${study.title}`} className="group block">
                        <div className="bg-white/70 hover:bg-white/80 transition-all duration-200 rounded-md border border-slate-200 hover:border-primary/50 overflow-hidden h-full">
                          {/* Image placeholder - replace src with your uploaded image */}
                          <div className="relative h-40 bg-slate-100 overflow-hidden">
                            <Image
                              src={study.image}
                              alt={study.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 rounded text-xs font-bold text-primary">
                              {study.stat}
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="text-base font-bold text-foreground mb-2">{study.title}</h3>
                            <span className="text-sm font-medium text-primary group-hover:underline flex items-center gap-1">
                              {"View Case Study"} <Icons.ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
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
              className="mt-4 rounded-md p-6 sm:p-8 scroll-mt-24"
              style={{ background: '#f1f5f9', border: '1px solid rgba(148,163,184,0.3)' }}
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
                  <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                    {"With over a decade of experience in research and discovery, I\u2019ve led programmes across government, critical infrastructure, and regulated industries. Based in Berlin, I specialise in translating complex regulatory requirements into actionable product strategy \u2014 from EU AI Act compliance to BITV accessibility certification."}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block mt-4">{ToolsUsedCard}</div>
          </div>

          <div className="lg:col-span-1 space-y-6 order-4">
            <Card className="glass-card p-0 overflow-hidden" role="region" aria-labelledby="about-heading">
              

              <CardContent className="p-8 relative z-10" style={{ padding: '36px' }}>
                <h2 id="about-heading" className="text-xl font-bold mb-6 text-primary">Expertise &amp; Capabilities</h2>
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                    {"Evidence-based discovery for complex, regulated digital systems. From EU AI Act governance to BITV accessibility compliance."}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                    {"10+ years delivering research programmes for government, critical infrastructure, and high-risk AI applications."}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                    {"Stakeholder alignment across engineering, legal, product, and executive teams \u2014 turning research into decisive action."}
                  </p>
                  
                </div>
              </CardContent>
            </Card>

            {/* My Expertise Card */}
            <Card id="expertise" className="glass-card scroll-mt-24" role="region" aria-labelledby="expertise-heading">
              <CardContent className="p-6 sm:p-8">
                <h2 id="expertise-heading" className="text-xl font-bold mb-6 text-primary">Leistungen</h2>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      icon: Icons.ShieldCheck,
                      title: "AI Governance & Compliance",
                      subtitle: "EU AI Act | High-Risk Systems | Regulatory Translation",
                      description: "Governance frameworks for high-risk AI systems. Translating EU AI Act requirements into actionable product constraints and compliance roadmaps.",
                      linkText: "Trust by Design Framework \u2192",
                      linkHref: "/case-studies/trust-by-design-framework",
                    },
                    {
                      icon: Icons.Search,
                      title: "Discovery & Research",
                      subtitle: "Evidence-Based Decision Making | Field Studies",
                      description: "End-to-end discovery programmes delivering the evidence needed for confident product decisions in complex, regulated environments.",
                      linkText: "i-Kfz Research Programme \u2192",
                      linkHref: "/case-studies/digital-drivers-licence",
                    },
                    {
                      icon: Icons.Accessibility,
                      title: "Accessibility & BITV",
                      subtitle: "BITV 2.0 | WCAG 2.1 | Inclusive Design",
                      description: "Comprehensive accessibility programmes from audit to certification. Achieving full BITV compliance for government and public sector applications.",
                      linkText: "BITV Certification Programme \u2192",
                      linkHref: "/case-studies/digital-identity-services",
                    },
                    {
                      icon: Icons.Handshake,
                      title: "Stakeholder Alignment",
                      subtitle: "Cross-Functional Coordination | Governance Workshops",
                      description: "Aligning engineering, legal, product, and executive stakeholders around research findings. Turning evidence into decisive organisational action.",
                      linkText: "Governance Workshop Approach \u2192",
                      linkHref: "/case-studies/trust-by-design-framework",
                    },
                    {
                      icon: Icons.Brain,
                      title: "Regulated Industries",
                      subtitle: "Government | Healthcare | Critical Infrastructure",
                      description: "Research and discovery in high-stakes environments. Navigating compliance requirements, ethics boards, and sensitive user groups.",
                      linkText: "Government Services Portfolio \u2192",
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
                        className="w-full rounded-md glass-card overflow-hidden transition-all duration-200 hover:shadow-md hover:shadow-[rgba(0,0,0,0.08)]"
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
        
      </section>

      {/* My Process - Workshop Tools */}
      <section id="tools" className="container mx-auto px-4 py-16 scroll-mt-24">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#0a1628' }}>My Process</h2>
          <p className="text-sm max-w-xl" style={{ color: '#64748b' }}>
            I developed facilitation tools that turn complex stakeholder requirements into actionable outcomes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              step: "01",
              title: "Discover",
              desc: "Map stakeholder needs, regulatory constraints, and technical requirements through structured interviews and workshops.",
              icon: Icons.Search,
            },
            {
              step: "02",
              title: "Align",
              desc: "Facilitate consensus across diverse teams using visual frameworks that make complex decisions tangible.",
              icon: Icons.Handshake,
            },
            {
              step: "03",
              title: "Deliver",
              desc: "Translate insights into actionable documentation, governance frameworks, and implementation roadmaps.",
              icon: Icons.CheckCircle,
            },
          ].map((item) => (
            <div key={item.step} className="relative p-6 bg-white border border-slate-200 rounded-md hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-primary">{item.step}</span>
                <div className="h-px flex-1 bg-slate-200" />
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0a1628' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Workshop Toolkit CTA */}
        <Link href="/case-studies/workshop-tools" className="group block">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 bg-slate-50 border border-slate-200 rounded-md hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded bg-primary/10">
                <Icons.Layers className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold" style={{ color: '#0a1628' }}>Workshop Toolkit</h3>
                <p className="text-xs" style={{ color: '#64748b' }}>Explore the facilitation artefacts I use in practice</p>
              </div>
            </div>
            <span className="text-sm font-semibold text-primary group-hover:underline flex items-center gap-1.5">
              View toolkit <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </section>

      {/* Sectors & Challenges - Clean Bundesdruckerei style */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#0a1628' }}>
            Sectors &amp; Challenges
          </h2>
          <p className="text-sm" style={{ color: '#64748b' }}>
            Organisations navigating these requirements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Icons.ShieldCheck,
              title: "EU AI Act Compliance",
              desc: "Governance frameworks and risk assessment for high-risk AI systems.",
            },
            {
              icon: Icons.Accessibility,
              title: "BITV & Accessibility",
              desc: "Full BITV 2.0 and WCAG 2.1 compliance for government applications.",
            },
            {
              icon: Icons.Brain,
              title: "Critical Infrastructure",
              desc: "Security-first research for government and healthcare services.",
            },
            {
              icon: Icons.Target,
              title: "Digital Sovereignty",
              desc: "Data protection and Made in Germany quality standards.",
            },
            {
              icon: Icons.Handshake,
              title: "Cross-Agency Coordination",
              desc: "Stakeholder alignment across ministries and agencies.",
            },
            {
              icon: Icons.Search,
              title: "Evidence-Based Transformation",
              desc: "Rigorous research for digital transformation initiatives.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 border-l-2 border-primary bg-white hover:bg-slate-50 transition-colors"
            >
              <item.icon className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: '#0a1628' }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Currently Available + Booking Section */}
      <section className="container mx-auto px-4 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Currently Available For */}
          



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
