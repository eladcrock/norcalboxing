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
        "service_b42bhuu",
        "template_x4qn63x",
        {
          to_name: "Nor Cal Boxing Club",
          to_email: "info@norcalboxingclub.com",
          reply_to: data.email,
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          message: data.message,
        },
        "JjNuUI3DS14R6QOde"
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

            {/* FORM */}
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-semibold uppercase tracking-wider"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* INFO */}
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold uppercase tracking-tight">
                Get in <span className="text-primary">Touch</span>
              </h2>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <a href="tel:+17077471722" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                    <Phone className="h-5 w-5 text-primary" /> (707) 747-1722
                  </a>

                  <a
                    href="mailto:info@norcalboxingclub.com"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "mailto:info@norcalboxingclub.com";
                    }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Mail className="h-5 w-5 text-primary" /> info@norcalboxingclub.com
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=323+W+Texas+St+Fairfield+CA+94533"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                    323 W Texas St, Fairfield, CA 94533
                  </a>
                </CardContent>
              </Card>

              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Nor Cal Boxing Club Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.962136017277!2d-122.0431355!3d38.2514838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085138f5370d051%3A0xc3f8f906e5d0d829!2s323%20W%20Texas%20St%2C%20Fairfield%2C%20CA%2094533!5e0!3m2!1sen!2sus!4v1715456000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
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