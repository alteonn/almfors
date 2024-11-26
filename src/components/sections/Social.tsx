import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const packages = [
  {
    name: 'MINI',
    price: '2990',
    description: 'Öka din närvaro på sociala medier med två inlägg i veckan, skräddarsydda för att hjälpa din verksamhet att växa.',
    features: [
      'Workshop',
      '2 inlägg /vecka',
      '1 sociala medier',
      'Optimering av konto',
      'Skräddarsytt innehåll',
      'Anpassat innehåll',
    ],
    popular: false,
  },
  {
    name: 'MEDIUM',
    price: '4990',
    description: 'Få fler inlägg varje vecka på två sociala medier och följ utvecklingen med detaljerade månadsrapporter.',
    features: [
      'Workshop',
      '3 inlägg /vecka',
      '2 sociala medier',
      'Optimering av konto',
      'Skräddarsytt innehåll',
      'Anpassat innehåll',
      '4 story /vecka',
      'Månadsrapport',
    ],
    popular: true,
  },
  {
    name: 'LARGE',
    price: '9900',
    description: 'Vi tar hand om allt! Massor av innehåll och dessutom sköter vi kommentarsfältet åt dig.',
    features: [
      'Workshop',
      '4 inlägg /vecka',
      '3 sociala medier',
      'Optimering av konto',
      'Skräddarsytt innehåll',
      'Anpassat innehåll',
      '7 story /vecka',
      'Månadsrapport',
      'Månadsavstämning',
      'Tillägnad projektledare',
      'Rörligt material',
      'SoMe kundservice',
    ],
    popular: false,
  },
];

const Social = () => {
  const navigate = useNavigate();

  const handlePackageSelect = (packageName: string) => {
    navigate('/bestall', { state: { package: packageName } });
  };

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
            Våra paket för sociala medier
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Välj det paket som passar dina behov bäst
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full hover-lift ${
                pkg.popular ? 'border-primary shadow-lg' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                      Populärast
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="min-h-[60px]">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-2 text-center">
                    <span className="text-4xl font-bold">
                      {Number(pkg.price).toLocaleString()} kr
                    </span>
                    <p className="text-sm text-muted-foreground">
                      per månad
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Alla priser är exkl. moms
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? 'default' : 'outline'}
                    onClick={() => handlePackageSelect(`social-${pkg.name.toLowerCase()}`)}
                  >
                    Välj {pkg.name}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          Inga avtal eller bindningstider och dessutom kan du uppgradera, nedgradera 
          eller pausa din prenumeration när som helst.
        </motion.p>
      </div>
    </section>
  );
};

export default Social;