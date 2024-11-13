import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialProcess = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
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
          opacity: [0.05, 0.1, 0.05],
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

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            Nu är det din tur
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Nu är det din tur att använda din superkraft medan vi använder vår. 
            Slappna av och njut av resan, för nu kör vi!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            <Card className="relative overflow-hidden group hover-lift">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                initial={false}
              />
              <CardContent className="p-8 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <Zap className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold gradient-text">
                  Effektivt och enkelt
                </h3>
                <p className="text-muted-foreground">
                  Tänk dig att vi tar hand om allt – vi skapar inläggen, publicerar dem 
                  och mäter samt sammanställer resultaten åt dig.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover-lift">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-teal))] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                initial={false}
              />
              <CardContent className="p-8 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <Target className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold gradient-text">
                  Rätt målgrupp
                </h3>
                <p className="text-muted-foreground">
                  Vi ser till att du når ut till rätt personer och omvandlar dem till 
                  nya kunder.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-12"
          >
            <Link to="/kundservice">
              <Button 
                size="lg" 
                className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
                Kom igång idag
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProcess;