import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/main-layout";

export const metadata = {
  title: "Services | Inkless Is More",
  description: "Explore our range of tattoo removal services at Inkless Is More, Nairobi&apos;s premier laser tattoo removal studio.",
};

const services = [
  {
    id: "tattoo-removal",
    title: "Tattoo Removal",
    description: "Our primary service uses advanced PicosureⓇ laser technology to safely and effectively remove unwanted tattoos with minimal discomfort and downtime.",
    image: "/images/before-after-1.jpg",
    features: [
      "Advanced PicosureⓇ technology",
      "Effective on all ink colors",
      "Fewer treatments required",
      "Minimal discomfort",
      "Faster healing time",
      "Personalized treatment plans",
    ],
  },
  {
    id: "consultation",
    title: "Free Consultation",
    description: "Start your journey with a comprehensive consultation where we assess your tattoo and create a personalized treatment plan tailored to your specific needs.",
    image: "/images/before-after-2.jpg",
    features: [
      "Tattoo assessment",
      "Treatment plan creation",
      "Cost estimation",
      "Timeline projection",
      "Answering all your questions",
      "No obligation",
    ],
  },
  {
    id: "aftercare",
    title: "Aftercare Support",
    description: "We provide comprehensive aftercare guidance and support to ensure optimal healing and results after each treatment session.",
    image: "/images/before-after-3.jpg",
    features: [
      "Detailed aftercare instructions",
      "Follow-up check-ins",
      "Progress monitoring",
      "Healing product recommendations",
      "24/7 support for concerns",
      "Adjustment of treatment plans as needed",
    ],
  },
];

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="container py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-muted-foreground md:text-lg">
            At Inkless Is More, we offer a range of professional tattoo removal services using the latest technology and techniques to ensure the best possible results for our clients.
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4">
                  <Link href="/book">
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Start Your Tattoo Removal Journey?</h2>
            <p className="text-muted-foreground mb-6">
              Book a consultation today and take the first step towards tattoo-free skin. Our experts will guide you through the entire process.
            </p>
            <Button asChild size="lg">
              <Link href="/book">
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
