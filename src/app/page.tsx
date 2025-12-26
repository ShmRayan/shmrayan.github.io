"use client";

import { AnimatePresence, motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Calendar,
  Download, 
  MapPin, 
  GraduationCap, 
  Code, 
  History,
  Briefcase, 
  Terminal, 
  ExternalLink,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

const Reveal = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const CONTENT = {
  en: {
    role: "Software Engineering Student",
    availablity: "Available for Summer 2026 CO-OP",
    location: "Ottawa, Ontario, Canada",
    resumeBtn: "Request Resume",
    ui: {
      viewTimeline: "VIEW TIMELINE",
      hideDetails: "HIDE DETAILS",
    },
    titles: {
      experience: "Work Experience",
      education: "Education",
      projects: "Featured Projects",
      stack: "STACK",
    },
    jobs: {
      uottawaDev: {
        title: "Software Developer",
        type: "Internship / Part-time",
        history: [
          { role: "Part-time", period: "Sep 2025 – Present" },
          { role: "CO-OP", period: "May 2024 – Aug 2024" },
          { role: "Part-time", period: "Jan 2024 – Apr 2024" },
          { role: "CO-OP", period: "Sep 2024 – Dec 2024" },
        ]
      },
      uottawaTA: {
        title: "Teaching Assistant",
        type: "Part-time",
        history: [
          { role: "Digital Systems", period: "Jan 2026 – Present" },
          { role: "Intro to Software Eng.", period: "Sep 2025 – Dec 2025" },
          { role: "Python", period: "Jan 2025 – Apr 2025" },
        ]
      },
      kruger: {
        title: "Data Analyst",
        type: "Internship"
      }
    },
    education: {
      degree: "BASc in Software Engineering",
      details: <>Dean's Honour List (2023, 2024, 2025) <br/> GPA: 8.4/10</>
    },
    projects: {
      autoapply: {
        title: "AutoApply AI Agent",
        desc: "Intelligent bot using Generative AI & Selenium to automate job applications."
      },
      fitness: {
        title: "Fitness Coaching App",
        desc: "Full-stack platform with personalized workout plans and secure JWT auth."
      },
      vora: {
        title: "Luxury E-Commerce App",
        desc: "An ultra-premium e-commerce shop disguised as a futuristic design laboratory. "
      },
      pms: {
        title: <>Pharmacy Management <br/> System</>,
        desc: "Modular backend for prescription and inventory management using Clean Architecture and DDD. Used Docker and CI/CD automation."
      }
    }
  },
  fr: {
    role: "Étudiant en Génie Logiciel",
    availablity: "Disponible pour stage Été 2026 CO-OP",
    location: "Ottawa, Ontario, Canada",
    resumeBtn: "Demander le CV",
    ui: {
      viewTimeline: "VOIR CHRONOLOGIE",
      hideDetails: "MASQUER DÉTAILS",
    },
    titles: {
      experience: "Expérience",
      education: "Formation",
      projects: "Projets",
      stack: "COMPÉTENCES",
    },
    jobs: {
      uottawaDev: {
        title: "Développeur Logiciel",
        type: "Stage / Temps partiel",
        history: [
          { role: "Temps partiel", period: "Sep 2025 – Présent" },
          { role: "CO-OP", period: "Mai 2024 – Août 2024" },
          { role: "Temps partiel", period: "Jan 2024 – Avr 2024" },
          { role: "CO-OP", period: "Sep 2024 – Déc 2024" },
        ]
      },
      uottawaTA: {
        title: "Assistant d'Enseignement",
        type: "Temps partiel",
        history: [
          { role: "Systèmes Numériques", period: "Jan 2026 – Présent" },
          { role: "Intro au Génie Logiciel", period: "Sep 2025 – Déc 2025" },
          { role: "Python", period: "Jan 2025 – Avr 2025" },
        ]
      },
      kruger: {
        title: "Analyste de Données",
        type: "Stage"
      }
    },
    education: {
      degree: "BASc en Génie Logiciel",
      details: <>Palmarès du Doyen (2023, 2024, 2025) <br/> Moyenne: 8.4/10</>
    },
    projects: {
      autoapply: {
        title: "AutoApply AI Agent",
        desc: "Bot intelligent utilisant l'IA générative et Selenium pour automatiser les candidatures."
      },
      fitness: {
        title: "App de Coaching Fitness",
        desc: "Plateforme full-stack avec plans d'entraînement personnalisés et auth JWT sécurisée."
      },
      vora: {
        title: "App de Boutique de Luxe",
        desc: "Une boutique en ligne ultra-premium déguisée en laboratoire de design futuriste."
      },
      pms: {
        title: "Système de Gestion de Pharmacie",
        desc: "Backend modulaire pour la gestion des prescriptions et inventaires (Clean Architecture & DDD). Conteneurisé avec Docker et automatisé CI/CD."
      },
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const t = CONTENT[lang];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 selection:bg-indigo-500/30 font-sans">

      <div className="fixed inset-0 z-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      <div className="fixed bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))] z-0 pointer-events-none"></div>

      <div className="relative z-10 px-4 py-8 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
          <aside className="lg:col-span-4 lg:h-screen lg:sticky lg:top-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-neutral-800/40 border border-white/10 rounded-[2.5rem] p-5 backdrop-blur-2xl shadow-2xl shadow-black/50 relative"
            >
              {/* --- LANGUAGE BUTTON --- */}
              <div className="absolute top-6 right-6 z-20">
                <button
                  onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                  className="group flex items-center gap-2 px-1 py-1 bg-neutral-900/50 border border-white/10 rounded-full hover:border-indigo-500/50 transition-all cursor-pointer"
                >
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${lang === 'en' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-neutral-500 hover:text-white'}`}>
                    EN
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${lang === 'fr' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-neutral-500 hover:text-white'}`}>
                    FR
                  </span>
                </button>
              </div>

              {/* Profile Header */}
              <div className="relative group w-20 h-20 mb-10">
                <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative w-full h-full bg-neutral-900 rounded-[1.5rem] flex items-center justify-center border border-white/10 shadow-inner">
                  <span className="text-3xl font-mono font-black text-white">
                    <span className="text-indigo-500"></span>R<span className="text-indigo-500"></span>
                  </span>
                </div>
              </div>

              <div className="mb-6 min-h-[140px]"> 
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight mb-4">
                    <Typewriter text={"Rayan\nSaadani\u00A0Hassani"} />
                </h1>
                <p className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-[11px] mt-4">
                  {t.role}
                </p>
              </div>

              {/* Badge Statut */}
              <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">
                  {t.availablity}
                </span>
              </div>

              {/* Liste Infos */}
              <div className="space-y-4 mb-10 border-t border-white/5 pt-8">
                <SidebarLink icon={<MapPin size={18}/>} label={t.location} />
                <SidebarLink icon={<GraduationCap size={18}/>} label="uOttawa" />
              </div>

              {/* ACTIONS  */}
              <div className="flex items-center gap-3 mt-auto">
                <a href="mailto:shmrayan@gmail.com?subject=Resume Request&body=Hello Rayan, we need to nerf you immediately because you are too good. Jokes aside, I would like to see your resume." 
                  className="flex-grow bg-white text-black h-14 rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 shadow-lg">
                  <Mail size={18}/> {t.resumeBtn}
                </a>
            
                <a href="https://www.linkedin.com/in/rayan-saadani-hassani/" target="_blank" 
                  className="w-14 h-14 flex items-center justify-center bg-neutral-800/60 border border-white/10 rounded-2xl text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300">
                  <Linkedin size={22} strokeWidth={2.5} />
                </a>
                
                <a href="https://github.com/ShmRayan" target="_blank"
                  className="w-14 h-14 flex items-center justify-center bg-neutral-800/60 border border-white/10 rounded-2xl text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300">
                  <Github size={22} strokeWidth={2.5} />
                </a>
              </div>
            </motion.div>
          </aside>

          <main className="lg:col-span-8 flex flex-col gap-16">
            
            {/* SECTION: EXPERIENCE */}
            <Reveal><section>
              <div className="mb-6 ml-2">
                <SectionHeader icon={<Briefcase size={18}/>} title={t.titles.experience} />
              </div>

              <div className="bg-neutral-800/50 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/50">
                <div className="space-y-16">
    
                  {/* GROUP 1 : UOTTAWA */}
                  <CompanyGroup logo="/uottawa.png" company="University of Ottawa" location="Ottawa">
                      <RoleItem 
                        title={t.jobs.uottawaDev.title}
                        date="Sep 2024 – Present"
                        type={t.jobs.uottawaDev.type}
                        tags={['.NET', 'C#', 'GitLab CI/CD', 'Azure AD', 'SQL Server']}
                        uiLabels={t.ui}
                        history={t.jobs.uottawaDev.history}
                      />
                      <RoleItem 
                        title={t.jobs.uottawaTA.title}
                        date="Jan 2025 – Present"
                        type={t.jobs.uottawaTA.type}
                        tags={['Python', 'Java','Algorithms', 'OOP',]}
                        uiLabels={t.ui}
                        history={t.jobs.uottawaTA.history}
                      />
                  </CompanyGroup>

                  {/* GROUP 2 : KRUGER */}
                  <CompanyGroup logo="/kruger.png" company="Kruger Products" location="Gatineau">
                      <RoleItem 
                        title={t.jobs.kruger.title}
                        date="Jan 2024 – May 2024"
                        type={t.jobs.kruger.type}
                        tags={['Power BI', 'MySQL', 'Power Automate']}
                        uiLabels={t.ui}
                      />
                  </CompanyGroup>

              </div>
              </div>
            </section>
          </Reveal>
            
            {/* SECTION: EDUCATION */}
            <Reveal>
              <section>
                <div className="mb-6 ml-2">
                  <SectionHeader icon={<GraduationCap size={18}/>} title={t.titles.education} />
                </div>
                
                <div className="bg-neutral-800/50 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/50">
                    <div className="space-y-12">
                        <CompanyGroup logo="/uottawa.png" company="University of Ottawa" location="OTTAWA">
                            <RoleItem 
                              title={t.education.degree}
                              date="Sep 2022 – Dec 2026"
                              type={t.education.details}
                              tags={['CO-OP', 'Engineering']}
                              uiLabels={t.ui}
                            />
                        </CompanyGroup>
                    </div>
                </div>
              </section>
            </Reveal>
            
            {/* SECTION: PROJECTS */}
            <Reveal>
               <section>
                <div className="mb-6 ml-2">
                  <SectionHeader icon={<Terminal size={18}/>} title={t.titles.projects} />
                </div>
                
                <div className="bg-neutral-800/50 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <ProjectShowcase 
                        title={t.projects.autoapply.title}
                        desc={t.projects.autoapply.desc}
                        stack={['Python', 'Selenium', 'SQLAlchemy','scikit-learn', 'NumPy']}
                        links={{ repo: "https://github.com/ShmRayan/ApplyAI" }}
                        color="from-indigo-500/20 to-purple-500/20"
                        //className="md:col-span-2 md:w-[calc(50%-10px)] mx-auto" //center
                      />
                      <ProjectShowcase 
                          title={t.projects.pms.title}
                          desc={t.projects.pms.desc}
                          stack={['Java', 'Spring Boot', 'Docker', 'MySQL']}
                          links={{ repo: "https://github.com/ShmRayan/UYP-PMS" }} 
                          color="from-orange-500/20 to-red-500/20"
                        />
                      <ProjectShowcase 
                        title={t.projects.fitness.title}
                        desc={t.projects.fitness.desc}
                        stack={['React', 'Bootstrap','JWT',  'Fitness']}
                        links={{ repo: "https://github.com/ShmRayan/FitRay", demo: "https://shmrayan.github.io/FitRay" }}
                        color="from-blue-500/20 to-cyan-500/20"
                      />
                      <ProjectShowcase 
                        title={t.projects.vora.title}
                        desc={t.projects.vora.desc}
                        stack={['React', 'Tailwindcss', 'Luxury']}
                        links={{ repo: "https://github.com/ShmRayan/Vora", demo: "https://shmrayan.github.io/Vora" }}
                        color="from-emerald-500/20 to-teal-500/20"                         
                      />                                           
                  </div>
                </div>
              </section>
            </Reveal>
              

            {/* SECTION: STACK */}
            <Reveal>
              <section>
                <div className="mb-6 ml-2">
                  <SectionHeader icon={<Code size={18}/>} title={t.titles.stack} />
                </div>

                <div className="bg-neutral-800/50 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/50">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">    
                      <TechCard name="Python" slug="/icons/python-svgrepo-com.svg" />                   
                      <TechCard name="React" slug="react" />                                           
                      <TechCard name="JavaScript" slug="javascript" />
                      <TechCard name="TypeScript" slug="typescript" />                      
                      <TechCard name="Java" slug="/icons/java-svgrepo-com.svg" />  
                      <TechCard name=".NET" slug="dotnet" />
                      <TechCard name="C#" slug="/icons/csharp-svgrepo-com.svg" />  
                      <TechCard name="SQL" slug="/icons/database-svgrepo-com.svg" /> 
                      <TechCard name="Docker" slug="docker" />
                      <TechCard name="CI/CD" slug="/icons/systems-devops-cicd-pipeline-svgrepo-com.svg" /> 
                      <TechCard name="Git" slug="/icons/git-svgrepo-com.svg" />
                      <TechCard name="Power BI" slug="/icons/powerbi.png" />
                  </div>
                </div>
              </section>

            </Reveal>
              
            <footer className="py-12 border-t border-white/5 text-neutral-600 text-[15px] uppercase tracking-[0.2em] flex justify-between">
              <span>© 2025 Rayan Saadani Hassani</span>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-neutral-800/50 border border-white/10 rounded-xl text-indigo-400 shadow-sm">
        {icon}
      </div>
      <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-400">
        {title}
      </h3>
    </div>
  );
}

function SidebarLink({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-3 text-neutral-400 group cursor-default">
      <span className="text-indigo-400/80 group-hover:text-indigo-400 transition-colors duration-300">
        {icon}
      </span>
      <span className="text-[13px] group-hover:text-neutral-200 transition-colors">
        {label}
      </span>
    </div>
  );
}

function CompanyGroup({ logo, company, location, children }: any) {
  return (
    <div className="relative">
      <div className="absolute left-[24px] top-14 bottom-0 w-[2px] bg-gradient-to-b from-neutral-800 via-neutral-800 to-transparent"></div>
      
      <div className="flex gap-8">
        <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-white rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-white/5">
          <img 
            src={logo} 
            alt={company} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="flex-1 flex flex-col pt-0.5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-500">{company}</h3>
                {location && (
                    <span className="text-xs font-medium text-neutral-500 flex items-center gap-1.5 uppercase tracking-wider">
                        <MapPin size={12} /> {location}
                    </span>
                )}
            </div>
            
            <div className="flex flex-col gap-8">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
}

function RoleItem({ title, date, type, desc, tags, history, uiLabels }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group">
      <div className="absolute -left-[61px] top-[10px] w-2.5 h-2.5 rounded-full border-2 border-[#050505] bg-indigo-500 block z-20 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h4 className="text-xl font-bold text-neutral-100 tracking-tight group-hover:text-indigo-400 transition">{title}</h4>
        
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
            {history && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold hover:bg-indigo-500/20 transition-all active:scale-95"
              >
                <History size={12} />
                {isExpanded ? uiLabels.hideDetails : uiLabels.viewTimeline}
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                  <ChevronDown size={12} />
                </motion.div>
              </button>
            )}

            <span className="text-[10px] font-semibold text-neutral-300 bg-white/10 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                <Calendar size={12} className="text-indigo-400" />
                {date}
            </span>
        </div>
      </div>
      
      <div className="text-sm font-medium text-indigo-400/90 mb-3">{type}</div>
      {desc && <p className="text-sm text-neutral-300 mb-5 leading-relaxed max-w-2xl">{desc}</p>}

      <AnimatePresence>
        {isExpanded && history && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="pt-4 pb-2 ml-2 border-l-2 border-white/5 space-y-4">
              {history.map((item: any, idx: number) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-neutral-600 border border-neutral-950"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-neutral-200">{item.role}</span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex flex-wrap gap-2.5 mt-4">
        {tags.map((t: string) => (
          <span key={t} className="px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide text-neutral-300 bg-white/10 border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-indigo-500/30">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechCard({ name, slug }: { name: string, slug: string }) {
  const iconSrc = slug.startsWith('/') ? slug : `https://cdn.simpleicons.org/${slug}`;

  return (
    <div className="flex items-center gap-3 p-4 bg-neutral-800/50 border border-white/10 rounded-2xl hover:bg-neutral-700 transition duration-300 group cursor-default shadow-sm hover:border-white/20">
      <img 
        src={iconSrc} 
        alt={name}
        className="w-6 h-6 object-contain"
        onError={(e) => {
          e.currentTarget.style.opacity = '0.5';
        }}
      />
      <span className="text-sm font-bold text-neutral-300 group-hover:text-white transition">
        {name}
      </span>
    </div>
  );
}

function ProjectShowcase({ title, desc, stack, color, links, className }: any) {
  return (
    <div className={`group relative bg-neutral-800/50 border border-white/10 rounded-3xl overflow-hidden hover:bg-neutral-800 transition-all duration-500 flex flex-col hover:border-white/20 hover:shadow-xl shadow-md ${className}`}>
      <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${color} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
            {title}
          </h4>
          <div className="flex gap-2">
            {links?.repo && (
              <a href={links.repo} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition">
                <Github size={16}/>
              </a>
            )}
            
            {links?.demo && (
              <a href={links.demo} target="_blank" className="p-2 bg-indigo-500/10 rounded-lg hover:bg-indigo-500 text-indigo-400 hover:text-white transition">
                <ExternalLink size={16}/>
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-neutral-300 leading-relaxed mb-6 flex-grow">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {stack.map((s: string) => (
            <span key={s} className="flex items-center gap-1 text-[10px] font-bold text-neutral-400 bg-white/5 px-2 py-1 rounded-lg border border-white/10">
              <Sparkles size={12} className="text-indigo-500" /> {s}
            </span>
          ))}
        </div>
      </div>
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
        setDisplayText((prev) => text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsFinished(true);
      }
    }, 100); 
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="whitespace-pre-wrap inline-block">
      {displayText}
      {!isFinished && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[4px] h-[0.8em] bg-indigo-500 ml-1 align-baseline mb-[-2px]"
        />
      )}
    </span>
  );
}