import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/dhanoo.png";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <p className="text-primary font-medium mb-4 tracking-wider uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
              I'm <span className="text-primary">DHANAMALINI S</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Mern Stack Developer | Data Analyst | Java Developer | UI&UX Designer
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating 
              seamless digital experiences. With expertise in modern web technologies, 
              I transform ideas into powerful, user-friendly applications that make a difference.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="font-semibold"
              >
                <Mail className="mr-2 h-5 w-5" />
                HIRE ME
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="font-semibold"
              >
                MY WORKS
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="font-semibold"
                asChild
              >
                <a href="/DhanaMalini Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  DOWNLOAD CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Dhanamalini-S-git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhanamalini-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dhanamalini80@example.com"
                className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
              <a
                href="https://www.linkedin.com/in/dhanamalini-s/" // 👉 Change to your desired page
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 block"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary/30 
                             transition-transform duration-300 hover:scale-105 hover:border-primary cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
