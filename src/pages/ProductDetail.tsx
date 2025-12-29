import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "./Products";

const productDetails: Record<string, {
  description: string[];
  materials: string[];
  benefits: string[];
  specs: string[];
}> = {
  "3-side-seal-pouches": {
    description: [
      "Description paragraph 1 placeholder for 3 Side Seal Pouches. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Description paragraph 2 placeholder. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    materials: ["Material 1 Placeholder", "Material 2 Placeholder", "Material 3 Placeholder", "Material 4 Placeholder"],
    benefits: ["Benefit 1 Placeholder", "Benefit 2 Placeholder", "Benefit 3 Placeholder", "Benefit 4 Placeholder", "Benefit 5 Placeholder"],
    specs: ["Spec 1 Placeholder", "Spec 2 Placeholder", "Spec 3 Placeholder"],
  },
  "flexible-laminate-rolls": {
    description: [
      "Description paragraph 1 placeholder for Flexible Laminate Rolls. Lorem ipsum dolor sit amet.",
      "Description paragraph 2 placeholder. Ut enim ad minim veniam, quis nostrud exercitation.",
    ],
    materials: ["Material 1 Placeholder", "Material 2 Placeholder", "Material 3 Placeholder"],
    benefits: ["Benefit 1 Placeholder", "Benefit 2 Placeholder", "Benefit 3 Placeholder", "Benefit 4 Placeholder"],
    specs: ["Spec 1 Placeholder", "Spec 2 Placeholder", "Spec 3 Placeholder"],
  },
  "heat-shrink-sleeves": {
    description: [
      "Description paragraph 1 placeholder for Heat Shrink Sleeves. Lorem ipsum dolor sit amet.",
      "Description paragraph 2 placeholder. Duis aute irure dolor in reprehenderit.",
    ],
    materials: ["Material 1 Placeholder", "Material 2 Placeholder", "Material 3 Placeholder"],
    benefits: ["Benefit 1 Placeholder", "Benefit 2 Placeholder", "Benefit 3 Placeholder", "Benefit 4 Placeholder"],
    specs: ["Spec 1 Placeholder", "Spec 2 Placeholder", "Spec 3 Placeholder"],
  },
  "center-seal-pouches": {
    description: [
      "Description paragraph 1 placeholder for Flat Bottom Standy and Zipper Pouches. Lorem ipsum dolor sit amet.",
      "Description paragraph 2 placeholder. Excepteur sint occaecat cupidatat non proident.",
    ],
    materials: ["Material 1 Placeholder", "Material 2 Placeholder", "Material 3 Placeholder"],
    benefits: ["Benefit 1 Placeholder", "Benefit 2 Placeholder", "Benefit 3 Placeholder", "Benefit 4 Placeholder"],
    specs: ["Spec 1 Placeholder", "Spec 2 Placeholder", "Spec 3 Placeholder"],
  },
  "preformed-pouches": {
    description: [
      "Description paragraph 1 placeholder for Preformed Pouches. Lorem ipsum dolor sit amet.",
      "Description paragraph 2 placeholder. Sunt in culpa qui officia deserunt mollit.",
    ],
    materials: ["Material 1 Placeholder", "Material 2 Placeholder", "Material 3 Placeholder"],
    benefits: ["Benefit 1 Placeholder", "Benefit 2 Placeholder", "Benefit 3 Placeholder", "Benefit 4 Placeholder"],
    specs: ["Spec 1 Placeholder", "Spec 2 Placeholder", "Spec 3 Placeholder"],
  },
  "stand-up-pouches": {
    description: [
      "Description paragraph 1 placeholder for Stand Up Pouches. Lorem ipsum dolor sit amet.",
      "Description paragraph 2 placeholder. Nemo enim ipsam voluptatem quia voluptas sit.",
    ],
    materials: ["Material 1 Placeholder", "Material 2 Placeholder", "Material 3 Placeholder", "Material 4 Placeholder"],
    benefits: ["Benefit 1 Placeholder", "Benefit 2 Placeholder", "Benefit 3 Placeholder", "Benefit 4 Placeholder", "Benefit 5 Placeholder"],
    specs: ["Spec 1 Placeholder", "Spec 2 Placeholder", "Spec 3 Placeholder"],
  },
  "twist-grade-film": {
    description: [
      "Description paragraph 1 placeholder for Twist Grade Film. Lorem ipsum dolor sit amet.",
      "Description paragraph 2 placeholder. Neque porro quisquam est, qui dolorem ipsum quia.",
    ],
    materials: ["Material 1 Placeholder", "Material 2 Placeholder", "Material 3 Placeholder"],
    benefits: ["Benefit 1 Placeholder", "Benefit 2 Placeholder", "Benefit 3 Placeholder", "Benefit 4 Placeholder"],
    specs: ["Spec 1 Placeholder", "Spec 2 Placeholder", "Spec 3 Placeholder"],
  },
};

const ProductDetail = () => {
  const [activeProduct, setActiveProduct] = useState(products[0].id);
  const currentProduct = products.find(p => p.id === activeProduct) || products[0];
  const details = productDetails[activeProduct];

  return (
    <Layout>
      <section className="py-8 md:py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-foreground">{currentProduct.name}</span>
            </div>
          </AnimatedSection>
          
          <Tabs value={activeProduct} onValueChange={setActiveProduct} className="w-full">
            <AnimatedSection>
              <TabsList className="w-full flex-wrap h-auto gap-2 bg-transparent justify-start mb-8">
                {products.map((product) => (
                  <TabsTrigger
                    key={product.id}
                    value={product.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 text-sm"
                  >
                    {product.name.replace(" Placeholder", "")}
                  </TabsTrigger>
                ))}
              </TabsList>
            </AnimatedSection>

            {products.map((product) => (
              <TabsContent key={product.id} value={product.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    <AnimatedSection>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PlaceholderImage
                          text={`${product.name} Main Image`}
                          aspectRatio="square"
                          className="w-full"
                        />
                        <div>
                          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            {product.name}
                          </h1>
                          <p className="text-muted-foreground mb-6">
                            {product.description}
                          </p>
                          <Button size="lg" className="w-full md:w-auto" asChild>
                            <Link to="/contact">Request Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* Description */}
                    <AnimatedSection delay={100}>
                      <Card className="border-border/50">
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold text-foreground mb-4">
                            Description Placeholder
                          </h2>
                          <div className="space-y-4">
                            {productDetails[product.id].description.map((para, i) => (
                              <p key={i} className="text-muted-foreground">
                                {para}
                              </p>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    {/* Materials */}
                    <AnimatedSection delay={200}>
                      <Card className="border-border/50">
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold text-foreground mb-4">
                            Materials Placeholder
                          </h2>
                          <ul className="space-y-2">
                            {productDetails[product.id].materials.map((material, i) => (
                              <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {material}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    {/* Benefits */}
                    <AnimatedSection delay={300}>
                      <Card className="border-border/50">
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold text-foreground mb-4">
                            Key Benefits Placeholder
                          </h2>
                          <ul className="space-y-2">
                            {productDetails[product.id].benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <AnimatedSection delay={100}>
                      <Card className="border-border/50 sticky top-20">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-foreground mb-4">
                            Specifications Placeholder
                          </h3>
                          <ul className="space-y-3">
                            {productDetails[product.id].specs.map((spec, i) => (
                              <li key={i} className="text-sm text-muted-foreground border-b border-border/50 pb-2 last:border-0">
                                {spec}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="mt-6 pt-6 border-t border-border/50">
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                              Need Help Placeholder
                            </h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Contact info placeholder text here.
                            </p>
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <Link to="/contact">Contact Us</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
