import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from '../utils/motion';
import SectionHeading from './ui/SectionHeading';
import { blogData } from '../data/blogData';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Blog" subtitle="My thoughts and ideas" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white dark:bg-slate-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium px-2 py-1 bg-blue-600/90 text-white rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime} min read</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <a 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-800 dark:text-slate-200 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
          >
            View All Articles
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;