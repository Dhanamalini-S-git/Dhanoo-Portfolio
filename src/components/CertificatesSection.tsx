import { useState } from "react";
import { X } from "lucide-react";

// Certificate Images
import certificateOracle from "@/assets/oracle.jpeg";
import certificateReccsar from "@/assets/recsar.jpeg";
import certificateIBM from "@/assets/ibm.png";
import certificateITech from "@/assets/itech.jpeg";
import certificateDCI from "@/assets/dci.jpeg";

// Certificates Data (Only 5)
const certificates = [
  {
    title: "OCI Generative AI Professional",
    organization: "Oracle",
    image: certificateOracle,
  },
  {
    title: "Data Analytics Using Python",
    organization: "Reccsar",
    image: certificateReccsar,
  },
  {
    title: "Introduction To RAG",
    organization: "IBM SkillsBuild",
    image: certificateIBM,
  },
  {
    title: "Full Stack Development",
    organization: "ITech Academy",
    image: certificateITech,
  },
  {
    title: "Mobile App Development",
    organization: "Dot Com Infoway Ltd.",
    image: certificateDCI,
  },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    organization: string;
    image: string;
  } | null>(null);

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-primary">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Certificates Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="group relative w-[280px] md:w-[320px] bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  {cert.organization}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <X className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Image Preview */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-border shadow-2xl shadow-primary/20"
            />

            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-foreground">
                {selectedCert.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedCert.organization}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
