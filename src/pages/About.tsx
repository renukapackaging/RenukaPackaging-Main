import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Eye, Heart, CheckCircle, Factory, Utensils, Pill, Leaf, Sparkles, Droplets } from "lucide-react";

const values = [
  { icon: Award, title: "Certification Placeholder", description: "Certification description placeholder text here." },
  { icon: Target, title: "Quality Placeholder", description: "Quality description placeholder text here." },
  { icon: Eye, title: "Mission Placeholder", description: "Mission description placeholder text here." },
  { icon: Heart, title: "Vision Placeholder", description: "Vision description placeholder text here." },
  { icon: CheckCircle, title: "Values Placeholder", description: "Values description placeholder text here." },
];

const industries = [
  { icon: Utensils, name: "Industry 1 Placeholder" },
  { icon: Pill, name: "Industry 2 Placeholder" },
  { icon: Leaf, name: "Industry 3 Placeholder" },
  { icon: Sparkles, name: "Industry 4 Placeholder" },
  { icon: Droplets, name: "Industry 5 Placeholder" },
  { icon: Factory, name: "Industry 6 Placeholder" },
];

const About = () => {
  return (
    <Layout>
      <PageHero title="About Us Placeholder" />
      
      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Company Overview Placeholder
            </h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatedSection delay={100}>
              <p className="text-muted-foreground leading-relaxed">
                First paragraph placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                Second paragraph placeholder. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-muted-foreground leading-relaxed">
                Third paragraph placeholder. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                sequi nesciunt.
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
              Our Values Placeholder
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
              Industries Served Placeholder
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="flex flex-col items-center p-4 rounded-lg hover-lift bg-card border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <industry.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {industry.name}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
