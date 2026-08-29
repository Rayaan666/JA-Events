import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionValue, useSpring } from 'framer-motion';
import Sparkle from './Sparkle';

const experiences = [
  {
    id: 1,
    title: "Chess Tournaments",
    copy: "Competitive experiences that sharpen focus, strategy and confidence across different age groups and skill levels.",
    tags: ["STRATEGY", "FOCUS", "COMPETITION"],
    category: "CHESS",
    image: "https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_29_2026_12_26_14_PM_-_Copy"
  },
  {
    id: 2,
    title: "Rubik’s Cube Competitions",
    copy: "Fast-paced challenges that celebrate speed, logic, problem-solving and the excitement of personal achievement.",
    tags: ["SPEED", "LOGIC", "CHALLENGE"],
    category: "CUBE",
    image: "https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_29_2026_12_26_19_PM_-_Copy"
  },
  {
    id: 3,
    title: "Art & Craft Competitions",
    copy: "A platform for imagination and creative expression through hands-on artistic experiences.",
    tags: ["IMAGINATION", "EXPRESSION", "CREATIVITY"],
    category: "ART",
    image: "https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_29_2026_12_26_23_PM_-_Copy"
  },
  {
    id: 4,
    title: "Creative Workshops",
    copy: "Hands-on learning experiences where participants explore ideas, build skills and create something of their own.",
    tags: ["LEARN", "CREATE", "DISCOVER"],
    category: "WORKSHOPS",
    image: "https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_29_2026_12_34_03_PM"
  },
  {
    id: 5,
    title: "Corporate Events & Experiences",
    copy: "Thoughtfully planned experiences that strengthen teams, celebrate achievements and connect organizations.",
    tags: ["TEAMWORK", "CELEBRATE", "CONNECT"],
    category: "CORPORATE",
    image: "https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_29_2026_12_26_35_PM_-_Copy"
  }
];

function DesktopPanel({ exp, index, scrollYProgress }) {
  const center = index * 0.25;
  const offset = 0.15;

  // Configuration for strictly increasing ranges inside [0, 1] to satisfy WAAPI constraints
  let config;
  if (center === 0) {
    config = {
      input: [0, 0.15],
      width: ["58vw", "24vw"],
      textOpacity: [1, 0],
      numOpacity: [0.15, 0.6],
      imgScale: [1.05, 1],
      categoryOpacity: [0, 1]
    };
  } else if (center === 1) {
    config = {
      input: [0.85, 1.0],
      width: ["24vw", "58vw"],
      textOpacity: [0, 1],
      numOpacity: [0.6, 0.15],
      imgScale: [1, 1.05],
      categoryOpacity: [1, 0]
    };
  } else {
    config = {
      input: [center - offset, center, center + offset],
      width: ["24vw", "58vw", "24vw"],
      textOpacity: [0, 1, 0],
      numOpacity: [0.6, 0.15, 0.6],
      imgScale: [1, 1.05, 1],
      categoryOpacity: [1, 0, 1]
    };
  }
  
  const width = useTransform(scrollYProgress, config.input, config.width, { clamp: true });
  const opacityText = useTransform(scrollYProgress, config.input, config.textOpacity, { clamp: true });
  const opacityNumber = useTransform(scrollYProgress, config.input, config.numOpacity, { clamp: true });
  const imgScale = useTransform(scrollYProgress, config.input, config.imgScale, { clamp: true });
  const opacityCategory = useTransform(scrollYProgress, config.input, config.categoryOpacity, { clamp: true });

  return (
    <motion.div 
      style={{ width }} 
      className="relative h-[65vh] min-h-[500px] max-h-[760px] overflow-hidden rounded-[32px] lg:rounded-[40px] flex-shrink-0 group"
    >
      <motion.img 
        style={{ scale: imgScale }}
        src={exp.image} 
        alt={exp.title}
        className="absolute inset-0 w-full h-full object-cover origin-center" 
      />
      
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#21162F] via-[#21162F]/30 to-transparent opacity-90" />
      <div className="absolute inset-0 bg-ja-purple/20 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-50" />

      {/* Oversized Number (Visible more when inactive) */}
      <motion.div 
        style={{ opacity: opacityNumber }} 
        className="absolute -top-12 -right-8 text-[140px] lg:text-[180px] font-serif text-white pointer-events-none select-none leading-none tracking-tighter"
      >
        0{exp.id}
      </motion.div>

      {/* Inactive State - Vertical Category Name */}
      <motion.div 
        style={{ opacity: opacityCategory }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 font-bold tracking-[0.2em] uppercase text-sm"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg) translateX(50%)' }}
      >
        {exp.category}
      </motion.div>

      {/* Active State Content */}
      <motion.div 
        style={{ opacity: opacityText }} 
        className="absolute bottom-10 left-10 right-10 flex flex-col justify-end h-full"
      >
        <div className="flex gap-2 flex-wrap mb-4">
          {exp.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-[9px] lg:text-[10px] font-bold tracking-widest text-white uppercase">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-4xl lg:text-[56px] font-serif text-white leading-[1.05] mb-4">
          {exp.title}
        </h3>
        <p className="text-white/80 text-base lg:text-lg max-w-[420px] mb-8 leading-relaxed">
          {exp.copy}
        </p>
        <div>
          <button 
            className="group/btn flex items-center gap-3 text-white font-semibold text-sm hover:text-ja-purple transition-colors relative"
            data-cursor="view"
          >
            Discover Experience
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:border-ja-purple transition-colors">
              <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Mobile Panel
function MobilePanel({ exp, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-[420px] overflow-hidden rounded-[28px] flex-shrink-0 group shadow-xl shadow-black/40"
    >
      <img 
        src={exp.image} 
        alt={exp.title}
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#21162F] via-[#21162F]/40 to-transparent opacity-95" />
      
      <div className="absolute -top-6 -right-4 text-[120px] font-serif text-white/10 pointer-events-none select-none leading-none tracking-tighter">
        0{exp.id}
      </div>

      <div className="absolute inset-6 flex flex-col justify-end">
        <div className="text-[10px] font-bold tracking-widest text-ja-purple uppercase mb-3 flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-ja-purple" />
          {exp.category}
        </div>
        
        <h3 className="text-3xl font-serif text-white leading-[1.1] mb-3">
          {exp.title}
        </h3>
        
        <p className="text-white/70 text-sm mb-6 leading-relaxed">
          {exp.copy}
        </p>
        
        <div className="flex gap-2 flex-wrap mb-6">
          {exp.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="px-3 py-1 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-[9px] font-bold tracking-widest text-white uppercase">
              {tag}
            </span>
          ))}
        </div>
        
        <button className="flex items-center gap-2 text-white font-semibold text-xs border-b border-white/30 pb-1 w-max">
          Discover Experience <span className="text-ja-purple">→</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function Experiences() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Custom Cursor Spring-based Motion Values (Avoids State re-render issues with WAAPI)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("DRAG");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate container horizontal translation (Total width ~ 154vw + gaps + padding = ~ 170vw)
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-72vw"]);

  // Update active index based on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = 0;
    if (latest > 0.15) index = 1;
    if (latest > 0.4) index = 2;
    if (latest > 0.65) index = 3;
    if (latest > 0.85) index = 4;
    setActiveIndex(index);
  });

  const handleCategoryClick = (i) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const distance = (i / 4) * (rect.height - window.innerHeight);
      window.scrollTo({ top: start + distance, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 40);
      cursorY.set(e.clientY - 40);
      
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor').toUpperCase());
      } else {
        setCursorText("DRAG");
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section id="experiences" className="relative bg-[#21162F] text-white selection:bg-ja-purple/30 selection:text-white pb-32">
      
      {/* SVG Transition Divider from About Section */}
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-[50px] md:h-[90px] lg:h-[120px] text-ja-lavender z-20 pointer-events-none" preserveAspectRatio="none">
        <path d="M0 0H1440V40C1440 40 1140 120 720 120C300 120 0 40 0 40V0Z" fill="currentColor"/>
      </svg>

      {/* Decorative Glows */}
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-ja-purple/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#4F327C]/30 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Custom Cursor (Desktop Only) */}
      <motion.div 
        className="fixed top-0 left-0 w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pointer-events-none z-[100] flex items-center justify-center text-[10px] font-bold tracking-widest text-white mix-blend-difference hidden lg:flex"
        style={{ 
          x: cursorXSpring, 
          y: cursorYSpring,
        }}
        animate={{ 
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0
        }}
        transition={{ duration: 0.15 }}
      >
        {cursorText === "DRAG" && <span className="absolute left-2 opacity-50">←</span>}
        {cursorText}
        {cursorText === "DRAG" && <span className="absolute right-2 opacity-50">→</span>}
      </motion.div>

      {/* Intro Content (Static Top) */}
      <div className="container mx-auto px-6 lg:px-12 pt-32 lg:pt-48 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-4">
          <div className="max-w-[800px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-bold tracking-[0.25em] text-white/80 uppercase">
                Our Experiences
              </span>
              <Sparkle size={14} delay={0.4} absolute={false} className="text-ja-purple" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(36px,4.5vw,72px)] font-sans font-semibold leading-[1.05] tracking-tight"
            >
              Different Experiences.<br />
              <span className="font-serif italic text-ja-purple/90 font-normal">One Purpose — Bring People Together.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.3em] font-bold text-white/40 hidden lg:block pb-2"
          >
            EXPLORE / PARTICIPATE / CONNECT
          </motion.div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/60 text-lg max-w-[600px]"
        >
          From fast-paced competitions to expressive workshops and meaningful corporate gatherings, every JA experience is designed to engage people, spark participation and create lasting memories.
        </motion.p>
      </div>

      {/* Category Navigation */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-12 hidden lg:block">
        <div className="flex items-center gap-8 border-b border-white/10 pb-4">
          {experiences.map((exp, i) => (
            <button 
              key={i}
              onClick={() => handleCategoryClick(i)}
              className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-500 ${activeIndex === i ? 'text-ja-purple' : 'text-white/30 hover:text-white/60'}`}
            >
              {exp.category}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Sticky Scroll Gallery */}
      <div 
        ref={containerRef} 
        className="hidden lg:block relative h-[400vh]"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div 
            className="flex items-center w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div style={{ x }} className="flex gap-6 px-12 pb-12 pt-6">
              {experiences.map((exp, i) => (
                <DesktopPanel key={i} exp={exp} index={i} scrollYProgress={scrollYProgress} />
              ))}
            </motion.div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-12 left-12 right-12 flex items-center gap-6">
            <span className="text-xs font-serif text-white/50 w-12">0{activeIndex + 1} / 05</span>
            <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-ja-purple"
                style={{ width: useTransform(scrollYProgress, [0, 1], ["20%", "100%"]) }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Stack Gallery */}
      <div className="block lg:hidden container mx-auto px-6 space-y-8 relative z-10 pb-20">
        {experiences.map((exp, i) => (
          <MobilePanel key={i} exp={exp} index={i} />
        ))}
      </div>

      {/* Section End Bridge Statement */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-6 lg:px-12 text-center mt-12 lg:mt-0 relative z-10"
      >
        <div className="flex flex-col items-center justify-center pt-20 border-t border-white/10">
          <Sparkle size={20} className="mb-8 text-ja-purple" />
          <h3 className="text-2xl lg:text-4xl font-serif text-white/90 leading-tight">
            Every experience starts differently.<br/>
            <span className="italic text-ja-purple">Every experience ends with a memory.</span>
          </h3>
        </div>
      </motion.div>
      
    </section>
  );
}
