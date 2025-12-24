import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  { id: "3-side-seal-pouches", name: "Product 1 Placeholder", description: "Product description placeholder." },
  { id: "flexible-laminate-rolls", name: "Product 2 Placeholder", description: "Product description placeholder." },
  { id: "stand-up-pouches", name: "Product 3 Placeholder", description: "Product description placeholder." },
];

export function FeaturedProductsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Featured Products Placeholder
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 100}>
              <Card className="hover-lift h-full border-border/50 overflow-hidden">
                <PlaceholderImage
                  text="Product Image Placeholder"
                  aspectRatio="video"
                  className="rounded-none"
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
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
