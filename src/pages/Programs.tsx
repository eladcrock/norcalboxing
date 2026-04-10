import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const schedule = [
  { day: "Monday", time: "6:00 AM – 7:00 AM", class: "Morning Boxing" },
  { day: "Monday", time: "5:30 PM – 7:00 PM", class: "Group Class" },
  { day: "Tuesday", time: "12:00 PM – 1:00 PM", class: "Lunch Boxing" },
  { day: "Tuesday", time: "6:00 PM – 7:30 PM", class: "Youth Boxing" },
  { day: "Wednesday", time: "6:00 AM – 7:00 AM", class: "Morning Boxing" },
  { day: "Wednesday", time: "5:30 PM – 7:00 PM", class: "Group Class" },
  { day: "Thursday", time: "12:00 PM – 1:00 PM", class: "Lunch Boxing" },
  { day: "Thursday", time: "6:00 PM – 7:30 PM", class: "Advanced Sparring" },
  { day: "Friday", time: "6:00 AM – 7:00 AM", class: "Morning Boxing" },
  { day: "Friday", time: "5:00 PM – 6:30 PM", class: "Open Gym" },
  { day: "Saturday", time: "9:00 AM – 10:30 AM", class: "Weekend Warriors" },
];

const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/placeholder.svg`,
  alt: `Training photo ${i + 1}`,
}));

const Programs = () => {
  return (
    <main>
      <HeroSection
        title="Boxing Programs"
        subtitle="From beginners to competitive fighters — we have a program for you."
      />

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Group Classes",
                description:
                  "High-energy sessions covering fundamentals, combinations, footwork, and conditioning. Perfect for all levels.",
              },
              {
                title: "Private Training",
                description:
                  "Personalized one-on-one coaching tailored to your goals. Ideal for competition prep or accelerated learning.",
              },
              {
                title: "Youth Boxing",
                description:
                  "Structured classes for ages 8–17. We teach technique, discipline, and sportsmanship in a safe, fun environment.",
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

      {/* Schedule */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Class <span className="text-primary">Schedule</span>
          </h2>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-card">
                  <TableHead className="font-semibold">Day</TableHead>
                  <TableHead className="font-semibold">Time</TableHead>
                  <TableHead className="font-semibold">Class</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedule.map((s, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{s.day}</TableCell>
                    <TableCell>{s.time}</TableCell>
                    <TableCell className="text-primary">{s.class}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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
            Join <span className="text-primary">NorCal Boxing</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Ready to step in the ring? Contact us to sign up for a free trial class.
          </p>
          <Button asChild size="lg" className="text-base font-semibold uppercase tracking-wider">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Programs;
