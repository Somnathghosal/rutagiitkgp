import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GraduationCap,
  Wrench,
  Map,
  Users,
  Cpu,
  Hammer,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { activities } from "../../images";
import { Link } from "react-router-dom";


const ease = [0.22, 1, 0.36, 1];

const iconMap = {
  GraduationCap,
  Wrench,
  Map,
  Users,
  Cpu,
  Hammer,
};

const accentMap = {
  accent: {
    text: 'text-accent-600',
    bg: 'bg-accent-600',
    bgSoft: 'bg-accent-600/10',
    border: 'border-accent-600/20',
    ring: 'ring-accent-600/30',
    glow: 'bg-accent-600/15',
  },
  amber: {
    text: 'text-amber-600',
    bg: 'bg-amber-600',
    bgSoft: 'bg-amber-600/10',
    border: 'border-amber-600/20',
    ring: 'ring-amber-600/30',
    glow: 'bg-amber-500/15',
  },
  emerald: {
    text: 'text-emerald-600',
    bg: 'bg-emerald-600',
    bgSoft: 'bg-emerald-600/10',
    border: 'border-emerald-600/20',
    ring: 'ring-emerald-600/30',
    glow: 'bg-emerald-500/15',
  },
  sky: {
    text: 'text-sky-600',
    bg: 'bg-sky-600',
    bgSoft: 'bg-sky-600/10',
    border: 'border-sky-600/20',
    ring: 'ring-sky-600/30',
    glow: 'bg-sky-500/15',
  },
  violet: {
    text: 'text-violet-600',
    bg: 'bg-violet-600',
    bgSoft: 'bg-violet-600/10',
    border: 'border-violet-600/20',
    ring: 'ring-violet-600/30',
    glow: 'bg-violet-500/15',
  },
  rose: {
    text: 'text-rose-600',
    bg: 'bg-rose-600',
    bgSoft: 'bg-rose-600/10',
    border: 'border-rose-600/20',
    ring: 'ring-rose-600/30',
    glow: 'bg-rose-500/15',
  },
};

function ActivityRow({ activity, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0.04, 0.04, 0]);
  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  const Icon = iconMap[activity.icon] || Wrench;
  const a = accentMap[activity.accent] || accentMap.accent;
  const reversed = index % 2 === 1;
  const isDark = index % 2 === 1;

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden py-20 md:py-28 ${isDark ? 'bg-ink-900' : 'bg-ink-50'}`}
    >
      {/* Ambient glow */}
      <div
        className={`pointer-events-none absolute h-[400px] w-[400px] rounded-full ${a.glow} blur-[150px] ${
          reversed ? 'left-0 top-1/4' : 'right-0 top-1/4'
        }`}
        aria-hidden
      />
      {isDark && (
        <div className="pointer-events-none absolute inset-0 bg-topo opacity-[0.08]" aria-hidden />
      )}

      {/* Ghost number */}
      <motion.span
        style={{ opacity: numberOpacity }}
        className={`pointer-events-none absolute select-none font-display text-[180px] font-bold leading-none md:text-[280px] ${
          reversed ? 'right-4 top-8 md:right-10 md:top-12' : 'left-4 top-8 md:left-10 md:top-12'
        } ${isDark ? 'text-white' : 'text-ink-900'}`}
        aria-hidden
      >
        0{index + 1}
      </motion.span>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: reversed ? 40 : -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.9, ease }}
            className={`relative lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                style={{ y: imgY, scale: imgScale }}
                src={activity.image}
                alt={activity.title}
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            {/* Floating icon badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className={`absolute -bottom-5 ${reversed ? '-left-3' : '-right-3'} flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_12px_36px_-12px_rgba(26,26,24,0.3)] md:h-20 md:w-20`}
            >
              <Icon size={28} className={a.text} strokeWidth={1.5} />
              <span className={`absolute inset-0 rounded-2xl ring-2 ${a.ring}`} />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
            {/* Progress line */}
            <motion.div
              style={{ scaleX: lineScaleX }}
              className={`mb-6 h-px w-16 origin-left ${isDark ? 'bg-accent-300' : 'bg-accent-600'}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${
                  isDark
                    ? 'border-white/15 text-accent-300'
                    : `${a.border} ${a.bgSoft} ${a.text}`
                }`}
              >
                <Sparkles size={11} />
                Programme 0{index + 1}
              </span>
              <h3
                className={`mt-5 text-balance text-[24px] font-semibold leading-tight sm:text-[28px] md:text-[32px] ${
                  isDark ? 'text-ink-50' : 'text-ink-900'
                }`}
              >
                {activity.title}
              </h3>
              <p
                className={`mt-4 text-[15px] leading-relaxed md:text-[16px] ${
                  isDark ? 'text-ink-300' : 'text-ink-600'
                }`}
              >
                {activity.desc}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {activity.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-6% 0px' }}
                    transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-2"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${a.bgSoft} ${a.text}`}
                    >
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <span className={`text-[13.5px] ${isDark ? 'text-ink-300' : 'text-ink-600'}`}>
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Activities() {
  return (
    <section id="activities" className="relative">
      {/* Intro band */}
      <div className="relative overflow-hidden bg-ink-50 py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-topo opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-accent-600/10 blur-[130px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 1, ease }}
            className="max-w-3xl"
          >
            <span className="text-[12px] font-medium uppercase tracking-[0.28em] text-accent-600">
              Activities
            </span>
            <h2 className="mt-7 text-balance text-[34px] leading-[1.08] text-ink-900 sm:text-[44px] md:text-[56px]">
              Building skills, bridging gaps, nurturing self-reliance.
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
              className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-600"
            >
              Through training programmes, hands-on workshops, and immersive field
              engagement, RuTAG equips rural youth with the skills and confidence to
              shape their own futures.
            </motion.p>
          </motion.div>

          {/* Stat highlights */}
          <div className="mt-14 grid grid-cols-3 gap-4 md:mt-16 md:gap-8">
            {[
              { num: "1000's", label: "Of Youth Trained" },
              { num: "100's", label: "Of Workshops Held" },
              { num: "100's", label: "Of Villages Visited" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.1 }}
                className="text-left"
              >
                <p className="font-display text-[28px] font-semibold text-ink-900 md:text-[42px]">
                  {s.num}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500 md:text-[12.5px]">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Alternating activity rows */}
      <div>
        {activities.map((activity, i) => (
          <ActivityRow key={activity.title} activity={activity} index={i} />
        ))}
      </div>

      {/* Closing CTA */}
      <div className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 0.9, ease }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <h3 className="max-w-2xl text-balance text-[26px] font-semibold text-ink-900 md:text-[34px]">
              Interested in participating or partnering?
            </h3>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-600">
              Our programmes run year-round. Reach out to learn about upcoming training
              schedules and collaboration opportunities.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-7 py-3.5 text-[14px] font-medium text-ink-50 transition-all duration-400 ease-smooth hover:-translate-y-0.5 hover:bg-accent-700"
            >
              Get in touch
              <ArrowRight
                size={16}
                className="transition-transform duration-400 ease-smooth group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
