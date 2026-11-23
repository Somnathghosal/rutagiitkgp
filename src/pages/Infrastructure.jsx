import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import PageHeader from "../components/PageHeader";

import DisplayUnitImage1 from "../assests/infra/Display_Unit/DisplayUnit_1.png";
import DisplayUnitImage2 from "../assests/infra/Display_Unit/DisplayUnit_2.png";

import OperationUnitImage1 from "../assests/infra/Operation_Unit/OperationUnit_1.png";
import OperationUnitImage2 from "../assests/infra/Operation_Unit/OperationUnit_2.png";

import CentralOfficeImage1 from "../assests/infra/Office/Office_1.png";
import CentralOfficeImage2 from "../assests/infra/Office/Office_2.png";

import TrainingCentreImage1 from "../assests/infra/Training/Training_1.png";
import TrainingCentreImage2 from "../assests/infra/Training/Training_2.png";

import WorkshopImage1 from "../assests/infra/Workshop/Workshop_1.png";
import WorkshopImage2 from "../assests/infra/Workshop/Workshop_2.png";

const ease = [0.22, 1, 0.36, 1];

// Temporary placeholder images.
// Replace these URLs with your actual RuTAG images later.
const infraSections = [
  {
    id: "display-unit",
    tag: "Display Unit",
    title: "RuTAG Display Unit",
    desc: "A space showcasing rural technologies and their practical applications, bringing visitors closer to innovations designed to improve livelihoods and support rural communities.",
    images: [
      DisplayUnitImage1,
      DisplayUnitImage2,
    ],
  },
  {
    id: "operation-unit",
    tag: "Operations",
    title: "RuTAG Operating Unit",
    desc: "The operational centre supporting technology development, coordination, and implementation of RuTAG initiatives in collaboration with researchers and field partners.",
    images: [
      OperationUnitImage1,
      OperationUnitImage2,
    ],
  },
  {
    id: "central-office",
    tag: "Organisation",
    title: "RuTAG Office",
    desc: "The administrative hub coordinating research, field operations, partnerships, and student engagement across RuTAG initiatives. It is where ideas are organised, projects are managed, and collaborations are forged.",
    images: [
      CentralOfficeImage1,
      CentralOfficeImage2,
    ],
  },
  {
    id: "training-centre",
    tag: "Training",
    title: "RuTAG Training Centre",
    desc: "A learning environment for hands-on training, demonstrations, and knowledge exchange, helping students, artisans, and community members develop practical skills with rural technologies.",
    images: [
      TrainingCentreImage1,
      TrainingCentreImage2, // Placeholder for a second image; replace with actual training centre image.
    ],
  },
  {
    id: "fabrication-workshop",
    tag: "Workshop",
    title: "RuTAG Workshop",
    desc: "A fabrication and development space where rural technology concepts are transformed into practical machines through prototyping, testing, and iterative improvement.",
    images: [
      WorkshopImage1,
      WorkshopImage2,
    ],
  },
];

function InfraSection({ section, index }) {
  const ref = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  const numberOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.06, 0.06, 0]
  );

  // Automatically transition between the two images.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const reversed = index % 2 === 1;
  const isDark = index % 2 === 1;

  return (
    <section
      ref={ref}
      id={section.id}
      className={`relative overflow-hidden py-16 md:py-20 lg:py-24 ${
        isDark ? "bg-ink-900" : "bg-ink-50"
      }`}
    >
      {isDark && (
        <div
          className="pointer-events-none absolute inset-0 bg-topo opacity-[0.1]"
          aria-hidden
        />
      )}

      {!isDark && (
        <div
          className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]"
          aria-hidden
        />
      )}

      {/* Decorative section number */}
      <motion.span
        style={{ opacity: numberOpacity }}
        className={`pointer-events-none absolute left-4 top-8 select-none font-display text-[140px] font-bold leading-none md:left-10 md:top-12 md:text-[220px] ${
          isDark ? "text-white" : "text-ink-900"
        }`}
        aria-hidden
      >
        0{index + 1}
      </motion.span>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 32 : -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.8, ease }}
            className={`lg:col-span-4 ${
              reversed ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <span
              className={`inline-block rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${
                isDark
                  ? "border-white/20 text-accent-300"
                  : "border-accent-600/20 bg-accent-600/5 text-accent-600"
              }`}
            >
              {section.tag}
            </span>

            <h2
              className={`mt-5 text-balance text-[28px] font-semibold leading-tight sm:text-[34px] md:text-[40px] ${
                isDark ? "text-ink-50" : "text-ink-900"
              }`}
            >
              {section.title}
            </h2>

            <p
              className={`mt-5 text-[15px] leading-relaxed md:text-[16px] ${
                isDark ? "text-ink-300" : "text-ink-600"
              }`}
            >
              {section.desc}
            </p>

            <div
              className={`mt-7 h-px w-20 ${
                isDark ? "bg-accent-300/40" : "bg-accent-600/40"
              }`}
            />
          </motion.div>

          {/* Automatic two-image slider */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className={`lg:col-span-8 ${
              reversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                style={{ y: heroY, scale: heroScale }}
                className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[2/1]"
              >
                <AnimatePresence mode="sync">
                  <motion.img
                    key={activeImage}
                    src={section.images[activeImage]}
                    alt={`${section.title} — image ${activeImage + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </AnimatePresence>
              </motion.div>

              {/* Subtle image overlay */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

              {/* Slide indicators */}
              <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2">
                {section.images.map((_, imageIndex) => (
                  <button
                    key={imageIndex}
                    type="button"
                    aria-label={`Show image ${imageIndex + 1}`}
                    onClick={() => setActiveImage(imageIndex)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      activeImage === imageIndex
                        ? "w-7 bg-white"
                        : "w-2 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Infrastructure"
        title="The facilities behind dependable rural technology."
        subtitle="From technology displays and operational spaces to training and fabrication — every RuTAG facility helps move ideas from concept to community."
      />

      {/* Only the five requested infrastructure sections */}
      <div>
        {infraSections.map((section, index) => (
          <InfraSection
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </div>
    </>
  );
}