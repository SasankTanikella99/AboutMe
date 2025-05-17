import React, { useEffect, useRef } from 'react';

interface AnimationProps {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

// A simple implementation of motion components for animation
export const motion = {
  div: ({ 
    initial, 
    animate, 
    transition = { duration: 0.3 }, 
    className = '',
    style = {},
    children,
    ...rest
  }: AnimationProps & React.HTMLAttributes<HTMLDivElement>) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      const element = ref.current;
      if (!element) return;
      
      const initialStyles = initial || {};
      const animateStyles = animate || {};
      
      // Apply initial styles
      Object.entries(initialStyles).forEach(([key, value]) => {
        if (key === 'opacity') {
          element.style.opacity = String(value);
        } else if (key === 'y') {
          element.style.transform = `translateY(${value}px)`;
        } else if (key === 'x') {
          element.style.transform = `translateX(${value}px)`;
        }
      });
      
      // Add transition
      element.style.transition = Object.entries(transition)
        .map(([prop, value]) => `${prop === 'duration' ? 'all' : prop} ${value}s`)
        .join(', ');
      
      // Animate after a small delay to ensure the initial styles are applied
      const timeoutId = setTimeout(() => {
        Object.entries(animateStyles).forEach(([key, value]) => {
          if (key === 'opacity') {
            element.style.opacity = String(value);
          } else if (key === 'y') {
            element.style.transform = `translateY(${value}px)`;
          } else if (key === 'x') {
            element.style.transform = `translateX(${value}px)`;
          }
        });
      }, 50);
      
      return () => clearTimeout(timeoutId);
    }, [initial, animate, transition]);
    
    return (
      <div 
        ref={ref} 
        className={className} 
        style={{
          ...style,
          opacity: initial?.opacity !== undefined ? initial.opacity : 1
        }}
        {...rest}
      >
        {children}
      </div>
    );
  },
  article: (props: AnimationProps & React.HTMLAttributes<HTMLElement>) => {
    return <motion.div as="article" {...props} />;
  }
};