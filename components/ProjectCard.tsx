import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    stats: string;
    live?: string;
    github?: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Define different background colors for each project
  const getBackgroundColor = (idx: number) => {
    const colors = [
      'bg-gradient-to-br from-gray-800 to-gray-900',  // Project 1
      'bg-gradient-to-br from-gray-800 to-gray-900',  // Project 2
      'bg-gradient-to-br from-gray-900 to-gray-800'   // Project 3
    ];
    return colors[idx % colors.length];
  };

  // Determine the link to use (live demo first, then GitHub)
  const projectLink = project.live || project.github || '#';

  // Add emojis based on project type
  const getTitleWithEmoji = (title: string) => {
    if (title.includes('GPT') || title.includes('AI') || title.includes('Chatbot')) {
      return `${title} 🤖`;
    } else if (title.includes('Sign') || title.includes('Translation')) {
      return `${title} 🗣️`;
    } else if (title.includes('Cam') || title.includes('Recognition')) {
      return `${title} 📸`;
    } else {
      return `${title} 💻`;
    }
  };

  return (
    <a 
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`block relative ${getBackgroundColor(index)} border border-white/10 p-6 transition-all duration-300 hover:border-white/30 group hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]`}
    >
      <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
        {getTitleWithEmoji(project.title)}
      </h3>
      <p className="text-gray-300 mt-4 font-semibold" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>{project.description}</p>
      <p className="text-base text-gray-500 mt-6 font-semibold" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>{project.stats}</p>
      
      {/* Arrow icon that appears on hover */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-blue-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </div>
    </a>
  );
};

export default ProjectCard;