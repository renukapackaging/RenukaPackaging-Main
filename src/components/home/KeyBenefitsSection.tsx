import { Shield, Zap, Recycle, Award, Package, Truck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  { icon: Shield, title: "Unmatched Durability", description: "Multi-layer protection against moisture, oxygen, and UV light to preserve product integrity." },
  { icon: Zap, title: "Rapid Production", description: "High-speed manufacturing lines ensuring rapid turnaround times for orders of any scale." },
  { icon: Recycle, title: "Eco-Conscious Options", description: "Sustainable, recyclable material structures supporting your green initiatives." },
  { icon: Award, title: "Certified Quality", description: "ISO certified processes guaranteeing consistent, food-grade safe packaging." },
  { icon: Package, title: "Custom Engineering", description: "Tailored barrier properties and structures engineered for your specific product needs." },
  { icon: Truck, title: "Reliable Logistics", description: "Streamlined supply chain management ensuring on-time delivery, every time." },
];

export function KeyBenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose Renuka Packaging?
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
