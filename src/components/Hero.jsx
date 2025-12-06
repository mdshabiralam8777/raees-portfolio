import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-teal)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-teal)]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(var(--color-teal) 1px, transparent 1px), linear-gradient(90deg, var(--color-teal) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[var(--color-navy-light)] border border-[var(--color-teal)]/30 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="text-[var(--color-teal)]" size={16} />
          <span className="text-sm text-gray-300">
            4+ Years of Teaching Excellence
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] mb-6"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">
            {PERSONAL_INFO.name.split(" ")[0]}
          </span>
          <br />
          <span className="text-white">
            {PERSONAL_INFO.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--color-teal)] font-medium mb-6 font-[family-name:var(--font-heading)]"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {PERSONAL_INFO.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.a
            href="#experience"
            className="bg-[var(--color-teal)] hover:bg-[var(--color-teal-dark)] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-[var(--color-teal)]/25"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Experience
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-gray-600 hover:border-[var(--color-teal)] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator - positioned outside content div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-[var(--color-teal)] transition-colors"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
