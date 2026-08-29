import { motion } from 'framer-motion';

export default function EventImageCard({ src, alt, shapeClass, className = '', label }) {
  return (
    <motion.div
      className={`relative overflow-hidden group ${className} ${shapeClass}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Parallax / Scale container */}
      <motion.div
        className="w-full h-full relative"
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: { scale: 1.03, rotate: 0.5, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
        }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Subtle overlay that fades on hover */}
        <motion.div 
          className="absolute inset-0 bg-ja-deep/10 mix-blend-overlay"
          variants={{
            initial: { opacity: 1 },
            hover: { opacity: 0, transition: { duration: 0.5 } }
          }}
        />
      </motion.div>

      {/* Floating Category Label that appears stronger on hover */}
      {label && (
        <motion.div
          className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm z-10"
          variants={{
            initial: { opacity: 0.6, y: 10 },
            hover: { opacity: 1, y: 0, transition: { duration: 0.4 } }
          }}
        >
          <span className="text-xs font-semibold tracking-wide text-ja-deep uppercase">{label}</span>
        </motion.div>
      )}

      {/* Interactive Cursor Label (simulated visually via hover) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 hidden md:flex"
      >
        <div className="w-16 h-16 rounded-full border border-ja-purple/30 bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-[10px] tracking-widest font-bold">
          VIEW
        </div>
      </motion.div>
    </motion.div>
  );
}
