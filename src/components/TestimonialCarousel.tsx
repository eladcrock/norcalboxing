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
    name: "Efrain",
    text: "Amazing experience and the coaches do a very good job in engaging with you and focusing in the moment! I feel welcome and it feels like I joined a family.",
  },
  {
    name: "Idora S.",
    text: "Andy the owner is very welcoming as are all of the instructors. They teach respect and have the proper training for children... Love the positive approach to teaching.",
  },
  {
    name: "Rod N.",
    text: "Very nice gym for traditional boxing lessons. Facility is clean and instructors are very friendly, knowledgeable and competent.",
  },
  {
    name: "Debra N.",
    text: "The people who work here are kind and so motivated to give these kids the best experience every single time. My son is over the moon!",
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
