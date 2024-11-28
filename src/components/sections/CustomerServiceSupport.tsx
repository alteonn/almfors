import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const supportChannels = [
  {
    icon: Phone,
    title: 'Ring oss',
    description: 'Vi finns tillgängliga vardagar',
    contact: '+46 (0)70 22 180 22',
    action: 'tel:+46702218022',
    color: 'accent-blue',
    animation: { rotate: [0, 10, -10, 0] },
    gradient: 'from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))]'
  },
  {
    icon: MessageSquare,
    title: 'Kontakta oss',
    description: 'Vi svarar normalt inom 24 timmar',
    buttonText: 'Skicka meddelande',
    color: 'accent-purple',
    animation: { y: [-3, 3, -3] },
    gradient: 'from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-teal))]'
  },
  {
    icon: Clock,
    title: 'Öppettider',
    description: 'Måndag-Fredag',
    contact: '09:00-17:00',
    color: 'accent-orange',
    animation: { scale: [1, 1.1, 1] },
    gradient: 'from-[hsl(var(--accent-teal))] to-[hsl(var(--accent-orange))]'
  }
];

const CustomerServiceSupport = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.03, 0.06, 0.03],
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
            opacity: [0.03, 0.06, 0.03],
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Card className="h-full relative group overflow-hidden hover-lift">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                    <motion.div
                      whileHover={channel.animation}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`w-16 h-16 rounded-2xl bg-[hsl(var(--${channel.color}))]/10 flex items-center justify-center relative`}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-primary/5"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 0]
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <channel.icon className={`w-8 h-8 text-[hsl(var(--${channel.color}))] relative z-10`} />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className={`text-xl font-semibold text-[hsl(var(--${channel.color}))]`}>
                        {channel.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {channel.description}
                      </p>
                    </div>

                    {channel.buttonText ? (
                      <Button 
                        variant="ghost" 
                        onClick={scrollToContact}
                        className={`w-full mt-auto hover:bg-[hsl(var(--${channel.color}))]/10 hover:text-[hsl(var(--${channel.color}))] relative group overflow-hidden`}
                      >
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        />
                        <span className="relative z-10">{channel.buttonText}</span>
                      </Button>
                    ) : channel.action ? (
                      <a href={channel.action} className="mt-auto w-full">
                        <Button 
                          variant="ghost" 
                          className={`w-full hover:bg-[hsl(var(--${channel.color}))]/10 hover:text-[hsl(var(--${channel.color}))] relative group overflow-hidden`}
                        >
                          <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                          />
                          <span className="relative z-10">{channel.contact}</span>
                        </Button>
                      </a>
                    ) : (
                      <p className="text-lg font-medium mt-auto">
                        {channel.contact}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceSupport;