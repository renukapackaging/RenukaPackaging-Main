import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-foreground/15 z-10" />
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("/hero-product-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-4 relative z-20">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                className="w-full sm:w-64 h-16 text-xl bg-white text-primary hover:bg-white/95 font-bold shadow-lg transition-all hover:scale-105"
                asChild
              >
                <Link to="/products">Explore Solutions</Link>
              </Button>
              <Button
                className="w-full sm:w-64 h-16 text-xl bg-white text-primary hover:bg-white/95 font-bold shadow-lg transition-all hover:scale-105"
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
