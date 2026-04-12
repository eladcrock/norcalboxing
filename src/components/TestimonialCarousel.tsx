import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mike R.",
    text: "NorCal Boxing has an incredible atmosphere. The coaches push you to be your best while keeping it fun and safe.",
  },
  {
    name: "Sarah T.",
    text: "I started with zero boxing experience and now I feel confident and strong. The community here is like family.",
  },
  {
    name: "James L.",
    text: "Best boxing gym in NorCal. The private training sessions have taken my skills to the next level.",
  },
  {
    name: "Lisa M.",
    text: "My son loves the youth program! Great coaches who really care about teaching discipline and respect.",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
          What Our <span className="text-primary">Members</span> Say
        </h2>
        <Carousel className="mx-auto max-w-3xl" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <Card className="border-border bg-card">
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    <p className="mb-4 text-lg italic text-foreground">
                      "{t.text}"
                    </p>
                    <span className="font-semibold text-primary">- {t.name}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
