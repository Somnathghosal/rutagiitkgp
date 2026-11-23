import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-ink-900 pt-32 pb-16 md:min-h-[58vh] md:pt-36 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-topo opacity-[0.12]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-600/15 blur-[160px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="max-w-3xl"
        >
          <span className="text-[12px] font-medium uppercase tracking-[0.28em] text-accent-300">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-[36px] leading-[1.08] text-ink-50 sm:text-[48px] md:text-[60px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-400 md:text-[17px]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
