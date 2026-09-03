"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// Project Showcase Data
interface Project {
  id: string;
  title: string;
  category: "festivals" | "soundsystem" | "merch";
  categoryLabel: string;
  format: string;
  year: string;
  runtime: string;
  role: string;
  description: string;
  accent: "red" | "gold" | "green";
  vimeoId: string;
}

const PROJECTS: Project[] = [
  {
    id: "dub-forest-2024",
    title: "Dub Forest Gathering",
    category: "festivals",
    categoryLabel: "FESTIVAL AFTERMOVIE",
    format: "4K DCI // 24FPS",
    year: "2024",
    runtime: "03:45",
    role: "Lead Cinematography • Bass-Synced Edit • Color Grade",
    description: "3-day outdoor gathering recap capturing woodland sound systems, nighttime laser arrays, and heavyweight crowd energy.",
    accent: "gold",
    vimeoId: "1221128478",
  },
  {
    id: "roots-underground",
    title: "Roots Underground Sound System",
    category: "soundsystem",
    categoryLabel: "SOUND SYSTEM CLASH",
    format: "4K UHD // 60FPS",
    year: "2024",
    runtime: "02:18",
    role: "Low-Light Cinematography • Direct Desk Audio Sync",
    description: "Raw, intimate documentation of hand-built speaker stacks, preamp manipulation, and sub-bass vibration.",
    accent: "green",
    vimeoId: "1221128478",
  },
  {
    id: "sub-heavy-apparel",
    title: "Sub Heavy Streetwear Drop 01",
    category: "merch",
    categoryLabel: "BRAND & MERCH CAMPAIGN",
    format: "9:16 VERTICAL + 16:9",
    year: "2024",
    runtime: "01:10",
    role: "Creative Direction • Edit • Sound Design",
    description: "Gritty urban lookbook campaign for underground sound system merchandise. Tailored for Instagram Reels & TikTok virality.",
    accent: "red",
    vimeoId: "1221128478",
  },
  {
    id: "pressure-steppers",
    title: "Pressure Dub Session — Brussels",
    category: "festivals",
    categoryLabel: "CLUB & FESTIVAL RECAP",
    format: "4K UHD // 120FPS SLOW-MO",
    year: "2023",
    runtime: "01:50",
    role: "Run-and-Gun Cinematography • 48-Hour Turnaround",
    description: "High-voltage club recap with explosive bass drops, strobe work, and authentic dancefloor immersion.",
    accent: "gold",
    vimeoId: "1221128478",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "festivals" | "soundsystem" | "merch">("all");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("Festival Aftermovie");
  const [localTime, setLocalTime] = useState<string>("03:00:00 AM");

  useEffect(() => {
    setMounted(true);
    const updateClock = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Brussels",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#08080A] text-[#F3F4F6] font-inter selection:bg-[#00E575] selection:text-black">
      
      {/* 1. TOP VIEW-FINDER CAMERA STATUS BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#08080A]/95 border-b border-white/[0.08] backdrop-blur-md text-[11px] font-mono tracking-wider text-gray-400 py-1.5 px-4 md:px-8 flex justify-between items-center select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse" />
            <span className="text-[#FF2A2A] font-bold">REC</span>
          </div>
          <span className="text-white font-semibold">TC 00:24:18:09</span>
          <span className="hidden sm:inline-block text-gray-500">|</span>
          <span className="hidden sm:inline-block text-gray-300">4K DCI // 24FPS</span>
        </div>

        {/* Live Equalizer Bassline Bars */}
        <div className="flex items-center gap-2">
          <span className="hidden md:inline-block text-gray-500 text-[10px]">DUB SUB-BASS EQ</span>
          <div className="flex items-end gap-[3px] h-3.5 w-14">
            {[45, 90, 70, 100, 60, 85, 40].map((height, i) => (
              <motion.span
                key={i}
                className="w-1 bg-[#00E575] rounded-t-sm"
                animate={{ height: ["20%", `${height}%`, "30%"] }}
                transition={{
                  duration: 0.8 + (i % 3) * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
          <span className="hidden lg:inline-block text-gray-500">|</span>
          <span className="hidden lg:inline-block text-[#FFB800]">LEUVEN, BE [{localTime} CET]</span>
        </div>
      </div>

      {/* 2. PRIMARY NAVIGATION */}
      <header className="fixed top-7 left-0 right-0 z-40 bg-[#08080A]/85 backdrop-blur-xl border-b border-white/[0.06] transition-all">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="text-xl font-space font-bold tracking-tight uppercase text-white flex items-center gap-1">
              <span>JOSSE</span>
              <span className="text-[#00E575] font-mono">[VFX]</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 pl-2 border-l border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E575]" />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-widest text-gray-300">
            <a href="#showcase" className="hover:text-[#00E575] transition-colors">01//PRODUCTIONS</a>
            <a href="#instagram" className="hover:text-[#FFB800] transition-colors">02//ARCHIVE</a>
            <a href="#services" className="hover:text-[#FF2A2A] transition-colors">03//SERVICES</a>
            <a href="#about" className="hover:text-white transition-colors">04//ABOUT</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 bg-white/[0.05] hover:bg-[#00E575] text-white hover:text-black border border-white/15 hover:border-[#00E575] text-xs font-mono font-bold tracking-wider rounded transition-all duration-200"
            >
              BOOK SHOOT ↗
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION — DIRECTOR'S VIEWFINDER */}
      <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden">
        
        {/* Crisp Vimeo Video Background (High Contrast, No muddy blend) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1221128478?background=1&autoplay=1&loop=1&muted=1&autopause=0&badge=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-75 contrast-110 brightness-95"
            title="JoseVFX Header Reel"
          />
        </div>

        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-[#08080A]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08080A]/50 to-[#08080A]/90 pointer-events-none" />
        
        {/* Subtle atmospheric ambient glow (Sound system stage lighting) */}
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-[#FF2A2A]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-[#00E575]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#FFB800]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Viewfinder Camera Brackets / HUD Frame */}
        <div className="absolute inset-6 md:inset-12 pointer-events-none border border-white/[0.04]">
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white/30" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white/30" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white/30" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white/30" />
          
          {/* Subtle Crosshair in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-20">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white" />
            <span className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white" />
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-6">
          
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E575] animate-ping" />
            <span className="font-mono text-xs text-gray-200 tracking-wide">
              LEUVEN, BE • BOOKING FESTIVALS & SESSIONS 2024–2025
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl font-space font-extrabold tracking-tight uppercase leading-[0.95] text-white"
          >
            JOSSE<span className="text-[#00E575]">VFX</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 font-mono text-sm sm:text-base tracking-widest text-[#FFB800] uppercase"
          >
            CINEMATOGRAPHER & EDITOR // SOUND SYSTEM CULTURE
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl font-inter leading-relaxed"
          >
            Capturing the raw bassweight, dancefloor energy, and authentic community of reggae festivals, sound system clashes, and underground merchandise drops.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#showcase"
              className="px-7 py-3.5 bg-[#00E575] text-black font-space font-bold text-sm tracking-wider uppercase rounded hover:bg-white hover:shadow-[0_0_25px_rgba(0,229,117,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>EXPLORE PRODUCTIONS</span>
              <span>↓</span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-white/[0.07] hover:bg-white/15 text-white font-space font-bold text-sm tracking-wider uppercase rounded border border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>INQUIRE AVAILABILITY</span>
              <span>↗</span>
            </a>
          </motion.div>

          {/* Reel Spec Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left max-w-3xl w-full"
          >
            <div>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">FORMAT</p>
              <p className="font-space text-xs sm:text-sm font-semibold text-white mt-0.5">Cinema 4K DCI</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">RECORDING</p>
              <p className="font-space text-xs sm:text-sm font-semibold text-[#FFB800] mt-0.5">120FPS High-Speed</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">POST-PRODUCTION</p>
              <p className="font-space text-xs sm:text-sm font-semibold text-white mt-0.5">Custom Color Grade</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">LOCATION</p>
              <p className="font-space text-xs sm:text-sm font-semibold text-[#00E575] mt-0.5">Leuven • Europe</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-[10px] font-mono tracking-widest flex flex-col items-center gap-1.5 animate-bounce pointer-events-none">
          <span>SCROLL</span>
          <span>↓</span>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTIONS SHOWCASE */}
      <section id="showcase" className="py-24 px-4 md:px-8 border-t border-white/[0.08] relative bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00E575] tracking-widest uppercase mb-2">
                <span>// 01 ARCHIVES</span>
                <span className="w-6 h-[1px] bg-[#00E575]/50" />
                <span>SELECTED WORK</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-space font-extrabold uppercase text-white tracking-tight">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A2A] via-[#FFB800] to-[#00E575]">Productions</span>
              </h2>
            </div>

            {/* Filter Category Chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "ALL WORKS" },
                { id: "festivals", label: "FESTIVALS" },
                { id: "soundsystem", label: "SOUND SYSTEM" },
                { id: "merch", label: "MERCH & BRAND" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded font-mono text-xs tracking-wider transition-all duration-150 ${
                    selectedCategory === tab.id
                      ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      : "bg-white/[0.04] text-gray-400 hover:text-white border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-[#10121A] border border-white/[0.08] hover:border-white/25 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                >
                  {/* Visual Preview Box */}
                  <div className="relative aspect-video w-full bg-[#181B26] overflow-hidden flex items-center justify-center">
                    
                    {/* Atmospheric Film Preview Backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10121A] via-transparent to-transparent z-10" />
                    
                    {/* Dynamic Graphic Gradient according to project accent */}
                    <div
                      className={`absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500 ${
                        project.accent === "red"
                          ? "bg-gradient-to-tr from-[#FF2A2A]/40 via-transparent to-[#10121A]"
                          : project.accent === "gold"
                          ? "bg-gradient-to-tr from-[#FFB800]/40 via-transparent to-[#10121A]"
                          : "bg-gradient-to-tr from-[#00E575]/40 via-transparent to-[#10121A]"
                      }`}
                    />

                    {/* Film Frame Guides */}
                    <div className="absolute inset-4 border border-white/10 pointer-events-none z-10" />

                    {/* Center Action Button */}
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="relative z-20 w-14 h-14 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black border border-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl cursor-pointer"
                      aria-label={`Play ${project.title}`}
                    >
                      <span className="text-xl font-mono ml-0.5">▶</span>
                    </button>

                    {/* Top Meta Badges */}
                    <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center text-[10px] font-mono tracking-wider">
                      <span className="px-2.5 py-1 rounded bg-black/70 border border-white/15 text-white backdrop-blur-sm">
                        {project.categoryLabel}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-black/70 border border-white/15 text-gray-300 backdrop-blur-sm">
                        {project.runtime}
                      </span>
                    </div>

                    {/* Bottom Specs */}
                    <div className="absolute bottom-3 left-3 z-20 font-mono text-[11px] text-gray-300 tracking-wider">
                      <span>{project.format}</span>
                    </div>
                  </div>

                  {/* Project Details Box */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-space font-bold uppercase text-white group-hover:text-[#00E575] transition-colors">
                          {project.title}
                        </h3>
                        <span className="font-mono text-xs text-gray-500">{project.year}</span>
                      </div>
                      
                      <p className="text-sm text-gray-400 font-inter leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex justify-between items-center text-xs font-mono text-gray-400">
                      <span className="truncate pr-4 text-gray-500">{project.role}</span>
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="text-white hover:text-[#00E575] whitespace-nowrap font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <span>VIEW FILM</span>
                        <span>↗</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. LIVE INSTAGRAM FEED ARCHIVE TERMINAL */}
      <section id="instagram" className="py-24 px-4 md:px-8 border-t border-white/[0.08] relative bg-[#08080A]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FFB800] tracking-widest uppercase mb-2">
                <span>// 02 SOCIAL STREAM</span>
                <span className="w-6 h-[1px] bg-[#FFB800]/50" />
                <span>REAL-TIME CUTS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-space font-extrabold uppercase text-white tracking-tight">
                Live From <span className="text-[#FFB800]">@josse.vfx</span>
              </h2>
            </div>
            
            <a
              href="https://www.instagram.com/josse.vfx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/[0.05] hover:bg-[#FFB800] text-white hover:text-black border border-white/10 hover:border-[#FFB800] font-mono text-xs tracking-wider transition-all duration-200"
            >
              <span>FOLLOW ON INSTAGRAM</span>
              <span>↗</span>
            </a>
          </div>

          {/* Sleek Instagram Monitor Terminal */}
          <div className="bg-[#10121A] border border-white/[0.1] rounded-lg overflow-hidden shadow-2xl">
            
            {/* Monitor Top Status Bar */}
            <div className="bg-[#151824] px-4 py-3 border-b border-white/[0.08] flex justify-between items-center font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E575]" />
                <span className="text-white font-bold">FEED SYNCHRONIZED</span>
                <span className="text-gray-600 hidden sm:inline-block">|</span>
                <span className="hidden sm:inline-block text-gray-400">SOURCE: INSTAGRAM API</span>
              </div>
              <div className="text-[11px] text-gray-500">
                LATEST REELS & STORIES
              </div>
            </div>

            {/* Elfsight Embed Container */}
            <div className="p-4 md:p-6 min-h-[520px] bg-[#0C0D14] flex flex-col justify-center">
              <script src="https://elfsightcdn.com/platform.js" async></script>
              <div className="elfsight-app-5dcd7e23-c833-453a-82b7-0b04988d18f3" data-elfsight-app-lazy="true"></div>
            </div>

            {/* Monitor Bottom Info Bar */}
            <div className="bg-[#151824] px-4 py-2.5 border-t border-white/[0.08] flex justify-between items-center text-xs font-mono text-gray-400">
              <span>TAG: #JOSSEVFX #SOUNDSYSTEMBELGIUM</span>
              <a
                href="https://www.instagram.com/josse.vfx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFB800] hover:underline"
              >
                DM FOR URGENT BOOKINGS ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCTION CAPABILITIES & TECHNICAL SPECS */}
      <section id="services" className="py-24 px-4 md:px-8 border-t border-white/[0.08] relative bg-[#0C0D14]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FF2A2A] tracking-widest uppercase mb-2">
              <span>// 03 SPECIFICATIONS</span>
              <span className="w-6 h-[1px] bg-[#FF2A2A]/50" />
              <span>DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-space font-extrabold uppercase text-white tracking-tight">
              Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A2A] via-[#FFB800] to-[#00E575]">Capabilities</span>
            </h2>
            <p className="mt-3 text-gray-400 font-inter text-sm sm:text-base">
              Engineered specifically for the demands of high-SPL sound systems, dark dancefloors, and dynamic brand campaigns.
            </p>
          </div>

          {/* 3 Pillars of Service */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 01 FESTIVALS */}
            <div className="bg-[#12141F] border border-white/[0.08] hover:border-[#FF2A2A]/50 rounded-lg p-7 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-2xl font-bold text-[#FF2A2A]">01</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FF2A2A]/10 text-[#FF2A2A] border border-[#FF2A2A]/20">
                    FESTIVAL
                  </span>
                </div>
                <h3 className="text-xl font-space font-bold uppercase text-white mb-3">
                  Festival & Stage Aftermovies
                </h3>
                <p className="text-sm text-gray-400 font-inter leading-relaxed mb-6">
                  Multi-angle coverage of headliner sets, crowd euphoria, stage builds, and festival grounds. Bass-synced rhythmic pacing that recreates the physical sensation of being there.
                </p>
              </div>
              <ul className="space-y-2 border-t border-white/10 pt-4 text-xs font-mono text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-[#00E575]">✓</span> 4K Master Aftermovie (16:9)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00E575]">✓</span> 3–5 Social Teasers & Cutdowns (9:16)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00E575]">✓</span> Fast 72-Hour Delivery Option
                </li>
              </ul>
            </div>

            {/* 02 SOUND SYSTEM */}
            <div className="bg-[#12141F] border border-white/[0.08] hover:border-[#FFB800]/50 rounded-lg p-7 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-2xl font-bold text-[#FFB800]">02</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20">
                    DUB & CLASH
                  </span>
                </div>
                <h3 className="text-xl font-space font-bold uppercase text-white mb-3">
                  Sound System & Session Recaps
                </h3>
                <p className="text-sm text-gray-400 font-inter leading-relaxed mb-6">
                  Specialized optical low-light setups tailored for dark club environments, haze, laser illumination, and massive acoustic pressure without sensor clipping or microphone distortion.
                </p>
              </div>
              <ul className="space-y-2 border-t border-white/10 pt-4 text-xs font-mono text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-[#00E575]">✓</span> Direct Master Desk Audio Syncing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00E575]">✓</span> Full Sound Stack & Operator Focus
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00E575]">✓</span> Raw Crowd Reaction Shots
                </li>
              </ul>
            </div>

            {/* 03 MERCH & BRAND */}
            <div className="bg-[#12141F] border border-white/[0.08] hover:border-[#00E575]/50 rounded-lg p-7 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-2xl font-bold text-[#00E575]">03</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#00E575]/10 text-[#00E575] border border-[#00E575]/20">
                    MERCH & DROPS
                  </span>
                </div>
                <h3 className="text-xl font-space font-bold uppercase text-white mb-3">
                  Brand & Merchandise Drops
                </h3>
                <p className="text-sm text-gray-400 font-inter leading-relaxed mb-6">
                  Stylized editorial campaigns for scene streetwear, vinyl record releases, and apparel capsules. Gritty 16mm analog aesthetics combined with razor-sharp digital precision.
                </p>
              </div>
              <ul className="space-y-2 border-t border-white/10 pt-4 text-xs font-mono text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-[#00E575]">✓</span> High-Engagement 9:16 Vertical Cuts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00E575]">✓</span> High-Contrast Texture & Detail Grading
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00E575]">✓</span> High-Res Stills for E-Commerce
                </li>
              </ul>
            </div>
          </div>

          {/* Production Hardware Terminal Bar */}
          <div className="mt-12 bg-[#10121A] border border-white/[0.08] rounded-lg p-5 flex flex-col lg:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400">
            <span className="text-white font-bold tracking-wider">PRODUCTION STANDARDS:</span>
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <span>CINEMA-GRADE OPTICS</span>
              <span className="text-gray-600">•</span>
              <span>10-BIT 4:2:2 DCI 4K</span>
              <span className="text-gray-600">•</span>
              <span>120FPS SUB-BASS SLOW-MO</span>
              <span className="text-gray-600">•</span>
              <span>ANALOG FILM COLOR PROFILE</span>
            </div>
            <span className="text-[#00E575] font-semibold">LEUVEN // READY TO TRAVEL</span>
          </div>
        </div>
      </section>

      {/* 7. ABOUT SECTION — BEHIND THE LENS */}
      <section id="about" className="py-24 px-4 md:px-8 border-t border-white/[0.08] relative bg-[#08080A]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Bio Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00E575] tracking-widest uppercase mb-2">
              <span>// 04 THE VISION</span>
              <span className="w-6 h-[1px] bg-[#00E575]/50" />
              <span>BEHIND THE SOUND</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-space font-extrabold uppercase text-white tracking-tight mb-6">
              Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A2A] via-[#FFB800] to-[#00E575]">JosseVFX?</span>
            </h2>

            <div className="space-y-4 text-gray-300 font-inter leading-relaxed text-base">
              <p>
                Based in Leuven, Belgium, I am a dedicated videographer embedded in the European reggae and dub sound system circuit.
              </p>
              <p>
                I don’t shoot events as an outsider looking in. I understand the weight of custom bass bins, the culture of acetate dubplates, and the unity of the dancefloor. My cameras are configured to move with the crowd, capturing authentic emotion without disturbing the sacred energy of the dance.
              </p>
              <p className="border-l-2 border-[#00E575] pl-4 italic text-gray-400">
                “If the video doesn’t make you feel the vibration in your chest, the cut isn’t finished yet.”
              </p>
            </div>

            {/* Credibility Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-white/10 font-mono">
              <div>
                <p className="text-3xl font-space font-extrabold text-[#00E575]">50+</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Sessions & Festivals</p>
              </div>
              <div>
                <p className="text-3xl font-space font-extrabold text-[#FFB800]">100%</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Sound System Culture</p>
              </div>
              <div>
                <p className="text-3xl font-space font-extrabold text-white">48h</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Fast Turnaround Option</p>
              </div>
            </div>
          </div>

          {/* Right: Stylized Director Slate Card */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-[#12141F] border border-white/20 p-6 rounded-lg relative shadow-2xl overflow-hidden">
              
              {/* Slate Header Stripe (Reggae Tri-Color) */}
              <div className="h-2 w-full flex mb-6 rounded-full overflow-hidden">
                <div className="flex-1 bg-[#FF2A2A]" />
                <div className="flex-1 bg-[#FFB800]" />
                <div className="flex-1 bg-[#00E575]" />
              </div>

              <div className="aspect-[4/5] bg-[#181B26] border border-white/10 rounded relative overflow-hidden flex flex-col justify-between p-4">
                
                <div className="flex justify-between font-mono text-[10px] text-gray-400">
                  <span>PRODUCTION: JOSSEVFX</span>
                  <span>ROLL: 04 // SLATE: 18</span>
                </div>

                {/* Stylized Visual Avatar Container */}
                <div className="text-center my-auto">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-tr from-[#FF2A2A] via-[#FFB800] to-[#00E575] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#08080A] flex items-center justify-center font-space font-black text-2xl text-white">
                      JVFX
                    </div>
                  </div>
                  <p className="font-space font-bold uppercase tracking-wider text-white text-lg">JOSSE TRUYENS</p>
                  <p className="font-mono text-xs text-[#00E575] mt-1">DIRECTOR & CINEMATOGRAPHER</p>
                </div>

                <div className="border-t border-white/10 pt-3 flex justify-between font-mono text-[10px] text-gray-400">
                  <span>BASE: LEUVEN, BELGIUM</span>
                  <span className="text-[#FFB800]">STATUS: ACTIVE</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center text-xs font-mono text-gray-400">
                <span>AVAILABLE ACROSS EUROPE</span>
                <span className="text-[#00E575]">● OPEN CALENDAR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE BOOKING TERMINAL & INQUIRY FORM */}
      <section id="contact" className="py-24 px-4 md:px-8 border-t border-white/[0.08] relative bg-[#0C0D14]">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00E575] tracking-widest uppercase mb-2">
              <span>// 05 INITIATE CONTACT</span>
              <span className="w-6 h-[1px] bg-[#00E575]/50" />
              <span>CALENDAR & BOOKING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-space font-extrabold uppercase text-white tracking-tight">
              Book a <span className="text-[#00E575]">Production</span>
            </h2>
            <p className="mt-3 text-gray-400 font-inter text-sm sm:text-base">
              Festivals, sound clashes, club nights, or streetwear merchandise campaigns. Let’s capture the culture together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Direct Contact Options (Left Column) */}
            <div className="space-y-4">
              <div className="bg-[#12141F] border border-white/[0.08] p-6 rounded-lg">
                <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">DIRECT CONTACT</p>
                <h3 className="font-space font-bold text-white text-lg mb-4">Fast Communication</h3>

                <div className="space-y-3">
                  <a
                    href="https://www.instagram.com/josse.vfx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 rounded bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
                  >
                    <span>INSTAGRAM DIRECT</span>
                    <span className="text-[#FFB800]">@josse.vfx ↗</span>
                  </a>

                  <a
                    href="mailto:truyensboris@proton.me"
                    className="w-full flex items-center justify-between p-3 rounded bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
                  >
                    <span>EMAIL INQUIRY</span>
                    <span className="text-[#00E575]">SEND MAIL ↗</span>
                  </a>
                </div>
              </div>

              {/* Newsletter / Sound System Dispatch */}
              <div className="bg-[#12141F] border border-white/[0.08] p-6 rounded-lg">
                <p className="font-mono text-xs text-[#FFB800] uppercase tracking-widest mb-1">DISPATCH LIST</p>
                <h3 className="font-space font-bold text-white text-base mb-2">Sound System Network</h3>
                <p className="text-xs text-gray-400 font-inter mb-4">
                  Get notified when new festival aftermovies, unreleased dub sets, and merch shoots drop.
                </p>

                <form
                  action="https://formspree.io/f/YOUR_NEWSLETTER_ID"
                  method="POST"
                  className="space-y-3"
                >
                  <input
                    type="email"
                    name="newsletter_email"
                    required
                    placeholder="promoter@festival.com"
                    className="w-full bg-black/60 border border-white/15 px-3.5 py-2.5 rounded text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#00E575]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-white/[0.08] hover:bg-[#00E575] text-white hover:text-black font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors"
                  >
                    SUBSCRIBE DISPATCH
                  </button>
                </form>
              </div>
            </div>

            {/* Main Interactive Booking Form (2 Columns) */}
            <div className="lg:col-span-2 bg-[#12141F] border border-white/[0.08] p-6 sm:p-8 rounded-lg">
              
              {/* Project Type Selector Chips */}
              <div className="mb-6">
                <label className="block font-mono text-xs text-gray-400 uppercase tracking-widest mb-3">
                  1. SELECT PRODUCTION TYPE
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Festival Aftermovie",
                    "Club & Dub Session",
                    "Merchandise Campaign",
                    "Music Video",
                    "Other / Custom",
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedProjectType(type)}
                      className={`px-3.5 py-2 rounded text-xs font-mono tracking-wider transition-all cursor-pointer ${
                        selectedProjectType === type
                          ? "bg-[#00E575] text-black font-bold shadow-[0_0_15px_rgba(0,229,117,0.3)]"
                          : "bg-white/[0.04] text-gray-300 hover:text-white border border-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Formspree Form */}
              <form
                action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                method="POST"
                className="space-y-5"
              >
                {/* Hidden field storing selected project type */}
                <input type="hidden" name="project_type" value={selectedProjectType} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                      YOUR NAME / PROMOTER
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Marcus Roots"
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 rounded text-sm font-inter text-white placeholder-gray-500 focus:outline-none focus:border-[#00E575] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="marcus@soundsystem.be"
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 rounded text-sm font-inter text-white placeholder-gray-500 focus:outline-none focus:border-[#00E575] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                      EVENT / SHOOT DATE
                    </label>
                    <input
                      type="text"
                      name="date"
                      placeholder="e.g. August 2025"
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 rounded text-sm font-inter text-white placeholder-gray-500 focus:outline-none focus:border-[#FFB800] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                      LOCATION / VENUE
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Leuven / Antwerp"
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 rounded text-sm font-inter text-white placeholder-gray-500 focus:outline-none focus:border-[#FFB800] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                    PROJECT SCOPE & VISION
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about the sound system, festival scale, turnaround deadline, and specific deliverables you need..."
                    className="w-full bg-black/60 border border-white/15 px-4 py-3 rounded text-sm font-inter text-white placeholder-gray-500 focus:outline-none focus:border-[#00E575] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#FF2A2A] via-[#FFB800] to-[#00E575] text-black font-space font-extrabold uppercase text-sm tracking-widest rounded hover:opacity-95 hover:shadow-[0_0_25px_rgba(0,229,117,0.3)] transition-all cursor-pointer"
                >
                  SEND PRODUCTION INQUIRY ↗
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-12 px-4 md:px-8 border-t border-white/[0.08] bg-[#070709] text-gray-500 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <span className="font-space font-bold text-white text-base">JOSSE<span className="text-[#00E575]">[VFX]</span></span>
            <span className="text-gray-700">|</span>
            <span>LEUVEN, BE [{localTime} CET]</span>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="https://www.instagram.com/josse.vfx/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              INSTAGRAM ↗
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              VIMEO ↗
            </a>
            <a href="#top" className="hover:text-[#00E575] transition-colors">
              BACK TO TOP ↑
            </a>
          </div>

          <div>
            <p>© {new Date().getFullYear()} JOSSE TRUYENS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* 10. INTERACTIVE PROJECT VIDEO MODAL */}
      <AnimatePresence>
        {activeProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveProjectModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#10121A] border border-white/20 rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="bg-[#151824] px-4 py-3 border-b border-white/10 flex justify-between items-center font-mono text-xs">
                <div className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full bg-[#00E575]" />
                  <span className="font-bold">{activeProjectModal.title}</span>
                  <span className="text-gray-500">[{activeProjectModal.format}]</span>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="text-gray-400 hover:text-white text-sm font-bold px-2 py-1 cursor-pointer"
                >
                  ✕ CLOSE
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://player.vimeo.com/video/${activeProjectModal.vimeoId}?autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="w-full h-full"
                  title={activeProjectModal.title}
                />
              </div>

              {/* Modal Metadata */}
              <div className="p-6 bg-[#0E1018]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#00E575]">
                      {activeProjectModal.categoryLabel}
                    </span>
                    <h3 className="text-2xl font-space font-bold text-white mt-2">
                      {activeProjectModal.title}
                    </h3>
                  </div>
                  <span className="font-mono text-sm text-[#FFB800]">
                    RUNTIME: {activeProjectModal.runtime}
                  </span>
                </div>

                <p className="text-gray-300 text-sm font-inter leading-relaxed mt-3">
                  {activeProjectModal.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-gray-400">
                  <span>CREDITS: {activeProjectModal.role}</span>
                  <a
                    href="#contact"
                    onClick={() => setActiveProjectModal(null)}
                    className="text-[#00E575] hover:underline font-bold"
                  >
                    REQUEST SIMILAR PRODUCTION ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
