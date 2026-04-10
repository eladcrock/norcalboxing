import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-black.png";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroSectionProps) => {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-secondary">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/0" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <img src={logo} alt="NorCal Boxing Club" className="mx-auto mb-6 h-24 w-auto md:h-32" />
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
