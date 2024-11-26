import SEO from '@/components/SEO';
import Hero from '@/components/sections/Hero';
import USP from '@/components/sections/USP';
import Pricing from '@/components/sections/Pricing';
import Process from '@/components/sections/Process';
import Custom from '@/components/sections/Custom';
import Brand from '@/components/sections/Brand';
import Clients from '@/components/sections/Clients';
import Contact from '@/components/sections/Contact';
import Final from '@/components/sections/Final';
import { DecorativeDots, DecorativeCircles, DecorativeLines } from '@/components/Decorative';

const HomePage = () => {
  return (
    <main>
      <SEO 
        title="Moderna webbplatser och sociala medier"
        description="Vi skapar moderna webbplatser och hanterar sociala medier som driver resultat. Få en professionell hemsida och effektiv närvaro på sociala medier med Almfors."
        type="website"
      />
      <DecorativeLines />
      <Hero />
      <DecorativeDots />
      <USP />
      <DecorativeCircles />
      <Pricing />
      <Custom />
      <Brand />
      <Process />
      <Clients />
      <Contact />
      <Final />
    </main>
  );
};

export default HomePage;