import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Fingerprint, Dna, Trophy, Clock, CheckCircle, Infinity } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Använd dina styrkor',
    description: 'Vi anpassar självklart innehållet efter ert unika DNA. Genom att lära känna din verksamhet, bransch och dina kunder skapar vi innehåll som verkligen träffar rätt.'
  },
  {
    icon: Dna,
    title: 'Ditt DNA',
    description: 'Hos Almfors har vi djup kunskap inom marknadsföring, sociala medier och entreprenörskap – och allt däremellan. Det är vår passion, och vi älskar det vi gör.'
  },
  {
    icon: Trophy,
    title: 'Skapat av proffs',
    description: 'Att vara ständigt närvarande på sociala medier kräver både tid och energi. Nu kan du äntligen lägga fokus på det du gör bäst.'
  },
  {
    icon: Clock,
    title: 'Mer tid åt annat',
    description: 'Varje månad får du chansen att granska och godkänna det innehåll vi har skapat för dina sociala medier.'
  },
  {
    icon: CheckCircle,
    title: 'Du som bestämmer',
    description: 'Ja, du läste rätt! Hos oss kan du när som helst uppgradera, nedgradera eller pausa din prenumeration.'
  },
  {
    icon: Infinity,
    title: 'Ingen bindningstid',
    description: 'Det ska vara effektivt, enkelt och tidsbesparande. Vi tar hand om allt – vi skapar inläggen, publicerar dem och mäter samt sammanställer resultaten åt dig.'
  }
];

const SocialFeatures = () => {
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
            Vi hjälper dig med allt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi vet att du redan förstår hur viktigt det är att synas i sociala medier. 
            Men vi vet också att det kan vara tidskrävande, krångligt och dyrt. Låt oss 
            ta hand om det! Almfors sköter dina sociala medier till en fast månadskostnad, 
            så du kan fokusera på det du är bra på!
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
              <Card className="h-full hover-lift hover-glow">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl gradient-text">
                    {feature.title}
                  </CardTitle>
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

export default SocialFeatures;