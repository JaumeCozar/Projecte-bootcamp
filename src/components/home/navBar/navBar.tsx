import { useState, useRef, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
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
    // Al montar, lee la preferencia de localStorage o el sistema
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      // Si no hay preferencia, usa el sistema
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
      <Navbar fluid className="bg-black/20 dark:bg-gray-800/80 p-0 relative">
        <NavbarBrand>
          <Link to="/">
            <img
              src="/logoBanner.png"
              className="mr-3 h-10 sm:h-12 ml-10"
              alt="Logo"
            />
          </Link>
        </NavbarBrand>

        <div className="flex md:order-2 items-center gap-2 pr-4">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
            style={{ fontSize: 22 }}
          >
            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <div className="nav-container" ref={containerRef}>
            {links.map((link) => (
              link === "Contact" ? (
                <Link
                  key={link}
                  to="/contacto"
                  data-link={link}
                  className={`nav-link ${active === link ? "active" : ""}`}
                  onClick={() => setActive(link)}
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
              ) : (
                <div
                  key={link}
                  data-link={link}
                  className={`nav-link ${active === link ? "active" : ""}`}
                  onClick={async () => {
                    setActive(link);
                    if (link === "About") {
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          const aboutSection = document.getElementById("about-section");
                          if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 300);
                      } else {
                        const aboutSection = document.getElementById("about-section");
                        if (aboutSection) {
                          aboutSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }
                    if (link === "Home") {
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 300);
                      } else {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }
                    if (link === "Services") {
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          const servicesSection = document.getElementById("services-section");
                          if (servicesSection) {
                            servicesSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 300);
                      } else {
                        const servicesSection = document.getElementById("services-section");
                        if (servicesSection) {
                          servicesSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }
                    if (link === "Pricing") {
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          const pricingSection = document.getElementById("pricing");
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 300);
                      } else {
                        const pricingSection = document.getElementById("pricing");
                        if (pricingSection) {
                          pricingSection.scrollIntoView({ behavior: "smooth" });
                        }
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
                </div>
              )
            ))}
            <div className="underline" ref={underlineRef}></div>
          </div>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
