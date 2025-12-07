import { Code, Palette, Globe, Database, Smartphone, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and modern websites using HTML, CSS, JavaScript, and popular frameworks.",
    color: "primary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and user-friendly interfaces with attention to detail and user experience.",
    color: "accent",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Managing and organizing data efficiently using SQL and modern database systems.",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Learning to develop mobile applications for Android and cross-platform solutions.",
    color: "accent",
  },
  {
    icon: Globe,
    title: "Backend Development",
    description: "Understanding server-side programming and API development fundamentals.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical thinking and creative solutions for complex programming challenges.",
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary text-glow-red">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full box-glow-red" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are the skills I'm developing as a PPLG student at SMKN 1 Ciomas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl card-gradient border border-border hover:border-${skill.color} transition-all duration-500 cursor-default relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                skill.color === "primary" ? "bg-primary/5" : "bg-accent/5"
              }`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 ${
                  skill.color === "primary" 
                    ? "bg-primary/10 group-hover:bg-primary/20 group-hover:box-glow-red" 
                    : "bg-accent/10 group-hover:bg-accent/20 group-hover:box-glow-gold"
                }`}>
                  <skill.icon className={`w-8 h-8 ${
                    skill.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>
                
                <Button 
                  variant="glow" 
                  size="sm" 
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
