import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Zap, ArrowRight, Star, Rocket } from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Floating icons with different animations
  const floatingElements = [
    {
      icon: Sparkles,
      className: "absolute top-20 left-[20%] text-primary/20",
      animation: { y: [-10, 10, -10], rotate: [0, 5, 0], scale: [1, 1.2, 1] },
    },
    {
      icon: Zap,
      className: "absolute bottom-20 right-[20%] text-primary/20",
      animation: { y: [10, -10, 10], rotate: [0, -5, 0], scale: [1, 1.1, 1] },
    },
    {
      icon: Star,
      className: "absolute top-40 right-[30%] text-primary/20",
      animation: { x: [-5, 5, -5], y: [-5, 5, -5], rotate: [0, 180, 0] },
    },
    {
      icon: Rocket,
      className: "absolute bottom-40 left-[30%] text-primary/20",
      animation: { x: [5, -5, 5], y: [5, -5, 5], rotate: [45, 40, 45] },
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-16 pb-32 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02]"
          style={{ y }}
        />
      </div>

      {/* Floating elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          animate={element.animation}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
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
            <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter mb-8 md:mb-12">
              <motion.span
                className="gradient-text inline-block"
                animate={{ scale: [1, 1.02, 1], y: [0, -2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Skapa din digitala framtid med oss
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed px-4 md:px-0 select-none"
            >
              Till skillnad från traditionella byråer erbjuder vi en
              plug-and-play-lösning som täcker alla varumärkes- och
              marknadsföringsbehov. Vi garanterar snabba leveranser,
              transparenta och fasta priser samt användarvänliga hemsidor som är
              enkla att administrera.
            </motion.p>
          </motion.div>

          {/* Knappsektion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            {/* Länk för "Kom igång" */}
            <Link to="/bestall">
              <Button
                size="lg"
                className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                <motion.span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <motion.span
                  className="relative z-10 flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Kom igång
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </Link>

            {/* Länk för "Kontakta oss" */}
            <Link to="/kundservice">
              <Button
                size="lg"
                variant="outline"
                className="group hover:shadow-md transition-all duration-300 w-full sm:w-auto"
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
