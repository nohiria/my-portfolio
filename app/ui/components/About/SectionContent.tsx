import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import { Section, WorkExperience, StudyExperience, Skill } from "@/type";
import IntroCard from "./IntroCard";

interface SectionContentProps {
  section: Section;
}

// Function to dynamically get the corresponding icon
const getIconComponent = (iconName: keyof typeof FaIcons | keyof typeof SiIcons | keyof typeof GrIcons) => {
  return (
    FaIcons[iconName as keyof typeof FaIcons] ||
    SiIcons[iconName as keyof typeof SiIcons] ||
    GrIcons[iconName as keyof typeof GrIcons] ||
    FaIcons.FaDatabase // Default icon if not found
  );
};

const SectionContent: React.FC<SectionContentProps> = ({ section }) => {
  // Render work or study experience
  const renderExperience = (experience: WorkExperience | StudyExperience, index: number) => (
    <div key={index} className="mb-6">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-xl text-teal-300 font-semibold">{experience.title}</h2>
        <p className="text-gray-400">
          {experience.startDate} {experience.endDate ? ` - ${experience.endDate}` : ""}
        </p>
      </div>
      {"company" in experience && <p className="text-gray-400">{experience.company}</p>}
      {"institution" in experience && <p className="text-gray-400">{experience.institution}</p>}

      {Array.isArray(experience.description) ? (
        <ul className="list-disc marker:text-teal-300 list-inside text-gray-300 mt-2 pl-0 md:pl-5">
          {experience.description.map((point, i) => (
            <li key={i} className="mt-2 pl-6">{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-300 mt-2">{experience.description}</p>
      )}
    </div>
  );

  // Render content based on section type
  const renderContent = () => {
    switch (section.type) {
      case "intro":
        return <IntroCard />;
      case "work":
        return <div>{(section.content as WorkExperience[]).map(renderExperience)}</div>;
      case "study":
        return <div>{(section.content as StudyExperience[]).map(renderExperience)}</div>;
      case "skills":
        return (
          <div className="flex flex-wrap gap-6 justify-center">
            {(section.content as Skill[]).map((skill, index) => {
              const IconComponent = getIconComponent(skill.icon);
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  {skill.links && skill.links.length > 0 ? (
                    <a
                      href={skill.links[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={skill.name}
                      aria-label={skill.name}
                      role="img"
                    >
                      <IconComponent className="w-10 h-10 text-gray-400 hover:text-pink-500" />
                    </a>
                  ) : (
                    <span title={skill.name} aria-label={skill.name} role="img">
                      <IconComponent className="w-10 h-10 text-gray-400 hover:text-pink-500" />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        );
      default:
        return <p>Content not available</p>;
    }
  };

  return (
    <section id={section.id} className="mb-16 scroll-mt-20" tabIndex={0}>
      {section.type !== "intro" && <h2 className="text-3xl font-bold text-primary mb-4">{section.label}</h2>}
      {renderContent()}
    </section>
  );
};

export default SectionContent;