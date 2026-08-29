import { motion } from 'framer-motion';
import Sparkle from './Sparkle';

const testimonials = [
  {
    id: 1,
    quote: "It wasn't just an event. They walked away feeling like they had achieved something.",
    role: "Parent",
    event: "Creative Workshop",
    number: "01",
  },
  {
    id: 2,
    quote: "Seconds mattered, but the focus in that room made time stand completely still.",
    role: "Participant",
    event: "Rubik's Cube Competition",
    number: "02",
  },
  {
    id: 3,
    quote: "The strategic patience they learned over the board changed how they see challenges.",
    role: "Parent",
    event: "Chess Tournament",
    number: "03",
  },
  {
    id: 4,
    quote: "The shared laughter and collaboration created connections that felt completely genuine.",
    role: "Corporate Client",
    event: "Team Experience",
    number: "04",
  },
  {
    id: 5,
    quote: "Seeing the students fully immersed and working together was incredibly rewarding.",
    role: "Teacher",
    event: "Science Discovery",
    number: "05",
  },
  {
    id: 6,
    quote: "Every game was a new challenge, but the environment was supportive and friendly.",
    role: "Competitor",
    event: "Chess Tournament",
    number: "06",
  },
  {
    id: 7,
    quote: "They managed to turn a simple art class into a full sensory journey of imagination.",
    role: "Organizer",
    event: "Art Gallery Event",
    number: "07",
  },
  {
    id: 8,
    quote: "My child learned that failure is just another step towards solving the puzzle.",
    role: "Parent",
    event: "Rubik's Challenge",
    number: "08",
  },
  {
    id: 9,
    quote: "Our team still talks about the activities. It brought a fresh energy back to the office.",
    role: "HR Manager",
    event: "Team Experience",
    number: "09",
  },
  {
    id: 10,
    quote: "The dedication to creating a safe and engaging space for everyone was outstanding.",
    role: "Sponsor",
    event: "Community Workshop",
    number: "10",
  },
  {
    id: 11,
    quote: "I didn't think I could draw, but the guidance gave me the confidence to try.",
    role: "Participant",
    event: "Creative Workshop",
    number: "11",
  },
  {
    id: 12,
    quote: "The level of planning and execution was unlike any event we've hosted before.",
    role: "Director",
    event: "Corporate Summit",
    number: "12",
  }
];

// Split testimonials into two sets for double row marquee
const row1 = [...testimonials.slice(0, 6), ...testimonials.slice(0, 6)];
const row2 = [...testimonials.slice(6), ...testimonials.slice(6)];

export default function Voices() {
  return (
    <section id="voices" className="relative bg-[#21162F] text-white selection:bg-ja-purple/30 selection:text-white pb-12 lg:pb-16 overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scrollLeft 45s linear infinite;
        }
        .animate-scroll-slow {
          animation: scrollLeft 55s linear infinite;
        }
      `}</style>

      {/* SVG Transition Divider from Gallery Section */}
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-[50px] md:h-[90px] lg:h-[120px] text-[#FCFAFE] z-20 pointer-events-none" preserveAspectRatio="none">
        <path d="M0 0H1440V40C1440 40 1140 120 720 120C300 120 0 40 0 40V0Z" fill="currentColor"/>
      </svg>

      {/* Decorative Glows */}
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-ja-purple/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#4F327C]/15 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* ── Section Header ── */}
      <div className="px-4 sm:px-8 lg:px-20 pt-24 sm:pt-36 lg:pt-48 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-ja-purple" />
              <span className="text-[10px] font-bold tracking-[0.45em] text-ja-purple uppercase">
                Voices of JA
              </span>
            </div>
            <h2 className="font-bold leading-[0.95] tracking-tight text-white"
              style={{ fontSize: 'clamp(28px, 4.5vw, 70px)' }}>
              The moments are ours to create.
            </h2>
            <h2 className="font-serif italic font-normal text-ja-purple leading-[1.1]"
              style={{ fontSize: 'clamp(26px, 4.2vw, 66px)' }}>
              The stories belong to them.
            </h2>
          </motion.div>

          <p className="text-white/50 text-base lg:text-lg max-w-xs leading-relaxed hidden lg:block">
            Scroll, hover, or read through the genuine experiences shared by our community.
          </p>
        </div>
      </div>

      {/* ── Marquee Cards Container ── */}
      <div className="relative flex flex-col gap-6 lg:gap-8 w-full overflow-hidden select-none py-4 relative z-10">
        
        {/* Row 1 (Faster Scroll) */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-scroll-fast group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 lg:gap-8 min-w-max px-6">
            {row1.map((t, idx) => (
              <div
                key={`r1-${t.id}-${idx}`}
                className="w-[310px] sm:w-[360px] md:w-[420px] shrink-0 p-8 sm:p-10 rounded-[32px] bg-white/[0.03] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-ja-purple/50 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between whitespace-normal"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-ja-purple/50 uppercase">
                      {t.event}
                    </span>
                    <span className="font-serif italic text-sm text-ja-purple/40">
                      {t.number}
                    </span>
                  </div>
                  <blockquote className="font-serif text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10">
                    "{t.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-4 h-px bg-white/20" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Slower Scroll) */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-scroll-slow group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 lg:gap-8 min-w-max px-6">
            {row2.map((t, idx) => (
              <div
                key={`r2-${t.id}-${idx}`}
                className="w-[310px] sm:w-[360px] md:w-[420px] shrink-0 p-8 sm:p-10 rounded-[32px] bg-white/[0.03] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-ja-purple/50 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between whitespace-normal"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-ja-purple/50 uppercase">
                      {t.event}
                    </span>
                    <span className="font-serif italic text-sm text-ja-purple/40">
                      {t.number}
                    </span>
                  </div>
                  <blockquote className="font-serif text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10">
                    "{t.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-4 h-px bg-white/20" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Closing Climax Statement ── */}
      <div className="px-8 lg:px-20 mt-10 pt-8 border-t border-white/10 relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="font-sans font-semibold tracking-tight text-white leading-[0.95]"
            style={{ fontSize: 'clamp(36px, 5.5vw, 84px)' }}>
            What people <span className="font-serif italic font-normal text-ja-purple">remember</span> is how you made them <span className="font-serif italic font-normal text-ja-purple">feel.</span>
          </h2>
          <p className="mt-6 text-white/45 text-[10px] tracking-[0.35em] uppercase font-bold">
            And that's why every detail matters.
          </p>
        </motion.div>

        <div className="flex flex-col items-start lg:items-end gap-6 shrink-0">
          <div className="flex flex-col gap-3">
            <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-white/30">Your story could be next.</p>
            <h4 className="font-serif text-white leading-tight"
              style={{ fontSize: 'clamp(22px, 2.2vw, 32px)' }}>
              Ready to create something<br />
              <span className="italic text-ja-purple">worth remembering?</span>
            </h4>
          </div>
          <div className="flex items-center gap-3">
            <Sparkle size={14} className="text-ja-purple" />
            <span className="text-[10px] font-bold tracking-[0.35em] text-white/32 uppercase">JA Events</span>
          </div>
        </div>
      </div>

    </section>
  );
}
