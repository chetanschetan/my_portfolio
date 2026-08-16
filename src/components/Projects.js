import React from 'react';
import { siteConfig } from '../data/config';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.projects.map((project) => (
          <div key={project.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-800 text-indigo-400 text-xs px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
              {project.liveUrl !== "#" && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}

              {/* Single GitHub Repo */}
              {project.githubFrontend && project.githubBackend === null && project.githubFrontend !== "#" && (
                <a 
                  href={project.githubFrontend} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  <Github size={16} /> GitHub Repo
                </a>
              )}

              {/* Dual Repos (Pinnacle case) */}
              {project.githubFrontend && project.githubBackend && project.githubFrontend !== "#" && (
                <>
                  <a 
                    href={project.githubFrontend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
                  >
                    <Github size={16} /> Frontend Repo
                  </a>
                  <a 
                    href={project.githubBackend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
                  >
                    <Github size={16} /> Backend Repo
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};