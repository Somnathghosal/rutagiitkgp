import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

// import logo from "../assests/RuTAG_Logo_4.png";
// import Logo from "../assests/Final_Logo_1.png";
// import Logo1 from "../assests/RUTAG Logo.png";
import Logo2 from "../assests/RuTAG_Logo 2.png";



const homeDropdown = [
  { label: "About", id: "about" },
  { label: "Vision", id: "vision" },
  { label: "Activities", id: "activities" },
  // { label: "Events", id: "events" },
];

const navItems = [
  {
    label: "Infrastructure",
    path: "/infrastructure",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);

  useEffect(() => {
    // Other pages → always white
    if (location.pathname !== "/") {
      setScrolled(true);
      return;
    }
  
    const handleScroll = () => {
      const hero = document.getElementById("hero");
  
      if (!hero) {
        setScrolled(false);
        return;
      }
  
      // Navbar becomes white once Hero is completely passed
      const triggerPoint = hero.offsetHeight - 80;
  
      setScrolled(window.scrollY >= triggerPoint);
    };
  
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);




  const scrollToSection = (id) => {
    setHomeOpen(false);
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);

      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-0   left-0 right-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-ink-50/85 backdrop-blur-xl border-b border-ink-200 shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* ---------------- Logo ---------------- */}

          <div className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[210px] xl:w-[220px] flex items-center">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="block"
            >
              <img
                src={Logo2}
                alt="RuTAG IIT Kharagpur"
                className="h-[60px] sm:h-[68px] md:h-[75px] lg:h-[82px] xl:h-[80px] mt-0 w-auto object-contain"
              />
            </NavLink>
          </div>

          {/* ---------------- Desktop Navigation ---------------- */}

          <ul className="hidden lg:flex items-center self-center gap-8 xl:gap-10">
            {/* ---------- HOME ---------- */}

            <li
              className="relative"
              onMouseEnter={() => setHomeOpen(true)}
              onMouseLeave={() => setHomeOpen(false)}
            >
              <NavLink
                to="/"
                onClick={(e) => {
                  setHomeOpen(false);
                  setMobileOpen(false);
              
                  if (location.pathname === "/") {
                    e.preventDefault();
              
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                className={({ isActive }) =>
                  `group flex items-center gap-1 relative py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ink-900"
                      : "text-ink-700 hover:text-ink-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Home
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        homeOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-accent-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>

              <AnimatePresence>
                {homeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 mt-4 w-52 overflow-hidden rounded-2xl border border-white/20 bg-white/50 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                  >
                    {homeDropdown.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full px-5 py-3 text-left text-sm text-ink-700 transition hover:bg-ink-100 hover:text-accent-600"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* ---------- OTHER PAGES ---------- */}

            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-ink-900"
                        : "text-ink-700 hover:text-ink-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}

                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-accent-600 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ---------- Mobile Menu Button ---------- */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* ---------------- Mobile Menu ---------------- */}

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 z-50 w-full bg-white border-t border-ink-200 shadow-xl lg:hidden"
              >
                <div className="px-6 py-6">
                  {/* Home */}

                  <div className="border-b border-ink-100 pb-2">
                    <button
                      onClick={() => setHomeOpen(!homeOpen)}
                      className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-ink-900"
                    >
                      Home
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          homeOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {homeOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          {homeDropdown.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => scrollToSection(item.id)}
                              className="block w-full py-3 pl-5 text-left text-sm text-ink-600 hover:text-accent-600"
                            >
                              {item.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Remaining Navigation */}

                  <div className="flex flex-col">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `border-b border-ink-100 py-4 text-base font-medium transition-colors ${
                            isActive ? "text-accent-600" : "text-ink-800"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
