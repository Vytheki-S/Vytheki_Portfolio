import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star, Award } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  isClient?: boolean;
  isFeatured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Gear-Up E-Commerce',
      description: 'Full-stack e-commerce with React + Django REST, JWT auth, CRUD APIs, payment integration',
      tags: ['React', 'Django', 'Python', 'REST API', 'JWT'],
      category: 'Web',
      isFeatured: true,
      githubUrl: 'https://github.com/Vytheki-S/Gear-Up-E-commerce-',
    },
    {
      id: 2,
      title: 'EventAura',
      description: 'Event management platform built with TypeScript and React, component-based architecture',
      tags: ['TypeScript', 'React', 'CSS'],
      category: 'Web',
      isFeatured: true,
      isClient: true,
      githubUrl: 'https://github.com/Vytheki-S/EventAura',
    },
    {
      id: 3,
      title: 'FeedPulse',
      description: 'AI-powered product feedback platform with Gemini analysis, admin triage, and trend insights',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Gemini', 'TypeScript'],
      category: 'Web',
      isFeatured: true,
      githubUrl: 'https://github.com/Vytheki-S/FeedPulse-',
    },
    {
      id: 4,
      title: 'Lynkerr',
      description: 'Travel experience listing platform where guides publish offerings and travelers discover local experiences',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Django', 'MySQL'],
      category: 'Web',
      isFeatured: true,
      githubUrl: 'https://github.com/Vytheki-S/lynkerr',
    },
    {
      id: 5,
      title: 'Exam-pro',
      description: 'Online examination system with auto-grading, timer, and result management',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
      category: 'Web',
      githubUrl: 'https://github.com/Vytheki-S/Exam-pro',
    },
    {
      id: 6,
      title: 'Leave Management System',
      description: 'Employee leave management with approval workflow and admin dashboard',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: 'Web',
      githubUrl: 'https://github.com/Vytheki-S/Leave-Management-System',
    },
    {
      id: 7,
      title: 'Event-pro',
      description: 'Java-based event management with booking, scheduling, and reporting features',
      tags: ['Java'],
      category: 'Web',
      githubUrl: 'https://github.com/Vytheki-S/Event-pro',
    },
  ];

  const filters = ['All', 'Web'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[#0D0D1A]">
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-[#00A3E0]" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-[#00A3E0] text-white'
                  : 'bg-transparent border border-[#2A3A4A] text-[#8899AA] hover:border-[#00A3E0] hover:text-[#00A3E0]'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111827] border border-[#2A3A4A] rounded-xl overflow-hidden hover:border-[#00A3E0] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,163,224,0.3)] transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-[#0D0D1A] to-[#1A2540] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A3E0]/10 to-[#7B2FBE]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-[#8899AA] text-lg font-semibold relative z-10">
                  {project.title}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                {/* Title and Badges */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <div className="flex gap-1">
                      {project.isFeatured && (
                        <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                      )}
                    </div>
                  </div>
                  {project.isClient && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-full text-[#F59E0B] text-xs font-semibold font-mono">
                      <Award className="w-3 h-3" />
                      CLIENT PROJECT
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#8899AA] text-sm line-clamp-2">{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#0D0D1A] border border-[#2A3A4A] rounded-full text-[#8899AA] text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-[#2A3A4A] text-[#8899AA] rounded-lg hover:border-[#00A3E0] hover:text-[#00A3E0] transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#00A3E0] text-white rounded-lg hover:bg-[#0092c9] transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
