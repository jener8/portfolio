"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import * as Icons from "lucide-react"
import { ScrollToTopOnMount } from "@/components/scroll-to-top"

// =============================================================================
// Workshop Tools — Facilitation Artefacts for Hard Conversations
// =============================================================================

const TAGS = [
  "Workshop Facilitation",
  "Tool Design",
  "Participatory Research",
  "AI Governance",
  "Facilitation Methods",
]

const STATS = [
  { num: "3", label: "Workshop Contexts" },
  { num: "2", label: "User Groups Tested" },
  { num: "EU AI Act", label: "Evidence Ready" },
  { num: "Growing", label: "More tools added" },
]

const GHOST_TAGS = [
  "Journey Mapping",
  "Risk Assessment",
  "Stakeholder Alignment",
  "AI Literacy",
  "Consent Design",
]

// =============================================================================
// Component
// =============================================================================

export default function WorkshopToolsCaseStudy() {
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
                  fontWeight: 800,
                  color: "#1a1200",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  marginBottom: "16px",
                }}
              >
                The tools I build for the conversations that matter.
              </h1>

              {/* Lead paragraph */}
              <p
                style={{
                  fontSize: "1.08rem",
                  color: "#3d2800",
                  lineHeight: 1.7,
                  maxWidth: "640px",
                }}
              >
                Generic workshop templates produce generic outputs. I design facilitation tools for specific conversations {"\u2014"} the kind where the right question, asked the right way, surfaces something a standard exercise never would. This page documents those tools. It grows as the work grows.
              </p>

              {/* Prominent CTA */}
              <a
                href="https://trustaudit.tools"
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
                Explore the full toolkit at trustaudit.tools
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                style={{ marginBottom: "48px" }}
              >
                {STATS.map((s, i) => (
                  <div
                    key={i}
                    className="text-center"
                    style={{
                      padding: "20px 16px",
                      background: "rgba(255,255,255,0.45)",
                      border: "1px solid rgba(212,201,168,0.4)",
                      borderRadius: "16px",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1a1200", lineHeight: 1.2 }}>
                      {s.num}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#6b5a30", marginTop: "4px" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-background">
            <div className="container mx-auto px-4 max-w-4xl">

              {/* The Tools Section */}
              <SectionHeading>The Tools</SectionHeading>
              <p style={{ fontSize: "0.88rem", color: "#6b5a30", marginBottom: "28px", lineHeight: 1.6 }}>
                Each tool is shown as an artefact with an explanation of what it was designed to do, who it was designed for, and what it produced.
              </p>

              {/* TOOL CARD 1 — The AI Trust Audit Toolkit */}
              <div
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(212,201,168,0.4)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginBottom: "32px",
                }}
              >
                <div className="relative w-full" style={{ maxHeight: "320px", overflow: "hidden" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-ai-chat-interface-with-colorful-gradient-ca-7UyetYAS7CtDuC1x1JtGUA6iRNlROp.jpg"
                    alt="Illustrated workshop scene showing older adults discussing AI trust ratings with a friendly AI character"
                    width={900}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div style={{ padding: "28px 28px 32px" }}>
                  {/* Tool name + type badge */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a1200", margin: 0 }}>
                      AI Trust Audit Toolkit
                    </h3>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#c9960a",
                        background: "rgba(201,150,10,0.1)",
                        border: "1px solid rgba(201,150,10,0.2)",
                        borderRadius: "100px",
                        padding: "4px 12px",
                      }}
                    >
                      Diagnostic Tool
                    </span>
                  </div>

                  {/* What it is */}
                  <h4 style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a1200", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    What it is
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "#3d2800", lineHeight: 1.7, marginBottom: "24px" }}>
                    A two-part facilitation toolkit combining a structured questionnaire with a facilitated group workshop. Designed to surface how people in an organisation really feel about AI {"\u2014"} not the official position, but the actual human signal underneath it.
                  </p>

                  {/* What problem it solves */}
                  <h4 style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a1200", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    What problem it solves
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "#3d2800", lineHeight: 1.7, marginBottom: "24px" }}>
                    Most AI adoption processes measure readiness at the system level. This tool measures it at the human level {"\u2014"} the fears, the misunderstandings, the resistance, and the genuine needs that determine whether implementation succeeds or fails. The questionnaire captures honest individual views before group dynamics shape them. The workshop goes deeper into what the questionnaire surfaces.
                  </p>

                  {/* Three contexts */}
                  <h4 style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a1200", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Contexts it works in
                  </h4>
                  <div className="flex flex-col gap-3" style={{ marginBottom: "24px" }}>
                    {[
                      {
                        icon: Icons.Building2,
                        label: "Leadership & governance teams",
                        text: "Surfaces the gap between what leadership believes about AI readiness and what staff are actually experiencing.",
                      },
                      {
                        icon: Icons.Users,
                        label: "End users and communities",
                        text: "Gives people who will be affected by AI a structured voice before decisions are made.",
                      },
                      {
                        icon: Icons.FlaskConical,
                        label: "Research sessions",
                        text: "Produces documented human oversight evidence usable for EU AI Act Article 9 compliance.",
                      },
                    ].map((ctx, i) => (
                      <div
                        key={i}
                        className="flex gap-3"
                        style={{
                          padding: "14px 16px",
                          background: "rgba(255,255,255,0.4)",
                          border: "1px solid rgba(212,201,168,0.3)",
                          borderRadius: "12px",
                        }}
                      >
                        <ctx.icon className="h-4.5 w-4.5 mt-0.5 flex-shrink-0" style={{ color: "#c9960a" }} />
                        <div>
                          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1200" }}>{ctx.label}</span>
                          <p style={{ fontSize: "0.82rem", color: "#5a4a20", lineHeight: 1.6, margin: "2px 0 0" }}>{ctx.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* What it produces */}
                  <h4 style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a1200", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    What it produces
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {[
                      "A written report of findings in plain language",
                      "A priority list of what to fix, change, or design",
                      "Documented compliance evidence for EU AI Act human oversight requirements",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Icons.CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#c9960a" }} />
                        <span style={{ fontSize: "0.88rem", color: "#3d2800", lineHeight: 1.55 }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Artefact status */}
                  <div
                    style={{
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(212,201,168,0.3)",
                    }}
                  >
                    <p style={{ fontSize: "0.8rem", color: "#6b5a30", margin: 0 }}>
                      Full toolkit available at{" "}
                      <a
                        href="https://trustaudit.tools"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#c9960a", fontWeight: 700, textDecoration: "none" }}
                      >
                        trustaudit.tools
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <Divider />

              {/* More Tools Coming */}
              <div
                className="text-center"
                style={{
                  marginTop: "48px",
                  padding: "36px 28px",
                  background: "rgba(201,150,10,0.04)",
                  border: "1px solid rgba(201,150,10,0.15)",
                  borderRadius: "20px",
                }}
              >
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1a1200", marginBottom: "12px" }}>
                  This toolkit is one of several in development.
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#5a4a20", lineHeight: 1.7, maxWidth: "580px", margin: "0 auto 24px" }}>
                  Workshop facilitation tools for AI governance, accessibility research, and responsible design practice are added here as they are built and tested. If you{"'"}re looking for a specific kind of facilitated session and want to know what tools exist or what could be built, get in touch.
                </p>

                {/* Ghost pill tags */}
                <div className="flex flex-wrap justify-center gap-2" style={{ marginBottom: "24px" }}>
                  {GHOST_TAGS.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "rgba(90,74,32,0.5)",
                        border: "1px solid rgba(212,201,168,0.4)",
                        borderRadius: "100px",
                        padding: "5px 14px",
                        background: "transparent",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="mailto:info@jennifersimonds.com?subject=Workshop+Tools+Enquiry"
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#c9960a",
                    textDecoration: "none",
                  }}
                >
                  Tell me what you need {"\u2192"}
                </a>
              </div>

              <Divider />

              {/* Why I Build My Own Tools */}
              <SectionHeading>Why I Build My Own Tools</SectionHeading>
              <PullQuote>
                A workshop is only as good as the question it{"'"}s designed to ask.
              </PullQuote>

              <p style={{ fontSize: "0.92rem", color: "#3d2800", lineHeight: 1.75, marginBottom: "16px" }}>
                Off-the-shelf workshop canvases are built for average situations. Most situations I work in are not average {"\u2014"} a governance team that{"'"}s defensive about AI risk, a community of older adults who{"'"}ve never been consulted about technology that affects them, end users whose real concerns have never been heard in a design process.
              </p>
              <p style={{ fontSize: "0.92rem", color: "#3d2800", lineHeight: 1.75, marginBottom: "16px" }}>
                Building the right tool means starting from the specific conversation that needs to happen, not the exercise that{"'"}s easiest to run. The AI Trust Audit toolkit took four iterations before it produced outputs that were genuinely useful rather than just interesting.
              </p>
              <p style={{ fontSize: "0.92rem", color: "#3d2800", lineHeight: 1.75, marginBottom: "40px" }}>
                The tools on this page are the ones that survived that process. They work because they were designed to work {"\u2014"} not because they were convenient.
              </p>

              {/* Reflection Pull Quote */}
              <div
                style={{
                  padding: "32px",
                  borderLeft: "3px solid #c9960a",
                  background: "rgba(255,255,255,0.45)",
                  borderRadius: "0 16px 16px 0",
                  margin: "0 0 48px",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    color: "#1a1200",
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {"\u201C"}The best workshop tool is one the participants forget they{"'"}re using.{"\u201D"}
                </p>
              </div>

              <Divider />

              {/* CTA Block */}
              <div
                className="text-center"
                style={{
                  marginTop: "48px",
                  padding: "36px",
                  background: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(212,201,168,0.4)",
                  borderRadius: "20px",
                }}
              >
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1a1200", marginBottom: "10px" }}>
                  Want to see a tool in action {"\u2014"} or commission one?
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#6b5a30", marginBottom: "24px", maxWidth: "540px", margin: "0 auto 24px" }}>
                  Whether you need a facilitated session using an existing tool or a custom tool built for a specific conversation, get in touch with what you{"'"}re trying to surface.
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
                  <Link
                    href="/"
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
                    Back to Start
                  </Link>
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
          lineHeight: 1.5,
        }}
      >
        {children}
      </p>
    </div>
  )
}

function Divider() {
  return (
    <div
      style={{
        height: "1px",
        background: "rgba(212,201,168,0.4)",
        margin: "40px 0",
      }}
    />
  )
}
