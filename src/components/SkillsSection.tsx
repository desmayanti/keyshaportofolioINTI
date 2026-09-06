import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  MonitorSmartphone, Code2, Paintbrush, Database, Figma, Terminal, 
  Server, Layers, Cpu, Github, PenTool, Laptop
} from "lucide-react";

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Track while this section is anywhere in viewport
  });

  // Map vertical scroll to horizontal movement for the massive background text
  const textX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const skills = [
    { name: "React.js", icon: MonitorSmartphone },
    { name: "Tailwind CSS", icon: Paintbrush },
    { name: "PHP", icon: Server },
    { name: "MySQL", icon: Database },
    { name: "Figma", icon: Figma },
    { name: "JavaScript", icon: Code2 },
    { name: "HTML5 & CSS3", icon: Layers },
    { name: "Node.js (Basic)", icon: Cpu },
    { name: "Git & GitHub", icon: Github },
    { name: "UI Prototyping", icon: PenTool },
    { name: "Responsive Design", icon: Laptop },
    { name: "REST APIs", icon: Terminal },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 400, damping: 10 } // Explosive burst stagger
    }
  };

  return (
    <section 
      ref={ref} 
      id="skills" 
      className="relative z-30 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden border-none rounded-none py-32"
    >
      {/* Background Massive Text (Horizontal Parallax) */}
      <motion.div 
        style={{ x: textX }}
        className="absolute inset-0 flex items-center justify-center w-full h-full z-0 pointer-events-none whitespace-nowrap opacity-20"
      >
        <h1 className="text-[20vw] md:text-[25vw] font-display text-[#FDF8E1] tracking-tighter leading-none select-none">
          MY SKILLS - TECH STACK -
        </h1>
      </motion.div>

      {/* Foreground Content - The Floating Cluster */}
      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col items-center">
        <div className="w-full max-w-[80rem] mx-auto py-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-display text-3xl md:text-5xl tracking-wider text-white drop-shadow-lg mb-3">
              TECH <span className="text-[#FDF8E1]">STACK</span>
            </h2>
            <div className="w-16 h-1 bg-white mx-auto rounded-full drop-shadow-md" />
            <p className="text-white/60 mt-6 font-poppins max-w-2xl mx-auto text-sm md:text-lg">
              The tools and technologies I wield to bring digital ideas to life, freely floating in my digital space.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {skills.map((skill, index) => {
              const randomDuration = 4 + (index % 3);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                    transition={{ repeat: Infinity, duration: randomDuration, ease: "easeInOut" }}
                    whileHover={{ 
                      scale: 1.15, 
                      backgroundColor: "rgba(255,255,255,0.1)", 
                      zIndex: 50, 
                      transition: { type: "spring", stiffness: 400, damping: 10 } 
                    }}
                    className="px-6 py-4 md:px-8 md:py-5 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 backdrop-blur-md shadow-xl"
                  >
                    <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow-md" />
                    <span className="text-white font-poppins font-medium text-sm md:text-base drop-shadow-md whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
