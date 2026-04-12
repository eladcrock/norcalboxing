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
        backgroundImage={heroPrograms}
        title="Boxing Programs"
        subtitle="Professional boxing instruction for all ages and skill levels, in a clean, welcoming environment."
      />

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Group Classes",
                description:
                  "Covering boxing fundamentals from the ground up,  building on knowledge of technique, simultaneously improving body composition, while allowing for stress relief and improved mental health.",
              },
              {
                title: "Private Training",
                description:
                  "Personalized coaching tailored to your goals. Ideal for competition prep, accelerated learning, or focused technique work with our experienced instructors.",
              },
              {
                title: "Youth Boxing",
                description:
                  "Structured classes for ages 12–17. We teach technique, discipline, and sportsmanship, helping kids improve coordination, flexibility, and strength, including life lessons like perseverance and self-control.",
              },
            ].map((p) => (
              <Card key={p.title} className="border-border bg-card">
                <CardContent className="p-8">
                  <h3 className="mb-2 text-xl font-bold text-gold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule info */}
      <section className="bg-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-dark-foreground md:text-4xl">
            Class <span className="text-gold">Schedule</span>
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-dark-foreground/70">
            We offer flexible class times throughout the week to fit your schedule. Contact us for the most up to date class
            times and availability.
          </p>
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base font-semibold uppercase tracking-wider">
            <Link to="/contact">Get the Schedule</Link>
          </Button>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Clean <span className="text-gold">Shots</span>
          </h2>
          <PhotoGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-dark-foreground md:text-4xl">
            Get Two Weeks <span className="text-gold">Free</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-dark-foreground/70">
           Try our 2 week free trial and see for yourself how the art of boxing can change your life! No experience necessary.
          </p>
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base font-semibold uppercase tracking-wider">
            <Link to="/contact">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Programs;
