import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";

export default function AboutUs() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`aboutSimple ${show ? "show" : ""}`}
    >
      {/* Background image kept */}
      <div className="aboutSimple__bg" />

      <div className="aboutSimple__content">
        <h2 className="aboutSimple__title">About Me</h2>

        <p className="aboutSimple__text">
          I am <strong>Amaya Perera</strong>, a{" "}
          <strong>Software Engineering undergraduate at SLIIT (Faculty of Computing)</strong>,
          currently pursuing a{" "}
          <strong>
            BSc (Hons) in Information Technology, specializing in Software Engineering
          </strong>.
          I am deeply passionate about designing and developing scalable, reliable, and
          user-centered software solutions. I have hands-on experience working with{" "}
          <strong>
            Java, Python, React.js, Node.js, Firebase, MongoDB, and SQL
          </strong>,
          and enjoy building full-stack and Android applications that emphasize clean
          architecture, efficient APIs, and modern UI experiences. Beyond technical
          skills, I value analytical thinking, problem-solving, teamwork, and leadership,
          and I am continuously driven to learn emerging technologies and deliver
          high-quality software aligned with industry standards.
        </p>
      </div>
    </section>
  );
}
