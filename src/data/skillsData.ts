export interface Skill {
  name: string;
  level: string;
  icon?: React.ReactNode;
}

export const skillsData: Record<string, Skill[]> = {
  'Languages': [
    { name: 'JavaScript', level: 'Expert' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'Go', level: 'Intermediate' },
    
  ],
  'Frontend': [
    { name: 'React', level: 'Expert' },
    { name: 'TailwindCSS', level: 'Expert' },
    { name: 'Figma', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Expert' }
    
  ],
  'Backend': [
    { name: 'Node.js', level: 'Expert' },
    { name: 'Express', level: 'Advanced' },
    { name: 'Flask', level: 'Intermediate' },
    { name: 'Fiber', level: 'Intermediate' },
    { name: 'Spring Boot', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Advanced' }
  ],
  'DevOps & Tools': [
    { name: 'Git', level: 'Expert' },
    { name: 'Docker', level: 'Advanced' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'Kubernetes', level: 'Intermediate' },
    { name: 'Azure', level: 'Intermediate' },
    { name: 'CI/CD', level: 'Advanced' },
    { name: 'Jest/Testing', level: 'Advanced' },
    
  ],
  'AI & ML': [
    { name: 'TensorFlow', level: 'Intermediate' },
    { name: 'PyTorch', level: 'Intermediate' },
    { name: 'OpenAI API', level: 'Intermediate' },
    { name: 'Hugging Face', level: 'Intermediate' },
    { name: 'LangChain', level: 'Intermediate' },
  ]  
};