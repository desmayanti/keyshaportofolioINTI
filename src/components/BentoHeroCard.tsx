import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import scoutAvatar from "@/assets/scout-avatar.png";

const BentoHeroCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Track while this section scrolls out of view
  });

  // Parallax Values
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Moves down relative to scroll so it appears to scroll slower up
  const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const avatarY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Sticky feel
  const elementsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Fade out fast

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden flex items-end justify-center pb-0 z-0"
    >
      {/* Background Massive Text Parallax (Z-Index 0) */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center w-full h-full z-0 pointer-events-none overflow-hidden"
      >
        <h1 className="text-[32vw] xl:text-[34vw] font-display text-[#FDF8E1] tracking-tighter leading-none whitespace-nowrap select-none opacity-90">
          PORTFOLIO
        </h1>
      </motion.div>

      {/* Dominant Character Avatar Parallax (Z-Index 10) */}
      <motion.img
        src={scoutAvatar}
        alt="Keysha Scout Avatar"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        style={{ 
          scale: avatarScale,
          y: avatarY
        }}
        className="relative z-10 h-[75vh] md:h-[85vh] w-auto object-contain [mask-image:linear-gradient(to_bottom,_black_75%,_transparent_100%)] drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      />

      {/* Bottom-Left Details (Quote) - Z-Index 20 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        style={{ opacity: elementsOpacity }}
        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 max-w-xs md:max-w-sm text-left pointer-events-auto"
      >
        <p className="text-white/80 font-poppins text-sm md:text-base font-medium leading-relaxed">
          "The scout doesn't fear the unknown trail — she maps it. The developer doesn't fear the unsolved problem — she debugs it. I am both."
        </p>
        <p className="text-[#FDF8E1] font-display text-xs md:text-sm mt-3 tracking-widest uppercase drop-shadow-md">
          KEYSHA DESMAYANTI — PPLG STUDENT
        </p>
      </motion.div>

      {/* Bottom-Right Details (Social Icons) - Z-Index 20 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        style={{ opacity: elementsOpacity }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex gap-6 items-center pointer-events-auto"
      >
        <a href="https://www.instagram.com/_ecaaaxline" target="_blank" rel="noopener noreferrer" className="text-[#FDF8E1] hover:scale-110 transition-transform drop-shadow-md">
          <Instagram size={24} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-[#FDF8E1] hover:scale-110 transition-transform drop-shadow-md">
          <Github size={24} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-[#FDF8E1] hover:scale-110 transition-transform drop-shadow-md">
          <Linkedin size={24} strokeWidth={1.5} />
        </a>
        <a href="mailto:keyshadesmaaa@gmail.com" className="text-[#FDF8E1] hover:scale-110 transition-transform drop-shadow-md">
          <Mail size={24} strokeWidth={1.5} />
        </a>
      </motion.div>
    </section>
  );
};

export default BentoHeroCard;
