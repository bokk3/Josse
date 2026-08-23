"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter selection:bg-neon-green selection:text-black">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full z-50 top-0 py-4 px-6 md:px-12 flex justify-between items-center bg-background/50 backdrop-blur-xl border-b border-white/5"
      >
        <div className="text-2xl font-space font-black tracking-tighter uppercase text-white">
          Josse<span className="text-neon-green">VFX</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest text-gray-400">
          <a href="#work" className="hover:text-neon-green hover:drop-shadow-[0_0_10px_rgba(168,255,62,0.8)] transition-all">WORK</a>
          <a href="#about" className="hover:text-vibrant-purple hover:drop-shadow-[0_0_10px_rgba(157,78,221,0.8)] transition-all">ABOUT</a>
          <a href="#contact" className="hover:text-white transition-all">CONTACT</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* HTML5 Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        >
          {/* Placeholder video - replace with actual showreel later */}
          <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradients to blend video into the background color */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-background/40" />

        {/* Floating rave lighting accents */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-vibrant-purple/20 rounded-full blur-[128px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[128px] pointer-events-none" 
        />

        {mounted && (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="z-10 flex flex-col items-center mt-16"
          >
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-space font-black tracking-tighter mb-2 uppercase text-white drop-shadow-2xl">
              Josse<span className="text-neon-green">VFX</span>
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-space font-bold text-gray-300 uppercase tracking-widest mb-6">
              Capturing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-purple to-neon-green">Dub Scene</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-inter">
              Visuals built for the underground. Sound system festivals, raves, and heavy merchandise drops.
            </motion.p>
            <motion.a 
              variants={fadeInUp}
              href="#work" 
              className="px-10 py-4 bg-neon-green text-black font-space font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(168,255,62,0.4)]"
            >
              Enter
            </motion.a>
          </motion.div>
        )}
      </section>

      {/* Work / Instagram Feed Section */}
      <section id="work" className="py-32 px-6 md:px-12 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-space font-black uppercase mb-6 text-white">
              Visual <span className="text-vibrant-purple">Archives</span>
            </h2>
            <p className="text-gray-400 mb-16 text-lg max-w-2xl">
              The latest aftermovies, recaps, and drops straight from the scene. Updated regularly via Instagram.
            </p>
            
            {/* Free Embed Widget Placeholder */}
            <div className="w-full min-h-[600px] bg-white/[0.02] rounded-none border border-white/10 flex items-center justify-center p-8 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-purple/10 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="text-center relative z-10">
                <div className="w-16 h-16 border-4 border-t-neon-green border-r-vibrant-purple border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-6" />
                <p className="text-white font-space font-bold tracking-widest uppercase mb-2">
                  [Instagram Widget Placeholder]
                </p>
                <p className="text-sm text-gray-500 font-inter">
                  Paste your Elfsight or SnapWidget HTML embed code here.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-space font-black uppercase mb-8 text-white">
              Behind the <br/><span className="text-neon-green">Lens</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-inter">
              <p>
                Based in the heart of Leuven, Belgium, I am a videographer dedicated to translating the raw, heavy energy of the underground into visual form.
              </p>
              <p>
                Whether it's a massive sound system clash, an intimate dub party, or a sharp merchandise campaign, I bring the atmosphere of the dance straight to the screen. 
              </p>
              <p>
                My visual style is rhythmic, gritty, and deeply connected to the basslines that move the crowd.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full max-w-lg relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Styled Profile Picture Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-purple to-neon-green transform rotate-2 opacity-30 blur-2xl" />
            <div className="w-full aspect-[4/5] bg-[#111] border border-white/10 relative p-4 flex flex-col shadow-2xl">
              <div className="flex-1 bg-white/5 relative flex items-center justify-center overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                <span className="text-white/20 font-space font-black text-3xl uppercase tracking-widest text-center px-4">[Josse Photo]</span>
              </div>
              <div className="pt-4 text-center">
                <p className="font-space font-bold uppercase tracking-widest text-gray-500 text-sm">JOSSEVFX // LEUVEN, BE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-vibrant-purple/10 rounded-full blur-[128px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-space font-black uppercase mb-6 text-white">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-vibrant-purple">Create</span></h2>
            <p className="text-gray-400 text-lg md:text-xl font-inter">
              Booking for festivals, events, and merchandise shoots.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.form 
              action="https://formspree.io/f/YOUR_FORMSPREE_ID" 
              method="POST"
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <input 
                  type="text" 
                  name="name" 
                  required
                  className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors font-space uppercase tracking-widest text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="email" 
                  name="email" 
                  required
                  className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors font-space uppercase tracking-widest text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div className="space-y-2">
                <textarea 
                  name="message" 
                  rows={4}
                  required
                  className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-vibrant-purple transition-colors resize-none font-space uppercase tracking-widest text-sm"
                  placeholder="Project Details..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 border border-white/20 text-white font-space font-black uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all mt-4"
              >
                Send Message
              </button>
            </motion.form>

            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/5 p-10 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-transparent w-2 group-hover:w-full transition-all duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-space font-black uppercase mb-4 text-white">Join the Network</h3>
                  <p className="text-gray-400 mb-8 font-inter">Sign up to get notified about upcoming drops, heavy sets, and new visuals.</p>
                  <form 
                    action="https://formspree.io/f/YOUR_NEWSLETTER_ID" 
                    method="POST"
                    className="flex flex-col gap-4"
                  >
                    <input 
                      type="email" 
                      name="newsletter_email" 
                      required
                      className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors font-space text-sm"
                      placeholder="Enter your email"
                    />
                    <button 
                      type="submit"
                      className="w-full py-3 bg-neon-green text-black font-space font-bold uppercase tracking-widest hover:bg-white transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10 relative overflow-hidden bg-[#050208]">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-2xl font-space font-black tracking-tighter uppercase text-white/50">
            Josse<span className="text-neon-green/50">VFX</span>
          </div>
          <p className="text-sm text-gray-600 font-inter">© {new Date().getFullYear()} JosseVFX. All rights reserved.</p>
          <a href="https://www.instagram.com/josse.vfx/" target="_blank" rel="noopener noreferrer" className="font-space font-bold uppercase tracking-widest text-sm text-gray-400 hover:text-vibrant-purple transition-colors">
            @josse.vfx
          </a>
        </div>
      </footer>
    </div>
  );
}
