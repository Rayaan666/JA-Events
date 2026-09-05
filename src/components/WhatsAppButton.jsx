import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = "971528394207";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20JA%20Events!%20I'd%20like%20to%20know%20more%20about%20your%20experiences.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JA Events on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.65)] transition-all group cursor-pointer"
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6 fill-current relative z-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.228-1.158zm12.012-6.57c-.29-.145-1.716-.847-1.98-.943-.264-.096-.456-.145-.648.145-.192.29-.744.943-.912 1.137-.168.192-.336.217-.626.072-.29-.145-1.226-.452-2.336-1.441-.864-.77-1.447-1.721-1.617-2.011-.17-.29-.018-.447.127-.591.131-.13.29-.336.435-.504.145-.168.193-.29.29-.483.096-.192.048-.361-.024-.504-.072-.145-.648-1.56-.888-2.137-.234-.563-.473-.486-.648-.494l-.552-.01c-.192 0-.504.072-.768.361-.264.29-1.01 1.01-1.01 2.463 0 1.452 1.058 2.855 1.204 3.048.146.192 2.083 3.181 5.047 4.461 2.964 1.28 2.964.853 3.493.805.529-.048 1.716-.701 1.956-1.378.24-.676.24-1.256.168-1.378-.072-.123-.264-.192-.554-.337z" />
      </svg>

      {/* Label / Tooltip expansion on hover */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-xs tracking-wider pr-1 uppercase relative z-10">
        WhatsApp Us
      </span>
    </motion.a>
  );
}
