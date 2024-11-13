import SEO from '@/components/SEO';
import Hero from '@/components/sections/AboutHero';
import Vision from '@/components/sections/AboutVision';
import Values from '@/components/sections/AboutValues';
import Contact from '@/components/sections/Contact';
import { DecorativeDots, DecorativeCircles } from '@/components/Decorative';

const AboutPage = () => {
  return (
    <main>
      <SEO 
        title="Om oss"
        description="Lär känna Almfors - den personliga webbyrån som gör det lilla extra till ett rimligt pris. Vi skapar moderna digitala lösningar med passion och expertis."
        canonical="https://almfors.se/om-oss"
      />
      <DecorativeDots />
      <Hero />
      <Vision />
      <Values />
      <Contact />
      <DecorativeCircles />
    </main>
  );
};

export default AboutPage;