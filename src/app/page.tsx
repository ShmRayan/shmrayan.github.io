"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  MapPin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

type ProjectLink = { label: string; href: string };

type Project = {
  id: string;
  title: string;
  desc: string;
  stack: string[];
  logo: string;
  preview: string;
  links: ProjectLink[];
};

type RoleHistory = { role: string; period: string };

const CONTENT = {
  en: {
    role: "Full-Stack Developer",
    availability: "New grad · Open to full-time · Available Jan 2027 · Ottawa",
    location: "Ottawa, Ontario, Canada",
    sub:
      "uOttawa Software Engineering · graduating Dec 2026. Looking for a new-grad role where I ship end-to-end: modern frontends, APIs, AI integrations, and production systems.",
    resumeBtn: "Resume",
    resumeLink:
      "https://drive.google.com/file/d/12LPdYfG_PGixXeaPjKfXeezIIZBZhs8a/view?usp=sharing",
    titles: {
      work: "Work",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
    },
    ui: {
      viewTimeline: "Timeline",
      hideDetails: "Hide",
      live: "Live",
      code: "Code",
      prev: "Previous project",
      next: "Next project",
    },
    jobs: {
      uottawaDev: {
        title: "Software Developer",
        type: "Internship / Part-time",
        date: "Sep 2024 – Aug 2026",
        tags: [".NET", "C#", "GitLab CI/CD", "Azure AD", "SQL Server"],
        history: [
          { role: "CO-OP", period: "May 2026 – Aug 2026" },
          { role: "Part-time", period: "Sep 2025 – Mar 2026" },
          { role: "CO-OP", period: "May 2025 – Aug 2025" },
          { role: "Part-time", period: "Jan 2025 – Apr 2025" },
          { role: "CO-OP", period: "Sep 2024 – Dec 2024" },
        ] as RoleHistory[],
      },
      uottawaTA: {
        title: "Teaching Assistant",
        type: "Part-time",
        date: "Jan 2025 – Apr 2026",
        tags: ["Python", "Java", "Algorithms", "OOP"],
        history: [
          { role: "Digital Systems", period: "Jan 2026 – Apr 2026" },
          { role: "Intro to Software Eng.", period: "Sep 2025 – Dec 2025" },
          { role: "Python", period: "Jan 2025 – Apr 2025" },
        ] as RoleHistory[],
      },
      kruger: {
        title: "Data Analyst",
        type: "Internship",
        date: "Jan 2024 – May 2024",
        tags: ["Power BI", "MySQL", "Power Automate"],
      },
    },
    education: {
      degree: "BASc in Software\nEngineering",
      school: "University of Ottawa",
      date: "Sep 2022 – Dec 2026",
      gpa: "GPA 8.74/10",
      honour: "Dean's Honour List (2023, 2024, 2025, 2026)",
    },
    skillGroups: [
      {
        label: "Languages",
        items: ["TypeScript", "Python", "Java", "C#", "SQL"],
      },
      {
        label: "Frontend",
        items: ["React", "Next.js", "Tailwind"],
      },
      {
        label: "Backend",
        items: [".NET", "Spring Boot", "Node.js", "PostgreSQL", "SQL Server"],
      },
      {
        label: "AI & Data",
        items: [
          "LLM Integration & Prompt Engineering",
          "LangGraph",
          "RAG",
          "Groq / Llama 3",
        ],
      },
      {
        label: "DevOps & Cloud",
        items: ["Docker", "GitLab CI/CD", "Azure", "Vercel"],
      },
      {
        label: "Other",
        items: ["Agile / Scrum", "English & French (Bilingual)"],
      },
    ],
    projects: [
      {
        id: "loglytics",
        title: "Loglytics",
        desc: "Built an AI observability SaaS that streams server logs in real time, runs root-cause analysis with LLMs, and returns actionable fixes in plain English.",
        stack: ["Next.js", "Claude", "Supabase", "Python"],
        logo: "/projects/logos/loglytics.svg",
        preview: "/projects/previews/loglytics.png",
        links: [{ label: "Live", href: "https://www.loglytics.tech/" }],
      },
      {
        id: "cvscriba",
        title: "CVScriba",
        desc: "Built a SaaS AI agent that rewrites CVs and cover letters per job posting, with fidelity checks and print-ready PDFs.",
        stack: ["Python", "LangGraph", "Gemini", "Postgres"],
        logo: "/projects/logos/cvscriba.png",
        preview: "/projects/previews/cvscriba.png",
        links: [{ label: "Live", href: "https://cvscriba.com" }],
      },
      {
        id: "silsila",
        title: "Silsila",
        desc: "Built a SaaS family-tree product: GED import, voice-driven edits, oral history, and a multilingual assistant over the graph.",
        stack: ["Next.js", "Supabase", "Gemini", "React Flow"],
        logo: "/projects/logos/silsila.svg",
        preview: "/projects/previews/silsila.png",
        links: [{ label: "Live", href: "https://silsila.me" }],
      },
      {
        id: "memora",
        title: "Memora",
        desc: "Built a local-first photo/video library in the browser: no cloud upload; AI organizes faces, events, trips, and places on a timeline.",
        stack: ["React", "TypeScript", "IndexedDB", "Vite"],
        logo: "/projects/logos/memora.svg",
        preview: "/projects/previews/memora.png",
        links: [{ label: "Live", href: "https://shmrayan.me/Memora/" }],
      },
      {
        id: "uyp-pms",
        title: "UYP-PMS",
        desc: "Built a pharmacy prescription system with DDD, Spring Boot, and role-based workflows (MySQL, Docker).",
        stack: ["Java", "Spring Boot", "MySQL", "Docker"],
        logo: "/projects/logos/uyp-pms.png",
        preview: "/projects/previews/uyp-pms.svg",
        links: [{ label: "Code", href: "https://github.com/ShmRayan/UYP-PMS" }],
      },
    ] as Project[],
  },
  fr: {
    role: "Développeur full-stack",
    availability: "New grad · Ouvert aux postes permanents · Dispo janv. 2027 · Ottawa",
    location: "Ottawa, Ontario, Canada",
    sub:
      "Génie logiciel à uOttawa · diplomation déc. 2026. Je cherche un poste new-grad pour livrer de bout en bout: frontends modernes, APIs, intégrations IA et systèmes en production.",
    resumeBtn: "CV",
    resumeLink:
      "https://drive.google.com/file/d/12LPdYfG_PGixXeaPjKfXeezIIZBZhs8a/view?usp=sharing",
    titles: {
      work: "Expérience",
      education: "Formation",
      projects: "Projets",
      skills: "Compétences",
    },
    ui: {
      viewTimeline: "Chronologie",
      hideDetails: "Masquer",
      live: "Site",
      code: "Code",
      prev: "Projet précédent",
      next: "Projet suivant",
    },
    jobs: {
      uottawaDev: {
        title: "Développeur logiciel",
        type: "Stage / Temps partiel",
        date: "Sep 2024 – Août 2026",
        tags: [".NET", "C#", "GitLab CI/CD", "Azure AD", "SQL Server"],
        history: [
          { role: "CO-OP", period: "Mai 2026 – Août 2026" },
          { role: "Temps partiel", period: "Sep 2025 – Mars 2026" },
          { role: "CO-OP", period: "Mai 2025 – Août 2025" },
          { role: "Temps partiel", period: "Jan 2025 – Avr 2025" },
          { role: "CO-OP", period: "Sep 2024 – Déc 2024" },
        ] as RoleHistory[],
      },
      uottawaTA: {
        title: "Assistant d'enseignement",
        type: "Temps partiel",
        date: "Jan 2025 – Avr 2026",
        tags: ["Python", "Java", "Algorithmes", "POO"],
        history: [
          { role: "Systèmes numériques", period: "Jan 2026 – Avr 2026" },
          { role: "Intro au génie logiciel", period: "Sep 2025 – Déc 2025" },
          { role: "Python", period: "Jan 2025 – Avr 2025" },
        ] as RoleHistory[],
      },
      kruger: {
        title: "Analyste de données",
        type: "Stage",
        date: "Jan 2024 – Mai 2024",
        tags: ["Power BI", "MySQL", "Power Automate"],
      },
    },
    education: {
      degree: "BASc en génie\nlogiciel",
      school: "Université d'Ottawa",
      date: "Sep 2022 – Déc 2026",
      gpa: "Moyenne 8.74/10",
      honour: "Palmarès du doyen (2023, 2024, 2025, 2026)",
    },
    skillGroups: [
      {
        label: "Langages",
        items: ["TypeScript", "Python", "Java", "C#", "SQL"],
      },
      {
        label: "Frontend",
        items: ["React", "Next.js", "Tailwind"],
      },
      {
        label: "Backend",
        items: [".NET", "Spring Boot", "Node.js", "PostgreSQL", "SQL Server"],
      },
      {
        label: "IA & Data",
        items: [
          "LLM Integration & Prompt Engineering",
          "LangGraph",
          "RAG",
          "Groq / Llama 3",
        ],
      },
      {
        label: "DevOps & Cloud",
        items: ["Docker", "GitLab CI/CD", "Azure", "Vercel"],
      },
      {
        label: "Autre",
        items: ["Agile / Scrum", "Anglais & français (bilingue)"],
      },
    ],
    projects: [] as Project[],
  },
};

CONTENT.fr.projects = CONTENT.en.projects.map((p) => {
  const frDesc: Record<string, string> = {
    loglytics:
      "SaaS d’observabilité IA: stream de logs serveur en temps réel, analyse de cause racine par LLM, et correctifs actionnables en langage clair.",
    cvscriba:
      "SaaS agent IA qui réécrit CV et lettre par offre, avec contrôles de fidélité et PDFs prêts à imprimer.",
    silsila:
      "SaaS d’arbre généalogique: import GED, éditions à la voix, mémoires orales, et assistant multilingue sur le graphe.",
    memora:
      "Bibliothèque photo/vidéo local-first dans le navigateur: sans upload cloud; l’IA organise visages, événements, voyages et lieux.",
    "uyp-pms":
      "Système de prescriptions conçu en DDD avec Spring Boot, workflows par rôles (MySQL, Docker).",
  };
  return { ...p, desc: frDesc[p.id] ?? p.desc };
});

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = CONTENT[lang];

  return (
    <div className="min-h-screen text-ink overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
            RSH
          </a>
          <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
            <a href="#work" className="hover:text-accent transition-colors">
              {t.titles.work}
            </a>
            <a href="#education" className="hover:text-accent transition-colors">
              {t.titles.education}
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              {t.titles.projects}
            </a>
            <a href="#skills" className="hover:text-accent transition-colors">
              {t.titles.skills}
            </a>
          </nav>
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="flex items-center gap-1 rounded-md border border-line bg-elevated px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-soft"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-accent" : ""}>EN</span>
            <span className="text-line">/</span>
            <span className={lang === "fr" ? "text-accent" : ""}>FR</span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-line">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(12,18,34,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,18,34,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                {t.availability}
              </p>
              <h1 className="font-display text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[0.95] tracking-tight text-ink">
                <Typewriter text={"Rayan Saadani\nHassani"} />
              </h1>
              <p className="mt-4 text-base font-medium text-ink-soft md:text-lg">{t.role}</p>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">{t.sub}</p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={t.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-white transition hover:bg-accent-hover"
                >
                  <Download size={16} />
                  {t.resumeBtn}
                </a>
                <a
                  href="https://www.linkedin.com/in/rayan-saadani-hassani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-elevated text-ink transition hover:border-accent hover:text-accent"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/ShmRayan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-elevated text-ink transition hover:border-accent hover:text-accent"
                >
                  <Github size={18} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} className="text-accent" />
                  {t.location}
                </span>
                <span>uOttawa · BASc Software Engineering</span>
                <a
                  href="mailto:shmrayan@gmail.com"
                  className="inline-flex items-center gap-2 transition hover:text-accent"
                >
                  <Mail size={14} className="text-accent" />
                  shmrayan@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="border-b border-line py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionLabel>{t.titles.work}</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {lang === "en" ? "Where I’ve worked." : "Où j’ai travaillé."}
              </h2>
            </Reveal>

            <div className="mt-14 space-y-14">
              <Reveal>
                <CompanyBlock
                  company="University of Ottawa"
                  location="Ottawa"
                  logo="/uottawa.png"
                >
                  <RoleBlock job={t.jobs.uottawaDev} ui={t.ui} />
                  <RoleBlock job={t.jobs.uottawaTA} ui={t.ui} />
                </CompanyBlock>
              </Reveal>
              <Reveal>
                <CompanyBlock
                  company="Kruger Products"
                  location="Gatineau"
                  logo="/kruger.png"
                >
                  <RoleBlock job={t.jobs.kruger} ui={t.ui} />
                </CompanyBlock>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="education" className="border-b border-line py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionLabel>{t.titles.education}</SectionLabel>
              <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-elevated">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/uottawa.png"
                      alt={t.education.school}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="whitespace-pre-line font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      {t.education.degree}
                    </h2>
                    <p className="mt-3 text-lg text-ink-soft">{t.education.school}</p>
                    <p className="mt-2 text-sm text-muted">{t.education.date}</p>
                  </div>
                </div>
                <div className="space-y-1 text-lg leading-relaxed text-ink-soft md:text-right">
                  <p>{t.education.gpa}</p>
                  <p>{t.education.honour}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="border-b border-line py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <SectionLabel>{t.titles.projects}</SectionLabel>
                  <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    {lang === "en"
                      ? "Products and systems I’ve shipped."
                      : "Produits et systèmes que j’ai livrés."}
                  </h2>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 px-5 md:px-8">
            <ProjectCarousel projects={t.projects} ui={t.ui} />
          </div>
        </section>

        <section id="skills" className="border-b border-line py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionLabel>{t.titles.skills}</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {lang === "en" ? "What I use to ship." : "Ce que j’utilise pour livrer."}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {t.skillGroups.map((group, i) => (
                <Reveal key={group.label} delay={i * 0.05}>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {group.label}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-base text-ink-soft">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <span>© 2026 Rayan Saadani Hassani</span>
          <div className="flex items-center gap-5">
            <a
              href="mailto:shmrayan@gmail.com"
              className="hover:text-accent transition-colors"
            >
              shmrayan@gmail.com
            </a>
            <a
              href="https://github.com/ShmRayan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rayan-saadani-hassani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Typewriter({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let i = 0;
    setIsFinished(false);
    setDisplayText("");

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i += 1;
      } else {
        clearInterval(timer);
        setIsFinished(true);
      }
    }, 90);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block whitespace-pre-wrap">
      {displayText}
      {!isFinished && (
        <motion.span
          aria-hidden
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="mb-[-0.08em] ml-1 inline-block h-[0.85em] w-[0.08em] align-baseline bg-accent"
        />
      )}
    </span>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{children}</p>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCarousel({
  projects,
  ui,
}: {
  projects: Project[];
  ui: { live: string; code: string; prev: string; next: string };
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex(0);
    setDirection(1);
  }, [projects]);

  const goTo = (next: number, dir: number) => {
    const len = projects.length;
    if (!len) return;
    const wrapped = ((next % len) + len) % len;
    setDirection(dir);
    setIndex(wrapped);
  };

  const go = (dir: -1 | 1) => goTo(index + dir, dir);

  useEffect(() => {
    if (paused || projects.length < 2) return;
    const timer = setInterval(() => goTo(index + 1, 1), 5000);
    return () => clearInterval(timer);
  }, [index, paused, projects.length]);

  const project = projects[index];
  if (!project) return null;

  return (
    <div className="mx-auto max-w-4xl">
      <p className="mb-6 px-14 text-sm text-muted md:px-16">
        <span className="font-semibold text-ink">{index + 1}</span>
        <span className="mx-1.5 text-line">/</span>
        {projects.length}
      </p>

      <div className="relative px-12 md:px-14">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={ui.prev}
          className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-elevated text-ink shadow-[0_8px_24px_rgba(12,18,34,0.18)] transition hover:border-accent hover:text-accent md:h-12 md:w-12"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={ui.next}
          className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-elevated text-ink shadow-[0_8px_24px_rgba(12,18,34,0.18)] transition hover:border-accent hover:text-accent md:h-12 md:w-12"
        >
          <ChevronRight size={20} />
        </button>

        <div
          className="relative overflow-hidden rounded-2xl border border-line bg-elevated p-5 shadow-[0_18px_50px_-28px_rgba(12,18,34,0.45)] md:p-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(26,79,122,0.06),transparent_70%)]" />

          <div className="relative min-h-[28rem] md:min-h-[32rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={project.id}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} ui={ui} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-1.5">
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => goTo(i, i > index ? 1 : -1)}
            aria-label={p.title}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-accent" : "w-2 bg-line hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  ui,
}: {
  project: Project;
  ui: { live: string; code: string };
}) {
  const previewIsSvg = project.preview.endsWith(".svg");

  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden rounded-xl border border-line bg-tint">
        <div className="aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.preview}
            alt={`${project.title} preview`}
            className={`h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.015] ${
              previewIsSvg ? "object-contain p-6" : ""
            }`}
            draggable={false}
          />
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.logo}
          alt=""
          className="mt-0.5 h-10 w-10 shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {project.title}
            </h3>
          </div>
          <p className="mt-2 text-base leading-relaxed text-ink-soft">{project.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[11px] font-medium uppercase tracking-wide text-muted"
              >
                {s}
              </span>
            ))}
          </div>
          {project.links.length > 0 && (
            <div className="mt-4 flex flex-wrap justify-end gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-accent-hover"
                >
                  {link.label === "Live" || link.label === "Site" ? (
                    <ExternalLink size={14} />
                  ) : (
                    <Github size={14} />
                  )}
                  {link.label === "Live"
                    ? ui.live
                    : link.label === "Code"
                      ? ui.code
                      : link.label}
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function CompanyBlock({
  company,
  location,
  logo,
  children,
}: {
  company: string;
  location: string;
  logo: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-line bg-elevated">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt={company} className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-ink">{company}</h3>
          <p className="text-sm text-muted">{location}</p>
        </div>
      </div>
      <div className="space-y-8 border-l border-line pl-6">{children}</div>
    </div>
  );
}

function RoleBlock({
  job,
  ui,
}: {
  job: {
    title: string;
    type: string;
    date: string;
    tags: string[];
    history?: RoleHistory[];
  };
  ui: { viewTimeline: string; hideDetails: string };
}) {
  const [open, setOpen] = useState(false);
  const hasHistory = Boolean(job.history?.length);

  return (
    <div className="relative">
      <span
        aria-hidden
        className="absolute -left-[29px] top-[9px] h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h4 className="text-xl font-semibold tracking-tight text-ink">{job.title}</h4>
        {hasHistory ? (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? ui.hideDetails : ui.viewTimeline}
            className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-accent"
          >
            {job.date}
            <ChevronDown
              size={14}
              className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>
        ) : (
          <span className="text-sm text-muted">{job.date}</span>
        )}
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{job.type}</p>

      {open && job.history && (
        <ul className="mt-4 space-y-4 border-l border-line pl-5">
          {job.history.map((h) => (
            <li key={`${h.role}-${h.period}`} className="relative text-sm">
              <span
                aria-hidden
                className="absolute -left-[23px] top-[6px] h-2 w-2 rounded-full bg-muted"
              />
              <span className="font-medium text-ink">{h.role}</span>
              <span className="ml-2 text-muted">{h.period}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
        {job.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium text-muted">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
