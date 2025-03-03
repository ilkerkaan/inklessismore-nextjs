import React from "react";
import Image from "next/image";
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/ui/hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PricingCard, PricingGrid } from "@/components/ui/pricing-card";
import { TestimonialGrid } from "@/components/ui/testimonial";
import { ArrowRight, Check } from "lucide-react";

const features = [
  {
    icon: <Check className="h-6 w-6" />,
    title: "Advanced Technology",
    description: "Our PicosureⓇ laser technology provides faster clearing with fewer treatments and less discomfort.",
    href: "/services/tattoo-removal",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Expert Technicians",
    description: "Our certified technicians have years of experience in laser tattoo removal procedures.",
    href: "/about",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Convenient Booking",
    description: "Easy online booking system with flexible scheduling options to fit your busy lifestyle.",
    href: "/book",
  },
];

const testimonials = [
  {
    quote: "I was nervous about getting my tattoo removed, but the team at Inkless Is More made the process so comfortable. The results exceeded my expectations!",
    author: "Faith",
    rating: 5,
    imageSrc: "/images/before-after-1.jpg",
  },
  {
    quote: "After just 3 sessions, my tattoo was significantly lighter. The staff is professional and the facility is clean and modern.",
    author: "Gabriel",
    rating: 5,
    imageSrc: "/images/before-after-2.jpg",
  },
  {
    quote: "The PicosureⓇ technology they use is amazing! Much less painful than I expected and faster results than my previous removal attempts elsewhere.",
    author: "Isabelle",
    rating: 5,
    imageSrc: "/images/before-after-3.jpg",
  },
  {
    quote: "It feels good to see my tattoo fading away after each treatment. The process was much easier than I expected.",
    author: "Stephen",
    rating: 5,
    imageSrc: "/images/before-after-1.jpg",
  },
];

const pricing = [
  {
    title: "Single Session",
    price: "KSh 6,000",
    description: "Perfect for small tattoos or touch-ups",
    features: [
      "One treatment session",
      "Aftercare kit included",
      "Free follow-up consultation",
      "Valid for 3 months"
    ],
    buttonText: "Book Now",
    buttonHref: "/book",
    imageSrc: "/images/1-session.jpg"
  },
  {
    title: "3 Session Package",
    price: "KSh 15,000",
    description: "Most popular for medium-sized tattoos",
    features: [
      "Three treatment sessions",
      "15% savings compared to single sessions",
      "Aftercare kit included",
      "Free follow-up consultations",
      "Valid for 12 months"
    ],
    buttonText: "Book Now",
    buttonHref: "/book",
    popular: true,
    imageSrc: "/images/3-sessions.jpg"
  },
  {
    title: "5 Session Package",
    price: "KSh 22,500",
    description: "Recommended for larger or colorful tattoos",
    features: [
      "Five treatment sessions",
      "25% savings compared to single sessions",
      "Premium aftercare kit",
      "Priority scheduling",
      "Free follow-up consultations",
      "Valid for 18 months"
    ],
    buttonText: "Book Now",
    buttonHref: "/book",
    imageSrc: "/images/5-sessions.jpg"
  }
];

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero
        primaryAction={{
          text: "Book a Free Consultation",
          href: "/book"
        }}
        secondaryAction={{
          text: "View Our Services",
          href: "/services"
        }}
      />

      {/* Features Section */}
      <Section>
        <SectionHeader
          title="Why Choose Inkless Is More"
          description="We combine cutting-edge technology with expert care to deliver the best tattoo removal experience in Nairobi."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className={index === 0 ? "bg-primary/10" : ""}>
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Button asChild size="sm" variant="outline">
                  <a href={feature.href}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Before and After Gallery */}
      <Section>
        <SectionHeader
          title="Real Results"
          description="See the amazing transformations our clients have experienced with our advanced tattoo removal technology."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="relative overflow-hidden rounded-xl group">
            <Image 
              src="/images/before-after-1.jpg" 
              alt="Before and After Tattoo Removal" 
              width={400} 
              height={300}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <p className="font-semibold">After 3 Sessions</p>
                <p className="text-sm opacity-80">Black ink tattoo on forearm</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl group">
            <Image 
              src="/images/before-after-2.jpg" 
              alt="Before and After Tattoo Removal" 
              width={400} 
              height={300}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <p className="font-semibold">After 5 Sessions</p>
                <p className="text-sm opacity-80">Colored tattoo on shoulder</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl group">
            <Image 
              src="/images/before-after-3.jpg" 
              alt="Before and After Tattoo Removal" 
              width={400} 
              height={300}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <p className="font-semibold">After 4 Sessions</p>
                <p className="text-sm opacity-80">Black and red ink on wrist</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section variant="primary">
        <SectionHeader
          title="Our Tattoo Removal Process"
          description="We've simplified the tattoo removal process to make it as comfortable and effective as possible."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-4 mt-12 max-w-5xl mx-auto">
          {[
            {
              number: "01",
              title: "Free Consultation",
              description: "Meet with our experts to assess your tattoo and create a personalized treatment plan."
            },
            {
              number: "02",
              title: "Treatment Session",
              description: "Experience our advanced PicosureⓇ laser technology with minimal discomfort."
            },
            {
              number: "03",
              title: "Aftercare",
              description: "Follow our detailed aftercare instructions to ensure optimal healing between sessions."
            },
            {
              number: "04",
              title: "Follow-up Sessions",
              description: "Complete your recommended treatment plan with follow-up sessions spaced 6-8 weeks apart."
            }
          ].map((step, index) => (
            <div key={index} className="relative bg-background p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-primary -z-10">
                  <div className="absolute top-1/2 left-full -translate-y-1/2 h-3 w-3 rounded-full bg-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Section */}
      <Section>
        <SectionHeader
          title="Transparent Pricing"
          description="We offer competitive pricing with no hidden fees. Choose the package that best suits your needs."
          align="center"
        />
        <PricingGrid pricing={pricing} className="max-w-5xl mx-auto" />
      </Section>

      {/* Testimonials Section */}
      <Section variant="muted">
        <SectionHeader
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our clients have to say about their experience with Inkless Is More."
          align="center"
        />
        <TestimonialGrid testimonials={testimonials.slice(0, 3)} />
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <a href="/testimonials">View All Testimonials</a>
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Ready to Start Your Tattoo Removal Journey?
            </h2>
            <p className="text-muted-foreground md:text-lg mb-6">
              Book a free consultation today and take the first step towards tattoo-free skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="/book">Book a Free Consultation</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/services">View Our Services</a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold">Expert Technicians</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Our certified technicians have years of experience in laser tattoo removal.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold">Advanced Technology</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We use the latest PicosureⓇ technology for optimal results.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold">Comfortable Experience</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We prioritize your comfort throughout the entire process.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold">Satisfaction Guarantee</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We're committed to your satisfaction and results.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
