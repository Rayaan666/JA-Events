import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Sparkle from './Sparkle';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Experiences', href: '#experiences' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Voices', href: '#voices' },
  { title: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(118,83,173,0.08)] rounded-full px-6 py-3">
          
          {/* Logo */}
          <a href="#home" className="flex items-center relative z-50">
            <img src="/logo.png" alt="JA Events Logo" className="h-11 md:h-14 w-auto object-contain" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.title} 
                href={link.href}
                className="text-sm font-medium text-ja-charcoal/80 hover:text-ja-purple transition-colors relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-ja-purple transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex relative z-50">
            <motion.a 
              href="#contact"
              whileHover="hover"
              className="group relative flex items-center gap-2 bg-ja-purple text-white px-6 py-2.5 rounded-full font-medium text-sm overflow-hidden"
            >
              {/* Hover Glow */}
              <motion.div 
                className="absolute inset-0 bg-ja-lavender opacity-0"
                variants={{
                  hover: { opacity: 0.2 }
                }}
              />
              <span className="relative z-10">Plan an Event</span>
              <motion.div
                variants={{
                  hover: { x: 3, y: -3 }
                }}
                className="relative z-10"
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-ja-deep"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ja-lavender/95 backdrop-blur-2xl flex flex-col justify-center px-8"
          >
            {/* Background Sparkles */}
            <Sparkle className="top-1/4 left-10" size={32} delay={0.2} />
            <Sparkle className="bottom-1/3 right-12" size={48} delay={0.4} />

            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                  className="font-serif text-4xl text-ja-deep hover:text-ja-purple transition-colors"
                >
                  {link.title}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 bg-ja-purple text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 mx-auto w-full max-w-xs"
              >
                Plan an Event <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
