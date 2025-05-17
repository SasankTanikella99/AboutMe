import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Custom colors that will override any ThemeContext defaults
  const yellowTheme = {
    primary: 'text-yellow-600 dark:text-yellow-400',
    hover: 'hover:text-yellow-500 dark:hover:text-yellow-300',
    bg: 'bg-yellow-100 dark:bg-yellow-800/40',
    bgHover: 'hover:bg-yellow-200 dark:hover:bg-yellow-800/60'
  };
  
  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
    { name: 'Favorites', href: '#favorites' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-yellow-200 dark:border-yellow-900/30' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="font-bold text-xl bg-gradient-to-r from-yellow-500 to-amber-400 text-transparent bg-clip-text">
            Sasank Tanikella
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium text-slate-700 dark:text-slate-200 ${yellowTheme.hover} transition-colors`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${yellowTheme.bg} ${yellowTheme.bgHover} transition-colors`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} className="text-yellow-600" /> : <Moon size={18} className="text-yellow-600" />}
            </button>
          </div>
          
          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md ${yellowTheme.primary} ${yellowTheme.bgHover}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg border-t border-yellow-200 dark:border-yellow-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 ${yellowTheme.bgHover} border-l-2 border-transparent hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium ${yellowTheme.bgHover} border-l-2 border-transparent hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors`}
            >
              {isDarkMode ? 
                <Sun size={18} className="mr-2 text-yellow-500" /> : 
                <Moon size={18} className="mr-2 text-yellow-600" />
              }
              <span className={yellowTheme.primary}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;