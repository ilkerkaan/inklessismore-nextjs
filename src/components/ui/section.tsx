"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "muted" | "primary" | "dark"
  container?: boolean
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
}

export function Section({
  variant = "default",
  container = true,
  containerSize = "lg",
  className,
  children,
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
      {container ? (
        <div className={cn(
          "mx-auto px-4 md:px-6",
          containerSize === "sm" && "max-w-screen-sm",
          containerSize === "md" && "max-w-screen-md",
          containerSize === "lg" && "max-w-screen-lg",
          containerSize === "xl" && "max-w-screen-xl",
          containerSize === "full" && "max-w-full",
          "flex flex-col items-center justify-center"
        )}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  align?: "left" | "center" | "right"
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeader({
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
      {...props}
    >
      <h2 
        className={cn(
          "text-3xl font-bold tracking-tighter sm:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p 
          className={cn(
            "mt-4 text-muted-foreground md:text-lg max-w-3xl",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
