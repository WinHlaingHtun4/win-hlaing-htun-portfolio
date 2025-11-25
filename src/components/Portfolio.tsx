import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with Vue.js and Laravel",
      tags: ["Vue.js", "Laravel", "MySQL", "Tailwind"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Trading Dashboard",
      description: "Real-time trading analytics and portfolio management system",
      tags: ["Vue.js", "WebSocket", "Chart.js", "API"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tags: ["Vue.js", "PHP", "REST API", "MySQL"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Crypto Trading Bot",
      description: "Automated trading bot for cryptocurrency markets",
      tags: ["Python", "Binance API", "Automation", "Backtesting"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical implementations
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform"
            >
              <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
