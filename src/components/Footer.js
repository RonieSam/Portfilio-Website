import React from 'react';
import { personal } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer id="contact" className="py-24 mt-12 border-t-4 border-slate-900">
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <div className="lg:w-2/3">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            LET'S BUILD<br />SOMETHING.
          </h2>
          <div className="flex flex-wrap gap-8 text-xl font-bold">
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-primary transition-colors underline underline-offset-8 decoration-2"
            >
              {personal.email.toUpperCase()}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-8 decoration-2"
            >
              LINKEDIN
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-8 decoration-2"
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col justify-between">
          <div className="p-8 border-2 border-slate-900 bg-white">
            <h4 className="font-mono text-xs font-bold uppercase mb-4 opacity-50">Based in</h4>
            <p className="text-2xl font-bold mb-2">{personal.location.city}, {personal.location.state}</p>
            <p className="text-lg text-slate-600 mb-6">{personal.location.country}</p>
            <div className="font-mono text-sm space-y-1 text-slate-500">
              <p>{personal.phone}</p>
            </div>
          </div>
          <div className="mt-12 text-right">
            <p className="font-mono text-[10px] opacity-40">© {personal.currentYear} {personal.fullName}. ALL RIGHTS RESERVED.</p>
            <p className="font-mono text-[10px] opacity-40">DESIGNED UNDER BRUTALIST PRINCIPLES V2.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
