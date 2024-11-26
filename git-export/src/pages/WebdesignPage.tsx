import SEO from '@/components/SEO';
import Hero from '@/components/sections/WebdesignHero';
import Comparison from '@/components/sections/WebdesignComparison';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';
import { DecorativeDots, DecorativeCircles } from '@/components/Decorative';

const WebdesignPage = () => {
  return (
    <main>
      <SEO 
        title="Webbdesign"
        description="Skräddarsydda webbplatser och Squarespace-lösningar för ditt företag. Vi skapar moderna, snabba och användarvänliga hemsidor som driver resultat."
        canonical="https://almfors.se/webbdesign"
      />
      <DecorativeDots />
      <Hero />
      <Comparison />
      <Process />
      <Contact />
      <DecorativeCircles />
    </main>
  );
};

export default WebdesignPage;