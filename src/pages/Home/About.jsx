import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// import { aboutImage } from '../../images';
import aboutImage from "../../assests/AboutImage.jpg";

const ease = [0.22, 1, 0.36, 1];

const pillars = [
  {
    title: 'Rooted in the Field',
    body: 'Projects are shaped by direct, sustained engagement with rural communities — not designed in isolation.',
  },
  {
    title: 'Engineered to Last',
    body: 'Solutions are built to be robust, repairable, and appropriate to the environments they serve.',
  },
  {
    title: 'Quietly Measured',
    body: 'Impact is tracked where it matters — in the routines, livelihoods, and wellbeing of real people.',
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '8%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-ink-50 py-28 md:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-topo opacity-50" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-accent-100/40 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.9, ease }}
          className="max-w-4xl"
        >
          <span className="text-[12px] font-medium tracking-[0.28em] text-accent-600">
            ABOUT RuTAG
          </span>
          <h2 className="mt-7 text-balance text-[34px] leading-[1.1] text-ink-900 sm:text-[44px] md:text-[56px]">
            Technology becomes meaningful when it reaches the communities that need it most.
          </h2>
        </motion.div>

        {/* Body + image */}
        <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                style={{ y: imgY, scale: imgScale }}
                src={aboutImage}
                alt="Communities engaged in rural development work"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink-900/10" />
            </div>
            {/* <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.22em] text-ink-400">
              In the field, West Bengal
            </p> */}
          </motion.div>

          <div className="md:col-span-7 md:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.9, ease, delay: 0.18 }}
              className="space-y-6 text-[17px] leading-[1.7] text-ink-600 md:text-[18px]"
            >
              <p>
                The Rural Technology Action Group at IIT Kharagpur exists at a deliberate
                intersection — between the rigor of an engineering institution and the
                lived reality of rural India. It is a place where research does not stop at
                publication, but continues until it takes a dependable form in someone's
                hands.
              </p>
              <p>
                The work is unhurried and considered. Each project begins with listening,
                moves through prototyping and testing alongside the communities it is meant
                to serve, and arrives only when the technology can stand on its own —
                maintained locally, understood intuitively, and quietly useful.
              </p>
            </motion.div>

            {/* Pillars */}
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.7, ease, delay: 0.1 * i }}
                  className="bg-ink-50 p-6 md:p-7"
                >
                  <span className="font-display text-[22px] font-semibold text-ink-900">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-[15px] font-semibold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
