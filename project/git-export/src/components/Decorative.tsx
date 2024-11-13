import { motion } from 'framer-motion';

export const DecorativeArrow = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed right-10 bottom-10 z-10"
  >
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      className="text-primary/20"
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, 0]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path
        d="M40 80L80 40M80 40H50M80 40V70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  </motion.div>
);

export const DecorativeLines = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Lines removed */}
  </div>
);

export const DecorativeDots = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div 
      className="absolute top-20 right-20 grid grid-cols-3 gap-2"
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-1 h-1 rounded-full bg-primary/30"
        />
      ))}
    </motion.div>
  </div>
);

export const DecorativeCircles = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.2, 0.1]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute -top-20 -right-20 w-[40rem] h-[40rem] rounded-full border border-primary/10"
    />
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15]
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
      className="absolute -bottom-10 -left-10 w-[30rem] h-[30rem] rounded-full border border-primary/10"
    />
  </div>
);