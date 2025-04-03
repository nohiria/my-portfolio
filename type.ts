// types.ts o en el archivo donde defines las interfaces
export interface WorkExperience {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string[];
  }
  
  export interface StudyExperience {
    title: string;
    institution: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  export interface Skill {
    name: string;
    image?: string;
    links?: string[];
  }
  
  export interface Section {
    id: string;
    label: string;
    type: 'work' | 'study' | 'skills' | 'intro';
    content: WorkExperience[] | StudyExperience[] | Skill[];
  }  