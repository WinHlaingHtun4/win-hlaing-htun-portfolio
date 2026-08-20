import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Real Projects List
  const projects = [
    {
      title: "Y2T2 Engineering",
      description: "Landing page and registration system for an Internet Service Provider (ISP). Features dark mode, multilingual support (EN/MY), and Google Sheets integration.",
      tags: ["React", "Tailwind CSS", "Google Sheets API"],
      gradient: "from-blue-600 to-cyan-500",
      liveUrl: "https://y2t2enginnering.com",
      badge: "Client Project",
      isPrivate: false,
    },
    {
      title: "Elemax Tech",
      description: "Full-stack corporate web application for a tech & electronics service provider with modern UI/UX and API endpoints.",
      tags: ["Vue.js", "Laravel", "REST API", "Tailwind CSS"],
      gradient: "from-teal-500 to-emerald-500",
      liveUrl: "https://elemaxtech.com",
      badge: "Full-Stack",
      isPrivate: false,
    },
    {
      title: "Mental Health Monitoring System (Houkoku)",
      description: "Japan Enterprise System that analyzes handwriting from employee report forms for medical psychological evaluation. Features WebSocket real-time chat.",
      tags: ["Pure PHP", "JavaScript", "SCSS", "WebSockets"],
      gradient: "from-red-600 to-rose-500",
      badge: "🇯🇵 Japan HealthTech",
      isPrivate: true,
      privateNote: "Internal Enterprise System",
    },
    {
      title: "Saitama Welfare Portal",
      description: "Official public welfare system for Saitama Prefecture Government (Japan) supporting child care and families. Built according to JIS Web Accessibility standards.",
      tags: ["JavaScript", "Web Accessibility (JIS)", "GIS / Maps API"],
      gradient: "from-amber-500 to-red-500",
      liveUrl: "https://kodomoouen.pref.saitama.lg.jp/",
      badge: "🇯🇵 Japan Govt",
      isPrivate: false,
    },
    {
      title: "Linkalink Web Platforms",
      description: "Frontend architecture and UI development for Japanese web platforms, built with strict UI/UX performance optimization standards.",
      tags: ["Frontend Architecture", "HTML5/SCSS", "JavaScript", "Responsive UI"],
      gradient: "from-purple-600 to-indigo-500",
      liveUrl: "https://linkalink.jp/",
      badge: "🇯🇵 Linkalink",
      isPrivate: false,
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
            A showcase of my local client work and international Japanese enterprise implementations
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform flex flex-col justify-between"
            >
              <div>
                {/* Header Gradient Banner */}
                <div className={`h-32 sm:h-40 bg-gradient-to-br ${project.gradient} relative flex items-start justify-end p-4`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <span className="relative z-10 text-xs font-semibold px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                    {project.badge}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                {project.isPrivate ? (
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground py-2 border border-border rounded-md bg-secondary/20">
                    <Lock className="h-3.5 w-3.5" />
                    <span>{project.privateNote}</span>
                  </div>
                ) : (
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
