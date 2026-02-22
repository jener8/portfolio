import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function renderTextWithBullets(text: string) {
  // Split by double newlines to get paragraphs and bullet sections
  const sections = text.split("\n\n")

  return sections.map((section, index) => {
    // Check if this section contains bullets
    if (section.trim().startsWith("•")) {
      // Split into individual bullet points
      const bullets = section.split("\n").filter((item) => item.trim().startsWith("•"))
      return (
        <ul key={index} className="space-y-2 mb-4">
          {bullets.map((bullet, bIndex) => {
            // Remove the bullet character and trim
            const text = bullet.replace(/^•\s*/, "").trim()
            // Check for bold text wrapped in **
            const parts = text.split(/(\*\*.*?\*\*)/)
            return (
              <li key={bIndex} className="flex items-start gap-3 text-sm text-card-foreground">
                <span className="text-primary mt-1">•</span>
                <span>
                  {parts.map((part, pIndex) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={pIndex}>{part.slice(2, -2)}</strong>
                    }
                    return part
                  })}
                </span>
              </li>
            )
          })}
        </ul>
      )
    } else {
      // Regular paragraph
      return (
        <p key={index} className="text-sm text-card-foreground leading-relaxed mb-4">
          {section}
        </p>
      )
    }
  })
}
