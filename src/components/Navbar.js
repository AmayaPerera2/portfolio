import React, { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: [0.4] }
    );

    sections.forEach(sec => io.observe(sec));
    return () => io.disconnect();
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
      <div className="topbar__inner">
        
        {/* BRAND */}
        <button className="brand" onClick={() => goTo("home")}>
          <span className="brand__icon">👩🏻‍💻</span>
          <span className="brand__name">
            Amaya <span className="brand__nameLight">Perera</span>
          </span>
        </button>

        {/* DESKTOP MENU */}
        <nav className="menu">
          {LINKS.map(l => (
            <button
              key={l.id}
              className={`menu__link ${active === l.id ? "is-active" : ""}`}
              onClick={() => goTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="navRight">
          <a className="resumeBtn" href="/AmayaCV.pdf" download>
            Download CV 📄
          </a>

          {/* HAMBURGER */}
          <button className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobileMenu">
          {LINKS.map(l => (
            <button
              key={l.id}
              className={`mobileLink ${active === l.id ? "is-active" : ""}`}
              onClick={() => goTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
