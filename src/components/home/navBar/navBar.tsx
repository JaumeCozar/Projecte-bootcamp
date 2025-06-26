import { useState, useRef, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import "./navBar.css";

export function NavBarra1() {


  
  const [active, setActive] = useState("Home");
  const containerRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<number | null>(null);

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

  const links = ["Home", "About", "Services", "Pricing", "Contact"];

  return (
    <div className="NavBarra1 sticky top-0 z-20">
      <Navbar fluid rounded className="bg-black/20 dark:bg-gray-800/20 p-0 relative">
        <NavbarBrand>
          <Link to="/">
            <img
              src="/logoBanner.png"
              className="mr-3 h-10 sm:h-12 ml-10"
              alt="Logo"
            />
          </Link>
        </NavbarBrand>

        <div className="flex md:order-2">
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <div className="nav-container" ref={containerRef}>
            {links.map((link) => (
              <div
                key={link}
                data-link={link}
                className={`nav-link ${active === link ? "active" : ""}`}
                onClick={() => {
                  setActive(link);
                  if (link === "About") {
                    const aboutSection = document.getElementById("about-section");
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  if (link === "Contact") {
                    const contactSection = document.getElementById("contact-section");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  if (link === "Home") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  if (link === "Services") {
                    const servicesSection = document.getElementById("services-section");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  if (link === "Pricing") {
                    const pricingSection = document.getElementById("pricing");
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: "smooth" });
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
            ))}
            <div className="underline" ref={underlineRef}></div>
          </div>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
