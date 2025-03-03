"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  badge?: string
  imageSrc: string
  imageAlt: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  imagePosition?: "right" | "left"
  variant?: "default" | "muted" | "primary"
}

export function HeroSection({
  title,
  description,
  badge,
  imageSrc,
  imageAlt,
  primaryButtonText,
  primaryButtonHref = "/",
  secondaryButtonText,
  secondaryButtonHref = "/",
  imagePosition = "right",
  variant = "default",
  className,
  ...props
}: HeroSectionProps) {
  return (
    <section 
      className={cn(
        "py-16 md:py-24",
        variant === "muted" && "bg-muted/50",
        variant === "primary" && "bg-primary/10",
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6">
        <div className={cn(
          "grid gap-6 lg:grid-cols-2 lg:gap-12 items-center",
          imagePosition === "left" && "lg:flex-row-reverse"
        )}>
          <div className="space-y-4">
            {badge && (
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                {badge}
              </div>
            )}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[600px]">
              {description}
            </p>
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {primaryButtonText && (
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href={primaryButtonHref}>
                      {primaryButtonText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {secondaryButtonText && (
                  <Button asChild variant="outline" size="lg">
                    <Link href={secondaryButtonHref}>
                      {secondaryButtonText}
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-10"></div>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
