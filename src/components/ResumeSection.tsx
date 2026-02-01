import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import SpaceBackground from '@/components/ui/SpaceBackground';
import TextScramble from '@/components/ui/TextScramble';
import MagneticButton from '@/components/ui/MagneticButton';

const ResumeSection = () => {
  return (
    <div className="relative text-white selection:bg-indigo-500/30 overflow-hidden min-h-screen">
      
      <SpaceBackground />
      
      {/* Deep Space Atmosphere */}
      <div className="fixed top-0 right-0 w-[60rem] h-[60rem] bg-indigo-900/10 blur-[180px] rounded-full z-0 pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-0 left-0 w-[60rem] h-[60rem] bg-fuchsia-900/10 blur-[180px] rounded-full z-0 pointer-events-none mix-blend-screen" />

      <section className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-12 py-32">
        
        {/* SECTION: PROFILE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          {/* Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <Reveal>
              <h2 className="text-[12vw] lg:text-[8rem] font-heading font-bold tracking-tighter leading-[0.8] mb-4 text-white/80 hover:text-white transition-colors duration-700">
                <TextScramble text="ORBIT" />
              </h2>
              <div className="h-[1px] w-24 bg-white/20 my-8" />
              <p className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                // Identification_Data
              </p>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="glass-panel rounded-3xl p-8 md:p-16">
              <Reveal delay={0.1}>
                <p className="text-2xl md:text-4xl font-light text-gray-200 leading-tight mb-12">
                  Architecting <span className="text-white font-medium">hyperscale cloud systems</span> and engineering 
                  <span className="text-white font-medium"> resilient backends</span>. 
                  Bridging the gap between raw computational power and elegant user experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <MagneticButton className="px-8 py-4 bg-white text-black rounded-full font-heading font-medium tracking-wide text-sm uppercase hover:bg-gray-200 transition-colors">
                    Download Resume
                  </MagneticButton>
                  <MagneticButton className="px-8 py-4 border border-white/20 rounded-full font-heading font-medium tracking-wide text-sm uppercase hover:bg-white/10 transition-colors">
                    View GitHub
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* SECTION: MISSIONS (Work) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
             <Reveal>
              <h2 className="text-[12vw] lg:text-[8rem] font-heading font-bold tracking-tighter leading-[0.8] mb-4 text-white/80 hover:text-white transition-colors duration-700">
                LOGS
              </h2>
              <p className="font-mono text-xs tracking-widest text-gray-500 uppercase mt-8">
                // Operational_History
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid gap-6">
            {[
              {
                role: "Software Engineer Intern",
                company: "Innoventory Solutions",
                period: "2025 - Present",
                desc: "Engineered high-availability backend microservices. Optimized database queries reducing latency by 40%.",
                stack: ["PHP", "System Design", "Security"]
              },
              {
                role: "Social Intern",
                company: "Roots2Bloom",
                period: "2024",
                desc: "Analyzed digital engagement metrics and implemented automated reporting tools for community growth.",
                stack: ["Analytics", "Automation", "Strategy"]
              }
            ].map((job, i) => (
              <div key={i} className="glass-panel rounded-2xl p-8 md:p-12 group hover:border-white/30 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-6">
                  <h3 className="text-3xl md:text-4xl font-heading font-medium text-white mb-2">{job.role}</h3>
                  <span className="font-mono text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">{job.period}</span>
                </div>
                <p className="text-xl text-indigo-200 mb-6">{job.company}</p>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">{job.desc}</p>
                <div className="flex gap-3">
                  {job.stack.map((tag, j) => (
                    <span key={j} className="text-xs font-mono uppercase tracking-wider border border-white/10 px-3 py-1 rounded-full text-gray-400 group-hover:text-white group-hover:border-white/30 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: CONSTELLATIONS (Projects) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
             <Reveal>
              <h2 className="text-[10vw] lg:text-[6rem] font-heading font-bold tracking-tighter leading-[0.8] mb-4 text-white/80 hover:text-white transition-colors duration-700">
                SYSTEMS
              </h2>
              <p className="font-mono text-xs tracking-widest text-gray-500 uppercase mt-8">
                // Deployed_Units
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel rounded-[2rem] p-10 flex flex-col justify-between min-h-[500px] group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-heading text-xl bg-black/50 backdrop-blur-md">01</div>
                  <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest border border-indigo-500/30 px-3 py-1 rounded-full">SIH 2025</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-medium mb-4 leading-tight">Nagar Rakshak</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  AI-driven civic issue reporting platform. Features real-time severity detection and geospatial tracking.
                </p>
              </div>
              
              <div className="relative z-10 border-t border-white/10 pt-6 flex flex-wrap gap-2">
                {['React', 'Supabase', 'AI/ML'].map((t, k) => (
                  <span key={k} className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-md">{t}</span>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-10 flex flex-col justify-between min-h-[500px] group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-heading text-xl bg-black/50 backdrop-blur-md">02</div>
                  <span className="font-mono text-xs text-fuchsia-400 uppercase tracking-widest border border-fuchsia-500/30 px-3 py-1 rounded-full">UDBHAV 2025</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-medium mb-4 leading-tight">Agrasar</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Rural services ecosystem bridging digital divides with Generative AI linguistic models.
                </p>
              </div>
              
              <div className="relative z-10 border-t border-white/10 pt-6 flex flex-wrap gap-2">
                {['Gen-AI', 'Full Stack', 'Cloud'].map((t, k) => (
                  <span key={k} className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: TECH MATRIX */}
        <div className="mb-40">
          <Reveal>
            <h2 className="text-[8vw] lg:text-[5rem] font-heading font-bold tracking-tighter uppercase mb-12 text-white/80">
              Capabilities
            </h2>
            <div className="border-y border-white/10 py-12">
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 md:gap-x-32 opacity-50 hover:opacity-100 transition-opacity duration-700">
                {['AWS', 'Next.js', 'Python', 'Java', 'Docker', 'PostgreSQL', 'Cryptography'].map((tech, i) => (
                  <h3 key={i} className="text-4xl md:text-6xl font-heading font-bold text-transparent text-stroke select-none cursor-default">
                    {tech}
                  </h3>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* FOOTER: SIGNAL */}
        <footer className="relative pt-20 pb-10">
          <div className="flex flex-col items-center justify-center text-center">
            <Reveal>
              <p className="font-mono text-sm tracking-[0.5em] text-gray-500 uppercase mb-8">End of Transmission</p>
              <h2 className="text-[15vw] font-heading font-black leading-none tracking-tighter mb-12 mix-blend-overlay opacity-80">
                CONNECT
              </h2>
            </Reveal>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 z-20">
              <a href="mailto:shadantaiyabi@gmail.com">
                <MagneticButton className="px-10 py-5 bg-white text-black rounded-full font-heading font-bold text-lg tracking-wider hover:scale-105 transition-transform">
                  shadantaiyabi@gmail.com
                </MagneticButton>
              </a>
              <a href="tel:+916388599818">
                <MagneticButton className="px-10 py-5 border border-white/20 bg-black/50 backdrop-blur-md rounded-full font-heading font-bold text-lg tracking-wider hover:bg-white hover:text-black transition-all">
                  +91 6388599818
                </MagneticButton>
              </a>
            </div>

            <div className="mt-24 flex gap-8">
               {['LinkedIn', 'GitHub', 'Twitter'].map((social, i) => (
                 <a key={i} href="#" className="text-sm font-mono uppercase tracking-widest text-gray-600 hover:text-white transition-colors">
                   {social}
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
