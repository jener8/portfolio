"use client"

import type React from "react"

import { useState } from "react"
import { Pencil, X, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageEditorProps {
  src: string
  alt: string
  className?: string
  onImageChange?: (newSrc: string) => void
}

export function ImageEditor({ src, alt, className, onImageChange }: ImageEditorProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const isDevelopment =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname.includes("v0.dev"))

  // Don't render in production
  if (!isDevelopment) {
    return <img src={uploadedImage || currentSrc || "/placeholder.svg"} alt={alt} className={className} />
  }

  const handleImageClick = () => {
    setIsEditing(true)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string
        setUploadedImage(dataUrl)
        onImageChange?.(dataUrl)
        setIsEditing(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <div className="relative group">
      <img
        src={uploadedImage || currentSrc || "/placeholder.svg"}
        alt={alt}
        className={`${className} ${isEditing ? "ring-2 ring-primary" : ""}`}
      />

      {!isEditing && (
        <button
          onClick={handleImageClick}
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
        >
          <div className="bg-white rounded-lg p-3 shadow-lg flex items-center gap-2">
            <Pencil className="h-5 w-5 text-foreground" />
            <span className="text-sm font-medium text-foreground">Change Image</span>
          </div>
        </button>
      )}

      {isEditing && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg p-6 shadow-xl max-w-md w-full space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Change Image</h3>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-sm font-medium text-foreground mb-2">Click to upload an image</div>
                  <div className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</div>
                  <input id="file-upload" type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
            </div>
            <Button onClick={handleCancel} variant="outline" className="w-full bg-transparent">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
