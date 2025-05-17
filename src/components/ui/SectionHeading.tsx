import React from 'react';
import { motion } from '../../utils/motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"></span>
      </h2>
      <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-4">{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeading;