import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/tic tac.avif";
import project2 from "@/assets/ai.webp";
import project3 from "@/assets/sales-dashboard_10.webp";

const projects = [
  {
    title: "Tic Tac Toe Game",
    description: "A simple Tic Tac Toe game with interactive UI and multiplayer logic.",
    image: project1,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhanamalini-S-git/Tictactoe_game.git",
  },
  {
    title: "Cognifyz Java Development Project",
    description: "Building robust, scalable, and efficient applications with clean code and modern practices.",
    image: project2,
    technologies: ["Java", "Core Java", "Advance Java"],
    github: "https://github.com/Dhanamalini-S-git/Cognifyz-Java-Development-Project.git",
    live: "#",
  },
  {
    title: "Sales Prediction Model",
    description: "Predictive model for analyzing sales trends and forecasting future performance.",
    image: project3,
    technologies: ["Machine Learning", "Seaborn", "PowerBI", "Excel"],
    github: "https://github.com/Dhanamalini-S-git/Sales-Prediction-project.git",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px] bg-secondary rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-background rounded-full text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live
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

export default ProjectsSection;