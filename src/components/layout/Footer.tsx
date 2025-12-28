import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="/renuka_logo.png"
                alt="Renuka Packaging Industries"
                className="h-28 w-auto object-contain"
              />
            </div>
            <p className="text-background/70 text-sm max-w-md">
              Renuka Packaging Industries is a leader in flexible packaging solutions, committed to quality, innovation, and sustainability.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm text-background/70">
                  Plot No. 460, 461 P, Beside Pouchamma Temple,<br />
                  Rami Reddy Nagar, Jeedimetla Village,<br />
                  Hyderabad - 500 055.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="text-sm text-background/70 flex flex-col">
                  <a href="tel:+919912318175" className="hover:text-primary transition-colors">+91 9912318175</a>
                  <a href="tel:+918340913271" className="hover:text-primary transition-colors">+91 8340913271</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <div className="text-sm text-background/70 flex flex-col">
                  <a href="mailto:renukapackaging18@gmail.com" className="hover:text-primary transition-colors">renukapackaging18@gmail.com</a>
                  <a href="mailto:Sales.renukapack@gmail.com" className="hover:text-primary transition-colors">Sales.renukapack@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Moved to Right */}
          <div className="md:text-right">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-sm text-background/70 hover:text-background transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            © 2025 Renuka Packaging Industries. All rights reserved.
          </p>
          <p className="text-sm text-background/70">
            Powered by{" "}
            <a
              href="https://buildoholics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Buildoholics
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
