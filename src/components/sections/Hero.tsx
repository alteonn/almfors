import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Zap, ArrowRight, Star, Rocket } from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Enhanced floating elements with more dynamic animations
  const floatingElements = [
    {
      icon: Sparkles,
      className: "absolute top-20 left-[20%] text-[hsl(var(--accent-blue))]",
      animation: { 
        y: [-10, 10, -10], 
        rotate: [0, 5, 0], 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      },
    },
    {
      icon: Zap,
      className: "absolute bottom-20 right-[20%] text-[hsl(var(--accent-purple))]",
      animation: { 
        y: [10, -10, 10], 
        rotate: [0, -5, 0], 
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3]
      },
    },
    {
      icon: Star,
      className: "absolute top-40 right-[30%] text-[hsl(var(--accent-teal))]",
      animation: { 
        x: [-5, 5, -5], 
        y: [-5, 5, -5], 
        rotate: [0, 180, 0],
        opacity: [0.3, 0.6, 0.3]
      },
    },
    {
      icon: Rocket,
      className: "absolute bottom-40 left-[30%] text-[hsl(var(--accent-orange))]",
      animation: { 
        x: [5, -5, 5], 
        y: [5, -5, 5], 
        rotate: [45, 40, 45],
        opacity: [0.3, 0.6, 0.3]
      },
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-16 pb-32 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02]"
          style={{ y }}
        />
        
        {/* Enhanced background gradients */}
        <motion.div
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[20%] w-[40rem] h-[40rem] rounded-full bg-[hsl(var(--accent-blue))] blur-[120px] opacity-20"
        />
        
        <motion.div
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 right-[15%] w-[50rem] h-[50rem] rounded-full bg-[hsl(var(--accent-purple))] blur-[150px] opacity-20"
        />
      </div>

      {/* Floating elements with enhanced visibility */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          animate={element.animation}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
          className={element.className}
        >
          <element.icon className={`w-${12 + index * 2} h-${12 + index * 2}`} />
        </motion.div>
      ))}

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8 mt-8 md:mt-0"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter mb-8 md:mb-12">
                <motion.span 
                  className="gradient-text inline-block animate-gradient bg-[length:200%_auto]"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Skapa din digitala framtid med oss
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed px-4 md:px-0"
            >
              Till skillnad från traditionella byråer erbjuder vi en
              plug-and-play-lösning som täcker alla varumärkes- och
              marknadsföringsbehov. Vi garanterar snabba leveranser,
              transparenta och fasta priser samt användarvänliga hemsidor som är
              enkla att administrera.
            </motion.p>
          </motion.div>

          {/* Enhanced button section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link to="/bestall">
              <Button
                size="lg"
                className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] hover:opacity-90"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
                <motion.span
                  className="relative z-10 flex items-center text-white"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Kom igång
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </motion.span>
              </Button>
            </Link>
            
            <Link to="/kundservice">
              <Button
                size="lg"
                variant="outline"
                className="group hover:shadow-md transition-all duration-300 w-full sm:w-auto border-2 border-[hsl(var(--accent-purple))] hover:bg-[hsl(var(--accent-purple))/10]"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Kontakta oss
                </motion.span>
              </Button>
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-[hsl(var(--accent-blue))] hidden md:block"
            animate={{ 
              rotate: [-5, 5, -5],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-[hsl(var(--accent-purple))] hidden md:block"
            animate={{ 
              rotate: [5, -5, 5],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;