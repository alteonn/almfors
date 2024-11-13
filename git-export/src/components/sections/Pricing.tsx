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

const plans = [
  {
    name: 'SMAL',
    price: '9900',
    monthly: '999',
    description: 'Driver du en hobbyverksamhet, är du småföretagare eller är ditt företag helt nystartat?',
    features: [
      'Sex undersidor',
      'Grundläggande service och SEO',
      'Anpassad design',
      'Uppdateringar',
    ],
    popular: false,
  },
  {
    name: 'MEDIUM',
    price: '19900',
    monthly: '1999',
    description: 'Önskar du att du kunde få ut mer av hemsidan eller vill du ha en högre nivå av service?',
    features: [
      'Tio undersidor',
      'Utökad service och SEO',
      'Anpassad design',
      'Uppdateringar',
      'Hosting',
    ],
    popular: true,
  },
  {
    name: 'LARGE',
    price: '39900',
    monthly: '2999',
    description: 'Vill du ha en hemsida i toppskick, utan att själv behöva göra något.',
    features: [
      'Femton+ undersidor',
      'Premium service och SEO',
      'Anpassad design',
      'Kontinuerliga uppdateringar',
      'Hosting',
      'Support',
      'Grafisk profil',
      'Logotyp',
    ],
    popular: false,
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  const handlePackageSelect = (packageName: string) => {
    navigate('/bestall', { state: { package: packageName } });
  };

  return (
    <section id="priser" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Välj det paket som passar dig bäst
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent prissättning utan överraskningar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full hover-lift ${
                plan.popular ? 'border-primary shadow-lg' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                      Populärast
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="min-h-[60px]">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-2 text-center">
                    <span className="text-4xl font-bold">
                      {Number(plan.price).toLocaleString()} kr
                    </span>
                    <p className="text-sm text-muted-foreground">
                      + {plan.monthly} kr/mån
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Alla priser är exkl. moms
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
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
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => handlePackageSelect(`web-${plan.name.toLowerCase()}`)}
                  >
                    Välj {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;