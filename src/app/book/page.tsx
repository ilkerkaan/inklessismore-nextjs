"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "sonner"
import { MainLayout } from "@/components/layout/main-layout"
import { Section, SectionHeader } from "@/components/ui/section"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  date: z.date({
    required_error: "Please select a date for your appointment.",
  }),
  time: z.string({
    required_error: "Please select a time for your appointment.",
  }),
  serviceType: z.string({
    required_error: "Please select a service type.",
  }),
  firstSession: z.boolean().default(false),
  tattooLocation: z.string().min(2, {
    message: "Please describe the location of your tattoo.",
  }),
  tattooSize: z.string({
    required_error: "Please select the approximate size of your tattoo.",
  }),
  tattooAge: z.string().optional(),
  additionalInfo: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
})

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM", "5:00 PM"
]

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)
  const [bookingReference, setBookingReference] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      firstSession: false,
      tattooLocation: "",
      tattooSize: "",
      tattooAge: "",
      additionalInfo: "",
      termsAccepted: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      const reference = "BK" + Math.floor(100000 + Math.random() * 900000)
      setBookingReference(reference)
      setBookingComplete(true)
      setIsSubmitting(false)
    }, 1500)
  }

  if (bookingComplete) {
    return (
      <MainLayout>
        <Section>
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Your appointment has been successfully booked. We&apos;ve sent a confirmation email with all the details.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <p className="text-sm text-muted-foreground mb-2">Booking Reference</p>
              <p className="text-xl font-bold">{bookingReference}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Please save this reference number for your records. If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="outline">
                <a href="/">Return Home</a>
              </Button>
              <Button asChild>
                <a href="/services">Explore Services</a>
              </Button>
            </div>
          </div>
        </Section>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Section>
        <SectionHeader
          title="Book Your Appointment"
          description="Schedule your tattoo removal consultation or treatment session with our expert technicians."
        />
        
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="md:col-span-2">
            <div className="bg-background p-6 rounded-lg border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Appointment Details</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={`w-full pl-3 text-left font-normal ${
                                      !field.value && "text-muted-foreground"
                                    }`}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Select a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => 
                                    date < new Date() || 
                                    date.getDay() === 0 || // Sunday
                                    date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a time slot" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="consultation">Free Consultation</SelectItem>
                              <SelectItem value="tattoo-removal">Tattoo Removal Session</SelectItem>
                              <SelectItem value="follow-up">Follow-up Appointment</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="firstSession"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              This is my first tattoo removal session
                            </FormLabel>
                            <FormDescription>
                              If this is your first session, we&apos;ll need to do a consultation before treatment.
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Tattoo Information</h3>
                    <FormField
                      control={form.control}
                      name="tattooLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tattoo Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Where on your body is the tattoo located?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="tattooSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Approximate Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="extra-small">Extra Small (smaller than a coin)</SelectItem>
                              <SelectItem value="small">Small (business card size)</SelectItem>
                              <SelectItem value="medium">Medium (postcard size)</SelectItem>
                              <SelectItem value="large">Large (hand size)</SelectItem>
                              <SelectItem value="extra-large">Extra Large (larger than hand size)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="tattooAge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tattoo Age (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="How old is your tattoo?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                              <SelectItem value="1-3">1-3 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="5-10">5-10 years</SelectItem>
                              <SelectItem value="more-than-10">More than 10 years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any other details about your tattoo or medical conditions we should know about?" 
                              className="min-h-[100px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms and conditions
                          </FormLabel>
                          <FormDescription>
                            By booking an appointment, you agree to our <a href="/terms" className="text-primary underline">terms and conditions</a> and <a href="/privacy" className="text-primary underline">privacy policy</a>.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Book Appointment"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-muted/50 p-6 rounded-lg sticky top-24">
              <h3 className="font-bold text-lg mb-4">Booking Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">What to Expect</h4>
                  <p className="text-sm text-muted-foreground">
                    Your first visit will include a consultation to assess your tattoo and create a personalized treatment plan.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Preparation</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                    <li>Avoid sun exposure before your appointment</li>
                    <li>Do not apply lotions or creams to the area</li>
                    <li>Wear comfortable clothing that allows easy access to the tattoo</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Cancellation Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Please provide at least 24 hours notice if you need to reschedule or cancel your appointment.
                  </p>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground">
                    If you have any questions or need assistance with booking, please contact us at:
                  </p>
                  <p className="text-sm font-medium mt-2">
                    +254 712 345 678<br />
                    info@inklessismore.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
