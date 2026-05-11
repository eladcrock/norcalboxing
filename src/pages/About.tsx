import HeroSection from "@/components/HeroSection";
import heroAbout from "@/assets/hero-about.jpg";
import MembershipCTA from "@/components/MembershipCTA";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <main>
      <HeroSection
        backgroundImage={heroAbout}
        title="About Us"
        subtitle="Professional boxing training in a welcoming, supportive environment."
      />

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Our <span className="text-primary">Philosophy</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nor Cal Boxing Club is the best training facility for Boxing training. What makes us the best? We coach not only for the purpose of creating tournament fighters and trophy winners. We coach for the purpose of helping people. There is an old saying, "it does not take a good coach to train an easy boxer, but it takes a great coach to train a difficult boxer."
              </p>
              <p>
                There is an unwritten policy in some gyms throughout the world to screen all potential boxers. This "screening" Process consists of sparring with one of the top fighters in the gym, and getting seriously beaten and hurt. Those who could not take this beating would not show up for their next training session, thereby insuring that only the toughest, most confident fighters make it.
              </p>
              <p>
                At Nor Cal Boxing Club we have exactly the opposite mission. We pride ourselves on being able to train people who may not be natural boxers or fighters. We feel this is a mark of a good coach. A coach who can take a disabled person, a rebellious teenager or a timid child and make a confident, self-assured, skilled fighter out of him or her is an example. Come experience the best!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Respect",
                description:
                  "We foster an environment built on mutual respect between coaches, members, and the sport itself.",
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

      {/* Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-muted-foreground">
              The Nor Cal Boxing Club program is geared for everyone ages 10 and up and all levels of experience. We offer a highly organized training regimen that is oriented around your personal goals. Whether you're looking to learn the basics, get fit, fight in the amateurs or go professional, we are confident that we can help you reach your goals. We offer both private and group training in a modern facility which is fully equipped with punching bags and a ring. We are also registered with USA Boxing.
            </p>
            <p className="mt-4 text-muted-foreground">
              The goal at Nor Cal Boxing Club is to instill a high level of confidence, discipline and effective boxing skills within every boxer we train. Sparring is optional
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Benefits of <span className="text-primary">Boxing</span>
            </h2>
            <ul className="grid gap-3 text-secondary-foreground/85 sm:grid-cols-2">
              {[
                "Enhanced Cardiovascular Health",
                "Improved Core Stability and Total-Body Strength",
                "Better Coordination and Body Awareness",
                "Improved Body Composition / Increased Muscle Tone",
                "Stress relief and improved mental health",
                "Improved Confidence and Self-Esteem",
                "Build Strong Bones and Ligaments",
                "Fat Burning",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Membership */}
      <MembershipCTA />
    </main>
  );
};

export default About;