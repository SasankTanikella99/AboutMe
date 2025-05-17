import React, { useState } from 'react';
import { motion } from '../utils/motion';
import SectionHeading from './ui/SectionHeading';
import { favoritesData } from '../data/favoritesData';

type FavoriteCategory = 'music' | 'books' | 'movies' ;

const Favorites: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FavoriteCategory>('music');
  
  const categories: { id: FavoriteCategory; label: string }[] = [
    { id: 'music', label: 'Music' },
    { id: 'books', label: 'Books' },
    { id: 'movies', label: 'Movies' }
    
  ];
  
  const currentItems = favoritesData[activeCategory];
  
  return (
    <section id="favorites" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Favorites" subtitle="Things I love" />
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white dark:bg-slate-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span className="px-3 py-2 bg-white/20 backdrop-blur-sm rounded-md text-white text-sm">
                      View Details
                    </span>
                  </a>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-slate-900 dark:text-white truncate">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;