import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Medal, Star, Mic2 } from "lucide-react";
import { AWARDS } from "../constants";

const iconMap = {
  Medal,
  Star,
  Mic2,
};

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="awards"
      className="section-padding bg-[var(--color-navy-light)]"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Awards & <span className="gradient-text">Accolades</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-teal)] mx-auto rounded-full" />
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {AWARDS.map((award, index) => {
            const IconComponent = iconMap[award.icon];
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group"
              >
                <motion.div
                  className="glass-card rounded-3xl p-10 text-center h-full hover:border-[var(--color-teal)]/50 transition-all relative overflow-hidden"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-teal)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <motion.div
                      className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-teal)]/20 to-[var(--color-teal)]/5 mb-8"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <IconComponent
                        className="text-[var(--color-teal)]"
                        size={42}
                      />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">
                      {award.title}
                    </h3>

                    <p className="text-[var(--color-teal)] font-medium text-lg mb-3">
                      {award.event}
                    </p>

                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                      {award.location && <span>{award.location}</span>}
                      {award.location && award.year && <span>•</span>}
                      {award.year && <span>{award.year}</span>}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
