import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <main>
      <HeroSection
        title="About Us"
        subtitle="The story behind NorCal Boxing and the passion that drives us."
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
                NorCal Boxing was founded by the same coach behind Benicia Boxing, with a vision to
                expand access to world-class boxing training across Northern California. What started
                as a single gym has grown into a movement — bringing the sweet science to fighters of
                all ages and skill levels.
              </p>
              <p>
                Our philosophy is simple: boxing is for everyone. Whether you're training for
                competition, fitness, or self-defense, we meet you where you are and help you reach
                where you want to be. We believe in hard work, respect, and the transformative power
                of the sport.
              </p>
              <p>
                With decades of combined coaching experience, our team creates a supportive and
                challenging environment where every member can thrive.
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
                title: "Discipline",
                description:
                  "Boxing demands focus and commitment. We instill discipline that carries over into every aspect of life.",
              },
              {
                title: "Community",
                description:
                  "We're a family. Every member — from beginners to competitors — is supported and encouraged.",
              },
              {
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards of coaching, safety, and technique.",
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
            <p className="mb-4 text-sm text-primary">Founder, NorCal Boxing & Benicia Boxing</p>
            <p className="text-muted-foreground">
              With years of experience in competitive and recreational boxing coaching, our head
              coach brings passion, expertise, and a genuine love for the sport to every session.
              His mission is to make boxing accessible, safe, and empowering for everyone who
              walks through the door.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
