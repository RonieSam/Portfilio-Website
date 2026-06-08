import React from 'react';
import { personal } from '../data/portfolioData';

const navLinks = [
  { label: '01 ABOUT',    href: '#about' },
  { label: '02 PROJECTS', href: '#projects' },
  { label: '03 SKILLS',   href: '#skills' },
  { label: '04 EXP',      href: '#experience' },
  { label: '05 CONTACT',  href: '#contact' },
];

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background-light/80 backdrop-blur-sm border-b border-slate-900 px-6 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="size-8 bg-primary flex items-center justify-center text-white font-bold text-xl">
          {personal.initials}
        </div>
        <span className="font-bold tracking-tighter text-xl hidden sm:block">{personal.fullName}</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-mono text-xs font-bold uppercase tracking-widest">
        {navLinks.map((link) => (
          <a key={link.href} className="hover:text-primary transition-colors" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <a
        href={`${process.env.PUBLIC_URL}${personal.resumePath}`}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="bg-primary text-white px-6 py-2 font-bold text-sm hover:translate-x-1 hover:-translate-y-1 transition-transform border border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block"
      >
        RESUME
      </a>
    </nav>
  );
};

export default Navigation;
