/* eslint-disable */
"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

// Lucide React Icons
import { Mail, Phone, MapPin } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ShinyText from "../shineytext";
import GradientText from "../gradianttext";

import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Accessing isSubmitting from formState
  const { isSubmitting } = form.formState;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Your message has been sent successfully!");
      form.reset();
    } catch (error: any) {
      toast.error(
        error.message || "Failed to send your message. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
      {/* Main heading and paragraph for the entire section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
          Get In
          <GradientText
            colors={["#7c3aed", "#6366f1", "#7c3aed", "#6366f1"]}
            animationSpeed={3}
            showBorder={false}
            className="ml-2"
          >
            Touch
          </GradientText>
        </h1>
        <p className="mx-auto max-w-2xl text-lg">
          We'd love to hear from you! Whether you have a question about our
          services, need assistance, or just want to say hello, feel free to
          reach out using the contact information below or by filling out the
          form.
        </p>
      </div>

      <div className="flex flex-col items-start justify-center lg:flex-row lg:space-x-12">
        {/* Left Column: Contact Information */}
        <div className="mb-12 w-full text-center lg:mb-0 lg:w-1/2 lg:text-left">
          <div className="space-y-6">
            {/* Email */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
              <Mail className="h-8 w-8 flex-shrink-0 text-indigo-400" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
              <Phone className="h-8 w-8 flex-shrink-0 text-indigo-400" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
              <MapPin className="h-8 w-8 flex-shrink-0 text-indigo-400" />
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p>123 Main St, Anytown, USA 12345</p>
              </div>
            </div>

            {/* Powered by Resend */}
            <div className="pt-4 text-center lg:text-left">
              <p
                className={`text-2xl text-indigo-400 ${dancingScript.className}`}
              >
                Powered By Resend On The Backend.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormControl>
                      <Input id="name" placeholder="John Doe" {...field} />
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
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="johndoe@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-600" // Added cursor-pointer
                disabled={isSubmitting} // Disable button while submitting
              >
                {/* Conditionally render ShinyText based on isSubmitting */}
                <ShinyText
                  text={isSubmitting ? "Sending..." : "Send Message"}
                  className="text-lg font-semibold"
                  speed={2}
                />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
