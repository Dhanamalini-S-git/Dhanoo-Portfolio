const skills = [
  { name: "React.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Git & Github", image: "https://tse1.explicit.bing.net/th/id/OIP._c0EZbkgQU8uTRZYeIALWgHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PowerBI", image: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png" },
  { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Excel", image: "https://i1.wp.com/www.ardilu.com/wp-content/uploads/2020/06/Microsoft-Excel.png?ssl=1" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="relative w-14 h-14 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="font-medium text-sm text-center text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
