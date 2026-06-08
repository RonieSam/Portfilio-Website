import React from 'react';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project, isLastOdd }) => {
  

  return (
    <div
      className={`group border-2 border-slate-900 p-8 hover:border-primary transition-colors${
        isLastOdd ? ' md:col-span-2 md:max-w-[calc(50%-1.5rem)]' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold">{project.name}</h3>
        <span className="bg-primary text-white px-3 py-1 font-mono text-xs font-bold">
          {project.year}
        </span>
      </div>
      <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-[10px] border border-slate-300 px-2 py-1 bg-white">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap">
  {project.githubLink && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-bold text-sm border-b-2 border-slate-900 pb-1 hover:text-primary hover:border-primary transition-colors"
    >
      GITHUB REPO
      <span className="material-symbols-outlined text-sm">
        arrow_forward
      </span>
    </a>
  )}

  {project.liveLink && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-bold text-sm border-b-2 border-slate-900 pb-1 hover:text-primary hover:border-primary transition-colors"
    >
      LIVE DEMO
      <span className="material-symbols-outlined text-sm">
        arrow_forward
      </span>
    </a>
  )}

  {!project.githubLink && !project.liveLink && (
    <span className="inline-flex items-center gap-2 font-bold text-sm border-b-2 border-slate-300 pb-1 text-slate-400 cursor-default">
      COMING SOON
      <span className="material-symbols-outlined text-sm">
        arrow_forward
      </span>
    </span>
  )}
</div>
    </div>
  );
};

const Projects = () => {
  const isOddCount = projects.length % 2 !== 0;

  return (
    <section id="projects" className="py-24 border-b border-slate-900">
      <div className="mb-16">
        <h2 className="text-5xl font-bold tracking-tighter mb-4">02 PROJECTS</h2>
        <div className="w-20 h-2 bg-primary"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => {
          const isLastOdd = isOddCount && index === projects.length - 1;
          return (
            <ProjectCard key={project.id} project={project} isLastOdd={isLastOdd} />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
