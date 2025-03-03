"use client"

import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  author?: string
  role?: string
  testimonial?: string
  quote?: string
  rating?: number
  imageSrc?: string
  featured?: boolean
  category?: string
  variant?: "default" | "outline"
  className?: string
}

export function Testimonial({
  author,
  quote,
  rating,
  imageSrc,
  variant = "default",
  className,
  ...props
}: TestimonialProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg",
        variant === "default" && "bg-card",
        variant === "outline" && "border border-primary/20",
        className
      )}
      {...props}
    >
      {rating && (
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      )}
      <blockquote className="text-lg font-medium mb-4">&quot;{quote}&quot;</blockquote>
      <div className="flex items-center">
        {imageSrc && (
          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
            <Image
              src={imageSrc}
              alt={author || "Client"}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-medium">{author}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialCard({
  name,
  role,
  testimonial,
  quote,
  rating = 5,
  imageSrc,
  category,
  author,
  ...props
}: TestimonialProps) {
  return (
    <Card className="h-full" {...props}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {imageSrc && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image
                src={imageSrc}
                alt={name || author || "Client"}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h3 className="font-bold">{name || author}</h3>
            {role && <p className="text-sm text-muted-foreground">{role}</p>}
          </div>
        </div>
        
        {rating > 0 && (
          <div className="flex mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        )}
        
        <p className="text-muted-foreground">
          &quot;{testimonial || quote}&quot;
        </p>
        
        {category && (
          <div className="mt-4 pt-4 border-t">
            <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
              {category}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function TestimonialGrid({
  testimonials,
  ...props
}: { testimonials: TestimonialProps[] } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8" {...props}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  )
}
