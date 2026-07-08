"use client";

import Image from "next/image";
import { useState } from "react";
import BootScreen from "@/components/BootScreen";
import Reveal from "@/components/Reveal";
import StatBar from "@/components/StatBar";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";

const skills = [
  { label: "Frontend (React / Next.js)", value: 90 },
  { label: "Tools — Excel, Git, GitHub, Slack", value: 60 },
  { label: "Backend", value: 40 },
  { label: "Flutter & Dart", value: 40 },
  { label: "UI Prototyping — Figma / Adobe XD", value: 70 },
  { label: "WordPress / CMS", value: 65 },
];

const inventory = [
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Python",
  "Java",
  "Git",
  "GitHub",
  "Figma",
  "Postman",
  "Pandas",
];

const achievements = [
  { title: "SheCodes Basics & Add-ons", desc: "Frontend fundamentals, APIs, SEO" },
  { title: "SheCodes Plus & Add-ons", desc: "Advanced frontend development" },
  { title: "SheCodes Plus AI & Add-ons", desc: "AI prompts, integration & tooling" },
  { title: "SheCodes Responsive & Add-ons", desc: "Responsive web design" },
  { title: "SheCodes React & Add-ons", desc: "React fundamentals & patterns" },
  { title: "WordPress Certification", desc: "Site builds & CMS management" },
  { title: "Data Analysis Certificate", desc: "She Leads Africa" },
];

export default function Page() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <BootScreen onDone={() => setBooted(true)} />

      <div id="app" className={`app${booted ? " is-visible" : ""}`}>
        {/* NAV */}
        <nav className="nav">
          <a href="#hero" className="nav__logo">
            NE<span className="nav__blink">_</span>
          </a>
          <div className="nav__links">
            <a href="#stats">Stats</a>
            <a href="#quests">Projects</a>
            <a href="#achievements">Certs</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            href="/assets/Natania_Ezeigwe_Resume.docx"
            className="nav__cta"
            download
          >
            Résumé ↓
          </a>
        </nav>

        {/* HERO */}
        <Reveal as="header" id="hero" className="hero">
          <Image
            src="/assets/avatar.png"
            alt="Natania Ezeigwe"
            width={140}
            height={140}
            className="hero_avatar"
            priority
          />
          <div className="hero__eyebrow">
            <span className="dot" /> PLAYER READY{" "}
            <span className="hero__loc">// FUTO, Nigeria</span>
          </div>
          <h1 className="hero__title">
            Ezeigwe Natania
            <br />
            <span className="hero__accent">builds interfaces</span> that feel
            alive.
          </h1>
          <p className="hero__sub">
            Frontend developer & software engineering student. I turn designs
            into fast, responsive React &amp; Next.js experiences — and I&apos;m
            levelling up backend and Flutter skills along the way.
          </p>
          <div className="hero__actions">
            <a href="#quests" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Send a Message
            </a>
          </div>

          <div className="hero__card" aria-hidden="true">
            <div className="hero__card-row">
              <span>CLASS</span>
              <span>Frontend Developer</span>
            </div>
            <div className="hero__card-row">
              <span>STATUS</span>
              <span>In Progress — FUTO</span>
            </div>
            <div className="hero__card-row">
              <span>GUILD</span>
              <span>GDG · WTM · Hack4FUTO</span>
            </div>
          </div>
        </Reveal>

        {/* STATS */}
        <Reveal id="stats" className="section">
          <div className="section__head">
            <p className="section__eyebrow">01 // Character Stats</p>
            <h2 className="section__title">Skill Tree</h2>
          </div>

          <div className="stats">
            {skills.map((s) => (
              <StatBar key={s.label} label={s.label} value={s.value} />
            ))}
          </div>

          <div className="inventory">
            <p className="inventory__label">// Inventory</p>
            <div className="inventory__grid">
              {inventory.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* PROJECTS */}
        <Reveal id="quests" className="section">
          <div className="section__head">
            <p className="section__eyebrow">02 // Quest Log</p>
            <h2 className="section__title">Projects</h2>
          </div>

          <div className="quests">
            {projects.map((p) => {
              const isLocked = p.status === "COMING SOON";
              const statusClass =
                p.status === "LIVE"
                  ? "quest-card__status--live"
                  : p.status === "IN PROGRESS"
                  ? "quest-card__status--progress"
                  : "quest-card__status--soon";

              return (
                <article
                  className={`quest-card${isLocked ? " quest-card--locked" : ""}`}
                  key={p.title}
                >
                  <div className={`quest-card__status ${statusClass}`}>
                    {p.status}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="quest-card__tags">
                    {p.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="quest-card__links">
                    {p.links.length > 0 ? (
                      p.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))
                    ) : (
                      <a href="#" className="is-disabled" aria-disabled="true">
                        Awaiting link
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        {/* ACHIEVEMENTS */}
        <Reveal id="achievements" className="section">
          <div className="section__head">
            <p className="section__eyebrow">03 // Achievements Unlocked</p>
            <h2 className="section__title">Certifications</h2>
          </div>


          <div className="achievements">
            {achievements.map((a) => (
              <div className="achv" key={a.title}>
                <span className="achv__icon">✓</span>
                <div>
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CONTACT */}
        <Reveal id="contact" className="section section--contact">
          <div className="section__head">
            <p className="section__eyebrow">04 // Open Channel</p>
            <h2 className="section__title">Send a Transmission</h2>
            <p className="section__sub">
              Have a role, a project, or just want to say hi? This lands
              straight in my inbox.
            </p>
          </div>

          <ContactForm />

          <div className="contact-links">
            <a href="mailto:ezenatty7@gmail.com">ezenatty7@gmail.com</a>
            <a
              href="https://github.com/QueenNatty"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/QueenNatty
            </a>
            <a
              href="https://tinyurl.com/natania-Ezeigwe"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Ezeigwe Natania Akunna. Built with Next.js.</p>
          <p className="footer__tag">// end of file</p>
        </footer>
      </div>
    </>
  );
}
