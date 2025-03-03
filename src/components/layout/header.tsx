"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl md:text-2xl">
              <span className="text-[#fddb24]">INKLESS</span> <span>IS MORE</span>
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-[#fddb24]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#fddb24]"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#fddb24]"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#fddb24]"
          >
            Testimonials
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#fddb24]"
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="bg-[#fddb24] text-black hover:bg-[#fddb24]/90">
            <Link href="/book">Book Now</Link>
          </Button>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#fddb24] ml-4 mr-2"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
