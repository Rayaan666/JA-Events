import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Sparkle from './Sparkle';

const eventTypes = [
  "A Competition",
  "A Creative Workshop",
  "A Corporate Experience",
  "Something Completely New"
];

export default function ContactFooter() {
  const [selectedType, setSelectedType] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "", idea: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Focus state underlines
  const [focusedField, setFocusedField] = useState(null);

  // Background radial glow strength on scroll
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const radialGlowOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.45]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  // Easter Egg Sparkles state
  const [hoveredLogo, setHoveredLogo] = useState(false);

  // Custom cursor logic for desktop
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHoveringOption, setIsHoveringOption] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 50);
      cursorY.set(e.clientY - 50);
      
      const target = e.target.closest('[data-hover-cursor]');
      setIsHoveringOption(!!target);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" ref={containerRef} className="relative bg-[#FCFAFE] text-ja-charcoal selection:bg-ja-purple/20 overflow-hidden">
      
      {/* Custom Cursor (Desktop) */}
      <motion.div 
        className="fixed top-0 left-0 w-[100px] h-[100px] bg-ja-purple/95 backdrop-blur-md rounded-full pointer-events-none z-[100] flex items-center justify-center text-white mix-blend-normal hidden lg:flex shadow-2xl"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{ scale: isHoveringOption ? 1 : 0, opacity: isHoveringOption ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase">LET'S TALK</span>
      </motion.div>

      {/* Decorative Continuous Line from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-ja-purple/30 z-10 flex flex-col items-center">
        <motion.div 
          className="w-full bg-ja-purple origin-top h-full"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute bottom-0">
          <Sparkle size={16} className="text-ja-purple translate-y-1/2 animate-pulse" absolute={false} />
        </div>
      </div>

      {/* Radial Background Glow */}
      <motion.div 
        style={{ opacity: radialGlowOpacity }} 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(118,83,173,0.12)_0%,transparent_70%)] pointer-events-none z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 lg:pt-48 pb-12 lg:pb-20 relative z-10">
        
        {/* Headline */}
        <div className="text-center flex flex-col items-center max-w-[1200px] mx-auto mb-12 sm:mb-24">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-ja-purple mb-6 sm:mb-8 flex items-center gap-2">
            LET'S CREATE TOGETHER <Sparkle size={10} absolute={false} className="text-ja-purple" />
          </div>

          <h2 className="text-[clamp(32px,8vw,145px)] font-sans font-semibold leading-[0.98] tracking-tighter text-ja-charcoal">
            <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="block">Have an idea?</motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="block font-serif italic text-ja-purple font-normal mt-2">
              Let's make it happen.
              <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} className="inline-block ml-2 sm:ml-4 align-middle">
                 <Sparkle size={20} className="text-ja-purple" absolute={false} />
              </motion.span>
            </motion.span>
          </h2>
        </div>

        {/* Playful Floating Options */}
        <div className="flex flex-col items-center mb-16 sm:mb-32">
          <div className="text-[10px] font-bold tracking-[0.25em] text-ja-charcoal/40 uppercase mb-8 sm:mb-12">WHAT ARE WE CREATING?</div>
          
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-4 sm:gap-y-6 max-w-[900px] text-center">
             {eventTypes.map((type) => {
               const isSelected = selectedType === type;
               return (
                 <button
                   key={type}
                   onClick={() => setSelectedType(type)}
                   data-hover-cursor
                   className={`relative text-lg sm:text-2xl lg:text-[34px] font-serif transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 ${
                     isSelected ? 'text-ja-purple italic font-semibold' : 'text-ja-charcoal/60 hover:text-ja-purple hover:scale-102'
                   }`}
                 >
                   {type}
                   {/* Underline for active / hover */}
                   <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-ja-purple/60 origin-left transition-transform duration-300 ${
                     isSelected ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                   }`} />
                 </button>
               );
             })}
          </div>
        </div>

        {/* Conversational Contact Form */}
        <div className="max-w-[800px] mx-auto bg-white/40 backdrop-blur-xl p-5 sm:p-8 lg:p-16 rounded-3xl lg:rounded-[40px] shadow-[0_30px_80px_rgba(118,83,173,0.04)] border border-ja-lavender/30 mb-16 sm:mb-32">
           <div className="mb-12">
              <h3 className="text-3xl lg:text-[44px] font-serif text-ja-charcoal leading-tight mb-4">
                Tell us a little<br/>about your idea.
              </h3>
              <p className="text-ja-charcoal/60 text-base leading-relaxed">
                It doesn't need to be fully figured out. That's where we come in.
              </p>
           </div>

           <AnimatePresence mode="wait">
             {!formSubmitted ? (
               <motion.form 
                 key="contact-form"
                 onSubmit={handleSubmit}
                 className="flex flex-col gap-10"
                 exit={{ opacity: 0, y: -20 }}
               >
                 {/* Field Name */}
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold tracking-[0.2em] text-ja-charcoal/40 uppercase">Hello, my name is</label>
                   <div className="relative">
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name" 
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-none text-2xl lg:text-3xl text-ja-charcoal font-serif placeholder-ja-charcoal/20 focus:outline-none pb-2"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ja-lavender" />
                      <motion.div 
                        animate={{ scaleX: focusedField === 'name' ? 1 : 0 }} 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-ja-purple origin-left" 
                      />
                   </div>
                 </div>

                 {/* Field Contact */}
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold tracking-[0.2em] text-ja-charcoal/40 uppercase">You can reach me at</label>
                   <div className="relative">
                      <input 
                        type="text" 
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Email address / phone" 
                        onFocus={() => setFocusedField('contact')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-none text-2xl lg:text-3xl text-ja-charcoal font-serif placeholder-ja-charcoal/20 focus:outline-none pb-2"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ja-lavender" />
                      <motion.div 
                        animate={{ scaleX: focusedField === 'contact' ? 1 : 0 }} 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-ja-purple origin-left" 
                      />
                   </div>
                 </div>

                 {/* Field Type selection linkage */}
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold tracking-[0.2em] text-ja-charcoal/40 uppercase">I'm interested in</label>
                   <div className="relative">
                      <input 
                        type="text"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        placeholder="Select event type above or type here" 
                        onFocus={() => setFocusedField('type')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-none text-2xl lg:text-3xl text-ja-charcoal font-serif placeholder-ja-charcoal/20 focus:outline-none pb-2"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ja-lavender" />
                      <motion.div 
                        animate={{ scaleX: focusedField === 'type' ? 1 : 0 }} 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-ja-purple origin-left" 
                      />
                   </div>
                 </div>

                 {/* Field Idea */}
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold tracking-[0.2em] text-ja-charcoal/40 uppercase">I'm thinking about</label>
                   <div className="relative">
                      <textarea 
                        value={formData.idea}
                        onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                        placeholder="Tell us what you're imagining..." 
                        onFocus={() => setFocusedField('idea')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-none text-xl lg:text-2xl text-ja-charcoal font-serif placeholder-ja-charcoal/20 focus:outline-none pb-2 min-h-[100px] resize-none"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ja-lavender" />
                      <motion.div 
                        animate={{ scaleX: focusedField === 'idea' ? 1 : 0 }} 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-ja-purple origin-left" 
                      />
                   </div>
                 </div>

                 {/* Submit */}
                 <div className="mt-8 flex justify-start">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-ja-purple text-white text-xs font-bold tracking-[0.25em] uppercase rounded-full shadow-lg shadow-ja-purple/20 hover:shadow-ja-purple/30 transition-shadow flex items-center gap-3 relative group"
                    >
                      {isSubmitting ? (
                        <span>SENDING...</span>
                      ) : (
                        <>
                          <span>LET'S CREATE THIS</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </>
                      )}
                      <Sparkle size={10} className="absolute -top-1 -right-1 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                 </div>
               </motion.form>
             ) : (
               <motion.div 
                 key="success-state"
                 initial={{ opacity: 0, scale: 0.96 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="text-center py-12 flex flex-col items-center"
               >
                  <Sparkle size={48} className="text-ja-purple mb-8 animate-[spin_10s_linear_infinite]" />
                  <h4 className="text-3xl lg:text-4xl font-serif text-ja-charcoal mb-4">
                     And just like that,<br/>
                     <span className="italic text-ja-purple">the first idea is in motion.</span>
                  </h4>
                  <p className="text-ja-charcoal/60 text-base mb-12 max-w-[400px]">
                     Thank you. The JA Events team will be in touch soon.
                  </p>
                  <div className="text-[10px] font-bold tracking-[0.3em] text-ja-purple bg-ja-lavender/30 px-5 py-2 rounded-full border border-ja-purple/10">
                     ✦ IDEA RECEIVED
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

        {/* Alternative Contact option */}
        <div className="text-center flex flex-col items-center">
           <div className="text-[9px] font-bold tracking-[0.3em] text-ja-charcoal/40 uppercase mb-3">PREFER TO TALK DIRECTLY?</div>
           <a 
             href="mailto:hello@jaevents.com" 
             className="text-sm font-bold tracking-[0.25em] text-ja-purple uppercase relative group inline-flex items-center gap-2"
           >
              START AN EMAIL CONVERSATION ↗
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-ja-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
           </a>
        </div>

      </div>

      {/* FOOTER TRANSITION SHAPE */}
      <div className="relative w-full z-10 pointer-events-none mt-6">
         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] lg:h-[70px] text-[#24152F] drop-shadow-reverse" preserveAspectRatio="none">
            <path d="M0 120 C 400 0, 1040 0, 1440 120 V 120 H 0 Z" fill="currentColor"/>
         </svg>
      </div>

      {/* FOOTER SECTION */}
      <footer className="relative bg-[#24152F] text-white pt-10 pb-12 z-10 overflow-hidden">
         
         {/* Huge Watermark Sparkle */}
         <div className="absolute right-0 bottom-0 w-[50vw] h-[50vw] max-w-[600px] opacity-[0.08] text-white pointer-events-none select-none overflow-hidden">
            <Sparkle size={500} absolute={false} />
         </div>

         <div className="container mx-auto px-6 lg:px-12 relative z-10">
            
            {/* Huge statement */}
            <div className="text-left mb-24 overflow-hidden select-none">
               <div className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-8">JA EVENTS</div>
               <h2 className="text-[clamp(44px,10vw,160px)] font-sans font-bold leading-[0.9] tracking-tighter flex flex-col gap-2">
                  <span>CREATE.</span>
                  <span className="text-white/60">CONNECT.</span>
                  <span className="font-serif italic text-ja-purple font-normal">REMEMBER.</span>
               </h2>
            </div>

            {/* Middle Nav and Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16 mb-24">
               
               {/* Nav Links */}
               <div className="flex flex-col gap-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">NAVIGATION</div>
                  <ul className="flex flex-col gap-4">
                     {['HOME', 'ABOUT', 'EXPERIENCES', 'GALLERY', 'CONTACT'].map((link) => (
                        <li key={link}>
                           <a 
                             href={`#${link.toLowerCase()}`}
                             className="text-sm font-semibold tracking-[0.15em] text-white/80 hover:text-white transition-colors relative group flex items-center gap-2"
                           >
                             <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-5">✦</span>
                             {link}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact details */}
               <div className="flex flex-col gap-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">LET'S TALK</div>
                  <ul className="flex flex-col gap-4">
                     <li>
                        <a href="mailto:hello@jaevents.com" className="text-sm font-semibold tracking-[0.1em] text-white/80 hover:text-white transition-colors">
                           hello@jaevents.com
                        </a>
                     </li>
                     <li className="text-sm text-white/60 font-semibold tracking-[0.1em]">
                        +1 (555) 019-2834
                     </li>
                     <li className="text-sm text-white/60 font-semibold tracking-[0.1em]">
                        Based in Dubai, UAE
                     </li>
                  </ul>
               </div>

               {/* Social accounts */}
               <div className="flex flex-col gap-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">FOLLOW THE MOMENTS</div>
                  <ul className="flex flex-col gap-4">
                     <li>
                        <a href="#" className="text-sm font-semibold tracking-[0.15em] text-white/80 hover:text-white transition-colors group flex items-center gap-2">
                           INSTAGRAM ↗
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-sm font-semibold tracking-[0.15em] text-white/80 hover:text-white transition-colors group flex items-center gap-2">
                           FACEBOOK ↗
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-sm font-semibold tracking-[0.15em] text-white/80 hover:text-white transition-colors group flex items-center gap-2">
                           LINKEDIN ↗
                        </a>
                     </li>
                  </ul>
               </div>

            </div>

            {/* Giant Monogram Element */}
            <div className="flex justify-center mb-24 relative">
               <motion.div 
                 onMouseEnter={() => setHoveredLogo(true)}
                 onMouseLeave={() => setHoveredLogo(false)}
                 className="relative cursor-pointer select-none"
               >
                  <h3 className="text-[120px] lg:text-[220px] font-serif text-white/10 font-bold leading-none tracking-tight">
                     JA
                  </h3>
                  
                  {/* Subtle hover easter egg sparkles */}
                  <AnimatePresence>
                     {hoveredLogo && (
                       <>
                          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.6 }} exit={{ scale: 0 }} className="absolute -top-4 -left-4">
                             <Sparkle size={16} className="text-ja-purple" />
                          </motion.div>
                          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.5 }} exit={{ scale: 0 }} transition={{ delay: 0.1 }} className="absolute -bottom-2 -right-4">
                             <Sparkle size={12} className="text-white" />
                          </motion.div>
                       </>
                     )}
                  </AnimatePresence>
               </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
               <div>
                  © {new Date().getFullYear()} JA EVENTS
               </div>
               <div className="text-center font-normal tracking-[0.1em] text-white/30 hidden md:block">
                  CREATING EXPERIENCES THAT STAY WITH YOU
               </div>
               <button 
                 onClick={scrollToTop}
                 className="flex items-center gap-2 hover:text-white transition-colors"
               >
                  BACK TO TOP 
                  <motion.span 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                     ↑
                  </motion.span>
               </button>
            </div>

         </div>

      </footer>

    </section>
  );
}
