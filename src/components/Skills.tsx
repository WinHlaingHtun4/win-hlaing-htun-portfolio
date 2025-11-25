import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "Vue.js", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "PHP 8.3", level: 85 },
        { name: "Laravel 6", level: 82 },
        { name: "MySQL", level: 80 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Linux", level: 78 },
        { name: "Git", level: 88 },
        { name: "Termux", level: 75 },
        { name: "Web Animations", level: 85 },
      ],
    },
    {
      category: "Trading & Analysis",
      skills: [
        { name: "Forex Trading", level: 90 },
        { name: "Crypto Trading", level: 85 },
        { name: "Backtesting", level: 88 },
        { name: "Trading Automation", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive set of technical and analytical skills honed through years of practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-6">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-primary text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
