import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, User, Baby } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const programs = [
  {
    icon: Users,
    title: "Group Classes",
    description:
      "High-energy group boxing sessions for all skill levels. Build strength, speed, and technique alongside fellow fighters.",
  },
  {
    icon: User,
    title: "Private Training",
    description:
      "One-on-one sessions with our experienced coaches. Tailored to your goals — whether competitive or fitness-focused.",
  },
  {
    icon: Baby,
    title: "Youth Boxing",
    description:
      "Fun, structured classes for kids and teens. Build confidence, discipline, and fitness through the sweet science.",
  },
];

const Index = () => {
  return (
    <main>
      <HeroSection
        title={
          <>
            Train Like a <span className="text-primary">Champion</span>
          </>
        }
        subtitle="NorCal's premier boxing gym. Group classes, private training, and youth programs for every skill level."
        ctaText="Start Your Free Trial"
        ctaLink="/contact"
      />

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Welcome to <span className="text-primary">NorCal Boxing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Located in the heart of Northern California, NorCal Boxing is more than a gym — it's a community.
            Whether you're stepping into the ring for the first time or preparing for competition, our
            experienced coaches are here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Our <span className="text-primary">Programs</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <Card key={p.title} className="border-border bg-card transition-transform hover:scale-[1.02]">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <p.icon className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">{p.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{p.description}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/programs">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Ready to <span className="text-primary">Get Started</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Sign up for a free trial class and experience what NorCal Boxing is all about.
            No experience necessary — just bring your determination.
          </p>
          <Button asChild size="lg" className="text-base font-semibold uppercase tracking-wider">
            <Link to="/contact">Claim Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
