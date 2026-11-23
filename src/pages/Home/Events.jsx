import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { events } from '../../images';

const ease = [0.22, 1, 0.36, 1];

const typeConfig = {
  Conference: {
    color: 'text-accent-300',
    border: 'border-accent-400/30',
    bg: 'bg-accent-500/15',
    chipBg: 'bg-accent-500/20',
    chipText: 'text-accent-200',
    dot: 'bg-accent-400',
    gradient: 'from-accent-600/30',
  },
  Seminar: {
    color: 'text-sky-300',
    border: 'border-sky-400/30',
    bg: 'bg-sky-500/15',
    chipBg: 'bg-sky-500/20',
    chipText: 'text-sky-200',
    dot: 'bg-sky-400',
    gradient: 'from-sky-600/30',
  },
  'Hands-on Training': {
    color: 'text-emerald-300',
    border: 'border-emerald-400/30',
    bg: 'bg-emerald-500/15',
    chipBg: 'bg-emerald-500/20',
    chipText: 'text-emerald-200',
    dot: 'bg-emerald-400',
    gradient: 'from-emerald-600/30',
  },
  Workshop: {
    color: 'text-amber-300',
    border: 'border-amber-400/30',
    bg: 'bg-amber-500/15',
    chipBg: 'bg-amber-500/20',
    chipText: 'text-amber-200',
    dot: 'bg-amber-400',
    gradient: 'from-amber-600/30',
  },
};

function FeaturedEvent({ event, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  const cfg = typeConfig[event.type] || typeConfig.Workshop;
  const reversed = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, ease }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image with parallax */}
        <div className={`relative overflow-hidden lg:min-h-[420px] ${reversed ? 'lg:order-2' : ''}`}>
          <motion.img
            style={{ y: imgY, scale: imgScale }}
            src={event.image}
            alt={event.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} via-ink-950/40 to-ink-950/60`}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          {/* Floating type chip */}
          <div className={`absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border ${cfg.border} ${cfg.chipBg} ${cfg.chipText} px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] backdrop-blur-md`}>
            <Sparkles size={12} />
            {event.type}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="flex items-center gap-3 text-[12.5px] text-ink-400">
            <span className={`inline-flex items-center gap-1.5 ${cfg.color}`}>
              <Calendar size={14} />
              {event.date}
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {event.location}
            </span>
          </div>

          <h3 className="mt-5 text-balance text-[24px] font-semibold leading-tight text-ink-50 md:text-[30px]">
            {event.title}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            {event.desc}
          </p>

          <div className="mt-7 flex items-center gap-4">
            <div className={`h-px flex-1 bg-gradient-to-r ${cfg.gradient} to-transparent`} />
            <ArrowUpRight
              size={22}
              className={`shrink-0 text-ink-500 transition-all duration-400 ease-smooth group-hover:-translate-y-1 group-hover:translate-x-1 ${cfg.color}`}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function EventCard({ event, index }) {
  const cfg = typeConfig[event.type] || typeConfig.Workshop;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, ease, delay: 0.08 * index }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 ease-smooth hover:border-white/20 hover:bg-white/[0.04]"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
        <div className={`absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border ${cfg.border} ${cfg.chipBg} ${cfg.chipText} px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] backdrop-blur-md`}>
          {event.type}
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[11.5px] text-ink-400">
          <span className={`inline-flex items-center gap-1 ${cfg.color}`}>
            <Calendar size={12} />
            {event.date}
          </span>
        </div>
        <h4 className="mt-3 text-[16px] font-semibold leading-tight text-ink-100">
          {event.title}
        </h4>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-400">
          {event.desc}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-[11.5px] text-ink-500">
          <MapPin size={12} />
          {event.location}
        </div>
      </div>
    </motion.article>
  );
}

export default function Events() {
  const featured = events.filter((e) => e.featured);
  const rest = events.filter((e) => !e.featured);

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-ink-900"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-topo opacity-[0.1]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent-600/10 blur-[180px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-sky-600/8 blur-[150px]"
        aria-hidden
      />

      {/* Intro band */}
      <div className="relative py-28 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 1, ease }}
            className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <span className="text-[12px] font-medium uppercase tracking-[0.28em] text-accent-300">
                Events
              </span>
              <h2 className="mt-7 text-balance text-[34px] leading-[1.08] text-ink-50 sm:text-[44px] md:text-[56px]">
                Convening minds, sharing knowledge, building capacity.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-400">
              Conferences, seminars, and intensive training programmes that bring together
              researchers, practitioners, and communities throughout the year.
            </p>
          </motion.div>

          {/* Event type legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {Object.keys(typeConfig).map((type) => {
              const cfg = typeConfig[type];
              return (
                <span
                  key={type}
                  className={`inline-flex items-center gap-2 rounded-full border ${cfg.border} ${cfg.bg} px-3.5 py-1.5 text-[12px] font-medium ${cfg.color}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                  {type}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Featured events */}
      <div className="relative pb-8">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="space-y-7 md:space-y-8">
            {featured.map((event, i) => (
              <FeaturedEvent key={event.title} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming events grid */}
      <div className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, ease }}
            className="mb-12"
          >
            <span className="text-[12px] font-medium uppercase tracking-[0.24em] text-ink-500">
              More Events
            </span>
            <h3 className="mt-3 text-[24px] font-semibold text-ink-100 md:text-[30px]">
              Upcoming workshops, seminars &amp; training
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {rest.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline strip */}
      <div className="relative border-t border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, ease }}
            className="mb-10"
          >
            <span className="text-[12px] font-medium uppercase tracking-[0.24em] text-ink-500">
              Calendar
            </span>
            <h3 className="mt-3 text-[22px] font-semibold text-ink-100 md:text-[28px]">
              The year ahead
            </h3>
          </motion.div>

          {/* Horizontal scroll timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-[22px] h-px bg-white/10" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 1.5, ease }}
              className="absolute left-0 right-0 top-[22px] h-px origin-left bg-gradient-to-r from-accent-400 via-accent-300 to-transparent"
            />
            <div className="flex gap-4 overflow-x-auto pb-4">
              {events.map((event, i) => {
                const cfg = typeConfig[event.type] || typeConfig.Workshop;
                return (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5% 0px' }}
                    transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.08 }}
                    className="relative shrink-0 pt-0"
                  >
                    <span className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink-900 bg-ink-900 ${cfg.dot}`}>
                      <span className={`h-3 w-3 rounded-full ${cfg.dot}`} />
                    </span>
                    <div className="mt-3 w-44">
                      <p className={`text-[12px] font-medium ${cfg.color}`}>{event.date}</p>
                      <p className="mt-1 text-[12.5px] leading-snug text-ink-400">
                        {event.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
