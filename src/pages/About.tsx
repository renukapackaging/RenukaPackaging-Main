import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import LogoLoop from "@/components/ui/LogoLoop";
import { Award, Target, Eye, Heart, CheckCircle, Factory, Utensils, Pill, Leaf, Sparkles, Droplets } from "lucide-react";

const values = [
  { icon: Award, title: "ISO 9001 Certified", description: "Adhering to global standards for quality management systems." },
  { icon: Target, title: "Zero Defect Policy", description: "Rigorous quality control measures at every stage of production." },
  { icon: Eye, title: "Client-Centric Vision", description: "Foreseeing market trends to keep our partners ahead of the curve." },
  { icon: Heart, title: "Passion for Excellence", description: "Driven by a commitment to deliver nothing but the best." },
  { icon: CheckCircle, title: "Integrity & Trust", description: "Building long-term relationships through transparency and reliability." },
];

const industries = [
  { icon: Utensils, name: "Food & Beverage" },
  { icon: Pill, name: "Pharmaceuticals" },
  { icon: Leaf, name: "Agriculture" },
  { icon: Sparkles, name: "Personal Care" },
  { icon: Droplets, name: "Liquid Packaging" },
  { icon: Factory, name: "Industrial Goods" },
];

const About = () => {
  return (
    <Layout>
      <PageHero title="About Renuka Packaging" />

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Legacy of Innovation
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatedSection delay={100}>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to revolutionize the flexible packaging industry, Renuka Packaging has grown into a trusted partner for global brands. Our journey is defined by a relentless pursuit of excellence, investing in world-class infrastructure and nurturing a team of skilled professionals who share our passion for perfection.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in creating bespoke packaging solutions that do more than just contain a product—they enhance it. Whether it's extending shelf life through high-barrier films or creating eye-catching designs with rotogravure printing, every Renuka Packaging product is a testament to our engineering prowess.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-muted-foreground leading-relaxed">
                Beyond manufacturing, we are consultants to our clients. We work closely with R&D teams to develop sustainable, cost-effective alternatives that align with modern consumer demands. At Renuka Packaging, your success is our success, and we are dedicated to helping your brand shine on the shelf.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="hover-lift h-full border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Industries We Serve
            </h2>
          </AnimatedSection>

          <div className="w-full py-8">
            <LogoLoop
              logos={industries.map((industry) => ({
                node: (
                  <div className="flex flex-col items-center p-4 rounded-lg bg-card border border-border/50 min-w-[140px] h-[130px] flex justify-center">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <industry.icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">
                      {industry.name}
                    </span>
                  </div>
                ),
                title: industry.name
              }))}
              logoHeight={140}
              speed={40}
              gap={24}
              pauseOnHover
              className="py-4"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
