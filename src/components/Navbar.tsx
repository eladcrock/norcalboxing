import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-black.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Facility", to: "/facility" },
  { label: "Contact", to: "/contact" },
  { label: "Benicia BMA", to: "https://beniciabma.com", external: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Hide logo on home page until user scrolls past hero
  useEffect(() => {
    if (location.pathname !== "/") {
      setShowLogo(true);
      return;
    }

    setShowLogo(false);

    const handleScroll = () => {
      // Show logo after scrolling past ~60vh (the hero section)
      const threshold = window.innerHeight * 0.5;
      setShowLogo(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="NorCal Boxing Club"
            className={`h-20 w-auto transition-opacity duration-300 ${showLogo ? "opacity-100" : "opacity-0"}`}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://www.instagram.com/norcalboxingclub/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.yelp.com/biz/benicia-boxing-and-martial-arts-benicia?osq=norcal+boxing+club&q=norcal+boxing+club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yelp"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M14.84 18.96l-1.86-3.05c-.36-.6.07-1.36.76-1.36l3.56-.04c.69 0 1.13.74.78 1.34l-1.7 2.95c-.45.77-1.59.86-2.15.16zm-2.5-7.39V3.5c0-.79-.73-1.36-1.5-1.18l-3.49.79c-.74.17-1.16.95-.91 1.67l2.61 7.32c.32.91 1.6.91 1.92 0l1.37-.53zm6.21-1.21l-2.66.65c-.69.17-1.4-.34-1.4-1.05V6.7c0-.74.74-1.25 1.43-1.01l2.66.94c.93.33.92 1.66-.03 1.97zM9.05 19.61L7 17.04c-.5-.62-.06-1.54.74-1.54h2.94c.78 0 1.23.88.78 1.51l-1.69 2.49c-.42.62-1.32.7-1.72.11zm-3.42-7.13c.45.67 1.49.55 1.78-.21l.75-2c.27-.71-.21-1.5-.97-1.62l-3.39-.5c-.85-.13-1.49.79-1.04 1.52l2.87 4.81z"/>
            </svg>
          </a>
          <a
            href="tel:+17077471722"
            className="flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className={`overflow-hidden border-t border-border bg-background transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {navLinks.map((link, i) =>
            link.external ? (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-secondary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="tel:+17077471722"
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
