import { motion } from 'framer-motion';
import { Shield, Zap, Smile, Server, Clock } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    icon: Clock,
    title: 'Inga bindningstider',
    description: 'Flexibla lösningar utan långa kontrakt',
    color: 'accent-blue'
  },
  {
    icon: Shield,
    title: 'Garanti på design',
    description: 'Vi garanterar att du blir nöjd med designen av din nya webbplats',
    color: 'accent-purple'
  },
  {
    icon: Zap,
    title: 'Snabba laddtider',
    description: 'Idag är det viktigt med en snabb hemsida, det löser vi åt dig',
    color: 'accent-teal'
  },
  {
    icon: Smile,
    title: 'Användarvänlig',
    description: 'Du kan enkelt uppdatera din hemsida själv. Annars hjälper vår support dig!',
    color: 'accent-orange'
  },
  {
    icon: Server,
    title: 'Säker hosting',
    description: 'Snabba och säkra webbservrar med backup, för din säkerhet',
    color: 'accent-blue'
  },
];

const USP = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
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
              <Card className="h-full hover-lift hover-glow transition-all duration-300">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className={`w-10 h-10 mb-4 text-[hsl(var(--${feature.color}))]`} />
                  </motion.div>
                  <CardTitle className={`text-[hsl(var(--${feature.color}))]`}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;