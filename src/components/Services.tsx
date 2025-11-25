import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, TrendingUp, Wrench, MessageSquare } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies. From responsive frontends to robust backends.",
      features: ["Vue.js & Laravel", "Responsive Design", "API Development", "Database Design"],
    },
    {
      icon: TrendingUp,
      title: "Trading Mentorship",
      description:
        "Comprehensive trading education covering Forex and cryptocurrency markets with proven strategies.",
      features: ["Technical Analysis", "Risk Management", "Strategy Development", "Market Psychology"],
    },
    {
      icon: Wrench,
      title: "Automation & Tools",
      description:
        "Custom automation solutions and trading bots to streamline your workflow and trading operations.",
      features: ["Python Scripting", "Trading Bots", "API Integration", "Data Analysis"],
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description:
        "Technical consulting and troubleshooting for web development projects and trading systems.",
      features: ["Code Review", "Architecture Design", "Performance Optimization", "Strategy Evaluation"],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive solutions for your web development and trading needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform group"
            >
              <div className="bg-gradient-to-br from-primary to-accent w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-xs sm:text-sm text-muted-foreground flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
