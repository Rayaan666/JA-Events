import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Trophy, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Palette,
  Heart
} from 'lucide-react';

const highlightImages = [
  '/HIGHLIGHTS/WhatsApp Image 2026-09-11 at 5.57.54 PM.jpeg',
  '/HIGHLIGHTS/WhatsApp Image 2026-09-11 at 5.57.54 PM (1).jpeg',
  '/HIGHLIGHTS/WhatsApp Image 2026-09-11 at 5.57.54 PM (2).jpeg',
  '/HIGHLIGHTS/WhatsApp Image 2026-09-11 at 5.57.54 PM (3).jpeg',
  '/HIGHLIGHTS/WhatsApp Image 2026-09-11 at 5.57.54 PM (4).jpeg',
  '/HIGHLIGHTS/WhatsApp Image 2026-09-11 at 5.57.54 PM (5).jpeg',
  '/HIGHLIGHTS/WhatsApp Image 2026-09-11 at 5.57.54 PM (6).jpeg',
];

export default function UpcomingHighlight() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % highlightImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + highlightImages.length) % highlightImages.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % highlightImages.length);
  };

  return (
    <section id="upcoming" className="pt-12 pb-14 md:pt-16 md:pb-20 bg-[#21162F] text-white relative overflow-hidden selection:bg-ja-purple/30 selection:text-white">
      {/* Soft atmospheric background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ja-purple/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#4F327C]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Editorial Top Section Header */}
        <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-5 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-ja-purple uppercase block mb-2">
              - UPCOMING EVENT
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-normal tracking-tight">
              Children’s Art Exhibition 🎨
            </h2>
          </div>
          <div className="md:max-w-md text-sm md:text-base text-white/70 leading-relaxed">
            A celebration of youth creativity for kids aged <strong className="text-white font-semibold">6 to 18 years</strong>.
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details & Program (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Why Art Matters Editorial Block */}
            <div className="bg-white/5 backdrop-blur-md p-6 md:p-7 rounded-2xl border border-white/10 shadow-sm">
              <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-2.5 flex items-center gap-2">
                <Palette className="w-5 h-5 text-ja-purple shrink-0" />
                Why Art Matters
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Art has shaped history, inspired societies, and helped children express emotions beyond words. It builds confidence, imagination, and emotional strength — skills that stay for life.
              </p>
            </div>

            {/* Event Specs Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-ja-purple/20 text-ja-purple border border-ja-purple/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-wider block">Date</span>
                  <p className="text-sm md:text-base font-semibold text-white mt-0.5">3rd October (Saturday)</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-ja-purple/20 text-ja-purple border border-ja-purple/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-wider block">Time</span>
                  <p className="text-sm md:text-base font-semibold text-white mt-0.5">2 PM to 7 PM</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 sm:col-span-2 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-ja-purple/20 text-ja-purple border border-ja-purple/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-wider block">Venue</span>
                  <p className="text-sm md:text-base font-semibold text-white mt-0.5">
                    Al Twar Library, Damascus Street, Al Twar 1, Deira, Dubai
                  </p>
                  <p className="text-xs text-ja-purple font-medium mt-0.5">
                    📍 5 minutes walk from Dafza Metro Station
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 bg-white/5 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-center">
              <div>
                <span className="text-xs text-white/50 block">Stall Fee</span>
                <span className="text-base md:text-lg font-bold text-ja-purple">AED 150/-</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-xs text-white/50 block">Exhibit Setup</span>
                <span className="text-xs md:text-sm font-semibold text-white">6×2 Table + 2 Chairs</span>
              </div>
              <div>
                <span className="text-xs text-white/50 block">Visitors</span>
                <span className="text-xs md:text-sm font-bold text-emerald-400">FREE Entry</span>
              </div>
            </div>

            {/* Extras: Trophy & Sponsors */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs md:text-sm bg-ja-purple/10 p-3.5 rounded-xl border border-ja-purple/20">
              <div className="flex items-center gap-2 font-medium text-white">
                <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Trophy winners for best Art Stalls</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-ja-purple">
                <Heart className="w-4 h-4" />
                <span>Sponsors Welcome</span>
              </div>
            </div>

            {/* Quote & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <p className="font-serif italic text-sm text-white/70">
                “Creativity today becomes confidence tomorrow.”
              </p>
              <a
                href="https://pay.nomodapp.com/en/l/b12d2e4cd7974226"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-ja-purple hover:bg-ja-purple/80 text-white font-medium px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm shrink-0 shadow-lg shadow-ja-purple/20"
              >
                <span>Book Stall</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Gallery & Photo Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {/* Main Showcase Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={highlightImages[activeIdx]}
                  alt={`Children's Art Exhibition ${activeIdx + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Minimal Prev/Next controls */}
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md shadow transition-transform hover:scale-105 border border-white/20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md shadow transition-transform hover:scale-105 border border-white/20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full font-mono border border-white/10">
                {activeIdx + 1} / {highlightImages.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-7 gap-2">
              {highlightImages.map((imgSrc, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIdx(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border transition-all ${
                    activeIdx === index 
                      ? 'border-ja-purple ring-2 ring-ja-purple/40 opacity-100' 
                      : 'border-white/10 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={imgSrc} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Tagline note */}
            <p className="text-xs text-center text-white/60 font-serif italic mt-1">
              Let your child showcase their talent and be part of a beautiful creative journey.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
