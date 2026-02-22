"use client"

import { useEffect } from "react"

export function ScrollToTopOnMount() {
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, []) // Empty dependency array means this runs only on mount

  return null
}

export function RememberHomeScroll() {
  useEffect(() => {
    // Restore scroll position when returning to homepage, unless there's a hash
    const savedPosition = sessionStorage.getItem("homeScrollPosition")

    if (!window.location.hash && savedPosition) {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, Number.parseInt(savedPosition, 10))
      }, 0)
    }

    // Save scroll position before navigating away
    const handleScroll = () => {
      sessionStorage.setItem("homeScrollPosition", window.scrollY.toString())
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}
