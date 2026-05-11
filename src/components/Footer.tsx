import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";
import YelpIcon from "@/components/icons/YelpIcon";
import logo from "@/assets/logo-secondary.png";
import benicicaLogo from "@/assets/benicia-logo.png";

const Footer = () => {
  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("We are excited to launch social media soon, please check back!", {
      position: "top-center",
    });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Brand */}
          <div>
            <img src={logo} alt="Nor Cal Boxing Club" className="mb-3 h-24 w-24 rounded-full object-cover" />
            <a href="https://beniciabma.com" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block">
              <img src={benicicaLogo} alt="Benicia Boxing & Martial Arts" className="h-12 w-auto" />
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+17077471722" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> Call Us
              </a>
              <a
                href="mailto:info@norcalboxingclub.com"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:info@norcalboxingclub.com";
                }}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" /> info@norcalboxingclub.com
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
              <button onClick={handleSocialClick} aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-primary">
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

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
         
          <p className="mb-1">
            © {new Date().getFullYear()} Nor Cal Boxing Club. All rights reserved.
            {" "}|{" "}
            <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>
          </p>
          <p>
           Branding by{" "}
           <a href="https://www.instagram.com/giographix_/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
              Giographix Studios 
            </a>
         
               {" "}| Web Design by{" "}
            <a href="https://nimbuswolf.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
              Nimbus Wolf Studios
            </a>

            {" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
