import { motion } from 'framer-motion';

export default function Sparkle({ className = '', style = {}, delay = 0, size = 24, absolute = true }) {
  return (
    <motion.div
      className={`${absolute ? 'absolute' : 'relative flex-shrink-0'} text-ja-purple pointer-events-none ${className}`}
      style={{ width: size, height: size, ...style }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.8, 0.4],
        rotate: [0, 90, 180]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
      </svg>
    </motion.div>
  );
}
