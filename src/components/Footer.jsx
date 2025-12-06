import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowUp, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="section-padding relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/2 left-1/4 w-96 h-96 bg-[var(--color-teal)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Interested in collaboration or have a question about my teaching
            approach? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="glass-card rounded-xl px-8 py-5 flex items-center gap-4 hover:border-[var(--color-teal)]/50 transition-all group"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center group-hover:bg-[var(--color-teal)]/20 transition-colors">
              <Mail className="text-[var(--color-teal)]" size={22} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email me at</p>
              <p className="text-white font-medium text-sm sm:text-base truncate max-w-[180px] sm:max-w-none">
                {PERSONAL_INFO.email}
              </p>
            </div>
          </motion.a>

          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl px-8 py-5 flex items-center gap-4 hover:border-[var(--color-teal)]/50 transition-all group"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center group-hover:bg-[var(--color-teal)]/20 transition-colors">
              <Linkedin className="text-[var(--color-teal)]" size={22} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Connect on</p>
              <p className="text-white font-medium">LinkedIn</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
            © 2025 {PERSONAL_INFO.name}. Made with
            <Heart
              size={14}
              className="text-[var(--color-teal)] fill-current"
            />
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-gray-400 hover:text-[var(--color-teal)] transition-colors group"
            whileHover={{ y: -2 }}
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-gray-600 group-hover:border-[var(--color-teal)] flex items-center justify-center transition-colors">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
