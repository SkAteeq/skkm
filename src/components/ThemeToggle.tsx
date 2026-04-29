import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial theme check - sync with DOM/localStorage
    const savedTheme = localStorage.getItem("theme");
    const docClasses = document.documentElement.classList;
    
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      docClasses.add("dark");
      setIsDark(true);
    } else {
      docClasses.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const docClasses = document.documentElement.classList;
    if (docClasses.contains("dark")) {
      docClasses.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      docClasses.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-3 rounded-2xl glass-morphism text-black dark:text-white hover:text-brand-primary transition-colors z-[100]"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: 20, opacity: 0, rotate: 45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: -45 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
