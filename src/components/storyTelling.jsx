import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";

import storyImage1 from "../assests/Hero_Img_2.jpg";
import storyImage2 from "../assests/Hero_Img_3.jpg";
import storyImage3 from "../assests/Hero_Img_5.jpg";


const ease = [0.22, 1, 0.36, 1];
gsap.registerPlugin(ScrollTrigger);



const storyMoments = [
  {
    id: 1,
    title: 'Listening Before Innovating',
    subtitle: 'Direct engagement with rural artisans, farmers, and self-help groups to identify ground-reality technical challenges.',
    image: storyImage1,
    tag: 'FIELD RESEARCH',
    code: '01 / 03',
  },
  {
    id: 2,
    title: 'Engineering for Communities',
    subtitle: 'Transforming laboratory innovations into robust, ergonomic, and cost-effective machinery built for harsh village conditions.',
    image: storyImage2,
    tag: 'PROTOTYPING & TESTING',
    code: '02 / 03',
  },
  {
    id: 3,
    title: 'Innovation Creating Impact',
    subtitle: 'Empowering local livelihoods through technology transfer, skill workshops, and sustained institutional support.',
    image: storyImage3,
    tag: 'DEPLOYMENT & SUSTAINABILITY',
    code: '03 / 03',
  },
];

export default function StorytellingSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = slideRefs.current;
      if (!slides || slides.length === 0) return;

      // Set initial GSAP positions cleanly without relying on inline CSS
      gsap.set(slides[0], { yPercent: 0, opacity: 1, zIndex: 10 });
      gsap.set(slides[1], { yPercent: 100, opacity: 1, zIndex: 20 });
      gsap.set(slides[2], { yPercent: 100, opacity: 1, zIndex: 30 });

      // Create pinning timeline for the 3 slides
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: `+=${storyMoments.length * 100}%`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Map scroll progress (0 to 1) cleanly to active slide index (0, 1, 2)
            const p = self.progress;
            if (p < 0.33) {
              setActiveIndex(0);
            } else if (p < 0.66) {
              setActiveIndex(1);
            } else {
              setActiveIndex(2);
            }
          },
        },
      });

      // Slide 1 -> Slide 2 transition
      tl.to(slides[1], {
        yPercent: 0,
        ease: 'none',
        duration: 1,
      });

      // Slide 2 -> Slide 3 transition
      tl.to(slides[2], {
        yPercent: 0,
        ease: 'none',
        duration: 1,
      });
    }, sectionRef);


    // Smooth Parallax Effect for Text Box
    textRefs.current.forEach((text, idx) => {
      if (!text) return;
    
      gsap.fromTo(
        text,
        {
          y: 0,
        },
        {
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${storyMoments.length * 100}%`,
            scrub: 1,
          },
        }
      );
    });





    return () => ctx.revert();
  }, []);

  // Manual Tab / Arrow Click Handler
  const goToSlide = (targetIdx) => {
    setActiveIndex(targetIdx);
    const slides = slideRefs.current;
    if (!slides) return;

    slides.forEach((slide, i) => {
      if (i < targetIdx) {
        gsap.to(slide, { yPercent: 0, duration: 0.6, ease: 'power2.out' });
      } else if (i === targetIdx) {
        gsap.to(slide, { yPercent: 0, duration: 0.6, ease: 'power2.out' });
      } else {
        gsap.to(slide, { yPercent: 100, duration: 0.6, ease: 'power2.out' });
      }
    });
  };

  return (
    <section id="storytelling" ref={sectionRef} className="relative bg-slate-950 text-white">
      {/* Viewport Pinned Frame */}
      <div
        ref={triggerRef}
        className="h-screen w-full relative overflow-hidden bg-slate-950 flex flex-col justify-between"
      >
        {/* Top Floating Control Bar (Story Tabs) */}
        <div className="absolute top-6 left-0 right-0 z-50 max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-xs font-semibold text-slate-300">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>RuTAG Field Documentary</span>
          </div> */}

          {/* Interactive Navigation Tabs */}
          {/* <div className="hidden sm:flex items-center gap-2 p-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800">
            {storyMoments.map((moment, idx) => (
              <button
                key={moment.id}
                onClick={() => goToSlide(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'bg-white text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                0{idx + 1}. {moment.tag}
              </button>
            ))}
          </div> */}

          {/* Arrow Buttons for Quick Manual Flip */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToSlide(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous Story"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                activeIndex === 0
                  ? 'opacity-30 border-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-slate-900/80 border-slate-700 text-white hover:bg-white hover:text-slate-950'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => goToSlide(Math.min(storyMoments.length - 1, activeIndex + 1))}
              disabled={activeIndex === storyMoments.length - 1}
              aria-label="Next Story"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                activeIndex === storyMoments.length - 1
                  ? 'opacity-30 border-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-slate-900/80 border-slate-700 text-white hover:bg-white hover:text-slate-950'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Story Slide Layers */}
        {storyMoments.map((moment, idx) => (
          <div
            key={moment.id}
            ref={(el) => (slideRefs.current[idx] = el)}
            className="absolute inset-0 w-full h-full flex flex-col justify-end p-8 sm:p-14 lg:p-20 bg-slate-950 will-change-transform"
          >
            {/* Background Image Container with Crisp Vignette */}
            <div className="absolute inset-0 z-0">
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30" />
            </div>

            {/* Slide Text Content Container */}
            {/* Slide Text Content Container */}
            <div
              ref={(el) => (textRefs.current[idx] = el)}
              className="relative z-10 max-w-4xl mx-auto w-full space-y-4"
            >
            
                {/* Small Code */}
                <motion.div
                    key={`${moment.id}-code-${activeIndex}`}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{
                        opacity: activeIndex === idx ? 1 : 0,
                        y: activeIndex === idx ? 0 : 25,
                    }}
                    transition={{
                        duration: 0.7,
                        ease,
                    }}
                    className="flex items-center gap-3"
                >
                    <span className="h-px w-8 bg-white/70" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80">
                        {moment.code}
                    </span>
                </motion.div>
            
                {/* Title */}
                <motion.h2
                    key={`${moment.id}-title-${activeIndex}`}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{
                        opacity: activeIndex === idx ? 1 : 0,
                        y: activeIndex === idx ? 0 : 35,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.1,
                        ease,
                    }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md"
                >
                    {moment.title}
                </motion.h2>
            
                {/* Subtitle */}
                <motion.p
                    key={`${moment.id}-subtitle-${activeIndex}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                        opacity: activeIndex === idx ? 1 : 0,
                        y: activeIndex === idx ? 0 : 40,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.2,
                        ease,
                    }}
                    className="text-base sm:text-lg text-slate-200 max-w-2xl font-light leading-relaxed drop-shadow-xs"
                >
                    {moment.subtitle}
                </motion.p>
            
                {/* Progress Indicator */}
                <motion.div
                    key={`${moment.id}-indicator-${activeIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: activeIndex === idx ? 1 : 0,
                        y: activeIndex === idx ? 0 : 20,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease,
                    }}
                    className="flex items-center gap-3 pt-4"
                >
                    {storyMoments.map((m, dotIdx) => (
                        <button
                            key={m.id}
                            onClick={() => goToSlide(dotIdx)}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                dotIdx === activeIndex
                                    ? "w-14 bg-white shadow-md"
                                    : "w-4 bg-white/30 hover:bg-white/60"
                            }`}
                        />
                    ))}
                </motion.div>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
