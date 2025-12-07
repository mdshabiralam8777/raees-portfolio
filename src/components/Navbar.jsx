import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("#")) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Update URL without jumping
          window.history.pushState(null, "", href);
        }
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 max-w-[100vw] overflow-x-hidden ${
        scrolled || isOpen ? "glass-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold font-[family-name:var(--font-heading)]"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", " ");
            }}
          >
            <span className="text-[var(--color-teal)]">MR</span>
            <span className="text-white">Alam</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-300 hover:text-[var(--color-teal)] transition-colors cursor-pointer"
                whileHover={{ y: -2 }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={PERSONAL_INFO.cvLink}
              download
              className="flex items-center gap-2 bg-[var(--color-teal)] hover:bg-[var(--color-teal-dark)] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Download CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col gap-4 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-[var(--color-teal)] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={PERSONAL_INFO.cvLink}
                  download
                  className="flex items-center gap-2 bg-[var(--color-teal)] text-white px-4 py-2 rounded-lg text-sm font-medium w-fit"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
