import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={cn(
      "w-full fixed top-0 z-50 transition-all duration-300 shadow-sm bg-foreground",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>

      <div className="container mx-auto px-4">
        {/* Mobile Layout (Logo Left, Menu Right) */}
        <div className="flex h-20 items-center justify-between md:hidden">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/renuka_logo.png"
              alt="Renuka Packaging Industries"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Mobile Menu Button - Inverse colors for visibility */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-background hover:bg-background/10 hover:text-background"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Desktop Layout (Strictly Centered) */}
        <div className="hidden md:flex h-28 items-center justify-center w-full relative">
          <div className="flex items-center gap-16">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img
                src="/renuka_logo.png"
                alt="Renuka Packaging Industries"
                className="h-24 w-auto object-contain"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-base font-bold transition-colors hover:text-primary relative",

                    location.pathname === link.href
                      ? "text-primary"
                      : "text-background"
                  )}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-background hover:bg-background/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header >
  );
}
