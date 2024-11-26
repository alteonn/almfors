import SEO from '@/components/SEO';
import Hero from '@/components/sections/CustomerServiceHero';
import Support from '@/components/sections/CustomerServiceSupport';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import { DecorativeDots, DecorativeCircles } from '@/components/Decorative';

const CustomerServicePage = () => {
  return (
    <main>
      <SEO 
        title="Kundservice"
        description="Vi finns här för att hjälpa dig. Kontakta vår kundservice för support, frågor eller hjälp med din webbplats och sociala medier."
        canonical="https://almfors.se/kundservice"
      />
      <DecorativeDots />
      <Hero />
      <Support />
      <FAQ />
      <Contact />
      <DecorativeCircles />
    </main>
  );
};

export default CustomerServicePage;