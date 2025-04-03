import React from 'react';
import { Section, WorkExperience, StudyExperience, Skill } from '@/type';
import IntroCard from './IntroCard';

interface SectionContentProps {
  section: Section;
}

const SectionContent: React.FC<SectionContentProps> = ({ section }) => {
  const renderExperience = (experience: WorkExperience | StudyExperience, index: number) => (
    <div key={index} className="mb-6">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-xl text-teal-300 font-semibold">{experience.title}</h2>
        <p className="text-gray-400">
          {experience.startDate} {experience.endDate ? ` - ${experience.endDate}` : ''}
        </p>
      </div>
      {'company' in experience && <p className="text-gray-400">{experience.company}</p>}
      {'institution' in experience && <p className="text-gray-400">{experience.institution}</p>}

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

  const renderContent = () => {
    switch (section.type) {
      case 'intro':
        return <IntroCard />;
      case 'work':
        return (
          <div>
            {(section.content as WorkExperience[]).map(renderExperience)}
          </div>
        );
      case 'study':
        return (
          <div>
            {(section.content as StudyExperience[]).map(renderExperience)}
          </div>
        );
      case 'skills':
        return (
          <div className="flex flex-wrap gap-6">
            {(section.content as Skill[]).map((skill: Skill, index: number) => (
              <div key={index} className="flex flex-col items-center">
                {skill.image && <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-2" />}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                {skill.links &&
                  skill.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link} className="text-blue-500 hover:underline">
                      {link}
                    </a>
                  ))}
              </div>
            ))}
          </div>
        );
      default:
        return <p>Content not available</p>;
    }
  };

  return (
    <section id={section.id} className="mb-16 scroll-mt-20" tabIndex={0}>
      {section.type !== 'intro' && (
        <h2 className="text-3xl font-bold text-primary mb-4">{section.label}</h2>
      )}
      {renderContent()}
    </section>
  );
};

export default SectionContent;