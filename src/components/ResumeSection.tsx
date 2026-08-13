import React, { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import SpaceBackground from '@/components/ui/SpaceBackground';
import TextScramble from '@/components/ui/TextScramble';
import MagneticButton from '@/components/ui/MagneticButton';

const projectsData = [
  {
    id: "01",
    title: "Seeker",
    subtitle: "Interactive Career Exploration Map",
    demoUrl: "https://pathseeker.app",
    badgeText: "Live",
    badgeColor: "text-blue-400 border-blue-500/30",
    hoverGradient: "from-blue-900/40",
    hoverTitleColor: "group-hover:text-blue-400",
    categories: ["Agentic AI / LLMs"],
    description: "Seeker is a career exploration platform built specifically for Indian students. It gives students an interactive visual map of 25+ career paths organised across six clusters. Career exploration should feel like navigation, not homework.",
    points: [
      "Interactive visual map of 25+ career paths organised across 6 clusters",
      "Every career is a node on the map you can walk toward",
      "AI-powered insights using Groq API (LLama 3.3 70B) and semantic search"
    ],
    metricBadges: [
      { text: "⚡ LLaMA 3.3 70B", color: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
      { text: "🗺️ 25+ Career Clusters", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" }
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Node.js', 'Supabase', 'Python']
  },
  {
    id: "02",
    title: "Nagar Rakshak",
    subtitle: "Top 45 in Internal Smart India Hackathon 2025",
    demoUrl: "https://nagarrakshakfy.netlify.app/",
    badgeText: "Top 45",
    badgeColor: "text-indigo-400 border-indigo-500/30",
    hoverGradient: "from-indigo-900/40",
    hoverTitleColor: "group-hover:text-indigo-400",
    categories: ["Hackathons", "Agentic AI / LLMs", "Cloud & Systems"],
    description: "AI-enabled civic complaint system with GPS-based issue reporting, live tracking, and automated severity classification. Built using React (Vite), TypeScript, Supabase, and PostgreSQL.",
    points: [
      "Implemented AI-based issue prioritization and multilingual complaint support",
      "Integrated real-time updates and community upvoting",
      "Designed scalable backend with secure auth and structured complaint workflow"
    ],
    metricBadges: [
      { text: "🏆 SIH 2025 Top 45", color: "bg-amber-500/10 text-amber-300 border-amber-500/20" },
      { text: "📍 Real-Time GPS Tracking", color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20" }
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'AI/ML']
  },
  {
    id: "03",
    title: "Agrasar",
    subtitle: "Top 5 in Udhbhav Uttrakhand AI Hackathon (Level 1)",
    demoUrl: null,
    badgeText: "Top 5",
    badgeColor: "text-fuchsia-400 border-fuchsia-500/30",
    hoverGradient: "from-fuchsia-900/40",
    hoverTitleColor: "group-hover:text-fuchsia-400",
    categories: ["Hackathons", "Agentic AI / LLMs"],
    description: "An integrated digital platform connecting rural citizens with government schemes, grievance systems, and local opportunities.",
    points: [
      "Developed \"GramSathi\" – multilingual AI chatbot for citizen assistance",
      "Built modules for scheme discovery, tracking, and grievance redressal",
      "Designed scalable data architecture for structured public service workflows"
    ],
    metricBadges: [
      { text: "🏆 Top 5 AI Hackathon", color: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20" },
      { text: "🤖 GramSathi Multilingual AI", color: "bg-pink-500/10 text-pink-300 border-pink-500/20" }
    ],
    stack: ['Gen-AI', 'Full Stack', 'Cloud', 'Multilingual AI']
  },
  {
    id: "04",
    title: "Serverless Image Processing System",
    subtitle: "AWS Cloud Native Architecture",
    demoUrl: null,
    badgeText: "AWS",
    badgeColor: "text-purple-400 border-purple-500/30",
    hoverGradient: "from-purple-900/40",
    hoverTitleColor: "group-hover:text-purple-400",
    categories: ["Cloud & Systems"],
    description: "Cloud-native application leveraging AWS Lambda, S3, IAM, and Rekognition for automated image processing.",
    points: [
      "Implemented serverless workflows for resizing, grayscale conversion, object detection, and text extraction",
      "Enabled S3 versioning and secure IAM role-based access",
      "Optimized Lambda resource handling for large image processing"
    ],
    metricBadges: [
      { text: "☁️ AWS Serverless", color: "bg-purple-500/10 text-purple-300 border-purple-500/20" },
      { text: "👁️ Rekognition Automation", color: "bg-violet-500/10 text-violet-300 border-violet-500/20" }
    ],
    stack: ['AWS Lambda', 'S3', 'Rekognition', 'IAM', 'Serverless']
  },
  {
    id: "05",
    title: "Crime Lens",
    subtitle: "Agentic AI Investigation Co-Pilot — Karnataka State Police",
    demoUrl: "https://crimelens-60080209740.development.catalystserverless.in/app/",
    badgeText: "Datathon 2026",
    badgeColor: "text-cyan-400 border-cyan-500/30",
    hoverGradient: "from-cyan-900/40",
    hoverTitleColor: "group-hover:text-cyan-400",
    categories: ["Agentic AI / LLMs", "Cloud & Systems", "Hackathons"],
    description: "Crime Lens is an agentic AI crime-intelligence platform built for Datathon 2026, centered around IRIS, a bilingual (English + Kannada) conversational investigation co-pilot for law enforcement.",
    points: [
      "Architected a multi-agent orchestration layer (Analytics, Graph, Case Intelligence, Prediction, Governance agents) with Python, FastAPI, and the Gemini API",
      "Built an explainable-AI governance layer generating confidence scores, reasoning trails, and an immutable audit log for every response",
      "Achieved 0.38s latency at 70.5-99.4% accuracy on vector similarity search, and 0.12s latency for AI fraud-risk verification"
    ],
    metricBadges: [
      { text: "⚡ 0.38s Vector Latency", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
      { text: "🛡️ Explainable AI Governance", color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" },
      { text: "⚡ 0.12s Fraud Risk Verification", color: "bg-teal-500/10 text-teal-300 border-teal-500/20" }
    ],
    stack: ['Python', 'FastAPI', 'Gemini API', 'Multi-Agent Systems', 'Explainable AI']
  }
];

const ResumeSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Agentic AI / LLMs', 'Cloud & Systems', 'Hackathons'];

  return (
    <div className="relative text-white selection:bg-indigo-500/30 overflow-hidden min-h-screen">
      
      <div className="fixed inset-0 w-full h-screen z-0">
        <SpaceBackground />
      </div>
      
      {/* Deep Space Atmosphere - hidden on mobile for performance */}
      <div className="hidden md:block fixed top-0 right-0 w-[60rem] h-[60rem] bg-indigo-900/10 blur-[100px] rounded-full z-0 pointer-events-none mix-blend-screen" />
      <div className="hidden md:block fixed bottom-0 left-0 w-[60rem] h-[60rem] bg-fuchsia-900/10 blur-[100px] rounded-full z-0 pointer-events-none mix-blend-screen" />

      <section className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-12 py-16 md:py-32">
        
        {/* SECTION: PROFILE */}
        <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-32 scroll-mt-24">
          {/* Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <Reveal>
              <h2 className="text-[10vw] lg:text-[8rem] font-heading font-bold tracking-tighter leading-[0.8] mb-4 text-white/80 hover:text-white transition-colors duration-700">
                <TextScramble text="ORBIT" />
              </h2>
              <div className="h-[1px] w-24 bg-white/20 my-8" />
              <p className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                {'// Identification_Data'}
              </p>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="glass-panel rounded-3xl p-6 md:p-16">
              <Reveal delay={0.1}>
                <div className="space-y-6 text-lg md:text-3xl font-light text-gray-200 leading-tight mb-8 md:mb-12">
                  <p>
                    I build intelligent, scalable systems at the intersection of <span className="text-white font-medium">AI</span>, <span className="text-white font-medium">backend engineering</span>, and <span className="text-white font-medium">cloud architecture</span>.
                  </p>
                  <p>
                    As a <span className="text-white font-medium">final-year</span> <span className="text-white font-medium">B.Tech Computer Science</span> student specializing in Cloud Computing and Virtualization Technology at UPES, Dehradun, I design production-ready applications using <span className="text-white font-medium">AWS</span> and modern backend technologies, and build <span className="text-white font-medium">agentic AI</span> and <span className="text-white font-medium">LLM-powered systems</span> that ship to real users. I focus on solving real-world problems through clean architecture and scalable design.
                  </p>
                  <p className="text-indigo-300">
                    Always building. Always improving. Always aiming for impact.
                  </p>
                  <p className="text-xs md:text-sm font-mono text-gray-400">
                    Powered by Claude, Gemini CLI, Antigravity, Codex, and Perplexity — I build fast without cutting corners on security or code quality.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                  <MagneticButton className="px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-heading font-medium tracking-wide text-xs md:text-sm uppercase hover:bg-gray-200 transition-colors">
                    <a href="https://drive.google.com/file/d/1r9ibw6PWI8OzuN6T_cBP0640E2FObBYG/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
                  </MagneticButton>
                  <MagneticButton className="px-6 py-3 md:px-8 md:py-4 border border-white/20 rounded-full font-heading font-medium tracking-wide text-xs md:text-sm uppercase hover:bg-white/10 transition-colors">
                    <a href="https://github.com/Shadan1221" target="_blank" rel="noopener noreferrer">View GitHub</a>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* SECTION: MISSIONS (Work) */}
        <div id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-32 scroll-mt-24">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
             <Reveal>
              <h2 className="text-[10vw] lg:text-[8rem] font-heading font-bold tracking-tighter leading-[0.8] mb-4 text-white/80 hover:text-white transition-colors duration-700">
                <TextScramble text="LOGS" />
              </h2>
              <p className="font-mono text-xs tracking-widest text-gray-500 uppercase mt-8">
                {'// Operational_History'}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid gap-6">
            {[
              {
                company: "Innoventory Solutions",
                period: "Nov 2025 - May 2026 • 7 mos",
                roles: [
                  {
                    title: "Software Engineer Intern",
                    period: "Nov 2025 - May 2026",
                    desc: "Engineered professional software portals including cloud storage drive and technical portal, and conducted machine learning research for intelligent inventory optimization.",
                    stack: ["PHP", "MySQL", "System Design", "Security", "AI/ML", "Python"]
                  }
                ]
              },
              {
                company: "Norma AI",
                period: "March 2026 - July 2026 • 5 mos",
                roles: [
                  {
                    title: "AI and Cloud Computing Intern",
                    period: "March 2026 - July 2026",
                    desc: "Reduced production LLM inference latency by 57% (700ms to 300ms) while engineering production AI agents that automated appointment booking, rescheduling, cancellations, and follow-ups across voice and WhatsApp channels for a WhatsApp-first healthcare platform connecting patients to clinics across India and the UAE. Built real-time voice AI pipelines using Gemini, Twilio, and ElevenLabs TTS, and developed OCR pipelines to extract and structure patient information from medical documents.",
                    metrics: [
                      "⚡ 57% LLM Latency Reduction (700ms → 300ms)",
                      "🎙️ Voice AI & WhatsApp Agents"
                    ],
                    stack: ["Agentic AI", "LLM Orchestration", "Voice AI", "Gemini API", "Twilio", "OCR"]
                  }
                ]
              },
              {
                company: "Roots2Bloom",
                period: "2024",
                roles: [
                  {
                    title: "Social Intern",
                    period: "June-July 2024",
                    desc: "Analyzed digital engagement metrics and implemented automated reporting tools for community growth.",
                    stack: ["Analytics", "Automation", "Strategy"]
                  }
                ]
              }
            ].map((exp, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6 md:p-12 group hover:border-white/30 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-4 md:mb-8">
                  <h3 className="text-2xl md:text-4xl font-heading font-medium text-white mb-2">{exp.company}</h3>
                  <span className="font-mono text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                
                <div className="space-y-12">
                  {exp.roles.map((job, j) => (
                    <div key={j} className="relative pl-8 border-l border-white/10 last:border-0 pb-2">
                      <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-4">
                        <h4 className="text-xl md:text-2xl font-heading font-medium text-indigo-200">{job.title}</h4>
                        <span className="font-mono text-xs text-gray-500">{job.period}</span>
                      </div>

                      {/* Highlight Metric Badges */}
                      {job.metrics && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.metrics.map((m, mIdx) => (
                            <span
                              key={mIdx}
                              className="inline-flex items-center text-xs font-mono font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">{job.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        {job.stack.map((tag, k) => (
                          <span key={k} className="text-[10px] font-mono uppercase tracking-wider border border-white/10 px-3 py-1 rounded-full text-gray-500 group-hover:text-white group-hover:border-white/30 transition-all">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: CONSTELLATIONS (Projects) */}
        <div id="projects" className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-32 scroll-mt-24">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
             <Reveal>
              <h2 className="text-[10vw] lg:text-[6rem] font-heading font-bold tracking-tighter leading-[0.8] mb-4 text-white/80 hover:text-white transition-colors duration-700">
                <TextScramble text="SYSTEMS" />
              </h2>
              <p className="font-mono text-xs tracking-widest text-gray-500 uppercase mt-8">
                {'// Deployed_Units'}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-4 border-b border-white/10 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-white text-black font-semibold shadow-lg shadow-white/10 scale-105'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Filtered Projects Grid */}
            {projectsData
              .filter(project => activeCategory === 'All' || project.categories.includes(activeCategory))
              .map((project) => (
                <div
                  key={project.id}
                  className="glass-panel rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[400px] group relative overflow-hidden transition-all duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-heading text-xl bg-black/50 backdrop-blur-md">
                        {project.id}
                      </div>
                      <div className="flex gap-2 items-center">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-white uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors"
                          >
                            Live Demo
                          </a>
                        )}
                        <span className={`font-mono text-xs uppercase tracking-widest border px-3 py-1 rounded-full ${project.badgeColor}`}>
                          {project.badgeText}
                        </span>
                      </div>
                    </div>

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block ${project.hoverTitleColor} transition-colors`}
                      >
                        <h3 className="text-3xl md:text-4xl font-heading font-medium mb-3 leading-tight">{project.title}</h3>
                        <p className="text-sm text-gray-500 font-mono mb-4">{project.subtitle}</p>
                      </a>
                    ) : (
                      <div>
                        <h3 className="text-3xl md:text-4xl font-heading font-medium mb-3 leading-tight">{project.title}</h3>
                        <p className="text-sm text-gray-500 font-mono mb-4">{project.subtitle}</p>
                      </div>
                    )}

                    <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>

                    {/* Metric Badges */}
                    {project.metricBadges && project.metricBadges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.metricBadges.map((mb, mbK) => (
                          <span key={mbK} className={`text-xs font-mono font-medium px-3 py-1 rounded-full border backdrop-blur-md ${mb.color}`}>
                            {mb.text}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mb-6">
                      {project.points.map((pt, ptIdx) => (
                        <li key={ptIdx}>• {pt}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 border-t border-white/10 pt-6 flex flex-wrap gap-2">
                    {project.stack.map((t, k) => (
                      <span key={k} className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* SECTION: TECH MATRIX */}
        <div id="skills" className="mb-20 md:mb-40 scroll-mt-24">
          <Reveal>
            <h2 className="text-[8vw] lg:text-[5rem] font-heading font-bold tracking-tighter uppercase mb-8 md:mb-12 text-white/80">
              <TextScramble text="CAPABILITIES" />
            </h2>
            <div className="border-y border-white/10 py-8 md:py-12">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-32 md:gap-y-8 transition-opacity duration-700">
                {['Java', 'Python', 'AWS', 'Backend', 'Agentic AI', 'LLM', 'RAG', 'Cloud Computing', 'Node.js', 'React', 'SQL', 'Supabase', 'PostgreSQL', 'PHP', 'Docker', 'DevOps', 'APIs'].map((tech, i) => (
                  <h3 key={i} className="text-2xl md:text-6xl font-heading font-bold text-transparent text-stroke select-none cursor-default">
                    {tech}
                  </h3>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* FOOTER: SIGNAL */}
        <footer className="relative pt-12 md:pt-20 pb-10">
          <div className="flex flex-col items-center justify-center text-center">
            <Reveal>
              <p className="font-mono text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] text-gray-500 uppercase mb-6 md:mb-8">End of Transmission</p>
              <h2 className="text-[12vw] md:text-[15vw] font-heading font-black leading-none tracking-tighter mb-8 md:mb-12 mix-blend-overlay opacity-80">
                <TextScramble text="CONNECT" />
              </h2>
            </Reveal>
            
            <div className="flex flex-col gap-4 md:flex-row md:gap-12 z-20 w-full px-4 md:w-auto md:px-0">
              <a href="mailto:shadantaiyabi@gmail.com" className="w-full md:w-auto">
                <MagneticButton className="w-full md:w-auto px-6 py-4 md:px-10 md:py-5 bg-white text-black rounded-full font-heading font-bold text-sm md:text-lg tracking-wider hover:scale-105 transition-transform text-center">
                  shadantaiyabi@gmail.com
                </MagneticButton>
              </a>
              <a href="tel:+916388599818" className="w-full md:w-auto">
                <MagneticButton className="w-full md:w-auto px-6 py-4 md:px-10 md:py-5 border border-white/20 bg-black/50 backdrop-blur-md rounded-full font-heading font-bold text-sm md:text-lg tracking-wider hover:bg-white hover:text-black transition-all text-center">
                  +91 6388599818
                </MagneticButton>
              </a>
            </div>

            <div className="mt-16 md:mt-24 flex gap-6 md:gap-8">
               {[
                 { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmad-shadan-taiyabi-4697a4253/' },
                 { name: 'GitHub', url: 'https://github.com/Shadan1221' },
                 { name: 'Gmail', url: 'mailto:shadantaiyabi@gmail.com' }
               ].map((social, i) => (
                 <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="text-sm font-mono uppercase tracking-widest text-gray-600 hover:text-white transition-colors">
                   {social.name}
                 </a>
               ))}
            </div>
          </div>
        </footer>

      </section>
    </div>
  );
};

export default ResumeSection;
