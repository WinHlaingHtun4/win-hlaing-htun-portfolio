import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Clock, GraduationCap, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Briefcase,
      title: "Web Developer",
      description: "Creating modern web applications with Vue and Laravel",
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "Available 7:30 AM - 4:30 PM",
    },
    {
      icon: TrendingUp,
      title: "Trading Mentor",
      description: "FM360 Trading Academy instructor",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Studying proprietary funded challenges",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A passionate developer with expertise in web technologies and trading strategies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4 sm:mb-6">
                Professional Journey
              </h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                I'm a full-stack web developer specializing in creating modern, responsive web
                applications. With expertise in Vue.js and Laravel, I bring ideas to life through
                clean code and intuitive design.
              </p>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                Beyond development, I'm a trading mentor at FM360 Trading Academy, where I help
                aspiring traders master Forex and cryptocurrency markets through systematic
                approaches and risk management.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Currently, I'm also studying proprietary funded trading challenges, combining
                technical analysis with algorithmic approaches to achieve consistent results.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-4 sm:p-6 rounded-xl hover:scale-105 transition-transform"
                >
                  <div className="bg-gradient-to-br from-primary to-accent w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h4 className="font-display font-semibold mb-2 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
