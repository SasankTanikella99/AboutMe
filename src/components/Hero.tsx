import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  // Custom yellow theme colors to ensure consistency
  const yellowTheme = {
    gradient: 'from-yellow-300 to-amber-800',
    buttonGradient: 'from-yellow-600 to-amber-600',
    buttonHoverGradient: 'from-yellow-700 to-amber-700',
    iconBg: 'bg-yellow-100 dark:bg-yellow-800/40',
    iconHoverBg: 'hover:bg-yellow-200 dark:hover:bg-yellow-800/60',
    iconText: 'text-yellow-800 dark:text-yellow-300'
  };

  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className={`bg-gradient-to-r ${yellowTheme.gradient} text-transparent bg-clip-text`}>
                  Sasank Tanikella
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                Software Engineer specializing in building exceptional digital experiences.
                I focus on creating elegant, efficient, and user-friendly applications.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#projects"
                  className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r ${yellowTheme.buttonGradient} hover:${yellowTheme.buttonHoverGradient} transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-yellow-300 dark:border-yellow-700/50 text-base font-medium rounded-md text-yellow-700 dark:text-yellow-400 bg-transparent hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/SasankTanikella99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${yellowTheme.iconBg} ${yellowTheme.iconText} ${yellowTheme.iconHoverBg} transition-colors`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sasank-tanikella/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${yellowTheme.iconBg} ${yellowTheme.iconText} ${yellowTheme.iconHoverBg} transition-colors`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/shashanktanikel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${yellowTheme.iconBg} ${yellowTheme.iconText} ${yellowTheme.iconHoverBg} transition-colors`}
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-amber-600 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                <img
                  src="https://i.imghippo.com/files/zbH5851EWc.jpeg"
                  alt="Sasank Tanikella"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
