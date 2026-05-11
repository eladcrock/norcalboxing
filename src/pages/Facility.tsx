import heroFacility from "@/assets/hero-facility.png";
import MembershipCTA from "@/components/MembershipCTA";
import { Camera } from "lucide-react";

const Facility = () => {
  return (
    <main>
      {/* Custom hero — image shown in full, text below so nothing is cropped */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 pt-10 pb-6 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight md:text-6xl lg:text-7xl">
            Our <span className="text-primary">Facility</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A clean, modern, fully-equipped boxing gym in Fairfield.
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-10">
          <img
            src={heroFacility}
            alt="Inside the Nor Cal Boxing Club facility with boxing ring, heavy bags, and hex lighting"
            className="mx-auto h-auto w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Camera className="mb-6 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
              More Photos <span className="text-primary">Coming Soon</span>
            </h2>
            <p className="text-muted-foreground">
              We're putting the finishing touches on our facility and will be sharing more
              photos soon. In the meantime, drop in and see it for yourself. Check out the
              ring, the heavy bags, and the energy in person.
            </p>
          </div>
        </div>
      </section>

      <MembershipCTA />
    </main>
  );
};

export default Facility;
