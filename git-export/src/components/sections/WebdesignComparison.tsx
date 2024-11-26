import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Box, Zap, Clock, Lock, Palette, Settings, Coins } from 'lucide-react';

const solutions = [
  {
    title: "Skräddarsydd webbplats",
    description: "En helt unik webbplats byggd från grunden",
    benefits: [
      {
        icon: Code,
        title: "Fullständig kontroll",
        description: "Total frihet i design och funktionalitet"
      },
      {
        icon: Zap,
        title: "Optimal prestanda",
        description: "Snabbare laddningstider och bättre SEO"
      },
      {
        icon: Lock,
        title: "Säkerhet",
        description: "Skräddarsydda säkerhetslösningar"
      },
      {
        icon: Settings,
        title: "Anpassningsbar",
        description: "Obegränsade möjligheter till expansion"
      }
    ],
    considerations: [
      "Längre utvecklingstid",
      "Högre initial kostnad",
      "Kräver mer underhåll",
      "Tekniskt mer komplex"
    ]
  },
  {
    title: "Squarespace",
    description: "Snabb och professionell lösning",
    benefits: [
      {
        icon: Box,
        title: "Snabb lansering",
        description: "Kom igång snabbt med färdiga mallar"
      },
      {
        icon: Palette,
        title: "Proffsig design",
        description: "Stilrena och moderna mallar"
      },
      {
        icon: Clock,
        title: "Enkelt underhåll",
        description: "Användarvänligt gränssnitt"
      },
      {
        icon: Coins,
        title: "Kostnadseffektivt",
        description: "Lägre initial kostnad"
      }
    ],
    considerations: [
      "Begränsad anpassning",
      "Mindre teknisk flexibilitet",
      "Beroende av plattformen",
      "Månadsavgift"
    ]
  }
];

const WebdesignComparison = () => {
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
            Välj rätt lösning för dig
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi hjälper dig att välja den bästa lösningen baserat på dina behov och mål
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">
                    {solution.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Fördelar</h3>
                    <div className="grid grid-cols-1 gap-6">
                      {solution.benefits.map((benefit) => (
                        <div
                          key={benefit.title}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <benefit.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-base">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Att tänka på</h3>
                    <ul className="space-y-3">
                      {solution.considerations.map((consideration) => (
                        <li
                          key={consideration}
                          className="text-muted-foreground flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebdesignComparison;