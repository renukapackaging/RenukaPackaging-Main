import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src="/renuka_logo_v3.png"
                alt="Renuka Packaging Industries"
                className="h-28 w-auto object-contain"
              />
            </div>
            <p className="text-background/70 text-sm max-w-md">
              Renuka Packaging Industries is a leader in flexible packaging solutions, committed to quality, innovation, and sustainability.
            </p>
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
            © 2024 Renuka Packaging Industries. All rights reserved.
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
