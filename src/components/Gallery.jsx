import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Sparkle from './Sparkle';

const photos = [
  { id: 1, src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_kshlcrkshlcrkshl', category: 'WORKSHOP', alt: 'JA Events Workshop', note: 'THE START OF SOMETHING NEW' },
  { id: 2, src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_x6f9w2x6f9w2x6f9', category: 'COMPETITION', alt: 'JA Events Competition', note: 'STRATEGY IN MOTION' },
  { id: 3, src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_m9nv7lm9nv7lm9nv', category: 'ACHIEVEMENT', alt: 'JA Events Achievement', note: 'AGAINST THE CLOCK' },
  { id: 4, src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_sp3bj4sp3bj4sp3b', category: 'CREATIVITY', alt: 'JA Events Creativity', note: 'EXPRESSION & IMAGINATION' },
  { id: 5, src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_abxhlpabxhlpabxh', category: 'CONNECTION', alt: 'JA Events Connection', note: 'TEAM SPIRIT & UNITY' },
  { id: 6, src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_re1xsbre1xsbre1x', category: 'FOCUS', alt: 'JA Events Focus', note: 'PRECISION & MASTERY' },
  { id: 7, src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_tjk5rxtjk5rxtjk5', category: 'MOMENT', alt: 'JA Events Moment', note: 'WHEN IT CLICKS' },
  { id: 8, src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_qdfsrtqdfsrtqdfs', category: 'SPEED', alt: 'JA Events Energy', note: 'HIGH ENERGY' },
  { id: 9, src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_q9k7f3q9k7f3q9k7', category: 'IMAGINATION', alt: 'JA Events Experience', note: 'EVERY DETAIL MATTERS' },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [cursorText, setCursorText] = useState(null);

  // Custom Cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 60);
      cursorY.set(e.clientY - 60);
      
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor'));
      } else {
        setCursorText(null);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Lightbox Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedId) return;
      if (e.key === 'Escape') setSelectedId(null);
      
      const currentIndex = photos.findIndex(p => p.id === selectedId);
      if (e.key === 'ArrowRight' && currentIndex < photos.length - 1) {
        setSelectedId(photos[currentIndex + 1].id);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setSelectedId(photos[currentIndex - 1].id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId]);

  const selectedPhoto = photos.find(p => p.id === selectedId);

  return (
    <section id="gallery" className="relative bg-[#FCFAFE] text-ja-charcoal selection:bg-ja-purple/20 overflow-hidden pb-10">
      
      {/* Custom Cursor (Desktop) */}
      <motion.div 
        className="fixed top-0 left-0 w-[120px] h-[120px] bg-white/90 backdrop-blur-sm rounded-full pointer-events-none z-[100] hidden lg:flex flex-col items-center justify-center text-ja-purple mix-blend-normal shadow-xl border border-ja-purple/20"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{ scale: cursorText ? 1 : 0, opacity: cursorText ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-center px-4 leading-tight">
          {cursorText}
        </span>
      </motion.div>

      {/* HEADER */}
      <div className="container mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-ja-purple uppercase">Our Gallery</span>
              <Sparkle size={14} absolute={false} className="text-ja-purple" />
            </div>
            <h2 className="text-[clamp(36px,4.5vw,64px)] font-sans font-semibold text-ja-charcoal leading-[1.05] tracking-tight">
              A thousand little moments.<br/>
              <span className="font-serif italic text-ja-purple font-normal">One beautiful story.</span>
            </h2>
          </div>
          
          <div className="hidden lg:flex flex-col items-end pb-2">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-ja-charcoal/30 mb-1">CURATED COLLECTION</div>
            <div className="font-serif italic text-ja-charcoal/40 text-2xl">Vol. 01</div>
          </div>
        </motion.div>
      </div>

      {/* UNIFORM BALANCED 3-COLUMN GRID */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {photos.map((photo, i) => {
            const isDimmed = hoveredId && hoveredId !== photo.id;
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative cursor-pointer rounded-2xl lg:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[280px] sm:h-[320px]"
                onClick={() => setSelectedId(photo.id)}
                onMouseEnter={() => setHoveredId(photo.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor="VIEW"
              >
                <motion.div 
                  className="w-full h-full relative overflow-hidden bg-[#F4EFFA]"
                  animate={{ opacity: isDimmed ? 0.4 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    layoutId={`photo-${photo.id}`} 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block" 
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase shadow-sm">
                      {photo.category}
                    </span>
                  </div>

                  {/* Hover Details */}
                  <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col gap-1 z-10 pointer-events-none">
                     {photo.note && <span className="text-white font-serif italic text-base lg:text-lg">{photo.note}</span>}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="container mx-auto px-6 lg:px-12 mt-10 pt-6 border-t border-ja-purple/10 flex flex-col sm:flex-row items-center justify-between gap-6">
         <p className="text-[10px] font-bold tracking-[0.35em] text-ja-charcoal/40 uppercase text-center sm:text-left">
           The moments change. <span className="text-ja-purple">The feeling stays.</span>
         </p>
         <button className="text-[10px] font-bold tracking-[0.25em] uppercase text-ja-charcoal relative group inline-flex items-center gap-2">
            EXPLORE ALL MOMENTS
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-ja-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
         </button>
      </div>

      {/* LIGHTBOX PORTAL */}
      <AnimatePresence>
        {selectedPhoto && (
           <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
             className="fixed inset-0 z-[200] bg-[rgba(18,10,28,0.98)] flex flex-col justify-center items-center backdrop-blur-xl"
           >
             <button onClick={() => setSelectedId(null)} className="absolute top-8 right-8 text-white/50 hover:text-white text-[10px] tracking-[0.3em] font-bold z-10 uppercase transition-colors p-4">
                CLOSE ✕
             </button>
             
             <div className="relative w-full max-w-[100vw] lg:max-w-[85vw] h-[60vh] lg:h-[75vh] flex items-center justify-center mt-10 px-4">
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedId(photos[Math.max(0, photos.findIndex(p => p.id === selectedId) - 1)].id); }} 
                  className="absolute left-4 lg:-left-12 text-white/30 hover:text-white text-4xl hidden md:block transition-colors p-4"
                >‹</button>
                
                <motion.img 
                  layoutId={`photo-${selectedPhoto.id}`} 
                  src={selectedPhoto.src} 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
                  alt={selectedPhoto.alt}
                />
                
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedId(photos[Math.min(photos.length - 1, photos.findIndex(p => p.id === selectedId) + 1)].id); }} 
                  className="absolute right-4 lg:-right-12 text-white/30 hover:text-white text-4xl hidden md:block transition-colors p-4"
                >›</button>
             </div>

             <motion.div 
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="mt-8 lg:mt-12 text-center px-6"
             >
                <div className="text-[9px] font-bold tracking-[0.4em] uppercase text-ja-purple mb-3 inline-flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-ja-purple" /> {selectedPhoto.category} <div className="w-4 h-[1px] bg-ja-purple" />
                </div>
                {selectedPhoto.note && <div className="text-sm lg:text-lg text-white/90 font-serif italic max-w-[400px] mx-auto tracking-wide">{selectedPhoto.note}</div>}
                <div className="mt-8 text-white/20 text-[10px] font-bold tracking-[0.3em]">
                  {String(photos.findIndex(p => p.id === selectedId) + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
                </div>
             </motion.div>
           </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
