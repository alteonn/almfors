import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Zap, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Vi älskar det vi gör och det syns i varje projekt vi levererar.',
    gradient: 'from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))]',
    animation: { scale: [1, 1.2, 1], rotate: [-10, 10] }
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Vi använder den senaste tekniken för att skapa effektiva lösningar.',
    gradient: 'from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-teal))]',
    animation: { y: [-5, 5], rotate: [0, 360] }
  },
  {
    icon: Shield,
    title: 'Kvalitet',
    description: 'Vi kompromissar aldrig med kvaliteten i våra leveranser.',
    gradient: 'from-[hsl(var(--accent-teal))] to-[hsl(var(--accent-orange))]',
    animation: { scale: [1, 1.1, 1], rotate: [0, -10, 0] }
  },
  {
    icon: Users,
    title: 'Samarbete',
    description: 'Vi ser våra kunder som partners och växer tillsammans.',
    gradient: 'from-[hsl(var(--accent-orange))] to-[hsl(var(--accent-blue))]',
    animation: { x: [-3, 3], y: [-3, 3] }
  }
];

const AboutValues = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Våra värderingar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Det som driver oss framåt och gör oss unika
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full relative group overflow-hidden hover-lift">
                {/* Gradient background that appears on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={value.animation}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <value.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl gradient-text text-center">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>

                {/* Decorative elements */}
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;