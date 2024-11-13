import SEO from '@/components/SEO';
import Hero from '@/components/sections/SocialHero';
import Features from '@/components/sections/SocialFeatures';
import Social from '@/components/sections/Social';
import Process from '@/components/sections/SocialProcess';
import Benefits from '@/components/sections/SocialBenefits';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import Final from '@/components/sections/Final';
import { DecorativeDots, DecorativeCircles } from '@/components/Decorative';

const SocialMediaPage = () => {
  return (
    <main>
      <SEO 
        title="Sociala Medier"
        description="Låt oss hantera dina sociala medier. Vi skapar och publicerar engagerande innehåll som når din målgrupp och driver resultat, från endast 2990 kr/mån."
        canonical="https://almfors.se/sociala-medier"
      />
      <DecorativeDots />
      <Hero />
      <Features />
      <Social />
      <Process />
      <Benefits />
      <FAQ />
      <Contact />
      <Final />
      <DecorativeCircles />
    </main>
  );
};

export default SocialMediaPage;