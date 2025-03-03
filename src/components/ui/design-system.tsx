"use client"

import React from "react"
import { cn } from "@/lib/utils"

// Typography Components
export function Heading1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 
      className={cn(
        "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export function Heading2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
      className={cn(
        "text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function Heading3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 
      className={cn(
        "text-xl font-bold tracking-tight sm:text-2xl",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

export function Paragraph({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(
        "text-base md:text-lg text-muted-foreground leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export function Lead({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(
        "text-lg md:text-xl text-muted-foreground leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export function Subtle({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// Section Components
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "muted" | "primary" | "dark"
}

export function Section({ 
  className, 
  children, 
  variant = "default",
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn(
        "py-16 md:py-24",
        variant === "muted" && "bg-muted/50",
        variant === "primary" && "bg-primary/10",
        variant === "dark" && "bg-secondary text-secondary-foreground",
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  )
}

// Card Components
interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ 
  className, 
  icon, 
  title, 
  description,
  ...props 
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border/50 transition-all hover:shadow-md hover:border-primary/20",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="rounded-full bg-primary/10 p-3 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

// Badge Component
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "secondary" | "destructive"
}

export function Badge({ 
  className, 
  children, 
  variant = "default",
  ...props 
}: BadgeProps) {
  return (
    <div 
      className={cn(
        "inline-block rounded-lg px-3 py-1 text-sm font-medium",
        variant === "default" && "bg-primary/10 text-primary",
        variant === "outline" && "border border-primary/50 text-primary",
        variant === "secondary" && "bg-secondary/10 text-secondary",
        variant === "destructive" && "bg-destructive/10 text-destructive",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Container with max width options
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function Container({ 
  className, 
  children, 
  size = "lg",
  ...props 
}: ContainerProps) {
  return (
    <div 
      className={cn(
        "mx-auto px-4 md:px-6",
        size === "sm" && "max-w-screen-sm",
        size === "md" && "max-w-screen-md",
        size === "lg" && "max-w-screen-lg",
        size === "xl" && "max-w-screen-xl",
        size === "full" && "max-w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
