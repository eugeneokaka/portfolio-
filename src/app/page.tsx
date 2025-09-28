"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const projects = [
  {
    id: 1,
    title: "Healthcare System",
    description:
      "A full-stack healthcare management system with patient records, authentication, and secure access.",
    tags: ["Next.js", "React", "Node.js", "Healthcare"],
    live: "https://care.eugenetech.me",
    repo: "#",
  },
  {
    id: 2,
    title: "AI Study App",
    description:
      "An AI-powered study companion app for personalized learning and smart recommendations.",
    tags: ["Next.js", "React", "AI", "Education"],
    live: "https://clerity.vercel.app/",
    repo: "#",
  },
];

export default function PurplefolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0210] to-[#120212] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Header />
        <main className="mt-12 space-y-24">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

/* -------- Header -------- */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-4">
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-2xl flex items-center justify-center font-bold text-black">
          E
        </div>
        <div className="text-lg font-semibold tracking-wide">Eugene Okaka</div>
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:flex gap-6 items-center text-sm text-gray-300">
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#about" className="hover:text-white transition">
          About
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
        <a
          href="/cv.pdf"
          download
          className="ml-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-violet-400 px-4 py-2 text-black font-medium shadow-md hover:scale-105 transform transition"
        >
          Download CV
        </a>
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button
          aria-label="open menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-300 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-6 text-gray-300 md:hidden">
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="/cv.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-violet-400 px-4 py-2 text-black font-medium shadow-md hover:scale-105 transform transition"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}

/* -------- Hero -------- */
function Hero() {
  return (
    <section className="text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
          Eugene Okaka
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Fullstack Developer | From Frontend to Backend
          </span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          I build scalable web applications that merge clean UI, powerful
          backend systems, and real-world impact. Focused on Next.js, React, and
          modern technologies to create fast, accessible, and delightful
          experiences.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="#projects" className="inline-block">
            <Button>See Projects</Button>
          </a>
          <a href="#contact" className="inline-block">
            <Button variant="outline" className="text-black">
              Hire me
            </Button>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-gray-400 justify-items-center">
          <Stat label="Years" value="2+" />
          <Stat label="Projects" value={String(projects.length)} />
          <Stat label="Location" value="Nairobi, KE" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <div className="text-white font-semibold text-lg">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

/* -------- Projects -------- */
function Projects() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-6 text-center">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <article className="rounded-2xl p-6 bg-gradient-to-br from-black/60 to-transparent border border-white/6 hover:scale-101 transform transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-400">
            {project.tags.map((t) => (
              <span key={t} className="px-2 py-1 bg-white/5 rounded-md">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="ml-4 flex flex-col gap-2">
          <a
            href={project.live}
            className="text-sm text-gray-300 hover:text-white"
          >
            Live
          </a>
          <a
            href={project.repo}
            className="text-sm text-gray-300 hover:text-white"
          >
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------- About -------- */
function About() {
  return (
    <section id="about">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="prose prose-invert max-w-none text-gray-300">
        <p>
          I'm a full-stack developer studying Information Technology at Kabarak
          University. I focus on building reliable web apps with a strong
          emphasis on UX, performance and accessibility.
        </p>
        <ul>
          <li>Next.js & React</li>
          <li>TypeScript & Node</li>
          <li>Healthcare systems & ML integrations</li>
        </ul>
      </div>
    </section>
  );
}

/* -------- Contact -------- */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (err) {
      setStatus("Error ❌");
    }
  }

  return (
    <section id="contact">
      <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="rounded-xl p-6 bg-white/3 border border-white/6">
          <p className="text-gray-300">
            Prefer email? Send a message and I’ll reply within a few days.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-300">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-md bg-black/60 border border-white/6 p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Email</label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-md bg-black/60 border border-white/6 p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-md bg-black/60 border border-white/6 p-2 text-white h-28"
              />
            </div>
            <div>
              <Button type="submit">Send message</Button>
            </div>
            {status && <p className="text-sm mt-2 text-gray-400">{status}</p>}
          </form>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl p-6 bg-black/40 border border-white/6">
            <div className="text-sm text-gray-300">Phone</div>
            <div className="font-medium mt-1">+254 790 486 537</div>
          </div>

          <div className="rounded-xl p-6 bg-black/40 border border-white/6">
            <div className="text-sm text-gray-300">Location</div>
            <div className="font-medium mt-1">Nairobi, Kenya</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Footer -------- */
function Footer() {
  return (
    <footer className="mt-16 py-6 text-center text-sm text-gray-400">
      <div>© {new Date().getFullYear()} Eugene Okaka — Built with Next.js</div>
    </footer>
  );
}
