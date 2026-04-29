import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Cpu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-morphism rounded-full px-6 py-3">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-medium text-base md:text-xl tracking-tighter"
        >
          <Cpu className="text-brand-primary w-5 h-5 md:w-6 md:h-6 shrink-0" />
          <span className="truncate text-black dark:text-white">S K Khaja Moinuddin<span className="text-brand-primary">.</span></span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-black/70 dark:text-white/70 hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="h-6 w-px bg-black/10 dark:bg-white/10 mx-2" />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Group */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-20 left-6 right-6 glass-morphism rounded-3xl p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-2xl border border-black/5 dark:border-white/5"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-black dark:text-white hover:text-brand-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
