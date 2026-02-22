"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface CaseStudyCardProps {
  title: string
  category: string
  description: string
  tags: string[]
  imageSrc: string
  href: string
}

export function CaseStudyCard({ title, category, description, tags, imageSrc, href }: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      className="block group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article
        className={`
          bg-white rounded-2xl overflow-hidden border border-gray-200
          transition-all duration-300 ease-out
          ${isHovered ? "shadow-xl -translate-y-1" : "shadow-md"}
        `}
      >
        {/* Image Section */}
        <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className={`
              w-full h-full object-cover
              transition-transform duration-500 ease-out
              ${isHovered ? "scale-105" : "scale-100"}
            `}
          />
          <div
            className={`
              absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
              transition-opacity duration-300
              ${isHovered ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-6">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-3">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{category}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight text-balance">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-6 leading-relaxed text-pretty">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5 mb-3 sm:mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1.5 sm:p-3 md:p-4 text-[10px] sm:text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Button - Visual Affordance */}
          <div
            className={`
              w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg
              font-semibold text-xs sm:text-sm
              transition-all duration-300
              ${isHovered ? "bg-primary text-white" : "bg-gray-900 text-white"}
            `}
          >
            View Full Case Study
            <ArrowRight
              className={`
                w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300
                ${isHovered ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>
        </div>
      </article>
    </a>
  )
}
