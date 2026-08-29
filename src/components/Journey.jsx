import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sparkle from './Sparkle';

const stages = [
  {
    id: '01',
    tag: 'THE SPARK',
    title: 'It starts with\na thought.',
    desc: 'A challenge. A celebration. A competition. A reason to bring people together. Every experience begins by understanding why the moment matters.',
    accent: ['WHAT IF?', 'WHY NOT?', "LET'S CREATE."],
  },
  {
    id: '02',
    tag: 'IMAGINE',
    title: 'Giving the idea\na world of its own.',
    desc: 'This is where the concept begins to take shape — the theme, activities, atmosphere and details that make the experience distinctly JA.',
    accent: ['ENERGY', 'THEME', 'DETAIL', 'ATMOSPHERE'],
  },
  {
    id: '03',
    tag: 'SHAPE',
    title: 'Turning imagination\ninto something real.',
    desc: 'Every detail is considered — the flow, timing, activities, environment and touchpoints that turn the concept into a complete experience.',
    accent: ['ARRIVAL', 'ENGAGE', 'CREATE', 'CELEBRATE'],
  },
  {
    id: '04',
    tag: 'BRING IT TO LIFE',
    title: 'The idea\nis alive.',
    desc: 'The planning ends. The experience begins. People arrive, engage, discover, connect and create — exactly as it was imagined.',
    accent: ['THE MOMENT IS NOW'],
  },
  {
    id: '05',
    tag: 'REMEMBER',
    title: "And when it's over,\nsomething stays.",
    desc: 'The activity ends. The room becomes quiet. But the confidence, laughter, connection and memories created continue beyond the event.',
    accent: ["The laughter.", "The connection.", "The confidence.", "The memory."],
  },
];

// ── Right-side visuals per stage ──────────────────────────────────────────────

function VisualSpark() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {['WHAT IF?', 'WHY NOT?', "LET'S CREATE."].map((t, i) => (
        <motion.div
          key={i}
          className="absolute font-serif italic text-ja-purple/25 whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(18px, 2.2vw, 30px)', top: `${22 + i * 28}%`, left: i % 2 === 0 ? '6%' : '35%' }}
          animate={{ opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.9 }}
        >
          {t}
        </motion.div>
      ))}
      <div className="relative z-10">
        <motion.div
          className="w-20 h-20 rounded-full bg-white border border-ja-lavender/60 shadow-xl flex items-center justify-center"
          animate={{ boxShadow: ['0 0 0px rgba(118,83,173,0)', '0 0 60px rgba(118,83,173,0.28)', '0 0 0px rgba(118,83,173,0)'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkle size={26} className="text-ja-purple" />
        </motion.div>
        {[1, 1.7, 2.4].map((scale, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-ja-purple/20"
            animate={{ scale: [1, scale, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.55 }}
          />
        ))}
      </div>
    </div>
  );
}

function VisualImagine() {
  const pills = [
    { label: 'ENERGY', pos: 'top-[12%] left-[8%]', bg: 'bg-ja-purple/10 text-ja-purple' },
    { label: 'THEME', pos: 'top-[8%] right-[12%]', bg: 'bg-ja-lavender text-ja-charcoal' },
    { label: 'DETAIL', pos: 'bottom-[22%] left-[14%]', bg: 'bg-white border border-ja-purple/20 text-ja-purple' },
    { label: 'SWATCH #7653AD', pos: 'bottom-[12%] right-[8%]', bg: 'bg-ja-purple text-white' },
    { label: 'ATMOSPHERE', pos: 'top-[42%] left-[5%]', bg: 'bg-white/60 border border-ja-lavender text-ja-charcoal/60' },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {pills.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-md px-3 py-1.5 text-[9px] font-bold tracking-[0.25em] uppercase shadow-md ${p.pos} ${p.bg}`}
          initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -4 : 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          {p.label}
        </motion.div>
      ))}
      <span className="font-serif italic text-ja-charcoal/20 text-2xl select-none z-10">Detail matters.</span>
    </div>
  );
}

function VisualShape() {
  const points = [[20,30],[140,30],[140,100],[60,100],[160,170]];
  const labels = [
    { text: 'ARRIVAL', pos: { top: '8%', left: '2%' } },
    { text: 'ENGAGE',  pos: { top: '23%', right: '10%' } },
    { text: 'CREATE',  pos: { top: '52%', left: '2%' } },
    { text: 'CELEBRATE', pos: { bottom: '12%', right: '4%' } },
  ];
  return (
    <div className="relative w-44 h-44 lg:w-52 lg:h-52">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <pattern id="gridS" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(118,83,173,0.12)" strokeWidth="1" />
        </pattern>
        <rect width="200" height="200" fill="url(#gridS)" />
        <motion.path
          d="M 20 30 L 140 30 L 140 100 L 60 100 L 60 170 L 160 170"
          fill="none" stroke="#7653AD" strokeWidth="2" strokeDasharray="4 6"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        {points.map(([cx, cy], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r="7"
            fill={i % 2 === 0 ? 'white' : '#7653AD'} stroke="#7653AD" strokeWidth="2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2 }}
          />
        ))}
      </svg>
      {labels.map((l, i) => (
        <motion.div
          key={i}
          className="absolute text-[8px] font-bold tracking-widest text-ja-purple bg-white px-1.5 py-0.5 rounded shadow-sm border border-ja-lavender/50 whitespace-nowrap"
          style={l.pos}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.12 }}
        >
          {l.text}
        </motion.div>
      ))}
    </div>
  );
}

function VisualLife() {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <img src="/main_feature.jpg" alt="Bring it to life" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      <motion.div
        className="absolute bottom-6 left-6"
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-[9px] font-bold tracking-[0.35em] text-white/60 uppercase mb-1">04 · BRING IT TO LIFE</p>
        <p className="font-serif italic text-white text-xl lg:text-2xl">The idea is alive.</p>
      </motion.div>
    </div>
  );
}

function VisualRemember() {
  const words = ["The laughter.", "The connection.", "The confidence.", "The memory."];
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 w-full h-full">
      {words.map((t, i) => (
        <motion.p
          key={i}
          className="font-serif italic text-ja-charcoal/40 text-lg lg:text-xl text-center"
          animate={{ opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.7 }}
        >
          {t}
        </motion.p>
      ))}
      <Sparkle size={18} className="absolute top-[10%] right-[20%] text-ja-purple/60" />
      <Sparkle size={12} className="absolute bottom-[15%] left-[18%] text-ja-purple/40" />
    </div>
  );
}

const VISUALS = [VisualSpark, VisualImagine, VisualShape, VisualLife, VisualRemember];

// ── Main Component ────────────────────────────────────────────────────────────

export default function Journey() {
  const [active, setActive] = useState(0);
  const Visual = VISUALS[active];

  return (
    <section className="bg-white overflow-hidden">

      {/* ── Header ── */}
      <div className="px-8 lg:px-20 pt-24 pb-14 border-b border-ja-purple/[0.09]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-ja-purple" />
              <span className="text-[10px] font-bold tracking-[0.45em] text-ja-purple uppercase">
                How We Create
              </span>
            </div>
            <h2 className="font-bold leading-[0.95] tracking-tight text-ja-charcoal"
              style={{ fontSize: 'clamp(36px, 4.5vw, 70px)' }}>
              Every unforgettable experience<br />
              starts with{' '}
              <span className="font-serif italic font-normal text-ja-purple">one small idea.</span>
            </h2>
          </motion.div>

          <p className="text-ja-charcoal/50 text-base lg:text-lg max-w-xs leading-relaxed hidden lg:block">
            From the first spark to the final shared moment, every JA experience is thoughtfully shaped around the people who will be part of it.
          </p>
        </div>
      </div>

      {/* ── Stage Tabs ── */}
      <div className="flex overflow-x-auto border-b border-ja-purple/[0.08]">
        {stages.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className={`relative flex-1 min-w-[130px] px-5 py-5 text-left transition-colors duration-300 ${
              active === i ? 'bg-ja-purple/[0.05]' : 'hover:bg-ja-purple/[0.025]'
            }`}
          >
            {/* Active underline */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-ja-purple"
              animate={{ scaleX: active === i ? 1 : 0, opacity: active === i ? 1 : 0 }}
              style={{ originX: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <p className="text-[9px] font-bold tracking-[0.35em] uppercase mb-1.5 transition-colors duration-300"
              style={{ color: active === i ? '#7653AD' : 'rgba(0,0,0,0.22)' }}>
              {s.id}
            </p>
            <p className="text-[11px] font-bold uppercase tracking-tight transition-colors duration-300 leading-tight"
              style={{ color: active === i ? '#1a1625' : 'rgba(26,22,37,0.28)' }}>
              {s.tag}
            </p>
          </button>
        ))}
      </div>

      {/* ── Stage Content ── */}
      <div className="relative overflow-hidden" style={{ minHeight: '58vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="absolute inset-0 flex flex-col lg:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Left: Text */}
            <div className="flex-1 px-8 lg:px-20 py-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-ja-purple/[0.07]">
              <p className="text-[10px] font-bold tracking-[0.4em] text-ja-purple uppercase mb-6">
                {stages[active].id} / {stages[active].tag}
              </p>
              <h3 className="font-serif text-ja-charcoal leading-[1.05] mb-7 whitespace-pre-line"
                style={{ fontSize: 'clamp(28px, 3.2vw, 54px)' }}>
                {stages[active].title}
              </h3>
              <p className="text-ja-charcoal/58 text-base lg:text-[17px] leading-relaxed max-w-md">
                {stages[active].desc}
              </p>

              {/* Accent tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {stages[active].accent.map((a, i) => (
                  <span key={i} className="text-[9px] font-bold tracking-[0.3em] uppercase text-ja-purple/40 border border-ja-purple/10 px-3 py-1 rounded-full">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:w-[44%] flex items-center justify-center bg-[#F8F5FF] p-10 relative overflow-hidden"
              style={{ minHeight: '40vh' }}>
              {/* Ghost number */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="font-serif italic leading-none"
                  style={{ fontSize: 'clamp(160px, 22vw, 280px)', color: 'rgba(118,83,173,0.05)' }}>
                  {stages[active].id}
                </span>
              </div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Visual />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Progress dots & footer ── */}
      <div className="px-8 lg:px-20 py-8 lg:py-12 border-t border-ja-purple/[0.07] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-white">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {stages.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}>
                <motion.div
                  className="rounded-full bg-ja-purple transition-all duration-300"
                  animate={{ width: active === i ? 20 : 6, opacity: active === i ? 1 : 0.2 }}
                  style={{ height: 6 }}
                />
              </button>
            ))}
          </div>
          <span className="text-[10px] font-bold tracking-[0.35em] text-ja-charcoal/25 uppercase ml-1">
            {String(active + 1).padStart(2, '0')} / 05
          </span>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          <Sparkle size={14} className="text-ja-purple" />
          <span className="text-[10px] font-bold tracking-[0.35em] text-ja-charcoal/32 uppercase">JA Events</span>
        </div>
      </div>

    </section>
  );
}
