import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';

import galleryImg1 from "../assests/Gallery/Img1.png";
import galleryImg2 from "../assests/Gallery/Img2.jpeg";
import galleryImg3 from "../assests/Gallery/Img3.png";
import galleryImg4 from "../assests/Gallery/Img4.jpeg";
import galleryImg5 from "../assests/Gallery/Img5.jpeg";
import galleryImg6 from "../assests/Gallery/Img6.jpeg";
import galleryImg7 from "../assests/Gallery/Img7.jpeg";
import galleryImg8 from "../assests/Gallery/Img8.jpeg";
import galleryImg9 from "../assests/Gallery/Img9.jpeg";
import galleryImg10 from "../assests/Gallery/Img10.jpeg";
import galleryImg11 from "../assests/Gallery/Img11.jpeg";
import galleryImg12 from "../assests/Gallery/Img12.jpeg";
import galleryImg13 from "../assests/Gallery/Img13.jpeg";
import galleryImg14 from "../assests/Gallery/Img14.jpeg";
import galleryImg15 from "../assests/Gallery/Img15.jpeg";
import galleryImg16 from "../assests/Gallery/Img16.jpeg";
// import galleryImg17 from "../assests/Gallery/Img17.jpg";
// import galleryImg18 from "../assests/Gallery/Img18.jpg";
// import galleryImg19 from "../assests/Gallery/Img19.jpg";
// import galleryImg20 from "../assests/Gallery/Img20.jpg";
// import galleryImg21 from "../assests/Gallery/Img21.jpg";
// import galleryImg22 from "../assests/Gallery/Img22.jpg";
// import galleryImg23 from "../assests/Gallery/Img23.jpg";
// import galleryImg24 from "../assests/Gallery/Img24.jpg";
// import galleryImg25 from "../assests/Gallery/Img25.jpg";
// import galleryImg26 from "../assests/Gallery/Img26.jpg";
// import galleryImg27 from "../assests/Gallery/Img27.jpg";
// import galleryImg28 from "../assests/Gallery/Img28.jpg";
// import galleryImg29 from "../assests/Gallery/Img29.jpg";
import galleryImg30 from "../assests/Gallery/Img30.jpeg";
import galleryImg31 from "../assests/Gallery/Img31.jpeg";
import galleryImg32 from "../assests/Gallery/Img32.jpeg";
import galleryImg33 from "../assests/Gallery/Img33.jpeg";
import galleryImg34 from "../assests/Gallery/Img34.jpeg";
import galleryImg35 from "../assests/Gallery/Img35.jpeg";
import galleryImg36 from "../assests/Gallery/Img36.jpeg";
import galleryImg37 from "../assests/Gallery/Img37.jpeg";
import galleryImg38 from "../assests/Gallery/Img38.jpeg";
import galleryImg39 from "../assests/Gallery/Img39.jpeg";
import galleryImg40 from "../assests/Gallery/Img40.jpeg";
import galleryImg41 from "../assests/Gallery/Img41.jpeg";
import galleryImg42 from "../assests/Gallery/Img42.jpeg";
import galleryImg43 from "../assests/Gallery/Img43.jpeg";
import galleryImg44 from "../assests/Gallery/Img44.jpeg";
import galleryImg45 from "../assests/Gallery/Img45.jpeg";
import galleryImg46 from "../assests/Gallery/Img46.jpeg";
import galleryImg47 from "../assests/Gallery/Img47.jpeg";

const ease = [0.22, 1, 0.36, 1];


// ============================================================
// GALLERY IMAGES
// ============================================================

const gallery = [
  { src: galleryImg1, alt: 'MLA visiting Sisal fiber extractor Machine' },
  { src: galleryImg2, alt: 'RuTAG Technologies Exhibition' },
  { src: galleryImg3, alt: 'Interactive Session' },
  { src: galleryImg4, alt: 'Demonstration of Sabai rope' },
  { src: galleryImg5, alt: 'Prof. K. L. Chopra, Former Director' },
  { src: galleryImg6, alt: 'Training on Sal leaf plate moulding' },
  { src: galleryImg7, alt: 'DRCSC Purulia' },
  { src: galleryImg8, alt: 'Dhoop Stick Machine' },
  { src: galleryImg9, alt: 'Unnat Bharat Abhiyan Activities' },
  { src: galleryImg10, alt: 'Unnat Bharat Abhiyan Activities' },
  { src: galleryImg11, alt: 'Unnat Bharat Abhiyan Activities' },
  { src: galleryImg12, alt: 'Unnat Bharat Abhiyan Activities' },
  { src: galleryImg13, alt: 'Unnat Bharat Abhiyan Activities' },

  {
    src: galleryImg14,
    alt: 'Awareness Building Workshop on Health & Hygiene',
  },

  {
    src: galleryImg15,
    alt: 'Awareness Building Workshop on Health & Hygiene',
  },

  {
    src: galleryImg16,
    alt: 'Awareness Building Workshop on Health & Hygiene',
  },

  // { src: galleryImg17, alt: 'Drinking Water Facility' },
  // { src: galleryImg18, alt: 'Drinking Water Facility' },
  // { src: galleryImg19, alt: 'Drinking Water Facility' },
  // { src: galleryImg20, alt: 'Drinking Water Facility' },

  // { src: galleryImg21, alt: 'Girl Students Rest Room Facility' },
  // { src: galleryImg22, alt: 'Girl Students Rest Room Facility' },

  // { src: galleryImg23, alt: 'Silt-Based Agriculture' },
  // { src: galleryImg24, alt: 'Silt-Based Agriculture' },
  // { src: galleryImg25, alt: 'Silt-Based Agriculture' },
  // { src: galleryImg26, alt: 'Silt-Based Agriculture' },

  // {
  //   src: galleryImg27,
  //   alt: 'Community-Level Biodiversity Knowledge',
  // },

  // {
  //   src: galleryImg28,
  //   alt: 'Community-Level Biodiversity Knowledge',
  // },

  // {
  //   src: galleryImg29,
  //   alt: 'Community-Level Biodiversity Knowledge',
  // },

  {
    src: galleryImg30,
    alt: 'Amber Charkha operating by actual users',
  },

  {
    src: galleryImg31,
    alt: 'Sabai Grass Rope Making Machine',
  },

  {
    src: galleryImg32,
    alt: 'Operation of Grain Puffing cum Roasting Machine',
  },

  {
    src: galleryImg33,
    alt: 'Field Trial',
  },

  {
    src: galleryImg34,
    alt: 'Field trial of Slivering Machine',
  },

  {
    src: galleryImg35,
    alt: 'Sal leaves plate making machine',
  },

  {
    src: galleryImg36,
    alt: 'Agitator for Mechanized Dhenki',
  },

  {
    src: galleryImg37,
    alt: 'Trials on Dhoop sticks making',
  },

  {
    src: galleryImg38,
    alt: 'Notables visiting Jute Rope machine',
  },

  {
    src: galleryImg39,
    alt: 'Demonstration of Pottery Wheel, MHRD',
  },

  {
    src: galleryImg40,
    alt: 'Hands-on training cylindrical Puffed Rice (Muri) Machine',
  },

  {
    src: galleryImg41,
    alt: 'Mrs. Dr. Sudha Murthy, Infosys',
  },

  {
    src: galleryImg42,
    alt: 'Erin L. Moran, Exe. Director, Nebraska, USA',
  },

  {
    src: galleryImg43,
    alt: 'Modern pottery workshop',
  },

  {
    src: galleryImg44,
    alt: 'Training on Bamboo Craft at Dantan',
  },

  {
    src: galleryImg45,
    alt: 'Training on Bamboo Craft at Dantan',
  },

  {
    src: galleryImg46,
    alt: 'Training of Sisal fiber extraction',
  },

  {
    src: galleryImg47,
    alt: 'Products from finished fiber',
  },
];


// ============================================================
// GALLERY PAGE
// ============================================================

export default function GalleryPage() {

  const [selectedImage, setSelectedImage] = useState(null);


  // ============================================================
  // ESCAPE KEY + BACKGROUND SCROLL LOCK
  // ============================================================

  useEffect(() => {

    if (!selectedImage) return;

    const handleKeyDown = (event) => {

      if (event.key === 'Escape') {
        setSelectedImage(null);
      }

    };


    const preventScroll = (event) => {
      event.preventDefault();
    };


    // Lock page scrolling while modal is open
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';


    window.addEventListener('keydown', handleKeyDown);

    window.addEventListener('wheel', preventScroll, {
      passive: false,
      capture: true,
    });

    window.addEventListener('touchmove', preventScroll, {
      passive: false,
      capture: true,
    });


    return () => {

      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      window.removeEventListener('keydown', handleKeyDown);

      window.removeEventListener('wheel', preventScroll, {
        capture: true,
      });

      window.removeEventListener('touchmove', preventScroll, {
        capture: true,
      });

    };

  }, [selectedImage]);


  return (
    <>
      {/* ======================================================
          PAGE HEADER
      ====================================================== */}

      <PageHeader
        eyebrow="Gallery"
        title="Moments from the field, the lab, and everywhere in between."
        subtitle="A visual record of the people, places, and processes behind RuTAG's work in rural technology."
      />


      {/* ======================================================
          GALLERY SECTION
      ====================================================== */}

      <section className="relative bg-ink-50 py-20 md:py-28">

        {/* Background texture */}

        <div
          className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]"
          aria-hidden
        />


        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">

          {/* ==================================================
              DYNAMIC MASONRY GALLERY
          ================================================== */}

          <div
            className="
              columns-1
              gap-4
              sm:columns-2
              md:columns-3
              md:gap-5
              lg:columns-4
            "
          >

            {gallery.map((item, i) => (

              <motion.figure
                key={i}

                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                viewport={{
                  once: true,
                  margin: '-6% 0px',
                }}

                transition={{
                  duration: 0.7,
                  ease,
                  delay: 0.05 * i,
                }}

                onClick={() => setSelectedImage(item)}

                className="
                  group
                  relative
                  mb-4
                  cursor-pointer
                  break-inside-avoid
                  overflow-hidden
                  rounded-xl
                  md:mb-5
                "
              >

                {/* ==================================================
                    IMAGE
                ================================================== */}

                <img
                  src={item.src}
                  alt={item.alt}
                  className="
                    block
                    h-auto
                    w-full
                    transition-transform
                    duration-[1400ms]
                    ease-smooth
                    group-hover:scale-105
                  "
                  loading="lazy"
                />


                {/* ==================================================
                    HOVER OVERLAY
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-ink-950/0
                    transition-colors
                    duration-500
                    ease-smooth
                    group-hover:bg-ink-950/20
                  "
                />


                {/* ==================================================
                    IMAGE BORDER
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    ring-1
                    ring-inset
                    ring-ink-900/10
                  "
                />


                {/* ==================================================
                    IMAGE TITLE
                ================================================== */}

                <span
                  className="
                    absolute
                    bottom-4
                    left-4
                    translate-y-2
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-white
                    opacity-0
                    transition-all
                    duration-400
                    ease-smooth
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {item.alt}
                </span>


                {/* ==================================================
                    EXPAND ICON
                ================================================== */}

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-9
                    w-9
                    scale-90
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-ink-950/20
                    text-white
                    opacity-0
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    ease-smooth
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                  aria-hidden="true"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-4 w-4"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                    />

                  </svg>

                </div>

              </motion.figure>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          IMAGE MODAL
      ====================================================== */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              flex
              cursor-pointer
              items-center
              justify-center
              bg-ink-950/90
              px-4
              py-6
              backdrop-blur-md
              sm:px-8
              md:py-10
            "

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.35,
              ease,
            }}

            /*
             * Clicking anywhere on the dark background
             * closes the modal.
             */
            onClick={() => setSelectedImage(null)}

            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
          >

            {/* ==================================================
                MODAL CONTENT
            ================================================== */}

            <motion.div
              className="
                relative
                flex
                w-full
                max-w-[1400px]
                cursor-default
                flex-col
                items-center
              "

              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.96,
                y: 12,
              }}

              transition={{
                duration: 0.55,
                ease,
              }}

              /*
               * Prevent clicks inside the image/title area
               * from closing the modal.
               */
              onClick={(event) => event.stopPropagation()}
            >

              {/* ==================================================
                  CLOSE BUTTON
              ================================================== */}

              <motion.button
                type="button"

                onClick={() => setSelectedImage(null)}

                className="
                  absolute
                  right-0
                  top-0
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-white/40
                  hover:bg-white/20
                "

                whileHover={{
                  scale: 1.08,
                  rotate: 90,
                }}

                whileTap={{
                  scale: 0.94,
                }}

                aria-label="Close image"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  />

                </svg>

              </motion.button>


              {/* ==================================================
                  LARGE IMAGE
              ================================================== */}

              <div
                className="
                  flex
                  max-h-[78vh]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  sm:max-h-[80vh]
                  md:max-h-[82vh]
                "
              >

                <motion.img
                  key={selectedImage.src}

                  src={selectedImage.src}

                  alt={selectedImage.alt}

                  className="
                    max-h-[78vh]
                    max-w-full
                    rounded-xl
                    object-contain
                    shadow-2xl
                    sm:max-h-[80vh]
                    md:max-h-[82vh]
                  "

                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}

                  transition={{
                    duration: 0.5,
                    ease,
                  }}
                />

              </div>


              {/* ==================================================
                  IMAGE TITLE
              ================================================== */}

              <motion.div
                className="
                  mt-5
                  max-w-3xl
                  px-10
                  text-center
                  sm:mt-6
                "

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.45,
                  delay: 0.12,
                  ease,
                }}
              >

                <p
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                    sm:text-[12px]
                  "
                >
                  RuTAG Gallery
                </p>


                <h2
                  className="
                    mt-2
                    text-sm
                    font-medium
                    leading-relaxed
                    text-white
                    sm:text-base
                    md:text-lg
                  "
                >
                  {selectedImage.alt}
                </h2>

              </motion.div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}