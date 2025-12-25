import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function IntroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Packaging Without Compromise
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatedSection delay={100}>
            <p className="text-muted-foreground leading-relaxed">
              At Renuka Packaging, we understand that packaging is the silent ambassador of your brand. It's the first touchpoint for your customers and the final layer of protection for your product. That's why we don't just manufacture packaging; we engineer solutions that balance superior barrier protection with stunning visual appeal.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-muted-foreground leading-relaxed">
              Our state-of-the-art facility utilizes advanced polymer science and cutting-edge printing technology to deliver vibrant, high-definition graphics on materials that withstand the rigors of the supply chain. From food safety compliance to extended shelf life, our standards exceed industry expectations.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to driving sustainability in the packaging industry. By offering recyclable laminates and optimizing material usage, we help forward-thinking brands reduce their environmental footprint without sacrificing performance or aesthetics.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
