export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'backend';
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A mobile application for managing tasks, setting deadlines, and collaborating with teams.',
    category: 'web',
    technologies: ['React', 'Firebase', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com/'
  },
  {
    id: 3,
    title: 'Real-time Chat API && multi-threaded server',
    description: 'A scalable backend API for real-time messaging with support for channels and direct messages. Also, a multi-threaded server for handling over 200 client connections.',
    category: 'web',
    technologies: ['Java', 'Spring Boot', 'WebSocket', 'PostgreSQL', 'Go', 'Gin'],
    imageUrl: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com/'
  },
  {
    id: 4,
    title: 'Crave Cart',
    description: 'A mobile application that allows users to add their restaurants at restaurants and order food for delivery.',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Clarifai API', 'Stripe API'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com/SasankTanikella99/Crave-Cart---frontend'
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'A backend system for managing and organizing digital content with user permissions.',
    category: 'web',
    technologies: ['Python', 'Flask', 'PostgreSQL'],
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com/SasankTanikella99/fast-api-books'
  }
];