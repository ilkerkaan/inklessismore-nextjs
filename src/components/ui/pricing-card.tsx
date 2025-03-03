"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  price: string
  period?: string
  features: string[]
  buttonText?: string
  buttonHref?: string
  popular?: boolean
  variant?: "default" | "primary" | "outline"
  imageSrc?: string
}

export function PricingCard({
  title,
  description,
  price,
  period,
  features,
  buttonText = "Get Started",
  buttonHref = "/book",
  popular = false,
  variant = "default",
  imageSrc,
  className,
  ...props
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg relative overflow-hidden",
        variant === "default" && "bg-background border border-border",
        variant === "primary" && "bg-primary/10 border border-primary/20",
        variant === "outline" && "border-2 border-primary",
        popular && "shadow-lg scale-[1.02]",
        className
      )}
      {...props}
    >
      {imageSrc && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
      )}
      
      <div className="p-6">
        {popular && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
            Most Popular
          </div>
        )}
        
        <div className="mb-5">
          <h3 className="text-xl font-bold">{title}</h3>
          {description && (
            <p className="text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        
        <div className="mb-5">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{price}</span>
            {period && (
              <span className="text-muted-foreground ml-1">/{period}</span>
            )}
          </div>
        </div>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="rounded-full p-1 mr-2 mt-0.5 bg-primary/10 text-primary">
                <Check className="h-4 w-4" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          asChild
          className={cn(
            popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
          )}
          variant={popular ? "default" : "outline"}
          size="lg"
        >
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  )
}

interface PricingGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  pricing?: PricingCardProps[];
}

export function PricingGrid({
  children,
  pricing,
  className,
  ...props
}: PricingGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1",
        className
      )}
      {...props}
    >
      {children}
      {pricing && pricing.map((plan, index) => (
        <PricingCard
          key={index}
          title={plan.title}
          description={plan.description}
          price={plan.price}
          period={plan.period}
          features={plan.features}
          buttonText={plan.buttonText}
          buttonHref={plan.buttonHref}
          popular={plan.popular}
          imageSrc={plan.imageSrc}
          variant={plan.popular ? "primary" : "default"}
        />
      ))}
    </div>
  );
}
