import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE } from "../constants";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-padding bg-[var(--color-navy-light)]"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-teal)] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-teal)]/30 md:-translate-x-1/2" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-teal)] border-4 border-[var(--color-navy-light)] z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <motion.div
                  className="glass-card rounded-3xl p-8 hover:border-[var(--color-teal)]/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Current Badge */}
                  {exp.isCurrent && (
                    <span className="inline-block bg-[var(--color-teal)] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                      Current
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">
                    {exp.title}
                  </h3>

                  <div className="flex flex-col gap-2 mb-5">
                    <div className="flex items-center gap-2 text-[var(--color-teal)]">
                      <Briefcase size={18} />
                      <span className="font-medium text-base">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-base mb-5">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-400"
                      >
                        <span className="text-[var(--color-teal)] mt-1.5">
                          •
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
