import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Sparkle from './Sparkle';

export default function AngelJoeIntro() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax for background elements
  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const values = ['CREATE', 'INSPIRE', 'CONNECT', 'EMPOWER'];

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#FCFAFE] overflow-hidden py-24 lg:py-40"
      id="angel-joe"
    >
      {/* Soft Ambient Orbs */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-ja-purple/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        style={{ y: bgY }}
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-ja-lavender/50 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Column - The Reveal */}
          <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-start pt-10 lg:pt-0">
            
            {/* Background Giant Typography */}
            <motion.div 
              style={{ y: textY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0 opacity-40 mix-blend-multiply w-full h-full"
            >
               <span 
                 className="font-serif text-[clamp(120px,18vw,280px)] leading-[0.75] text-transparent tracking-tighter rotate-[-90deg] lg:rotate-0 absolute lg:-left-20 lg:opacity-50" 
                 style={{ WebkitTextStroke: '1px var(--color-ja-lavender)' }}
               >
                 JOE
               </span>
            </motion.div>

            <motion.div 
              className="relative z-10 w-full max-w-[400px] lg:max-w-[460px] aspect-[4/5] lg:ml-12"
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Asymmetric Portrait Mask */}
              <div 
                className="w-full h-full overflow-hidden relative shadow-2xl shadow-ja-purple/10 group" 
                style={{ borderRadius: '24px 140px 24px 24px' }}
              >
                 <motion.img 
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   src="/founder.png" 
                   alt="Angel Joe"
                   className="w-full h-full object-cover"
                 />
                 {/* Subtle gradient overlay for depth */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-ja-purple/20 via-transparent to-transparent opacity-60 mix-blend-overlay pointer-events-none" />
              </div>
              
              {/* Overlapping Quote Glass Card */}
              <motion.div 
                 className="absolute -bottom-10 -right-4 lg:-right-12 bg-white/70 backdrop-blur-xl p-6 lg:p-8 rounded-3xl shadow-[0_20px_40px_rgba(79,50,124,0.1)] border border-white max-w-[260px] lg:max-w-[280px] z-20"
                 initial={{ opacity: 0, x: 20, y: 20 }}
                 whileInView={{ opacity: 1, x: 0, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: 0.4, duration: 0.8 }}
                 whileHover={{ y: -5 }}
              >
                 <Sparkle className="text-ja-purple mb-4" size={16} delay={0.8} />
                 <p className="font-serif text-ja-charcoal text-[17px] lg:text-[19px] leading-[1.3] italic">
                   “I want people to leave with more than a memory.”
                 </p>
                 <p className="text-[10px] text-ja-purple/40 font-bold uppercase tracking-widest mt-4">
                   it always starts with an idea ✦
                 </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Column - Focused Typography */}
          <motion.div 
            className="w-full lg:w-7/12 flex flex-col items-start z-20 lg:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={revealVariants} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold tracking-[0.25em] text-ja-purple uppercase">THE HEART BEHIND JA</span>
              <Sparkle className="text-ja-purple relative" size={10} delay={0.2} />
            </motion.div>
            
            <motion.h2 variants={revealVariants} className="font-serif text-[clamp(56px,8vw,100px)] leading-[0.9] text-ja-charcoal mb-4 relative">
               Angel Joe
               <motion.div 
                 className="absolute -left-6 top-1/2 w-1 h-12 bg-ja-purple/30 rounded-full hidden lg:block"
                 initial={{ scaleY: 0 }}
                 whileInView={{ scaleY: 1 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
               />
            </motion.h2>
            
            <motion.p variants={revealVariants} className="text-sm font-bold tracking-[0.3em] text-ja-charcoal/40 uppercase mb-10">
               Founder, JA Events
            </motion.p>

            <motion.div variants={revealVariants} className="text-[17px] lg:text-[20px] text-ja-charcoal/80 leading-[1.7] max-w-xl mb-12 space-y-6 relative">
               <p className="font-medium text-ja-charcoal">
                 Every experience starts with someone who <span className="italic text-ja-purple">believes in the idea.</span>
               </p>
               <p className="text-ja-charcoal/70">
                 Behind every JA experience is a belief that events can do more than simply bring people into the same room. They can spark curiosity, encourage creativity, and build confidence that continues long after the moment itself.
               </p>
               <p className="text-ja-charcoal/70">
                 Angel Joe brings that philosophy to JA Events—shaping experiences around people, participation, and purpose.
               </p>
            </motion.div>

            {/* Core Values / Philosophy Tags */}
            <motion.div variants={revealVariants} className="flex flex-wrap gap-3">
               {values.map((word, i) => (
                 <motion.span 
                   key={word}
                   whileHover={{ y: -2, backgroundColor: "var(--color-ja-purple)", color: "#fff", borderColor: "var(--color-ja-purple)" }}
                   className="px-6 py-3 rounded-full border border-ja-charcoal/10 text-ja-charcoal text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-default bg-white/50 backdrop-blur-sm"
                 >
                    {word}
                 </motion.span>
               ))}
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
