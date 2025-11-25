import { motion } from "framer-motion";
import { Code2, Database, Globe, Terminal, Zap, Layers } from "lucide-react";

const TechIcons = () => {
  const icons = [
    { Icon: Code2, delay: 0, position: "top-8 left-8" },
    { Icon: Database, delay: 0.2, position: "top-8 right-8" },
    { Icon: Globe, delay: 0.4, position: "bottom-8 left-8" },
    { Icon: Terminal, delay: 0.6, position: "bottom-8 right-8" },
    { Icon: Zap, delay: 0.8, position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { Icon: Layers, delay: 1, position: "top-1/3 right-1/4" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30" />
      </div>

      {/* Floating Icons */}
      {icons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
          className={`absolute ${position}`}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3 + index * 0.5,
              ease: "easeInOut",
            }}
            className="glass-card p-3 sm:p-4 rounded-xl glow-accent hover:scale-110 transition-transform cursor-pointer"
          >
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      {/* Center Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="w-48 h-48 sm:w-64 sm:h-64 border-2 border-primary/20 rounded-full"
        />
      </div>
    </div>
  );
};

export default TechIcons;
