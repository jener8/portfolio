"use client"

import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import * as Icons from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { useEffect } from "react"

import { ScrollToTopOnMount } from "@/components/scroll-to-top"
import { Card } from "@/components/ui/card" // Import Card component
import { renderTextWithBullets } from "@/lib/utils" // Assuming renderTextWithBullets is in lib/utils

// =============================================================================
// IMAGE EDITING GUIDE
// =============================================================================
//
// To change any image in your portfolio:
//
// STEP 1: Upload your image first
//   Example: `png file="public/my-new-image.png" url="YOUR_BLOB_URL"`
//
// STEP 2: Find the case study section below (there are 4 case studies)
//   - digital-identity-services (Accessibility Audit)
//   - trust-by-design-framework (AI Governance)
//   - healthcare-iot-experience (Wellness AI)
//   - digital-drivers-licence (i-Kfz)
//
// STEP 3: Replace the image path
//   - Look for "hero:" to change the main hero image
//   - Look for "gallery:" array to change gallery images (4 images each)
//
// =============================================================================

// =============================================================================
// COPY - All User-Facing Text
// =============================================================================
// Edit all visible text here in one central location
const COPY = {
  // Navigation & Header
  nav: {
    backToStart: "Back to Start",
  },

  // Section Headings
  sections: {
    challenge: "The Challenge",
    solution: "Solution",
    outcome: "Outcome",
    trustPrinciples: "Four Trust Principles",
    corePrinciples: "Core Principles",
    researchMethods: "Research Methods",
    keyMethods: "Key Methods",
    keyDeliverables: "Key Deliverables",
    timeline: "Timeline",
    gallery: "Gallery",
    // Added deliveryQuality section heading to COPY object
    deliveryQuality: "Delivery & Quality Assurance", // Added new section heading
  },

  // Download Links
  downloads: {
    appStore: "App Store",
    googlePlay: "Google Play",
    downloadOnAppStore: "Download on App Store",
    downloadOnGooglePlay: "Download on Google Play",
  },

  // Metrics Labels
  metrics: {
    downloads: "Downloads",
    userInsightsApplied: "User insights Applied",
    avgAccessibilityScore: "Avg Accessibility Score",
    certificationScore: "Certification Score",
    comprehensionImprovement: "Comprehension Improvement",
    dailyActiveUsers: "Daily Active Users",
    riskMitigationCycles: "Risk Mitigation Cycles",
    goLiveTimeSaved: "Go-Live Time Saved",
  },

  // Common Labels
  labels: {
    method: "Method",
    deliverable: "Deliverable",
    principle: "Principle",
    phase: "Phase",
    duration: "Duration",
  },

  // Diagram Labels (Trust Layer Architecture)
  diagrams: {
    trustLayer: {
      title: "TRUST LAYER",
      complementaryApproaches: "Complementary Approaches",
      crossDomainApplicability: "Cross-Domain Applicability",
      citizens: "Citizens / Patients / Customers",
      frontlineStaff: "Frontline Staff / Case Workers / Support",
      explainability: "Explainability",
      recoveryErrorHandling: "Recovery & Error Handling",
      humanControl: "Human Control & Override",
      accessibility: "Accessibility & Senior-First Design",
      aiModels: "AI Models",
      dataInfrastructure: "Data Infrastructure",
      riskCompliance: "Risk & Compliance Tooling",
    },
    responsibleAI: {
      title: "Responsible AI",
      subtitle: "(Model & System Level)",
      accuracy: "Accuracy",
      security: "Security",
      robustness: "Robustness",
      compliance: "Compliance & Benchmarking",
    },
    trustByDesign: {
      title: "Trust by Design",
      subtitle: "(Human & Organisational Level)",
      understandability: "Understandability",
      contestability: "Contestability",
      recovery: "Recovery",
      humanOversight: "Human Oversight & Legitimacy",
    },
    crossDomain: {
      finance: "Finance",
      health: "Health",
      education: "Education",
      cybersecurity: "Cybersecurity",
      publicSector: "Public Sector",
      automatedDecisions: "Automated decisions",
      riskScoring: "Risk scoring",
      eligibilityAccess: "Eligibility & access",
      auditCompliance: "Audit & compliance",
      humanOverrideNeeds: "Human override needs",
    },
  },
} as const

// Moved renderTextWithBullets definition here for clarity and moved import to lib/utils
// const renderTextWithBullets = (text: string) => {
//   // Split by double newlines to get paragraphs and bullet sections
//   const sections = text.split("\n\n")

//   return sections.map((section, index) => {
//     // Check if this section contains bullets
//     if (section.trim().startsWith("•")) {
//       // Split into individual bullet points
//       const bullets = section.split("\n").filter((item) => item.trim().startsWith("•"))
//       return (
//         <ul key={index} className="space-y-2 mb-4">
//           {bullets.map((bullet, bIndex) => {
//             // Remove the bullet character and trim
//             const text = bullet.replace(/^•\s*/, "").trim()
//             // Check for bold text wrapped in **
//             const parts = text.split(/(\*\*.*?\*\*)/)
//             return (
//               <li key={bIndex} className="flex items-start gap-3 text-sm text-card-foreground">
//                 <span className="text-primary mt-1">•</span>
//                 <span>
//                   {parts.map((part, pIndex) => {
//                     if (part.startsWith("**") && part.endsWith("**")) {
//                       return <strong key={pIndex}>{part.slice(2, -2)}</strong>
//                     }
//                     return part
//                   })}
//                 </span>
//               </li>
//             )
//           })}
//         </ul>
//       )
//     } else {
//       // Regular paragraph
//       return (
//         <p key={index} className="text-sm text-card-foreground leading-relaxed mb-4">
//           {section}
//         </p>
//       )
//     }
//   })
// }
// </CHANGE>

// =============================================================================
// Visual Components for Case Studies
// =============================================================================

const TrustLayerArchitectureDiagram = () => {
  return (
    <>
      <div className="block sm:hidden space-y-4">
        {/* Top Layer - Humans */}
        <div className="rounded-lg border-2 border-amber-800/30 bg-gray-50 p-4 space-y-2">
          <h3 className="text-base font-semibold text-slate-800 text-center">{COPY.diagrams.trustLayer.citizens}</h3>
          <p className="text-sm text-slate-600 text-center">{COPY.diagrams.trustLayer.frontlineStaff}</p>
        </div>

        {/* Middle Layer - TRUST LAYER */}
        <div className="rounded-lg border-3 border-primary bg-primary/5 p-4 space-y-3">
          <h2 className="text-lg font-bold text-blue-900 text-center mb-4">{COPY.diagrams.trustLayer.title}</h2>

          <div className="space-y-3">
            <div className="rounded-md border border-primary bg-white p-3">
              <p className="text-sm font-medium text-slate-800 text-center">
                {COPY.diagrams.trustLayer.explainability}
              </p>
            </div>

            <div className="rounded-md border border-primary bg-white p-3">
              <p className="text-sm font-medium text-slate-800 text-center">
                {COPY.diagrams.trustLayer.recoveryErrorHandling}
              </p>
            </div>

            <div className="rounded-md border border-primary bg-white p-3">
              <p className="text-sm font-medium text-slate-800 text-center">{COPY.diagrams.trustLayer.humanControl}</p>
            </div>

            <div className="rounded-md border border-primary bg-white p-3">
              <p className="text-sm font-medium text-slate-800 text-center">{COPY.diagrams.trustLayer.accessibility}</p>
            </div>
          </div>
        </div>

        {/* Bottom Layer - Technology */}
        <div className="rounded-lg border-2 border-amber-800/30 bg-slate-100 p-4 space-y-2">
          <p className="text-sm font-medium text-slate-800 text-center">{COPY.diagrams.trustLayer.aiModels}</p>
          <p className="text-sm text-slate-600 text-center">{COPY.diagrams.trustLayer.dataInfrastructure}</p>
          <p className="text-sm text-slate-600 text-center">{COPY.diagrams.trustLayer.riskCompliance}</p>
        </div>
      </div>

      <div className="hidden sm:block w-full overflow-x-auto sm:overflow-x-visible">
        <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Top Layer - Humans */}
          <rect x="50" y="50" width="700" height="120" fill="#f8f9fa" stroke="#334155" strokeWidth="2" rx="8" />
          <text x="400" y="90" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="600">
            {COPY.diagrams.trustLayer.citizens}
          </text>
          <text x="400" y="120" textAnchor="middle" fill="#64748b" fontSize="12">
            {COPY.diagrams.trustLayer.frontlineStaff}
          </text>

          {/* Arrow down */}
          <path d="M 400 170 L 400 200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* Middle Layer - TRUST LAYER (highlighted) */}
          <rect
            x="50"
            y="210"
            width="700"
            height="180"
            fill="#3b82f6"
            fillOpacity="0.08"
            stroke="#3b82f6"
            strokeWidth="3"
            rx="8"
          />
          <text x="400" y="240" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="700">
            {COPY.diagrams.trustLayer.title}
          </text>

          <rect x="80" y="260" width="310" height="50" fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
          <text x="235" y="290" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="500">
            {COPY.diagrams.trustLayer.explainability}
          </text>

          <rect x="410" y="260" width="310" height="50" fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
          <text x="565" y="290" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="500">
            {COPY.diagrams.trustLayer.recoveryErrorHandling}
          </text>

          <rect x="80" y="320" width="310" height="50" fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
          <text x="235" y="350" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="500">
            {COPY.diagrams.trustLayer.humanControl}
          </text>

          <rect x="410" y="320" width="310" height="50" fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
          <text x="565" y="350" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="500">
            {COPY.diagrams.trustLayer.accessibility}
          </text>

          {/* Arrow down */}
          <path d="M 400 390 L 400 420" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* Bottom Layer - Technology */}
          <rect x="50" y="430" width="700" height="120" fill="#f1f5f9" stroke="#334155" strokeWidth="2" rx="8" />
          <text x="400" y="470" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="500">
            {COPY.diagrams.trustLayer.aiModels}
          </text>
          <text x="400" y="495" textAnchor="middle" fill="#64748b" fontSize="11">
            {COPY.diagrams.trustLayer.dataInfrastructure}
          </text>
          <text x="400" y="520" textAnchor="middle" fill="#64748b" fontSize="11">
            {COPY.diagrams.trustLayer.riskCompliance}
          </text>

          {/* Arrow marker definition */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 10 6, 0 6" fill="#64748b" />
            </marker>
          </defs>
        </svg>
      </div>
    </>
  )
}

const ResponsibleAIComparison = () => {
  return (
    <>
      <div className="block sm:hidden space-y-6">
        {/* Title */}
        <h2 className="text-lg font-bold text-slate-900 text-center">
          {COPY.diagrams.trustLayer.complementaryApproaches}
        </h2>

        {/* Left Column - Responsible AI */}
        <div className="rounded-lg border-2 border-amber-800/30 bg-gray-50 p-4 space-y-3">
          <h3 className="text-lg font-bold text-slate-800 text-center">{COPY.diagrams.responsibleAI.title}</h3>
          <p className="text-sm text-slate-600 text-center mb-4">{COPY.diagrams.responsibleAI.subtitle}</p>

          <div className="space-y-3">
            <div className="rounded-md border border-slate-400 bg-white p-3">
              <p className="text-base font-medium text-slate-800 text-center">{COPY.diagrams.responsibleAI.accuracy}</p>
            </div>
            <div className="rounded-md border border-slate-400 bg-white p-3">
              <p className="text-base font-medium text-slate-800 text-center">{COPY.diagrams.responsibleAI.security}</p>
            </div>
            <div className="rounded-md border border-slate-400 bg-white p-3">
              <p className="text-base font-medium text-slate-800 text-center">
                {COPY.diagrams.responsibleAI.robustness}
              </p>
            </div>
            <div className="rounded-md border border-slate-400 bg-white p-3">
              <p className="text-base font-medium text-slate-800 text-center">
                {COPY.diagrams.responsibleAI.compliance}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Trust by Design */}
        <div className="rounded-lg border-3 border-primary bg-primary/5 p-4 space-y-3">
          <h3 className="text-lg font-bold text-blue-900 text-center">{COPY.diagrams.trustByDesign.title}</h3>
          <p className="text-sm text-primary text-center mb-4">{COPY.diagrams.trustByDesign.subtitle}</p>

          <div className="space-y-3">
            <div className="rounded-md border border-primary bg-white p-3">
              <p className="text-base font-medium text-slate-800 text-center">
                {COPY.diagrams.trustByDesign.understandability}
              </p>
            </div>
            <div className="rounded-md border border-primary bg-white p-3">
              <p className="text-base font-medium text-slate-800 text-center">
                {COPY.diagrams.trustByDesign.contestability}
              </p>
            </div>
            <div className="rounded-md border border-primary bg-white p-3">
              <p className="text-base font-medium text-slate-800 text-center">{COPY.diagrams.trustByDesign.recovery}</p>
            </div>
            <div className="rounded-md border border-primary bg-white p-3">
              <p className="text-base font-medium text-slate-800 text-center">
                {COPY.diagrams.trustByDesign.humanOversight}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block w-full overflow-x-auto sm:overflow-x-visible">
        <svg viewBox="0 0 1000 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Left Column - Responsible AI */}
          <rect x="50" y="80" width="420" height="480" fill="#f8f9fa" stroke="#334155" strokeWidth="2" rx="8" />
          <text x="260" y="130" textAnchor="middle" fill="#1e293b" fontSize="20" fontWeight="700">
            {COPY.diagrams.responsibleAI.title}
          </text>
          <text x="260" y="155" textAnchor="middle" fill="#64748b" fontSize="14">
            {COPY.diagrams.responsibleAI.subtitle}
          </text>

          <rect x="80" y="190" width="360" height="60" fill="white" stroke="#64748b" strokeWidth="1.5" rx="6" />
          <text x="260" y="228" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="500">
            {COPY.diagrams.responsibleAI.accuracy}
          </text>

          <rect x="80" y="270" width="360" height="60" fill="white" stroke="#64748b" strokeWidth="1.5" rx="6" />
          <text x="260" y="308" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="500">
            {COPY.diagrams.responsibleAI.security}
          </text>

          <rect x="80" y="350" width="360" height="60" fill="white" stroke="#64748b" strokeWidth="1.5" rx="6" />
          <text x="260" y="388" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="500">
            {COPY.diagrams.responsibleAI.robustness}
          </text>

          <rect x="80" y="430" width="360" height="60" fill="white" stroke="#64748b" strokeWidth="1.5" rx="6" />
          <text x="260" y="468" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="500">
            {COPY.diagrams.responsibleAI.compliance}
          </text>

          {/* Right Column - Trust by Design */}
          <rect
            x="530"
            y="80"
            width="420"
            height="480"
            fill="#3b82f6"
            fillOpacity="0.08"
            stroke="#3b82f6"
            strokeWidth="2"
            rx="8"
          />
          <text x="740" y="130" textAnchor="middle" fill="#1e40af" fontSize="20" fontWeight="700">
            {COPY.diagrams.trustByDesign.title}
          </text>
          <text x="740" y="155" textAnchor="middle" fill="#1e40af" fontSize="14">
            {COPY.diagrams.trustByDesign.subtitle}
          </text>

          <rect x="560" y="190" width="360" height="60" fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
          <text x="740" y="228" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="500">
            {COPY.diagrams.trustByDesign.understandability}
          </text>

          <rect x="560" y="270" width="360" height="60" fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
          <text x="740" y="308" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="500">
            {COPY.diagrams.trustByDesign.contestability}
          </text>

          <rect x="560" y="350" width="360" height="60" fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
          <text x="740" y="388" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="500">
            {COPY.diagrams.trustByDesign.recovery}
          </text>

          <rect x="560" y="430" width="360" height="60" fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
          <text x="740" y="456" textAnchor="middle" fill="#1e293b" fontSize="15" fontWeight="500">
            Human Oversight
          </text>
          <text x="740" y="478" textAnchor="middle" fill="#1e293b" fontSize="15" fontWeight="500">
            & Legitimacy
          </text>

          {/* Title */}
          <text x="500" y="40" textAnchor="middle" fill="#1e293b" fontSize="22" fontWeight="700">
            {COPY.diagrams.trustLayer.complementaryApproaches}
          </text>
        </svg>
      </div>
    </>
  )
}

const CrossDomainMatrix = () => {
  return (
    <>
      <div className="block sm:hidden space-y-6">
        {/* Title */}
        <h2 className="text-lg font-bold text-slate-900 text-center mb-2">
          {COPY.diagrams.trustLayer.crossDomainApplicability}
        </h2>

        {/* Finance */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">{COPY.diagrams.crossDomain.finance}</h3>
          </div>
          <div className="rounded border border-slate-300 bg-white p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.automatedDecisions}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.riskScoring}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.eligibilityAccess}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.auditCompliance}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.humanOverrideNeeds}</p>
            </div>
          </div>
        </div>

        {/* Health */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">{COPY.diagrams.crossDomain.health}</h3>
          </div>
          <div className="rounded border border-slate-300 bg-white p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.automatedDecisions}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.riskScoring}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.eligibilityAccess}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.auditCompliance}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.humanOverrideNeeds}</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">{COPY.diagrams.crossDomain.education}</h3>
          </div>
          <div className="rounded border border-slate-300 bg-white p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.automatedDecisions}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.riskScoring}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.eligibilityAccess}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.auditCompliance}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.humanOverrideNeeds}</p>
            </div>
          </div>
        </div>

        {/* Cybersecurity */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">{COPY.diagrams.crossDomain.cybersecurity}</h3>
          </div>
          <div className="rounded border border-slate-300 bg-white p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.automatedDecisions}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.riskScoring}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.eligibilityAccess}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.auditCompliance}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.humanOverrideNeeds}</p>
            </div>
          </div>
        </div>

        {/* Public Sector */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">{COPY.diagrams.crossDomain.publicSector}</h3>
          </div>
          <div className="rounded border border-slate-300 bg-white p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.automatedDecisions}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.riskScoring}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.eligibilityAccess}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.auditCompliance}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
              <p className="text-sm text-slate-800">{COPY.diagrams.crossDomain.humanOverrideNeeds}</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="text-center mt-4 p-3 bg-slate-50 rounded-md border border-slate-200">
          <p className="text-sm italic text-slate-600">
            {COPY.diagrams.trustLayer.riskCompliance} apply across all domains
          </p>
        </div>
      </div>

      <div className="hidden sm:block w-full overflow-x-auto sm:overflow-x-visible">
        <svg viewBox="0 0 1100 700" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Title */}
          <text x="550" y="40" textAnchor="middle" fill="#1e293b" fontSize="22" fontWeight="700">
            {COPY.diagrams.trustLayer.crossDomainApplicability}
          </text>

          {/* Column Headers */}
          <rect x="180" y="80" width="140" height="60" fill="#1e40af" rx="6" />
          <text x="250" y="115" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            {COPY.diagrams.crossDomain.finance}
          </text>

          <rect x="340" y="80" width="140" height="60" fill="#1e40af" rx="6" />
          <text x="410" y="115" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            {COPY.diagrams.crossDomain.health}
          </text>

          <rect x="500" y="80" width="140" height="60" fill="#1e40af" rx="6" />
          <text x="570" y="115" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            {COPY.diagrams.crossDomain.education}
          </text>

          <rect x="660" y="80" width="140" height="60" fill="#1e40af" rx="6" />
          <text x="730" y="108" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
            Cyber-
          </text>
          <text x="730" y="125" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
            security
          </text>

          <rect x="820" y="80" width="140" height="60" fill="#1e40af" rx="6" />
          <text x="890" y="108" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
            Public
          </text>
          <text x="890" y="125" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
            Sector
          </text>

          {/* Row Labels and Cells */}
          {/* Row 1: Automated decisions */}
          <text x="160" y="190" textAnchor="end" fill="#1e293b" fontSize="13" fontWeight="500">
            Automated
          </text>
          <text x="160" y="205" textAnchor="end" fill="#1e293b" fontSize="13" fontWeight="500">
            decisions
          </text>
          {[180, 340, 500, 660, 820].map((x, i) => (
            <circle key={`r1-${i}`} cx={x + 70} cy="197" r="15" fill="#3b82f6" opacity="0.8" />
          ))}

          {/* Row 2: Risk scoring */}
          <text x="160" y="270" textAnchor="end" fill="#1e293b" fontSize="13" fontWeight="500">
            Risk scoring
          </text>
          {[180, 340, 500, 660, 820].map((x, i) => (
            <circle key={`r2-${i}`} cx={x + 70} cy="270" r="15" fill="#3b82f6" opacity="0.8" />
          ))}

          {/* Row 3: Eligibility & access */}
          <text x="160" y="338" textAnchor="end" fill="#1e293b" fontSize="13" fontWeight="500">
            Eligibility
          </text>
          <text x="160" y="353" textAnchor="end" fill="#1e293b" fontSize="13" fontWeight="500">
            & access
          </text>
          {[180, 340, 500, 660, 820].map((x, i) => (
            <circle key={`r3-${i}`} cx={x + 70} cy="345" r="15" fill="#3b82f6" opacity="0.8" />
          ))}

          {/* Row 4: Audit & compliance */}
          <text x="160" y="413" textAnchor="end" fill="#1e293b" fontSize="13" fontWeight="500">
            Audit &
          </text>
          <text x="160" y="428" textAnchor="end" fill="#1e293b" fontSize="13" fontWeight="500">
            compliance
          </text>
          {[180, 340, 500, 660, 820].map((x, i) => (
            <circle key={`r4-${i}`} cx={x + 70} cy="420" r="15" fill="#3b82f6" opacity="0.8" />
          ))}

          {/* Row 5: Human override needs */}
          <text x="160" y="488" textAnchor="end" fill="#1e293b" fontSize="13" fontWeight="500">
            Human override
          </text>
          <text x="160" y="503" textAnchor="end" fill="#1e293b" fontSize="13" fontWeight="500">
            needs
          </text>
          {[180, 340, 500, 660, 820].map((x, i) => (
            <circle key={`r5-${i}`} cx={x + 70} cy="495" r="15" fill="#3b82f6" opacity="0.8" />
          ))}

          {/* Legend */}
          <text x="550" y="580" textAnchor="middle" fill="#64748b" fontSize="13" fontStyle="italic">
            Same Trust Layer principles apply across all domains
          </text>
        </svg>
      </div>
    </>
  )
}

const TrustFailureJourney = () => {
  return (
    <>
      <div className="block sm:hidden space-y-6">
        {/* Title */}
        <h2 className="text-lg font-bold text-slate-900 text-center mb-4">Trust Failure vs Trust Layer</h2>

        {/* WITHOUT Trust Layer */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-red-600 mb-3">WITHOUT Trust Layer</h3>

          <div className="rounded-lg border-2 border-red-500 bg-red-50 p-3">
            <p className="text-sm font-medium text-slate-800 text-center">AI decision made</p>
          </div>

          <div className="text-center text-slate-400">↓</div>

          <div className="rounded-lg border-2 border-red-500 bg-red-50 p-3">
            <p className="text-sm font-medium text-slate-800 text-center">User does not understand outcome</p>
          </div>

          <div className="text-center text-slate-400">↓</div>

          <div className="rounded-lg border-2 border-red-500 bg-red-50 p-3">
            <p className="text-sm font-medium text-slate-800 text-center">No explanation available</p>
          </div>

          <div className="text-center text-slate-400">↓</div>

          <div className="rounded-lg border-2 border-red-500 bg-red-50 p-3">
            <p className="text-sm font-medium text-slate-800 text-center">No recovery path</p>
          </div>

          <div className="text-center text-red-600 text-2xl font-bold">↓</div>

          <div className="rounded-lg border-2 border-red-600 bg-red-100 p-4 space-y-1">
            <p className="text-base font-bold text-red-600 text-center">Loss of trust</p>
            <p className="text-sm font-semibold text-red-600 text-center">+€2-4M annual cost</p>
            <p className="text-sm text-red-600 text-center">+42% helpdesk burden</p>
          </div>
        </div>

        {/* WITH Trust Layer */}
        <div className="space-y-3 mt-8">
          <h3 className="text-base font-bold text-green-600 mb-3">WITH Trust Layer</h3>

          <div className="rounded-lg border-2 border-green-500 bg-green-50 p-3">
            <p className="text-sm font-medium text-slate-800 text-center">AI decision made</p>
          </div>

          <div className="text-center text-slate-400">↓</div>

          <div className="rounded-lg border-2 border-green-500 bg-green-50 p-3">
            <p className="text-sm font-medium text-slate-800 text-center">Explanation provided immediately</p>
          </div>

          <div className="text-center text-slate-400">↓</div>

          <div className="rounded-lg border-2 border-green-500 bg-green-50 p-3">
            <p className="text-sm font-medium text-slate-800 text-center">Recovery path clear</p>
          </div>

          <div className="text-center text-slate-400">↓</div>

          <div className="rounded-lg border-2 border-green-500 bg-green-50 p-3">
            <p className="text-sm font-medium text-slate-800 text-center">Human control available</p>
          </div>

          <div className="text-center text-slate-400">↓</div>

          <div className="rounded-lg border-2 border-green-500 bg-green-50 p-3">
            <p className="text-sm font-medium text-slate-800 text-center">Resolution without escalation</p>
          </div>

          <div className="text-center text-green-600 text-2xl font-bold">↓</div>

          <div className="rounded-lg border-2 border-green-600 bg-green-100 p-4 space-y-1">
            <p className="text-base font-bold text-green-600 text-center">Trust maintained</p>
            <p className="text-sm font-semibold text-green-600 text-center">Cost reduction</p>
            <p className="text-sm text-green-600 text-center">Improved outcomes</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block w-full overflow-x-auto sm:overflow-x-visible">
        <svg viewBox="0 0 1000 900" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Title */}
          <text x="500" y="40" textAnchor="middle" fill="#1e293b" fontSize="22" fontWeight="700">
            Trust Failure vs Trust Layer
          </text>

          {/* WITHOUT Trust Layer - Top Flow */}
          <text x="100" y="100" fill="#dc2626" fontSize="18" fontWeight="700">
            WITHOUT Trust Layer
          </text>

          <rect x="80" y="120" width="130" height="70" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="6" />
          <text x="145" y="150" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="500">
            AI decision
          </text>
          <text x="145" y="168" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="500">
            made
          </text>

          <path d="M 210 155 L 240 155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow2)" />

          <rect x="240" y="120" width="130" height="70" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="6" />
          <text x="305" y="145" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            User does not
          </text>
          <text x="305" y="163" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            understand
          </text>
          <text x="305" y="178" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            outcome
          </text>

          <path d="M 370 155 L 400 155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow2)" />

          <rect x="400" y="120" width="130" height="70" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="6" />
          <text x="465" y="145" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            No explanation
          </text>
          <text x="465" y="163" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            available
          </text>

          <path d="M 530 155 L 560 155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow2)" />

          <rect x="560" y="120" width="130" height="70" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="6" />
          <text x="625" y="145" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            No recovery
          </text>
          <text x="625" y="163" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            path
          </text>

          <path d="M 690 155 L 720 155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow2)" />

          <rect x="720" y="120" width="160" height="70" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="6" />
          <text x="800" y="145" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            Escalation to
          </text>
          <text x="800" y="163" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            helpdesk
          </text>

          {/* Downward arrow */}
          <path d="M 800 190 L 800 240" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow-red)" />

          <rect
            x="710"
            y="250"
            width="180"
            height="80"
            fill="#dc2626"
            fillOpacity="0.1"
            stroke="#dc2626"
            strokeWidth="2"
            rx="6"
          />
          <text x="800" y="280" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="700">
            Loss of trust
          </text>
          <text x="800" y="300" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="600">
            +€2-4M annual cost
          </text>
          <text x="800" y="318" textAnchor="middle" fill="#dc2626" fontSize="12">
            +42% helpdesk burden
          </text>

          {/* WITH Trust Layer - Bottom Flow */}
          <text x="100" y="420" fill="#10b981" fontSize="18" fontWeight="700">
            WITH Trust Layer
          </text>

          <rect x="80" y="440" width="130" height="70" fill="#d1fae5" stroke="#10b981" strokeWidth="2" rx="6" />
          <text x="145" y="470" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="500">
            AI decision
          </text>
          <text x="145" y="488" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="500">
            made
          </text>

          <path d="M 210 475 L 240 475" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow2)" />

          <rect x="240" y="440" width="130" height="70" fill="#d1fae5" stroke="#10b981" strokeWidth="2" rx="6" />
          <text x="305" y="465" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            Explanation
          </text>
          <text x="305" y="483" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            provided
          </text>
          <text x="305" y="498" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            immediately
          </text>

          <path d="M 370 475 L 400 475" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow2)" />

          <rect x="400" y="440" width="130" height="70" fill="#d1fae5" stroke="#10b981" strokeWidth="2" rx="6" />
          <text x="465" y="465" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            Recovery path
          </text>
          <text x="465" y="483" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            clear
          </text>

          <path d="M 530 475 L 560 475" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow2)" />

          <rect x="560" y="440" width="130" height="70" fill="#d1fae5" stroke="#10b981" strokeWidth="2" rx="6" />
          <text x="625" y="465" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            Human control
          </text>
          <text x="625" y="483" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            available
          </text>

          <path d="M 690 475 L 720 475" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow2)" />

          <rect x="720" y="440" width="160" height="70" fill="#d1fae5" stroke="#10b981" strokeWidth="2" rx="6" />
          <text x="800" y="465" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            Resolution without
          </text>
          <text x="800" y="483" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
            escalation
          </text>

          {/* Downward arrow */}
          <path d="M 800 510 L 800 560" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-green)" />

          <rect
            x="710"
            y="570"
            width="180"
            height="80"
            fill="#10b981"
            fillOpacity="0.1"
            stroke="#10b981"
            strokeWidth="2"
            rx="6"
          />
          <text x="800" y="600" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="700">
            Trust maintained
          </text>
          <text x="800" y="620" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="600">
            Cost reduction
          </text>
          <text x="800" y="638" textAnchor="middle" fill="#10b981" fontSize="12">
            Improved outcomes
          </text>

          {/* Arrow markers */}
          <defs>
            <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
            </marker>
            <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
            </marker>
          </defs>
        </svg>
      </div>
    </>
  )
}

const GovernanceFlowDiagram = () => {
  return (
    <>
      <div className="block sm:hidden space-y-4">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-1">Governance & Delivery Flow</h2>
          <p className="text-sm text-slate-600">Trust Layer intervention points across the AI lifecycle</p>
        </div>

        {/* Stage 1: Strategy */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">Strategy</h3>
          </div>
          <div className="rounded border-2 border-primary bg-blue-50 p-3 space-y-1">
            <p className="text-sm font-bold text-blue-900">Define trust metrics</p>
            <p className="text-xs text-slate-700">• Accessibility targets</p>
            <p className="text-xs text-slate-700">• Recovery SLAs</p>
            <p className="text-xs text-slate-700">• Explainability goals</p>
          </div>
        </div>

        {/* Stage 2: Policy & Regulation */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">Policy & Regulation</h3>
          </div>
        </div>

        {/* Stage 3: Design & UX */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">Design & UX</h3>
          </div>
          <div className="rounded border-2 border-primary bg-blue-50 p-3 space-y-1">
            <p className="text-sm font-bold text-blue-900">Senior-First patterns</p>
            <p className="text-xs text-slate-700">• Error recovery flows</p>
            <p className="text-xs text-slate-700">• Override mechanisms</p>
            <p className="text-xs text-slate-700">• Accessibility testing</p>
          </div>
        </div>

        {/* Stage 4: AI Development */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">AI Development</h3>
          </div>
          <div className="rounded border-2 border-primary bg-blue-50 p-3 space-y-1">
            <p className="text-sm font-bold text-blue-900">Explainability APIs</p>
            <p className="text-xs text-slate-700">• Audit trails</p>
            <p className="text-xs text-slate-700">• Decision logging</p>
            <p className="text-xs text-slate-700">• Transparency layer</p>
          </div>
        </div>

        {/* Stage 5: Deploy */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">Deploy</h3>
          </div>
          <div className="rounded border-2 border-primary bg-blue-50 p-3 space-y-1">
            <p className="text-sm font-bold text-blue-900">Human handoff</p>
            <p className="text-xs text-slate-700">• Override points</p>
            <p className="text-xs text-slate-700">• Escalation paths</p>
            <p className="text-xs text-slate-700">• Staff training</p>
          </div>
        </div>

        {/* Stage 6: Monitor & Audit */}
        <div className="space-y-2">
          <div className="rounded-md bg-amber-900 text-amber-50 p-3 text-center">
            <h3 className="text-base font-semibold">Monitor & Audit</h3>
          </div>
          <div className="rounded border-2 border-primary bg-blue-50 p-3 space-y-1">
            <p className="text-sm font-bold text-blue-900">Ongoing validation</p>
            <p className="text-xs text-slate-700">• Usability testing</p>
            <p className="text-xs text-slate-700">• Compliance checks</p>
            <p className="text-xs text-slate-700">• Trust metrics review</p>
          </div>
        </div>

        {/* Continuous Improvement */}
        <div className="rounded-md border-2 border-primary border-dashed bg-blue-50 p-3 mt-4">
          <p className="text-sm font-semibold text-blue-900 text-center">↻ Continuous Improvement Loop</p>
        </div>
      </div>

      <div className="hidden sm:block w-full overflow-x-auto sm:overflow-x-visible">
        <svg viewBox="0 0 1000 420" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Background */}
          <rect x="0" y="0" width="1000" height="420" fill="#f8fafc" />

          {/* Title */}
          <text x="500" y="35" textAnchor="middle" fill="#0f172a" fontSize="20" fontWeight="700">
            Governance & Delivery Flow
          </text>
          <text x="500" y="55" textAnchor="middle" fill="#475569" fontSize="13">
            Trust Layer intervention points across the AI lifecycle
          </text>

          {/* Main Lifecycle Flow (Top Row) */}
          <g id="lifecycle-stages">
            {/* Stage 1: Strategy */}
            <rect x="80" y="90" width="120" height="50" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2" rx="6" />
            <text x="140" y="120" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
              Strategy
            </text>
            <path d="M 200 115 L 220 115" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow)" />

            {/* Stage 2: Policy & Regulation */}
            <rect x="220" y="90" width="120" height="50" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2" rx="6" />
            <text x="280" y="112" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
              Policy &
            </text>
            <text x="280" y="128" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
              Regulation
            </text>
            <path d="M 340 115 L 360 115" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow)" />

            {/* Stage 3: Design & UX */}
            <rect x="360" y="90" width="120" height="50" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2" rx="6" />
            <text x="420" y="112" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
              Design
            </text>
            <text x="420" y="128" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
              & UX
            </text>
            <path d="M 480 115 L 500 115" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow)" />

            {/* Stage 4: AI Development */}
            <rect x="500" y="90" width="120" height="50" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2" rx="6" />
            <text x="560" y="112" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
              AI
            </text>
            <text x="560" y="128" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
              Development
            </text>
            <path d="M 620 115 L 640 115" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow)" />

            {/* Stage 5: Deploy */}
            <rect x="640" y="90" width="120" height="50" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2" rx="6" />
            <text x="700" y="120" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
              Deploy
            </text>
            <path d="M 760 115 L 780 115" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow)" />

            {/* Stage 6: Monitor & Audit */}
            <rect x="780" y="90" width="140" height="50" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2" rx="6" />
            <text x="850" y="112" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
              Monitor
            </text>
            <text x="850" y="128" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
              & Audit
            </text>
          </g>

          {/* Trust Layer Touchpoints (Aligned Under Stages) */}
          <g id="trust-touchpoints">
            {/* Touchpoint 1: Strategy */}
            <rect x="80" y="170" width="120" height={75} fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="4" />
            <text x="140" y="188" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">
              Define trust metrics
            </text>
            <text x="140" y="205" textAnchor="middle" fill="#334155" fontSize="10">
              • Accessibility targets
            </text>
            <text x="140" y="220" textAnchor="middle" fill="#334155" fontSize="10">
              • Recovery SLAs
            </text>
            <text x="140" y="235" textAnchor="middle" fill="#334155" fontSize="10">
              • Explainability goals
            </text>

            {/* Touchpoint 2: Design & UX */}
            <rect x="360" y="170" width="120" height={75} fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="4" />
            <text x="420" y="188" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">
              Senior-First patterns
            </text>
            <text x="420" y="205" textAnchor="middle" fill="#334155" fontSize="10">
              • Error recovery flows
            </text>
            <text x="420" y="220" textAnchor="middle" fill="#334155" fontSize="10">
              • Override mechanisms
            </text>
            <text x="420" y="235" textAnchor="middle" fill="#334155" fontSize="10">
              • Accessibility testing
            </text>

            {/* Touchpoint 3: AI Development */}
            <rect x="500" y="170" width="120" height={75} fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="4" />
            <text x="560" y="188" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">
              Explainability APIs
            </text>
            <text x="560" y="205" textAnchor="middle" fill="#334155" fontSize="10">
              • Audit trails
            </text>
            <text x="560" y="220" textAnchor="middle" fill="#334155" fontSize="10">
              • Decision logging
            </text>
            <text x="560" y="235" textAnchor="middle" fill="#334155" fontSize="10">
              • Transparency layer
            </text>

            {/* Touchpoint 4: Deploy */}
            <rect x="640" y="170" width="120" height={75} fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="4" />
            <text x="700" y="188" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">
              Human handoff
            </text>
            <text x="700" y="205" textAnchor="middle" fill="#334155" fontSize="10">
              • Override points
            </text>
            <text x="700" y="220" textAnchor="middle" fill="#334155" fontSize="10">
              • Escalation paths
            </text>
            <text x="700" y="235" textAnchor="middle" fill="#334155" fontSize="10">
              • Staff training
            </text>

            {/* Touchpoint 5: Monitor & Audit */}
            <rect x="780" y="170" width="140" height={75} fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="4" />
            <text x="850" y="183" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">
              Ongoing validation
            </text>
            <text x="850" y="200" textAnchor="middle" fill="#334155" fontSize="10">
              • Usability testing
            </text>
            <text x="850" y="215" textAnchor="middle" fill="#334155" fontSize="10">
              • Compliance checks
            </text>
            <text x="850" y="230" textAnchor="middle" fill="#334155" fontSize="10">
              • Trust metrics review
            </text>
          </g>

          {/* Continuous Improvement Loop */}
          <path
            d="M 920 140 L 940 140 L 940 340 L 60 340 L 60 115 L 80 115"
            stroke="#3b82f6"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="6,4"
            markerEnd="url(#arrow-blue)"
          />
          <text x="500" y="365" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="600">
            Continuous Improvement
          </text>

          {/* Trust Layer Label */}
          <text x="500" y="280" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="700" fontStyle="italic">
            ↑ Trust Layer Touchpoints ↑
          </text>

          {/* Connection Lines from Stages to Touchpoints */}
          <path d="M 140 140 L 140 170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
          <path d="M 420 140 L 420 170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
          <path d="M 560 140 L 560 170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
          <path d="M 700 140 L 700 170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
          <path d="M 850 140 L 850 170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />

          {/* Arrow markers */}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#334155" />
            </marker>
            <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
            </marker>
          </defs>
        </svg>
      </div>
    </>
  )
}

const DigitalIdentityServices = () => (
  <svg viewBox="0 0 1000 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* Title */}
    <text x="500" y="40" textAnchor="middle" fill="#1e293b" fontSize="22" fontWeight="700">
      Germany's First BITV-Certified Digital Identity App
    </text>
    <text x="500" y="65" textAnchor="middle" fill="#64748b" fontSize="14">
      Accessibility-first UX for government services, digital identity, and cybersecurity
    </text>

    {/* Hero Image Placeholder */}
    <rect x="50" y="100" width="900" height="300" fill="#e2e8f0" rx="12" />
    <text x="500" y="250" textAnchor="middle" fill="#64748b" fontSize="16">
      Hero Image: Police officer verifying digital ID in field conditions
    </text>

    {/* Key Pillars */}
    <g transform="translate(0, 450)">
      <text x="500" y="20" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="700">
        Key Pillars of Success
      </text>

      {/* Pillar 1: Accessibility */}
      <rect x="80" y="70" width="200" height="100" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="180" y="105" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="bold">
        Accessibility
      </text>
      <text x="180" y="130" textAnchor="middle" fill="#64748b" fontSize="12">
        • WCAG 2.1 AAA
      </text>
      <text x="180" y="145" textAnchor="middle" fill="#64748b" fontSize="12">
        • BITV 98/98
      </text>

      {/* Arrow */}
      <path d="M 280 120 L 330 120" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Pillar 2: User Experience */}
      <rect x="330" y="70" width="200" height="100" rx="10" fill="#d9f7e7" stroke="#10b981" strokeWidth="2" />
      <text x="430" y="105" textAnchor="middle" fill="#065f46" fontSize="16" fontWeight="bold">
        User Experience
      </text>
      <text x="430" y="130" textAnchor="middle" fill="#64748b" fontSize="12">
        • Easy Language
      </text>
      <text x="430" y="145" textAnchor="middle" fill="#64748b" fontSize="12">
        • Intuitive flows
      </text>

      {/* Arrow */}
      <path d="M 530 120 L 580 120" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Pillar 3: Security */}
      <rect x="580" y="70" width="200" height="100" rx="10" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
      <text x="680" y="105" textAnchor="middle" fill="#9d174d" fontSize="16" fontWeight="bold">
        Cybersecurity
      </text>
      <text x="680" y="130" textAnchor="middle" fill="#64748b" fontSize="12">
        • Secure Authentication
      </text>
      <text x="680" y="145" textAnchor="middle" fill="#64748b" fontSize="12">
        • Field verification
      </text>

      {/* Arrow */}
      <path d="M 780 120 L 830 120" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Pillar 4: Inclusivity */}
      <rect x="830" y="70" width="150" height="100" rx="10" fill="#fdfa76" stroke="#eab308" strokeWidth="2" />
      <text x="905" y="105" textAnchor="middle" fill="#713f12" fontSize="16" fontWeight="bold">
        Inclusivity
      </text>
      <text x="905" y="130" textAnchor="middle" fill="#64748b" fontSize="12">
        • All abilities
      </text>
      <text x="905" y="145" textAnchor="middle" fill="#64748b" fontSize="12">
        • All ages
      </text>
    </g>

    {/* Arrow marker definition */}
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
      </marker>
    </defs>
  </svg>
)

const DigitalDriversLicence = () => (
  <svg viewBox="0 0 1000 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* Title */}
    <text x="500" y="40" textAnchor="middle" fill="#1e293b" fontSize="22" fontWeight="700">
      i-Kfz: Digital Vehicle Document for Germany
    </text>
    <text x="500" y="65" textAnchor="middle" fill="#64748b" fontSize="14">
      First App in Germany to Achieve 100% BITV Certification at German Federal Standard — Over 1 Million Downloads
    </text>

    {/* Hero Image Placeholder */}
    <rect x="50" y="100" width="900" height="300" fill="#e2e8f0" rx="12" />
    <text x="500" y="250" textAnchor="middle" fill="#64748b" fontSize="16">
      Hero Image: App screenshots showing slick UI, verification flow, and vehicle details
    </text>

    {/* Key Metrics */}
    <g transform="translate(0, 450)">
      <text x="500" y="20" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="700">
        Key Metrics
      </text>

      {/* Metric 1: Downloads */}
      <g transform="translate(80, 70)">
        <Icons.Download className="h-10 w-10 text-blue-500 mx-auto mb-2" />
        <text x="100" y="70" textAnchor="middle" fill="#1e293b" fontSize="24" fontWeight="bold">
          1M+
        </text>
        <text x="100" y="100" textAnchor="middle" fill="#64748b" fontSize="12">
          Downloads
        </text>
      </g>

      {/* Metric 2: User insights Applied */}
      <g transform="translate(280, 70)">
        <Icons.Lightbulb className="h-10 w-10 text-green-500 mx-auto mb-2" />
        <text x="100" y="70" textAnchor="middle" fill="#1e293b" fontSize="24" fontWeight="bold">
          1,000+
        </text>
        <text x="100" y="100" textAnchor="middle" fill="#64748b" fontSize="12">
          User insights Applied
        </text>
      </g>

      {/* Metric 3: Avg Accessibility Score */}
      <g transform="translate(480, 70)">
        <Icons.ShieldCheck className="h-10 w-10 text-yellow-500 mx-auto mb-2" />
        <text x="100" y="70" textAnchor="middle" fill="#1e293b" fontSize="24" fontWeight="bold">
          100%
        </text>
        <text x="100" y="100" textAnchor="middle" fill="#64748b" fontSize="12">
          Avg Accessibility Score
        </text>
      </g>

      {/* Metric 4: Team Members */}
      <g transform="translate(680, 70)">
        <Icons.Users className="h-10 w-10 text-purple-500 mx-auto mb-2" />
        <text x="100" y="70" textAnchor="middle" fill="#1e293b" fontSize="24" fontWeight="bold">
          64
        </text>
        <text x="100" y="100" textAnchor="middle" fill="#64748b" fontSize="12">
          Team Members
        </text>
      </g>
    </g>

    {/* Arrow marker definition */}
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
      </marker>
    </defs>
  </svg>
)

const caseStudiesData = {
  // ===========================================================================
  // CASE STUDY 1: Digital Identity Services - BITV Certification (Accessibility-Focused)
  // URL: /case-studies/digital-identity-services
  // ---------------------------------------------------------------------------
  "digital-identity-services": {
    title: "Leading Accessibility Adoption for Germany's First BITV-Certified Government App",
    subtitle: "Accessibility adoption, facilitation, and inclusive design at national scale",
    tags: [
      "BITV 98/98 Certification",
      "Accessibility Leadership",
      "Adoption & Facilitation",
      "Public Sector Design",
      "Inclusive Systems",
    ],

    hero: "/images/chatgpt-20image-20dec-2019-2c-202025-2c-2010-50-16-20pm.png",

    role: "Accessibility Adoption Lead & Strategic Advisor",
    duration: "2022 - 2024",
    team: "4-person design team, 12 developers, 2 accessibility experts, Co-creation with disability organizations, Scrum/agile management with external development team",
    client: "Bundesdruckerei (Digital Identity App i-Kfz)",
    tools: "Figma, Voice Control, Microsoft Accessibility Insights, Stark",

    overview:
      "Germany's digital identity system needed to work for everyone — from tech professionals to 85-year-old first-time smartphone users. Following Microsoft's philosophy that designing for people with disabilities improves experiences for everyone, this project achieved 98/98 BITV audit criteria. This is not just compliance — it is dignity, independence, and trust embedded in every interaction.\n\nInclusive design was essential because this product operates at the intersection of identity, authority, and vulnerability. In government and digital identity systems, exclusion does not merely inconvenience users — it can remove access to rights, services, and autonomy.",

    challenge: {
      intro:
        "Germany's digital identity system needed to work for everyone — including older adults, people with disabilities, and first-time digital identity users — while operating under strict legal, security, and delivery constraints.\n\nThe core challenge was not a lack of accessibility standards, but how those standards were adopted in everyday product decisions.\n\nKey challenges included:\n\n• Accessibility risked being treated as front-end or compliance work rather than shared responsibility\n• Teams faced high delivery pressure with varying levels of accessibility maturity\n• The deeper challenge was embedding inclusive design values into team behaviour and decision-making\n• Accessibility needed to be introduced and defended from early concept stage\n• The client needed support to see accessibility as a driver of adoption, trust, and service quality\n• The role involved continuous advocacy and facilitation, not just delivery\n\nFailure carried real consequences: exclusion from essential public services, loss of trust in government systems, and audit risk in a nationally critical product.",

      obstacles: [
        // Changed from 'caseExamples' to 'obstacles' to match the update structure
        {
          system: "Diverse user population",
          issue:
            "Older adults, people with disabilities, and first-time digital identity users requiring inclusive design",
        },
        {
          system: "Legal, technical & security constraints",
          issue: "Complex requirements under high delivery pressure with limited room for post-hoc fixes",
        },
        {
          system: "Varying accessibility maturity",
          issue: "Teams with different levels of accessibility knowledge and practice",
        },
        {
          system: "Risk of late-stage compliance",
          issue: "Accessibility treated as audit requirement rather than shared responsibility",
        },
      ],
      researchQuestion:
        "How do we enable teams to embed accessibility early, consistently, and confidently — without slowing delivery or compromising security?",
    },

    approach: {
      intro:
        "The approach focused on accessibility adoption and facilitation, not enforcement.\n\nAccessibility was positioned as a strategic factor from the outset and embedded directly into design and development workflows.",
      workshopFacilitation:
        "Cross-disciplinary workshops were facilitated to co-design accessible user journeys, bringing together:\n\n• Technology innovation teams\n• Domain experts with deep knowledge of government digital identity systems\n• Use case experts understanding real-world verification scenarios\n• Advisors from social organizations representing accessibility communities\n\nThese collaborative sessions enabled design decisions grounded in both technical constraints and lived accessibility experiences. The workshops functioned as adoption mechanisms—building shared understanding of accessibility requirements while simultaneously designing solutions.",
      usabilityTesting:
        "Specific usability tests were conducted with target accessibility groups to validate design decisions and gather insights that would shape the final solution.\n\nA critical finding emerged: users fall broadly into two categories—\n\n• **Those who need everything fast and direct** (power users, experienced digital natives)\n• **Those who need time and supportive guidance** (first-time users, neurodivergent users, those with cognitive accessibility needs)\n\nThis insight directly informed the assistant's skip-optional architecture and required careful stakeholder management.",
      clientExpectation:
        "The solution needed to balance competing needs: an assistant focused on neurodivergent users and those needing structured guidance, while ensuring the skip option never felt like a barrier to power users who prefer direct access. This positioning required ongoing advocacy with the client to maintain inclusive design principles under delivery pressure.",
      trustPrinciples: [
        {
          title: "Inclusive Design",
          description: "Universal patterns designed to work across abilities, devices, and contexts",
        },
        {
          title: "Real-World Context",
          description:
            "Field research with police officers to understand roadside verification scenarios and high-pressure verification modes",
        },
        {
          title: "Accessible Content",
          description: "Easy Language transformation reducing comprehension errors by 73%",
        },
        {
          title: "Assistive Technology Support",
          description: "Full compatibility with screen readers, voice control, switch access, and eye tracking",
        },
        {
          title: "Dignity-Driven Security",
          description: "Secure authentication designed to preserve independence, privacy, and dignity",
        },
      ],
      researchMethods: [
        {
          method: "Strategic Positioning",
          description:
            "Positioning accessibility as a strategic factor embedded into design and development workflows from the outset",
        },
        {
          method: "Process Innovation",
          description:
            "Clear guidelines, checklists, and QA processes establishing sustainable accessibility standards. Continuous evolution of inclusive design systems.",
        },
        {
          method: "Workshop Facilitation",
          description:
            "Cross-disciplinary sessions bringing together technology teams, domain experts, and social organization advisors to co-design accessible user journeys",
        },
        {
          method: "Champion Network Enablement",
          description:
            "Enabling designers, front-end developers, and stakeholders to make accessible decisions as part of everyday work",
        },
        {
          method: "Continuous Testing & Feedback",
          description:
            "Manual and automated accessibility testing (VoiceOver, Keyboard, Stark) with feedback integrated into design and development, treating testing as adoption enabler rather than gate.",
        },
      ],
    },

    solution: [
      "Accessibility positioned as strategic factor: Embedded early in design and development workflows as part of overall product quality, service reliability, and public value — not as post-hoc compliance.",
      "Microsoft Accessibility Principles as adoption framework: Five principles (Inclusive Design, Field Research, Accessible Content, Assistive Technology Compatibility, Trust/Safety/Dignity) used to align designers, developers, stakeholders, and advisors.",
      "Process Design & Innovation: Development of accessibility guidelines, checklists, and QA processes establishing sustainable accessibility standards. Continuous evolution of inclusive design systems.",
      "Adoption Strategy & Facilitation: Consulting and advisory to government stakeholders and internal teams on WCAG 2.2, EN 301 549, BITV 2.0. Workshop facilitation with cross-disciplinary teams. Champion network enablement across UX, UI, and front-end development.",
      "Testing integrated as feedback loops: Manual and automated accessibility testing (VoiceOver, Keyboard, Stark) with feedback integrated into design and development, not treating testing as adoption enabler rather than gate.",
      "Cross-functional collaboration embedded in agile delivery: Close collaboration with UX, UI, and front-end development in international teams. Accessibility embedded into sprint rituals, reviews, and daily practice.",
    ],

    qualityControl: {
      intro:
        "Germany's first BITV-certified government app required rigorous quality assurance and coordination across multiple teams and regulatory frameworks.",
      sections: [
        {
          title: "Agile Coordination & Sprint Management",
          icon: "Calendar",
          content:
            "Close collaboration with international agile development teams embedded accessibility into every sprint cycle.\n\n• Daily standups with UX, UI, and front-end teams\n• Accessibility review integrated into sprint planning and retrospectives\n• Continuous testing and feedback loops during development\n• Cross-functional alignment on WCAG 2.2, EN 301 549, BITV 2.0 requirements",
        },
        {
          title: "BIC Test Audit & BITV Certification",
          icon: "ShieldCheck",
          content:
            "Achieved 98/98 BITV audit criteria through systematic preparation and comprehensive accessibility testing.\n\n• Coordinated preparation for external BIC (BITV Information Centre) audit\n• Manual and automated accessibility testing (VoiceOver, Keyboard Navigation, Stark)\n• Documentation of accessibility patterns and compliance evidence\n• Cross-team review cycles to address audit feedback",
        },
        {
          title: "Accessibility Statement Development",
          icon: "FileText",
          content:
            "Created comprehensive accessibility documentation meeting legal requirements for government digital services.\n\n• Authored public-facing accessibility statement explaining conformance level\n• Documented known limitations and planned improvements\n• Established feedback mechanism for users to report accessibility barriers\n• Aligned statement with BITV 2.0 and EN 301 549 regulatory requirements",
        },
        {
          title: "Quality Gates & Review Cycles",
          icon: "CheckCircle2",
          content:
            "Embedded accessibility into continuous integration and quality assurance processes.\n\n• Accessibility checklist integrated into design handoff\n• Developer review process for WCAG conformance\n• QA testing with assistive technologies before release\n• 40% reduction in review cycles through early integration",
        },
      ],
      complianceNote:
        "**Compliance frameworks:** WCAG 2.2 AA, EN 301 549, BITV 2.0 — Germany's first government app to achieve 98/98 BITV audit criteria.",
    },

    impact: [
      "**Germany's first BITV-certified government app:** 98/98 audit criteria achieved",
      "**Accessibility capability scaled:** From 6 to 64 trained professionals",
      "**1M+ users supported:** National rollout with accessible authentication and verification",
      "**Real-world validation in app stores:** User feedback consistently praised the app as small and quick to use. Significantly, **no pushback was found regarding the extra assistant steps**—validating that optional, well-designed guidance enhances rather than hinders the experience, even for users who don't need it.",
      "**40% reduction in review cycles:** Through embedded accessibility practices and early integration",
      "**Accessibility as sustainable practice:** Established as ongoing organizational capability, not project exception",
      "**Cross-functional adoption:** Accessibility embedded across UX, UI, development, and stakeholder engagement",
      "**Strategic positioning:** Accessibility positioned as trust-building mechanism and service quality factor",
      "**Process innovation:** Sustainable guidelines, checklists, and QA processes established",
    ],

    closingStatement:
      '"Accessibility adoption succeeds when inclusion is embedded in strategy, enabled through process, and sustained by people."',

    reflection:
      "This project demonstrated that accessibility standards alone do not create accessible products. Adoption requires people, processes, and sustained capability-building.\n\nBy positioning accessibility as a strategic factor rather than compliance requirement, and by using Microsoft Accessibility Principles as a shared adoption framework, we enabled teams to embed inclusive design into everyday decision-making.\n\nThe outcome was not just 98/98 BITV audit criteria — it was the scaling of accessibility capability from 6 to 64 trained professionals, 40% reduction in review cycles, and the establishment of accessibility as sustainable organizational practice.\n\nAccessibility adoption is infrastructure. It can be designed, facilitated, and sustained through strategic positioning, process innovation, and cross-functional collaboration.",
  },
  // ---------------------------------------------------------------------------
  // CASE STUDY 2: Trust by Design Framework for Responsible AI
  // URL: /case-studies/trust-by-design-framework
  // ---------------------------------------------------------------------------
  "trust-by-design-framework": {
    title: "Trust by Design Framework for Responsible AI",
    subtitle:
      "Independent research creating the missing infrastructure between technical AI excellence and democratic trustworthiness",
    tags: ["Responsible AI", "AI Governance", "System Design", "Public Sector", "Trust Engineering"],

    hero: "/images/trust-meeting-new.png",
    heroMobile: "/images/meeting-20mobile.jpg",

    role: "Independent Researcher & Strategic Advisor",
    duration: "2024 - 2025",
    team: "Master's Thesis Project — ELISAVA + Advisory presentations to German Government Community of Practice CX",
    client: "Academic Research + Advisory to German Government",
    tools: "Trust by Design Framework (creator), Service Design, Journey Mapping, Governance Design Tools",

    disclaimer:
      "This case study presents independent academic research conducted as part of a Master's programme at ELISAVA. Findings were shared through advisory sessions with German government teams to support knowledge exchange.",

    overview:
      "Through independent research at ELISAVA, I studied how the German government delivers Responsible AI through technical excellence across systems like Assistant iQ, PLAIN, MÖVE, and Responsible Finder. These systems guarantee correctness, traceability, security, and sovereignty.\n\nYet my research revealed a critical gap: technical perfection does not automatically create experienced trustworthiness. Without explainability, recoverability, accessibility, and human control—what I term the Trust Layer—even technically perfect systems face:\n\n• 67% abandonment rates\n• 42% helpdesk cost increases\n• €2-4M in annual operational burden\n\nI created the Trust by Design framework to address this gap and presented my findings through advisory sessions to help government teams understand and address these challenges.",

    challenge: {
      intro:
        "Through case study analysis, I examined how technically mature government AI systems face adoption barriers without a Trust Layer.",
      obstacles: [
        {
          system: "Assistant iQ",
          strength: "Generates legal guidelines with high accuracy",
          issue: "Without explainability, creates potential liability risks and citizen confusion",
        },
        {
          system: "PLAIN",
          strength: "Enables secure, sovereign data analysis",
          issue: "Without usability context, struggles with cross-team adoption",
        },
        {
          system: "MOVE",
          strength: "Benchmarks AI model quality systematically",
          issue: "Doesn't measure user experience or trust perception",
        },
        {
          system: "Responsible Finder",
          strength: "Routes requests intelligently across services",
          issue: "Without recovery paths, creates helpdesk escalation loops",
        },
      ],
      researchQuestion:
        "How can we design the socio-technical layer that makes technical excellence humanly trustworthy?",
    },

    projectOrigin: [
      "MA in Design for Responsible Artificial Intelligence (ELISAVA, Barcelona)",
      "Independent research examining public sector AI systems",
      "Advisory presentations to German Government Community of Practice Customer Experience",
      "Framework shared with: Accessibility Champions, App & Platform Developers, CX Community, Data & AI Community, Customer Account Leads, Process & Service Management",
    ],

    approach: {
      intro: "I developed the Trust by Design framework introducing four architectural principles:",
      trustPrinciples: [
        {
          title: "Explainability",
          description: "Transparent presentation of AI decisions for citizens and administration",
        },
        {
          title: "Recoverability",
          description: "Recovery-First principle for wrong decisions",
        },
        {
          title: "Accessibility",
          description: "Usable for all generations and competence levels",
        },
        {
          title: "Overridability",
          description: "Human control over automated processes",
        },
      ],
      researchMethods: [
        {
          method: "Senior-First Design",
          description: "If a 72-year-old understands the system, everyone does",
        },
        {
          method: "Critical Journey Mapping",
          description: "Across service helpdesk, identity & authorization, and cross-system credentials",
        },
        {
          method: "Systematic Gap Analysis",
          description: "Measuring literacy gaps, explainability gaps, recovery gaps, and accountability gaps",
        },
      ],
    },

    solution: [
      "Trust Layer Architecture: Four socio-technical principles (Explainability, Recoverability, Accessibility, Overridability) that sit between Responsible AI systems and human experience.",
      "Senior-First Design Principle: Designing for the most demanding users improves systems for all levels—from citizens to helpdesk to developers to management.",
      "Measurable Impact Framework: Transforms abstract trust into concrete metrics:\n\n• 67% abandonment rate\n• +42% helpdesk costs\n• Reduced recovery time\n• Improved accessibility compliance",
      "Cross-Functional Integration: Framework enables collaboration across Service Design, UX, Development, Product, and Sales on Trust Layer implementation.",
      "Real Case Analysis: Documented failures demonstrate consequences of missing Trust Layer:\n\n• Deloitte Australia AI hallucination: £440K loss\n• UK DWP fraud system: £4.4M correction costs",
      "Four-Phase Implementation Roadmap:\n\n• Q1 2025: Foundation\n• Q2 2025: Prototyping with seniors\n• Q3-Q4 2025: Integration into existing systems\n• 2026: Scaling as standard",
    ],

    platformEngagement: [
      {
        title: "Trust by Design Platform",
        description:
          "I created trust-by-design.org as a comprehensive resource platform featuring:\n\n• Interactive Trust Audit Framework for organizations to assess their AI systems\n• ROI Calculator demonstrating the business case for trust infrastructure\n• Research-backed implementation guides and best practices\n• Community resources for AI literacy and responsible adoption\n\nThe platform translates academic research into practical tools that organizations can use to assess and improve their AI systems' trustworthiness.",
      },
      {
        title: "Internal Presentations & AI Literacy",
        description:
          "Within Bundesdruckerei, I delivered presentations to process management leaders and cross-functional teams on:\n\n• AI Literacy Gaps: Identifying knowledge barriers preventing responsible AI adoption across teams\n• Trust Layer Integration: How to embed explainability, recoverability, and accessibility into existing processes\n• Senior-First Design Principles: Demonstrating why designing for the most demanding users improves outcomes for everyone\n• Operational Impact: Translating abstract trust concepts into measurable business metrics\n\nThese presentations focused on building internal understanding and capability for responsible AI adoption, helping teams understand both the technical and human requirements for trustworthy systems.",
      },
      {
        title: "Public Speaking & Thought Leadership",
        description:
          "Presented Trust by Design framework at:\n\n• 6+ communities within German government\n• Global Digital Transformation & Customer Experience Summit (upcoming)\n• Process management leadership sessions at Bundesdruckerei\n• Cross-functional internal workshops on AI governance\n\nFocus areas: Making AI literacy accessible, demonstrating the business case for trust infrastructure, and positioning responsible AI as essential process infrastructure rather than optional feature.",
      },
    ],

    impact: [
      "**Framework Created:** Independent research contribution to responsible AI field",
      "**Consulting Practice Launched:** trust-by-design.org \u2014 EU AI Act readiness for regulated industries",
      "**Interactive Assessment Tools:** Self-audit framework + ROI calculator",
      "**Government Presentations:** 6+ communities within German government",
      "**Internal AI Literacy:** Cross-functional workshops at Bundesdruckerei",
      "**Target Metrics:** 25% abandonment (from 67%), -30% helpdesk costs (from +42%)",
      "**Potential Savings:** €2-4M annually from trust infrastructure",
      "**Strategic Positioning:** European leadership in trustworthy administrative AI",
    ],

    trustLayerPrinciples: [
      {
        principle: "Explainability",
        description: "Transparent presentation of AI decisions for citizens and administration",
        impact: "Reduces confusion, builds confidence, enables accountability",
      },
      {
        principle: "Recoverability",
        description: "Recovery-First principle — clear paths back from errors or misunderstandings",
        impact: "Protects citizens from dead-ends, reduces helpdesk escalation",
      },
      {
        principle: "Accessibility",
        description: "Usable for all generations, education levels, and technical competence",
        impact: "Senior-First Design benefits everyone, ensures democratic access",
      },
      {
        principle: "Overridability",
        description: "Human control over automated processes at critical decision points",
        impact: "Mainains legitimacy, enables exceptions, prevents systemic failures",
      },
    ],

    whatsNext: [
      "Continued advisory work supporting public sector AI transformation",
      "Public framework development for regulated AI practitioners",
      "Figma-based Trust Layer components and governance assets",
      "Research collaboration on UI patterns for trustworthy AI",
      "Consultancy supporting organizations implementing trust infrastructure",
    ],

    closingStatement:
      '"If we design for seniors, we strengthen every level of the digital state. The Trust Layer is not optional — it is the foundation for functional, legitimate AI in the democratic state." The future is already being made. Let us design it to be trustworthy.',

    reflection:
      "This project emerged from a simple observation during my Master's research: Germany's most sophisticated AI systems were technically perfect yet operationally fragile.\n\nThrough independent research at ELISAVA, I created the Trust by Design framework and platform (trust-by-design.org)—addressing the missing infrastructure between Responsible AI and democratic legitimacy.\n\nMy work focuses on two parallel tracks: building the conceptual framework and tools, and building organizational capability through presentations and advisory work. Within Bundesdruckerei, I presented to process management leaders and cross-functional teams, focusing on AI literacy adoption and helping teams understand how trust infrastructure enables both compliance and competitive advantage.\n\nThe framework demonstrates that trust is not a soft value. It is infrastructure. Infrastructure can be designed. And teams can be enabled to build it.",
  },
  // ---------------------------------------------------------------------------
  // CASE STUDY 3: AIx Design for Human-Centered Wellness
  // URL: /case-studies/healthcare-iot-experience
  // ---------------------------------------------------------------------------
  // Removed healthcare-iot-experience case study object
  // "healthcare-iot-experience": {
  //   title: "AIx Design for Human-Centered Wellness",
  //   subtitle: "Designing an adaptive biofeedback system that learns from emotion, movement, and physiology",
  //   tags: ["AI Experience Design", "Wellness Tech", "Biofeedback", "Responsible AI", "Emotion AI"],

  //   // HERO IMAGE - This is the large image at the top of the page
  //   hero: "/images/ai-chatbot-interface.png",

  //   role: "Lead UX & AI Experience Designer",
  //   duration: "2021 - 2024",
  //   team: "Small cross-functional team: designers, biomedical engineers, emotion-AI specialists",
  //   tools: "Figma, Miro, Prototyping Tools, Data Flow Mapping, Ethical AI Frameworks",
  //   overview:
  //     "Ryse was a Berlin startup born from a small group of designers and engineers who had previously worked with Healy. We set out to reimagining wellness technology — creating an AI-driven experience that adapts to human emotion and bio-signals in real time, ethically and transparently. The company has since folded, but the design principles and AI experience exploration remain a defining milestone in my human-centered AI work.",
  //   challenge:
  //     "Wellness devices often promise personalization but rarely adapt in meaningful, human ways. We asked: what if AI could interpret physiological and emotional data — heart rate, movement, sleep quality, mood — to gently adjust microcurrent therapy, enhancing energy balance and wellbeing? The challenge extended beyond technical implementation: we needed to address ethical tensions around user autonomy, data transparency, and the responsible use of emotion-AI in wellness contexts.",
  //   approach:
  //     "Led UX concept and early AI experience modeling, designing the adaptive interaction between data, AI, and user interface. Mapped user emotions and body signals to microcurrent adjustments, creating a system where AI supports rather than dominates. Advocated for responsible data use, informed consent, and explainability throughout the design process. Collaborated closely with biomedical engineers and emotion-AI specialists to ensure the system was both technically sound and ethically grounded. Developed transparent data use protocols and opt-in emotional tracking mechanisms that gave users full control over their wellness journey.",
  //   solution: [
  //     "Designed AIx interaction model linking emotional states to adaptive biofeedback",
  //     "Created transparent data flow system connecting wearable, watch, and app sensors",
  //     "Developed ethical design principles: transparency, consent, autonomy, and minimal intervention",
  //     "Mapped emotional taxonomy to physiological states for meaningful AI-driven adjustments",
  //     "Built explainability features showing users 'why this signal now?'",
  //     "Established opt-in emotional tracking with clear user control and data ownership",
  //   ],
  //   impact: [
  //     "Developed pioneering AIx interaction model for emotion-aware wellness",
  //     "Created early prototypes for ethical bio-feedback design",
  //     "Established transparency and consent frameworks for wellness AI",
  //     "Influenced ongoing work in Responsible AI and accessibility design",
  //     "Contributed to understanding of AI as companion rather than controller",
  //   ],
  //   timeline: [
  //     {
  //       period: "2021",
  //       title: "Early Concept Co-Creation",
  //       description:
  //         "Collaborated with former Healy engineers to reimagining wellness technology. Explored how AI could interpret emotional and physiological data to create adaptive, human-centered experiences.",
  //     },
  //     {
  //       period: "2022",
  //       title: "Data Flow Mapping & Emotional Taxonomy",
  //       description:
  //         "Designed comprehensive data flow architecture connecting multiple sensors. Developed emotional taxonomy linking mood states to physiological patterns, creating foundation for AI-driven adjustments.",
  //     },
  //     {
  //       period: "2022-2023",
  //       title: "AI Decision Logic & UX Prototypes",
  //       description:
  //         "Built AI decision logic prototypes and UX flows demonstrating adaptive biofeedback. Integrated explainability features and user control mechanisms ensuring transparency and autonomy.",
  //     },
  //     {
  //       period: "2023",
  //       title: "Market & Investor Pitch",
  //       description:
  //         "Presented comprehensive vision to investors, showcasing ethical AI approach and human-centered wellness innovation. Demonstrated working prototypes and responsible design framework.",
  //     },
  //     {
  //       period: "2024",
  //       title: "Company Closure & Legacy",
  //       description:
  //         "Although Ryse did not continue, the exploration influenced future work in Responsible AI and wellness data ethics. Design principles and AIx frameworks continue to inform human-centered AI practice.",
  //     },
  //   ],

  //   gallery: [
  //     "/images/ai-chatbot-interface.png", // Image 1
  //     "/conversational-flow-design.jpg", // Image 2
  //     "/guardrails-interface.jpg", // Image 3
  //     "/evaluation-dashboard.jpg", // Image 4
  //   ],
  //   reflection:
  //     "Designing for the body means designing for trust. The Ryse project showed how AI can act as a companion rather than a controller — interpreting emotion and energy data ethically to support human resilience. This work laid the foundation for my ongoing exploration of Responsible AI, demonstrating that the most powerful technology is that which empowers users rather than diminishes their agency.",
  // },

  // ---------------------------------------------------------------------------
  // CASE STUDY 3: i-Kfz: Digital Vehicle Document for Germany
  // URL: /case-studies/digital-drivers-licence
  // ---------------------------------------------------------------------------
  "digital-drivers-licence": {
    title: "i-Kfz: Digital Vehicle Document for Germany",
    subtitle:
      "First App in Germany to Achieve 100% BITV Certification at German Federal Standard — Over 1 Million Downloads",
    tags: ["Design Leadership", "Accessibility", "BITV 2.0", "Team Scaling", "1M+ Users"],

    hero: "/images/export2.jpeg",
    heroMobile: "/images/export2.jpeg",

    role: "UX/UI Strategist & Concept Creator → Design System Lead → Accessibility Strategy Lead",
    duration: "2 years (Apr 2021 - Jun 2023)",
    team: "Started with 6 people, scaled to 64 (Led design team of 4)",
    client: "German Ministry of Transport",
    tools: "Design Systems, Figma, Workshop Facilitation, BITV Testing Suite",
    methods: "Journey Mapping, User Testing, Stakeholder Alignment, Accessibility Testing, Team Leadership",
    keyMetrics: [
      { label: "Downloads", value: "1M+", icon: "Download" },
      { label: "User insights Applied", value: "1,000+", icon: "Lightbulb" }, // Changed icon
      { label: "Avg Accessibility Score", value: "100%", icon: "ShieldCheck" }, // Changed label and icon
      { label: "Team Members", value: "64", icon: "Users" },
    ],
    overview:
      "I conceived and pitched the i-Kfz digital vehicle document design concept to the German Ministry of Transport, winning the client through design strategy workshops. Over 2 years, I led the design and development cooperation and transformation from a 6-person team to 64 members, built the design system from scratch, and achieved full BITV certification — making i-Kfz the first app in Germany to be certified 100% accessible at the German federal standard. The result: 1M+ active users, 1,000+ five-star reviews specifically praising the intuitive design from users who typically struggle with technology, and a new benchmark for accessible government digital services.",
    challenge:
      "Creating a digital identity solution that would serve millions of German citizens — from tech-savvy millennials to elderly users who find apps challenging. When I conceived and pitched this to the Ministry of Transport, the goal was clear: reach 1 million+ users within 2 years while achieving full BITV 2.0 accessibility certification. The real challenge? Making it so intuitive that users who openly admit they 'are bad at using apps' would praise the design.",
    approach: {
      intro:
        "From concept to delivery at scale. I conceived and pitched the design vision to the Ministry of Transport, built the team from 6 to 64 professionals over 2 years, created a dual-platform design system from scratch, and maintained strategic oversight through launch — ultimately reaching 1M+ active users with 1,000+ reviews praising the intuitive experience.",
      processStages: [
        {
          stage: 1,
          title: "Winning the Client",
          icon: "target",
          highlights: ["Pitched to Ministry of Transport", "Strategic demonstrations and think tanks secured project"],
          metrics: null,
        },
        {
          stage: 2,
          title: "Building the Team",
          icon: "users",
          highlights: [
            "Started with 6-person core team",
            "Scaled to 64 professionals over 2 years",
            "Managed design team within system architecture",
          ],
          metrics: { from: "6", to: "64", label: "team members" },
        },
        {
          stage: 3,
          title: "Creating the System",
          icon: "layers",
          highlights: [
            "Dual-platform design system from scratch",
            "Data-driven feedback loops tied to developers",
            "Facilitated EU and German workshops for journey mapping",
          ],
          metrics: null,
        },
        {
          stage: 4,
          title: "Strategic Oversight",
          icon: "eye",
          highlights: [
            "Maintained strategic oversight throughout",
            "1M+ users successfully onboarded",
            "1,000+ positive reviews praising intuitive experience",
          ],
          metrics: { value: "1M+", label: "users" },
        },
      ],
    },
    solution: [
      "1M+ downloads achieved within target timeframe",
      "1,000+ positive reviews specifically about design usability and ease of use",
      "Grew team from 6 to 64 people over 2 years while maintaining design excellence",
      "Conceived, pitched, and won the Ministry as client through strategic workshops",
      "First fully BITV-certified app at this scale in Germany",
      "Successfully served users who typically 'hate using apps'",
      "Built comprehensive design system from scratch for unified iOS and Android experience",
      "Led and mentored a design team of 4 working within the system architecture",
    ],
    testimonials: [
      {
        quote: "Finally, a government app that works!",
        source: "iOS User",
        rating: 5,
      },
      {
        quote: "My 75-year-old mother could use it without help",
        source: "Verified Review",
        rating: 5,
      },
      {
        quote: "The design is so intuitive, even I managed!",
        source: "Self-described 'tech-hater'",
        rating: 5,
      },
      {
        quote: "Best onboarding I've ever experienced",
        source: "Google Play Review",
        rating: 5,
      },
    ],
    impact: [
      "**1,000,000+ Active users nationwide** across both platforms",
      "**iOS: 4.8★ rating** with 1,200+ reviews praising user-friendly design",
      "**100% BITV 2.0 Certified** - First app in Germany to achieve certification at German federal standard",
      "**6 → 64 Team growth** - 10x scaling under my strategic leadership",
      "**4 Designers** led and mentored in my design team",
      "**Design resilience** validated through cross-platform technical challenges",
      "**Established new benchmark** for accessible government digital services in Germany",
    ],
    timeline: [
      {
        period: "Apr 2021: Initial Phase",
        title: "Conception & Client Win",
        description:
          "Conceived and pitched i-Kfz concept to Ministry of Transport. Won client through strategic demonstrations and workshops. Established project vision and team of 6. Set goal: 1M+ users within 2 years.",
      },
      {
        period: "2021-2022: Foundation",
        title: "Research & Design System",
        description:
          "Conducted extensive user testing with diverse groups including elderly and disabled citizens. Built comprehensive design system from scratch. Facilitated EU and German workshops for journey mapping. Team grew from 6 to 64 people.",
      },
      {
        period: "2022: Scaling Phase",
        title: "Team Leadership & Growth",
        description:
          "Led design team of 4 designers. Established data-driven feedback loops with development. Scaled operations while maintaining design excellence across iOS and Android. Focused on inclusive onboarding for users who struggle with apps.",
      },
      {
        period: "Jun 2023: Launch & Success",
        title: "1M+ Users & Full BITV Certification",
        description:
          "Achieved 1M+ active users. Received 1,000+ five-star reviews praising intuitive design. Secured full BITV 2.0 certification. Recognized as Germany's first fully accessible government app at this scale.",
      },
    ],

    gallery: [
      // CHANGE: Updated image path and added new image for "Clear Data Dashboard"
      "/images/image-20of-20data.png",
      // CHANGE: Updated image path for cross-platform design
      "/images/ikfz-cross-platform.png",
      // CHANGE: Updated image path and added new image for Accessibility features
      "/images/new-mobile-vehicle-list.png",
      // CHANGE: Updated image path for assistant onboarding
      "/images/image-204.png",
    ],
    downloadLinks: {
      ios: "https://apps.apple.com/de/app/i-kfz/id1114824854",
      android: "https://play.google.com/store/apps/details?id=de.kba.ikfz&hl=de",
      message: "Experience the user-friendly design of the i-Kfz app for yourself.",
    },
    reflection:
      "i-Kfz showed that accessibility is not just a compliance checkbox — it's the foundation for design that serves everyone. By centering users who typically struggle with apps, we created an experience that delighted all 1M+ users, proving that inclusive design is simply great design.",
  },
}

export default function CaseStudyPageClient({ params }: { params: { slug: string } }) {
  const { slug } = params

  const caseStudy = getCaseStudyData(slug)

  if (!caseStudy) {
    notFound()
  }

  // This avoids the Suspense boundary requirement and correctly reads URL hash anchors
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1)) // Remove the # prefix
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])
  // </CHANGE>

  // Helper to check for downloadLinks property
  const hasDownloadLinks = (
    obj: typeof caseStudy,
  ): obj is typeof caseStudy & { downloadLinks: { ios: string; android: string; message: string } } => {
    return "downloadLinks" in obj && obj.downloadLinks !== undefined
  }

  // Helper to check for keyMetrics property
  const hasKeyMetrics = (
    obj: typeof caseStudy,
  ): obj is typeof caseStudy & { keyMetrics: { label: string; value: string; icon: string }[] } => {
    return "keyMetrics" in obj && obj.keyMetrics !== undefined
  }

  // Helper to check for testimonials property
  const hasTestimonials = (
    obj: typeof caseStudy,
  ): obj is typeof caseStudy & { testimonials: { quote: string; source: string; rating: number }[] } => {
    return "testimonials" in obj && obj.testimonials !== undefined
  }

  return (
    <>
      {/* CHANGE: Replaced ScrollToTop with ScrollToTopOnMount */}
      <ScrollToTopOnMount />

      <div className="min-h-screen">
        {/* Header - Glass pill nav matching homepage */}
        <header className="sticky top-0 z-40 py-3" style={{ background: 'rgba(245, 240, 232, 0.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
          <div className="container mx-auto px-4">
            <div className="glass-nav px-4 py-2.5 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm min-h-[44px] transition-colors"
                style={{ color: '#1a1200' }}
              >
                <Icons.ArrowLeft className="h-4 w-4" />
                Back to Start
              </Link>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  className="h-9 min-h-[44px] font-bold px-5 rounded-full"
                  style={{ background: '#1a1200', color: '#f5c842' }}
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
                  style={{ background: '#0A66C2', color: 'white' }}
                >
                  <Icons.Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <article>
          <div className="bg-background">
          <div className="container mx-auto px-4 pt-12 pb-12 max-w-3xl">
          <div className="mb-0">
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 border-primary/20 font-medium" style={{ color: '#5a4a20' }}>
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">{caseStudy.title}</h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">{caseStudy.subtitle}</p>

            {slug === "trust-by-design-framework" && (
              <div className="mb-8">
                <a
                  href="https://www.trust-by-design.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
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
              </div>
            )}

            {slug === "digital-drivers-licence" && (
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://apps.apple.com/de/app/i-kfz/id1114824854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl min-h-[44px]"
                  style={{ background: '#1a1200', color: '#f5c842' }}
                >
                  {/* CHANGE: Fixed double > to single > */}
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=de.kba.ikfz&hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl min-h-[44px]"
                  style={{ background: '#2d2000', color: '#f5c842' }}
                >
                  {/* CHANGE: Fixed double > to single > */}
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </a>
              </div>
            )}

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* HERO IMAGE - To change, upload new image then update caseStudy.hero path above */}
              <img
                src={caseStudy.hero || "/placeholder.svg"}
                alt={caseStudy.title}
                className="w-full h-[400px] sm:h-[500px] object-cover"
                loading="eager"
              />
            </div>
          </div>

          {hasKeyMetrics(caseStudy) && (
            <section className="mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {caseStudy.keyMetrics.map((metric, index) => {
                  const IconComponent = Icons[metric.icon as keyof typeof Icons] as React.ElementType
                  return (
                    <div key={index} className="bg-card rounded-xl p-4 border border-border">
                      <IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}
          </div>
          </div>

          {/* Overview */}
          <div className="bg-[#efe8d8]">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
          <section className="mb-0">
            <div className="bg-primary/10 rounded-2xl p-6 sm:p-8 border border-primary/20">
              <div className="space-y-4 text-sm sm:text-base text-foreground leading-relaxed font-medium">
                {caseStudy.overview.split("\n\n").map((section, sIndex) => {
                  // Check if section contains bullet points
                  if (section.includes("•")) {
                    const lines = section.split("\n")
                    const bullets = lines.filter((line) => line.trim().startsWith("•"))
                    const intro = lines.find((line) => !line.trim().startsWith("•"))

                    return (
                      <div key={sIndex} className="space-y-3">
                        {intro && <p>{intro}</p>}
                        <ul className="space-y-2 pl-0">
                          {bullets.map((bullet, bIndex) => (
                            <li key={bIndex} className="flex items-start gap-3">
                              <span className="text-primary mt-1 flex-shrink-0">•</span>
                              <span>{bullet.replace("•", "").trim()}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  }
                  // Regular paragraph
                  return <p key={sIndex}>{section}</p>
                })}
              </div>
            </div>
          </section>

          {/* Audience */}
          {"audience" in caseStudy && caseStudy.audience && (
            <section className="mt-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-chart-1/10 p-3 rounded-xl flex-shrink-0">
                  <Icons.Users className="h-6 w-6 text-chart-1" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">Who It's For</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-14">
                {caseStudy.audience.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <Icons.CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
          </div>
          </div>

          {/* Challenge */}
          <div className="bg-background">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
          <section className="mb-0">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-chart-2/10 p-3 rounded-xl flex-shrink-0">
                <Icons.AlertCircle className="h-6 w-6 text-chart-2" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">{COPY.sections.challenge}</h2>
            </div>

            {(slug === "trust-by-design-framework" ||
              slug === "digital-identity-services" ||
              slug === "digital-drivers-licence") &&
            typeof caseStudy.challenge === "object" ? (
              <div className="pl-0 sm:pl-14 space-y-6">
                {/* Render intro with bullet points support */}
                <div className="space-y-4">
                  {caseStudy.challenge.intro.split("\n\n").map((section, sIndex) => {
                    // Check if section contains bullet points
                    if (section.includes("•")) {
                      const lines = section.split("\n")
                      const bullets = lines.filter((line) => line.trim().startsWith("•"))
                      const intro = lines.find((line) => !line.trim().startsWith("•"))

                      return (
                        <div key={sIndex} className="space-y-3">
                          {intro && <p className="text-sm text-card-foreground leading-relaxed">{intro}</p>}
                          <ul className="space-y-2 pl-0">
                            {bullets.map((bullet, bIndex) => (
                              <li key={bIndex} className="flex items-start gap-3 text-sm text-card-foreground">
                                <span className="text-chart-2 flex-shrink-0 mt-0.5">•</span>
                                <span>{bullet.replace("•", "").trim()}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    }
                    // Regular paragraph
                    return (
                      <p key={sIndex} className="text-sm text-card-foreground leading-relaxed">
                        {section}
                      </p>
                    )
                  })}
                </div>

                {/* Obstacles - Card Grid for trust-by-design, list for others */}
                {slug === "trust-by-design-framework" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {caseStudy.challenge.obstacles.map((example, index) => (
                      <div key={index} className="bg-card rounded-xl border border-border p-5 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                            <Icons.Server className="h-4 w-4 text-chart-2" />
                          </div>
                          <h4 className="text-sm font-bold text-foreground">{example.system}</h4>
                        </div>
                        {"strength" in example && (
                          <div className="mb-3">
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-chart-3 mb-1">Strength</div>
                            <p className="text-sm text-card-foreground leading-relaxed">{example.strength}</p>
                          </div>
                        )}
                        <div className="mt-auto pt-3 border-t border-border/50">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-chart-2 mb-1">Trust Gap</div>
                          <p className="text-sm text-card-foreground leading-relaxed">{example.issue}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {caseStudy.challenge.obstacles.map((example, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icons.AlertCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-foreground">{example.system}:</span>{" "}
                          <span className="text-card-foreground">{example.issue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Research Question */}
                {caseStudy.challenge.researchQuestion && (
                  <div className="bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
                    <p className="text-sm font-medium text-foreground italic">{caseStudy.challenge.researchQuestion}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="pl-0 sm:pl-14 space-y-4">
                {typeof caseStudy.challenge === "string" &&
                  caseStudy.challenge.split("\n\n").map((section, sIndex) => {
                    // Check if section contains bullet points
                    if (section.includes("•")) {
                      const lines = section.split("\n")
                      const bullets = lines.filter((line) => line.trim().startsWith("•"))
                      const intro = lines.find((line) => !line.trim().startsWith("•"))

                      return (
                        <div key={sIndex} className="space-y-3">
                          {intro && <p className="text-sm text-card-foreground leading-relaxed">{intro}</p>}
                          <ul className="space-y-2 pl-0">
                            {bullets.map((bullet, bIndex) => (
                              <li key={bIndex} className="flex items-start gap-3 text-sm text-card-foreground">
                                <span className="text-chart-2 flex-shrink-0 mt-0.5">•</span>
                                <span>{bullet.replace("•", "").trim()}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    }
                    // Regular paragraph
                    return (
                      <p key={sIndex} className="text-sm text-card-foreground leading-relaxed">
                        {section}
                      </p>
                    )
                  })}
              </div>
            )}
          </section>
          </div>
          </div>

          {/* Approach */}
          <div className="bg-[#efe8d8]">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
          <section className="mb-0">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-chart-3/10 p-3 rounded-xl flex-shrink-0">
                <Icons.Lightbulb className="h-6 w-6 text-chart-3" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">{COPY.sections.researchMethods}</h2>
            </div>

            {(slug === "trust-by-design-framework" ||
              slug === "digital-identity-services" ||
              slug === "digital-drivers-licence") &&
            typeof caseStudy.approach === "object" ? (
              <div className="pl-0 sm:pl-14 space-y-8">
                {/* Render intro with bullet points support */}
                {caseStudy.approach.intro && (
                  <div className="space-y-4">
                    {caseStudy.approach.intro.split("\n\n").map((section, sIndex) => {
                      // Check if section contains bullet points
                      if (section.includes("•")) {
                        const lines = section.split("\n")
                        const bullets = lines.filter((line) => line.trim().startsWith("•"))
                        const intro = lines.find((line) => !line.trim().startsWith("•"))

                        return (
                          <div key={sIndex} className="space-y-3">
                            {intro && <p className="text-sm text-card-foreground leading-relaxed">{intro}</p>}
                            <ul className="space-y-2 pl-0">
                              {bullets.map((bullet, bIndex) => (
                                <li key={bIndex} className="flex items-start gap-3 text-sm text-card-foreground">
                                  <span className="text-chart-3 flex-shrink-0 mt-0.5">•</span>
                                  <span>{bullet.replace("•", "").trim()}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      }
                      // Regular paragraph
                      return (
                        <p key={sIndex} className="text-sm text-card-foreground leading-relaxed">
                          {section}
                        </p>
                      )
                    })}
                  </div>
                )}

                {slug === "digital-identity-services" && (
                  <div className="space-y-6">
                    {/* Workshop Facilitation */}
                    {caseStudy.approach.workshopFacilitation && (
                      <div className="bg-card rounded-xl p-5 border border-border">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                            <Icons.Users className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-base font-bold text-foreground pt-1">
                            Workshop Facilitation for Adoption & End User Requirements
                          </h3>
                        </div>
                        <div className="pl-11">{renderTextWithBullets(caseStudy.approach.workshopFacilitation)}</div>
                        {/* </CHANGE> */}
                      </div>
                    )}

                    {/* Usability Testing */}
                    {caseStudy.approach.usabilityTesting && (
                      <div className="bg-card rounded-xl p-5 border border-border">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                            <Icons.Search className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-base font-bold text-foreground pt-1">
                            Targeted Usability Testing with Accessibility Groups
                          </h3>
                        </div>
                        <div className="pl-11">{renderTextWithBullets(caseStudy.approach.usabilityTesting)}</div>
                        {/* </CHANGE> */}
                      </div>
                    )}

                    {/* Client Expectation Management */}
                    {caseStudy.approach.clientExpectation && (
                      <div className="bg-card rounded-xl p-5 border border-border">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                            <Icons.MessageSquare className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-base font-bold text-foreground pt-1">Client Expectation Management</h3>
                        </div>
                        <div className="pl-11">{renderTextWithBullets(caseStudy.approach.clientExpectation)}</div>
                        {/* </CHANGE> */}
                      </div>
                    )}
                  </div>
                )}
                {/* </CHANGE> */}

                {slug === "digital-drivers-licence" && caseStudy.approach.processStages && (
                  <div className="space-y-6">
                    {/* Timeline connector */}
                    <div className="relative">
                      {caseStudy.approach.processStages.map((stage, index) => {
                        const IconComponent =
                          stage.icon === "target"
                            ? Icons.Target
                            : stage.icon === "users"
                              ? Icons.Users
                              : stage.icon === "layers"
                                ? Icons.Layers
                                : Icons.Eye

                        return (
                          <div key={index} className="relative">
                            {/* Vertical connector line */}
                            {index < caseStudy.approach.processStages.length - 1 && (
                              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" />
                            )}

                            <div className="flex gap-4 pb-8">
                              {/* Stage number with icon */}
                              <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center relative z-10">
                                  <IconComponent className="h-5 w-5 text-primary" />
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 pt-1">
                                <div className="bg-card rounded-xl p-5 border border-border shadow-sm">
                                  {/* Header with stage number and title */}
                                  <div className="flex items-start justify-between gap-4 mb-3">
                                    <div>
                                      <div className="text-xs font-semibold text-muted-foreground mb-1">
                                        Stage {stage.stage}
                                      </div>
                                      <h4 className="text-base font-bold text-foreground">{stage.title}</h4>
                                    </div>

                                    {/* Metrics badge */}
                                    {stage.metrics && (
                                      <div className="bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10 flex-shrink-0">
                                        {stage.metrics.from ? (
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-primary">
                                              {stage.metrics.from}
                                              <span className="mx-1 text-muted-foreground">→</span>
                                              {stage.metrics.to}
                                            </div>
                                            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                                              {stage.metrics.label}
                                            </div>
                                          </div>
                                        ) : (
                                          <div className="text-center">
                                            <div className="text-lg font-bold text-primary">{stage.metrics.value}</div>
                                            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                                              {stage.metrics.label}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>

                                  {/* Highlights */}
                                  <ul className="space-y-2">
                                    {stage.highlights.map((highlight, hIndex) => (
                                      <li key={hIndex} className="flex items-start gap-2 text-sm text-card-foreground">
                                        <Icons.CheckCircle className="h-4 w-4 text-chart-3 flex-shrink-0 mt-0.5" />
                                        <span>{highlight}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Trust Principles or similar cards */}
                {caseStudy.approach.trustPrinciples && (
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-4">
                      {slug === "trust-by-design-framework"
                        ? COPY.sections.trustPrinciples
                        : COPY.sections.corePrinciples}
                    </h3>
                    {slug === "trust-by-design-framework" ? (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {(() => {
                          const principleIcons = [Icons.Eye, Icons.RotateCcw, Icons.Users, Icons.ShieldCheck]
                          return caseStudy.approach.trustPrinciples.map((principle, index) => {
                            const PrincipleIcon = principleIcons[index] || Icons.CheckCircle
                            return (
                              <div key={index} className="bg-card rounded-xl p-4 border border-border text-center flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2.5">
                                  <PrincipleIcon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-xs font-bold text-primary mb-1">{index + 1}</div>
                                <h4 className="text-sm font-bold text-foreground mb-1.5">{principle.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{principle.description}</p>
                              </div>
                            )
                          })
                        })()}
                      </div>
                    ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {caseStudy.approach.trustPrinciples.map((principle, index) => (
                        <div key={index} className="bg-card rounded-xl p-4 border border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <span className="text-lg font-bold text-primary">{index + 1}</span>
                            </div>
                            <h4 className="font-bold text-foreground">{principle.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">{principle.description}</p>
                        </div>
                      ))}
                    </div>
                    )}
                  </div>
                )}

                {/* Research Methods */}
                {caseStudy.approach.researchMethods && (
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-4">
                      {slug === "trust-by-design-framework" ? COPY.sections.researchMethods : COPY.sections.keyMethods}
                    </h3>
                    <div className="space-y-3">
                      {caseStudy.approach.researchMethods.map((method, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Icons.CheckCircle className="h-5 w-5 text-chart-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-foreground">{method.method}:</span>{" "}
                            <span className="text-card-foreground">{method.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="pl-0 sm:pl-14 space-y-4">
                {typeof caseStudy.approach === "string" &&
                  caseStudy.approach.split("\n\n").map((section, sIndex) => {
                    // Check if section contains bullet points
                    if (section.includes("•")) {
                      const lines = section.split("\n")
                      const bullets = lines.filter((line) => line.trim().startsWith("•"))
                      const intro = lines.find((line) => !line.trim().startsWith("•"))

                      return (
                        <div key={sIndex} className="space-y-3">
                          {intro && <p className="text-sm text-card-foreground leading-relaxed">{intro}</p>}
                          <ul className="space-y-2 pl-0">
                            {bullets.map((bullet, bIndex) => (
                              <li key={bIndex} className="flex items-start gap-3 text-sm text-card-foreground">
                                <span className="text-chart-3 flex-shrink-0 mt-0.5">•</span>
                                <span>{bullet.replace("•", "").trim()}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    }
                    // Regular paragraph
                    return (
                      <p key={sIndex} className="text-sm text-card-foreground leading-relaxed">
                        {section}
                      </p>
                    )
                  })}
              </div>
            )}
          </section>
          </div>
          </div>

          {/* Solution */}
          <div className="bg-background">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
          <section className="mb-0">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/20 p-3 rounded-xl flex-shrink-0">
                <Icons.CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">{COPY.sections.solution}</h2>
            </div>
            <ul className="space-y-4 pl-0 sm:pl-14">
              {caseStudy.solution.map((item, index) => {
                // Split on first colon to separate title from content
                const [title, ...contentParts] = item.split(": ")
                const content = contentParts.join(": ")

                // Check if item contains nested bullet points
                if (item.includes("\n\n•")) {
                  // Split on double newlines to separate intro from bullets
                  const parts = item.split("\n\n")
                  const intro = parts[0]
                  const bullets = parts.slice(1).filter((part) => part.trim().startsWith("•"))

                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Icons.Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm text-card-foreground leading-relaxed block">{intro}</span>
                        {bullets.length > 0 && (
                          <ul className="space-y-2 pl-0">
                            {bullets.map((bullet, bIndex) => (
                              <li key={bIndex} className="flex items-start gap-2 text-sm text-card-foreground">
                                <span className="text-primary flex-shrink-0">•</span>
                                <span>{bullet.replace("•", "").trim()}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  )
                }
                // Regular single-line item
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icons.Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-card-foreground leading-relaxed">{item}</span>
                  </li>
                )
              })}
            </ul>
          </section>
          </div>
          </div>

          {/* Quality, Timeline, Collaboration, Platform sections */}
          <div className="bg-[#efe8d8]">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
          {slug === "digital-identity-services" && "qualityControl" in caseStudy && caseStudy.qualityControl && (
            <section id="delivery-quality" className="mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-chart-3/10 p-3 rounded-xl flex-shrink-0">
                  <Icons.ShieldCheck className="h-6 w-6 text-chart-3" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">{COPY.sections.deliveryQuality}</h2>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{caseStudy.qualityControl.intro}</p>

              <div className="space-y-6">
                {caseStudy.qualityControl.sections.map((section, index) => {
                  const IconComponent = Icons[section.icon as keyof typeof Icons] as React.ComponentType<
                    React.SVGProps<SVGSVGElement>
                  >

                  return (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-primary/10 p-2.5 rounded-lg flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground">{section.title}</h3>
                      </div>
                      <div className="text-sm text-card-foreground leading-relaxed">
                        {renderTextWithBullets(section.content)}
                      </div>
                    </Card>
                  )
                })}
              </div>

              {caseStudy.qualityControl.complianceNote && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {renderTextWithBullets(caseStudy.qualityControl.complianceNote)}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Timeline */}
          {"timeline" in caseStudy && caseStudy.timeline && (
            <section className="mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-chart-4/10 p-3 rounded-xl flex-shrink-0">
                  <Icons.Calendar className="h-6 w-6 text-chart-4" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">{COPY.sections.timeline}</h2>
              </div>
              <div className="space-y-6 pl-0 sm:pl-14">
                {caseStudy.timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                    <div className="bg-card rounded-xl p-4 border border-border">
                      <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Collaboration */}
          {"collaboration" in caseStudy && caseStudy.collaboration && (
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-chart-5/10 p-3 rounded-xl flex-shrink-0">
                  <Icons.Users className="h-6 w-6 text-chart-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">Collaboration & Scale</h2>
              </div>
              <p className="text-sm text-card-foreground leading-relaxed pl-0 sm:pl-14">{caseStudy.collaboration}</p>
            </section>
          )}

          {/* From Research to Practice (replaces Platform Engagement for trust-by-design) */}
          {"platformEngagement" in caseStudy && caseStudy.platformEngagement && (
            <section className="mb-16">
              {slug === "trust-by-design-framework" ? (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                      <Icons.Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">From Research to Practice</h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column: Consulting */}
                    <div className="bg-card rounded-xl border border-border p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3">Trust by Design Consulting</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Following the research, I launched Trust by Design as a boutique consulting practice helping regulated organisations deploy high-risk AI with confidence. The practice focuses on three services:
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary">Trust Audits</span>
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary">Framework Implementation</span>
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary">EU AI Act Readiness</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-5">
                        EU AI Act enforcement deadlines arrive August 2026.
                      </p>
                      <a
                        href="https://www.trust-by-design.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        Visit trust-by-design.org
                        <Icons.ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    {/* Right Column: Supporting Tools */}
                    <div className="bg-card rounded-xl border border-border p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3">Supporting Tools</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        The consulting practice is supported by two purpose-built tools:
                      </p>
                      <div className="space-y-4">
                        <div className="bg-background/50 rounded-lg border border-border/50 p-4">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Icons.ClipboardCheck className="h-4 w-4 text-primary flex-shrink-0" />
                            <h4 className="text-sm font-bold text-foreground">TrustAudit Tools</h4>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                            An interactive self-assessment framework organisations use to identify gaps in explainability, recoverability, accessibility, and human control.
                          </p>
                          <a
                            href="https://trustaudit.tools"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                          >
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
                          <a
                            href="https://trustbridge.design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                          >
                            trustbridge.design <Icons.ArrowRight className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Original Platform Engagement rendering for other slugs */
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                      <Icons.Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">Platform & Public Engagement</h2>
                  </div>
                  <div className="space-y-12 max-w-[720px]">
                    {caseStudy.platformEngagement.map((item, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                        <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                          {item.description.split("\n\n").map((section, sIndex) => {
                            if (section.includes("\u2022")) {
                              const lines = section.split("\n")
                              const introParagraphs: string[] = []
                              const bullets: string[] = []
                              lines.forEach((line) => {
                                if (line.trim().startsWith("\u2022")) {
                                  bullets.push(line)
                                } else if (line.trim() && !line.includes("\u2022")) {
                                  introParagraphs.push(line)
                                }
                              })
                              return (
                                <div key={sIndex} className="space-y-4">
                                  {introParagraphs.map((intro, iIndex) => (
                                    <p key={iIndex}>{intro}</p>
                                  ))}
                                  {bullets.length > 0 && (
                                    <ul className="space-y-3 pl-0">
                                      {bullets.map((bullet, bIndex) => (
                                        <li key={bIndex} className="flex items-start gap-3">
                                          <span className="text-primary flex-shrink-0 mt-0.5">{"\u2022"}</span>
                                          <span>{bullet.replace("\u2022", "").trim()}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              )
                            }
                            return <p key={sIndex}>{section}</p>
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
          )}

          {/* Testimonials */}
          {hasTestimonials(caseStudy) && (
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-chart-5/10 p-3 rounded-xl flex-shrink-0">
                  <Icons.MessageSquare className="h-6 w-6 text-chart-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">User Voice</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Over 1,000 reviews specifically mention the user-friendly design and intuitive interface
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Icons.Star key={i} className="h-4 w-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground mb-2 italic">"{testimonial.quote}"</p>
                    <p className="text-xs text-muted-foreground">— {testimonial.source}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          </div>
          </div>

          {/* Gallery */}
          <div className="bg-background">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
          <section className="mb-0">
            <h2 className="text-xl font-bold text-foreground mb-6" id="phone">
              Gallery
            </h2>

            {/* Gallery Images */}
            {slug === "digital-drivers-licence" ? (
              <div className="grid grid-cols-1 gap-6">
                {/* Clear Data Dashboard - Full Width Feature Highlight */}
                <div
                  className="rounded-2xl p-8 flex flex-col gap-8 items-center"
                  style={{ backgroundColor: "#E6E6E6" }}
                >
                  <div className="w-full aspect-[3/4] relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/image-20of-20data.png"
                      alt="Clear Data Dashboard showing vehicle information in organized card layout"
                      width={600}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#c38B12]/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#c38B12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Clear Data Dashboard</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive overview of vehicle data with visual hierarchy and smart categorization for
                      effortless information management.
                    </p>
                  </div>
                </div>

                {/* Other Feature Cards Grid */}
                <div className="grid grid-cols-1 gap-6 mt-6">
                  {/* Card 1: Cross-Platform Design with iOS/Android dashboard */}
                  <div className="rounded-2xl p-0 sm:p-8" style={{ backgroundColor: "#c38B12" }}>
                    {/* CHANGE: Made mobile image 80% width, desktop full width */}
                    <div className="w-[80%] mx-auto sm:w-full aspect-auto sm:aspect-video rounded-none sm:rounded-lg overflow-hidden mb-0 sm:mb-2">
                      {/* Mobile view - shows iOS and Android side-by-side */}
                      <Image
                        src="/images/device-202.png"
                        alt="i-Kfz app interface showing cross-platform design on iOS and Android"
                        width={600}
                        height={800}
                        className="h-auto object-contain bg-[#c38B12] block sm:hidden"
                      />
                      {/* Desktop view - same image */}
                      <Image
                        src="/images/ikfz-cross-platform.png"
                        alt="i-Kfz app interface showing cross-platform design on iOS and Android"
                        width={800}
                        height={600}
                        className="w-full h-full object-contain hidden sm:block"
                      />
                    </div>
                    <div className="px-8 pb-8 sm:p-0 flex flex-col gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cross-Platform Design</h3>
                      <p className="text-white/90 leading-relaxed">
                        System design optimized for diverse platforms including Android and iOS, ensuring consistent
                        user experience across all devices.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Accessibility with vehicle list and warnings */}
                  <div className="rounded-2xl p-0 sm:p-8" style={{ backgroundColor: "#EBDEB7" }}>
                    <div className="w-full aspect-video rounded-none sm:rounded-lg overflow-hidden mb-0 sm:mb-2">
                      <Image
                        src="/images/new-mobile-vehicle-list.png"
                        alt="i-Kfz app showing accessible vehicle list and warning states"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain bg-[#EBDEB7] block sm:hidden"
                      />
                      <Image
                        src="/images/imgae2-203.png"
                        alt="i-Kfz app showing accessible vehicle list and warning states"
                        width={600}
                        height={400}
                        className="w-full h-full object-contain hidden sm:block"
                      />
                    </div>
                    <div className="px-8 pb-8 sm:p-0">
                      <div className="w-16 h-16 rounded-xl bg-[#c38B12]/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#c38B12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Accessibility First</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Fully compliant with BITV 2.0 accessibility standards, achieving 100% certification for
                        inclusive digital access.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Smart Assistant onboarding in light/dark mode */}
                  <div className="rounded-2xl p-0 sm:p-8" style={{ backgroundColor: "#ECE7DE" }}>
                    <div className="w-[80%] mx-auto sm:w-full aspect-auto sm:aspect-video rounded-none sm:rounded-lg overflow-hidden mb-0 sm:mb-2">
                      {/* Mobile view - new onboarding screen mockup */}
                      <Image
                        src="/images/mobile.png"
                        alt="i-Kfz app smart assistant onboarding screen asking for step-by-step guidance"
                        width={600}
                        height={800}
                        className="h-auto object-contain bg-[#ECE7DE] block sm:hidden opacity-95 py-3.5"
                      />
                      {/* Desktop view - original image */}
                      <Image
                        src="/images/image-204.png"
                        alt="i-Kfz app smart assistant onboarding screens in light and dark mode"
                        width={800}
                        height={600}
                        className="w-full h-full object-contain hidden sm:block"
                      />
                    </div>
                    <div className="px-8 pb-8 sm:p-0">
                      <div className="w-16 h-16 rounded-xl bg-[#c38B12]/15 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#c38B12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Smart Assistant Integration</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Innovative voice-guided assistance with intuitive data visualization, making vehicle information
                        instantly accessible and easy to understand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : slug === "trust-by-design-framework" ? (
              <div className="grid grid-cols-1 gap-6">
                {/* Diagram 1: Trust Layer Architecture */}
                {/* CHANGE: Added id="diagram-trust-layer-architecture" for anchor linking */}
                <div id="diagram-trust-layer-architecture" className="rounded-2xl bg-white shadow-lg p-4 sm:p-8">
                  <TrustLayerArchitectureDiagram />
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Trust mechanisms sit between users and AI systems, ensuring transparency and human control
                  </p>
                </div>

                {/* Diagram 2: Responsible AI vs Trust by Design */}
                {/* CHANGE: Added id="diagram-responsible-ai-comparison" for anchor linking */}
                <div id="diagram-responsible-ai-comparison" className="rounded-2xl bg-white shadow-lg p-4 sm:p-8">
                  <ResponsibleAIComparison />
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Comparison showing the shift from technology-first to human-first design approach
                  </p>
                </div>

                {/* Diagram 3: Cross-Domain Applicability Matrix */}
                {/* CHANGE: Added id="diagram-cross-domain-matrix" for anchor linking */}
                <div
                  id="diagram-cross-domain-matrix"
                  className="hidden sm:block rounded-2xl bg-white shadow-lg p-4 sm:p-8"
                >
                  {/* CHANGE: Fixed double > to single > */}
                  <CrossDomainMatrix />
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Framework demonstrating adaptability across various government service contexts
                  </p>
                </div>

                {/* Diagram 4: Trust Failure Journey */}
                {/* CHANGE: Added id="diagram-trust-failure-journey" for anchor linking */}
                <div id="diagram-trust-failure-journey" className="rounded-2xl bg-white shadow-lg p-4 sm:p-8">
                  <TrustFailureJourney />
                  <p className="text-sm text-gray-600 mt-4 text-center leading-relaxed">
                    User journey map highlighting critical touchpoints where trust is built or eroded
                  </p>
                </div>

                {/* Diagram 5: Governance & Delivery Flow */}
                {/* CHANGE: Added id="diagram-governance-flow" for anchor linking */}
                <div id="diagram-governance-flow" className="rounded-2xl bg-white shadow-lg p-4 sm:p-8">
                  <GovernanceFlowDiagram />
                  <p className="text-sm text-gray-600 mt-4 text-center leading-relaxed">
                    End-to-end process flow showing integration of trust principles into delivery
                  </p>
                </div>
              </div>
            ) : slug === "digital-identity-services" ? (
              <div className="grid grid-cols-1 gap-6">
                {/* Visual Component A: Accessibility Process Diagram */}
                <section className="mb-12">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      Accessibility embedded from research to certification
                    </h3>

                    {/* Mobile: Stacked cards */}
                    <div className="sm:hidden space-y-4">
                      <div className="bg-blue-500 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Research</h4>
                        <p className="text-sm">User interviews</p>
                        <p className="text-sm">Accessibility audit</p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-4 bg-slate-400"></div>
                      </div>
                      <div className="bg-purple-600 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Inclusive UX</h4>
                        <p className="text-sm">Universal patterns</p>
                        <p className="text-sm">Easy Language</p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-4 bg-slate-400"></div>
                      </div>
                      <div className="bg-pink-600 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Testing</h4>
                        <p className="text-sm">Screen readers</p>
                        <p className="text-sm">Voice control</p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-4 bg-slate-400"></div>
                      </div>
                      <div className="bg-amber-500 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">BITV Audit</h4>
                        <p className="text-sm">98/98 criteria</p>
                        <p className="text-sm">Independent review</p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-4 bg-slate-400"></div>
                      </div>
                      <div className="bg-emerald-500 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Certified</h4>
                        <p className="text-sm">Public launch</p>
                        <p className="text-sm">1M+ users</p>
                      </div>
                    </div>

                    {/* Desktop: Original SVG */}
                    <svg viewBox="0 0 1000 200" className="hidden sm:block w-full h-auto">
                      {/* Research */}
                      <g>
                        <rect x="20" y="60" width="160" height="80" rx="8" fill="#3b82f6" />
                        <text x="100" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                          Research
                        </text>
                        <text x="100" y="115" textAnchor="middle" fill="white" fontSize="12">
                          User interviews
                        </text>
                        <text x="100" y="130" textAnchor="middle" fill="white" fontSize="12">
                          Accessibility audit
                        </text>
                      </g>

                      {/* Arrow */}
                      <path d="M 180 100 L 210 100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* Inclusive UX Design */}
                      <g>
                        <rect x="220" y="60" width="160" height="80" rx="8" fill="#8b5cf6" />
                        <text x="300" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                          Inclusive UX
                        </text>
                        <text x="300" y="115" textAnchor="middle" fill="white" fontSize="12">
                          Universal patterns
                        </text>
                        <text x="300" y="130" textAnchor="middle" fill="white" fontSize="12">
                          Easy Language
                        </text>
                      </g>

                      {/* Arrow */}
                      <path d="M 380 100 L 410 100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* Assistive Tech Testing */}
                      <g>
                        <rect x="420" y="60" width="160" height="80" rx="8" fill="#ec4899" />
                        <text x="500" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                          Testing
                        </text>
                        <text x="500" y="115" textAnchor="middle" fill="white" fontSize="12">
                          Screen readers
                        </text>
                        <text x="500" y="130" textAnchor="middle" fill="white" fontSize="12">
                          Voice control
                        </text>
                      </g>

                      {/* Arrow */}
                      <path d="M 580 100 L 610 100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* BITV Audit */}
                      <g>
                        <rect x="620" y="60" width="160" height="80" rx="8" fill="#f59e0b" />
                        <text x="700" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                          BITV Audit
                        </text>
                        <text x="700" y="115" textAnchor="middle" fill="white" fontSize="12">
                          98/98 criteria
                        </text>
                        <text x="700" y="130" textAnchor="middle" fill="white" fontSize="12">
                          Independent review
                        </text>
                      </g>

                      {/* Arrow */}
                      <path d="M 780 100 L 810 100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* Certified Service */}
                      <g>
                        <rect x="820" y="60" width="160" height="80" rx="8" fill="#10b981" />
                        <text x="900" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                          Certified
                        </text>
                        <text x="900" y="115" textAnchor="middle" fill="white" fontSize="12">
                          Public launch
                        </text>
                        <text x="900" y="130" textAnchor="middle" fill="white" fontSize="12">
                          1M+ users
                        </text>
                      </g>

                      {/* Arrow marker definition */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </section>

                {/* Visual Component B: BITV Audit Coverage */}
                <section className="mb-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 px-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">98 of 98 audit criteria met</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-4xl mb-3">✓</div>
                        <h4 className="font-bold text-gray-900 mb-2">Perceivable</h4>
                        <p className="text-sm text-gray-600">Content is available to all senses</p>
                      </div>
                      <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-4xl mb-3">✓</div>
                        <h4 className="font-bold text-gray-900 mb-2">Operable</h4>
                        <p className="text-sm text-gray-600">UI works with all input methods</p>
                      </div>
                      <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-4xl mb-3">✓</div>
                        <h4 className="font-bold text-gray-900 mb-2">Understandable</h4>
                        <p className="text-sm text-gray-600">Clear language and predictable behavior</p>
                      </div>
                      <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-4xl mb-3">✓</div>
                        <h4 className="font-bold text-gray-900 mb-2">Robust</h4>
                        <p className="text-sm text-gray-600">Compatible with assistive technologies</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Visual Component C: Easy Language Transformation */}
                <section className="mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center text-balance">
                      Making technical vehicle documentation understandable for everyone
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Before */}
                      <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl">❌</span>
                          <h4 className="font-bold text-gray-900">Complex Legal Text</h4>
                        </div>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                          <p className="font-mono text-xs">
                            "The vehicle registration certificate (registration certificate part I) must be carried on
                            all journeys according to §11 FZV and handed over to authorized persons on request."
                          </p>
                          <p className="text-red-600 font-medium mt-4">Issues:</p>
                          <ul className="text-xs space-y-1 text-gray-600">
                            <li>• Legal jargon (§11 FZV)</li>
                            <li>• Compound words</li>
                            <li>• Passive voice</li>
                            <li>• No visual support</li>
                          </ul>
                        </div>
                      </div>

                      {/* After */}
                      <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl">✓</span>
                          <h4 className="font-bold text-gray-900">Easy Language</h4>
                        </div>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">🚗</span>
                            <p className="font-medium">"You need your vehicle document when you drive."</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">👮</span>
                            <p className="font-medium">"Show it to police if they ask."</p>
                          </div>
                          <p className="text-green-600 font-medium mt-4">Improvements:</p>
                          <ul className="text-xs space-y-1 text-gray-600">
                            <li>• Short sentences</li>
                            <li>• Active voice</li>
                            <li>• Visual icons</li>
                            <li>• 73% fewer errors</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8" id="easyspeak">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Dynamic Content Architecture</h4>
                      <p className="text-sm text-gray-700 mb-6 text-center max-w-2xl mx-auto leading-relaxed">
                        The modular screen system enables content teams to collaborate on individual text elements with
                        subject matter experts and legal reviewers independently, while maintaining a centralized view
                        of the complete user journey for flow validation and accessibility testing.
                      </p>
                      <div className="flex justify-center">
                        <Image
                          src="/images/dynamic.jpg"
                          alt="Dynamic screen architecture showing modular content structure with list view and detail panel"
                          width={1200}
                          height={800}
                          className="rounded-lg shadow-lg w-full max-w-4xl"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Visual Component D: Accessibility Assistant Flow */}
                <section className="mb-12">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Neurodiversity</h3>
                    <p className="text-base text-gray-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
                      The assistant breaks down complex interactions into small, manageable decisions, helping users
                      find and understand the controls they need—even in high-stress situations like police encounters.
                      Users can dismiss the assistant at any time to access the full, comprehensive interface directly
                      if they prefer.
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Accessibility Assistant Flow</h4>

                    {/* Mobile: Stacked cards */}
                    <div className="sm:hidden space-y-4 mb-6">
                      <div className="bg-purple-600 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base">User</h4>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-4 bg-slate-400"></div>
                      </div>
                      <div className="bg-pink-600 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-lg mb-2 text-center">AI Assistant</h4>
                        <p className="text-sm text-center">Voice • Visual • Haptic</p>
                        <p className="text-sm text-center">14 languages</p>
                      </div>
                      <div className="text-center text-sm font-medium text-slate-600 py-2">
                        Provides three types of support:
                      </div>
                      <div className="bg-blue-500 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Navigation Help</h4>
                        <p className="text-sm">Step-by-step guidance</p>
                        <p className="text-sm">Context-aware tips</p>
                      </div>
                      <div className="bg-amber-500 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Error Recovery</h4>
                        <p className="text-sm">Clear explanations</p>
                        <p className="text-sm">Alternative paths</p>
                      </div>
                      <div className="bg-emerald-500 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Alternative Input</h4>
                        <p className="text-sm">Voice commands</p>
                        <p className="text-sm">Switch control</p>
                      </div>
                    </div>

                    {/* Desktop: Original SVG */}
                    <svg viewBox="0 0 800 300" className="hidden sm:flex justify-center mb-6">
                      {/* User */}
                      <g>
                        <circle cx="80" cy="150" r="40" fill="#8b5cf6" />
                        <text x="80" y="155" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                          User
                        </text>
                      </g>

                      {/* Arrow to Assistant */}
                      <path d="M 120 150 L 180 150" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead2)" />

                      {/* Assistant */}
                      <g>
                        <rect x="180" y="100" width="180" height="100" rx="8" fill="#ec4899" />
                        <text x="270" y="135" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                          AI Assistant
                        </text>
                        <text x="270" y="160" textAnchor="middle" fill="white" fontSize="13">
                          Voice • Visual • Haptic
                        </text>
                        <text x="270" y="180" textAnchor="middle" fill="white" fontSize="13">
                          14 languages
                        </text>
                      </g>

                      {/* Three branches */}
                      <path d="M 360 150 L 420 80" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead2)" />
                      <path d="M 360 150 L 420 150" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead2)" />
                      <path d="M 360 150 L 420 220" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead2)" />

                      {/* Navigation Help */}
                      <g>
                        <rect x="420" y="40" width="160" height="80" rx="8" fill="#3b82f6" />
                        <text x="500" y="70" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                          Navigation Help
                        </text>
                        <text x="500" y="90" textAnchor="middle" fill="white" fontSize="11">
                          Step-by-step guidance
                        </text>
                        <text x="500" y="105" textAnchor="middle" fill="white" fontSize="11">
                          Context-aware tips
                        </text>
                      </g>

                      {/* Error Recovery */}
                      <g>
                        <rect x="420" y="110" width="160" height="80" rx="8" fill="#f59e0b" />
                        <text x="500" y="140" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                          Error Recovery
                        </text>
                        <text x="500" y="160" textAnchor="middle" fill="white" fontSize="11">
                          Clear explanations
                        </text>
                        <text x="500" y="175" textAnchor="middle" fill="white" fontSize="11">
                          Alternative paths
                        </text>
                      </g>

                      {/* Alternative Input */}
                      <g>
                        <rect x="420" y="180" width="160" height="80" rx="8" fill="#10b981" />
                        <text x="500" y="210" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                          Alternative Input
                        </text>
                        <text x="500" y="230" textAnchor="middle" fill="white" fontSize="11">
                          Voice commands
                        </text>
                        <text x="500" y="245" textAnchor="middle" fill="white" fontSize="11">
                          Switch control
                        </text>
                      </g>

                      {/* Arrow marker */}
                      <defs>
                        <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
                        </marker>
                      </defs>
                    </svg>
                  </div>

                  <div className="mt-8 pt-8">
                    <Image
                      src="/images/image-204.png"
                      alt="Mobile screens showing AI assistant asking for user preference in German and English"
                      width={1400}
                      height={700}
                      className="rounded-lg shadow-lg w-full max-w-4xl"
                    />
                  </div>
                </section>

                {/* Visual Component E: Accessibility + Cybersecurity */}
                <section className="mb-12">
                  <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-slate-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Security without exclusion</h3>

                    {/* Mobile: Stacked cards */}
                    <div className="sm:hidden space-y-4">
                      <div className="bg-blue-500 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Accessible Login</h4>
                        <p className="text-sm">Voice patterns</p>
                        <p className="text-sm">Biometric options</p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-4 bg-slate-400"></div>
                      </div>
                      <div className="bg-purple-600 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">MFA Alternatives</h4>
                        <p className="text-sm">Picture-based codes</p>
                        <p className="text-sm">Audio verification</p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-4 bg-slate-400"></div>
                      </div>
                      <div className="bg-pink-600 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Clear Consent</h4>
                        <p className="text-sm">Plain language</p>
                        <p className="text-sm">Visual explanations</p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-4 bg-slate-400"></div>
                      </div>
                      <div className="bg-emerald-500 rounded-lg p-4 text-white">
                        <h4 className="font-bold text-base mb-2">Error Recovery</h4>
                        <p className="text-sm">Graceful failures</p>
                        <p className="text-sm">Alternative paths</p>
                      </div>
                    </div>

                    {/* Desktop: Original SVG */}
                    <svg viewBox="0 0 900 200" className="hidden sm:block w-full h-auto">
                      {/* Accessible Login */}
                      <g>
                        <rect x="20" y="60" width="180" height="80" rx="8" fill="#3b82f6" />
                        <text x="110" y="95" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">
                          Accessible Login
                        </text>
                        <text x="110" y="115" textAnchor="middle" fill="white" fontSize="11">
                          Voice patterns
                        </text>
                        <text x="110" y="130" textAnchor="middle" fill="white" fontSize="11">
                          Biometric options
                        </text>
                      </g>

                      {/* Arrow */}
                      <path d="M 200 100 L 230 100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead3)" />

                      {/* MFA Alternatives */}
                      <g>
                        <rect x="240" y="60" width="180" height="80" rx="8" fill="#8b5cf6" />
                        <text x="330" y="95" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">
                          MFA Alternatives
                        </text>
                        <text x="330" y="115" textAnchor="middle" fill="white" fontSize="11">
                          Picture-based codes
                        </text>
                        <text x="330" y="130" textAnchor="middle" fill="white" fontSize="11">
                          Audio verification
                        </text>
                      </g>

                      {/* Arrow */}
                      <path d="M 420 100 L 450 100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead3)" />

                      {/* Clear Consent */}
                      <g>
                        <rect x="460" y="60" width="180" height="80" rx="8" fill="#ec4899" />
                        <text x="550" y="95" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">
                          Clear Consent
                        </text>
                        <text x="550" y="115" textAnchor="middle" fill="white" fontSize="11">
                          Plain language
                        </text>
                        <text x="550" y="130" textAnchor="middle" fill="white" fontSize="11">
                          Visual explanations
                        </text>
                      </g>

                      {/* Arrow */}
                      <path d="M 640 100 L 670 100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead3)" />

                      {/* Error Recovery */}
                      <g>
                        <rect x="680" y="60" width="200" height="80" rx="8" fill="#10b981" />
                        <text x="780" y="95" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">
                          Error Recovery
                        </text>
                        <text x="780" y="115" textAnchor="middle" fill="white" fontSize="11">
                          Graceful failures
                        </text>
                        <text x="780" y="130" textAnchor="middle" fill="white" fontSize="11">
                          Alternative paths
                        </text>
                      </g>

                      {/* Arrow marker */}
                      <defs>
                        <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </section>

                {/* Final Reflection */}
                <section className="mb-12">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
                    <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                      "Accessibility is not compliance. It is independence, dignity, and trust."
                    </blockquote>
                  </div>
                </section>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {/* Default case or for any other slug not explicitly handled */}
                {caseStudy.gallery.map((image, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      id={`gallery-image-${index}`}
                      src={image || "/placeholder.svg"}
                      alt={`${caseStudy.title} - Image ${index + 1}`}
                      className="w-full h-[300px] sm:h-[400px] object-cover"
                      data-editable={`gallery-image-${index}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
          </div>
          </div>

          {/* Impact */}
          <div className="bg-[#efe8d8]">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
          <section className="mb-0">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/20 p-3 rounded-xl flex-shrink-0">
                <Icons.TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                {/* Conditional heading based on presence of keyMetrics */}
                {"keyMetrics" in caseStudy ? COPY.sections.outcome : COPY.sections.outcome}
              </h2>
            </div>
            {slug === "trust-by-design-framework" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-0 sm:pl-14">
                {caseStudy.impact.map((item, index) => {
                  const parts = item.split(/(\*\*[^*]+\*\*)/)
                  const boldPart = parts.find((p) => p.startsWith("**") && p.endsWith("**"))
                  const stat = boldPart ? boldPart.slice(2, -2).replace(/:$/, "") : ""
                  const description = parts.filter((p) => !(p.startsWith("**") && p.endsWith("**"))).join("").replace(/^\s+/, "")

                  return (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors flex flex-col text-center"
                    >
                      <div className="text-lg font-bold text-primary mb-1.5 leading-tight">{stat}</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.impact.map((item, index) => {
                  const parts = item.split(/(\*\*[^*]+\*\*)/)

                  return (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm leading-relaxed">
                            {parts.map((part, i) => {
                              if (part.startsWith("**") && part.endsWith("**")) {
                                const text = part.slice(2, -2)
                                return (
                                  <span key={i} className="font-semibold text-primary">
                                    {text}
                                  </span>
                                )
                              }
                              return (
                                <span key={i} className="text-foreground">
                                  {part}
                                </span>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </section>
          </div>
          </div>

          {/* Download, Reflection, CTA */}
          <div className="bg-background">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
          {hasDownloadLinks(caseStudy) && (
            <section className="mb-12">
              <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10">
                <h3 className="text-lg font-bold text-foreground mb-2">Experience the Design Yourself</h3>
                <p className="text-sm text-muted-foreground mb-4">{caseStudy.downloadLinks.message}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button size="lg" variant="outline" className="min-h-[44px] bg-transparent" asChild>
                    <a href={caseStudy.downloadLinks.ios} target="_blank" rel="noopener noreferrer">
                      <Icons.Download className="h-4 w-4 mr-2" />
                      Download on App Store
                    </a>
                  </Button>
                  {caseStudy.downloadLinks.android !== "#" && (
                    <Button size="lg" variant="outline" className="min-h-[44px] bg-transparent" asChild>
                      <a href={caseStudy.downloadLinks.android} target="_blank" rel="noopener noreferrer">
                        <Icons.Download className="h-4 w-4 mr-2" />
                        Download on Google Play
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Reflection */}
          {"reflection" in caseStudy && caseStudy.reflection && (
            <section className="mb-12">
              <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10">
                <div className="flex items-start gap-4 mb-4">
                  <Icons.MessageSquare className="h-6 w-6 text-primary flex-shrink-0" />
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">Reflection</h2>
                </div>
                <div className="text-sm text-foreground leading-relaxed italic pl-0 sm:pl-10 space-y-4">
                  {caseStudy.reflection.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-16 pt-12 border-t border-border">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Interested in working together?</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help your organisation design trustworthy, accessible AI experiences across
                sectors.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-h-[44px]" asChild>
                  <a href="mailto:info@jennifersimonds.com">
                    <Icons.Mail className="h-4 w-4 mr-2" />
                    Get in Touch
                  </a>
                </Button>

                <Button size="lg" variant="outline" className="min-h-[44px] bg-transparent" asChild>
                  <Link href="/">
                    <Icons.ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Start
                  </Link>
                </Button>
              </div>
            </div>
          </section>
          </div>
          </div>
        </article>
      </div>
    </>
  )
}

function getCaseStudyData(slug: string) {
  const slugAliases: Record<string, string> = {
    "eu-platform-design": "digital-identity-services",
    "design-system-adoption": "digital-drivers-licence",
  }
  const resolvedSlug = slugAliases[slug] || slug
  return caseStudiesData[resolvedSlug as keyof typeof caseStudiesData]
}
