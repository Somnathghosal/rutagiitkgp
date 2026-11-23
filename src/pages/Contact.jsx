
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";

// import logo from "../assests/RuTAG_Logo_3.png";
import Logo2 from "../assests/RuTAG_Logo 2.png";

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  const handleEmail = () => {
    window.location.href = "mailto:drsomnathghosal@gmail.com";
  };

  return (
    <main id="contact" className="bg-ink-50">
      {/* =========================================================
          CONTACT HERO
      ========================================================== */}
      <section className="relative overflow-hidden">
        {/* Topographic background */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[url('/topography.svg')] bg-cover bg-center" />
        </div>

        {/* Soft background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent-100/30 blur-[120px]" />

        <div className="relative mx-auto max-w-[1450px] px-6 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-28 lg:pt-36">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
            >
              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-ink-900" />

                <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-ink-700">
                  Contact
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-[650px] font-serif text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink-950 sm:text-6xl lg:text-[72px]">
                Let's build
                <br />
                something that lasts.
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-[600px] text-base leading-7 text-ink-600 sm:text-lg sm:leading-8">
                Whether you represent a community, a partner organization, or
                simply want to learn more about the work — we'd like to hear
                from you.
              </p>

              {/* Contact information */}
              <div className="mt-12 space-y-8">
                {/* Location */}
                <div>
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-ink-400">
                    Location
                  </p>

                  <div className="flex items-start gap-3">
                    <MapPin
                      size={17}
                      strokeWidth={1.6}
                      className="mt-1 shrink-0 text-ink-500"
                    />

                    <p className="text-[15px] leading-6 text-ink-700">
                      Centre for Rural Development and Technology, IIT Kharagpur
                      <br />
                      West Bengal, India - 721302
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-ink-400">
                    Email
                  </p>

                  <a
                    href="mailto:drsomnathghosal@gmail.com"
                    className="group inline-flex items-center gap-3 text-[15px] text-ink-700 transition-colors duration-300 hover:text-ink-950"
                  >
                    <Mail
                      size={17}
                      strokeWidth={1.6}
                      className="text-ink-500"
                    />

                    <span className="border-b border-transparent transition-all duration-300 group-hover:border-ink-900">
                      drsomnathghosal@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                EMAIL CARD
            ====================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="lg:justify-self-end"
            >
              <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white/80 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:p-9 lg:w-[560px] lg:p-10">
                {/* Decorative line */}
                <div className="absolute left-0 top-0 h-1 w-full bg-ink-900" />

                {/* Icon */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-ink-200 bg-ink-50">
                  <Mail size={21} strokeWidth={1.5} className="text-ink-800" />
                </div>

                {/* Heading */}
                <h2 className="font-serif text-3xl font-medium tracking-[-0.025em] text-ink-950 sm:text-4xl">
                  Let's connect.
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-[450px] text-[15px] leading-7 text-ink-600">
                  Have a question about RuTAG technologies, collaborations,
                  field activities, training, or our work? Reach out to us
                  directly by email.
                </p>

                {/* Email address */}
                <div className="mt-8 border-y border-ink-200 py-5">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-ink-400">
                    Write to us
                  </p>

                  <a
                    href="mailto:drsomnathghosal@gmail.com"
                    className="group inline-flex max-w-full items-center gap-3 break-all text-base font-medium text-ink-900 sm:text-lg"
                  >
                    <span className="border-b border-transparent transition-all duration-300 group-hover:border-ink-900">
                      drsomnathghosal@gmail.com
                    </span>

                    <ArrowRight
                      size={18}
                      strokeWidth={1.7}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                {/* Email button */}
                <button
                  type="button"
                  onClick={handleEmail}
                  className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-ink-950 px-6 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-ink-800"
                >
                  <span>Email RuTAG</span>

                  <ArrowRight
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* Contact topics */}
                <div className="mt-8">
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-ink-400">
                    You can contact us regarding
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Technology Enquiries",
                      "Collaborations",
                      "Training & Demonstrations",
                      "Field Activities",
                      "General Enquiries",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-ink-200 bg-ink-50 px-3 py-2 text-xs text-ink-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISIT US
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-ink-200 bg-white">
        <div className="mx-auto max-w-[1450px] px-6 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="mb-12 max-w-[600px]"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-ink-900" />

              <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-ink-700">
                Visit Us
              </span>
            </div>

            <h2 className="font-serif text-4xl font-medium tracking-[-0.035em] text-ink-950 sm:text-5xl">
              Come and connect with RuTAG.
            </h2>

            <p className="mt-5 text-base leading-7 text-ink-600">
              Visit us at the Indian Institute of Technology Kharagpur to learn
              more about our work and initiatives.
            </p>
          </motion.div>

          {/* Visit content */}
          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="min-h-[360px] overflow-hidden rounded-2xl border border-ink-200 bg-ink-100 sm:min-h-[450px]"
            >
              <iframe
                title="Indian Institute of Technology Kharagpur Map"
                src="https://www.google.com/maps?q=Indian+Institute+of+Technology+Kharagpur&output=embed"
                className="h-full min-h-[360px] w-full border-0 sm:min-h-[450px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Right cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.08, ease }}
                className="rounded-2xl border border-ink-200 bg-ink-50 p-7 sm:p-8"
              >
                <div className="mb-7 flex items-center justify-between">
                  <img
                    src={Logo2}
                    alt="RuTAG IIT Kharagpur"
                    className="h-[55px] w-auto object-contain"
                  />

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white">
                    <Clock
                      size={19}
                      strokeWidth={1.5}
                      className="text-ink-700"
                    />
                  </div>
                </div>

                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink-400">
                  Office Hours
                </p>

                <p className="mt-4 text-[15px] font-medium text-ink-900">
                  Monday – Friday
                </p>

                <p className="mt-1 text-[14px] text-ink-600">
                  9:00 AM – 5:00 PM
                </p>

                <div className="mt-5 border-t border-ink-200 pt-5">
                  <p className="text-[13px] text-ink-500">
                    Closed on weekends
                  </p>
                </div>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.16, ease }}
                className="rounded-2xl border border-ink-200 bg-ink-50 p-7 sm:p-8"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div />

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white">
                    <MapPin
                      size={19}
                      strokeWidth={1.5}
                      className="text-ink-700"
                    />
                  </div>
                </div>

                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink-400">
                  Contact Details
                </p>

                <div className="mt-4">
                  <p className="text-[15px] font-medium text-ink-900">
                    Dr. Somnath Ghosal
                  </p>

                  <p className="mt-1 text-[13px] leading-5 text-ink-600">
                    Professor
                    <br />
                    Coordinator – RuTAG, IIT Kharagpur
                  </p>
                </div>

                <p className="mt-4 text-[14px] leading-6 text-ink-700">
                  Centre for Rural Development and Technology,
                  <br />
                  IIT Kharagpur, West Bengal
                  <br />
                  India – 721302
                </p>

                <a
                  href="mailto:drsomnathghosal@gmail.com"
                  className="group mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-ink-900"
                >
                  <span className="border-b border-transparent transition-all duration-300 group-hover:border-ink-900">
                    drsomnathghosal@gmail.com
                  </span>

                  <ArrowRight
                    size={15}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
