import { AnimatedSection } from "@/components/ui/AnimatedSection";

const machinery = [
    {
        title: "Galaxy G-20 HS",
        image: "/machine3.jpg",
        description: "Our high-speed workhorse, featuring a fully automated PLC system and servo-driven control for precision pouch making. It delivers exceptional output rates up to 600 PPM while maintaining micron-level accuracy."
    },
    {
        title: "Texpro 500",
        image: "/machine4.jpg",
        description: "A robust multi-format machine designed for continuous heavy-duty operation. Its versatile sealing capabilities support various pouch styles, ensuring reliable performance even during extended 24/7 production cycles."
    },
    {
        title: "Texpro 400",
        image: "/machine5.jpg",
        description: "Engineered for medium-to-high volume runs, this machine features advanced temperature control and tension systems. It ensures perfect seal integrity and minimal wastage, making it ideal for premium packaging."
    },
    {
        title: "Spout Making Machine",
        image: "/machine6.jpg",
        description: "A specialized unit for high-precision spout insertion. It utilizes automated alignment sensors to ensure leak-proof bonding, crucial for liquid packaging reliability in food and beverage sectors."
    },
    {
        title: "High-Speed Packaging Line",
        image: "/machine7.jpg",
        description: "An integrated end-to-end automated line that combines pouch forming, filling, and sealing. Optimized for scalability, it significantly reduces manual handling and ensures varying output speeds aligned with demand."
    }
];

export function TechnologySection() {
    return (
        <section className="py-24 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Machinery & Infrastructure
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We rely on top-tier manufacturing assets to deliver precision and consistency in every batch.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {machinery.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 100}>
                            <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
