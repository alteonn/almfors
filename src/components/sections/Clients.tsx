import { motion } from 'framer-motion';

const clients = [
  { 
    name: 'Acasting', 
    url: 'https://acasting.se', 
    color: 'accent-blue',
    shadowColor: 'group-hover:shadow-[hsl(var(--accent-blue)_/_0.15)]'
  },
  { 
    name: 'Alocation', 
    url: 'https://alocation.se', 
    color: 'accent-purple',
    shadowColor: 'group-hover:shadow-[hsl(var(--accent-purple)_/_0.15)]'
  },
  { 
    name: 'Flytti', 
    url: 'https://flytti.se', 
    color: 'accent-teal',
    shadowColor: 'group-hover:shadow-[hsl(var(--accent-teal)_/_0.15)]'
  },
  { 
    name: 'DLE', 
    url: 'https://dleredovisning.se', 
    color: 'accent-orange',
    shadowColor: 'group-hover:shadow-[hsl(var(--accent-orange)_/_0.15)]'
  },
  { 
    name: 'Avidental', 
    url: 'https://avidental.se', 
    color: 'accent-blue',
    shadowColor: 'group-hover:shadow-[hsl(var(--accent-blue)_/_0.15)]'
  },
  { 
    name: 'Liminity', 
    url: 'https://liminity.se', 
    color: 'accent-purple',
    shadowColor: 'group-hover:shadow-[hsl(var(--accent-purple)_/_0.15)]'
  },
  { 
    name: 'BSV', 
    url: 'https://brandskyddsval.se', 
    color: 'accent-teal',
    shadowColor: 'group-hover:shadow-[hsl(var(--accent-teal)_/_0.15)]'
  },
];

const Clients = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kunder vi jobbar med
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi är stolta över att ha hjälpt dessa företag att lyckas online
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-transparent border rounded-xl p-8 h-full flex items-center justify-center text-center transition-all duration-300 
                  hover:text-foreground hover:border-transparent
                  shadow-sm hover:shadow-lg ${client.shadowColor}`}
              >
                <h3 className="text-xl font-semibold transition-colors duration-300">
                  {client.name}
                </h3>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;