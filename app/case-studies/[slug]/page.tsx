import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import * as Icons from "lucide-react"
import Link from "next/link"
import { notFound } from "navigation"
import Image from "next/image"

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

const TrustLayerArchitectureDiagram = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640
  const scale = isMobile ? 2.4 : 1.0
  const fontSize = isMobile ? 20 : 12
  const titleFontSize = isMobile ? 24 : 14
  const boxHeight = isMobile ? 90 : 50
  const arrowThickness = isMobile ? 5 : 2

  return (
    <div className="w-full overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
      <svg
        viewBox="0 0 800 600"
        className="w-full min-w-[400px] sm:min-w-[320px] h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Layer - Humans */}
        <rect x="50" y="50" width="700" height="120" fill="#f8f9fa" stroke="#334155" strokeWidth="2" rx="8" />
        <text x="400" y="90" textAnchor="middle" fill="#1e293b" fontSize={titleFontSize} fontWeight="600">
          Citizens / Patients / Customers
        </text>
        <text x="400" y="120" textAnchor="middle" fill="#64748b" fontSize={fontSize}>
          Frontline Staff / Case Workers / Support
        </text>

        {/* Arrow down */}
        <path d="M 400 170 L 400 200" stroke="#64748b" strokeWidth={arrowThickness} markerEnd="url(#arrowhead)" />

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
        <text x="400" y="240" textAnchor="middle" fill="#1e40af" fontSize={titleFontSize + 2} fontWeight="700">
          TRUST LAYER
        </text>

        <rect x="80" y="260" width="310" height={boxHeight} fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
        <text x="235" y={isMobile ? 305 : 290} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
          Explainability
        </text>

        <rect x="410" y="260" width="310" height={boxHeight} fill="white" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
        <text x="565" y={isMobile ? 305 : 290} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
          Recovery & Error Handling
        </text>

        <rect
          x="80"
          y={isMobile ? 360 : 320}
          width="310"
          height={boxHeight}
          fill="white"
          stroke="#3b82f6"
          strokeWidth="1.5"
          rx="6"
        />
        <text x="235" y={isMobile ? 405 : 350} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
          Human Control & Override
        </text>

        <rect
          x="410"
          y={isMobile ? 360 : 320}
          width="310"
          height={boxHeight}
          fill="white"
          stroke="#3b82f6"
          strokeWidth="1.5"
          rx="6"
        />
        <text x="565" y={isMobile ? 405 : 350} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
          Accessibility & Senior-First Design
        </text>

        {/* Arrow down */}
        <path
          d={isMobile ? "M 400 450 L 400 480" : "M 400 390 L 400 420"}
          stroke="#64748b"
          strokeWidth={arrowThickness}
          markerEnd="url(#arrowhead)"
        />

        {/* Bottom Layer - Technology */}
        <rect
          x="50"
          y={isMobile ? 490 : 430}
          width="700"
          height="120"
          fill="#f1f5f9"
          stroke="#334155"
          strokeWidth="2"
          rx="8"
        />
        <text x="400" y={isMobile ? 530 : 470} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
          AI Models
        </text>
        <text
          x="400"
          y={isMobile ? 555 : 495}
          textAnchor="middle"
          fill="#64748b"
          fontSize={fontSize - (isMobile ? 2 : 1)}
        >
          Data Infrastructure
        </text>
        <text
          x="400"
          y={isMobile ? 580 : 520}
          textAnchor="middle"
          fill="#64748b"
          fontSize={fontSize - (isMobile ? 2 : 1)}
        >
          Risk & Compliance Tooling
        </text>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
          </marker>
        </defs>
      </svg>
    </div>
  )
}

const ResponsibleAIComparison = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640
  const fontSize = isMobile ? 16 : 16
  const titleFontSize = isMobile ? 22 : 22
  const boxWidth = isMobile ? 360 : 360
  const boxHeight = isMobile ? 70 : 60
  const strokeWidth = isMobile ? 2 : 1.5

  return (
    <svg viewBox="0 0 1000 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Left Column - Responsible AI */}
      <rect x="50" y="80" width="420" height="480" fill="#f8f9fa" stroke="#334155" strokeWidth="2" rx="8" />
      <text x="260" y="130" textAnchor="middle" fill="#1e293b" fontSize={titleFontSize - 2} fontWeight="700">
        Responsible AI
      </text>
      <text x="260" y="155" textAnchor="middle" fill="#64748b" fontSize={isMobile ? 14 : 14}>
        (Model & System Level)
      </text>

      <rect
        x="80"
        y="190"
        width={boxWidth}
        height={boxHeight}
        fill="white"
        stroke="#64748b"
        strokeWidth={strokeWidth}
        rx="6"
      />
      <text x="260" y={isMobile ? 230 : 228} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
        Accuracy
      </text>

      <rect
        x="80"
        y={isMobile ? 280 : 270}
        width={boxWidth}
        height={boxHeight}
        fill="white"
        stroke="#64748b"
        strokeWidth={strokeWidth}
        rx="6"
      />
      <text x="260" y={isMobile ? 320 : 308} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
        Security
      </text>

      <rect
        x="80"
        y={isMobile ? 370 : 350}
        width={boxWidth}
        height={boxHeight}
        fill="white"
        stroke="#64748b"
        strokeWidth={strokeWidth}
        rx="6"
      />
      <text x="260" y={isMobile ? 410 : 388} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
        Robustness
      </text>

      <rect
        x="80"
        y={isMobile ? 460 : 430}
        width={boxWidth}
        height={boxHeight}
        fill="white"
        stroke="#64748b"
        strokeWidth={strokeWidth}
        rx="6"
      />
      <text x="260" y={isMobile ? 500 : 468} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
        Compliance & Benchmarking
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
      <text x="740" y="130" textAnchor="middle" fill="#1e40af" fontSize={titleFontSize - 2} fontWeight="700">
        Trust by Design
      </text>
      <text x="740" y="155" textAnchor="middle" fill="#1e40af" fontSize={isMobile ? 14 : 14}>
        (Human & Organisational Level)
      </text>

      <rect
        x="560"
        y="190"
        width={boxWidth}
        height={boxHeight}
        fill="white"
        stroke="#3b82f6"
        strokeWidth={strokeWidth}
        rx="6"
      />
      <text x="740" y={isMobile ? 230 : 228} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
        Understandability
      </text>

      <rect
        x="560"
        y={isMobile ? 280 : 270}
        width={boxWidth}
        height={boxHeight}
        fill="white"
        stroke="#3b82f6"
        strokeWidth={strokeWidth}
        rx="6"
      />
      <text x="740" y={isMobile ? 320 : 308} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
        Contestability
      </text>

      <rect
        x="560"
        y={isMobile ? 370 : 350}
        width={boxWidth}
        height={boxHeight}
        fill="white"
        stroke="#3b82f6"
        strokeWidth={strokeWidth}
        rx="6"
      />
      <text x="740" y={isMobile ? 410 : 388} textAnchor="middle" fill="#1e293b" fontSize={fontSize} fontWeight="500">
        Recovery
      </text>

      <rect
        x="560"
        y={isMobile ? 460 : 430}
        width={boxWidth}
        height={boxHeight}
        fill="white"
        stroke="#3b82f6"
        strokeWidth={strokeWidth}
        rx="6"
      />
      <text
        x="740"
        y={isMobile ? 490 : 456}
        textAnchor="middle"
        fill="#1e293b"
        fontSize={fontSize - 1}
        fontWeight="500"
      >
        Human Oversight
      </text>
      <text
        x="740"
        y={isMobile ? 510 : 478}
        textAnchor="middle"
        fill="#1e293b"
        fontSize={fontSize - 1}
        fontWeight="500"
      >
        & Legitimacy
      </text>

      {/* Title */}
      <text x="500" y="40" textAnchor="middle" fill="#1e293b" fontSize={titleFontSize} fontWeight="700">
        Complementary Approaches
      </text>
    </svg>
  )
}

const CrossDomainMatrix = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640
  const fontSize = isMobile ? 16 : 14
  const titleFontSize = isMobile ? 24 : 22
  const headerWidth = isMobile ? 140 : 140
  const headerHeight = isMobile ? 70 : 60
  const circleRadius = isMobile ? 18 : 15

  return (
    <svg viewBox="0 0 1100 700" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Title */}
      <text x="550" y="40" textAnchor="middle" fill="#1e293b" fontSize={titleFontSize} fontWeight="700">
        Cross-Domain Applicability
      </text>

      {/* Column Headers */}
      <rect x="180" y="80" width={headerWidth} height={headerHeight} fill="#1e40af" rx="6" />
      <text x="250" y="115" textAnchor="middle" fill="white" fontSize={fontSize} fontWeight="600">
        Finance
      </text>

      <rect x="340" y="80" width={headerWidth} height={headerHeight} fill="#1e40af" rx="6" />
      <text x="410" y="115" textAnchor="middle" fill="white" fontSize={fontSize} fontWeight="600">
        Health
      </text>

      <rect x="500" y="80" width={headerWidth} height={headerHeight} fill="#1e40af" rx="6" />
      <text x="570" y="115" textAnchor="middle" fill="white" fontSize={fontSize} fontWeight="600">
        Education
      </text>

      <rect x="660" y="80" width={headerWidth} height={headerHeight} fill="#1e40af" rx="6" />
      <text x="730" y="108" textAnchor="middle" fill="white" fontSize={fontSize - 1} fontWeight="600">
        Cyber-
      </text>
      <text x="730" y="125" textAnchor="middle" fill="white" fontSize={fontSize - 1} fontWeight="600">
        security
      </text>

      <rect x="820" y="80" width={headerWidth} height={headerHeight} fill="#1e40af" rx="6" />
      <text x="890" y="108" textAnchor="middle" fill="white" fontSize={fontSize - 1} fontWeight="600">
        Public
      </text>
      <text x="890" y="125" textAnchor="middle" fill="white" fontSize={fontSize - 1} fontWeight="600">
        Sector
      </text>

      {/* Row Labels and Cells */}
      {/* Row 1: Automated decisions */}
      <text x="160" y="190" textAnchor="end" fill="#1e293b" fontSize={fontSize - 1} fontWeight="500">
        Automated
      </text>
      <text x="160" y="205" textAnchor="end" fill="#1e293b" fontSize={fontSize - 1} fontWeight="500">
        decisions
      </text>
      {[180, 340, 500, 660, 820].map((x, i) => (
        <circle key={`r1-${i}`} cx={x + 70} cy="197" r={circleRadius} fill="#3b82f6" opacity="0.8" />
      ))}

      {/* Row 2: Risk scoring */}
      <text x="160" y="270" textAnchor="end" fill="#1e293b" fontSize={fontSize - 1} fontWeight="500">
        Risk scoring
      </text>
      {[180, 340, 500, 660, 820].map((x, i) => (
        <circle key={`r2-${i}`} cx={x + 70} cy="270" r={circleRadius} fill="#3b82f6" opacity="0.8" />
      ))}

      {/* Row 3: Eligibility & access */}
      <text x="160" y="338" textAnchor="end" fill="#1e293b" fontSize={fontSize - 1} fontWeight="500">
        Eligibility
      </text>
      <text x="160" y="353" textAnchor="end" fill="#1e293b" fontSize={fontSize - 1} fontWeight="500">
        & access
      </text>
      {[180, 340, 500, 660, 820].map((x, i) => (
        <circle key={`r3-${i}`} cx={x + 70} cy="345" r={circleRadius} fill="#3b82f6" opacity="0.8" />
      ))}

      {/* Row 4: Audit & compliance */}
      <text x="160" y="413" textAnchor="end" fill="#1e293b" fontSize={fontSize - 1} fontWeight="500">
        Audit &
      </text>
      <text x="160" y="428" textAnchor="end" fill="#1e293b" fontSize={fontSize - 1} fontWeight="500">
        compliance
      </text>
      {[180, 340, 500, 660, 820].map((x, i) => (
        <circle key={`r4-${i}`} cx={x + 70} cy="420" r={circleRadius} fill="#3b82f6" opacity="0.8" />
      ))}

      {/* Row 5: Human override needs */}
      <text x="160" y="488" textAnchor="end" fill="#1e293b" fontSize={fontSize - 1} fontWeight="500">
        Human override
      </text>
      <text x="160" y="503" textAnchor="end" fill="#1e293b" fontSize={fontSize - 1} fontWeight="500">
        needs
      </text>
      {[180, 340, 500, 660, 820].map((x, i) => (
        <circle key={`r5-${i}`} cx={x + 70} cy="495" r={circleRadius} fill="#3b82f6" opacity="0.8" />
      ))}

      {/* Legend */}
      <text x="550" y="580" textAnchor="middle" fill="#64748b" fontSize={fontSize - 1} fontStyle="italic">
        Same Trust Layer principles apply across all domains
      </text>
    </svg>
  )
}

const TrustFailureJourney = () => (
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
      Human
    </text>
    <text x="625" y="483" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
      support
    </text>
    <text x="625" y="498" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
      available
    </text>

    <path d="M 690 475 L 720 475" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow2)" />

    <rect x="720" y="440" width="160" height="70" fill="#d1fae5" stroke="#10b981" strokeWidth="2" rx="6" />
    <text x="800" y="465" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
      Trust maintained
    </text>
    <text x="800" y="483" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="500">
      Issue resolved
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
      Trust preserved
    </text>
    <text x="800" y="620" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="600">
      -30% helpdesk costs
    </text>
    <text x="800" y="638" textAnchor="middle" fill="#10b981" fontSize="12">
      25% abandonment rate
    </text>

    {/* Arrow markers */}
    <defs>
      <marker id="arrow2" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
      </marker>
      <marker id="arrow-red" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
        <polygon points="0 0, 12 6, 0 12" fill="#dc2626" />
      </marker>
      <marker id="arrow-green" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
        <polygon points="0 0, 12 6, 0 12" fill="#10b981" />
      </marker>
    </defs>
  </svg>
)

const GovernanceFlowDiagram = () => (
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
)

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

      {/* Metric 2: Design Reviews */}
      <g transform="translate(280, 70)">
        <Icons.MessageSquare className="h-10 w-10 text-green-500 mx-auto mb-2" />
        <text x="100" y="70" textAnchor="middle" fill="#1e293b" fontSize="24" fontWeight="bold">
          1,000+
        </text>
        <text x="100" y="100" textAnchor="middle" fill="#64748b" fontSize="12">
          5-Star Reviews
        </text>
      </g>

      {/* Metric 3: BITV Certified */}
      <g transform="translate(480, 70)">
        <Icons.ShieldCheck className="h-10 w-10 text-yellow-500 mx-auto mb-2" />
        <text x="100" y="70" textAnchor="middle" fill="#1e293b" fontSize="24" fontWeight="bold">
          100%
        </text>
        <text x="100" y="100" textAnchor="middle" fill="#64748b" fontSize="12">
          BITV Certified
        </text>
      </g>

      {/* Metric 4: Team Size */}
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

const DigitalDriversLicence_DownloadLinks = {
  ios: "https://apps.apple.com/de/app/i-kfz/id6742321547#productRatings",
  android: "https://play.google.com/store/apps/details?id=de.kba.ikfz&hl=de",
  message: "Experience the user-friendly design of the i-Kfz app for yourself.",
}

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
        "Germany's digital identity system needed to work for everyone — including older adults, people with disabilities, and citizens encountering digital identity verification for the first time — while operating under strict legal, security, and delivery constraints.\n\nThe core challenge was not a lack of accessibility standards, but how those standards were adopted in everyday product decisions.\n\nKey challenges included:\n\n• Accessibility risked being treated as front-end or compliance work rather than shared responsibility\n• Teams faced high delivery pressure with varying levels of accessibility maturity\n• The deeper challenge was embedding inclusive design values into team behaviour and decision-making\n• Accessibility needed to be introduced and defended from early concept stage\n• The client needed support to see accessibility as a driver of adoption, trust, and service quality\n• The role involved continuous advocacy and facilitation, not just delivery\n\nFailure carried real consequences: exclusion from essential public services, loss of trust in government systems, and audit risk in a nationally critical product.",

      obstacles: [
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
        "The approach focused on accessibility adoption and facilitation, not enforcement.\n\nAccessibility was positioned as a strategic factor from the outset and embedded directly into design and development workflows. A shared framework based on Microsoft Inclusive Design principles aligned teams around inclusive design, real-world context, accessible content, assistive technology support, and dignity-driven security.\n\nKey principles:\n\n• Accessibility was positioned early as a strategic design and delivery factor\n• Inclusive design influenced interactions, language, flows, and error handling, not only code\n• Adoption was enabled through facilitation, shared frameworks, and hands-on collaboration\n• The approach aligned teams and stakeholders around accessibility as shared responsibility\n• Accessibility functioned as an enabler of adoption and delivery confidence, not a constraint\n\nWorkshops with technology innovation teams, domain experts, and advisors from social organisations supported the design of accessible end-to-end user journeys. Continuous manual and automated testing created fast feedback loops, reducing rework and increasing delivery confidence.",

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
            "Manual and automated accessibility testing (NVDA, VoiceOver, JAWS, Stark, Axe) with feedback integrated into design and development, treating testing as adoption enabler rather than gate.",
        },
      ],
    },

    solution: [
      "Accessibility positioned as strategic factor: Embedded early in design and development workflows as part of overall product quality, service reliability, and public value — not as post-hoc compliance.",
      "Microsoft Accessibility Principles as adoption framework: Five principles (Inclusive Design, Field Research, Accessible Content, Assistive Technology Compatibility, Trust/Safety/Dignity) used to align designers, developers, stakeholders, and advisors.",
      "Process Design & Innovation: Development of accessibility guidelines, checklists, and QA processes establishing sustainable accessibility standards. Continuous evolution of inclusive design systems.",
      "Adoption Strategy & Facilitation: Consulting and advisory to government stakeholders and internal teams on WCAG 2.2, EN 301 549, BITV 2.0. Workshop facilitation with cross-disciplinary teams. Champion network enablement across UX, UI, and front-end development.",
      "Testing integrated as feedback loops: Manual and automated accessibility testing (NVDA, VoiceOver, JAWS, Stark, Axe) with feedback integrated into design and development, treating testing as adoption enabler rather than gate.",
      "Cross-functional collaboration embedded in agile delivery: Close collaboration with UX, UI, and front-end development in international teams. Accessibility embedded into sprint rituals, reviews, and daily practice.",
    ],

    impact: [
      "**Germany's first BITV-certified government app:** 98/98 audit criteria achieved",
      "**Accessibility capability scaled:** From 6 to 64 trained professionals",
      "**1M+ users supported:** National rollout with accessible authentication and verification",
      "**40% reduction in review cycles:** Through embedded accessibility practices and early integration",
      "**Accessibility as sustainable practice:** Established as ongoing organizational capability, not project exception",
      "**Cross-functional adoption:** Accessibility embedded across UX, UI, development, and stakeholder engagement",
      "**Strategic positioning:** Accessibility positioned as trust-building mechanism and service quality factor",
      "**Process innovation:** Sustainable guidelines, checklists, and QA processes established",
    ],

    gallery: [
      "/images/chatgpt-20image-20dec-2019-2c-202025-2c-2010-50-16-20pm.png",
      "/accessible-government-portal.jpg",
      "/accessible-form-design.jpg",
    ],

    closingStatement:
      '"Accessibility adoption succeeds when inclusion is embedded in strategy, enabled through process, and sustained by people."',

    reflection:
      "This project demonstrated that accessibility standards alone do not create accessible products. Adoption requires people, processes, and sustained capability-building.\n\nBy positioning accessibility as a strategic factor rather than compliance requirement, and by using Microsoft Accessibility Principles as a shared adoption framework, we enabled teams to embed inclusive design into everyday decision-making.\n\nThe outcome was not just 98/98 BITV audit criteria — it was the scaling of accessibility capability from 6 to 64 trained professionals, 40% reduction in review cycles, and the establishment of accessibility as sustainable organizational practice.\n\nAccessibility adoption is infrastructure. It can be designed, facilitated, and sustained through strategic positioning, process innovation, and cross-functional collaboration.",
  },
  // </CHANGE>

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
        // Changed from 'caseExamples' to 'obstacles' to match the update structure
        {
          system: "Assistant iQ",
          issue: "Generates legal guidelines but without explainability creates potential liability risks",
        },
        {
          system: "PLAIN",
          issue: "Enables secure data analysis but without usability context struggles with adoption",
        },
        {
          system: "MÖVE",
          issue: "Benchmarks model quality but doesn't measure user experience",
        },
        {
          system: "Responsible Finder",
          issue: "Routes intelligently but without recovery paths creates helpdesk escalation",
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
      "Measurable Impact Framework: Transforms abstract trust into concrete metrics:\n\n• 67% → target 25% abandonment rate\n• +42% → target -30% helpdesk costs\n• Reduced recovery time\n• Improved accessibility compliance",
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
      "**Platform Launched:** trust-by-design.org serves organizations globally",
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
  // </CHANGE>

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

    // HERO IMAGE - This is the large image at the top of the page
    hero: "/images/export2.jpeg",

    role: "UX/UI Strategist & Concept Creator → Design System Lead → Accessibility Strategy Lead",
    duration: "2 years (Apr 2021 - Jun 2023)",
    team: "Started with 6 people, scaled to 64 (Led design team of 4)",
    client: "German Ministry of Transport",
    tools: "Design Systems, Figma, Workshop Facilitation, BITV Testing Suite",
    methods: "Journey Mapping, User Testing, Stakeholder Alignment, Accessibility Testing, Team Leadership",
    keyMetrics: [
      { label: "Downloads", value: "1M+", icon: "Download" },
      { label: "Design Reviews", value: "1,000+", icon: "MessageSquare" },
      { label: "BITV Certified", value: "100%", icon: "ShieldCheck" },
      { label: "Team Members", value: "64", icon: "Users" },
    ],
    overview:
      "I conceived and pitched the i-Kfz digital vehicle document concept to the German Ministry of Transport, winning the client through strategic workshops. Over 2 years, I led the transformation from a 6-person team to 64 members, built the design system from scratch, and achieved full BITV certification — making i-Kfz the first app in Germany to be certified 100% accessible at the German federal standard. The result: 1M+ active users, 1,000+ five-star reviews specifically praising the intuitive design from users who typically struggle with technology, and a new benchmark for accessible government digital services.",
    challenge:
      "Creating a digital identity solution that would serve millions of German citizens — from tech-savvy millennials to elderly users who find apps challenging. When I conceived and pitched this to the Ministry of Transport, the goal was clear: reach 1 million+ users within 2 years while achieving full BITV 2.0 accessibility certification. The real challenge? Making it so intuitive that users who openly admit they 'are bad at using apps' would praise the design.",
    approach:
      "From Concept to Million Users: (1) Pitched to Ministry of Transport - Won the client through strategic demonstrations and think tanks. (2) Started with 6 - Initial core team established project vision. (3) Grew to 64 - Scaled the entire project team over 2 years. (4) Led 4 - Built and managed a design team within the system architecture. (5) Reached 1,000,000+ - Users successfully onboarded with 1,000+ praising the intuitive experience. Throughout, I created a dual-platform design system from scratch, established data-driven feedback loops closely tied to developers, and facilitated EU and German workshops for journey mapping while maintaining strategic oversight.",
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
      "/images/image-20of-20data.png", // Updated in update
      "/images/ikfz-cross-platform.png",
      "/images/imgae2-203.png",
      "/images/ikfz-assistant.png",
    ],
    downloadLinks: DigitalDriversLicence_DownloadLinks,
    reflection:
      "i-Kfz showed that accessibility isn't just a compliance checkbox — it's the foundation for design that serves everyone. By centering users who typically struggle with apps, we created an experience that delighted all 1M+ users, proving that inclusive design is simply great design.",
  },
}

export const dynamicParams = false
export const dynamic = "force-static"

export async function generateStaticParams() {
  return [
    { slug: "digital-identity-services" },
    { slug: "trust-by-design-framework" },
    { slug: "digital-drivers-licence" },
  ]
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const slugAliases: Record<string, string> = {
    "eu-platform-design": "digital-identity-services",
    "design-system-adoption": "digital-drivers-licence",
  }

  // Resolve alias to actual slug
  const resolvedSlug = slugAliases[slug] || slug
  const caseStudy = caseStudiesData[resolvedSlug as keyof typeof caseStudiesData]

  if (!caseStudy) {
    notFound()
  }

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Icons.ArrowLeft className="h-4 w-4" />
              Back to Start
            </Link>
            {/* CHANGE: Updated to darker gold/olive color instead of bright orange */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="h-9 px-4 text-xs bg-yellow-700 hover:bg-yellow-800 text-white font-semibold shadow-sm"
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
                >
                  <Icons.Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-primary/20 text-foreground border-primary/30">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">{caseStudy.title}</h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">{caseStudy.subtitle}</p>

          {console.log(
            "[v0] Case study slug:",
            slug,
            "Resolved:",
            resolvedSlug,
            "Match:",
            resolvedSlug === "digital-drivers-licence",
          )}

          {resolvedSlug === "digital-drivers-licence" && (
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://apps.apple.com/de/app/i-kfz/id6742321547#productRatings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl font-bold text-base hover:bg-black/90 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=de.kba.ikfz&hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl font-bold text-base hover:bg-black/90 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download on Google Play
              </a>
            </div>
          )}

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* 🖼️ HERO IMAGE - To change, upload new image then update caseStudy.hero path above */}
            <img
              src={
                typeof window !== "undefined" && window.innerWidth < 640 && (caseStudy as any).heroMobile
                  ? (caseStudy as any).heroMobile
                  : caseStudy.hero || "/placeholder.svg"
              }
              alt={caseStudy.title}
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
          </div>
        </div>

        {hasKeyMetrics(caseStudy) && (
          <section className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {caseStudy.keyMetrics.map((metric, index) => {
                const IconComponent = Icons[metric.icon as keyof typeof Icons] as React.ElementType
                return (
                  <div key={index} className="bg-card rounded-xl p-4 border border-border text-center">
                    <IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Overview */}
        <section className="mb-12">
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
          <section className="mb-12">
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

        {/* Challenge */}
        <section className="mb-12">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-chart-2/10 p-3 rounded-xl flex-shrink-0">
              <Icons.AlertCircle className="h-6 w-6 text-chart-2" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground">The Challenge</h2>
          </div>

          {(resolvedSlug === "trust-by-design-framework" || resolvedSlug === "digital-identity-services") &&
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

              {/* Obstacles */}
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

        {/* Approach */}
        <section className="mb-12">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-chart-3/10 p-3 rounded-xl flex-shrink-0">
              <Icons.Lightbulb className="h-6 w-6 text-chart-3" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground">Approach</h2>
          </div>

          {(resolvedSlug === "trust-by-design-framework" || resolvedSlug === "digital-identity-services") &&
          typeof caseStudy.approach === "object" ? (
            <div className="pl-0 sm:pl-14 space-y-8">
              {/* Render intro with bullet points support */}
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

              {/* Trust Principles or similar cards */}
              {caseStudy.approach.trustPrinciples && (
                <div>
                  <h3 className="text-base font-bold text-foreground mb-4">
                    {resolvedSlug === "trust-by-design-framework" ? "Four Trust Principles" : "Core Principles"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {caseStudy.approach.trustPrinciples.map((principle, index) => (
                      <div key={index} className="bg-card rounded-xl p-4 border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-primary">{index + 1}</span>
                          </div>
                          <h4 className="font-bold text-foreground">{principle.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{principle.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Research Methods */}
              {caseStudy.approach.researchMethods && (
                <div>
                  <h3 className="text-base font-bold text-foreground mb-4">
                    {resolvedSlug === "trust-by-design-framework" ? "Research Methods" : "Key Methods"}
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

        {/* Solution */}
        <section className="mb-12">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-primary/20 p-3 rounded-xl flex-shrink-0">
              <Icons.CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground">Solution</h2>
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
                              <span className="text-primary flex-shrink-0 mt-0.5">•</span>
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

        {/* Timeline */}
        {"timeline" in caseStudy && caseStudy.timeline && (
          <section className="mb-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-chart-4/10 p-3 rounded-xl flex-shrink-0">
                <Icons.Calendar className="h-6 w-6 text-chart-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">Project Timeline</h2>
            </div>
            <div className="space-y-6 pl-0 sm:pl-14">
              {caseStudy.timeline.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-l-0 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Icons.Clock className="h-4 w-4 text-primary" />
                      <p className="text-xs font-bold text-primary uppercase tracking-wide">{item.period}</p>
                    </div>
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

        {/* Platform Engagement (New Section for Trust by Design) */}
        {"platformEngagement" in caseStudy && caseStudy.platformEngagement && (
          <section className="mb-16">
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
                      // Check if section contains bullet points
                      if (section.includes("•")) {
                        const lines = section.split("\n")
                        const introParagraphs = []
                        const bullets = []

                        lines.forEach((line) => {
                          if (line.trim().startsWith("•")) {
                            bullets.push(line)
                          } else if (line.trim() && !line.includes("•")) {
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
                                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                                    <span>{bullet.replace("•", "").trim()}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )
                      }
                      // Regular paragraph with link detection for trust-by-design.org
                      return (
                        <p key={sIndex}>
                          {section.includes("trust-by-design.org") ? (
                            <>
                              {section.split("trust-by-design.org")[0]}
                              <a
                                href="https://trust-by-design.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline font-medium"
                              >
                                trust-by-design.org
                              </a>
                              {section.split("trust-by-design.org")[1]}
                            </>
                          ) : (
                            section
                          )}
                        </p>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
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

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">Gallery</h2>

          {/* Gallery Images */}
          {resolvedSlug === "digital-drivers-licence" ? (
            <div className="grid grid-cols-1 gap-6">
              {/* Clear Data Dashboard - Full Width Feature Highlight */}
              <div className="rounded-2xl p-8 flex flex-col gap-8 items-center" style={{ backgroundColor: "#E6E4E4" }}>
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
                  <h3 className="text-2xl font-bold text-gray-900">Clear Data Dashboard</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive overview of vehicle data with visual hierarchy and smart categorization for effortless
                    information management.
                  </p>
                </div>
              </div>

              {/* Other Feature Cards Grid */}
              <div className="grid grid-cols-1 gap-6 mt-6">
                {/* Card 1: Cross-Platform Design with iOS/Android dashboard */}
                <div className="rounded-2xl p-8 flex flex-col gap-4" style={{ backgroundColor: "#c38B12" }}>
                  <div className="w-full aspect-video rounded-lg overflow-hidden mb-2">
                    <Image
                      src="/images/ikfz-cross-platform.png"
                      alt="i-Kfz app interface showing cross-platform design on iOS and Android"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain bg-amber-50"
                    />
                  </div>
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
                    System design optimized for diverse platforms including Android and iOS, ensuring consistent user
                    experience across all devices.
                  </p>
                </div>

                {/* Card 2: Accessibility with vehicle list and warnings */}
                <div className="rounded-2xl p-8" style={{ backgroundColor: "#EBDEB7" }}>
                  <div className="w-full aspect-video rounded-lg overflow-hidden mb-2">
                    <Image
                      src="/images/imgae2-203.png"
                      alt="i-Kfz app showing accessible vehicle list and warning states"
                      width={600}
                      height={400}
                      className="w-full h-full object-contain"
                    />
                  </div>
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
                  <h3 className="text-2xl font-bold text-gray-900">Accessibility First</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fully compliant with BITV 2.0 accessibility standards, achieving 100% certification for inclusive
                    digital access.
                  </p>
                </div>

                {/* Card 3: Smart Assistant onboarding in light/dark mode */}
                <div className="rounded-2xl p-8" style={{ backgroundColor: "#ECE7DE" }}>
                  <div className="w-full aspect-video rounded-lg overflow-hidden mb-2">
                    <Image
                      src="/images/ikfz-assistant.png"
                      alt="i-Kfz app smart assistant onboarding screens in light and dark mode"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain bg-stone-50"
                    />
                  </div>
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
                  <h3 className="text-2xl font-bold text-gray-900">Smart Assistant Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Innovative voice-guided assistance with intuitive data visualization, making vehicle information
                    instantly accessible and easy to understand.
                  </p>
                </div>
              </div>
            </div>
          ) : resolvedSlug === "trust-by-design-framework" ? (
            <div className="grid grid-cols-1 gap-12">
              {/* Diagram 1: Trust Layer Architecture */}
              <div className="rounded-2xl overflow-hidden bg-white shadow-lg p-4 sm:p-8">
                <TrustLayerArchitectureDiagram />
                <p className="text-sm text-gray-600 mt-4 text-center">
                  <strong>Trust Layer Architecture:</strong> The Trust Layer sits between human experience and AI
                  systems, mediating technical capability with human needs through explainability, recovery,
                  accessibility, and human control.
                </p>
              </div>

              {/* Diagram 2: Responsible AI vs Trust by Design */}
              <div className="rounded-2xl overflow-hidden bg-white shadow-lg p-4 sm:p-8">
                <ResponsibleAIComparison />
                <p className="text-sm text-gray-600 mt-4 text-center">
                  <strong>Complementary Approaches:</strong> Responsible AI ensures technical excellence at the model
                  and system level. Trust by Design ensures human and organizational trustworthiness at the experience
                  level.
                </p>
              </div>

              {/* Diagram 3: Cross-Domain Applicability Matrix */}
              <div className="hidden sm:block rounded-2xl overflow-hidden bg-white shadow-lg p-4 sm:p-8">
                <CrossDomainMatrix />
                <p className="text-sm text-gray-600 mt-4 text-center">
                  <strong>Cross-Domain Applicability:</strong> The same Trust Layer principles apply across finance,
                  health, education, cybersecurity, and public sector—demonstrating universal need for understandable,
                  recoverable, accessible AI systems.
                </p>
              </div>

              {/* Diagram 4: Trust Failure Journey */}
              <div className="rounded-2xl overflow-hidden bg-white shadow-lg p-4 sm:p-8">
                <TrustFailureJourney />
                <p className="text-sm text-gray-600 mt-4 text-center leading-relaxed">
                  <strong>Trust Failure vs Trust Layer:</strong> Without the Trust Layer, AI systems create confusion,
                  helpdesk escalation, and loss of trust. With the Trust Layer, users receive explanation, recovery
                  paths, and human support—preserving trust and reducing operational costs.
                </p>
              </div>

              {/* Diagram 5: Governance & Delivery Flow */}
              <div className="rounded-2xl overflow-hidden bg-white shadow-lg p-4 sm:p-8">
                <GovernanceFlowDiagram />
                <p className="text-sm text-gray-600 mt-4 text-center leading-relaxed">
                  <strong>Governance & Delivery Flow:</strong> The Trust Layer intervenes at every stage of the AI
                  lifecycle — embedding transparency, accessibility, recovery, and human control from strategy through
                  continuous improvement.
                </p>
              </div>
            </div>
          ) : resolvedSlug === "digital-identity-services" ? (
            <div className="grid grid-cols-1 gap-6">
              {/* Visual Component A: Accessibility Process Diagram */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Accessibility embedded from research to certification
                  </h3>
                  <svg viewBox="0 0 1000 200" className="w-full h-auto">
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
                      <h4 className="font-bold text-gray-900 mb-2 truncate">Understandable</h4>
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
                          "The vehicle registration certificate (registration certificate part I) must be carried on all
                          journeys according to §11 FZV and handed over to authorized persons on request."
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

                  <div className="mt-8 pt-8 border-t border-blue-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Dynamic Content Architecture</h4>
                    <p className="text-sm text-gray-700 mb-6 text-center max-w-2xl mx-auto leading-relaxed">
                      The modular screen system enables content teams to collaborate on individual text elements with
                      subject matter experts and legal reviewers independently, while maintaining a centralized view of
                      the complete user journey for flow validation and accessibility testing.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Neurodiversity</h3>
                  <p className="text-base text-gray-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
                    The assistant breaks down complex interactions into small, manageable decisions, helping users find
                    and understand the controls they need—even in high-stress situations like police encounters. Users
                    can dismiss the assistant at any time to access the full, comprehensive interface directly if they
                    prefer.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Accessibility Assistant Flow</h4>
                  <div className="flex justify-center mb-6">
                    <svg viewBox="0 0 800 300" className="w-full max-w-4xl h-auto">
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

                  <div className="mt-8">
                    <Image
                      src="/images/image-204.png"
                      alt="Mobile screens showing AI assistant asking for user preference in German and English"
                      width={1400}
                      height={700}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </section>

              {/* Visual Component E: Accessibility + Cybersecurity */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-slate-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Security without exclusion</h3>
                  <svg viewBox="0 0 900 200" className="w-full h-auto">
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

              {/* Microsoft Accessibility Principles */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Icons.Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">Beyond Technical Compliance</h2>
                    <p className="text-sm text-muted-foreground">
                      Accessibility isn't just screen readers, keyboard control, and BITV examination points—it's
                      designing for the full spectrum of human diversity
                    </p>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-blue-100 rounded-xl border-l-4 border-blue-600">
                  <p className="text-sm text-gray-800 leading-relaxed font-medium">
                    "We didn't just pass 98 BITV audit points. We designed for real people: the 85-year-old using a
                    smartphone for the first time, the dyslexic citizen navigating legal language, the wheelchair user
                    verifying their identity at a traffic stop. Accessibility is independence, dignity, and trust."
                  </p>
                </div>

                {/* Microsoft's 3 Inclusive Design Principles */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Microsoft Inclusive Design Principles
                  </h3>

                  <img
                    src="/images/image.png"
                    alt="Microsoft's three inclusive design principles: Recognize exclusion (person in wheelchair), Learn from diversity (diverse group of people), Solve for one extend to many (person with cane)"
                    className="w-full max-w-4xl mx-auto mb-6"
                  />

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-purple-200">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Recognize exclusion</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We acknowledge bias and recognize exclusions that happen because of mismatches between people
                        and experience. Our research with disability organizations revealed countless invisible
                        barriers.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-purple-200">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Learn from diversity</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Inclusive Design puts people in the center throughout the process. Their fresh, diverse
                        perspectives are the key to true insight. We co-created with users across all ability spectrums.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-purple-200">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Solve for one, extend to many</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Everyone has abilities and limits. Creating products for people with permanent disabilities
                        creates results that benefit everyone. Our Easy Language feature helps all users.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="https://inclusive.microsoft.design/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    >
                      <Icons.ExternalLink className="w-4 h-4" />
                      Microsoft Inclusive Design
                    </a>
                    <a
                      href="https://inclusive.microsoft.design/tools-and-activities/Inclusive101Guidebook.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-medium border-2 border-purple-600 hover:bg-purple-50 transition-colors"
                    >
                      <Icons.FileText className="w-4 h-4" />
                      Inclusive 101 Guidebook (PDF)
                    </a>
                  </div>
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

        {/* Impact */}
        <section className="mb-12">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-primary/20 p-3 rounded-xl flex-shrink-0">
              <Icons.TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              {"keyMetrics" in caseStudy ? "Success by Numbers" : "Impact & Results"}
            </h2>
          </div>
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
                            // Remove ** and style in primary color
                            const text = part.slice(2, -2)
                            return (
                              <span key={i} className="font-semibold text-primary">
                                {text}
                              </span>
                            )
                          }
                          // Regular text in standard black
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
        </section>

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
      </article>
    </div>
  )
}
