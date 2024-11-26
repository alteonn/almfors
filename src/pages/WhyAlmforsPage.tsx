import SEO from '@/components/SEO';
import Hero from '@/components/sections/WhyAlmforsHero';
import Features from '@/components/sections/WhyAlmforsFeatures';
import Services from '@/components/sections/WhyAlmforsServices';
import Benefits from '@/components/sections/WhyAlmforsBenefits';
import Contact from '@/components/sections/Contact';
import { DecorativeDots, DecorativeCircles } from '@/components/Decorative';

const WhyAlmforsPage = () => {
  return (
    <main>
      <SEO 
        title="Varför Almfors?"
        description="Upptäck fördelarna med Almfors. Vi erbjuder moderna digitala lösningar med transparent prissättning, snabba leveranser och professionell service."
        canonical="https://almfors.se/varfor-almfors"
      />
      <DecorativeDots />
      <Hero />
      <Features />
      <Services />
      <Benefits />
      <Contact />
      <DecorativeCircles />
    </main>
  );
};

export default WhyAlmforsPage;