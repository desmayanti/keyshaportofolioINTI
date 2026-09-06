import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Heart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-30 w-full min-h-screen flex flex-col items-center justify-between overflow-hidden border-none rounded-none pt-32 pb-0">
      {/* Background Massive Text (Z-Index 0) */}
      <div className="absolute inset-0 flex items-center justify-center w-full h-full z-0 pointer-events-none overflow-hidden">
        <h1 className="text-[20vw] md:text-[15vw] font-display text-[#FDF8E1] tracking-tighter leading-none whitespace-nowrap select-none opacity-20">
          CONTACT ME
        </h1>
      </div>

      {/* Foreground Content - No wrapper background (Z-Index 10) */}
      <div className="flex-1 flex flex-col justify-center w-full px-8 md:px-16 relative z-10 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[90rem] mx-auto"
        >
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-display text-3xl md:text-5xl tracking-wider text-white drop-shadow-lg mb-3">
              LET'S <span className="text-[#FDF8E1]">CONNECT</span>
            </h2>
            <div className="w-16 h-1 bg-white mx-auto rounded-full drop-shadow-md" />
            <p className="text-white/90 drop-shadow-md mt-6 font-poppins max-w-2xl mx-auto text-sm md:text-lg">
              Whether it's a project collaboration, a tech question, or just a friendly hello — I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-xl cursor-default">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30">
                  <Mail className="w-6 h-6 text-white drop-shadow-md" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-poppins font-bold uppercase tracking-wider mb-2 drop-shadow-md">
                    Email
                  </p>
                  <a 
                    href="mailto:keyshadesmaaa@gmail.com" 
                    className="text-white font-display text-2xl hover:text-[#FDF8E1] transition-colors drop-shadow-md"
                  >
                    keyshadesmaaa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-xl cursor-default">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30">
                  <MapPin className="w-6 h-6 text-white drop-shadow-md" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-poppins font-bold uppercase tracking-wider mb-2 drop-shadow-md">
                    Location
                  </p>
                  <p className="text-white font-display text-2xl drop-shadow-md">
                    Ciomas, Indonesia
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-8 relative overflow-hidden shadow-xl mt-4">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
                <h4 className="font-display text-3xl text-white drop-shadow-md mb-4">Available for Opportunities</h4>
                <p className="text-white/95 font-poppins text-base md:text-lg leading-relaxed drop-shadow-sm">
                  I'm currently open for new projects and collaborations. 
                  Feel free to reach out if you have an idea in mind.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white h-14 font-poppins text-lg rounded-xl shadow-inner"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white h-14 font-poppins text-lg rounded-xl shadow-inner"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white min-h-[180px] resize-none font-poppins text-lg rounded-xl shadow-inner pt-4"
                  />
                </div>
                <Button 
                  variant="glow" 
                  className="w-full h-14 group mt-4 text-lg bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/50"
                >
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer embedded within the contact section to maintain snap consistency */}
      <footer className="relative z-10 w-full border-t border-white/20 py-8 bg-black/20 backdrop-blur-md">
        <div className="w-full px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[90rem] mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center border border-white/30 shadow-lg">
              <span className="text-white font-display text-xl tracking-wider">K</span>
            </div>
            <span className="font-display text-xl tracking-wider text-white drop-shadow-md">KEYSHA DESMAYANTI</span>
          </div>
          <p className="text-white/90 text-sm md:text-base flex items-center gap-2 font-poppins drop-shadow-sm">
            Made with <Heart className="w-5 h-5 text-white fill-white" /> by Keysha
          </p>
          <p className="text-white/90 text-sm md:text-base font-poppins drop-shadow-sm">
            © 2024 All Rights Reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
