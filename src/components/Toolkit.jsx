import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Laptop,
  Brain,
  Lightbulb,
  Monitor,
  Users,
  BookOpen,
} from "lucide-react";
import { TOOLKIT } from "../constants";

const skillIcons = {
  "PhET Simulations": Laptop,
  GeoGebra: Monitor,
  Desmos: Monitor,
  Smartboard: Monitor,
  "Microsoft OneNote": BookOpen,
  "Microsoft Teams": Users,
  "Lesson Study": Brain,
  "CLIL (Content & Language Integrated Learning)": BookOpen,
  "Student Mental Health": Users,
  "Olympiad Diagnosis": Lightbulb,
  "Differentiated Instruction": Users,
  "Formative Assessment": BookOpen,
};

const Toolkit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Tech & Teaching <span className="gradient-text">Toolkit</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-teal)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {/* Educational Tech */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-teal)]/10 flex items-center justify-center">
                <Laptop className="text-[var(--color-teal)]" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                {TOOLKIT.educational.title}
              </h3>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-4"
            >
              {TOOLKIT.educational.skills.map((skill) => {
                const Icon = skillIcons[skill] || Laptop;
                return (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 bg-[var(--color-navy)] border border-[var(--color-teal)]/20 hover:border-[var(--color-teal)]/50 rounded-xl px-5 py-4 transition-colors cursor-default"
                  >
                    <Icon className="text-[var(--color-teal)]" size={20} />
                    <span className="text-gray-300 text-base font-medium">
                      {skill}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Pedagogical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-teal)]/10 flex items-center justify-center">
                <Brain className="text-[var(--color-teal)]" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                {TOOLKIT.pedagogical.title}
              </h3>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-4"
            >
              {TOOLKIT.pedagogical.skills.map((skill) => {
                const Icon = skillIcons[skill] || Brain;
                return (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 bg-[var(--color-navy)] border border-[var(--color-teal)]/20 hover:border-[var(--color-teal)]/50 rounded-xl px-5 py-4 transition-colors cursor-default"
                  >
                    <Icon className="text-[var(--color-teal)]" size={20} />
                    <span className="text-gray-300 text-base font-medium">
                      {skill}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
