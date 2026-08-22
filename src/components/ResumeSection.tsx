import React, { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import SpaceBackground from '@/components/ui/SpaceBackground';
import TextScramble from '@/components/ui/TextScramble';
import MagneticButton from '@/components/ui/MagneticButton';
import {
  IconBolt,
  IconRoute,
  IconMapPin,
  IconTrophy,
  IconAward,
  IconShieldCheck,
  IconCloud,
  IconEye,
  IconRobot,
  IconSparkles,
  IconBrain,
  IconGlobe,
  IconRocket,
  IconBulb,
  IconTarget,
  IconCode,
  IconMicrophone,
  IconCertificate,
  IconExternalLink,
  IconX,
  IconCheck,
  IconCpu,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub
} from '@tabler/icons-react';

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
      { text: "LLaMA 3.3 70B", icon: IconBolt, color: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
      { text: "25+ Career Clusters", icon: IconRoute, color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" }
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
      { text: "SIH 2025 Top 45", icon: IconTrophy, color: "bg-amber-500/10 text-amber-300 border-amber-500/20" },
      { text: "Real-Time GPS Tracking", icon: IconMapPin, color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20" }
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
      { text: "Top 5 AI Hackathon", icon: IconTrophy, color: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20" },
      { text: "GramSathi Multilingual AI", icon: IconRobot, color: "bg-pink-500/10 text-pink-300 border-pink-500/20" }
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
      { text: "AWS Serverless", icon: IconCloud, color: "bg-purple-500/10 text-purple-300 border-purple-500/20" },
      { text: "Rekognition Automation", icon: IconEye, color: "bg-violet-500/10 text-violet-300 border-violet-500/20" }
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
      { text: "0.38s Vector Latency", icon: IconBolt, color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
      { text: "Explainable AI Governance", icon: IconShieldCheck, color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" },
      { text: "0.12s Fraud Risk Verification", icon: IconBolt, color: "bg-teal-500/10 text-teal-300 border-teal-500/20" }
    ],
    stack: ['Python', 'FastAPI', 'Gemini API', 'Multi-Agent Systems', 'Explainable AI']
  }
];

// SECTION 1: Certifications (Only Oracle Certification)
const certificationsData = [
  {
    id: "01",
    title: "Oracle Certified Foundations Associate – OCI AI",
    issuer: "Oracle Corporation (Oracle University)",
    date: "Aug 16, 2026 • Credential ID: 330662602OCI26AICFA",
    description: "Official Oracle Cloud Infrastructure certification covering Artificial Intelligence concepts, LLM architectures, Generative AI services, Machine Learning workflows, and Responsible AI guidelines.",
    thumbnailUrl: "/certificates/thumbnails/oracle_oci_ai.webp",
    fileUrl: "/certificates/certifications/oracle_oci_ai.pdf",
    credlyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B80B0592ED333E763B441168A19F02DB7080C846717BE3098648C4423D4042D2",
    badges: [
      { text: "Oracle Certified", icon: IconAward },
      { text: "OCI AI Foundations", icon: IconCpu },
      { text: "LLMs & GenAI", icon: IconSparkles }
    ],
    hoverGradient: "from-rose-900/40",
    badgeColor: "text-rose-400 border-rose-500/30"
  }
];

// SECTION 2: Hackathons (All Hackathon Certificates)
const hackathonsData = [
  {
    id: "01",
    title: "Udbhav 2025 – AI Hackathon",
    organizer: "Dept of IT, Govt of Uttarakhand & UPES",
    rank: "Top 5 Winner",
    rankIcon: IconTrophy,
    date: "Nov 14, 2025",
    description: "Awarded Top 5 in the state-level emerging technology AI hackathon for building 'Agrasar' and 'GramSathi'—a bilingual AI public service co-pilot.",
    thumbnailUrl: "/certificates/thumbnails/udbhav_2025_top5.webp",
    fileUrl: "/certificates/hackathon/udbhav_2025_top5.jpeg",
    badges: [
      { text: "State Govt Hackathon", icon: IconAward },
      { text: "Top 5 Winner", icon: IconTrophy },
      { text: "Bilingual AI", icon: IconRobot }
    ],
    hoverGradient: "from-amber-900/40",
    badgeColor: "text-amber-400 border-amber-500/30"
  },
  {
    id: "02",
    title: "Smart India Hackathon 2025",
    organizer: "Ministry of Education & AICTE",
    rank: "SIH Top 45 Finalist",
    rankIcon: IconTrophy,
    date: "Sep 11-12, 2025",
    description: "Selected among top finalist teams in SIH 2025 for engineering 'Nagar Rakshak', an AI civic complaint system with real-time GPS reporting.",
    thumbnailUrl: "/certificates/thumbnails/sih_2025_ahmad_shadan_taiyabi.webp",
    fileUrl: "/certificates/hackathon/sih_2025_ahmad_shadan_taiyabi.pdf",
    badges: [
      { text: "Ministry of Education", icon: IconAward },
      { text: "AICTE", icon: IconCheck },
      { text: "Top 45 Finalist", icon: IconTrophy }
    ],
    hoverGradient: "from-indigo-900/40",
    badgeColor: "text-indigo-400 border-indigo-500/30"
  },
  {
    id: "03",
    title: "TCS CodeVita Season XII",
    organizer: "Tata Consultancy Services (TCS)",
    rank: "Global Rank 3,641",
    rankIcon: IconGlobe,
    date: "2024 - 2025",
    description: "Achieved Global Rank 3,641 out of 100,000+ competitive programmers worldwide in TCS CodeVita global programming contest.",
    thumbnailUrl: "/certificates/thumbnails/tcs_codevita_season_12.webp",
    fileUrl: "/certificates/hackathon/tcs_codevita_season_12.pdf",
    badges: [
      { text: "Global Contest", icon: IconGlobe },
      { text: "Rank 3641", icon: IconTrophy },
      { text: "Algorithms", icon: IconCode }
    ],
    hoverGradient: "from-cyan-900/40",
    badgeColor: "text-cyan-400 border-cyan-500/30"
  },
  {
    id: "04",
    title: "Devcation Delhi 2026",
    organizer: "GDG IGDTUW x IIT Delhi",
    rank: "Hackathon Finalist",
    rankIcon: IconRocket,
    date: "2026",
    description: "Participated in Devcation Delhi 2026 organized by Google Developer Groups IGDTUW and IIT Delhi, building cutting-edge web & AI software.",
    thumbnailUrl: "/certificates/thumbnails/devcation_2026_iitd.webp",
    fileUrl: "/certificates/hackathon/devcation_2026_iitd.pdf",
    badges: [
      { text: "GDG on Campus", icon: IconRocket },
      { text: "IIT Delhi", icon: IconAward },
      { text: "Full Stack AI", icon: IconCpu }
    ],
    hoverGradient: "from-emerald-900/40",
    badgeColor: "text-emerald-400 border-emerald-500/30"
  },
  {
    id: "05",
    title: "#ImagineThat Idea Pitch",
    organizer: "Tata Group",
    rank: "Appreciation Award",
    rankIcon: IconBulb,
    date: "2025",
    description: "Earned Certificate of Appreciation for pitching innovative technological concepts in the Tata Group national idea pitch.",
    thumbnailUrl: "/certificates/thumbnails/tata_group_appreciation.webp",
    fileUrl: "/certificates/hackathon/tata_group_appreciation.pdf",
    badges: [
      { text: "Tata Group", icon: IconAward },
      { text: "Corporate Pitch", icon: IconBulb },
      { text: "Innovation", icon: IconSparkles }
    ],
    hoverGradient: "from-blue-900/40",
    badgeColor: "text-blue-400 border-blue-500/30"
  },
  {
    id: "06",
    title: "Adobe India Hackathon",
    organizer: "Adobe & Unstop",
    rank: "Round 1 Qualifier",
    rankIcon: IconTarget,
    date: "2024 - 2025",
    description: "Qualified Round 1 Online MCQ Assessment + Coding challenge in Adobe India national hackathon.",
    thumbnailUrl: "/certificates/thumbnails/adobe_hackathon.webp",
    fileUrl: "/certificates/hackathon/adobe_hackathon.pdf",
    badges: [
      { text: "Adobe", icon: IconTarget },
      { text: "Competitive Coding", icon: IconCode },
      { text: "Unstop", icon: IconCheck }
    ],
    hoverGradient: "from-rose-900/40",
    badgeColor: "text-rose-400 border-rose-500/30"
  },
  {
    id: "07",
    title: "Code Clash – IGDTUW",
    organizer: "IGDTUW & Unstop",
    rank: "Hackathon Participant",
    rankIcon: IconCode,
    date: "2025",
    description: "Participated in Code Clash competitive programming hackathon hosted by IGDTUW and Unstop.",
    thumbnailUrl: "/certificates/thumbnails/code_clash_igdtuw.webp",
    fileUrl: "/certificates/hackathon/code_clash_igdtuw.pdf",
    badges: [
      { text: "IGDTUW", icon: IconAward },
      { text: "Code Clash", icon: IconCode },
      { text: "Unstop", icon: IconCheck }
    ],
    hoverGradient: "from-purple-900/40",
    badgeColor: "text-purple-400 border-purple-500/30"
  }
];

// SECTION 3: Course Certificates (AWS, Claude / Anthropic, and TCS iON Course Certifications)
const certificatesData = [
  {
    id: "01",
    title: "AWS Graduate – Cloud Architecting",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "Nov 24, 2025 • 60 Hours",
    description: "Advanced AWS multi-tier architecture, VPC networking, IAM security policies, high availability, and cost optimization.",
    thumbnailUrl: "/certificates/thumbnails/aws_cloud_architecting.webp",
    fileUrl: "/certificates/certifications/aws_cloud_architecting.pdf",
    credlyUrl: "https://www.credly.com/go/XTEi9VXt",
    badges: [
      { text: "AWS Cloud Architecting", icon: IconCloud },
      { text: "60 Hours", icon: IconCpu },
      { text: "Credly Verified", icon: IconCheck }
    ],
    hoverGradient: "from-purple-900/40",
    badgeColor: "text-purple-400 border-purple-500/30"
  },
  {
    id: "02",
    title: "AWS Graduate – Cloud Operations",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "Nov 24, 2025 • 40 Hours",
    description: "Specialized AWS Cloud Operations, SysOps administration, automated resource provisioning, CloudWatch monitoring, and compliance.",
    thumbnailUrl: "/certificates/thumbnails/aws_cloud_operations.webp",
    fileUrl: "/certificates/certifications/aws_cloud_operations.pdf",
    credlyUrl: "https://www.credly.com/go/6tbfOKoi",
    badges: [
      { text: "AWS Cloud Operations", icon: IconCloud },
      { text: "40 Hours", icon: IconCpu },
      { text: "Credly Verified", icon: IconCheck }
    ],
    hoverGradient: "from-indigo-900/40",
    badgeColor: "text-indigo-400 border-indigo-500/30"
  },
  {
    id: "03",
    title: "AWS Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "Apr 26, 2025 • 20 Hours",
    description: "Core AWS cloud infrastructure, EC2, S3, RDS, Lambda serverless workflows, cloud security, and IAM role management.",
    thumbnailUrl: "/certificates/thumbnails/aws_cloud_foundations.webp",
    fileUrl: "/certificates/certifications/aws_cloud_foundations.pdf",
    credlyUrl: "https://www.credly.com/go/6Xi5kR50",
    badges: [
      { text: "AWS Cloud Foundations", icon: IconCloud },
      { text: "20 Hours", icon: IconCpu },
      { text: "Credly Verified", icon: IconCheck }
    ],
    hoverGradient: "from-blue-900/40",
    badgeColor: "text-blue-400 border-blue-500/30"
  },
  {
    id: "04",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Academy (Claude)",
    date: "2025 - 2026",
    description: "Certified by Anthropic Academy on AI fluency frameworks, Claude LLM architecture principles, prompt engineering, and agentic workflows.",
    thumbnailUrl: "/certificates/thumbnails/anthropic_ai_fluency.webp",
    fileUrl: "/certificates/certifications/anthropic_ai_fluency.pdf",
    credlyUrl: null,
    badges: [
      { text: "Anthropic Claude AI", icon: IconBrain },
      { text: "AI Fluency", icon: IconSparkles },
      { text: "LLM Frameworks", icon: IconRobot }
    ],
    hoverGradient: "from-emerald-900/40",
    badgeColor: "text-emerald-400 border-emerald-500/30"
  },
  {
    id: "05",
    title: "Generative AI Essentials",
    issuer: "TCS iON x MPIT – CoE & TCS Foundation",
    date: "July 2026 • Certificate ID: 8772-28783311-1016",
    description: "Course completion under the 'AI for All' national initiative, mastering Generative AI principles, transformer architectures, prompt engineering, and real-world AI applications.",
    thumbnailUrl: "/certificates/thumbnails/tcs_58908.webp",
    fileUrl: "/certificates/certificates/Ahmad_Taiyabi_58908.pdf",
    credlyUrl: null,
    badges: [
      { text: "TCS iON", icon: IconCertificate },
      { text: "Generative AI", icon: IconSparkles },
      { text: "AI for All Initiative", icon: IconRobot }
    ],
    hoverGradient: "from-cyan-900/40",
    badgeColor: "text-cyan-400 border-cyan-500/30"
  },
  {
    id: "06",
    title: "AI and Cybersecurity Awareness",
    issuer: "TCS iON x MPIT – CoE & TCS Foundation",
    date: "July 2026 • Certificate ID: 8770-28783311-1016",
    description: "Course completion under the Guinness World Record enrolled 'AI for All' program, covering AI risk management, cyber threat detection, and secure system architectures.",
    thumbnailUrl: "/certificates/thumbnails/tcs_58907.webp",
    fileUrl: "/certificates/certificates/Ahmad_Taiyabi_58907.pdf",
    credlyUrl: null,
    badges: [
      { text: "TCS iON", icon: IconCertificate },
      { text: "AI & Cybersecurity", icon: IconShieldCheck },
      { text: "Guinness Record Initiative", icon: IconAward }
    ],
    hoverGradient: "from-teal-900/40",
    badgeColor: "text-teal-400 border-teal-500/30"
  }
];

const ResumeSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [modalItem, setModalItem] = useState<{ title: string; imageSrc: string; fileUrl: string } | null>(null);
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
                      { text: "57% LLM Latency Reduction (700ms → 300ms)", icon: IconBolt },
                      { text: "Voice AI & WhatsApp Agents", icon: IconMicrophone }
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
                          {job.metrics.map((m, mIdx) => {
                            const IconComponent = m.icon;
                            return (
                              <span
                                key={mIdx}
                                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                              >
                                {IconComponent && <IconComponent className="w-3.5 h-3.5 shrink-0" />}
                                <span>{m.text}</span>
                              </span>
                            );
                          })}
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
                            className="inline-flex items-center gap-1 font-mono text-xs text-white uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors"
                          >
                            <span>Live Demo</span>
                            <IconExternalLink className="w-3 h-3" />
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
                        {project.metricBadges.map((mb, mbK) => {
                          const IconComponent = mb.icon;
                          return (
                            <span key={mbK} className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full border backdrop-blur-md ${mb.color}`}>
                              {IconComponent && <IconComponent className="w-3.5 h-3.5 shrink-0" />}
                              <span>{mb.text}</span>
                            </span>
                          );
                        })}
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

        {/* SECTION 1: Certifications (Only Oracle Certification) */}
        <div id="certifications" className="mb-16 md:mb-32 scroll-mt-24">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-6xl font-heading font-bold tracking-tight text-white mb-4">
                Certifications
              </h2>
              <p className="text-sm md:text-lg font-mono text-gray-400 max-w-2xl">
                Official industry certifications and professional credentials.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel rounded-3xl p-5 md:p-6 flex flex-col justify-between group hover:border-white/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${cert.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Thumbnail Image Container */}
                    <div className="w-full aspect-[16/10] rounded-2xl bg-black/60 border border-white/10 overflow-hidden mb-5 relative group-hover:border-white/30 transition-colors">
                      <img
                        src={cert.thumbnailUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2 leading-snug group-hover:text-rose-300 transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="text-xs font-mono text-rose-400 mb-2">
                      {cert.issuer} • {cert.date}
                    </p>

                    <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Infographic Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.badges.map((b, bIdx) => {
                        const IconComp = b.icon;
                        return (
                          <span
                            key={bIdx}
                            className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                          >
                            {IconComp && <IconComp className="w-3 h-3 text-rose-400 shrink-0" />}
                            <span>{b.text}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 flex-wrap">
                    {cert.credlyUrl && (
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium text-rose-400 bg-rose-500/10 border border-rose-500/30 hover:bg-rose-400 hover:text-black transition-all"
                      >
                        <span>Verify Badge</span>
                        <IconExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <button
                      onClick={() => setModalItem({ title: cert.title, imageSrc: cert.thumbnailUrl, fileUrl: cert.fileUrl })}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium text-gray-300 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
                    >
                      <span>Preview</span>
                    </button>
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-mono text-gray-300 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
                    >
                      <span>PDF</span>
                      <IconExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Hackathons (All Hackathon Certificates) */}
        <div id="hackathons" className="mb-16 md:mb-32 scroll-mt-24">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-6xl font-heading font-bold tracking-tight text-white mb-4">
                Hackathons
              </h2>
              <p className="text-sm md:text-lg font-mono text-gray-400 max-w-2xl">
                National-level hackathons, research achievements, and competition awards.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hackathonsData.map((item) => {
              const RankIcon = item.rankIcon;
              return (
                <div
                  key={item.id}
                  className="glass-panel rounded-3xl p-5 md:p-6 flex flex-col justify-between group hover:border-white/40 transition-all duration-500 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Thumbnail Image Container */}
                      <div className="w-full aspect-[16/10] rounded-2xl bg-black/60 border border-white/10 overflow-hidden mb-5 relative group-hover:border-white/30 transition-colors">
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className={`inline-flex items-center gap-1 absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest border px-3 py-1 rounded-full bg-black/70 backdrop-blur-md ${item.badgeColor}`}>
                          {RankIcon && <RankIcon className="w-3 h-3 shrink-0" />}
                          <span>{item.rank}</span>
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs font-mono text-cyan-400 mb-2">
                        {item.organizer} • {item.date}
                      </p>

                      <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Infographic Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {item.badges.map((b, bIdx) => {
                          const IconComp = b.icon;
                          return (
                            <span
                              key={bIdx}
                              className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                            >
                              {IconComp && <IconComp className="w-3 h-3 text-cyan-400 shrink-0" />}
                              <span>{b.text}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setModalItem({ title: item.title, imageSrc: item.thumbnailUrl, fileUrl: item.fileUrl })}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-400 hover:text-black transition-all"
                      >
                        <span>Preview Certificate</span>
                      </button>
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
                      >
                        <IconExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: Course Certificates (AWS, Claude / Anthropic, TCS iON) */}
        <div id="certificates" className="mb-16 md:mb-32 scroll-mt-24">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-6xl font-heading font-bold tracking-tight text-white mb-4">
                Course Certificates
              </h2>
              <p className="text-sm md:text-lg font-mono text-gray-400 max-w-2xl">
                AWS, Anthropic Claude, and TCS iON course completion certificates.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel rounded-3xl p-5 md:p-6 flex flex-col justify-between group hover:border-white/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${cert.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Thumbnail Image Container */}
                    <div className="w-full aspect-[16/10] rounded-2xl bg-black/60 border border-white/10 overflow-hidden mb-5 relative group-hover:border-white/30 transition-colors">
                      <img
                        src={cert.thumbnailUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="text-xs font-mono text-emerald-400 mb-2">
                      {cert.issuer} • {cert.date}
                    </p>

                    <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Infographic Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.badges.map((b, bIdx) => {
                        const IconComp = b.icon;
                        return (
                          <span
                            key={bIdx}
                            className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                          >
                            {IconComp && <IconComp className="w-3 h-3 text-emerald-400 shrink-0" />}
                            <span>{b.text}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 flex-wrap">
                    {cert.credlyUrl ? (
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-400 hover:text-black transition-all"
                      >
                        <span>Verify Credly</span>
                        <IconExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setModalItem({ title: cert.title, imageSrc: cert.thumbnailUrl, fileUrl: cert.fileUrl })}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-400 hover:text-black transition-all"
                      >
                        <span>Preview Certificate</span>
                      </button>
                    )}
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-mono text-gray-300 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
                    >
                      <span>PDF</span>
                      <IconExternalLink className="w-3 h-3" />
                    </a>
                  </div>
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

            <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-4 md:gap-6 z-20">
               {[
                 { name: 'LinkedIn', icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/ahmad-shadan-taiyabi-4697a4253/' },
                 { name: 'GitHub', icon: IconBrandGithub, url: 'https://github.com/Shadan1221' },
                 { name: 'Gmail', icon: IconMail, url: 'mailto:shadantaiyabi@gmail.com' }
               ].map((social, i) => {
                 const IconComp = social.icon;
                 return (
                   <a
                     key={i}
                     href={social.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-mono uppercase tracking-widest text-white bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white hover:text-black hover:scale-105 transition-all shadow-lg shadow-black/40"
                   >
                     {IconComp && <IconComp className="w-4 h-4 shrink-0" />}
                     <span>{social.name}</span>
                   </a>
                 );
               })}
            </div>
          </div>
        </footer>

      </section>

      {/* CERTIFICATE PREVIEW MODAL */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setModalItem(null)}
        >
          <div
            className="glass-panel border border-white/20 rounded-3xl p-6 max-w-4xl w-full flex flex-col gap-4 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="text-xl font-heading font-bold text-white">{modalItem.title}</h3>
              <button
                onClick={() => setModalItem(null)}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <IconX className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full max-h-[70vh] overflow-auto rounded-2xl border border-white/10 bg-black/70 flex items-center justify-center p-2">
              <img
                src={modalItem.imageSrc}
                alt={modalItem.title}
                className="max-w-full max-h-[65vh] object-contain rounded-lg"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t border-white/10">
              <a
                href={modalItem.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full font-mono text-xs font-medium bg-white text-black hover:bg-gray-200 transition-colors uppercase tracking-wider"
              >
                <span>Open Full File</span>
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setModalItem(null)}
                className="px-6 py-2.5 rounded-full font-mono text-xs font-medium border border-white/20 text-white hover:bg-white/10 transition-colors uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeSection;
