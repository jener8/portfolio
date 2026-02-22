"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import * as Icons from "lucide-react"
import { ScrollToTopOnMount } from "@/components/scroll-to-top"

// =============================================================================
// TrustBridge — Human-Centered AI Trust Design
// Content sourced from trustbridge.design
// =============================================================================

const TAGS = [
  "AI Interaction Design",
  "Human-Centred AI",
  "Explainability",
  "Consent Design",
  "Vulnerable Users",
  "EU AI Act",
]

const STATS = [
  { num: "4", label: "Case Studies" },
  { num: "3", label: "Vulnerable Groups" },
  { num: "EU AI Act", label: "Art. 13 Aligned" },
  { num: "WCAG", label: "AA Accessible" },
]

const RISKS = [
  {
    icon: Icons.Brain,
    title: "Cognitive Overload",
    description:
      "Complex AI interfaces overwhelm elderly users, leading to anxiety, errors, and eventual abandonment of essential digital services.",
  },
  {
    icon: Icons.EyeOff,
    title: "Opacity of Decisions",
    description:
      "When AI makes decisions about finances or education without explanation, users lose trust and may make poor counter-decisions.",
  },
  {
    icon: Icons.ShieldAlert,
    title: "Inappropriate Reliance",
    description:
      "Children may over-trust AI homework assistants, hindering critical thinking development and creating dependency.",
  },
  {
    icon: Icons.Lock,
    title: "Privacy Vulnerabilities",
    description:
      "Vulnerable users often unknowingly share sensitive information with AI systems lacking proper safeguards.",
  },
]

const PRINCIPLES = [
  {
    title: "Legibility",
    description:
      "Every AI output must be understandable by the person it affects \u2014 not just the person who built it. Plain language, separated decisions, and visible reasoning are not nice-to-haves. They are the interaction.",
  },
  {
    title: "Deliberate Friction",
    description:
      "Speed is the enemy of informed consent. Interactions designed to be skipped \u2014 cookie banners, pre-checked boxes, one-tap agreements \u2014 are not interactions. They are the removal of choice. Good design slows people down at exactly the right moment.",
  },
  {
    title: "Separated Decisions",
    description:
      "Bundled choices are no choice at all. Each data use, each AI recommendation, each consent clause must stand alone \u2014 so that agreement means something and refusal is genuinely possible.",
  },
  {
    title: "Human Override",
    description:
      'Every AI interaction must have a visible, accessible exit. A way to say no. A way to ask a human. A way to understand before deciding. EU AI Act Article 22 requires this for automated decisions \u2014 good design makes it feel natural, not defensive.',
  },
]

const CASES = [
  {
    icon: Icons.Landmark,
    title: "AI Banking for Older Adults",
    subtitle: "Building confidence in digital finance",
    stat: "73%",
    statLabel: "of adults over 65 express anxiety about AI-powered banking",
    description:
      "The interaction failure isn\u2019t the AI \u2014 it\u2019s that recommendations arrive without explanation, in interfaces that assume confidence the user doesn\u2019t have.",
    designResponse: "Explanation-first interfaces, visible confidence levels, human escalation at every step.",
    features: ["Progressive Disclosure", "Trust Indicators", "Family Co-Pilot Mode", "Adaptive Pacing"],
    image: "/images/trustbridge-banking.jpg",
  },
  {
    icon: Icons.BookOpen,
    title: "AI Education for Children",
    subtitle: "Homework help that teaches, not just answers",
    stat: "68%",
    statLabel: "of parents worry children use AI to complete work rather than learn",
    description:
      "The interaction problem is that AI homework tools are designed to satisfy the question, not develop the thinking behind it.",
    designResponse: "Scaffolded assistance \u2014 AI asks questions instead of giving answers, with checkpoints before each step.",
    features: ["Scaffolded Assistance", "Learning Verification", "Parent Dashboards", "Age-Appropriate Boundaries"],
    image: "/images/trustbridge-education.jpg",
  },
  {
    icon: Icons.Lock,
    title: "AI Data Consent",
    subtitle: "Informed choices, not dark patterns",
    stat: "91%",
    statLabel: "of users tap \"I Agree\" without reading what they're agreeing to",
    description:
      "Consent forms average 4,200 words at a postgraduate reading level, placed at the moment of highest impatience. The interaction is designed to fail.",
    designResponse: "AI consent companion \u2014 translates each clause, separates each decision, progress-tracks completion.",
    features: ["Deliberate Friction", "Grade 7 Plain Language", "Separated Decisions", "Equal Yes and No"],
    image: "/images/trustbridge-consent.jpg",
  },
  {
    icon: Icons.HeartPulse,
    title: "AI Health Dialogue",
    subtitle: "Explainability for patients & clinicians",
    stat: "2-way",
    statLabel: "bidirectional explainability needed between patient and clinician",
    description:
      "Clinical AI generates scores and recommendations neither patient nor clinician can fully explain to each other. The consultation becomes a performance of understanding rather than shared decision-making.",
    designResponse: "Bidirectional explainability \u2014 plain language for patients, reasoning transparency for clinicians, shared pre-consultation brief.",
    features: ["Patient Plain Language", "Clinician Reasoning", "Shared Brief", "Override Controls"],
    image: "/images/trustbridge-health.jpg",
  },
]

const WITHOUT_STEPS = [
  "AI output presented without explanation",
  "User does not understand what it means",
  "No plain language available",
  "No way to refuse or ask questions",
  "User taps agree or abandons",
]

const WITH_STEPS = [
  "AI output translated into plain language",
  "Each decision separated and explained",
  "Friction slows the moment that matters",
  "Human override visible and accessible",
  "User makes an informed, genuine choice",
]

const DOMAINS = [
  {
    icon: Icons.Landmark,
    title: "Financial Services",
    description:
      "Credit decisions, fraud flags, investment recommendations \u2014 all require explainability and override.",
  },
  {
    icon: Icons.HeartPulse,
    title: "Healthcare",
    description:
      "Diagnostic AI, risk scoring, treatment pathways \u2014 bidirectional explainability between patient and clinician.",
  },
  {
    icon: Icons.BookOpen,
    title: "Education",
    description:
      "AI tutoring, assessment tools, learning analytics \u2014 designed to develop thinking, not replace it.",
  },
  {
    icon: Icons.Building2,
    title: "Public Sector",
    description:
      "Benefit eligibility, identity verification, service access \u2014 where exclusion by design is a legal and ethical failure.",
  },
  {
    icon: Icons.Lock,
    title: "Data & Privacy",
    description:
      "Consent flows, data sharing, retention policies \u2014 where informed choice is a legal requirement, not a design preference.",
  },
  {
    icon: Icons.Bot,
    title: "Any AI Product",
    description:
      "If your AI makes a decision that affects a real person, the interaction layer is not optional from August 2026.",
  },
]

const FLOW_STEPS = [
  { title: "Output", description: "AI makes a decision or recommendation" },
  { title: "Translate", description: "Plain language explanation generated" },
  { title: "Slow down", description: "Deliberate friction at decision point" },
  { title: "Separate", description: "Each choice is its own moment" },
  { title: "Override", description: "Human control always visible" },
]

const OUTCOMES = [
  {
    icon: Icons.Ruler,
    text: "Four interaction design systems \u2014 each documented with prototypes, principles, and testable frameworks",
  },
  {
    icon: Icons.Users,
    text: "Senior-First methodology validated \u2014 interaction patterns tested with adults 65+, children 10\u201316, and clinical stakeholders",
  },
  {
    icon: Icons.Scale,
    text: "EU AI Act Article 13 alignment \u2014 transparency and explainability requirements designed in from the start, not retrofitted",
  },
  {
    icon: Icons.Accessibility,
    text: "WCAG AA compliance \u2014 all interface proposals meet accessibility standards throughout",
  },
  {
    icon: Icons.Globe,
    text: "Open research published \u2014 trustbridge.design available as a resource for organisations and peer designers",
  },
  {
    icon: Icons.Link,
    text: "Cross-domain pattern established \u2014 the same five-step interaction model applies across finance, health, education, and public sector",
  },
]

// =============================================================================
// Component
// =============================================================================

export default function TrustBridgeCaseStudy() {
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
          {/* Hero Section */}
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
                  fontWeight: 900,
                  color: "#1a1200",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                }}
              >
                Building Trust in AI Interactions
              </h1>
              <p
                className="leading-relaxed max-w-2xl"
                style={{ fontSize: "1.1rem", color: "#2d2000", fontWeight: 450, lineHeight: 1.8, marginBottom: "32px" }}
              >
                Design proposals for helping vulnerable users navigate AI with confidence. From elderly banking to children{"'"}s education.
              </p>

              {/* Prominent CTA */}
              <a
                href="https://trustbridge.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  background: "#c9960a",
                  color: "#fff",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Explore the full project at trustbridge.design
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>

              {/* Hero Image */}
              <div className="w-full rounded-2xl overflow-hidden relative" style={{ marginBottom: "32px" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case-education-VNjJXEHmfV1qdpvkE6XPdJ4SK1U52w.jpg"
                  alt="Abstract representation of trust between humans and AI systems"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "360px" }}
                  priority
                />
              </div>

              {/* Quick Case Study Links */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ marginBottom: "32px" }}>
                {[
                  { icon: Icons.Landmark, label: "Elderly Banking", sub: "Building confidence in AI finance" },
                  { icon: Icons.BookOpen, label: "Children & AI", sub: "Ethical homework assistance" },
                  { icon: Icons.Lock, label: "Data Consent", sub: "Informed choices, not dark patterns" },
                  { icon: Icons.HeartPulse, label: "Health Dialogue", sub: "Explainability for patients & clinicians" },
                ].map((item, i) => {
                  const NavIcon = item.icon
                  return (
                    <a
                      key={i}
                      href={`#case-${i}`}
                      className="flex flex-col items-center text-center p-4 rounded-xl transition-all hover:shadow-md"
                      style={{
                        background: "rgba(255,255,255,0.55)",
                        border: "1px solid rgba(212,201,168,0.5)",
                      }}
                    >
                      <NavIcon className="h-5 w-5 text-primary mb-2" />
                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a1200" }}>{item.label}</span>
                      <span style={{ fontSize: "0.7rem", color: "#6b5a30", marginTop: "2px" }}>{item.sub}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <div
                className="grid grid-cols-2 sm:grid-cols-4 overflow-hidden rounded-2xl"
                style={{ gap: "1px", background: "rgba(201,150,10,0.15)", margin: "0 0 48px" }}
              >
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      padding: "20px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#c9960a", lineHeight: 1, marginBottom: "4px" }}>
                      {stat.num}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#6b5a30", fontWeight: 600, letterSpacing: "0.04em" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Opening */}
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                Today{"'"}s AI interfaces are designed for tech-savvy users. This leaves millions of elderly people, children, and other vulnerable groups exposed to harm.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                Through four case studies I designed and documented the interaction layer that determines whether AI builds trust or destroys it. The cases share a common finding: the technology was rarely the problem. The problem was the moment of contact between the system and the person it was supposed to serve.
              </p>

              {/* Current Risks */}
              <SectionHeading>The Current Risks</SectionHeading>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ margin: "20px 0 40px" }}>
                {RISKS.map((risk, i) => {
                  const RiskIcon = risk.icon
                  return (
                    <div
                      key={i}
                      className="flex gap-4 items-start"
                      style={{
                        padding: "20px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(212,201,168,0.4)",
                      }}
                    >
                      <div
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: "rgba(192,57,43,0.08)",
                        }}
                      >
                        <RiskIcon className="h-5 w-5" style={{ color: "#c0392b" }} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a1200", marginBottom: "4px" }}>
                          {risk.title}
                        </h4>
                        <p style={{ fontSize: "0.85rem", color: "#6b5a30", margin: 0, lineHeight: 1.55 }}>
                          {risk.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <PullQuote>
                {'"'}The people most affected by AI decisions are almost never the people who designed, trained, or tested
                the system. The gap between those two groups is where trust breaks.{'"'}
              </PullQuote>

              {/* Four Interaction Principles */}
              <SectionHeading>Four Interaction Principles</SectionHeading>
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                Each case study was developed through a combination of interface prototyping, research framework design,
                and testing with representative users. The Senior-First Design Principle ran through all four: if a
                72-year-old who didn{"'"}t grow up with smartphones can understand the interaction, the design passes. If
                they can{"'"}t, the system is not accessible {"\u2014"} it is biased.
              </p>

              <div className="flex flex-col gap-4" style={{ margin: "20px 0" }}>
                {PRINCIPLES.map((p, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start"
                    style={{
                      padding: "20px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(212,201,168,0.4)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: "#c9960a",
                        color: "white",
                        fontWeight: 900,
                        fontSize: "14px",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a1200", marginBottom: "4px" }}>
                        {p.title}
                      </h4>
                      <p style={{ fontSize: "0.85rem", color: "#6b5a30", margin: 0, lineHeight: 1.55 }}>
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Divider />

              {/* ========== THE FOUR CASE STUDIES ========== */}
              <SectionHeading>The Case Studies</SectionHeading>
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "24px" }}>
                Deep dives into solving trust challenges for vulnerable user groups. Each case includes interface designs, interview frameworks, and evidence of impact.
              </p>

              {CASES.map((c, i) => {
                const CaseIcon = c.icon
                const anchorId = i === 3 ? "explainability" : i === 2 ? "journey-mapping" : undefined
                return (
                  <div key={i} id={anchorId || `case-${i}`} className="scroll-mt-24" style={{ marginBottom: "56px" }}>
                    {/* Case Study Header */}
                    <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
                      <div
                        className="flex items-center justify-center flex-shrink-0"
                        style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(201,150,10,0.12)" }}
                      >
                        <CaseIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1a1200", lineHeight: 1.2 }}>
                          {c.title}
                        </h3>
                        <p style={{ fontSize: "0.82rem", color: "#6b5a30", margin: 0 }}>{c.subtitle}</p>
                      </div>
                    </div>

                    {/* Stat Callout */}
                    <div
                      className="flex items-center gap-4"
                      style={{
                        padding: "16px 20px",
                        borderRadius: "14px",
                        background: "rgba(201,150,10,0.06)",
                        border: "1px solid rgba(201,150,10,0.15)",
                        marginBottom: "20px",
                      }}
                    >
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#c9960a", lineHeight: 1 }}>{c.stat}</span>
                      <span style={{ fontSize: "0.88rem", color: "#3d2800", lineHeight: 1.4 }}>{c.statLabel}</span>
                    </div>

                    <p style={{ fontSize: "0.95rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                      {c.description}
                    </p>

                    {/* Interface Mockup Image - Individual per case */}
                    <div
                      className="w-full rounded-xl overflow-hidden"
                      style={{ marginBottom: "20px", border: "1px solid rgba(212,201,168,0.4)" }}
                    >
                      {i === 0 && (
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-17%20at%2016.37.44-0Q6Sxlyo1bsGWUEkCqrY2Qeq8OaCB7.png"
                          alt="Interface design mockup for AI Banking for Older Adults"
                          width={900}
                          height={500}
                          className="w-full h-auto object-cover"
                          style={{ maxHeight: "400px" }}
                        />
                      )}
                      {i === 1 && (
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-17%20at%2016.56.18-7xINSL2o0xZBAbKP7Yi8LaxARKY94Q.png"
                          alt="Interface design mockup for AI Education for Children"
                          width={900}
                          height={500}
                          className="w-full h-auto object-cover"
                          style={{ maxHeight: "400px" }}
                        />
                      )}
                      {i === 2 && (
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-17%20at%2016.56.42-Gd2BZyrS2ARZZtgxuvR50i3UOP5WVC.png"
                          alt="Interface design mockup for AI Data Consent"
                          width={900}
                          height={500}
                          className="w-full h-auto object-cover"
                          style={{ maxHeight: "400px" }}
                        />
                      )}
                      {i === 3 && (
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-17%20at%2016.57.22-gB8n782vWJMrTZYzaWA58YrKsngxp2.png"
                          alt="Interface design mockup for AI Health Dialogue"
                          width={900}
                          height={500}
                          className="w-full h-auto object-cover"
                          style={{ maxHeight: "400px" }}
                        />
                      )}
                    </div>

                    {/* Design Approach Features */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" style={{ marginBottom: "16px" }}>
                      {c.features.map((feature, fi) => (
                        <div
                          key={fi}
                          className="text-center"
                          style={{
                            padding: "12px 8px",
                            background: "rgba(255,255,255,0.55)",
                            border: "1px solid rgba(212,201,168,0.4)",
                            borderRadius: "10px",
                          }}
                        >
                          <Icons.Check className="h-4 w-4 text-primary mx-auto mb-1" />
                          <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#1a1200" }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Design Response */}
                    <div
                      style={{
                        padding: "14px 16px",
                        background: "rgba(201,150,10,0.08)",
                        borderRadius: "10px",
                        fontSize: "0.85rem",
                        color: "#8a5c00",
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ fontWeight: 800 }}>Design response:</span> {c.designResponse}
                    </div>

                    {i < CASES.length - 1 && <Divider />}
                  </div>
                )
              })}

              <Divider />

              {/* Solution */}
              <SectionHeading>The Interaction Layer</SectionHeading>
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                Across all four cases, the same structural solution emerged: an interaction layer that sits between the
                AI system and the human user, translating outputs into something the person can actually act on.
              </p>

              <DotList
                items={[
                  "Legibility Layer: AI outputs rewritten at Grade 7 reading level, with source reasoning visible on request. Not a summary \u2014 a translation.",
                  "Friction Architecture: Deliberate slowdowns at high-stakes moments. Progress indicators. Confirmation steps. A \u201Cpause and ask someone\u201D option that doesn\u2019t feel like failure.",
                  "Choice Separation: No bundled consent. No pre-checked boxes. Each decision is its own moment, with equal visual weight given to Yes and No.",
                  "Rights Surfacing: GDPR Article 7 and EU AI Act Article 22 rights appear at the exact point in the interaction where they apply \u2014 not buried in a policy page.",
                  "Senior-First Validation: Every interaction tested with users over 65. If the experience requires digital confidence the user doesn\u2019t have, the design fails.",
                ]}
              />

              <Divider />

              {/* Comparison */}
              <SectionHeading>With and Without the Trust Layer</SectionHeading>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-2xl"
                style={{ gap: "1px", background: "rgba(201,150,10,0.2)", margin: "20px 0" }}
              >
                {/* Without */}
                <div style={{ padding: "24px", background: "rgba(255,240,240,0.7)", backdropFilter: "blur(10px)" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                      color: "#c0392b",
                    }}
                  >
                    Without interaction design
                  </div>
                  {WITHOUT_STEPS.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-2.5 items-start"
                      style={{ fontSize: "0.82rem", color: "#3d2800", marginBottom: "10px", lineHeight: 1.5 }}
                    >
                      <span style={{ color: "#9ca3af", fontWeight: 700, flexShrink: 0 }}>{"\u2193"}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                  <div
                    style={{
                      marginTop: "12px",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      background: "rgba(192,57,43,0.1)",
                      color: "#c0392b",
                    }}
                  >
                    Trust broken. Adoption fails. Compliance risk.
                  </div>
                </div>

                {/* With */}
                <div style={{ padding: "24px", background: "rgba(240,255,245,0.7)", backdropFilter: "blur(10px)" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                      color: "#1a7a45",
                    }}
                  >
                    With TrustBridge interaction layer
                  </div>
                  {WITH_STEPS.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-2.5 items-start"
                      style={{ fontSize: "0.82rem", color: "#3d2800", marginBottom: "10px", lineHeight: 1.5 }}
                    >
                      <span style={{ color: "#c9960a", fontWeight: 700, flexShrink: 0 }}>{"\u2193"}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                  <div
                    style={{
                      marginTop: "12px",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      background: "rgba(26,122,69,0.1)",
                      color: "#1a7a45",
                    }}
                  >
                    Trust built. Adoption works. EU AI Act compliant.
                  </div>
                </div>
              </div>

              {/* Interaction Flow */}
              <SectionHeading>The Interaction Flow</SectionHeading>
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                Every TrustBridge interaction follows the same five-step pattern regardless of domain:
              </p>

              <div
                className="flex flex-col sm:flex-row items-center gap-0 overflow-x-auto pb-2"
                style={{ margin: "20px 0" }}
              >
                {FLOW_STEPS.map((step, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center">
                    <div
                      className="text-center relative"
                      style={{
                        flex: 1,
                        minWidth: "120px",
                        padding: "16px 12px",
                        background: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(212,201,168,0.4)",
                        borderRadius: "12px",
                      }}
                    >
                      <h4 style={{ fontSize: "0.8rem", color: "#c9960a", marginBottom: "4px", fontWeight: 700 }}>
                        {step.title}
                      </h4>
                      <p style={{ fontSize: "0.72rem", color: "#6b5a30", margin: 0, lineHeight: 1.4 }}>
                        {step.description}
                      </p>
                    </div>
                    {i < FLOW_STEPS.length - 1 && (
                      <span
                        className="sm:rotate-0 rotate-90 flex-shrink-0 px-1"
                        style={{ fontSize: "18px", color: "#c9960a" }}
                      >
                        {"\u2192"}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <Divider />

              {/* Where This Applies */}
              <SectionHeading>Where This Applies</SectionHeading>
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                The four case studies are evidence for a pattern that applies across any regulated domain where AI makes
                decisions that affect real people.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" style={{ margin: "20px 0" }}>
                {DOMAINS.map((d, i) => {
                  const DomainIcon = d.icon
                  return (
                    <div
                      key={i}
                      className="text-center"
                      style={{
                        padding: "18px",
                        background: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(212,201,168,0.4)",
                        borderRadius: "14px",
                      }}
                    >
                      <DomainIcon className="h-5 w-5 text-primary mx-auto mb-2" />
                      <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1200", marginBottom: "6px" }}>
                        {d.title}
                      </h4>
                      <p style={{ fontSize: "0.75rem", color: "#6b5a30", margin: 0, lineHeight: 1.5 }}>
                        {d.description}
                      </p>
                    </div>
                  )
                })}
              </div>

              <Divider />

              {/* Outcome */}
              <SectionHeading>Outcome</SectionHeading>

              <div className="flex flex-col gap-2.5" style={{ margin: "16px 0" }}>
                {OUTCOMES.map((o, i) => {
                  const OutcomeIcon = o.icon
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                      style={{
                        padding: "14px 16px",
                        background: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(212,201,168,0.4)",
                        borderRadius: "12px",
                        fontSize: "0.88rem",
                        color: "#3d2800",
                        lineHeight: 1.5,
                      }}
                    >
                      <OutcomeIcon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{o.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* Reflection */}
              <SectionHeading>Reflection</SectionHeading>
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                TrustBridge started from a single observation: the people most affected by AI systems are almost never
                in the room when those systems are designed. Elderly adults, children, patients {"\u2014"} they appear in user
                research documents, if at all, as edge cases or accessibility footnotes.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                What the four case studies demonstrated is that these groups are not edge cases. They are the most
                accurate diagnostic of whether an AI interaction was designed for real people or for an imaginary average
                user. When an interaction fails a 68-year-old retired teacher, the problem is not the teacher. The
                problem is the design.
              </p>

              <PullQuote>
                {'"'}Designing for the most demanding user doesn{"'"}t create a simpler product. It creates an honest one.{'"'}
              </PullQuote>

              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                The research also reinforced a practical argument: organisations that invest in interaction design at the
                human-AI boundary see better adoption, fewer helpdesk escalations, and {"\u2014"} from August 2026 {"\u2014"} stronger EU
                AI Act compliance evidence. Trust is not a soft value. It is measurable, designable infrastructure.
              </p>

              {/* Platform */}
              <SectionHeading>Platform & Research</SectionHeading>
              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                TrustBridge is published as an open design research portfolio at{" "}
                <a
                  href="https://trustbridge.design"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#c9960a", fontWeight: 600 }}
                >
                  trustbridge.design
                </a>
                . Each case study includes:
              </p>

              <DotList
                items={[
                  "Interface design proposals with interactive prototypes",
                  "Research interview frameworks for testing with real users",
                  "Design principles grounded in EU AI Act and GDPR requirements",
                  "Plain-language templates organisations can adapt for their own products",
                ]}
              />

              <p style={{ fontSize: "0.98rem", color: "#3d2800", lineHeight: 1.8, marginBottom: "16px" }}>
                The research was developed alongside the Trust by Design governance framework {"\u2014"} TrustBridge provides the
                interaction-level evidence for the systemic arguments made at{" "}
                <a
                  href="https://trust-by-design.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#c9960a", fontWeight: 600 }}
                >
                  trust-by-design.org
                </a>
                .
              </p>

              {/* Transparency Layer */}
              <Divider />
              <div
                style={{
                  marginTop: "40px",
                  padding: "32px",
                  background: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(212,201,168,0.5)",
                  borderRadius: "20px",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "rgba(201,150,10,0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <Icons.Eye className="h-5 w-5" style={{ color: "#c9960a" }} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1a1200", margin: 0 }}>
                    How This Was Made
                  </h3>
                </div>

                <p style={{ fontSize: "0.92rem", color: "#3d2800", lineHeight: 1.75, marginBottom: "20px" }}>
                  I practice what I preach. This project was built with AI at every stage {"\u2014"} and I want you to see how.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      icon: Icons.Code2,
                      title: "Vibe Coding",
                      text: "The code for this portfolio and the TrustBridge site was written through AI-assisted development. I direct the architecture, logic, and design system; the AI accelerates the build.",
                    },
                    {
                      icon: Icons.ImageIcon,
                      title: "AI-Generated Visuals",
                      text: "Images, videos, Figma screens, and interactive prototypes were generated with AI tools. Every visual was art-directed and refined by me to serve a design purpose.",
                    },
                    {
                      icon: Icons.MessagesSquare,
                      title: "Interactive AI Interfaces",
                      text: "I can build AI chat interfaces that are fully interactive and connected to live LLMs. Not mockups {'\u2014'} real conversational AI products.",
                    },
                    {
                      icon: Icons.Database,
                      title: "AI Systems Knowledge",
                      text: "I understand how RAGs, embeddings, and AI models are built under the hood. This lets me design for what AI actually does, not what marketing says it does.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "20px",
                        background: "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(212,201,168,0.35)",
                        borderRadius: "14px",
                      }}
                    >
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <item.icon className="h-4 w-4" style={{ color: "#c9960a", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1200" }}>{item.title}</span>
                      </div>
                      <p style={{ fontSize: "0.82rem", color: "#5a4a20", lineHeight: 1.65, margin: 0 }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    padding: "16px 20px",
                    background: "rgba(201,150,10,0.06)",
                    borderRadius: "12px",
                    border: "1px solid rgba(201,150,10,0.15)",
                  }}
                >
                  <p style={{ fontSize: "0.82rem", color: "#5a4a20", lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ color: "#1a1200" }}>Why disclose this?</strong> Because a trust designer who hides their own process isn{"'"}t one.
                    AI is my medium {"\u2014"} I use it to build, to prototype, and to think. The design decisions, the ethical framing, and the human insight are mine. The tools are whatever gets the job done honestly.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div
                className="text-center"
                style={{
                  marginTop: "56px",
                  padding: "36px",
                  background: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(212,201,168,0.4)",
                  borderRadius: "20px",
                }}
              >
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1a1200", marginBottom: "10px" }}>
                  Want to be a trust designer too?
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#6b5a30", marginBottom: "24px" }}>
                  We{"'"}re looking for partners who believe AI should work for everyone. Get in touch to explore how we can collaborate on building trustworthy AI experiences together.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <a
                    href="mailto:info@jennifersimonds.com"
                    className="inline-flex font-bold min-h-[44px] items-center"
                    style={{
                      padding: "12px 28px",
                      background: "#1a1200",
                      color: "#f5c842",
                      borderRadius: "100px",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    Get in Touch
                  </a>
                  <a
                    href="https://trustbridge.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex font-bold min-h-[44px] items-center"
                    style={{
                      padding: "12px 28px",
                      border: "2px solid #1a1200",
                      color: "#1a1200",
                      borderRadius: "100px",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    Visit trustbridge.design
                  </a>
                </div>
              </div>

              <div style={{ height: "80px" }} />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

// =============================================================================
// Shared Sub-components
// =============================================================================

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "1.5rem",
        fontWeight: 800,
        color: "#1a1200",
        margin: "48px 0 16px",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  )
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "28px 32px",
        borderLeft: "3px solid #c9960a",
        background: "rgba(255,255,255,0.45)",
        borderRadius: "0 14px 14px 0",
        margin: "28px 0",
      }}
    >
      <p
        style={{
          fontSize: "1.05rem",
          fontStyle: "italic",
          color: "#1a1200",
          fontWeight: 500,
          margin: 0,
          lineHeight: 1.7,
        }}
      >
        {children}
      </p>
    </div>
  )
}

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5" style={{ listStyle: "none", margin: "16px 0" }}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5" style={{ fontSize: "0.92rem", color: "#3d2800", lineHeight: 1.6 }}>
          <span style={{ color: "#c9960a", fontWeight: 900, flexShrink: 0, marginTop: "1px" }}>{"\u2022"}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Divider() {
  return <div style={{ height: "1px", background: "rgba(201,150,10,0.2)", margin: "40px 0" }} />
}
