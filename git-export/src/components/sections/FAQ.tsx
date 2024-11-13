import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Hur lång tid tar det att komma igång?',
    answer: 'Från första mötet till att skapa en grafisk profil och göra den första publiceringen tar det vanligtvis 3-4 dagar.'
  },
  {
    question: 'Kommer innehållet vara anpassat efter mitt företag?',
    answer: 'Innehållet är helt och hållet anpassat efter din verksamhet för att effektivt nå ut till dina kunder.'
  },
  {
    question: 'Hur startar jag en prenumeration?',
    answer: 'Kontakta oss så bokar vi ett intromöte, går igenom era behov och sätter upp en plan. Du kan avsluta samarbetet när du vill.'
  },
  {
    question: 'Vad är fördelarna med almfors?',
    answer: 'Vi är proffs på det vi gör och erbjuder marknadens bästa priser. Vi arbetar gärna nära våra kunder, om intresse finns, för att skapa de bästa resultaten.'
  },
  {
    question: 'Finns det någon bindningstid?',
    answer: 'Nej, avsluta när du vill! 30 dagars uppsägningstid.'
  },
  {
    question: 'Hur betalar man?',
    answer: 'Vi fakturerar månadsvis i förskott, eftersom ditt innehåll alltid planeras för den kommande månaden.'
  },
  {
    question: 'Tar ni kort åt oss?',
    answer: 'Absolut, men det ingår inte i våra prisplaner och offereras utöver prisplanen. Kontakta oss så berättar vi mer!'
  },
  {
    question: 'Äger jag materialet?',
    answer: 'Du äger materialet till 100%. Allt postat på ditt konto och du får behålla det efter avslutat samarbete.'
  }
];

const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
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
            opacity: [0.1, 0.2, 0.1],
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
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Vanliga frågor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Här hittar du svar på de vanligaste frågorna om våra tjänster
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-primary/20"
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-primary/20"
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-background/80 backdrop-blur-sm rounded-lg border px-6 hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-primary" />
                      </motion.div>
                      <span className="text-lg font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;