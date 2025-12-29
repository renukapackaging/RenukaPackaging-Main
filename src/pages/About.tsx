import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { LogoLoop } from "@/components/ui/LogoLoop";
import {
  ShieldCheck,
  Heart,
  Award,
  Utensils,
  Pill,
  Leaf,
  Sparkles,
  Droplets,
  Factory,
  Target,
  Eye,
  Check,
  CheckCircle2,
  Settings2,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/* ================= VALUES ================= */
const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with complete honesty, transparency, and ethical responsibility. Trust and long-term relationships are at the core of our business."
  },
  {
    icon: Heart,
    title: "Service",
    description:
      "Responsive communication, dependable timelines, and professional execution define how we serve our customers."
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Packaging quality is non-negotiable. Every product is manufactured under strict quality standards to ensure performance and safety."
  }
];

/* ================= WHY CHOOSE US ================= */
const reasons = [
  {
    title: "Precision Manufacturing",
    icon: CheckCircle2,
    description: "We ensure accurate dimensions, strong sealing, and uniform quality across every production batch."
  },
  {
    title: "Consistent Quality",
    icon: CheckCircle2,
    description: "Strict quality checks are followed at every stage to ensure safe, reliable, and durable packaging."
  },
  {
    title: "Customer-Focused Service",
    icon: Users,
    description: "From small orders to large-scale production, every project receives the same attention, transparency, and commitment."
  },
  {
    title: "Modern Infrastructure",
    icon: Settings2,
    description: "Our facility is equipped with advanced pouch making and spout insertion machines for efficient, high-speed production."
  }
];

/* ================= INDUSTRIES ================= */
const industries = [
  { icon: Utensils, name: "Food & Beverages" },
  { icon: Pill, name: "Pharmaceuticals" },
  { icon: Leaf, name: "Agriculture" },
  { icon: Sparkles, name: "Cosmetics & Toiletries" },
  { icon: Droplets, name: "Household Products" },
  { icon: Factory, name: "Industrial Packaging" }
];

/* ================= MACHINERY ================= */
const machinery = [
  {
    title: "Texpro 400",
    image: "/machine3.jpg",
    description: "Our high-speed workhorse, featuring a fully automated PLC system and servo-driven control for precision pouch making. It delivers exceptional output rates up to 600 PPM while maintaining micron-level accuracy."
  },
  {
    title: "Spout making machine",
    image: "/machine4.jpg",
    description: "A robust multi-format machine designed for continuous heavy-duty operation. Its versatile sealing capabilities support various pouch styles, ensuring reliable performance even during extended 24/7 production cycles."
  },
  {
    title: "Texpro 500 ",
    image: "/machine5.jpg",
    description: "Engineered for medium-to-high volume runs, this machine features advanced temperature control and tension systems. It ensures perfect seal integrity and minimal wastage, making it ideal for premium packaging."
  },
  {
    title: "Center Seal Machine",
    image: "/machine6.jpg",
    description: "A specialized unit for high-precision spout insertion. It utilizes automated alignment sensors to ensure leak-proof bonding, crucial for liquid packaging reliability in food and beverage sectors."
  },
  {
    title: "GS - 620",
    image: "/machine7.jpg",
    description: "An integrated end-to-end automated line that combines pouch forming, filling, and sealing. Optimized for scalability, it significantly reduces manual handling and ensures varying output speeds aligned with demand."
  },
  {
    title: "GS - 520",
    image: "/gt-24-plus-200.png",
    description: "A high-performance pouch making machine designed for versatility and speed. It handles complex pouch structures with ease, ensuring superior seal strength and productivity for diverse packaging needs."
  }
];

export default function About() {
  return (
    <Layout>
      <PageHero title="About Us" backgroundImage="/hero-product-bg.png" />

      {/* ================= INTRODUCTION ================= */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              About Renuka Packaging Industries
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Renuka Packaging Industries is a reliable manufacturer of high-quality flexible packaging and pouch making job works. We specialize in producing durable, precise, and consistent packaging solutions that meet modern industry standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With advanced machinery, skilled manpower, and disciplined manufacturing processes, we help brands protect their products, improve shelf appeal, and scale their packaging requirements with confidence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our focus is simple: quality production, on-time delivery, and long-term customer trust.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Choose Renuka Packaging Industries?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="h-full p-6 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 text-white">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="p-8 bg-card border rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                    <v.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <SplitSection
        title="Our Manufacturing Capabilities"
        image="/machine1.jpg"
        bg="white"
        paragraphs={[
          "Renuka Packaging Industries is equipped to handle a wide range of flexible packaging and pouch formats with consistent quality and precision.",
          "We continuously upgrade our machinery, processes, and quality systems to meet evolving customer and industry demands."
        ]}
      />

      {/* ================= COMMITMENT ================= */}
      <SplitSection
        title="Our Commitment"
        image="/machine2.jpg"
        reverse
        bg="muted"
        paragraphs={[
          "We are committed to on-time delivery, operational reliability, and consistent output. Structured workflows, proactive planning, and disciplined manufacturing help us deliver dependable results for every order.",
          "Our commitment to quality and consistency builds strong partnerships and supports long-term business growth for our customers."
        ]}
      />

      {/* ================= MACHINERY ================= */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">
              Our Machinery & Infrastructure
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {machinery.map((m, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Industries We Serve
            </h2>
          </AnimatedSection>

          <p className="text-muted-foreground text-center mb-12">
            Our flexible packaging solutions support a wide range of industries by meeting
            specific functional, regulatory, and performance requirements across sectors.
          </p>

          <div className="py-4">
            <LogoLoop
              logos={industries.map((ind) => ({
                node: (
                  <div className="w-44 h-28 flex flex-col items-center justify-center bg-card border rounded-lg shadow-sm">
                    <ind.icon className="text-primary mb-2" />
                    <span className="text-sm font-medium text-center px-2">
                      {ind.name}
                    </span>
                  </div>
                ),
                title: ind.name
              }))}
              logoHeight={112}
              gap={24}
              speed={40}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ================= SPLIT SECTION ================= */
function SplitSection({
  title,
  image,
  paragraphs,
  reverse = false,
  bg = "white"
}: {
  title: string;
  image: string;
  paragraphs: string[];
  reverse?: boolean;
  bg?: "white" | "muted";
}) {
  return (
    <section className={`py-24 ${bg === "muted" ? "bg-muted/10" : ""}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className={reverse ? "md:order-2" : ""}>
            <img
              src={image}
              alt={title}
              className="w-full rounded-lg shadow-sm hover:shadow-xl transition"
            />
          </div>

          <div className={reverse ? "md:order-1" : ""}>
            <h3 className="text-3xl font-bold mb-6">{title}</h3>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
