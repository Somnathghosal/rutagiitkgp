import { motion } from 'framer-motion';
import { Target, HeartHandshake, Lightbulb, TrendingUp } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To identify, develop, and deploy appropriate technology that addresses the real, felt needs of rural communities — technology that is robust, affordable, and maintainable locally.',
  },
  {
    icon: Lightbulb,
    title: 'Our Approach',
    desc: 'We begin with listening. Every project is grounded in direct community engagement, ensuring that solutions emerge from real needs rather than assumptions.',
  },
  {
    icon: HeartHandshake,
    title: 'Our Values',
    desc: 'Dignity over charity. Sustainability over speed. We build technology that respects the intelligence and agency of the communities it serves.',
  },
  {
    icon: TrendingUp,
    title: 'Our Impact',
    desc: 'Measured not in papers published, but in lives improved — in time saved, effort reduced, and opportunities created for rural communities across India.',
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-white py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-accent-100/30 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl"
        >
          <span className="text-[12px] font-medium uppercase tracking-[0.28em] text-accent-600">
            Vision & Mission
          </span>
          <h2 className="mt-7 text-balance text-[34px] leading-[1.1] text-ink-900 sm:text-[44px] md:text-[56px]">
            A future where rural communities shape their own technological destiny.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-600">
            RuTAG IIT Kharagpur envisions a rural India that is not merely a recipient of
            technology, but an active participant in its creation — where innovation flows
            from the field to the lab and back again.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, ease, delay: 0.1 * i }}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-ink-50/50 p-7 transition-all duration-500 ease-smooth hover:border-accent-300 hover:bg-white md:p-8"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-100/0 transition-all duration-500 ease-smooth group-hover:bg-accent-100/40" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600/10 text-accent-600 transition-all duration-500 ease-smooth group-hover:bg-accent-600 group-hover:text-white">
                  <p.icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-[18px] font-semibold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
