import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function IntroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Section Title Placeholder
          </h2>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatedSection delay={100}>
            <p className="text-muted-foreground leading-relaxed">
              Paragraph placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-muted-foreground leading-relaxed">
              Second paragraph placeholder. Duis aute irure dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <p className="text-muted-foreground leading-relaxed">
              Third paragraph placeholder. Sed ut perspiciatis unde omnis iste natus error sit 
              voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
              ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
