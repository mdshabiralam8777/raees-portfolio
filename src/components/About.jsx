import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award, Trophy } from "lucide-react";
import { ABOUT } from "../constants";

const iconMap = {
  Calendar,
  Award,
  Trophy,
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding bg-[var(--color-navy-light)]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-teal)] mx-auto rounded-full" />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-20 leading-relaxed"
        >
          {ABOUT.summary}
        </motion.p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT.stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-3xl p-10 text-center group hover:border-[var(--color-teal)]/50 transition-all"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-teal)]/10 mb-8 group-hover:bg-[var(--color-teal)]/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent
                    className="text-[var(--color-teal)]"
                    size={36}
                  />
                </motion.div>
                <h3 className="text-5xl font-bold font-[family-name:var(--font-accent)] text-[var(--color-teal)] mb-3">
                  {stat.value}
                </h3>
                <p className="text-white font-semibold text-xl mb-2">
                  {stat.label}
                </p>
                {stat.sublabel && (
                  <p className="text-gray-400 text-sm">{stat.sublabel}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
