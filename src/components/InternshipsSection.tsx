import { Briefcase, Calendar } from "lucide-react";

const internships = [
  {
    title: "Data Analytics Intern",
    company: "Reccsar Pvt. Ltd. ",
    period: "Jan 2025 - Feb 2025",
    description:
      "Internship in Data Analytics – Assisted in collecting, cleaning, and analyzing datasets to identify business insights. Collaborated with the team to create dashboards and reports that improved decision-making efficiency",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Itech Academy",
    period: " Feb 2025",
    description:
      "Built RESTful APIs using Node.js and Express, integrated MongoDB databases, and created dynamic frontend interfaces.",
  },
  {
    title: "Mobile app Development Intern",
    company: "Dot Com Infoway Ltd.",
    period: "June 2025 - July 2025",
    description:
      "Processed datasets with Python and SQL to create visual insights for mobile app decisions..",
  },
];

const InternshipsSection = () => {
  return (
    <section id="internships" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-primary">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]"></div>
              <div className="bg-secondary p-6 rounded-lg hover:bg-secondary/80 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">
                    {internship.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{internship.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-foreground mb-3">
                  <Briefcase size={16} />
                  <span className="font-medium">{internship.company}</span>
                </div>
                <p className="text-muted-foreground">{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
