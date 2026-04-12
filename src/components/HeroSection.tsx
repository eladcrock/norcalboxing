import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) => {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/70" />

      <div className="relative z-10 container mx-auto flex min-h-[50vh] flex-col justify-between px-4 py-10">
        <h1 className="mt-4 text-center text-4xl font-extrabold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className="mb-4 text-center">
          {subtitle && (
            <p className="mx-auto mb-6 max-w-2xl text-lg text-white/80 md:text-xl">
              {subtitle}
            </p>
          )}
          {ctaText && ctaLink && (
            <Button asChild size="lg" className="text-base font-semibold uppercase tracking-wider">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
