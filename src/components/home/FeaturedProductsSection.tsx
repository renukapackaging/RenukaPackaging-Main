import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import LogoLoop from "@/components/ui/LogoLoop";

const featuredProducts = [
  {
    id: "3-side-seal-pouches",
    name: "3-Side Seal Pouches",
    description: "Versatile and secure, perfect for single-serve applications, pharmaceuticals, and flat items.",
    image: "/images/products/center-seal-bags.jpg"
  },
  {
    id: "flexible-laminate-rolls",
    name: "Flexible Laminate Rolls",
    description: "High-performance roll stock optimized for automated packaging lines, ensuring efficiency.",
    image: "/images/products/laminate-rolls.jpg"
  },
  {
    id: "stand-up-pouches",
    name: "Stand Up Pouches",
    description: "Shelf-ready designs with superior branding space and consumer convenience features.",
    image: "/images/products/stand-up-pouches-1.jpg"
  },
];

export function FeaturedProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Signature Solutions
          </h2>
        </AnimatedSection>

        <div className="w-full py-8">
          <LogoLoop
            logos={featuredProducts.map(p => ({
              src: p.image,
              alt: p.name,
              title: p.name
            }))}
            logoHeight={250}
            speed={50}
            pauseOnHover
            gap={48}
          />
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
