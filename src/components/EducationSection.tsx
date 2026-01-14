import { GraduationCap, School } from "lucide-react";

const education = [
  {
    type: "College",
    institution: "AAA College of Engineering and Technology,Sivakasi.",
    degree: "B.E - Computer Science and Engineering",
    duration: "2023 - 2027",
    description: "Pursuing undergraduate degree with focus on software development, data structures, and algorithms  CGPA: 8.6",
    icon: GraduationCap,
  },
  {
    type: "School",
    institution: "Kshatriya Girls Higher Secondary School, Virudhunagar.",
    degree: "12th - Maths Biology Group",
    duration: "2023",
    description: "Completed higher secondary education with a focus on Biology and Mathematics.",
    icon: School,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <edu.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-2">
                    {edu.type}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-primary font-medium mb-2">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.duration}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;