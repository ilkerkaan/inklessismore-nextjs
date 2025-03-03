import Image from "next/image";
import { MainLayout } from "@/components/layout/main-layout";

export const metadata = {
  title: "About Us | Inkless Is More",
  description: "Learn about Inkless Is More, Nairobi&apos;s premier laser tattoo removal studio and our commitment to providing exceptional service.",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About Inkless Is More</h1>
          <p className="text-muted-foreground md:text-lg mb-8">
            Inkless Is More is Nairobi&apos;s premier laser tattoo removal studio, dedicated to helping clients achieve their desired results with the latest technology and expert care.
          </p>
          
          {/* Placeholder for about page content */}
          <div className="space-y-8">
            <p>
              Our studio was founded with a simple mission: to provide safe, effective tattoo removal services in a comfortable, professional environment. We understand that people&apos;s relationships with their tattoos can change over time, and we&apos;re here to help when you&apos;re ready for a change.
            </p>
            
            <div className="aspect-video relative rounded-lg overflow-hidden my-8">
              <Image 
                src="/images/hero-image.jpg" 
                alt="Inkless Is More Studio" 
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <h2 className="text-2xl font-bold tracking-tight">Our Approach</h2>
            <p>
              At Inkless Is More, we take a personalized approach to tattoo removal. We understand that every tattoo and every client is unique, which is why we create customized treatment plans tailored to your specific needs and goals.
            </p>
            
            <h2 className="text-2xl font-bold tracking-tight">Our Technology</h2>
            <p>
              We use the advanced PicosureⓇ laser technology, which delivers ultra-short pulses of energy to the tattoo ink. This technology can effectively treat a wider range of ink colors and is often able to remove tattoos with fewer treatments compared to traditional lasers.
            </p>
            
            <h2 className="text-2xl font-bold tracking-tight">Our Team</h2>
            <p>
              Our team of certified technicians has extensive experience in laser tattoo removal procedures. We&apos;re committed to ongoing education and training to ensure we&apos;re always providing the best possible care using the latest techniques.
            </p>
            
            <h2 className="text-2xl font-bold tracking-tight">Our Promise</h2>
            <p>
              We promise to provide honest, transparent information about what you can expect from your tattoo removal journey. We&apos;ll work with you every step of the way to ensure you&apos;re comfortable and informed throughout the process.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
