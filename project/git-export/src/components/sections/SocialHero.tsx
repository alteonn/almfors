import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-32 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02]"
          style={{ y }}
        />
        
        <motion.div
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[20%] w-[30rem] h-[30rem] rounded-full bg-[hsl(var(--accent-blue))] blur-[100px] opacity-10"
        />
        
        <motion.div
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 right-[15%] w-[40rem] h-[40rem] rounded-full bg-[hsl(var(--accent-purple))] blur-[120px] opacity-10"
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter gradient-text"
          >
            Sociala medier som sköter sig själva
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Vi sköter dina sociala medier för ett fast månadspris. Vi levererar kvalitetsinnehåll 
            som kontinuerligt publiceras i de kanaler du väljer.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link to="/bestall">
              <Button 
                size="lg" 
                className="text-lg relative overflow-hidden group gradient-border hover-glow"
              >
                Kom igång
              </Button>
            </Link>
            
            <Link to="/kundservice">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg hover-lift"
              >
                Kontakta oss
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;