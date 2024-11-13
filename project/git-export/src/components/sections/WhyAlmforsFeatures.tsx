import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Zap, Shield, Users, Server, ChartBar } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Hemsida',
    description: 'Du får en hemsida du är 100% nöjd med. Den uppfyller dina krav både visuellt och funktionellt. Vi är inte klara förrän du har en hemsida som möter alla dina behov.',
    gradient: 'from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))]',
    animation: { rotate: [0, 360], y: [-5, 5] }
  },
  {
    icon: Zap,
    title: 'Uppdateringar',
    description: 'Slipp hålla koll på uppdateringar för din hemsida. Vi säkerställer att den är uppdaterad och säker automatiskt.',
    gradient: 'from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-teal))]',
    animation: { scale: [1, 1.2, 1], rotate: [-10, 10] }
  },
  {
    icon: Shield,
    title: 'Service',
    description: 'Vi sköter all service av din hemsida utan att du ens märker det. Du kan fokusera på det du är bäst på medan vi tar hand om resten.',
    gradient: 'from-[hsl(var(--accent-teal))] to-[hsl(var(--accent-orange))]',
    animation: { y: [-5, 5], rotate: [0, 10, 0] }
  },
  {
    icon: Users,
    title: 'SEO',
    description: 'Att ha en snygg hemsida är kul, men att ha en hemsida som både är snygg och syns är roligare. Vi sköter sökordsoptimeringen åt dig så att din hemsida når ut till rätt kunder!',
    gradient: 'from-[hsl(var(--accent-orange))] to-[hsl(var(--accent-blue))]',
    animation: { x: [-5, 5], rotate: [-5, 5] }
  },
  {
    icon: Server,
    title: 'Hosting',
    description: 'Vi ser till att din hemsida ligger på snabba servrar, vilket garanterar att den alltid är snabb, smidig och säker.',
    gradient: 'from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-teal))]',
    animation: { scale: [1, 1.1, 1], rotate: [0, -10, 0] }
  },
  {
    icon: ChartBar,
    title: 'Analytics',
    description: 'Du kan enkelt logga in på din hemsida och övervaka trafiken. Detta hjälper dig att lätt identifiera förbättringsmöjligheter för din verksamhet.',
    gradient: 'from-[hsl(var(--accent-teal))] to-[hsl(var(--accent-purple))]',
    animation: { y: [-3, 3], x: [-3, 3] }
  }
];

const WhyAlmforsFeatures = () => {
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Vad ingår?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hos Almfors får du en komplett lösning där vi inte kompromissar med kvaliteten 
            för att skapa en fullt fungerande hemsida. Vår paketlösning gör det enkelt för 
            dig och ditt företag att underhålla hemsidan utan att det blir tidskrävande 
            eller kostsamt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full relative group overflow-hidden hover-lift">
                {/* Gradient background that appears on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={feature.animation}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl gradient-text">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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

export default WhyAlmforsFeatures;