import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Sparkle from './Sparkle';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const pillars = [
  {
    num: "01",
    title: "Imagine",
    desc: "Turning ideas into meaningful concepts.",
    img: "/art.jpg",
    alt: "Creative Workshop",
    tag: "CREATE"
  },
  {
    num: "02",
    title: "Engage",
    desc: "Creating experiences people actively participate in.",
    img: "/chess.jpg",
    alt: "Active Competition",
    tag: "COMPETE"
  },
  {
    num: "03",
    title: "Connect",
    desc: "Bringing communities, teams and individuals together.",
    img: "/corporate.jpg",
    alt: "Corporate Connection",
    tag: "CONNECT"
  },
  {
    num: "04",
    title: "Remember",
    desc: "Creating moments that leave lasting impressions.",
    img: "/main_feature.jpg",
    alt: "Lasting Impressions",
    tag: "CELEBRATE"
  }
];

export default function About() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="about" className="relative w-full bg-ja-lavender/40 overflow-hidden pt-10 pb-4 lg:pt-14 lg:pb-6">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] bg-ja-lavender rounded-full blur-[150px]" />
        <div className="absolute bottom-0 -left-32 w-[550px] h-[550px] bg-ja-purple/15 rounded-full blur-[160px]" />
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
      </div>

      <Sparkle className="top-[10%] right-[12%] text-ja-purple/30" size={28} delay={0.2} />
      <Sparkle className="bottom-[15%] left-[6%] text-ja-purple/25" size={22} delay={1.1} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header - Fluid Typographic Statement */}
        <motion.div 
          className="mb-10 lg:mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-8 bg-ja-purple/40" />
            <span className="text-xs font-bold tracking-[0.25em] text-ja-purple uppercase">
              Who We Are
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeUp}
            className="font-sans text-[clamp(26px,4.5vw,72px)] leading-[1.06] text-ja-charcoal font-semibold tracking-tight max-w-5xl"
          >
            We Don’t Just Organize Events.
            <span className="block font-serif italic text-ja-purple font-normal mt-1">
              We Create Experiences That Stay With You.
            </span>
          </motion.h2>
        </motion.div>

        {/* Narrative & Dynamic Visual Split (Card-less editorial layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          
          {/* Left Narrative Text */}
          <motion.div 
            className="lg:col-span-6 space-y-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={fadeUp} className="text-ja-charcoal text-base sm:text-xl leading-relaxed font-medium">
              JA Events is built around one simple idea — every gathering should create something meaningful. From competitions and creative workshops to corporate experiences, we bring people together through moments designed to inspire, engage and connect.
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-ja-charcoal/70 text-sm sm:text-base leading-relaxed">
              Our events are thoughtfully created to encourage creativity, learning, collaboration and memorable human experiences.
            </motion.p>

            {/* Keyword tags */}
            <motion.div variants={fadeUp} className="pt-2 flex flex-wrap items-center gap-3">
              {["CONNECT", "CREATE", "COMPETE", "LEARN", "CELEBRATE"].map((tag, i) => (
                <span 
                  key={i}
                  className="text-xs font-bold tracking-widest text-ja-deep/70 uppercase py-1 border-b border-ja-purple/30 hover:text-ja-purple hover:border-ja-purple transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Seamless Media Display (Interactive smooth morphing image canvas) */}
          <motion.div 
            className="lg:col-span-6 relative h-[280px] sm:h-[400px] w-full"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src="https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_29_2026_11_53_05_AM" 
                    alt="Who We Are - JA Events" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ja-charcoal/80 via-ja-charcoal/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Seamless overlay details */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white z-10 pointer-events-none">
                <div>
                  <span className="text-[10px] tracking-[0.25em] font-bold text-ja-lavender uppercase block mb-0.5">
                    Featured Pillar {pillars[activeIdx].num}
                  </span>
                  <h4 className="font-serif text-xl font-normal">
                    {pillars[activeIdx].title} Experience
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-wider uppercase">
                  {pillars[activeIdx].tag}
                </div>
              </div>
            </div>

            {/* Decorative background accent ring */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-ja-purple/20 rounded-full -z-10 pointer-events-none" />
          </motion.div>

        </div>

        {/* The Four Pillars - Cardless, Minimalist Editorial List */}
        <div className="pt-2">
          <div className="flex items-center justify-between pb-4 mb-1 border-b border-ja-purple/20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-ja-deep">
              The Four Pillars
            </span>
            <span className="text-xs text-ja-charcoal/50 font-medium">
              Tap to explore our focus
            </span>
          </div>

          <div className="divide-y divide-ja-purple/15">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`
                  group py-5 lg:py-6 transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8 relative
                  ${activeIdx === idx ? 'bg-ja-lavender/30 px-4 sm:px-6 rounded-2xl' : 'hover:pl-2 sm:hover:pl-4'}
                `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Left Number and Title */}
                <div className="flex items-center gap-6 md:gap-8 md:w-1/3">
                  <span className={`font-serif text-2xl transition-colors duration-300 ${activeIdx === idx ? 'text-ja-purple font-bold' : 'text-ja-purple/35 group-hover:text-ja-purple/70'}`}>
                    {pillar.num}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${activeIdx === idx ? 'text-ja-purple' : 'text-ja-charcoal group-hover:text-ja-deep'}`}>
                      {pillar.title}
                    </h3>
                    <ArrowRight className={`w-4 h-4 text-ja-purple transition-all duration-300 ${activeIdx === idx ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2 group-hover:opacity-60'}`} />
                  </div>
                </div>

                {/* Right Description */}
                <div className="md:w-1/2 flex items-center justify-between">
                  <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${activeIdx === idx ? 'text-ja-charcoal font-medium' : 'text-ja-charcoal/70'}`}>
                    {pillar.desc}
                  </p>
                </div>

                {/* Tag */}
                <div className="hidden lg:block md:w-1/6 text-right">
                  <span className={`text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 ${activeIdx === idx ? 'text-ja-purple' : 'text-ja-charcoal/40'}`}>
                    {pillar.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
