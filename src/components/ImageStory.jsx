import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { storyImages } from '../images';

const ease = [0.22, 1, 0.36, 1];

function StoryPanel({ index, src, caption, sub }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Slow upward drift + faint scale, like a documentary page turn
  const imgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const captionY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -20]);
  const captionOpacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    [0, 1, 1, 0]
  );
  const indexOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.5, 0.5, 0]
  );

  // Alternate alignment for visual rhythm
  const alignLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative h-[100svh] w-full snap-start overflow-hidden"
    >
      {/* Slight overlap with previous panel via negative top margin on later items */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={src}
          alt={caption}
          className="h-full w-full object-cover"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
        {/* Readability + cinematic grade */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/10 to-ink-950/30" />
        <div className="absolute inset-0 bg-ink-950/10" />
      </motion.div>

      {/* Ghost index number */}
      <motion.span
        style={{ opacity: indexOpacity }}
        className="pointer-events-none absolute right-6 top-24 z-10 font-display text-[120px] font-semibold leading-none text-white/20 md:right-12 md:text-[180px]"
        aria-hidden
      >
        0{index + 1}
      </motion.span>

      {/* Caption */}
      <div
        className={`absolute z-10 flex max-w-md flex-col gap-4 ${
          alignLeft
            ? 'bottom-[14%] left-6 md:left-12'
            : 'bottom-[14%] right-6 md:right-12 text-right items-end'
        }`}
      >
        <motion.div
          style={{ y: captionY, opacity: captionOpacity }}
          className={`flex items-center gap-3 ${alignLeft ? '' : 'flex-row-reverse'}`}
        >
          <span className="h-px w-8 bg-white/70" />
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80">
            Chapter {index + 1}
          </span>
        </motion.div>
        <motion.h3
          style={{ opacity: captionOpacity }}
          className="text-balance text-[28px] font-semibold leading-tight text-white sm:text-[34px] md:text-[40px]"
        >
          {caption}
        </motion.h3>
        <motion.p
          style={{ opacity: captionOpacity }}
          className="max-w-sm text-[14px] leading-relaxed text-white/75 md:text-[15px]"
        >
          {sub}
        </motion.p>
      </div>
    </div>
  );
}

export default function ImageStory() {
  return (
    <section id="story" className="relative bg-ink-50">
      {/* Section intro */}
      {/* <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, ease }}
          className="max-w-2xl"
        >
          <span className="text-[12px] font-medium uppercase tracking-[0.28em] text-accent-600">
            The Work, In Three Movements
          </span>
          <h2 className="mt-6 text-balance text-[32px] leading-[1.12] text-ink-900 sm:text-[40px] md:text-[48px]">
            Every solution begins by understanding the people it is built for.
          </h2>
        </motion.div>
      </div> */}

      {/* Pinned, snapping story panels */}
      {/* <div className="flex snap-y snap-mandatory flex-col">
        {storyImages.map((img, i) => (
          <StoryPanel
            key={i}
            index={i}
            src={img.src}
            caption={img.caption}
            sub={img.sub}
          />
        ))}
      </div> */}

      {/* Closing breath before About */}
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, ease }}
          className="max-w-2xl text-[18px] leading-relaxed text-ink-600 md:text-[20px]"
        >
          From listening to building to lasting impact — this is the rhythm of
          RuTAG's work in the field.
        </motion.p>
      </div>
    </section>
  );
}
