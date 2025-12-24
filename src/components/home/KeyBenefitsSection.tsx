import { Shield, Zap, Recycle, Award, Package, Truck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  { icon: Shield, title: "Benefit 1 Placeholder", description: "Benefit description placeholder text here." },
  { icon: Zap, title: "Benefit 2 Placeholder", description: "Benefit description placeholder text here." },
  { icon: Recycle, title: "Benefit 3 Placeholder", description: "Benefit description placeholder text here." },
  { icon: Award, title: "Benefit 4 Placeholder", description: "Benefit description placeholder text here." },
  { icon: Package, title: "Benefit 5 Placeholder", description: "Benefit description placeholder text here." },
  { icon: Truck, title: "Benefit 6 Placeholder", description: "Benefit description placeholder text here." },
];

export function KeyBenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Key Benefits Placeholder
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="hover-lift h-full border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
