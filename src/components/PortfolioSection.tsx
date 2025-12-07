import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectCanuraniruang from "@/assets/project-canuraniruang.png";
import projectDietyuk from "@/assets/project-dietyuk.png";

const projects = [
  {
    title: "CANURANIRUANG",
    category: "Web Application",
    description: "Sistem Aspirasi Warga - Platform untuk menyampaikan keluhan dan aspirasi warga dengan dashboard admin lengkap.",
    image: projectCanuraniruang,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://desmayanti.github.io/CANURANIRUANG/pages/admin_dashboard.html",
    githubUrl: "https://github.com/desmayanti/CANURANIRUANG.git",
  },
  {
    title: "DietYuk",
    category: "Health & Fitness Web App",
    description: "Aplikasi pelacakan diet dan kesehatan dengan fitur log kalori, panduan nutrisi, dan kalkulator BMI/BMR.",
    image: projectDietyuk,
    tags: ["HTML", "CSS", "JavaScript", "Charts"],
    demoUrl: "https://desmayanti.github.io/DietYuk-web/",
    githubUrl: "https://github.com/desmayanti/DietYuk-web",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary text-glow-red">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full box-glow-red" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Projects I've worked on during my studies at SMKN 1 Ciomas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden card-gradient border border-border hover:border-primary transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{project.category}</p>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="glow" size="sm" className="flex-1" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="glow-outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} className="mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
