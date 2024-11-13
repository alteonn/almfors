import { motion } from 'framer-motion';
import { Rocket, Code, Search, Globe } from 'lucide-react';

const steps = [
  {
    icon: Rocket,
    title: 'Uppstart',
    description: 'Vi analyserar dina behov och skapar en plan',
  },
  {
    icon: Code,
    title: 'Utveckling',
    description: 'Vi bygger din webbplats enligt specifikation',
  },
  {
    icon: Search,
    title: 'Genomgång',
    description: 'Vi går igenom allt tillsammans och finjusterar',
  },
  {
    icon: Globe,
    title: 'Publicering',
    description: 'Din nya webbplats går live och börjar generera resultat',
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vår process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Från idé till färdig webbplats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center space-y-4">
                <motion.div 
                  className="relative mx-auto w-16 h-16 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Animated background circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/10"
                    whileHover={{ 
                      scale: 1.2,
                      backgroundColor: "hsl(var(--primary) / 0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-8 h-8 text-primary relative z-10" />
                  </motion.div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="absolute -right-full top-1/2 h-0.5 bg-primary/20 hidden lg:block" 
                      style={{ width: 'calc(100% - 4rem)' }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                  )}
                </motion.div>

                <motion.h3 
                  className="text-xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.title}
                </motion.h3>

                <motion.p 
                  className="text-muted-foreground"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;