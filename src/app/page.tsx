"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// Ensure you install lucide-react: npm install lucide-react
import {
  Code2,
  Database,
  Cpu,
  GraduationCap,
  Mail,
  MapPin,
  ExternalLink,
  Github,
  Server,
  LayoutTemplate,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

// --- Data ---
const projects = [
  {
    id: 1,
    title: "Healthcare System",
    description:
      "A full-stack healthcare management system with patient records, authentication, and secure access.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    live: "https://care.eugenetech.me",
    repo: "#",
  },
  {
    id: 2,
    title: "AI Study App",
    description:
      "An AI-powered study companion app for personalized learning and smart recommendations.",
    tags: ["Next.js", "OpenAI API", "Tailwind", "Prisma"],
    live: "https://clerity.vercel.app/",
    repo: "#",
  },
  {
    id: 3,
    title: "Online Rental Listings",
    description:
      "A platform for property owners and clients to list, browse, and manage rental properties.",
    tags: ["Next.js", "Supabase", "Shadcn UI", "Maps"],
    live: "https://www.listingsdev.site/",
    repo: "#",
  },
  {
    id: 4,
    title: "Clothing E-commerce",
    description:
      "A modern e-commerce store for clothing, featuring product filtering, cart system, and checkout flow.",
    tags: ["React", "Redux", "Stripe", "Framer Motion"],
    live: "https://fashion.eugenetech.me/",
    repo: "#",
  },
  {
    id: 5,
    title: "AutoGenz Spare Parts",
    description:
      "An online marketplace for buying and managing automotive spare parts with search and category filters.",
    tags: ["Next.js", "API Routes", "MongoDB", "Auth.js"],
    live: "https://autogenz.eugenetech.me/",
    repo: "#",
  },
];

const techStack = {
  frontend: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  backend: ["Node.js", "Express", "Supabase", "PostgreSQL", "Prisma"],
  tools: ["Git", "VS Code", "Vercel", "Figma"],
};

export default function PurplefolioPage() {
  return (
    <div className="min-h-screen bg-[#050105] text-white selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <Header />
        <main className="mt-12 space-y-32">
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
    <header className="flex items-center justify-between py-4 backdrop-blur-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
          EO
        </div>
        <div className="text-lg font-bold tracking-tight">Eugene Okaka</div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <a
          href="/cv.pdf"
          download
          className="ml-4 inline-flex items-center rounded-full bg-white px-5 py-2 text-sm text-black font-semibold hover:bg-gray-200 transition active:scale-95"
        >
          Resume
        </a>
      </nav>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl text-gray-300"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b0210]/95 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          <NavLink href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink href="#about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="hover:text-purple-400 transition-colors"
    >
      {children}
    </a>
  );
}

/* -------- Hero -------- */
function Hero() {
  return (
    <section className="text-center py-12 md:py-24 relative">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />

      <div className="inline-block mb-4 px-3 py-1 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium uppercase tracking-wider">
        Available for hire
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
        Building digital <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
          experiences that matter.
        </span>
      </h1>

      <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        I'm <strong className="text-white">Eugene</strong>, a Fullstack
        Developer based in Kenya. I blend performance-driven backend logic with
        stunning frontend interfaces using Next.js.
      </p>

      <div className="mt-10 flex gap-4 justify-center">
        <a href="#projects">
          <Button className="h-12 px-8 text-base bg-white text-black hover:bg-gray-200 rounded-full font-semibold">
            View Work
          </Button>
        </a>
        <a href="#contact">
          <Button
            variant="outline"
            className="h-12 px-8 text-base border-white/20 hover:bg-white/10 text-white rounded-full bg-transparent"
          >
            Contact Me
          </Button>
        </a>
      </div>

      <div className="mt-16 flex flex-wrap gap-12 justify-center border-t border-white/5 pt-8">
        <Stat label="Experience" value="2+ Years" />
        <Stat label="Projects" value="10+ Built" />
        <Stat label="Stack" value="Next.js Ecosystem" />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-sm text-gray-500 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

/* -------- Projects -------- */
function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-gray-400 mt-2">A selection of my recent work.</p>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          className="hidden md:flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition"
        >
          View Github <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-3xl p-6 bg-[#120212] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-white/5 rounded-2xl text-purple-400 group-hover:text-white transition-colors">
            <LayoutTemplate size={24} />
          </div>
          <div className="flex gap-3">
            <a
              href={project.repo}
              title="Code"
              className="text-gray-500 hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a
              href={project.live}
              title="Live Site"
              className="text-gray-500 hover:text-white transition"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

/* -------- IMPROVED ABOUT SECTION -------- */
function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* 1. Main Bio Card (Spans 2 columns) */}
        <div className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-[#1a0520] to-[#0f0214] border border-white/10 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-purple-400" size={28} />
              <h3 className="text-xl font-bold">The Developer</h3>
            </div>
            <div className="prose prose-invert text-gray-300 leading-loose">
              <p>
                I am a passionate Fullstack Developer currently studying
                <span className="text-white font-medium">
                  {" "}
                  Information Technology at Kabarak University
                </span>
                .
              </p>
              <p className="mt-4">
                My journey involves bridging the gap between complex backend
                logic and seamless user experiences. I don't just write code; I
                build solutions that are performant, accessible, and scalable.
                When I'm not debugging, you'll find me exploring new ML
                integrations or optimizing database queries.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Education Card */}
        <div className="rounded-3xl p-8 bg-[#0f0214] border border-white/10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-pink-400" size={28} />
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          <div>
            <div className="text-lg font-semibold text-white">
              Kabarak University
            </div>
            <div className="text-purple-400 text-sm">Diploma in IT</div>
            <div className="text-gray-500 text-sm mt-1">Current Student</div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-sm text-gray-400 mb-2">Focus Areas:</div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-pink-500/10 text-pink-300 px-2 py-1 rounded">
                System Analysis
              </span>
              <span className="text-xs bg-pink-500/10 text-pink-300 px-2 py-1 rounded">
                Web Dev
              </span>
            </div>
          </div>
        </div>

        {/* 3. Tech Stack (Full Width) */}
        <div className="md:col-span-3 grid md:grid-cols-3 gap-6 mt-2">
          <TechCard
            title="Frontend"
            icon={<LayoutTemplate size={20} />}
            skills={techStack.frontend}
            color="text-blue-400"
          />
          <TechCard
            title="Backend"
            icon={<Server size={20} />}
            skills={techStack.backend}
            color="text-green-400"
          />
          <TechCard
            title="Tools"
            icon={<Cpu size={20} />}
            skills={techStack.tools}
            color="text-orange-400"
          />
        </div>
      </div>
    </section>
  );
}

function TechCard({
  title,
  icon,
  skills,
  color,
}: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}) {
  return (
    <div className="rounded-3xl p-6 bg-[#0f0214] border border-white/10 hover:bg-white/5 transition-colors">
      <div className={`flex items-center gap-3 mb-4 ${color}`}>
        {icon}
        <h4 className="font-bold text-white">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs rounded-md border border-white/5 hover:border-white/20 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------- Contact -------- */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setStatus("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="pb-20 scroll-mt-24">
      <div className="rounded-[2.5rem] bg-gradient-to-b from-purple-900/20 to-black border border-white/10 p-8 md:p-16 text-center md:text-left overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's work together
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities and ideas.
            </p>

            <div className="space-y-4">
              <ContactItem
                icon={<Mail size={20} />}
                text="eugeneokaka@gmai.com"
              />
              <ContactItem icon={<MapPin size={20} />} text="Nairobi, Kenya" />

              <div className="flex gap-4 mt-8">
                <Link href={"https://github.com/eugeneokaka"} target="_blank">
                  <SocialBtn icon={<Github size={20} />} />
                </Link>

                {/* Replace with your actual LinkedIn profile URL */}
                <Link
                  href={"https://www.linkedin.com/in/eugene-okaka-06174a312/"}
                  target="_blank"
                >
                  <SocialBtn icon={<Linkedin size={20} />} />
                </Link>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-left">
                <label className="text-xs font-medium text-gray-400 uppercase">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-xs font-medium text-gray-400 uppercase">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-xs font-medium text-gray-400 uppercase">
                Message
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-white text-black hover:bg-gray-200 font-semibold rounded-xl"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {status && (
              <p
                className={`text-center text-sm mt-2 ${
                  status.startsWith("❌") ? "text-red-400" : "text-green-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* Supporting Components */
function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 text-gray-300">
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}

function SocialBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
      {icon}
    </button>
  );
}

/* Footer */
function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 border-t border-white/5 mt-12">
      <p>© {new Date().getFullYear()} Eugene Okaka. All rights reserved.</p>
    </footer>
  );
}
