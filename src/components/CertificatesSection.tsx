import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Cloud, Layout, Monitor, TerminalSquare, Server, Layers, Database, Bot, Trophy } from 'lucide-react';

export default function CertificationsSection() {
  const certificates = [
    // FEATURED (Top 2)
    { title: "Best Capstone Team - Coding Camp 2026 (DashUMKM)", date: "11 May 2026", issuer: "Dicoding & DBS Foundation", icon: <Trophy size={32}/>, link: "#" },
    { title: "Full-Stack Web Developer Graduate - Coding Camp", date: "11 May 2026", issuer: "Dicoding & DBS Foundation", icon: <Award size={32}/>, link: "#" },
    
    // STANDARD (The Rest)
    { title: "Memulai Pemrograman dengan Python", date: "30 Mar 2026", issuer: "Dicoding & Google", icon: <TerminalSquare size={20}/>, link: "https://dicoding.com/certificates/NVP7N808OZR0" },
    { title: "Membangun Aplikasi Gen AI dengan Microsoft Azure", date: "24 Mar 2026", issuer: "Dicoding & Microsoft", icon: <Bot size={20}/>, link: "https://dicoding.com/certificates/L4PQ988N2PO1" },
    { title: "Penerapan Data Science dengan Microsoft Fabric", date: "18 Mar 2026", issuer: "Dicoding & Microsoft", icon: <Database size={20}/>, link: "https://dicoding.com/certificates/GRX5WDVRKZOM" },
    { title: "Belajar Membuat Aplikasi Web dengan React", date: "15 Feb 2026", issuer: "Dicoding", icon: <Layers size={20}/>, link: "https://dicoding.com/certificates/81P20130ΥΖΟΥ" },
    { title: "Belajar Back-End Pemula dengan JavaScript", date: "15 Feb 2026", issuer: "Dicoding & AWS", icon: <Server size={20}/>, link: "https://dicoding.com/certificates/RVZK0408OZD5" },
    { title: "Belajar Dasar Pemrograman JavaScript", date: "01 Feb 2026", issuer: "Dicoding", icon: <TerminalSquare size={20}/>, link: "https://dicoding.com/certificates/81P25E0JYPOY" },
    { title: "Belajar Membuat Front-End Web untuk Pemula", date: "29 Jan 2026", issuer: "Dicoding", icon: <Monitor size={20}/>, link: "https://dicoding.com/certificates/L4PQ2NDQOZO1" },
    { title: "Belajar Dasar Pemrograman Web", date: "23 Jan 2026", issuer: "Dicoding & Google", icon: <Layout size={20}/>, link: "https://dicoding.com/certificates/72ZDK15GVPYW" },
    { title: "Belajar Dasar Cloud dan Gen AI di AWS", date: "16 Jan 2026", issuer: "Dicoding & AWS", icon: <Cloud size={20}/>, link: "https://dicoding.com/certificates/MRZM6MLLKPYQ" },
    { title: "Pengenalan ke Logika Pemrograman (101)", date: "14 Jan 2026", issuer: "Dicoding", icon: <Code size={20}/>, link: "https://dicoding.com/certificates/OLZ05LOE3X65" },
    { title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang", date: "14 Jan 2026", issuer: "Dicoding", icon: <Code size={20}/>, link: "https://dicoding.com/certificates/RVZKG29JQXD5" }
  ];

  return (
    <section className="relative w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden z-10 mt-12">
      
      {/* AMBIENT BACKGROUND DECORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <h1 className="text-[18vw] font-black whitespace-nowrap tracking-tighter text-white opacity-[0.03] select-none transform -rotate-2">
          CERTIFIED
        </h1>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]"></div>
      </div>

      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-16"
      >
        <p className="text-red-400 text-sm tracking-[0.3em] font-semibold uppercase mb-2">&mdash; MILESTONES</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#FDF8E1]">My Certificates</h2>
      </motion.div>

      {/* FEATURED VIP CERTIFICATES (Top 2) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {certificates.slice(0, 2).map((cert, index) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2, type: "spring" }}
            key={`featured-${index}`}
            className="relative group rounded-[2rem] p-[2px] overflow-hidden"
          >
            {/* Animated Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-400 to-red-600 opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-pulse"></div>
            
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex flex-col justify-between h-full bg-black/80 backdrop-blur-2xl p-8 rounded-[2rem] hover:bg-black/60 transition-colors duration-300 z-10"
            >
              {/* Top Badge */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] transform group-hover:rotate-12 transition-transform duration-500">
                  {cert.icon}
                </div>
                <span className="px-4 py-1.5 bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest rounded-full border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  Top Achievement
                </span>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 group-hover:to-white transition-all">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-orange-300 text-xs font-bold uppercase tracking-wider">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm font-mono mt-1">{cert.date}</p>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* STANDARD PROFESSIONAL CERTIFICATES (The Rest) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest text-center">Professional Certifications</p>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certificates.slice(2).map((cert, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              key={`standard-${index}`}
              className="h-full"
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg hover:-translate-y-2 hover:bg-white/10 hover:border-red-500/50 hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)] transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-black/40 rounded-xl flex items-center justify-center text-red-400 border border-white/5 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {cert.icon}
                  </div>
                  <p className="text-gray-500 text-[10px] font-mono group-hover:text-red-300 transition-colors">{cert.date}</p>
                </div>
                
                <h3 className="text-gray-200 text-sm font-bold leading-snug mb-4 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                  <p className="text-red-400/70 text-[10px] font-bold uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    {cert.issuer}
                  </p>
                  <Award size={14} className="text-gray-600 group-hover:text-red-400 transition-colors" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
