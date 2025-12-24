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
    name: "3 Side Seal Pouches Placeholder", 
    description: "Product description placeholder for 3 Side Seal Pouches." 
  },
  { 
    id: "flexible-laminate-rolls", 
    name: "Flexible Laminate Rolls Placeholder", 
    description: "Product description placeholder for Flexible Laminate Rolls." 
  },
  { 
    id: "heat-shrink-sleeves", 
    name: "Heat Shrink Sleeves Placeholder", 
    description: "Product description placeholder for Heat Shrink Sleeves." 
  },
  { 
    id: "center-seal-pouches", 
    name: "Center Seal Pouches Placeholder", 
    description: "Product description placeholder for Center Seal Pouches." 
  },
  { 
    id: "preformed-pouches", 
    name: "Preformed Pouches Placeholder", 
    description: "Product description placeholder for Preformed Pouches." 
  },
  { 
    id: "stand-up-pouches", 
    name: "Stand Up Pouches Placeholder", 
    description: "Product description placeholder for Stand Up Pouches." 
  },
  { 
    id: "twist-grade-film", 
    name: "Twist Grade Film Placeholder", 
    description: "Product description placeholder for Twist Grade Film." 
  },
];

const Products = () => {
  return (
    <Layout>
      <PageHero 
        title="Our Products Placeholder" 
        subtitle="Products page subtitle placeholder text here."
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100}>
                <Card className="hover-lift h-full border-border/50 overflow-hidden">
                  <PlaceholderImage
                    text={`${product.name} Image`}
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
                    <Button variant="default" size="sm" asChild>
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
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
