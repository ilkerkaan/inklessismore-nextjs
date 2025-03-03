"use client"

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TestimonialCard, TestimonialGrid } from "@/components/ui/testimonial";
import { ArrowRight, Star } from "lucide-react"

const testimonialCategories = [
  {
    id: "all",
    label: "All Testimonials",
  },
  {
    id: "tattoo-removal",
    label: "Tattoo Removal",
  },
  {
    id: "cover-up-prep",
    label: "Cover-Up Prep",
  },
  {
    id: "scar-revision",
    label: "Scar Revision",
  },
]

const allTestimonials = [
  {
    quote: "I was nervous about getting my tattoo removed, but the team at Inkless Is More made the process so comfortable. The results exceeded my expectations!",
    author: "Sarah M.",
    role: "Tattoo Removal Client",
    rating: 5,
    imageSrc: "/images/before-after-1.jpg",
    category: "tattoo-removal",
    featured: true,
  },
  {
    quote: "After just 3 sessions, my tattoo was significantly lighter. The staff is professional and the facility is clean and modern.",
    author: "David K.",
    role: "Tattoo Removal Client",
    rating: 5,
    imageSrc: "/images/before-after-2.jpg",
    category: "tattoo-removal",
    featured: true,
  },
  {
    quote: "The PicosureⓇ technology they use is amazing! Much less painful than I expected and faster results than my previous removal attempts elsewhere.",
    author: "Michelle T.",
    role: "Tattoo Removal Client",
    rating: 4,
    imageSrc: "/images/before-after-3.jpg",
    category: "tattoo-removal",
    featured: true,
  },
  {
    quote: "I wanted to lighten my old tattoo for a cover-up, and Inkless Is More helped me achieve exactly what I needed. My tattoo artist was impressed with how well it was prepared.",
    author: "James L.",
    role: "Cover-Up Prep Client",
    rating: 5,
    imageSrc: "/images/before-after-1.jpg",
    category: "cover-up-prep",
    featured: false,
  },
  {
    quote: "The team was honest about what results I could expect, which I really appreciated. No false promises, just great results and excellent service.",
    author: "Amina J.",
    role: "Tattoo Removal Client",
    rating: 5,
    imageSrc: "/images/before-after-2.jpg",
    category: "tattoo-removal",
    featured: false,
  },
  {
    quote: "I had a tattoo that left some scarring, and their combined approach of tattoo removal and scar revision made a huge difference. Very happy with the results.",
    author: "Thomas R.",
    role: "Scar Revision Client",
    rating: 5,
    imageSrc: "/images/before-after-3.jpg",
    category: "scar-revision",
    featured: false,
  },
  {
    quote: "The booking process was so easy, and they were flexible with scheduling when I needed to change my appointment. Great customer service!",
    author: "Lisa M.",
    role: "Tattoo Removal Client",
    rating: 4,
    imageSrc: "/images/before-after-1.jpg",
    category: "tattoo-removal",
    featured: false,
  },
  {
    quote: "I was preparing my arm for a sleeve cover-up, and the team helped me fade the old tattoos just enough for my artist to work with. Perfect result!",
    author: "Daniel O.",
    role: "Cover-Up Prep Client",
    rating: 5,
    imageSrc: "/images/before-after-2.jpg",
    category: "cover-up-prep",
    featured: false,
  },
  {
    quote: "The scar revision treatment was excellent. Not only did they remove the tattoo, but they also improved the texture of my skin where I had scarring.",
    author: "Priya K.",
    role: "Scar Revision Client",
    rating: 5,
    imageSrc: "/images/before-after-3.jpg",
    category: "scar-revision",
    featured: false,
  },
]

export default function TestimonialsPage() {
  return (
    <MainLayout>
      <Section>
        <SectionHeader
          title="Client Testimonials"
          description="Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience with Inkless Is More."
        />
        
        {/* Featured Testimonials */}
        <div className="mt-12 mb-16">
          <h3 className="text-xl font-bold mb-6">Featured Testimonials</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {allTestimonials
              .filter(testimonial => testimonial.featured)
              .slice(0, 3)
              .map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                  imageSrc={testimonial.imageSrc}
                  category={testimonial.category}
                />
              ))}
          </div>
        </div>
        
        {/* All Testimonials by Category */}
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {testimonialCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all">
            <TestimonialGrid testimonials={allTestimonials} columns={3} />
          </TabsContent>
          
          {testimonialCategories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <TestimonialGrid 
                testimonials={allTestimonials.filter(t => t.category === category.id)} 
                columns={3} 
              />
            </TabsContent>
          ))}
        </Tabs>
      </Section>
      
      {/* Video Testimonial Section */}
      <Section variant="muted">
        <SectionHeader
          title="Video Testimonials"
          description="Watch real clients share their tattoo removal journey with Inkless Is More."
        />
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden border border-border">
              <div className="aspect-video relative bg-muted">
                {/* Replace with actual video embed */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">Video Testimonial {index}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-primary fill-primary"
                    />
                  ))}
                </div>
                <h3 className="font-bold mb-1">Client Name {index}</h3>
                <p className="text-sm text-muted-foreground">
                  &quot;Brief quote from the video testimonial that highlights the client&apos;s experience.&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Share Your Story CTA */}
      <Section>
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Had a great experience with Inkless Is More? We&apos;d love to hear about it! Share your testimonial and help others who are considering tattoo removal.
          </p>
          <Button asChild size="lg">
            <a href="/contact?subject=My%20Testimonial">
              Submit Your Testimonial <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Section>
    </MainLayout>
  )
}
