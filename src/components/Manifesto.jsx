import { useState } from 'react';
import { motion } from 'framer-motion';

const principles = [
  { id: '01', title: 'CREATE',      desc: 'Ideas become experiences.' },
  { id: '02', title: 'PARTICIPATE', desc: 'Nobody just a spectator.' },
  { id: '03', title: 'DISCOVER',    desc: 'New possibilities open.' },
  { id: '04', title: 'CONNECT',     desc: 'Shared moments bind us.' },
  { id: '05', title: 'REMEMBER',    desc: 'The feeling stays forever.' },
];

export default function Manifesto() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative bg-[#F8F5FF] overflow-hidden flex flex-col min-h-screen px-8 lg:px-20 xl:px-28 pt-20 pb-12">

      {/* Ghost orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ja-purple/8 blur-[120px] pointer-events-none" />

      {/* Ghost quote mark */}
      <div
        className="absolute right-8 lg:right-24 top-8 text-[clamp(200px,28vw,400px)] font-serif text-ja-purple/[0.04] leading-none pointer-events-none select-none"
        aria-hidden
      >
        "
      </div>

      {/* ── Label ── */}
      <motion.div
        className="flex items-center gap-4 mb-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-ja-purple" />
        <span className="text-[10px] font-bold tracking-[0.45em] text-ja-purple uppercase">
          Why JA Events
        </span>
      </motion.div>

      {/* ── Main Headline ── */}
      <motion.div
        className="relative z-10 my-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2
          className="font-bold leading-[0.9] tracking-[-0.025em] text-ja-charcoal"
          style={{ fontSize: 'clamp(52px, 7.5vw, 118px)' }}
        >
          The best events<br />aren't simply
        </h2>
        <h2
          className="font-serif italic font-normal text-ja-purple leading-[0.95]"
          style={{ fontSize: 'clamp(52px, 7.5vw, 118px)' }}
        >
          attended.
        </h2>

        <p className="mt-8 text-ja-charcoal/50 text-base lg:text-lg max-w-sm leading-relaxed">
          Every JA experience is shaped around the people taking part — to think, participate, discover, connect and celebrate.
        </p>
      </motion.div>

      {/* ── Five Principles ── */}
      <div className="relative z-10 mt-auto pt-10 border-t border-ja-purple/[0.12]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 divide-x divide-ja-purple/[0.1]">
          {principles.map((p, i) => (
            <motion.div
              key={p.id}
              className="group px-5 first:pl-0 last:pr-0 cursor-default"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.55 }}
              animate={{
                opacity: hovered === null ? 1 : hovered === i ? 1 : 0.25,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="text-[10px] font-serif italic text-ja-purple/40 mb-2 transition-colors duration-300 group-hover:text-ja-purple/80">
                {p.id}
              </div>
              <h3
                className="font-bold uppercase tracking-widest text-ja-charcoal mb-2 transition-colors duration-300 group-hover:text-ja-purple"
                style={{ fontSize: 'clamp(11px, 1.1vw, 15px)', letterSpacing: '0.15em' }}
              >
                {p.title}
              </h3>
              <p className="text-[11px] text-ja-charcoal/45 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
