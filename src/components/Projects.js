import React, { useState, useEffect } from "react";
import "./Projects.css";

const PROJECTS = [
  {
  id: "p5",
  title: "WellBeats",
  subtitle: "Personal Wellness App",
  category: "Mobile",
  image: "/images/habit.jpg",
  description:
    "WellBeats is a thoughtfully designed mobile wellness application that helps users develop healthier daily routines and maintain overall well-being through a smooth and intuitive user experience. Built with Android Studio and Kotlin, the app reflects strong technical implementation, clean architecture, and a strong focus on usability, making it a reliable and impactful personal wellness companion. 🌿📱",
  features: [
    "📝 Track daily wellness habits with progress monitoring",
    "😊 Log moods using an emoji-based journal",
    "💧 Receive smart hydration reminders throughout the day",
    "🚶 Count steps using accelerometer sensor integration",
    "💾 Persist user data using SharedPreferences",
    "🎨 Clean, responsive, and user-friendly mobile interface",
    "⚙️ Developed with Android Studio & Kotlin following best practices",
  ],
  tags: ["Android", "Kotlin", "Mobile UI"],
  github: "https://github.com/your-username/wellbeats",
  live: "/images/habit.mp4",
},
{
  id: "p4",
  title: "TravelTales",
  subtitle: "Smart Tourism Assistant for Sri Lanka",
  category: "Mobile",
  image: "/images/travel.jpg",
  description:
    "TravelTales is a modern mobile travel assistant designed to make traveling in Sri Lanka safer, easier, and more enjoyable for both local and international tourists. The app helps users plan complete trips with confidence by providing verified travel information, trusted guides, curated attractions, and a smooth booking experience, ensuring memorable and stress-free journeys. 🌍✈️",
  features: [
    "🧭 Explore attractions with images, descriptions, and traveler ratings",
    "🏖️ Discover places by categories such as beaches, heritage, wildlife, and hiking",
    "📅 Plan trips by selecting destinations, transport options, and trip duration",
    "🚗 Choose transport types including car, van, bus, and accessible options",
    "🧾 View clear booking summaries with costs, guide details, and payment status",
    "📦 Book recommended travel packages with attractions, transport, and guides",
    "🔔 Receive notifications, reminders, and personalized travel suggestions",
  ],
  tags: ["Android", "Firebase", "Maps", "Tourism"],
  github: "https://github.com/your-username/traveltales",
  live: "/images/Travel.mp4",
},

  {
    id: "p1",
    title: "My Budget Pal",
    subtitle: "Finance & Salary Management System",
    category: "Full Stack",
    image: "/images/bud.png",
    description:
      "A full-stack finance management system to track income, expenses, and savings with visual insights and secure authentication.",
    features: [
      "Income and expense tracking",
      "Charts and reports",
      "User authentication",
      "Secure REST APIs",
    ],
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/your-username/budget-pal",
    live: "https://your-live-link.com",
  },
  {
  id: "p2",
  title: "UniHub",
  subtitle: "University Support Platform",
  category: "Web",
  image: "/images/uni.jpg",
  description:
    "🎓 UniHub is a centralized university support platform that helps students who have completed their A/Ls explore universities, degree programs, and future opportunities. 🤝 The platform enables direct communication with verified university agents, making higher education planning simple, reliable, and informed.",
  features: [
    "🏫 University and degree program exploration",
    "🔍 Advanced course search and filtering",
    "📘 Detailed university and course profiles",
    "💬 Direct communication with university agents",
    "📄 Guidance on entry requirements and career paths",
    "📱 Fully responsive student-friendly design",
    "🎨 Modern and intuitive UI/UX",
  ],
  tags: ["React", "Firebase", "Web App", "Education"],
  github: "https://github.com/your-username/unihub",
  live: "https://your-live-link.com",
},

  {
  id: "p3",
  title: "MediCare",
  subtitle: "Health & Diet Management System",
  category: "Backend",
  image: "/images/med.jpg",
  description:
    "🩺 MediCare is a smart health and diet management system that helps users maintain a healthier lifestyle through personalized care. 🥗 Users can select pre-prepared diet plans by specifying allergies and preferences, or request fully customized diet plans tailored to their needs. 📅 The system also allows users to book appointments with specialist doctors and receive timely notifications when their appointment dates are confirmed.",
  features: [
    "🥗 Pre-designed diet plans based on allergies",
    "🧾 Custom diet plan requests",
    "👨‍⚕️ Specialist doctor appointment booking",
    "📆 Flexible date and time selection",
    "🔔 Appointment notifications and reminders",
    "🔐 Secure handling of medical and personal data",
    "⚙️ Robust backend with validations",
  ],
  tags: ["REST API", "MySQL", "Backend", "Security"],
  github: "https://github.com/your-username/medicare",
  live: "https://your-live-link.com",
}

];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="pr">
      <div className="pr__bg" aria-hidden="true" />

      <div className="pr__container">
        <header className="pr__header">
          <p className="pr__eyebrow">PROJECTS</p>
          <h2 className="pr__title">My Work & Case Studies</h2>
          <p className="pr__desc">
            A selection of projects I’ve built across full-stack, backend, and
            mobile development.
          </p>
        </header>

        <div className="pr__grid">
          {PROJECTS.map((p, idx) => (
            <article
              key={p.id}
              className="prCard"
              style={{ "--d": `${idx * 80}ms` }}
            >
              <div
                className="prCard__media"
                onClick={() => setSelected(p)}
              >
                <img src={p.image} alt={`${p.title} preview`} />
                <div className="prCard__shade" />

                <div className="prCard__overlay">
                  <h3>{p.title}</h3>
                  <p>{p.subtitle}</p>
                </div>
              </div>

              <div className="prCard__bottom">
                <button
                  className="prBtn prBtn--primary"
                  onClick={() => setSelected(p)}
                >
                  View Details ↗
                </button>

                <div className="prLinks">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="prModal__overlay"
          onClick={() => setSelected(null)}
        >
          <div
            className="prModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="prModal__close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <div className="prModal__head">
              <div>
                <p className="prModal__eyebrow">{selected.category}</p>
                <h3 className="prModal__title">{selected.title}</h3>
                <p className="prModal__sub">{selected.subtitle}</p>
              </div>
            </div>

            <div className="prModal__body">
              <p className="prModal__desc">{selected.description}</p>

              {selected.features && (
                <div className="prModal__block">
                  <h4 className="prModal__blockTitle">
                    Key Features
                  </h4>
                  <ul className="prModal__list">
                    {selected.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="prModal__block">
                <h4 className="prModal__blockTitle">Technologies</h4>
                <div className="prTags">
                  {selected.tags.map((t, i) => (
                    <span key={i} className="prTag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prModal__actions">
                <a
                  href={selected.github}
                  className="prBtn prBtn--ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={selected.live}
                  className="prBtn prBtn--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
