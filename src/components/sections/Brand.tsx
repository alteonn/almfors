import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Zap, Users } from 'lucide-react';

const Brand = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Animated background elements */}
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
          background: 'radial-gradient(circle at 0% 0%, hsl(var(--primary-foreground) / 0.2) 0%, transparent 50%)',
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
          background: 'radial-gradient(circle at 100% 100%, hsl(var(--primary-foreground) / 0.15) 0%, transparent 50%)',
        }}
      />

      {/* Floating shapes */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          y: [-20, 20, -20]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-32 h-32 border border-primary-foreground/10 rounded-full"
      />
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          y: [20, -20, 20]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 border border-primary-foreground/10 rounded-full"
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground"
          >
            Varumärkesstrategi
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Konvertering</h3>
              <p className="text-primary-foreground/80 text-sm">Optimerad för att nå rätt målgrupp</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Design</h3>
              <p className="text-primary-foreground/80 text-sm">Användarvänlig och modern design</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">SEO</h3>
              <p className="text-primary-foreground/80 text-sm">Optimerad för sökmotorer</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl mb-8 text-primary-foreground/90"
          >
            Helheten från design till konvertering oavsett bransch. En välfungerande 
            hemsida kombinerar webbpsykologi, användarvänlig design och SEO-optimerad 
            text som speglar ert varumärke.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/kundservice">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Kom igång med din strategi
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;