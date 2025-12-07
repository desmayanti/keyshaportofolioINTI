import { GraduationCap, Code, Heart, Target } from "lucide-react";
import profileImage from "@/assets/keysha-profile.png";
const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "SMKN 1 Ciomas - PPLG 2",
      color: "primary",
    },
    {
      icon: Code,
      title: "Major",
      description: "Software Engineering",
      color: "accent",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Web Development",
      color: "primary",
    },
    {
      icon: Target,
      title: "Goal",
      description: "Full-Stack Developer",
      color: "accent",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary text-glow-red">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full box-glow-red" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 transform rotate-6" />
              <div className="absolute inset-0 rounded-2xl bg-card border border-border overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Keysha Desmayanti"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Hi, I'm <span className="text-accent text-glow-gold">Keysha!</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a vocational high school student at SMKN 1 Ciomas, currently pursuing 
                Software Engineering and Game Development (PPLG) in class PPLG 2. 
                I'm passionate about creating innovative digital solutions and constantly 
                expanding my knowledge in web development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology started with curiosity about how websites work, 
                and now I'm dedicated to mastering the skills needed to become a 
                professional full-stack developer.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl bg-card border border-border hover:border-${item.color} transition-all duration-300 group cursor-default`}
                >
                  <item.icon
                    className={`w-8 h-8 mb-3 ${
                      item.color === "primary" 
                        ? "text-primary group-hover:text-glow-red" 
                        : "text-accent group-hover:text-glow-gold"
                    } transition-all duration-300`}
                  />
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
