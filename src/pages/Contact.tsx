import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import HeroSection from "@/components/HeroSection";
import heroContact from "@/assets/hero-contact.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again or email us directly.");
    }
  };

  return (
    <main>
      <HeroSection
        backgroundImage={heroContact}
        title="Contact Us"
        subtitle="Get in touch to learn more or sign up for two free weeks of training."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold uppercase tracking-tight">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                          <Input type="email" placeholder="you@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 555-1234" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your goals or ask a question..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full font-semibold uppercase tracking-wider" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold uppercase tracking-tight">
                Get in <span className="text-primary">Touch</span>
              </h2>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <a href="tel:+15103267401" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                    <Phone className="h-5 w-5 text-primary" /> Call Us
                  </a>
                  <a href="mailto:NorcalBoxingClub@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                    <Mail className="h-5 w-5 text-primary" /> NorcalBoxingClub@gmail.com
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=323+W+Texas+St+Fairfield+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
                  >
                    <MapPin className="h-5 w-5 shrink-0 text-primary" /> 323 W Texas St, Fairfield, CA
                  </a>
                </CardContent>
              </Card>

              {/* Map */}
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="NorCal Boxing Club Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.5!2d-122.0394!3d38.2494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sen!2sus&q=323+W+Texas+St,+Fairfield,+CA"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
