import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import HeroSection from "@/components/HeroSection";
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

  const onSubmit = (data: ContactForm) => {
    console.log("Contact form submitted:", data.name, data.email);
    toast.success("Message sent! We'll get back to you soon.");
    form.reset();
  };

  return (
    <main>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch to learn more or sign up for a free trial class."
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
                          <Input type="tel" placeholder="(707) 555-1234" {...field} />
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
                  <Button type="submit" size="lg" className="w-full font-semibold uppercase tracking-wider">
                    Send Message
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
                  <a href="tel:+17075551234" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                    <Phone className="h-5 w-5 text-primary" /> (707) 555-1234
                  </a>
                  <a href="mailto:info@norcalboxing.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                    <Mail className="h-5 w-5 text-primary" /> info@norcalboxing.com
                  </a>
                  <span className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" /> 123 Main Street, Benicia, CA 94510
                  </span>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <div className="flex aspect-video items-center justify-center rounded-lg border border-border bg-secondary">
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  Map Placeholder
                </span>
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
