import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  FileText,
  Download,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import PageHeader from '../components/PageHeader';
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url
// ).toString();

import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?worker&url';
pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;



// ============================================================
// MACHINE IMAGES
// ============================================================
import AmberCharkha from "../assests/Machine_Images/Amber_Chakra.png";
import Bamboo_Sliver from "../assests/Machine_Images/Bamboo_Sliver.png";
import Bran_Rice from "../assests/Machine_Images/Bran_Rice.png";
import Door_Mat from "../assests/Machine_Images/Door_Mat.png";
import Grain_Puffing from "../assests/Machine_Images/Grain_Puffing.png";
import Groundnut_Shelling from "../assests/Machine_Images/Groundnut Shelling.png";
import Incense_Stick from "../assests/Machine_Images/Incense Stick.png";
import Jute_Rope from "../assests/Machine_Images/Jute Rope.png";
import Mechanized_Dhenki from "../assests/Machine_Images/Mechanized Dhenki.png";
import Mosquito_Coil from "../assests/Machine_Images/Mosquito Coil.png";
import Motorized_Potters from "../assests/Machine_Images/Motorized Potter wheel.png";
import Pedal_Driven_Potters from "../assests/Machine_Images/Pedal Driven Potter wheel.png";
import Rice_Flakes from "../assests/Machine_Images/Rice Flakes.png";
import Rice_Grading from "../assests/Machine_Images/Rice Grading.png";
import Rice_Puffing from "../assests/Machine_Images/Rice puffing.png";
import Sabai_Grass_Rope from "../assests/Machine_Images/Sabai Grass.png";
import Sal_Leaves_Plate from "../assests/Machine_Images/Sal Leaves.png";
import Silk_Reeling from "../assests/Machine_Images/Silk Reeling.png";
import Sisal_Fibre from "../assests/Machine_Images/Sisal Fiber.png";
import Tamarind_Deseeder from "../assests/Machine_Images/Tamarind.png";
import Machine1 from "../assests/Machine_Images/Machine1.png";
import Machine2 from "../assests/Machine_Images/Machine2.png";
import Machine3 from "../assests/Machine_Images/Machine3.png";
import Machine4 from "../assests/Machine_Images/Machine4.png";  
import Machine5 from "../assests/Machine_Images/Machine5.png";
import Machine6 from "../assests/Machine_Images/Machine6.png";


// ============================================================
// MACHINE BROCHURES
// ============================================================

import AmberCharkhaBrochure from "../assests/Machine_Brochures/AMBER_CHARKHA.pdf";
import Bamboo_SilverBrochure from "../assests/Machine_Brochures/BAMBOO_SLIVER.pdf";
import Bran_RiceBrochure from "../assests/Machine_Brochures/BRAN_RICE.pdf";
import Door_MatBrochure from "../assests/Machine_Brochures/DOOR_MAT.pdf";
import Grain_PuffingBrochure from "../assests/Machine_Brochures/GRAIN_PUFFING.pdf";
import Groundnut_ShellingBrochure from "../assests/Machine_Brochures/GROUNDNUT_SHELLING.pdf";
import Incense_StickBrochure from "../assests/Machine_Brochures/INCENSE_STICKS.pdf";
import Jute_RopeBrochure from "../assests/Machine_Brochures/JUTE_ROPE.pdf";
import Mechanized_DhenkiBrochure from "../assests/Machine_Brochures/MECHANIZED_DHENKI.pdf";
import Mosquito_CoilBrochure from "../assests/Machine_Brochures/MOSQUITO_COIL.pdf";
import Motorized_PottersBrochure from "../assests/Machine_Brochures/MOTORIZED_POTTERS_WHEEL.pdf";
import Pedal_Driven_PottersBrochure from "../assests/Machine_Brochures/PEDAL_DRIVEN_POTTERS_WHEEL.pdf";
import Rice_FlakesBrochure from "../assests/Machine_Brochures/RICE_FLAKES.pdf";
import Rice_GradingBrochure from "../assests/Machine_Brochures/RICE_GRADING.pdf";
import Rice_PuffingBrochure from "../assests/Machine_Brochures/RICE_PUFFING.pdf";
import Sabai_Grass_RopeBrochure from "../assests/Machine_Brochures/SABAI_GRASS_ROPE.pdf";
import Sal_Leaves_PlateBrochure from "../assests/Machine_Brochures/SAL_LEAVES_PLATE.pdf";
import Silk_ReelingBrochure from "../assests/Machine_Brochures/SILK_REELING_MACHINE.pdf";
import Sisal_FibreBrochure from "../assests/Machine_Brochures/SISAL_FIBER_EXTRACTOR.pdf";
import Tamarind_DeseederBrochure from "../assests/Machine_Brochures/TAMARIND_DESEEDER.pdf";
import Sesame_PeelingBrochure from "../assests/Machine_Brochures/SESAME_PEELING_MACHINE.pdf";
import Oil_ExtractionBrochure from "../assests/Machine_Brochures/OIL_EXTRACTOR_MACHINE.pdf";
import Spices_GrindingBrochure from "../assests/Machine_Brochures/SPICES_GRINDING_MACHINE.pdf";
import Peas_PeelingBrochure from "../assests/Machine_Brochures/PEAS_PEELING_MACHINE.pdf";







const ease = [0.22, 1, 0.36, 1];


// ============================================================
// MACHINES
// ============================================================

const machines = [
  {
    name: 'AMBER CHARKHA',
    image: AmberCharkha,
    brochure: AmberCharkhaBrochure,
  },
  {
    name: 'BAMBOO SLIVER MAKING MACHINE',
    image: Bamboo_Sliver,
    brochure: Bamboo_SilverBrochure,
  },
  {
    name: 'BRAN RICE MAKING MACHINE',
    image: Bran_Rice,
    brochure: Bran_RiceBrochure,
  },
  {
    name: 'INCENSE STICK MAKING MACHINE',
    image: Incense_Stick,
    brochure: Incense_StickBrochure,
  },
  {
    name: 'DOOR MAT MAKING MACHINE',
    image: Door_Mat,
    brochure: Door_MatBrochure,
  },
  {
    name: 'GRAIN PUFFING CUM ROASTING MACHINE',
    image: Grain_Puffing,
    brochure: Grain_PuffingBrochure,
  },
  {
    name: 'GROUNDNUT SHELLING MACHINE',
    image: Groundnut_Shelling,
    brochure: Groundnut_ShellingBrochure,
  },
  {
    name: 'JUTE ROPE MAKING MACHINE',
    image: Jute_Rope,
    brochure: Jute_RopeBrochure,
  },
  {
    name: 'MECHANIZED DHENKI',
    image: Mechanized_Dhenki,
    brochure: Mechanized_DhenkiBrochure,
  },
  {
    name: 'MOSQUITO COIL MAKING MACHINE',
    image: Mosquito_Coil,
    brochure: Mosquito_CoilBrochure,
  },
  {
    name: 'MOTORIZED POTTERS WHEEL',
    image: Motorized_Potters,
    brochure: Motorized_PottersBrochure,
  },
  {
    name: 'PEDAL DRIVEN POTTERS WHEEL',
    image: Pedal_Driven_Potters,
    brochure: Pedal_Driven_PottersBrochure,
  },
  {
    name: 'RICE FLAKES MAKING MACHINE',
    image: Rice_Flakes,
    brochure: Rice_FlakesBrochure,
  },
  {
    name: 'RICE GRADING MACHINE',
    image: Rice_Grading,
    brochure: Rice_GradingBrochure,
  },
  {
    name: 'RICE PUFFING MACHINE',
    image: Rice_Puffing,
    brochure: Rice_PuffingBrochure,
  },
  {
    name: 'SABAI GRASS ROPE MAKING MACHINE',
    image: Sabai_Grass_Rope,
    brochure: Sabai_Grass_RopeBrochure,
  },
  {
    name: 'SAL LEAVES PLATE MAKING MACHINE',
    image: Sal_Leaves_Plate,
    brochure: Sal_Leaves_PlateBrochure,
  },
  {
    name: 'SILK REELING MACHINE',
    image: Silk_Reeling,
    brochure: Silk_ReelingBrochure,
  },
  {
    name: 'SISAL FIBRE EXTRACTOR',
    image: Sisal_Fibre,
    brochure: Sisal_FibreBrochure,
  },
  {
    name: 'TAMARIND DESEEDER',
    image: Tamarind_Deseeder,
    brochure: Tamarind_DeseederBrochure,
  },
  {
    name: 'SESAME PEELING MACHINE',
    image: Machine1,
    brochure: Sesame_PeelingBrochure,
  },
  {
    name: 'OIL EXTRACTION MACHINE',
    image: Machine2,
    brochure: Oil_ExtractionBrochure,    
  },
  {
    name: 'SPICES GRINDING MACHINE',
    image: Machine3,
    brochure: Spices_GrindingBrochure,    
  },
  {
    name: 'PEAS PEALING MACHINE',
    image: Machine4,
    brochure: Peas_PeelingBrochure,    
  },
  {
    name: 'SABAI GRASS ROPE POLISHER',
    image: Machine5,
    // brochure: Tamarind_DeseederBrochure,    
  },
  {
    name: 'MOTORIZED SUTLI MAKING MACHINE',
    image: Machine6,
    // brochure: Tamarind_DeseederBrochure,    
  },
];


// ============================================================
// BROCHURE MODAL
// ============================================================




function BrochureModal({ machine, onClose }) {
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(2);

  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const [pageRatio, setPageRatio] = useState(1.414);

  const pdfContainerRef = useRef(null);

  const totalPages = numPages || 2;

  const nextPage = useCallback(() => {
    setPageNum((p) => Math.min(p + 1, totalPages));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPageNum((p) => Math.max(p - 1, 1));
  }, []);

  // ----------------------------------------------------------
  // OPEN / CLOSE + KEYBOARD
  // ----------------------------------------------------------
  useEffect(() => {
    if (!machine) return;

    // Always start from Page 1
    setPageNum(1);
    setNumPages(2);

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };

    window.addEventListener('keydown', onKey);

    // Prevent background page scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [machine, onClose, nextPage, prevPage]);


  // ----------------------------------------------------------
  // RESPONSIVE PDF CONTAINER SIZE
  // ----------------------------------------------------------
  useEffect(() => {
    if (!machine || !pdfContainerRef.current) return;

    const container = pdfContainerRef.current;

    const updateSize = () => {
      setContainerSize({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [machine]);


  // ----------------------------------------------------------
  // CALCULATE PDF WIDTH
  //
  // This makes the ENTIRE landscape page fit inside
  // the available viewer area.
  // ----------------------------------------------------------
  const horizontalPadding = 32;
  const verticalPadding = 32;

  const availableWidth =
    Math.max(containerSize.width - horizontalPadding, 0);

  const availableHeight =
    Math.max(containerSize.height - verticalPadding, 0);

  // Width allowed by the available height
  const widthFromHeight = availableHeight * pageRatio;

  // Choose whichever limitation is smaller
  const pdfWidth = Math.min(
    availableWidth,
    widthFromHeight
  );


  return (
    <AnimatePresence>
      {machine && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-8"
          onClick={onClose}
        >

          {/* Vignette backdrop */}
          <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" />

          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)',
            }}
          />


          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <div className="flex items-center justify-between border-b border-ink-200 px-4 py-3 sm:px-5 sm:py-4 md:px-7">

              <div className="flex min-w-0 items-center gap-3">

                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-600/10 text-accent-600">
                  <FileText size={18} strokeWidth={1.5} />
                </span>

                <div className="min-w-0">

                  <h3 className="truncate text-[15px] font-semibold text-ink-900">
                    {machine.name} — Brochure
                  </h3>

                  <p className="text-[12px] text-ink-500">
                    Page {pageNum} of {totalPages}
                  </p>

                </div>

              </div>


              <div className="flex shrink-0 items-center gap-2">

                {/* Download */}
                <a
                  href={machine.brochure}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-3.5 py-2 text-[12.5px] font-medium text-ink-700 transition-colors duration-300 hover:bg-ink-200"
                >
                  <Download size={14} />

                  <span className="hidden sm:inline">
                    Download
                  </span>
                </a>


                {/* Close */}
                <button
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-100 text-ink-600 transition-colors duration-300 hover:bg-ink-200"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

              </div>

            </div>


            {/* ================================================= */}
            {/* PDF VIEWER AREA */}
            {/* ================================================= */}

            <div
              ref={pdfContainerRef}
              className="relative flex h-[calc(100vh-140px)] max-h-[780px] min-h-[400px] items-center justify-center overflow-hidden bg-ink-100"
              onWheel={(e) => e.preventDefault()}
              onTouchMove={(e) => e.preventDefault()}
            >

              {/* PDF */}
              <motion.div
                key={`${machine.brochure}-${pageNum}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease }}
                className="flex items-center justify-center overflow-hidden"
              >

                <Document
                  file={machine.brochure}

                  onLoadSuccess={({ numPages }) => {
                    setNumPages(numPages);
                  }}

                  loading={
                    <div className="flex h-40 items-center justify-center text-sm text-ink-500">
                      Loading brochure...
                    </div>
                  }

                  error={
                    <div className="flex h-40 items-center justify-center text-sm text-red-500">
                      Unable to load brochure.
                    </div>
                  }
                >

                  {pdfWidth > 0 && (
                    <Page
                      pageNumber={pageNum}
                      width={pdfWidth}

                      onLoadSuccess={(page) => {
                        /*
                          React-PDF gives us the actual PDF page
                          dimensions.

                          view = [x, y, width, height]
                        */

                        const [, , width, height] = page.view;

                        if (width && height) {
                          setPageRatio(width / height);
                        }
                      }}

                      renderTextLayer={false}
                      renderAnnotationLayer={false}

                      className="overflow-hidden rounded-lg bg-white shadow-[0_8px_40px_-8px_rgba(0,0,0,0.25)]"
                    />
                  )}

                </Document>

              </motion.div>


              {/* ================================================= */}
              {/* PREVIOUS */}
              {/* ================================================= */}

              <button
                onClick={prevPage}
                disabled={pageNum === 1}
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-lg transition-all duration-300 hover:bg-white disabled:opacity-30 md:left-5"
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>


              {/* ================================================= */}
              {/* NEXT */}
              {/* ================================================= */}

              <button
                onClick={nextPage}
                disabled={pageNum === totalPages}
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-lg transition-all duration-300 hover:bg-white disabled:opacity-30 md:right-5"
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>

            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}



// ============================================================
// PRODUCTS PAGE
// ============================================================

export default function ProductsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Machines built for rural resilience"
        subtitle="A catalogue of machines and technologies developed at RuTAG — each one engineered for durability, affordability, and local maintainability. Click any machine to view its brochure."
      />


      {/* Machine grid */}
      <section className="relative bg-white py-20 md:py-28">

        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-20"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-4">

            {machines.map((machine, i) => (

              <motion.button
                key={machine.name}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  margin: '-8% 0px',
                }}

                transition={{
                  duration: 0.6,
                  ease,
                  delay: (i % 4) * 0.08,
                }}

                whileHover={{
                  y: -6,
                }}

                onClick={() => setSelected(machine)}

                className="group flex flex-col items-center text-center"
              >

                {/* Image */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-white">

                  <div className="relative aspect-square w-full">

                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="h-full w-full object-contain transition-transform duration-700 ease-smooth group-hover:scale-110"
                      loading="lazy"
                    />

                  </div>


                  {/* Subtle hover ring */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-ink-900/5 transition-all duration-500 group-hover:ring-accent-600/15 group-hover:shadow-[0_20px_50px_-20px_rgba(26,26,24,0.2)]" />

                </div>


                {/* Name */}
                <h3 className="mt-4 text-[14px] font-semibold leading-tight text-ink-800 transition-colors duration-300 group-hover:text-blue-600 sm:text-[15px]">
                  {machine.name}
                </h3>

              </motion.button>

            ))}

          </div>

        </div>

      </section>


      {/* Brochure modal */}
      <BrochureModal
        machine={selected}
        onClose={() => setSelected(null)}
      />

    </>
  );
}