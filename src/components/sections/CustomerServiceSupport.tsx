import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const CustomerServiceHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <MessageCircle className="w-10 h-10 text-primary" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter gradient-text"
          >
            Hur kan vi hjälpa dig?
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Vi finns här för att hjälpa dig med alla frågor och funderingar. 
            Vårt dedikerade supportteam är redo att assistera dig med vad du än behöver.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button 
              size="lg" 
              className="text-lg relative overflow-hidden group gradient-border hover-glow"
              onClick={scrollToContact}
            >
              Kontakta support
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg hover-lift"
              onClick={scrollToFAQ}
            >
              Läs vanliga frågor
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CustomerServiceHero;