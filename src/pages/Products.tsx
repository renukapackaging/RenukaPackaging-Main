import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const products = [
  {
    id: "3-side-seal-pouches",
    name: "3 Side Seal Pouches",
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
    id: "heat-shrink-sleeves",
    name: "Heat Shrink Sleeves",
    description: "360-degree branding coverage with conformable labels for complex container shapes.",
    image: "/heat-shrink-sleeves.png"
  },
  {
    id: "center-seal-pouches",
    name: "Center Seal Pouches",
    description: "Cost-effective solution with a back seal, widely used for grains, powders, and snacks.",
    image: "/centre-seal-pouch.png"
  },
  {
    id: "stand-up-pouches",
    name: "Stand Up Pouches",
    description: "Shelf-ready designs with superior branding space and consumer convenience features.",
    image: "/images/products/stand-up-pouches-1.jpg"
  },
  {
    id: "spout-pouches",
    name: "Spout Pouches",
    description: "Convenient spout pouches ideal for liquids, sauces, and beverages with easy dispensing.",
    image: "/images/products/spout-pouches.jpg"
  },
];

const Products = () => {
  return (
    <Layout>
      <PageHero
        title="Our Products"
        subtitle="High-quality flexible packaging solutions for every industry."
        backgroundImage="/hero-product-bg.png"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100}>
                <Card className="hover-lift h-full border-border/50 overflow-hidden group">
                  <div className="aspect-video w-full overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
