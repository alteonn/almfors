import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';

const AboutVision = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-8 relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/10"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Heart className="w-10 h-10 text-primary" />
            </motion.div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Vår vision
          </h2>
          
          <Card className="relative overflow-hidden group hover-lift">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
              initial={false}
            />
            
            <CardContent className="p-8 relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6 text-primary/20" />
              </motion.div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                En prenumerationsmodell där allt ingår utan att du behöver oroa dig för 
                oförutsedda utgifter eller höga kostnader. Du får det du behöver för en 
                låg månadskostnad, och du vet att din hemsida tas om hand med kärlek. 
                Ingen bindningstid. En plug-and-play-lösning som ger dig allt en 
                traditionell byrå erbjuder, till en bråkdel av priset.
              </p>

              {/* Decorative corner elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ 
                  rotate: [0, 90, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ 
                  rotate: [0, -90, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVision;