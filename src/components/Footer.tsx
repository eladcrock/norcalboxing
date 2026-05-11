import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo-black.png";
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
            <img src={logo} alt="NorCal Boxing Club" className="mb-3 h-24 w-auto" />
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
                className="inline-flex h-7 items-center gap-1 rounded-md bg-[#d32323] px-2 text-white transition-opacity hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M14.84 18.96l-1.86-3.05c-.36-.6.07-1.36.76-1.36l3.56-.04c.69 0 1.13.74.78 1.34l-1.7 2.95c-.45.77-1.59.86-2.15.16zm-2.5-7.39V3.5c0-.79-.73-1.36-1.5-1.18l-3.49.79c-.74.17-1.16.95-.91 1.67l2.61 7.32c.32.91 1.6.91 1.92 0l1.37-.53zm6.21-1.21l-2.66.65c-.69.17-1.4-.34-1.4-1.05V6.7c0-.74.74-1.25 1.43-1.01l2.66.94c.93.33.92 1.66-.03 1.97zM9.05 19.61L7 17.04c-.5-.62-.06-1.54.74-1.54h2.94c.78 0 1.23.88.78 1.51l-1.69 2.49c-.42.62-1.32.7-1.72.11zm-3.42-7.13c.45.67 1.49.55 1.78-.21l.75-2c.27-.71-.21-1.5-.97-1.62l-3.39-.5c-.85-.13-1.49.79-1.04 1.52l2.87 4.81z"/>
                </svg>
                <span className="text-[11px] font-bold uppercase tracking-wide">Yelp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
         
          <p className="mb-1">
            © {new Date().getFullYear()} NorCal Boxing Club. All rights reserved.
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
