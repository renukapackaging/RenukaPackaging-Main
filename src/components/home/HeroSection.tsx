import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center gradient-hero">
      <div className="absolute inset-0 bg-foreground/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Innovation in every Layer
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Premium flexible packaging solutions that elevate your brand and protect your products. Experience the perfect fusion of innovation, durability, and aesthetics.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="w-full sm:w-56 bg-background text-primary hover:bg-background/90 font-semibold"
                asChild
              >
                <Link to="/products">Explore Solutions</Link>
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-56 bg-background text-primary hover:bg-background/90 font-semibold"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
