"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import * as Icons from "lucide-react"
import { ScrollToTopOnMount } from "@/components/scroll-to-top"

// =============================================================================
// Trust by Design Framework — Responsible AI Case Study
// =============================================================================

const TAGS = [
  "Independent Research",
  "AI Governance",
  "UX Strategy",
  "EU Compliance",
]

const STATS = [
  { num: "67%", label: "Abandonment Rate" },
  { num: "42%", label: "Helpdesk Increase" },
  { num: "4", label: "Trust Principles" },
  { num: "6+", label: "Gov Communities" },
]

const SYSTEMS = [
  {
    name: "Assistent.iQ",
    org: "KI-Kompetenz-Center, Bundesdruckerei",
    strength: "Generates legal guidelines with high accuracy",
    gap: "Without explainability, users couldn't understand or contest decisions \u2014 creating liability risk and citizen confusion",
  },
  {
    name: "PLAIN",
    org: "Federal Data Analytics Platform",
    strength: "Enables secure, sovereign data analysis across federal teams",
    gap: "Without usability context or onboarding design, cross-team adoption struggled despite strong technical capability",
  },
  {
    name: "MOVE",
    org: "AI Quality Benchmarking",
    strength: "Benchmarks AI model quality systematically against EU AI Act criteria",
    gap: "Measures technical performance only \u2014 user experience and trust perception remain unmeasured",
  },
]

const PRINCIPLES = [
  {
    icon: Icons.Eye,
    title: "Explainability",
    description: "I designed for transparency: users need to understand what the AI decided and why, in plain language.",
  },
  {
    icon: Icons.RotateCcw,
    title: "Recoverability",
    description: "I introduced a Recovery-First principle: every wrong decision needs a clear, human path forward.",
  },
  {
    icon: Icons.Users,
    title: "Accessibility",
    description: "I applied Senior-First Design: if a 72-year-old understands the system, everyone does.",
  },
  {
    icon: Icons.ShieldCheck,
    title: "Overridability",
    description: "I designed for human control: automated decisions must always have a human override path.",
  },
]

const DOMAINS = [
  {
    title: "Government",
    cases: ["Citizen service automation", "Welfare eligibility decisions", "Administrative AI assistants", "Public safety systems"],
  },
  {
    title: "Healthcare",
    cases: ["Clinical decision support", "Patient triage AI", "Diagnostic assistance", "Treatment recommendations"],
  },
  {
    title: "Finance",
    cases: ["Loan approval automation", "Fraud detection systems", "Robo-advisory platforms", "Credit scoring AI"],
  },
  {
    title: "Education",
    cases: ["AI tutoring assistants", "Grading automation", "Learning path optimisation", "Student risk assessment"],
  },
  {
    title: "Cybersecurity",
    cases: ["Threat detection AI", "Incident response automation", "Vulnerability assessment", "Access control systems"],
  },
]

const OUTCOMES = [
  { stat: "Framework Published", description: "Four-principle Trust Layer architecture, openly available at trust-by-design.org" },
  { stat: "Consulting Practice Launched", description: "EU AI Act readiness for regulated industries" },
  { stat: "Audit Tools Built", description: "Interactive self-assessment at trustaudit.tools" },
  { stat: "Government Communities Reached", description: "Framework presented to 6+ communities within German government" },
  { stat: "Internal Delivery", description: "Advisory sessions with process management leaders in regulated government institutions" },
  { stat: "Target Impact", description: "25% abandonment rate (from 67%) and 30% reduction in helpdesk costs" },
]

// =============================================================================
// Component
// =============================================================================

export default function TrustByDesignCaseStudy() {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="min-h-screen">
        {/* Header */}
        <header
          className="sticky top-0 z-40 py-3"
          style={{
            background: "rgba(245, 240, 232, 0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="glass-nav px-4 py-2.5 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm min-h-[44px] transition-colors"
                style={{ color: "#1a1200" }}
              >
                <Icons.ArrowLeft className="h-4 w-4" />
                Back to Start
              </Link>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  className="h-9 min-h-[44px] font-bold px-5 rounded-full"
                  style={{ background: "#1a1200", color: "#f5c842" }}
                  asChild
                >
                  <a href="mailto:info@jennifersimonds.com">
                    <Icons.Mail className="h-3.5 w-3.5 mr-1.5" />
                    Contact
                  </a>
                </Button>
                <a
                  href="https://www.linkedin.com/in/jennifer-simonds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="h-9 w-9 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full"
                  style={{ background: "#0A66C2", color: "white" }}
                >
                  <Icons.Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <article>
          {/* ============================================ */}
          {/* HERO */}
          {/* ============================================ */}
          <div className="bg-background">
            <div className="container mx-auto px-4 pt-12 pb-8 max-w-4xl">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {TAGS.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/10 border-primary/20 font-medium"
                    style={{ color: "#5a4a20" }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1
                className="text-balance"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#1a1200",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  marginBottom: "16px",
                }}
              >
                Trust by Design: A Framework for Responsible AI
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: "1.08rem",
                  color: "#3d2800",
                  lineHeight: 1.7,
                  maxWidth: "640px",
                }}
              >
                I created the missing infrastructure between technical AI excellence and the human experience of trustworthiness.
              </p>

              {/* CTA */}
              <a
                href="https://www.trust-by-design.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  background: "#c9960a",
                  color: "#fff",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Explore the full framework at trust-by-design.org
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 mb-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="glass-card rounded-xl p-4 text-center"
                  >
                    <div className="text-xl font-bold" style={{ color: "#c9960a" }}>{s.num}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden mt-6" style={{ border: "1px solid rgba(212,201,168,0.4)" }}>
                <Image
                  src="/images/trust-meeting-new.png"
                  alt="Trust by Design research and advisory presentation"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-4xl">

            {/* ============================================ */}
            {/* THE PROBLEM I SET OUT TO SOLVE */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.Target className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">The Problem I Set Out to Solve</h2>
              </div>

              <div className="space-y-4 text-[0.95rem] text-muted-foreground leading-relaxed max-w-[680px]">
                <p>
                  During my Master{"'"}s research at ELISAVA, I studied how technically mature government AI systems {"\u2014"} systems built with genuine rigour around accuracy, security, and compliance {"\u2014"} were still failing in practice. Users didn{"'"}t trust them. Helpdesk costs were climbing. Adoption was stalling. The technical layer was solid. The human layer was missing.
                </p>
                <p>
                  I identified a <strong className="text-foreground">67% abandonment rate</strong> and <strong className="text-foreground">42% helpdesk cost increase</strong> as the measurable cost of this gap. My research question became: <em>how do you design the socio-technical layer that makes technical excellence humanly trustworthy?</em>
                </p>
              </div>
            </section>

            {/* ============================================ */}
            {/* WHAT I INVESTIGATED */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.Search className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">What I Investigated</h2>
              </div>

              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[680px] mb-6">
                I examined three publicly documented government AI systems to understand where and why the trust gap appeared.
              </p>

              {/* 2+1 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {SYSTEMS.slice(0, 2).map((sys) => (
                  <div key={sys.name} className="bg-card rounded-xl border border-border p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icons.Server className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{sys.name}</h4>
                        <p className="text-[11px] text-muted-foreground">{sys.org}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#3d6a42" }}>Strength</div>
                      <p className="text-sm text-card-foreground leading-relaxed">{sys.strength}</p>
                    </div>
                    <div className="mt-auto pt-3 border-t border-border/50">
                      <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#c53030" }}>Trust Gap</div>
                      <p className="text-sm text-card-foreground leading-relaxed">{sys.gap}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="max-w-md mx-auto">
                {SYSTEMS.slice(2).map((sys) => (
                  <div key={sys.name} className="bg-card rounded-xl border border-border p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icons.Server className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{sys.name}</h4>
                        <p className="text-[11px] text-muted-foreground">{sys.org}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#3d6a42" }}>Strength</div>
                      <p className="text-sm text-card-foreground leading-relaxed">{sys.strength}</p>
                    </div>
                    <div className="mt-auto pt-3 border-t border-border/50">
                      <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#c53030" }}>Trust Gap</div>
                      <p className="text-sm text-card-foreground leading-relaxed">{sys.gap}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Blockquote */}
              <blockquote
                className="mt-8 text-base font-semibold italic text-center max-w-lg mx-auto"
                style={{ color: "#c9960a" }}
              >
                {"\u201C"}Technical perfection does not automatically create experienced trustworthiness.{"\u201D"}
              </blockquote>
            </section>

            {/* ============================================ */}
            {/* WHAT I BUILT */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.Layers className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">What I Built</h2>
              </div>

              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[680px] mb-8">
                I developed the Trust by Design framework {"\u2014"} four architectural principles that sit between Responsible AI systems and the humans who depend on them.
              </p>

              {/* Four Principle Cards with amber left border */}
              <div className="space-y-3 mb-8">
                {PRINCIPLES.map((p) => {
                  const Icon = p.icon
                  return (
                    <div
                      key={p.title}
                      className="flex items-start gap-4 bg-card rounded-xl border border-border p-5"
                      style={{ borderLeft: "3px solid #c9960a" }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-1">{p.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-[680px]">
                My research methods included <strong className="text-foreground">Critical Journey Mapping</strong> across service helpdesk, identity and authorisation, and cross-system credentials {"\u2014"} and <strong className="text-foreground">systematic gap analysis</strong> measuring literacy gaps, explainability gaps, recovery gaps, and accountability gaps.
              </p>
            </section>

            {/* ============================================ */}
            {/* THE TRUST LAYER */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.Shield className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">The Trust Layer</h2>
              </div>

              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[680px] mb-8">
                The framework introduced a Trust Layer {"\u2014"} a distinct architectural layer sitting between AI systems and users that existing Responsible AI approaches don{"'"}t address.
              </p>

              {/* Stacked Band Diagram */}
              <div className="rounded-xl overflow-hidden border border-border mb-4" style={{ maxWidth: "600px" }}>
                {/* Top Band */}
                <div className="px-5 py-4 text-center" style={{ background: "rgba(245,240,232,0.8)" }}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Users</div>
                  <div className="text-sm font-bold text-foreground">Citizens / Patients / Frontline Staff</div>
                </div>
                {/* Middle Band - Trust Layer */}
                <div className="px-5 py-5 text-center" style={{ background: "rgba(201,150,10,0.15)" }}>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#c9960a" }}>Trust Layer</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Explainability", "Recovery", "Human Control", "Accessibility"].map((item) => (
                      <span
                        key={item}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: "rgba(201,150,10,0.2)", color: "#7a5800" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Bottom Band */}
                <div className="px-5 py-4 text-center" style={{ background: "#1a1200", color: "#f5f0e8" }}>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(245,240,232,0.6)" }}>Infrastructure</div>
                  <div className="text-sm font-bold">AI Models &middot; Data Infrastructure &middot; Risk & Compliance Tooling</div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground italic max-w-[500px]">
                Responsible AI ensures the system works. The Trust Layer ensures people can use, understand, and trust it.
              </p>
            </section>

            {/* ============================================ */}
            {/* WITHOUT VS WITH */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.GitCompareArrows className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Without vs With</h2>
              </div>

              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[680px] mb-8">
                The consequences of missing the Trust Layer are measurable and costly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Without */}
                <div className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(197,48,48,0.25)", background: "rgba(197,48,48,0.04)" }}>
                  <div className="px-5 py-3" style={{ background: "rgba(197,48,48,0.08)" }}>
                    <h3 className="text-sm font-bold" style={{ color: "#c53030" }}>Without Trust Layer</h3>
                  </div>
                  <div className="px-5 py-4">
                    <div className="space-y-2.5">
                      {[
                        "AI decision made",
                        "User doesn't understand",
                        "No explanation available",
                        "No recovery path",
                        "Escalation to helpdesk",
                        "Loss of trust",
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold" style={{ background: "rgba(197,48,48,0.12)", color: "#c53030" }}>{i + 1}</div>
                          <span className="text-sm text-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t text-xs font-semibold" style={{ borderColor: "rgba(197,48,48,0.15)", color: "#c53030" }}>
                      +{"\u20AC"}2{"\u2013"}4M annual cost &middot; +42% helpdesk burden
                    </div>
                  </div>
                </div>

                {/* With */}
                <div className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(61,106,66,0.25)", background: "rgba(61,106,66,0.04)" }}>
                  <div className="px-5 py-3" style={{ background: "rgba(61,106,66,0.08)" }}>
                    <h3 className="text-sm font-bold" style={{ color: "#3d6a42" }}>With Trust Layer</h3>
                  </div>
                  <div className="px-5 py-4">
                    <div className="space-y-2.5">
                      {[
                        "AI decision made",
                        "Explanation provided",
                        "Recovery path clear",
                        "Human control available",
                        "Resolution achieved",
                        "Trust maintained",
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold" style={{ background: "rgba(61,106,66,0.12)", color: "#3d6a42" }}>{i + 1}</div>
                          <span className="text-sm text-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t text-xs font-semibold" style={{ borderColor: "rgba(61,106,66,0.15)", color: "#3d6a42" }}>
                      Cost reduction &middot; Improved outcomes
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============================================ */}
            {/* FROM RESEARCH TO PRACTICE */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.Rocket className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">From Research to Practice</h2>
              </div>

              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[680px] mb-8">
                After completing the research, I turned the framework into a consulting practice. Trust by Design now helps regulated organisations build the human layer that makes their AI systems compliant, adopted, and trusted {"\u2014"} ahead of EU AI Act enforcement in August 2026.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Left - The Practice */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-base font-bold text-foreground mb-3">The Practice</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    I offer three services: <strong className="text-foreground">Trust Audits</strong> to identify gaps, <strong className="text-foreground">Framework Implementation</strong> to design the Trust Layer into existing systems, and <strong className="text-foreground">EU AI Act Readiness</strong> to build human-centred compliance before the August 2026 deadline.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary">Trust Audits</span>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary">Framework Implementation</span>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary">EU AI Act Readiness</span>
                  </div>
                  <a
                    href="https://www.trust-by-design.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    trust-by-design.org
                    <Icons.ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Right - The Tools */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-base font-bold text-foreground mb-3">The Tools I Built</h3>
                  <div className="space-y-4">
                    <div className="bg-background/50 rounded-lg border border-border/50 p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icons.ClipboardCheck className="h-4 w-4 text-primary flex-shrink-0" />
                        <h4 className="text-sm font-bold text-foreground">TrustAudit Tools</h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                        An interactive self-assessment I created so organisations can identify their own explainability, recovery, accessibility, and control gaps.
                      </p>
                      <a href="https://trustaudit.tools" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                        trustaudit.tools <Icons.ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="bg-background/50 rounded-lg border border-border/50 p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icons.ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
                        <h4 className="text-sm font-bold text-foreground">TrustBridge</h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                        Case study examples showing Trust Layer implementation across regulated sectors.
                      </p>
                      <a href="https://trustbridge.design" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                        trustbridge.design <Icons.ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============================================ */}
            {/* TAKING IT INTO PRACTICE */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.Presentation className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Taking It Into Practice</h2>
              </div>

              <div
                className="bg-card rounded-xl border border-border p-6"
                style={{ borderLeft: "3px solid #c9960a" }}
              >
                <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
                  I also brought the framework into practice through internal advisory sessions {"\u2014"} presenting to process management leaders and cross-functional teams within regulated government institutions. These sessions focused on AI literacy, Trust Layer integration, and translating abstract trust concepts into concrete process improvements. Seeing the framework land with operational teams {"\u2014"} and watching them connect the principles to their own systems {"\u2014"} was the moment I knew the research had real-world traction.
                </p>
              </div>
            </section>

            {/* ============================================ */}
            {/* WHERE IT APPLIES */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.Globe className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Where It Applies</h2>
              </div>

              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[680px] mb-8">
                The Trust Layer isn{"'"}t specific to government. Any sector deploying high-risk AI faces the same gap.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {DOMAINS.map((d) => (
                  <div key={d.title} className="bg-card rounded-xl border border-border p-4">
                    <h4 className="text-sm font-bold text-foreground mb-2.5">{d.title}</h4>
                    <ul className="space-y-1">
                      {d.cases.map((c) => (
                        <li key={c} className="text-[11px] text-muted-foreground leading-snug flex items-start gap-1.5">
                          <span className="text-primary mt-0.5 flex-shrink-0">{"\u2022"}</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ============================================ */}
            {/* OUTCOMES */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Outcomes</h2>
              </div>

              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[680px] mb-8">
                The research produced tools, a practice, and validated frameworks {"\u2014"} not just a thesis.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {OUTCOMES.map((o) => (
                  <div
                    key={o.stat}
                    className="bg-card rounded-xl border border-border p-5 text-center flex flex-col items-center"
                  >
                    <div className="text-sm font-bold text-primary mb-1.5 leading-tight">{o.stat}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{o.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ============================================ */}
            {/* REFLECTION */}
            {/* ============================================ */}
            <section className="py-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Icons.Quote className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Reflection</h2>
              </div>

              <div className="space-y-4 text-[0.95rem] text-muted-foreground leading-relaxed max-w-[680px]">
                <p>
                  This project started from a frustration: Germany{"'"}s most sophisticated AI systems were technically excellent and operationally fragile at the same time. The research gave me the language for why {"\u2014"} and the framework gave me something to do about it.
                </p>
                <p>
                  What surprised me most was how quickly operational teams recognised the gap once I named it. The Trust Layer wasn{"'"}t a hard sell. It was something people had felt but couldn{"'"}t articulate.
                </p>
                <p>
                  That{"'"}s what I{"'"}m building now {"\u2014"} the tools, the practice, and the conversations that help organisations design trust before it becomes a crisis.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="mailto:info@jennifersimonds.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
                  style={{
                    background: "#1a1200",
                    color: "#f5c842",
                    textDecoration: "none",
                  }}
                >
                  Interested in working together? Get in touch
                  <Icons.ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </section>

          </div>

          {/* Footer */}
          <footer className="border-t border-border/50 mt-8">
            <div className="container mx-auto px-4 py-8 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Icons.ArrowLeft className="h-3.5 w-3.5 inline mr-1.5" />
                Back to all work
              </Link>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.trust-by-design.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  trust-by-design.org
                </a>
                <span className="text-border">|</span>
                <a
                  href="https://trustaudit.tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  trustaudit.tools
                </a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </>
  )
}
