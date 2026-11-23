import { useNavigate } from "react-router-dom";

// import logo from "../assests/RuTAG_Logo_3.png";
import Logo2 from "../assests/RuTAG_Logo 2.png";

const links = [
  { label: "Home", path: "/" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Products", path: "/products" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);

    // Always move to the top of the selected page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-ink-200 bg-ink-50">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-30"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* ==================================================
              BRAND
          ================================================== */}

          <div className="md:col-span-5">
            <img
              src={Logo2}
              alt="RuTAG IIT Kharagpur"
              className="h-[80px] w-auto object-contain"
            />

            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ink-500">
              Rural Technology Action Group, IIT Kharagpur — bridging
              engineering and rural development through innovation and
              meaningful social impact.
            </p>
          </div>

          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink-400">
              Explore
            </p>

            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.path)}
                    className="
                      text-[14px]
                      text-ink-600
                      transition-colors
                      duration-300
                      hover:text-accent-600
                    "
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================================================
              CONTACT
          ================================================== */}

          <div className="md:col-span-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink-400">
              Reach Us
            </p>

            <ul className="mt-5 space-y-3 text-[14px] text-ink-600">
              <li>
                Coordinator – RuTAG IIT Kharagpur
              </li>
              <li>
                Rural Development Centre, IIT Kharagpur
              </li>

              <li>West Bengal, India - 721302</li>

              <li>
                Email:{" "}
                <a
                  href="mailto:drsomnathghosal@gmail.com"
                  className="transition-colors duration-300 hover:text-accent-600"
                >
                  drsomnathghosal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ==================================================
            COPYRIGHT
        ================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            items-start
            justify-between
            gap-4
            border-t
            border-ink-200
            pt-7
            text-[13px]
            text-ink-400
            md:flex-row
            md:items-center
          "
        >
          <p>
            © {new Date().getFullYear()} RuTAG IIT Kharagpur. All rights
            reserved.
          </p>

          <p>Bridging technology and rural development.</p>
        </div>
      </div>
    </footer>
  );
}
