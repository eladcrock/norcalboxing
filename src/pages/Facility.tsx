import heroFacility from "@/assets/hero-facility.png";
import MembershipCTA from "@/components/MembershipCTA";

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
            alt="Inside the NorCal Boxing Club facility with boxing ring, heavy bags, and hex lighting"
            className="mx-auto h-auto w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      <MembershipCTA />
    </main>
  );
};

export default Facility;
