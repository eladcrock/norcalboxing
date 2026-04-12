import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-black.png";
import benicicaLogo from "@/assets/benicia-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          {/* Brand */}
          <div className="flex flex-col">
            <img src={logo} alt="NorCal Boxing Club" className="mb-3 h-24 w-auto" />
            <a href="https://beniciabma.com" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block">
              <img src={benicicaLogo} alt="Benicia Boxing & Martial Arts" className="h-16 w-auto" />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Clean, professional boxing training in a fun and safe environment.
              From the same team behind Benicia Boxing & Martial Arts.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+15103267401" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> Call Us
              </a>
              <a href="mailto:NorcalBoxingClub@gmail.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> NorcalBoxingClub@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=323+W+Texas+St+Fairfield+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MapPin className="h-4 w-4 shrink-0 text-primary" /> 323 W Texas St, Fairfield, CA
              </a>
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
