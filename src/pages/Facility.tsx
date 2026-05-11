import HeroSection from "@/components/HeroSection";
import heroFacility from "@/assets/hero-facility.png";
import MembershipCTA from "@/components/MembershipCTA";
import { Camera } from "lucide-react";

const Facility = () => {
  return (
    <main>
      <HeroSection
        backgroundImage={heroPrograms}
        title="Our Facility"
        subtitle="A clean, modern, fully-equipped boxing gym in Fairfield."
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Camera className="mb-6 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Photos <span className="text-primary">Coming Soon</span>
            </h2>
            <p className="text-muted-foreground">
              We're putting the finishing touches on our facility and will be sharing photos very
              soon. Stop by in person to check out our ring, punching bags, and training space.
            </p>
          </div>
        </div>
      </section>

      <MembershipCTA />
    </main>
  );
};

export default Facility;
