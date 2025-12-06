import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  ChevronDown,
  Award,
} from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "../constants";

const iconMap = {
  GraduationCap,
  BookOpen,
  Users,
  FileText,
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCert, setExpandedCert] = useState(null);

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-teal)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-teal)]/10 flex items-center justify-center">
                <GraduationCap className="text-[var(--color-teal)]" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, index) => {
                const IconComponent = iconMap[edu.icon];
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="glass-card rounded-2xl p-7 hover:border-[var(--color-teal)]/50 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-[var(--color-teal)]/10 flex items-center justify-center shrink-0">
                        <IconComponent
                          className="text-[var(--color-teal)]"
                          size={28}
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">
                          {edu.degree}
                        </h4>
                        {edu.institution && (
                          <p className="text-gray-400 text-base mt-1">
                            {edu.institution}
                          </p>
                        )}
                        <span
                          className={`inline-block mt-3 text-sm px-4 py-1.5 rounded-full ${
                            edu.status === "Pursuing"
                              ? "bg-[var(--color-teal)]/20 text-[var(--color-teal)]"
                              : "bg-gray-600/30 text-gray-300"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-teal)]/10 flex items-center justify-center">
                <Award className="text-[var(--color-teal)]" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                Certifications
              </h3>
            </div>

            <div className="space-y-5">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedCert(
                        expandedCert === cert.name ? null : cert.name
                      )
                    }
                    className="w-full p-7 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-[var(--color-teal)]" />
                      <span className="text-white font-medium text-lg">
                        {cert.name}
                      </span>
                      {cert.year && (
                        <span className="text-gray-500 text-base">
                          ({cert.year})
                        </span>
                      )}
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCert === cert.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="text-gray-400" size={20} />
                    </motion.div>
                  </button>

                  {expandedCert === cert.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-7 pb-6"
                    >
                      <p className="text-gray-400 text-base pl-8">
                        {cert.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
