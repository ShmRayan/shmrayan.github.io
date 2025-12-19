"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  MapPin, 
  GraduationCap, 
  Code, 
  Briefcase, 
  Terminal, 
  ExternalLink,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 selection:bg-indigo-500/30 font-sans">
      
      {/* 1. LUMIÈRE DU HAUT */}
      <div className="fixed inset-0 z-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      {/* 2. LUMIÈRE DU BAS (Ambiance) */}
      <div className="fixed bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))] z-0 pointer-events-none"></div>

      <div className="relative z-10 px-4 py-8 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
          {/* --- LEFT SIDEBAR (Profil Fixe) --- */}
          <aside className="lg:col-span-4 lg:h-screen lg:sticky lg:top-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // CHANGE : Fond plus clair et bordure plus forte
              className="bg-neutral-800/50 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl shadow-2xl shadow-black/50"
            >
              {/* Profile Header */}
              <div className="relative group w-24 h-24 mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center text-4xl font-black text-white border border-white/10">
                  R
                </div>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tighter text-white mb-2 leading-tight">
                Rayan <br/> Saadani Hassani
              </h1>
              <p className="text-indigo-400 font-medium tracking-wide mb-8 uppercase text-xs">
                Software Engineering Student
              </p>

              {/* Info List */}
              <div className="space-y-4 mb-10 text-sm">
                <SidebarLink icon={<MapPin size={16}/>} label="Ottawa, Ontario, Canada" />
                <SidebarLink icon={<GraduationCap size={16}/>} label="uOttawa (Dean's Honour List)" />
                <SidebarLink icon={<Code size={16}/>} label=".NET, Python, React, AWS" />
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <a href="mailto:shmrayan@gmail.com" className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 shadow-lg shadow-white/5">
                  <Mail size={18}/> Contact Me
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <SocialLink href="https://linkedin.com/in/Saadani-Hassani-Rayan" icon={<Linkedin size={20}/>} label="LinkedIn" />
                  <SocialLink href="https://github.com/ShmRayan" icon={<Github size={20}/>} label="GitHub" />
                </div>
                <a href="#" className="w-full border border-white/10 py-4 rounded-2xl font-medium hover:bg-white/5 transition flex justify-center items-center gap-2 text-neutral-400">
                  <Download size={18}/> Download Resume
                </a>
              </div>
            </motion.div>
          </aside>

          {/* --- MAIN CONTENT (Droite) --- */}
          <main className="lg:col-span-8 flex flex-col gap-16">
            
            {/* SECTION: EXPERIENCE */}
            <section>
              <div className="mb-6 ml-2">
                <SectionHeader icon={<Briefcase size={18}/>} title="Work Experience" />
              </div>

              {/* CHANGE : Fond plus clair et bordure plus forte */}
              <div className="bg-neutral-800/50 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/50">
                <div className="space-y-16">
                    {/* GROUPE 1 : UOTTAWA */}
                    <CompanyGroup logo="/uottawa.png" company="University of Ottawa">
                        <RoleItem 
                          title="Software Developer"
                          date="Sep 2024 – Present"
                          type="Internship / Part-time"
                          tags={['.NET', 'C#', 'GitLab CI', 'Azure AD', 'SQL']}
                        />
                        <RoleItem 
                          title="Teaching Assistant"
                          date="Jan 2025 – Present"
                          type="Part-time"
                          desc="Mentoring 100+ students in Python, Digital Systems, and OOP."
                          tags={['Python', 'Algorithms', 'Mentoring']}
                        />
                    </CompanyGroup>

                    {/* GROUPE 2 : KRUGER */}
                    <CompanyGroup logo="/kruger.png" company="Kruger Products">
                        <RoleItem 
                          title="Data Analyst"
                          date="Jan 2024 – May 2024"
                          type="Internship"
                          tags={['Power BI', 'SQL', 'Power Automate']}
                        />
                    </CompanyGroup>
                </div>
              </div>
            </section>

            {/* SECTION: EDUCATION */}
            <section>
               <div className="mb-6 ml-2">
                 <SectionHeader icon={<GraduationCap size={18}/>} title="Education" />
               </div>
               
               {/* CHANGE : Fond plus clair et bordure plus forte */}
               <div className="bg-neutral-800/50 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/50">
                   <div className="space-y-12">
                      <CompanyGroup logo="/uottawa.png" company="University of Ottawa">
                          <RoleItem 
                            title="BASc in Software Engineering"
                            date="Sep 2022 – Dec 2026"
                            type="Dean's Honour List (GPA: 8.4/10)"
                            desc="Relevant Coursework: Data Structures & Algorithms, Operating Systems, Software QA, User Interfaces, Networking."
                            tags={['CO-OP', 'Engineering']}
                          />
                      </CompanyGroup>
                   </div>
               </div>
            </section>

            {/* SECTION: PROJECTS */}
            <section>
              <div className="mb-6 ml-2">
                <SectionHeader icon={<Terminal size={18}/>} title="Featured Projects" />
              </div>
              
              {/* CHANGE : Fond plus clair et bordure plus forte */}
              <div className="bg-neutral-800/50 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <ProjectShowcase 
                      title="AutoApply AI Agent"
                      desc="Intelligent bot using Generative AI & Selenium to automate job applications."
                      stack={['Python', 'Selenium', 'OpenAI']}
                      links={{ repo: "https://github.com/ShmRayan", demo: "#" }}
                      color="from-indigo-500/20 to-purple-500/20"
                    />
                    <ProjectShowcase 
                      title="Fitness Coaching App"
                      desc="Full-stack platform with personalized workout plans and secure JWT auth."
                      stack={['React', 'Node.js', 'JWT']}
                      links={{ repo: "https://github.com/ShmRayan", demo: "#" }}
                      color="from-blue-500/20 to-cyan-500/20"
                    />
                    <ProjectShowcase 
                      title="Task Management"
                      desc="Cloud-native task tracking app containerized with Docker on AWS."
                      stack={['Flask', 'Docker', 'AWS']}
                      links={{ repo: "https://github.com/ShmRayan", demo: "#" }}
                      color="from-orange-500/20 to-red-500/20"
                    />
                    <ProjectShowcase 
                      title="Online Coaching"
                      desc="UX-focused coaching platform with dynamic scheduling features."
                      stack={['React', 'Figma', 'UX']}
                      links={{ repo: "https://github.com/ShmRayan", demo: "#" }}
                      color="from-emerald-500/20 to-teal-500/20"
                    />
                </div>
              </div>
            </section>

            {/* SECTION: TECHNICAL ARSENAL */}
            <section>
              <div className="mb-6 ml-2">
                <SectionHeader icon={<Code size={18}/>} title="Technical Arsenal" />
              </div>

              {/* CHANGE : Fond plus clair et bordure plus forte */}
              <div className="bg-neutral-800/50 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Backend */}
                    <TechCard name=".NET Core" icon="🔷" color="text-blue-400" />
                    <TechCard name="Python" icon="🐍" color="text-yellow-400" />
                    <TechCard name="C#" icon="#️⃣" color="text-purple-400" />
                    <TechCard name="SQL" icon="🗄️" color="text-gray-400" />
                    {/* Frontend */}
                    <TechCard name="React" icon="⚛️" color="text-cyan-400" />
                    <TechCard name="Next.js" icon="▲" color="text-white" />
                    <TechCard name="Tailwind" icon="🌊" color="text-teal-400" />
                    {/* DevOps/Tools */}
                    <TechCard name="Docker" icon="🐳" color="text-blue-500" />
                    <TechCard name="AWS" icon="☁️" color="text-orange-400" />
                    <TechCard name="GitLab CI" icon="🦊" color="text-orange-600" />
                    <TechCard name="Power BI" icon="📊" color="text-yellow-500" />
                </div>
              </div>
            </section>

            <footer className="py-12 border-t border-white/5 text-neutral-600 text-[10px] uppercase tracking-[0.2em] flex justify-between">
              <span>© 2025 Rayan Saadani Hassani</span>
              <span>Ottawa, Canada</span>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS (PRO STYLE) ---

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
    <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition cursor-default group">
      <span className="text-neutral-600 group-hover:text-indigo-400 transition">{icon}</span>
      {label}
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a href={href} target="_blank" className="flex flex-col items-center justify-center p-4 bg-neutral-800/50 border border-white/10 rounded-2xl hover:bg-neutral-700 transition group shadow-sm">
      <span className="group-hover:scale-110 transition duration-300">{icon}</span>
    </a>
  );
}
function CompanyGroup({ logo, company, children }: any) {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-[24px] top-14 bottom-0 w-[2px] bg-gradient-to-b from-neutral-800 via-neutral-800 to-transparent"></div>
      
      <div className="flex gap-8">
        {/* Logo */}
        <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-white rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-white/5">
          <img 
            src={logo} 
            alt={company} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="flex-1 flex flex-col pt-0.5">
            {/* NOM ENTREPRISE : Plus petit, Gris, et Marge réduite */}
            <h3 className="text-lg font-semibold text-neutral-500 mb-4">{company}</h3>
            
            {/* Liste des jobs : Espace réduit entre les jobs (gap-8 au lieu de 12) */}
            <div className="flex flex-col gap-8">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
}

function RoleItem({ title, date, type, desc, tags }: any) {
  return (
    <div className="relative group">
      <div className="absolute -left-[77px] top-[10px] w-2.5 h-2.5 rounded-full border-2 border-[#050505] bg-indigo-500 hidden group-[&:not(:first-child)]:block shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h4 className="text-xl font-bold text-neutral-100 tracking-tight group-hover:text-indigo-400 transition">{title}</h4>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
            {/* CHANGE : Badge Date plus contrasté */}
            <span className="text-[10px] font-semibold text-neutral-300 bg-white/10 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                {date}
            </span>
        </div>
      </div>
      
      <div className="text-sm font-medium text-indigo-400/90 mb-3">{type}</div>
      {/* CHANGE : Texte description plus clair */}
      {desc && <p className="text-sm text-neutral-300 mb-5 leading-relaxed max-w-2xl">{desc}</p>}
      
      <div className="flex flex-wrap gap-2.5 mt-4">
        {tags.map((t: string) => (
          <span 
            key={t} 
            // CHANGE : Tags plus clairs
            className="px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide 
                      text-neutral-300 bg-white/10 border border-white/10 
                      transition-all duration-300 cursor-default shadow-sm hover:bg-white/20 hover:border-indigo-500/30 hover:text-white"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechCard({ name, icon, color }: any) {
  return (
    // CHANGE : Carte Tech plus claire
    <div className="flex items-center gap-3 p-4 bg-neutral-800/50 border border-white/10 rounded-2xl hover:bg-neutral-700 transition duration-300 group cursor-default shadow-sm">
      <span className="text-xl group-hover:scale-110 transition duration-300">{icon}</span>
      <span className={`text-sm font-bold text-neutral-300 group-hover:text-white transition ${color ? `group-hover:${color}` : ''}`}>
        {name}
      </span>
    </div>
  );
}

function ProjectShowcase({ title, desc, stack, color, links }: any) {
  return (
    // CHANGE : Carte Projet plus claire
    <div className="group relative bg-neutral-800/50 border border-white/10 rounded-3xl overflow-hidden hover:bg-neutral-800 transition-all duration-500 flex flex-col hover:border-white/20 hover:shadow-xl shadow-md">
      <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${color} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
            {title}
          </h4>
          <div className="flex gap-2">
            <a href={links?.repo} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition">
              <Github size={16}/>
            </a>
            <a href={links?.demo} target="_blank" className="p-2 bg-indigo-500/10 rounded-lg hover:bg-indigo-500 text-indigo-400 hover:text-white transition">
              <ExternalLink size={16}/>
            </a>
          </div>
        </div>
        {/* CHANGE : Description plus claire */}
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