"use client"

import React from "react"
import { MainLayout } from "@/components/layout/main-layout"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const faqCategories = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        question: "What is laser tattoo removal?",
        answer: "Laser tattoo removal is a non-invasive procedure that uses laser energy to break down tattoo ink particles into smaller fragments. These fragments are then naturally eliminated by your body&apos;s immune system over time."
      },
      {
        question: "Is laser tattoo removal painful?",
        answer: "Most clients describe the sensation as similar to having a rubber band snapped against the skin. We use cooling techniques to minimize discomfort, and many clients find our PicosureⓇ laser technology to be less painful than older laser methods."
      },
      {
        question: "How many sessions will I need?",
        answer: "The number of sessions varies depending on factors such as tattoo size, ink colors, ink density, location on the body, and your skin type. On average, most tattoos require 6-12 sessions, spaced 6-8 weeks apart. During your consultation, we&apos;ll provide a more personalized estimate."
      },
      {
        question: "How much does tattoo removal cost?",
        answer: "The cost depends on the size and complexity of your tattoo. We offer free consultations where we assess your tattoo and provide a detailed quote. We also offer package pricing and payment plans to make treatment more affordable."
      },
      {
        question: "Are there any side effects?",
        answer: "Common side effects include temporary redness, swelling, blistering, and scabbing. These typically resolve within a few days to a week. More serious side effects are rare when the procedure is performed by trained professionals like our team."
      }
    ]
  },
  {
    id: "procedure",
    label: "Procedure",
    questions: [
      {
        question: "How does the PicosureⓇ laser technology work?",
        answer: "PicosureⓇ uses ultra-short pulse durations (measured in picoseconds) to shatter tattoo ink into tiny particles without causing excessive heat damage to surrounding tissue. This allows for more effective ink removal with less discomfort and faster healing times."
      },
      {
        question: "How long does each session take?",
        answer: "The actual laser treatment typically takes 5-30 minutes depending on the size of the tattoo. However, you should plan for your appointment to last about 45-60 minutes to allow for preparation and aftercare instructions."
      },
      {
        question: "What colors of ink can be removed?",
        answer: "Our PicosureⓇ technology is effective on a wide range of colors, including traditionally difficult colors like blue and green. Black, red, and dark blue typically respond best to treatment. Colors like yellow, orange, and fluorescent inks may be more challenging but can still show significant fading."
      },
      {
        question: "Can all tattoos be completely removed?",
        answer: "While our advanced technology can significantly fade most tattoos, complete removal cannot be guaranteed for every tattoo. Factors such as ink type, depth, and your body&apos;s immune response affect the final results. During your consultation, we&apos;ll provide a realistic assessment of what you can expect."
      },
      {
        question: "What areas of the body can be treated?",
        answer: "We can treat tattoos on virtually any area of the body. However, areas with thinner skin (like ankles, fingers, and wrists) may be more sensitive during treatment and might require more careful aftercare."
      }
    ]
  },
  {
    id: "aftercare",
    label: "Aftercare",
    questions: [
      {
        question: "What aftercare is required?",
        answer: "After each session, you&apos;ll need to keep the area clean and moisturized. We recommend applying an antibiotic ointment and covering the area with a bandage for the first 24 hours. Avoid sun exposure, swimming, and strenuous exercise for at least 48 hours. We&apos;ll provide detailed aftercare instructions after each treatment."
      },
      {
        question: "How long is the recovery period?",
        answer: "Most clients can return to normal activities immediately, though the treated area may be red and sensitive for a few days. Complete healing typically occurs within 1-2 weeks, depending on the size and location of the tattoo and your body&apos;s healing response."
      },
      {
        question: "Can I shower after the treatment?",
        answer: "Yes, you can shower 2 hours after treatment, but avoid hot water directly on the treated area for the first 48 hours. Gently pat the area dry rather than rubbing it, and apply the recommended aftercare products afterward."
      },
      {
        question: "Should I avoid sun exposure?",
        answer: "Yes, it&apos;s crucial to protect the treated area from sun exposure before and after treatments. Sun exposure can make your skin more sensitive to the laser and may increase the risk of side effects or complications. Use SPF 30+ sunscreen on the area whenever it&apos;s exposed to the sun."
      },
      {
        question: "What should I do if I experience blistering?",
        answer: "Blistering is a normal reaction for some people. If blisters form, do not pop them as this increases infection risk. Keep the area clean and continue with the recommended aftercare. If you have concerns about your healing process, please contact us for guidance."
      }
    ]
  },
  {
    id: "booking",
    label: "Booking",
    questions: [
      {
        question: "How do I book an appointment?",
        answer: "You can book an appointment through our online booking system on this website, by calling us at +254 712 345 678, or by emailing info@inklessismore.com. We recommend starting with a free consultation to assess your tattoo and discuss treatment options."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer free consultations to assess your tattoo, discuss your goals, and create a personalized treatment plan. During the consultation, we&apos;ll also provide information about the procedure, aftercare, and pricing."
      },
      {
        question: "What is your cancellation policy?",
        answer: "We request at least 24 hours&apos; notice for cancellations or rescheduling. Late cancellations or no-shows may incur a fee. We understand that emergencies happen, so please contact us as soon as possible if you need to change your appointment."
      },
      {
        question: "How far apart should I schedule my sessions?",
        answer: "We typically recommend spacing sessions 6-8 weeks apart to allow your body sufficient time to eliminate the broken-down ink particles and for your skin to heal completely. For some clients with faster healing, we may recommend 4-6 weeks between sessions."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer various payment plans to make tattoo removal more affordable. We also offer package discounts when you purchase multiple sessions upfront. Please ask about our current payment options during your consultation."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <MainLayout>
      <Section>
        <SectionHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about our tattoo removal services, procedures, and aftercare."
        />
        
        <Tabs defaultValue="general" className="mt-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {faqCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {faqCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
      
      <Section variant="muted">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            If you couldn&apos;t find the answer to your question, feel free to contact us directly. Our team is always happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <a href="/contact">
                Contact Us
              </a>
            </Button>
            <Button asChild>
              <a href="/book">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
