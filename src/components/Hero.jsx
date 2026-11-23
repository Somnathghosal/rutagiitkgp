import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
//import { heroImage } from '../images';
import HeroImage from "../assests/Hero_Img_7.jpg";


const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Gentle parallax as the user scrolls away from the hero
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Layered background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}  
        className="absolute inset-0 z-0"
        aria-hidden
      >
        {/* Base image */}
        <img
          src={HeroImage}
          alt="Rural community field work"
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Warm overlay to keep text readable and establish identity */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-ink-40/72 via-ink-40/35 to-ink-40/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-50/60 via-transparent to-ink-40/20" /> */}


        {/* Black vignette overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/60" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />

        {/* <>
 

        







        {/* Slow drifting contour light — barely perceptible */}
        <div className="absolute inset-0 bg-topo opacity-60 animate-contour-pan" />
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 md:px-10"
      >
       <div className="max-w-3xl mt-6 sm:mt-8 lg:mt-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="mb-7 flex items-center gap-3"
          >
            {/* <span className="h-px w-10 bg-accent-600/70" />
            <span className="text-[12px] font-medium uppercase tracking-[0.28em] text-accent-600">
              Rural Technology Action Group
            </span> */}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="text-balance text-[40px] leading-[1.05] sm:text-[56px] md:text-[68px] lg:text-[74px] text-ink-900 font-display font-semibold tracking-tight"
          >
            Technology That Creates
            <br />
            <span className="text-ink-600">Meaningful</span> Rural Impact
          </motion.h1>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.75 }}
            className="mt-8 max-w-xl text-[16px] leading-relaxed text-ink-800 md:text-[17px]"
          >
            RuTAG IIT Kharagpur bridges engineering and rural development — translating
            research into dependable technology that quietly improves everyday life in
            the communities that need it most.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() =>
                document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-7 py-3.5 text-[14px] font-medium text-ink-50 shadow-[0_10px_30px_-12px_rgba(26,26,24,0.4)] transition-all duration-400 ease-smooth hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-[0_16px_36px_-12px_rgba(19,43,67,0.45)]"
            >
              Explore RuTAG
              <ArrowRight
                size={16}
                className="transition-transform duration-400 ease-smooth group-hover:translate-x-1"
              />
            </button>
            {/* <button
              onClick={() =>
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 rounded-full border border-ink-500 bg-white/25 px-7 py-3.5 text-[14px] font-medium text-ink-800 backdrop-blur-sm transition-all duration-400 ease-smooth hover:-translate-y-0.5 hover:border-ink-800 hover:bg-white/70"
            >
              Learn More
            </button> */}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
