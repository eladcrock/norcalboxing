import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Baby } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import logo from "@/assets/logo-black.png";
import groupPhoto from "@/assets/hero-home.jpg";

const programs = [
  {
    icon: Users,
    title: "Group Classes",
    description:
      "Covering boxing fundamentals from the ground up, building on knowledge of technique, simultaneously improving body composition, while allowing for stress relief and improved mental health.",
  },
  {
    icon: User,
    title: "Private Training",
    description:
      "Personalized coaching tailored to your goals. 30 and 60 minute options offered. Ideal for competition prep, accelerated learning, or focused technique work with our experienced instructors.",
  },
  {
    icon: Baby,
    title: "Ages 10 and up",
    description:
      "Structured classes for ages 10 and up. We teach technique, discipline, and sportsmanship, helping kids improve coordination, flexibility, and strength, including life lessons like perseverance and self-control.",
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
          <img src={logo} alt="NorCal Boxing Club" className="mx-auto mb-6 h-64 w-auto md:h-80 lg:h-[28rem]" />
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Professional boxing training for all ages in a state-of-the-art facility.
          </p>
          <Button asChild size="lg" className="animate-fade-in text-base font-semibold uppercase tracking-wider [animation-delay:0.8s] [animation-fill-mode:backwards]">
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
          <img
            src={groupPhoto}
            alt="NorCal Boxing Club group photo"
            className="mx-auto mt-8 max-w-3xl rounded-lg shadow-lg w-full"
            loading="lazy"
          />
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
            instructors. No experience necessary, just bring your determination.
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
