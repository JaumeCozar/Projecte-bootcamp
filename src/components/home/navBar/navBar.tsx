import { useState, useRef, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  Drawer,
} from "flowbite-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navBar.css";
import { FaSun, FaMoon } from "react-icons/fa";

export function NavBarra1() {
  const [active, setActive] = useState("Home");
  const containerRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Detectar si es móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const moveUnderline = (el: HTMLElement | null, delay = 0) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

    hoverTimeout.current = setTimeout(() => {
      if (el && underlineRef.current) {
        underlineRef.current.style.width = `${el.offsetWidth}px`;
        underlineRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
      }
    }, delay);
  };

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(
      `[data-link="${active}"]`
    ) as HTMLElement | null;
    moveUnderline(activeEl, 0);
  }, [active]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    }
  }, []);

  const links = ["Home", "Services", "Pricing", "Contact"];

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="NavBarra1 sticky top-0 z-20">
      <Navbar fluid className="bg-black/20 dark:bg-gray-800/80 p-0 relative border-b border-gray-200 dark:border-gray-700">
        {/* Logo visible solo si Drawer no está abierto */}
        {!(drawerOpen && isMobile) && (
          <NavbarBrand>
            <Link to="/">
              <img
                src={isMobile ? "/logosintexto.png" : "/logoBanner.png"}
                className={`mr-3 ml-10 max-h-20 ${isMobile ? "h-12" : "h-14 sm:h-16"}`}
                alt="Logo"
              />
            </Link>
          </NavbarBrand>
        )}

        <div className="flex md:order-2 items-center gap-2 pr-4">
          {!(drawerOpen && isMobile) && (
            <>
              <button
                className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-700"
                aria-label="Abrir menú"
                onClick={() => setDrawerOpen(true)}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-white"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
              </button>
              <button
                aria-label="Toggle dark mode"
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
                style={{ fontSize: 22 }}
              >
                {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
              </button>
            </>
          )}
        </div>

        {/* Links de navegación - solo en escritorio */}
        <div className="hidden md:flex items-center justify-end w-full mr-10">
          <div className="nav-container" ref={containerRef}>
            {links.map((link) => {
              let to = "/";
              if (link === "Contact") to = "/contacto";
              return (
                <Link
                  key={link}
                  to={to}
                  data-link={link}
                  className={`nav-link${active === link ? " active" : ""}`}
                  onClick={async (e) => {
                    setActive(link);
                    if (link === "Contact") return;
                    e.preventDefault();
                    if (location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => {
                        if (link === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
                        if (link === "Services") {
                          const el = document.getElementById("services-section");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }
                        if (link === "Pricing") {
                          const el = document.getElementById("pricing");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 300);
                    } else {
                      if (link === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
                      if (link === "Services") {
                        const el = document.getElementById("services-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                      if (link === "Pricing") {
                        const el = document.getElementById("pricing");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  onMouseEnter={(e) => moveUnderline(e.currentTarget, 0)}
                  onMouseLeave={() => {
                    const activeEl = containerRef.current?.querySelector(
                      `[data-link="${active}"]`
                    ) as HTMLElement | null;
                    moveUnderline(activeEl, 300);
                  }}
                >
                  {link}
                </Link>
              );
            })}
            <div className="underline" ref={underlineRef}></div>
          </div>
        </div>

        {/* Drawer en móvil */}
        {drawerOpen && (
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} position="right" className="md:hidden z-50 fixed right-0">
            <div className="flex items-center justify-end p-4 border-b">
              <button
                aria-label="Cerrar menú"
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-white"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-4">
              {links.map((link) => {
                let to = "/";
                if (link === "Contact") to = "/contacto";
                return (
                  <Link
                    key={link}
                    to={to}
                    data-link={link}
                    className={`block py-3 px-4 text-lg font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${active === link ? "text-cyan-600 dark:text-cyan-400" : "text-gray-900 dark:text-white"}`}
                    onClick={async (e) => {
                      setActive(link);
                      setDrawerOpen(false);
                      if (link === "Contact") return;
                      e.preventDefault();
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          if (link === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
                          if (link === "Services") {
                            const el = document.getElementById("services-section");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }
                          if (link === "Pricing") {
                            const el = document.getElementById("pricing");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 300);
                      } else {
                        if (link === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
                        if (link === "Services") {
                          const el = document.getElementById("services-section");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }
                        if (link === "Pricing") {
                          const el = document.getElementById("pricing");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {link}
                  </Link>
                );
              })}
            </div>
          </Drawer>
        )}
      </Navbar>
    </div>
  );
}
