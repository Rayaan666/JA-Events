import { motion } from 'framer-motion';

export default function FloatingLabel({ text, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`absolute z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-[0_4px_20px_rgba(118,83,173,0.1)] border border-white/50 ${className}`}
      animate={{
        y: [0, -8, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-ja-purple"></div>
      <span className="text-[10px] font-bold tracking-widest uppercase text-ja-deep">
        {text}
      </span>
    </motion.div>
  );
}
