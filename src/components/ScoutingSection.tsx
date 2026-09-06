import { motion } from "framer-motion";
import { Compass, Quote, Award, Flame } from "lucide-react";

const ScoutingSection = () => {
  return (
    <section className="relative w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden z-10">
      {/* Keep the same ambient glow to match the theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] z-0 pointer-events-none"></div>

      {/* AMBIENT BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        
        {/* 1. Massive Center Typography Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-[0.03] select-none">
          <h1 className="text-[18vw] font-black whitespace-nowrap tracking-tighter text-white">JENSDIKA</h1>
        </div>

        {/* 2. Blurred Scout Logo (Left Side) */}
        <div className="absolute -left-32 top-1/4 w-[500px] h-[500px] opacity-10 blur-[12px] transform -rotate-12 select-none">
          <img 
            src="/pramuka-logo.png" 
            alt="Ambient Scout Logo" 
            className="w-full h-full object-contain filter grayscale invert"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        {/* 3. Blurred Compass Icon (Right Side) */}
        <div className="absolute -right-32 bottom-1/4 opacity-[0.07] blur-[8px] transform rotate-12 select-none text-white">
          <Compass size={450} strokeWidth={1} />
        </div>

        {/* 4. Additional Glowing Orbs for Depth */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* FOREGROUND LEFT DECORATION: Vertical Text & Line */}
      <div className="hidden xl:flex flex-col items-center absolute left-8 top-1/2 -translate-y-1/2 z-20 gap-6 opacity-60">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent to-white/50"></div>
        <p className="text-white/80 font-mono text-xs tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Scout &bull; Code &bull; Create
        </p>
        <div className="w-[1px] h-32 bg-gradient-to-t from-transparent to-white/50"></div>
      </div>

      {/* FOREGROUND RIGHT DECORATION: Floating Status Badges */}
      <div className="hidden xl:flex flex-col absolute right-8 top-1/3 z-20 gap-4">
        {/* Badge 1 */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl flex items-center gap-3 transform translate-x-4 hover:translate-x-0 transition-transform duration-300">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <div>
            <p className="text-[#FDF8E1] text-[10px] font-bold uppercase tracking-wider">Role</p>
            <p className="text-white text-xs font-medium">Penegak Jurnalistik</p>
          </div>
        </div>
        
        {/* Badge 2 */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl flex items-center gap-3 transform -translate-x-2 hover:translate-x-0 transition-transform duration-300">
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          <div>
            <p className="text-[#FDF8E1] text-[10px] font-bold uppercase tracking-wider">Ambalan</p>
            <p className="text-white text-xs font-medium">Jensdika</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center mb-16">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 text-red-500/20"
        >
          <Compass size={120} />
        </motion.div>
        <p className="relative text-red-400 text-sm tracking-[0.3em] font-semibold uppercase mb-2 flex items-center justify-center gap-2">
          <Flame size={16} /> THE SCOUT WITHIN
        </p>
        <h2 className="relative text-4xl md:text-5xl font-bold text-[#FDF8E1]">Story of Scouting</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex justify-center items-center gap-6 md:gap-12 mb-20 w-full max-w-7xl mx-auto px-4 lg:px-0"
      >
        {/* Left Image */}
        <div className="w-1/3 md:w-[40%] aspect-[3/4] rounded-2xl overflow-hidden opacity-50 hover:opacity-100 transition-all duration-500 scale-90 hover:scale-95 cursor-pointer border border-white/10 hidden sm:block shadow-xl">
          <img src="/pramuka1.png" alt="Scout Left" className="w-full h-full object-cover" />
        </div>
        
        {/* Center Image (Main Focus) */}
        <div className="relative w-3/4 sm:w-[45%] md:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.4)] border border-red-500/50 z-20 scale-105 transition-transform duration-500 hover:scale-110 group">
          <img src="/pramuka2.png" alt="Scout Center" className="w-full h-full object-cover" />
          {/* Floating Badges */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Award size={12} className="text-yellow-400"/> Penegak
          </div>
          <div className="absolute bottom-4 right-4 bg-red-600/80 backdrop-blur-md border border-red-400/50 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            Jurnalistik
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-1/3 md:w-[40%] aspect-[3/4] rounded-2xl overflow-hidden opacity-50 hover:opacity-100 transition-all duration-500 scale-90 hover:scale-95 cursor-pointer border border-white/10 hidden sm:block shadow-xl">
          <img src="/pramuka3.jpg" alt="Scout Right" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start px-4 lg:px-0"
      >
        {/* Story Content */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute -right-8 -bottom-8 opacity-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            <Compass size={200} />
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-[#FDF8E1] mb-4 uppercase tracking-wide relative z-10">Beyond the Code</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 relative z-10">
            Serving as the Penegak Jurnalistik Sekolah for Ambalan Jensdika has taught me that the wilderness and the terminal demand the same courage. Every trail conquered and every badge earned is a testament to discipline, leadership, and heart.
          </p>
          
          <div className="relative z-10 mt-auto">
            <Quote className="text-red-500/40 absolute -top-4 -left-2 rotate-180" size={32} />
            <p className="text-red-300 italic text-sm md:text-base pl-6 relative z-10 font-medium">
              "The scout doesn't fear the unknown trail — she maps it. The developer doesn't fear the unsolved problem — she debugs it. I am both."
            </p>
          </div>
        </div>

        {/* Playable Music Widget */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#FDF8E1] mb-2 uppercase tracking-wide">Favorite Song</h3>
          <p className="text-gray-400 text-xs md:text-sm mb-6 tracking-widest uppercase">The soundtrack of the expedition</p>
          
          {/* Spotify Embed iframe (Dark Theme) */}
          <div className="w-full rounded-xl overflow-hidden shadow-xl bg-black">
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/track/2262bWmqomIaJXwCRHr13j?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-gray-400 text-xs md:text-sm mt-6 leading-relaxed">
            A song about longing for the open sea, and the quiet courage of choosing to sail anyway — even when the destination is unknown.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ScoutingSection;
