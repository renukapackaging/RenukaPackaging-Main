import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative py-20 md:py-28 gradient-hero overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        />
      )}
      <div className="absolute inset-0 bg-foreground/10" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
