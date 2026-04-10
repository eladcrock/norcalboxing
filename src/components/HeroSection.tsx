import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  overlay = true,
}: HeroSectionProps) => {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-secondary">
      {/* Dark overlay pattern */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      )}
      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Button asChild size="lg" className="text-base font-semibold uppercase tracking-wider">
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
