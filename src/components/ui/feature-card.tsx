"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description: string
  href?: string
  variant?: "default" | "primary" | "outline"
}

export function FeatureCard({
  icon,
  title,
  description,
  href,
  variant = "default",
  className,
  ...props
}: FeatureCardProps) {
  const CardWrapper = href ? Link : "div"
  const wrapperProps = href ? { href } : {}

  return (
    <CardWrapper
      {...wrapperProps}
      className={cn(
        "flex flex-col p-6 rounded-lg transition-all duration-200",
        variant === "default" && "bg-background border border-border hover:shadow-md hover:border-primary/20",
        variant === "primary" && "bg-primary/10 hover:bg-primary/20",
        variant === "outline" && "border border-primary/20 hover:bg-primary/5",
        href && "cursor-pointer group",
        className
      )}
      {...props}
    >
      {icon && (
        <div className={cn(
          "rounded-full p-3 mb-4 w-12 h-12 flex items-center justify-center",
          variant === "default" && "bg-primary/10 text-primary",
          variant === "primary" && "bg-primary text-primary-foreground",
          variant === "outline" && "border border-primary text-primary",
          href && "group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        )}>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
      {href && (
        <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      )}
    </CardWrapper>
  )
}
