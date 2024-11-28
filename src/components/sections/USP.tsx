import { motion } from 'framer-motion';
import { Shield, Zap, Smile, Server, Clock } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    icon: Clock,
    title: 'Inga bindningstider',
    description: 'Flexibla lösningar utan långa kontrakt',
    color: 'accent-blue',
    gradient: 'from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))]',
    animation: { rotate: [0, 360], y: [-5, 5] }
  },
  {
    icon: Shield,
    title: 'Garanti på design',
    description: 'Vi garanterar att du blir nöjd med designen av din nya webbplats',
    color: 'accent-purple',
    gradient: 'from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-teal))]',
    animation: { scale: [1, 1.2, 1], rotate: [-10, 10] }
  },
  {
    icon: Zap,
    title: 'Snabba laddtider',
    description: 'Idag är det viktigt med en snabb hemsida, det löser vi åt dig',
    color: 'accent-teal',
    gradient: 'from-[hsl(var(--accent-teal))] to-[hsl(var(--accent-orange))]',
    animation: { y: [-5, 5], rotate: [0, 10, 0] }
  },
  {
    icon: Smile,
    title: 'Användarvänlig',
    description: 'Du kan enkelt uppdatera din hemsida själv. Annars hjälper vår support dig!',
    color: 'accent-orange',
    gradient: 'from-[hsl(var(--accent-orange))] to-[hsl(var(--accent-blue))]',
    animation: { x: [-3, 3], y: [-3, 3] }
  },
  {
    icon: Server,
    title: 'Säker hosting',
    description: 'Snabba och säkra webbservrar med backup, för din säkerhet',
    color: 'accent-blue',
    gradient: 'from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-teal))]',
    animation: { scale: [1, 1.1, 1], rotate: [0, -10, 0] }
  },
];

const USP = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
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
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Varför välja Almfors?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi erbjuder en komplett lösning för din digitala närvaro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    className={`w-16 h-16 rounded-2xl bg-[hsl(var(--${feature.color}))]/10 flex items-center justify-center mx-auto mb-6`}
                  >
                    <feature.icon className={`w-8 h-8 text-[hsl(var(--${feature.color}))]`} />
                  </motion.div>
                  <CardTitle className={`text-xl text-[hsl(var(--${feature.color}))] text-center`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>

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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;