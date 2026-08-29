import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Sparkle from './Sparkle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-ja-charcoal overflow-hidden flex flex-col justify-between">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_29_2026_11_42_37_AM" 
            alt="JA Events Hero" 
            className="w-full h-full object-cover filter brightness-[0.9]"
          />
        </div>

        {/* Dark overlay (65% opacity) to keep picture properly seen while making text clear */}
        <div 
          className="absolute inset-0 bg-ja-charcoal/65"
          style={{ zIndex: 2 }}
        />
        
        {/* Subtle dark vignette/gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-ja-charcoal/30 via-transparent to-ja-charcoal/50"
          style={{ zIndex: 3 }}
        />
      </div>

      <Sparkle className="top-[15%] left-[25%] text-ja-purple/35 z-10" size={30} delay={0} />
      <Sparkle className="top-[35%] right-[15%] text-ja-purple/25 z-10" size={20} delay={1} />

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-20 flex flex-col items-center text-center flex-grow justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Main Headline */}
        <motion.h1 
          variants={textReveal}
          className="font-serif text-[clamp(28px,6vw,96px)] leading-[1.08] text-white max-w-[1000px] mb-6 sm:mb-8 relative drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]"
        >
          Where Ideas Become
          <span className="block mt-2 relative inline-block">
            <span className="italic text-ja-purple relative z-10">Unforgettable Experiences.</span>
            <motion.span 
              className="absolute bottom-2 lg:bottom-4 left-0 w-full h-[8px] sm:h-[12px] lg:h-[24px] bg-ja-purple/20 -z-10 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1.2, ease: "circOut" }}
              style={{ transformOrigin: "left" }}
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={textReveal}
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-12 leading-relaxed font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] px-2"
        >
          JA Events creates meaningful experiences through creativity, competition, learning and connection — bringing people together through events designed to inspire.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={textReveal} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none">
          <motion.a 
            href="#experiences"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-3 bg-ja-purple text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm transition-shadow shadow-[0_8px_24px_rgba(118,83,173,0.35)] hover:shadow-[0_12px_32px_rgba(118,83,173,0.45)] w-full sm:w-auto"
          >
            Explore Our Experiences
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-3 bg-ja-purple text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm transition-shadow shadow-[0_8px_24px_rgba(118,83,173,0.35)] hover:shadow-[0_12px_32px_rgba(118,83,173,0.45)] w-full sm:w-auto"
          >
            Let’s Create Together
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Details Bar */}
      <div className="w-full border-t border-white/10 bg-ja-charcoal/40 backdrop-blur-md py-4 relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-white/50">
          <p className="hidden md:block">JA EVENTS STUDIO</p>
          <div className="flex gap-4 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-ja-purple/40"></span>
            <p>CREATIVITY • CONNECTION • EXPERIENCE</p>
            <span className="w-1.5 h-1.5 rounded-full bg-ja-purple/40"></span>
          </div>
          <p>SCROLL TO DISCOVER</p>
        </div>
      </div>
      
    </section>
  );
}
