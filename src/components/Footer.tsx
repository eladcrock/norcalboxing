import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-black.png";
import benicicaLogo from "@/assets/benicia-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img src={logo} alt="NorCal Boxing Club" className="mb-3 h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              Clean, professional boxing training in a fun and safe environment.
              From the same team behind Benicia Boxing & Martial Arts.
            </p>
            <a href="https://beniciabma.com" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block">
              <img src={benicicaLogo} alt="Benicia Boxing & Martial Arts" className="h-10 w-auto" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Programs", to: "/programs" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+17075551234" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> (707) 555-1234
              </a>
              <a href="mailto:info@norcalboxing.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> info@norcalboxing.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" /> Fairfield, CA
              </span>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} NorCal Boxing Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
