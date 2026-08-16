import React from 'react';
import { siteConfig } from '../data/config';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      <a 
        href={siteConfig.socials.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors"
      >
        <Github size={22} />
      </a>
      <a 
        href={siteConfig.socials.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors"
      >
        <Linkedin size={22} />
      </a>
      <a 
        href={`mailto:${siteConfig.socials.email}`}
        className="text-gray-300 hover:text-white transition-colors"
      >
        <Mail size={22} />
      </a>
    </div>
  );
};