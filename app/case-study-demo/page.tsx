import { CaseStudyCard } from "@/components/case-study-card"

export default function CaseStudyDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Selected Work</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Case studies showcasing product design, responsible AI, and accessibility excellence
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CaseStudyCard
            title="AI Governance Framework"
            category="Responsible AI"
            description="Designing trustworthy AI systems through comprehensive governance frameworks that balance innovation with ethical considerations and regulatory compliance."
            tags={["AI Ethics", "Risk Assessment", "Policy Design"]}
            imageSrc="/ai-governance-dashboard-interface.jpg"
            href="/case-studies/ai-governance"
          />

          <CaseStudyCard
            title="Accessible Government Services"
            category="Digital Accessibility"
            description="Transforming complex government processes into intuitive, accessible digital experiences that serve all citizens regardless of ability or technical literacy."
            tags={["WCAG AAA", "Inclusive Design", "User Research"]}
            imageSrc="/accessible-government-portal-interface.jpg"
            href="/case-studies/accessible-government"
          />

          <CaseStudyCard
            title="Trust by Design System"
            category="Product Strategy"
            description="Building a comprehensive design system that embeds transparency, accountability, and user control into every interaction across a complex product ecosystem."
            tags={["Design Systems", "UX Strategy", "Trust Architecture"]}
            imageSrc="/design-system-components-layout.jpg"
            href="/case-studies/trust-design-system"
          />

          <CaseStudyCard
            title="Bias Detection in ML Models"
            category="AI Transparency"
            description="Creating tools and processes to identify, measure, and mitigate algorithmic bias in machine learning systems at scale across multiple product verticals."
            tags={["Fairness Testing", "Data Analysis", "Model Audit"]}
            imageSrc="/machine-learning-bias-detection-dashboard.jpg"
            href="/case-studies/bias-detection"
          />
        </div>
      </div>
    </div>
  )
}
