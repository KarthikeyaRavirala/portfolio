import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-gray-400 mb-8 text-2xl font-normal" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>Side projects I've built 💼</h2>
      <div className="space-y-6">
        {projects.map((project: any, index: number) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;