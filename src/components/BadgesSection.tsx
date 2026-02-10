import { useState } from "react";
import { X } from "lucide-react";

//import aws from "@/assets/5.png";
import oracle from "@/assets/2.png";
import ibm from "@/assets/4.png";
import google from "@/assets/3.png";

const badges = [
  {
    title: "Introduction to RAG",
    platform: "IBM SkillsBuild",
    image: aws,
  },
  {
    title: "OCI Developer Professional",
    platform: "Oracle",
    image: oracle,
  },
  {
    title: "Generative AI Fundamentals",
    platform: "IBM SkillsBuild",
    image: ibm,
  },
  {
    title: "OCI AI Foundstions Associate",
    platform: "Oracle",
    image: google,
  },
];

const BadgesSection = () => {
  const [selectedBadge, setSelectedBadge] = useState<{
    title: string;
    platform: string;
    image: string;
  } | null>(null);

  return (
    <section id="badges" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Badges</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* BADGES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {badges.map((badge, index) => (
            <div
              key={index}
              onClick={() => setSelectedBadge(badge)}
              className="w-[200px] bg-card border border-border rounded-xl p-5 text-center cursor-pointer hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
            >
              <img
                src={badge.image}
                alt={badge.title}
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />

              <h3 className="font-semibold text-sm">
                {badge.title}
              </h3>

              <p className="text-xs text-muted-foreground mt-1">
                {badge.platform}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 BADGE MODAL */}
      {selectedBadge && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={() => setSelectedBadge(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedBadge(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* MODAL CONTENT */}
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedBadge.image}
              alt={selectedBadge.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border shadow-2xl"
            />

            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">
                {selectedBadge.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedBadge.platform}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BadgesSection;
