import React from 'react';
import { motion } from '../utils/motion';
import SectionHeading from './ui/SectionHeading';
import { skillsData } from '../data/skillsData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="My background and expertise" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-6">
                Hello! I'm <strong className="text-yellow-600 dark:text-yellow-400">Sasank Tanikella</strong>, a software engineer with a passion for creating elegant, efficient, and user-friendly applications.
              </p>
              <p className="mb-6">
                With over 3 years of experience in the field, I've worked across the full stack, from designing responsive frontend interfaces to building scalable backend systems. I believe in writing clean, maintainable code and continuously learning new technologies.
              </p>
              <p className="mb-6">
                My journey in software development began at the University of Houston - Clear Lake, where I worked on several significant projects. Since then, I've had the opportunity to work with diverse teams on projects ranging from web applications to backend services.
              </p>
              <p>
                When I'm not coding, you'll find me playing video games. I'm also passionate about writing things that no one agrees with.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">My Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Frontend Development</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Building beautiful, responsive interfaces with modern frameworks.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Backend Development</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Creating robust and scalable server-side applications.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Database Design</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Designing efficient database schemas for optimal performance.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">DevOps</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Implementing CI/CD pipelines and managing cloud infrastructure.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Skills</h3>
            <div className="space-y-6">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-lg font-medium mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="relative group flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full transition-all duration-300 hover:shadow-md"
                      >
                        {skill.icon && <span className="mr-2">{skill.icon}</span>}
                        <span>{skill.name}</span>
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-center whitespace-nowrap">
                          {skill.level}
                          <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-b-slate-800 dark:border-b-slate-700 border-l-transparent border-r-transparent"></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">Senior Software Engineer</h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400">2021 - Present</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">Company Name</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">Software Engineer</h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400">2018 - 2021</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">Company Name</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">Junior Developer</h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400">2016 - 2018</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">Company Name</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;