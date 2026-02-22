"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Upload } from "lucide-react"

export function DevImageEditor({ children, imageName }: { children: React.ReactNode; imageName?: string }) {
  const [isDevMode, setIsDevMode] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const devMode =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname.includes("v0.dev") ||
        window.location.hostname.includes("v0.app") ||
        window.location.hostname.includes("vercel.app") ||
        window.location.hostname.includes("vusercontent.net"))
    setIsDevMode(devMode)
    console.log("[v0] DevImageEditor initialized, hostname:", window.location.hostname, "isDevMode:", devMode)
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("[v0] File input change triggered")
    const file = e.target.files?.[0]
    if (!file) {
      console.log("[v0] No file selected")
      return
    }

    console.log("[v0] File selected:", file.name, "type:", file.type, "size:", file.size)

    const reader = new FileReader()
    reader.onload = (event) => {
      console.log("[v0] FileReader onload triggered")
      const img = containerRef.current?.querySelector("img")
      console.log("[v0] Found img element:", !!img)

      if (img && event.target?.result) {
        const oldSrc = img.src
        img.src = event.target.result as string
        console.log(`[v0] Image "${imageName || "unnamed"}" src updated from ${oldSrc} to data URL`)
        alert(
          `Image preview updated successfully!\n\nTo save permanently:\n1. Upload your image using code block: \`\`\`png file="public/your-image.png" url="BLOB_URL"\`\`\`\n2. Update the src path in the caseStudiesData object`,
        )
      } else {
        console.log("[v0] Failed to update image - img:", !!img, "result:", !!event.target?.result)
      }
    }
    reader.onerror = (error) => {
      console.error("[v0] FileReader error:", error)
    }
    console.log("[v0] Starting FileReader.readAsDataURL")
    reader.readAsDataURL(file)

    e.target.value = ""
  }

  const handleButtonClick = () => {
    console.log("[v0] Button clicked, triggering file input")
    fileInputRef.current?.click()
  }

  if (!isDevMode) {
    return <>{children}</>
  }

  return (
    <div
      ref={containerRef}
      className="relative inline-block w-full"
      onMouseEnter={() => {
        setIsHovered(true)
        console.log("[v0] Hovering over image:", imageName)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        console.log("[v0] Mouse left image:", imageName)
      }}
    >
      {children}
      {isHovered && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-[9999]">
          <label
            htmlFor={`file-input-${imageName || Math.random()}`}
            className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-2 hover:bg-blue-700 transition-all hover:scale-105"
          >
            <Upload className="w-5 h-5" />
            <span className="text-sm font-semibold">Change Image</span>
            {imageName && <span className="text-xs opacity-75">({imageName})</span>}
          </label>
          <input
            id={`file-input-${imageName || Math.random()}`}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  )
}
