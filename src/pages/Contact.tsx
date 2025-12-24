import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      toast({ title: "Success Placeholder", description: "Form submitted successfully." });
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <PageHero title="Contact Us Placeholder" />
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Success Message Placeholder</h2>
                <p className="text-muted-foreground mb-6">Thank you message placeholder text here.</p>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero title="Contact Us Placeholder" subtitle="Contact page subtitle placeholder." />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Send Message Placeholder</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name Placeholder</Label>
                      <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={errors.name ? "border-destructive" : ""} />
                      {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Placeholder</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={errors.email ? "border-destructive" : ""} />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject Placeholder</Label>
                      <Input id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={errors.subject ? "border-destructive" : ""} />
                      {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <Label htmlFor="message">Message Placeholder</Label>
                      <Textarea id="message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={errors.message ? "border-destructive" : ""} />
                      {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                    </div>
                    <Button type="submit" size="lg" className="w-full">Submit Placeholder</Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection delay={100}>
                <Card className="border-border/50">
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Contact Details Placeholder</h2>
                    <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /><p className="text-muted-foreground">Address Placeholder, City, Country</p></div>
                    <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><p className="text-muted-foreground">Phone Placeholder</p></div>
                    <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><p className="text-muted-foreground">Email Placeholder</p></div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="placeholder-gradient rounded-lg h-64 flex items-center justify-center border border-border/50">
                  <span className="text-muted-foreground font-medium">Map Placeholder</span>
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
