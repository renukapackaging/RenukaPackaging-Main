import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

const Contact = () => {
  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="Get in touch with us for any inquiries about our flexible packaging solutions." />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Request a Quote</h2>
                  <QuoteForm />
                </CardContent>
              </Card>
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection delay={100}>
                <Card className="border-border/50">
                  <CardContent className="p-6 space-y-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Contact Details</h2>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">
                          Plot No. 460, 461 P,<br />
                          Beside Pouchamma Temple,<br />
                          Rami Reddy Nagar, Jeedimetla Village,<br />
                          Hyderabad - 500 055.
                        </p>
                        <a
                          href="https://maps.app.goo.gl/wjJN2xtquJMapzxx7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm mt-1 inline-block"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <div className="flex flex-col">
                          <a href="tel:+919912318175" className="text-muted-foreground hover:text-primary transition-colors">+91 9912318175</a>
                          <a href="tel:+918340913271" className="text-muted-foreground hover:text-primary transition-colors">+91 8340913271</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <div className="flex flex-col">
                          <a href="mailto:renukapackaging18@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            renukapackaging18@gmail.com <span className="text-xs text-muted-foreground/70">(Company)</span>
                          </a>
                          <a href="mailto:Sales.renukapack@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            Sales.renukapack@gmail.com <span className="text-xs text-muted-foreground/70">(Sales)</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="overflow-hidden rounded-lg h-64 border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3616.3894733013394!2d78.4567591!3d17.5246958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9109f840cda1%3A0x5f59fdc9fe49dd21!2sRenuka%20packaging%20industries!5e1!3m2!1sen!2sin!4v1766558171820!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
