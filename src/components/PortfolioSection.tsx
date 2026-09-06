import { motion } from "framer-motion";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";
import projectCanuraImage from "@/assets/project-canuraniruang.png";
import projectDietyukImage from "@/assets/project-dietyuk.png";

const PortfolioSection = () => {
  const projects = [
    {
      title: "CANURANIRUANG",
      category: "Web Application",
      description: "A digital room design web application allowing users to visualize and customize interior spaces.",
      image: projectCanuraImage,
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      link: "#",
      featured: true,
    },
    {
      title: "DietYuk",
      category: "Health Platform",
      description: "Health and nutrition tracking platform to help users monitor their daily intake and achieve fitness goals.",
      image: projectDietyukImage,
      tags: ["PHP", "MySQL", "Tailwind", "JS"],
      link: "#",
      featured: true,
    }
  ];

  return (
    <section id="portfolio" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden border-none rounded-none py-32 z-30">
      {/* Background Massive Text (Z-Index 0) */}
      <div className="absolute inset-0 flex items-center justify-center w-full h-full z-0 pointer-events-none overflow-hidden">
        <h1 className="text-[20vw] md:text-[15vw] font-display text-[#FDF8E1] tracking-tighter leading-none whitespace-nowrap select-none opacity-20">
          MY PORTFOLIO
        </h1>
      </div>

      {/* Foreground Content (Z-Index 10) */}
      <div className="relative z-10 w-full px-8 md:px-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[90rem] mx-auto py-8"
        >
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-display text-3xl md:text-5xl tracking-wider text-white drop-shadow-lg mb-3">
              WHAT I'VE <span className="text-[#FDF8E1]">BUILT</span>
            </h2>
            <div className="w-16 h-1 bg-white mx-auto rounded-full drop-shadow-md" />
            <p className="text-white/90 drop-shadow-md mt-6 font-poppins max-w-2xl mx-auto text-sm md:text-lg">
              Selected projects that showcase my skills in frontend development, design, and full-stack problem solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="group relative rounded-2xl overflow-hidden bg-white/10 border border-white/30 backdrop-blur-md hover:border-white/50 transition-all duration-500 shadow-2xl"
              >
                {/* Project Image Container */}
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a href={project.link} className="w-14 h-14 rounded-full bg-[#F37100] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                      <MonitorPlay size={24} />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all shadow-lg">
                      <Github size={24} />
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#FDF8E1] text-xs font-poppins font-semibold tracking-wider uppercase drop-shadow-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] bg-white/20 text-white px-2 py-1 rounded-full border border-white/30 font-poppins drop-shadow-md">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display text-3xl text-white drop-shadow-md mb-3 group-hover:text-[#FDF8E1] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/95 text-sm md:text-base font-poppins leading-relaxed mb-6 drop-shadow-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-[11px] font-poppins text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-md drop-shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
