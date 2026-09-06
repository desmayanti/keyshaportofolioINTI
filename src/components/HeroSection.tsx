import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Mail, Download, ChevronDown } from "lucide-react";
import profileImage from "@/assets/keysha-profile.png";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/_ecaaaxline",
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/6283829044379",
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:keyshadesmaaa@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="home" className="relative w-full min-h-screen md:h-screen flex flex-col items-center justify-center overflow-hidden border-none rounded-none snap-center">
      {/* Background Massive Text (Z-Index 0) */}
      <div className="absolute inset-0 flex items-center justify-center w-full h-full z-0 pointer-events-none overflow-hidden">
        <h1 className="text-[20vw] md:text-[15vw] font-display text-[#FDF8E1] tracking-tighter leading-none whitespace-nowrap select-none opacity-20">
          INTRODUCTION
        </h1>
      </div>

      {/* Foreground Content - No wrapper background (Z-Index 10) */}
      <div className="relative z-10 w-full px-8 md:px-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="w-full max-w-[90rem] mx-auto py-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <p className="text-white/90 drop-shadow-md text-lg mb-2 font-poppins">Hey, I am</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider text-white drop-shadow-lg mb-4">
                <span>KEYSHA </span>
                <span className="text-[#F37100]">DESMAYANTI</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <span className="text-white/90 drop-shadow-md text-xl font-poppins">and I'm a</span>
                <span className="text-[#F37100] text-xl font-semibold font-poppins drop-shadow-md">
                  PPLG Student
                </span>
                <span className="w-0.5 h-6 bg-[#F37100] animate-pulse" />
              </div>

              <p className="text-white/90 drop-shadow-md mb-8 max-w-md mx-auto lg:mx-0 font-poppins leading-relaxed">
                A passionate student at <span className="text-[#F37100] font-medium">SMKN 1 Ciomas</span>, 
                majoring in Software Engineering (PPLG) Class PPLG 2. 
                Ready to learn and grow in the world of technology.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button variant="glow-outline" size="xl" className="group text-white border-white/50 hover:bg-white/10">
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                  Download CV
                </Button>
                <Button 
                  variant="glow" 
                  size="xl"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Hire Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-white/90 drop-shadow-md text-sm font-poppins">My Socials</span>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white hover:text-[#F37100] hover:border-[#F37100]/60 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
                {/* Decorative Circle */}
                <div className="absolute inset-0 rounded-full border-4 border-[#FDF8E1]/30 animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full border-2 border-white/20" />
                
                {/* Profile Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden bg-black/20 backdrop-blur-md">
                  <img 
                    src={profileImage} 
                    alt="Keysha Desmayanti"
                    className="w-full h-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-lg bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center shadow-xl"
                >
                  <span className="text-2xl drop-shadow-lg">💻</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center shadow-xl"
                >
                  <span className="text-xl drop-shadow-lg">🎓</span>
                </motion.div>
              </div>

              {/* Info Cards */}
              <div className="absolute top-1/2 -right-4 md:right-0 transform translate-x-0 md:translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl p-4 shadow-2xl">
                <p className="text-xs text-white/90 uppercase tracking-wider mb-1 font-poppins drop-shadow-md">Aspiring</p>
                <h3 className="text-lg font-display tracking-wider text-white drop-shadow-md">SOFTWARE</h3>
                <h3 className="text-lg font-display tracking-wider text-[#FDF8E1] drop-shadow-md">ENGINEER</h3>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <div className="text-center mt-12 md:mt-16">
            <p className="text-white/90 drop-shadow-md italic font-poppins text-sm md:text-lg">
              <span className="text-[#FDF8E1] font-semibold">Tech</span> is my passion. 
              <span className="text-[#FDF8E1] font-semibold"> Learning</span> is my drive. 
              <span className="text-[#FDF8E1] font-semibold"> Growth</span> is my goal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
