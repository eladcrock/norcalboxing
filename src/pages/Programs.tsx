import HeroSection from "@/components/HeroSection";
import heroPrograms from "@/assets/hero-programs.jpg";
import PhotoGallery from "@/components/PhotoGallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/placeholder.svg`,
  alt: `Training photo ${i + 1}`,
}));

const Programs = () => {
  return (
    <main>
      <HeroSection
        title="Boxing Programs"
        subtitle="Professional boxing instruction for all ages and skill levels — in a clean, welcoming environment."
      />

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Group Classes",
                description:
                  "High-energy sessions covering fundamentals, combinations, footwork, and conditioning. Whether you're a beginner or experienced, our group classes are designed to challenge and support you in a fun, team-oriented setting.",
              },
              {
                title: "Private Training",
                description:
                  "Personalized one-on-one coaching tailored to your goals. Ideal for competition prep, accelerated learning, or focused technique work with our experienced instructors.",
              },
              {
                title: "Youth Boxing",
                description:
                  "Structured classes for ages 8–17. We teach technique, discipline, and sportsmanship while helping kids improve coordination, flexibility, and strength — plus life lessons like perseverance and self-control.",
              },
            ].map((p) => (
              <Card key={p.title} className="border-border bg-card">
                <CardContent className="p-8">
                  <h3 className="mb-2 text-xl font-bold text-primary">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule info */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Class <span className="text-primary">Schedule</span>
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            We offer flexible class times throughout the week — including morning, lunch, evening,
            and weekend sessions — to fit your schedule. Contact us for the most up-to-date class
            times and availability.
          </p>
          <Button asChild size="lg" className="text-base font-semibold uppercase tracking-wider">
            <Link to="/contact">Get the Schedule</Link>
          </Button>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <PhotoGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Get Two Weeks <span className="text-primary">Free</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Come check out our clean, state-of-the-art facility and the most professional
            instructors. No experience necessary.
          </p>
          <Button asChild size="lg" className="text-base font-semibold uppercase tracking-wider">
            <Link to="/contact">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Programs;
