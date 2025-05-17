export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: number;
  excerpt: string;
  imageUrl: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2025',
    slug: 'future-of-web-development-2025',
    category: 'Web Development',
    date: 'June 15, 2025',
    readTime: 8,
    excerpt: 'Exploring emerging trends in web development, from WebAssembly to AI-driven interfaces, and how they will shape the future of the web.',
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Building Scalable Microservices with Node.js',
    slug: 'building-scalable-microservices-nodejs',
    category: 'Backend',
    date: 'May 28, 2025',
    readTime: 12,
    excerpt: 'A comprehensive guide to designing, implementing, and scaling microservices architecture using Node.js and modern cloud infrastructure.',
    imageUrl: 'https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'State Management in React: Beyond Redux',
    slug: 'state-management-react-beyond-redux',
    category: 'Frontend',
    date: 'April 10, 2025',
    readTime: 6,
    excerpt: 'Exploring modern alternatives to Redux for state management in React applications, with practical examples and performance considerations.',
    imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Machine Learning for Web Developers',
    slug: 'machine-learning-web-developers',
    category: 'AI & ML',
    date: 'March 22, 2025',
    readTime: 10,
    excerpt: 'An introduction to machine learning concepts for web developers, with practical examples of implementing ML features in web applications.',
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'The Art of Writing Clean Code',
    slug: 'art-of-writing-clean-code',
    category: 'Best Practices',
    date: 'February 15, 2025',
    readTime: 7,
    excerpt: 'Principles and practices for writing maintainable, readable, and efficient code that stands the test of time and team collaboration.',
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];