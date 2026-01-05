import React from "react";
import "./Footer.css";
import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

export default function Footer() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* LEFT - BRAND */}
        <div className="footer__col footer__brand">
          <h3>Amaya Perera</h3>
          <p>
            Software Engineering Undergraduate at SLIIT.  
            Passionate about building clean, scalable, and user-focused software.
          </p>

          <div className="footer__socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            <a href="mailto:amayahiruni2002@gmail.com">
              <FiMail />
            </a>
          </div>
        </div>

        {/* CENTER - NAVIGATION */}
        <div className="footer__col footer__links">
          <h4>Navigate</h4>
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("about")}>About Me</button>
          <button onClick={() => goTo("skills")}>Skills</button>
          <button onClick={() => goTo("projects")}>Projects</button>
          <button onClick={() => goTo("contact")}>Contact</button>
        </div>

        {/* RIGHT - CONTACT */}
        <div className="footer__col footer__contact">
          <h4>Get In Touch</h4>

          <div className="footer__item">
            <FiMail />
            <span>amayahiruni2002@gmail.com</span>
          </div>

          <div className="footer__item">
            <FiPhone />
            <span>071 746 6262</span>
          </div>

          <div className="footer__item">
            <FiMapPin />
            <span>
              175/A/12, Mahawaththa Road,  
              Palenwaththa, Pannipitiya
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        © {new Date().getFullYear()} Amaya Perera. All rights reserved.
      </div>
    </footer>
  );
}
