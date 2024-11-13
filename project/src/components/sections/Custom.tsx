import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Code2,
    title: 'Modern teknologi',
    description: 'Next.js, React, Vue.js, Node.js och fler moderna ramverk',
  },
  {
    icon: Layers,
    title: 'API-integrationer',
    description: 'Sömlös integration med affärssystem och tredjepartstjänster',
  },
  {
    icon: Lock,
    title: 'Säkerhet',
    description: 'Högsta säkerhetsnivå för din och dina kunders trygghet',
  },
  {
    icon: Zap,
    title: 'Prestanda',
    description: 'Optimerad för snabbhet och användarvänlighet',
  },
];

const Custom = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skräddarsydda lösningar
          </h2>
          <p className="text-lg text-muted-foreground">
            Vi använder tekniska språk och plattformar efter dina behov för att skapa 
            optimala lösningar som är säkra, snabba och användarvänliga.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Custom;