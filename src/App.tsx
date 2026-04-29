import { motion, AnimatePresence } from "motion/react";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import { PortfolioSections } from "./components/PortfolioSections";
import CursorFollower from "./components/CursorFollower";

const Hero3D = lazy(() => import("./components/Hero3D"));

function Loading3D() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-32 h-32 rounded-full border-2 border-brand-primary/20"
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-black dark:bg-[#0b0b0f] dark:text-white transition-colors duration-300 overflow-x-hidden selection:bg-brand-primary selection:text-black">
      <CursorFollower />
      <Navigation />
      
      {/* Hero Content */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <Suspense fallback={<Loading3D />}>
          <Hero3D />
        </Suspense>
        
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono uppercase tracking-[0.3em] mb-4">
              Open to AI, Data Analytics, and Automation roles
            </span>
            <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter text-black dark:text-white">
              <motion.span
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="block"
              >
                AI <span className="text-black/20 dark:text-white/20">•</span> DATA <span className="text-black/20 dark:text-white/20">•</span> SYSTEMS
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-black/90 dark:text-white/60 max-w-2xl mx-auto mb-2 font-light leading-relaxed"
          >
            Building intelligent automation, data-driven systems, and scalable architectures.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-brand-primary text-sm font-mono uppercase tracking-[0.2em] mb-10"
          >
            AI Engineer • Data Analytics • Business Analytics • Generative AI & LLMs • Automation & Systems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#projects" className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold hover:bg-brand-primary dark:hover:bg-brand-primary transition-all hover:scale-105 active:scale-95">
              Explore Projects
            </a>
            <a href="#contact" className="px-8 py-4 glass-morphism rounded-2xl font-bold hover:bg-black/5 dark:hover:bg-white/10 transition-all hover:scale-105 active:scale-95 text-black dark:text-white">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-black/10 dark:border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-brand-primary rounded-full transition-colors" />
        </motion.div>
      </section>

      <PortfolioSections />

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 dark:border-white/5 text-center text-black/80 dark:text-white/30 text-xs">
        <p>© {new Date().getFullYear()} S K KHAJA MOINUDDIN. All rights reserved.</p>
        <p className="mt-2 font-mono uppercase tracking-widest">AI • DATA • SYSTEMS</p>
      </footer>
    </div>
  );
}
