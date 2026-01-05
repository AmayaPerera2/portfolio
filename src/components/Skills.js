import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

// ✅ icons import
import icFullstack from "../assets/skills/fullstack.png";
import icJava from "../assets/skills/java.png";
import icPhp from "../assets/skills/php.png";
import icReact from "../assets/skills/react.png";
import icCloud from "../assets/skills/firebase.png";
import icDb from "../assets/skills/db.png";
import icGit from "../assets/skills/github.png";
import icAgile from "../assets/skills/agile.png";
import icAndroid from "../assets/skills/android.png";
import icAlgo from "../assets/skills/algorithm.png";
import icUiux from "../assets/skills/uiux.png";

const SKILLS = [
  { label: "Full Stack", icon: icFullstack },
  { label: "Java", icon: icJava },
  { label: "PHP", icon: icPhp },
  { label: "React & Node.js", icon: icReact },
  { label: "Cloud / Hosting", icon: icCloud },
  { label: "Database Mgmt", icon: icDb },
  { label: "Git / GitHub", icon: icGit },
  { label: "Agile", icon: icAgile },
  { label: "Android App Dev", icon: icAndroid },
  { label: "Algorithms", icon: icAlgo },
  { label: "UI/UX Design", icon: icUiux },
];

function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function Skills() {
  const [wrapRef, inView] = useInView(0.18);

  return (
    <section id="skills" className="sk">
      <div className="sk__container" ref={wrapRef}>
        <header className={`sk__head ${inView ? "is-in" : ""}`}>
          <h2 className="sk__title">Expertise &amp; Skills</h2>
          <p className="sk__sub">
            A curated toolkit of technologies and methodologies I use to build effective digital solutions.
          </p>
        </header>

        <div className={`sk__grid ${inView ? "is-in" : ""}`}>
          {SKILLS.map((s, i) => (
            <article key={s.label} className="skCard" style={{ ["--d"]: `${i * 70}ms` }}>
              <div className="skCard__icon" aria-hidden="true">
                {/* ✅ PNG icon */}
                <img className="skIconImg" src={s.icon} alt="" loading="lazy" />
              </div>
              <h3 className="skCard__txt">{s.label}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
