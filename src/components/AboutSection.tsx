import { motion } from "framer-motion";
import { GraduationCap, Shield, Camera, PenTool, Globe } from 'lucide-react';

const softwareSkills = [
  { name: "Photoshop", icon: "/ps.png" },
  { name: "Lightroom", icon: "/lr.png" },
  { name: "Canva", icon: "/canva.png" },
  { name: "Figma", icon: "/figma.png" },
  { name: "CapCut", icon: "/capcut.png" },
  { name: "Snapseed", icon: "/snapseed.png" },
  { name: "Ibis Paint X", icon: "/ibispaint.png" }
];

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* 1. Add Massive Background Text (Z-Index 0) */}
      <div className="absolute inset-0 flex items-center justify-center w-full h-full z-0 pointer-events-none overflow-hidden">
        <h1 className="text-[22vw] font-bold text-white/[0.03] tracking-tighter leading-none whitespace-nowrap select-none">ABOUT ME</h1>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        
        {/* Left Column (Layered Photo Placeholder) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-[4/5] max-w-md mx-auto z-10 group"
        >
          {/* Background Layer 1 (Tilted Left) */}
          <img 
            src="/foto-kiri.jpg" 
            alt="Background 1" 
            className="absolute inset-0 w-full h-full object-cover rounded-3xl transform -rotate-6 scale-95 origin-bottom-left shadow-2xl transition-transform duration-500 group-hover:-rotate-12 border border-white/20 opacity-70"
          />
          
          {/* Background Layer 2 (Tilted Right) */}
          <img 
            src="/foto-kanan.jpg" 
            alt="Background 2" 
            className="absolute inset-0 w-full h-full object-cover rounded-3xl transform rotate-6 scale-95 origin-bottom-right shadow-2xl transition-transform duration-500 group-hover:rotate-12 border border-white/20 opacity-70"
          />
          
          {/* Main Foreground Card (Center) */}
          <img 
            src="/foto-utama.jpg" 
            alt="Keysha Main" 
            className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/30 z-10 transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* CRITICAL - The Code Snippet Badge */}
          <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[#1e1e1e] border border-white/20 p-4 rounded-xl shadow-2xl font-mono text-xs text-left z-20 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
            <span className="text-pink-500">const</span> <span className="text-blue-400">keysha</span> <span className="text-white">=</span> <span className="text-yellow-300">&#123;</span><br/>
            &nbsp;&nbsp;<span className="text-sky-300">role</span>: <span className="text-orange-300">"Developer"</span>,<br/>
            &nbsp;&nbsp;<span className="text-sky-300">photograph</span>: <span className="text-orange-300">"Moments"</span><br/>
            <span className="text-yellow-300">&#125;</span>
          </div>
        </motion.div>

        {/* Right Column (Content & Info Grid) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full flex flex-col gap-8 relative z-10 mt-4 lg:mt-8"
        >
          {/* ABOUT ME Section */}
          <div className="mb-2">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FDF8E1] to-red-400 mb-4 uppercase tracking-wide">About Me</h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed uppercase tracking-wide">
              HI, I'M KEYSHA DESMAYANTI. A VOCATIONAL HIGH SCHOOL STUDENT AT SMKN 1 CIOMAS (PPLG 2). I'M PASSIONATE ABOUT CREATING INNOVATIVE DIGITAL SOLUTIONS AND CONSTANTLY EXPANDING MY KNOWLEDGE IN WEB DEVELOPMENT AND GRAPHIC DESIGN.
            </p>
          </div>

          {/* SOFTWARE SKILLS Section */}
          <div className="mb-2 pt-6">
            <h3 className="text-xl font-bold text-[#FDF8E1] mb-4 uppercase tracking-wide">Software Skills</h3>
            <div className="flex flex-wrap gap-4 mt-6">
              {softwareSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  title={skill.name}
                  className="w-14 h-14 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 hover:bg-white/90 hover:border-white transition-all duration-300 group overflow-hidden"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-9 h-9 object-contain opacity-90 group-hover:opacity-100 transition-all mix-blend-multiply drop-shadow-sm" 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-white/10 my-1"></div>

          {/* EDUCATION & EXPERIENCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 relative z-10">
            {/* New Creative Roles Card (Spans full width) */}
            <div className="md:col-span-2 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/40 transition-all duration-300 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
              <div className="flex-1">
                <h3 className="text-[10px] font-bold text-[#FDF8E1] uppercase tracking-widest mb-3 opacity-80">Creative Arsenal</h3>
                <p className="text-white text-sm font-bold flex items-center gap-2 mb-1"><Camera size={16} className="text-red-400"/> Photography & Video</p>
                <p className="text-gray-300 text-xs">Capturing moments, crafting visual stories, and video editing.</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div className="flex-1">
                <p className="text-white text-sm font-bold flex items-center gap-2 mb-1"><PenTool size={16} className="text-red-400"/> Graphic Design</p>
                <p className="text-gray-300 text-xs">Illustrations, UI/UX prototyping, and creative visual assets.</p>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/20 rounded-lg text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors"><GraduationCap size={18}/></div>
                <h3 className="text-[10px] font-bold text-[#FDF8E1] uppercase tracking-widest opacity-80">Education</h3>
              </div>
              <p className="text-white text-sm font-bold mb-1">• 2025 - Present</p>
              <p className="text-gray-200 text-sm font-medium">SMKN 1 CIOMAS</p>
              <p className="text-gray-400 text-xs mt-1">Software Engineering (PPLG 2)</p>
            </div>

            {/* Experience Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/20 rounded-lg text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors"><Shield size={18}/></div>
                <h3 className="text-[10px] font-bold text-[#FDF8E1] uppercase tracking-widest opacity-80">Experience</h3>
              </div>
              <p className="text-white text-sm font-bold mb-1">AMBALAN JENSDIKA</p>
              <p className="text-gray-200 text-sm font-medium">Active Member</p>
              <p className="text-gray-400 text-xs mt-1">Scout Discipline & Leadership</p>
            </div>

            {/* Languages with Animated Progress Bars */}
            <div className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full hover:border-white/40 transition-all duration-300">
              <h3 className="text-[10px] font-bold text-[#FDF8E1] uppercase tracking-widest mb-4 flex items-center gap-2 opacity-80"><Globe size={14} className="text-red-400"/> Language (Communication)</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Indonesia</span>
                    <span className="text-[#FDF8E1] text-xs font-mono font-bold">95%</span>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-600 to-[#FDF8E1] h-1.5 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">English</span>
                    <span className="text-[#FDF8E1] text-xs font-mono font-bold">75%</span>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-600 to-[#FDF8E1] h-1.5 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
