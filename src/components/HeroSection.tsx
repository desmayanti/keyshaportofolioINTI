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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground text-lg mb-2">Hey, I am</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Keysha</span>{" "}
              <span className="text-primary text-glow-red">Desmayanti</span>
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="text-foreground text-xl">and I'm a</span>
              <span className="text-primary text-glow-red text-xl font-semibold">
                PPLG Student
              </span>
              <span className="w-0.5 h-6 bg-primary animate-pulse" />
            </div>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              A passionate student at <span className="text-accent text-glow-gold font-medium">SMKN 1 Ciomas</span>, 
              majoring in Software Engineering (PPLG) Class PPLG 2. 
              Ready to learn and grow in the world of technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="glow-outline" size="xl" className="group">
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
              <span className="text-muted-foreground text-sm">My Socials</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:box-glow-red transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative order-1 lg:order-2 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              {/* Decorative Circle */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full border-2 border-accent/20" />
              
              {/* Profile Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Keysha Desmayanti"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-lg bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center animate-float">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-xl">🎓</span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="absolute top-1/2 -right-4 md:right-0 transform translate-x-0 md:translate-x-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <p className="text-xs text-accent text-glow-gold uppercase tracking-wider mb-1">Aspiring</p>
              <h3 className="text-lg font-bold text-foreground">Software</h3>
              <h3 className="text-lg font-bold text-primary text-glow-red">Engineer</h3>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <p className="text-muted-foreground italic">
            <span className="text-primary">Tech</span> is my passion. 
            <span className="text-accent"> Learning</span> is my drive. 
            <span className="text-primary">Growth</span> is my goal.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
