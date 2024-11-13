import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Final = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 0% 0%, hsl(var(--accent-blue) / 0.15) 0%, transparent 50%)',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 right-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 100% 100%, hsl(var(--accent-purple) / 0.15) 0%, transparent 50%)',
        }}
      />

      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-[20%] text-primary/20"
      >
        <Star className="w-12 h-12" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-20 right-[20%] text-primary/20"
      >
        <Zap className="w-16 h-16" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [-15, 15, -15],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-[30%] text-primary/20"
      >
        <Target className="w-10 h-10" />
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight gradient-text">
              Professionell hemsida för din verksamhet
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Oavsett vilken bransch du jobbar i, förtjänar du en fantastisk hemsida 
              till ett överkomligt pris. Med vår lösning slipper du oförväntade och 
              höga kostnader, och får en pålitlig sida som fungerar smidigt och kräver 
              minimalt underhåll.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Din hemsida kommer att synas på rätt ställen och effektivt omvandla 
              besökare till kunder.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-8"
          >
            <Link to="/kundservice">
              <Button 
                size="lg" 
                className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
                Börja din digitala resa
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Final;