import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { KeyBenefitsSection } from "@/components/home/KeyBenefitsSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <KeyBenefitsSection />
      <FeaturedProductsSection />
    </Layout>
  );
};

export default Index;
