import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, User, Baby } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import logo from "@/assets/logo-black.png";

const programs = [
  {
    icon: Users,
    title: "Group Classes",
    description:
      "High-energy group boxing sessions for all skill levels. Build strength, speed, and technique alongside fellow fighters in a fun and supportive environment.",
  },
  {
    icon: User,
    title: "Private Training",
    description:
      "One-on-one sessions with our experienced coaches. Tailored to your goals — whether you're preparing to compete or just getting started.",
  },
  {
    icon: Baby,
    title: "Youth Boxing",
    description:
      "Structured classes for kids and teens that build confidence, discipline, and fitness. We teach perseverance and self-control through the sweet science.",
  },
];

const Index = () => {
  return (
    <main>
      {/* Home Hero with Logo */}
      <section className="flex min-h-[60vh] items-center justify-center bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Welcome <span className="text-primary">All</span>
          </h2>
          <img src={logo} alt="NorCal Boxing Club" className="mx-auto mb-6 h-40 w-auto md:h-56 lg:h-72" />
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            NorCal Boxing Club offers professional boxing training for men, women, and children of all ages in a clean, state-of-the-art facility with experienced instructors.
          </p>
          <Button asChild size="lg" className="text-base font-semibold uppercase tracking-wider">
            <Link to="/contact">Get Two Weeks Free</Link>
          </Button>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Community & <span className="text-primary">Camaraderie</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Boxing may be an individual sport, but we work out, train, and get better as a team.
            There is strength in numbers, and together we can help you achieve your health, fitness,
            and training goals in a fun and safe environment. From the same team that built
            Benicia Boxing & Martial Arts, NorCal Boxing Club brings world-class boxing instruction
            to Fairfield.
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
            Get Two Weeks of Training <span className="text-primary">For Free</span>!
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Come check out our clean, state-of-the-art facility and meet our professional
            instructors. No experience necessary — just bring your determination.
          </p>
          <Button asChild size="lg" className="text-base font-semibold uppercase tracking-wider">
            <Link to="/contact">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
