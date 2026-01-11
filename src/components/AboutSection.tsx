import { Code, Database, Layout, Server, Github, Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground text-lg text-center mb-8 leading-relaxed">
           I’m a B.E. Computer Science student with a strong interest in full stack development and a growing focus on building real-world applications using Java and the MERN stack. I enjoy understanding how things work—both on the frontend and backend—and turning ideas into functional, user-friendly solutions.

Over time, I’ve been developing skills in Java, JavaScript, React, Node.js, HTML, CSS, and basic backend APIs. I like exploring how different parts of a web application connect, and I’m constantly improving my problem-solving and clean-code practices.

I’m actively looking for opportunities—internships, projects, and collaborations—where I can learn from experienced developers, contribute to meaningful work, and grow into a strong full stack developer.

          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/arunraja-k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/arunraja-web"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          {/* Services Heading */}
          <h3 className="text-2xl font-bold font-display text-center mb-8">
            My <span className="text-primary">Services</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-secondary p-6 rounded-lg text-center group hover:bg-primary transition-all duration-300">
              <Code className="w-10 h-10 mx-auto mb-3 text-primary group-hover:text-primary-foreground transition-colors" />
              <h3 className="font-semibold group-hover:text-primary-foreground transition-colors">
                Mern Stack Development
              </h3>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center group hover:bg-primary transition-all duration-300">
              <Server className="w-10 h-10 mx-auto mb-3 text-primary group-hover:text-primary-foreground transition-colors" />
              <h3 className="font-semibold group-hover:text-primary-foreground transition-colors">
               UI&UX Design
              </h3>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center group hover:bg-primary transition-all duration-300">
              <Database className="w-10 h-10 mx-auto mb-3 text-primary group-hover:text-primary-foreground transition-colors" />
              <h3 className="font-semibold group-hover:text-primary-foreground transition-colors">
                Data Analytics
              </h3>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center group hover:bg-primary transition-all duration-300">
              <Layout className="w-10 h-10 mx-auto mb-3 text-primary group-hover:text-primary-foreground transition-colors" />
              <h3 className="font-semibold group-hover:text-primary-foreground transition-colors">
               Java Development
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
