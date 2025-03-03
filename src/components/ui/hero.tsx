import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, Zap, Sparkles, Shield, CheckCircle } from "lucide-react";

interface HeroProps {
  badge?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  className?: string;
  children?: React.ReactNode;
  testimonials?: Array<{
    name: string;
    quote: string;
  }>;
}

export function Hero({
  badge,
  title,
  description,
  image = "/images/hero-image.jpg",
  imageAlt = "Hero image",
  primaryAction,
  secondaryAction,
  className,
  children,
  testimonials,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden py-16 md:py-24 min-h-[90vh] flex items-center justify-center bg-black text-white", className)}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-[#fddb24]/10 via-transparent to-transparent"></div>
        
        {/* Animated light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#fddb24] via-[#fddb24]/20 to-transparent opacity-60"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#fddb24] via-[#fddb24]/20 to-transparent opacity-80"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#fddb24] via-[#fddb24]/20 to-transparent opacity-60"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3 items-center">
          {/* Left testimonials */}
          <div className="hidden lg:flex flex-col space-y-12 items-end text-right">
            <div className="max-w-xs">
              <div className="text-[#fddb24] font-semibold mb-1">Faith</div>
              <div className="flex justify-end mb-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fddb24] text-[#fddb24]" />
                ))}
              </div>
              <p className="text-white/80 text-sm italic">
                "The pain is nothing compared to getting a new tattoo."
              </p>
            </div>
            
            <div className="max-w-xs">
              <div className="text-[#fddb24] font-semibold mb-1">Stephen</div>
              <div className="flex justify-end mb-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fddb24] text-[#fddb24]" />
                ))}
              </div>
              <p className="text-white/80 text-sm italic">
                "It feels good to see my tattoo fading away after each treatment."
              </p>
            </div>
          </div>
          
          {/* Center content */}
          <div className="text-center lg:col-span-1 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              <div className="text-white">LET</div>
              <div className="text-gray-400">YOUR SKIN</div>
              <div className="text-[#fddb24]">SHINE</div>
              <div className="text-white">AGAIN</div>
            </h1>
            
            {/* Benefits icons - larger size */}
            <div className="grid grid-cols-2 gap-6 my-10 w-full max-w-md">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#fddb24]/10 flex items-center justify-center mb-3 transition-all duration-300 hover:bg-[#fddb24]/20">
                  <Zap className="w-10 h-10 text-[#fddb24]" />
                </div>
                <p className="text-base font-medium text-white">Fast Results</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#fddb24]/10 flex items-center justify-center mb-3 transition-all duration-300 hover:bg-[#fddb24]/20">
                  <Shield className="w-10 h-10 text-[#fddb24]" />
                </div>
                <p className="text-base font-medium text-white">Safe Process</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#fddb24]/10 flex items-center justify-center mb-3 transition-all duration-300 hover:bg-[#fddb24]/20">
                  <Sparkles className="w-10 h-10 text-[#fddb24]" />
                </div>
                <p className="text-base font-medium text-white">Expert Care</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#fddb24]/10 flex items-center justify-center mb-3 transition-all duration-300 hover:bg-[#fddb24]/20">
                  <CheckCircle className="w-10 h-10 text-[#fddb24]" />
                </div>
                <p className="text-base font-medium text-white">Guaranteed</p>
              </div>
            </div>
            
            {(primaryAction || secondaryAction) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                {primaryAction && (
                  <Button asChild size="lg" className="bg-[#fddb24] text-black hover:bg-[#fddb24]/90 text-base font-medium px-8 py-6 h-auto">
                    <a href={primaryAction.href}>{primaryAction.text}</a>
                  </Button>
                )}
                {secondaryAction && (
                  <Button asChild variant="outline" size="lg" className="border-[#fddb24] text-[#fddb24] hover:bg-[#fddb24]/10 text-base font-medium px-8 py-6 h-auto">
                    <a href={secondaryAction.href}>{secondaryAction.text}</a>
                  </Button>
                )}
              </div>
            )}
          </div>
          
          {/* Right testimonials */}
          <div className="hidden lg:flex flex-col space-y-12 items-start text-left">
            <div className="max-w-xs">
              <div className="text-[#fddb24] font-semibold mb-1">Gabriel</div>
              <div className="flex justify-start mb-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fddb24] text-[#fddb24]" />
                ))}
              </div>
              <p className="text-white/80 text-sm italic">
                "The service is great. Trustful, fast and very professional."
              </p>
            </div>
            
            <div className="max-w-xs">
              <div className="text-[#fddb24] font-semibold mb-1">Isabelle</div>
              <div className="flex justify-start mb-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fddb24] text-[#fddb24]" />
                ))}
              </div>
              <p className="text-white/80 text-sm italic">
                "Only a few sessions and my tattoo is nearly gone. I couldn't be happier with the results."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
