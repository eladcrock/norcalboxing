import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import YelpIcon from "@/components/icons/YelpIcon";
import logo from "@/assets/logo-secondary.png";

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
            alt="Nor Cal Boxing Club"
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
          <button
            onClick={() => toast("We are excited to launch social media soon, please check back!", { position: "top-center" })}
            aria-label="Facebook"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Facebook className="h-5 w-5" />
          </button>
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
            <YelpIcon className="h-6 w-6" />
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
          <div className="flex gap-4 px-3 py-2">
            <button
              onClick={() => toast("We are excited to launch social media soon, please check back!", { position: "top-center" })}
              aria-label="Facebook"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </button>
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
              <YelpIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
