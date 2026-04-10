import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1517438322307-e67111335449?w=1920&q=80"
        title="About Us"
        subtitle="Professional boxing training in a welcoming, supportive environment."
      />

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                NorCal Boxing Club is brought to you by the same team behind Benicia Boxing &
                Martial Arts. After years of building a thriving boxing community in Benicia,
                we're expanding to Fairfield to bring the same professional instruction, clean
                facilities, and welcoming atmosphere to more of Northern California.
              </p>
              <p>
                Our goal is to instill a high level of skill while imparting the traditions of
                respect, self-discipline, humility, and compassion. Whether you're looking to
                compete, get in shape, or learn self-defense, we have experienced instructors
                who can help you reach your goals in a fun and safe environment.
              </p>
              <p>
                Boxing training helps improve physical fitness — including coordination,
                flexibility, and strength — but the practice also reinforces some of life's
                most valuable lessons, such as perseverance and self-control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Respect",
                description:
                  "We foster an environment built on mutual respect — between coaches, members, and the sport itself.",
              },
              {
                title: "Community",
                description:
                  "Boxing may be an individual sport, but we train as a team. There is strength in numbers, and we lift each other up.",
              },
              {
                title: "Self-Discipline",
                description:
                  "The ring teaches focus and commitment. These lessons carry over into every aspect of life.",
              },
            ].map((v) => (
              <Card key={v.title} className="border-border bg-card">
                <CardContent className="p-8 text-center">
                  <h3 className="mb-2 text-xl font-bold text-primary">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Meet the <span className="text-primary">Coach</span>
            </h2>
            <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-secondary">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Photo</span>
            </div>
            <h3 className="mb-1 text-xl font-bold">Head Coach</h3>
            <p className="mb-4 text-sm text-primary">Founder, NorCal Boxing Club & Benicia Boxing</p>
            <p className="text-muted-foreground">
              With years of experience in both competitive and recreational boxing, our head coach
              brings passion, expertise, and a genuine commitment to each member's growth. His
              mission is to make boxing accessible, safe, and empowering for everyone — from
              first-timers to seasoned fighters.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
