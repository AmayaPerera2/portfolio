import React from "react";
import "./About.css";

import profileImg from "../assets/Amaya.jpeg";
import bgImg from "../assets/y11.png";

export default function About() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* ✅ overlay glow + blur */}
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__container">
        {/* LEFT */}
        <div className="hero__left">
          <p className="hero__kicker">HELLO, I’M</p>

          <h1 className="hero__title">
            Amaya <span className="hero__titleAccent">Perera</span>
          </h1>

          <div className="hero__divider" />

          <h2 className="hero__role">
            Full Stack Developer <span className="hero__roleBar" />
          </h2>

          <p className="hero__desc">
            A dedicated <b>full-stack developer</b> with a strong focus on{" "}
            <b>backend engineering</b> and building scalable, high-performance
            systems. I craft modern web applications, cloud-powered solutions,
            and clean user experiences using modern technologies.
          </p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#projects">
              View My Work <span aria-hidden="true">↗</span>
            </a>

            <a className="btn btn--ghost" href="#contact">
              Get In Touch <span aria-hidden="true">💬</span>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__right">
          <div className="avatar">
            <div className="avatar__ring" />
            <div className="avatar__dots" aria-hidden="true" />
            <img className="avatar__img" src={profileImg} alt="Amaya Perera" />
          </div>
        </div>
      </div>
    </section>
  );
}
