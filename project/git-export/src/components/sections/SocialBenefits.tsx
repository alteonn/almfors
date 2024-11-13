import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Briefcase, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Gör det du är bäst på',
    description: 'Vi hjälper ditt företag att synas på sociala medier. Allt sker enkelt och smidigt, så du kan fokusera på det du gör bäst – din kärnverksamhet.',
    gradient: 'from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))]'
  },
  {
    icon: Briefcase,
    title: 'Professionell hantering',
    description: 'Vi är som en Social Media Manager i ett! Vi tar hand om allt innehåll och strategisk planering.',
    gradient: 'from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-teal))]'
  },
  {
    icon: Sparkles,
    title: 'Flexibel lösning',
    description: 'Glöm de traditionella marknadsföringsbyråerna, långa "brainstorming-sessioner", onödig tidsåtgång och höga kostnader.',
    gradient: 'from-[hsl(var(--accent-teal))] to-[hsl(var(--accent-orange))]'
  }
];

const SocialBenefits = () => {
  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
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
            Almfors gör det enkelt
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vi skapar skräddarsytt innehåll för dina sociala medier varje vecka, 
            till ett rimligt pris och helt utan bindningstid.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full relative group overflow-hidden hover-lift">
                {/* Gradient background that appears on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl gradient-text">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
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

export default SocialBenefits;