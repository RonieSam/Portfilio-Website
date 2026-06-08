import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-b border-slate-900">
      <div className="mb-16">
        <h2 className="text-5xl font-bold tracking-tighter mb-4">03 SKILLS</h2>
        <p className="font-mono text-sm text-primary uppercase font-bold tracking-widest">Technical Arsenal</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-900">
              <th className="text-left font-mono text-xs py-4 px-4 uppercase opacity-50">Category</th>
              <th className="text-left font-mono text-xs py-4 px-4 uppercase opacity-50">Stack</th>
              <th className="text-right font-mono text-xs py-4 px-4 uppercase opacity-50">Proficiency</th>
            </tr>
          </thead>
          <tbody className="font-mono text-sm">
            {skills.map((row) => (
              <tr key={row.category} className="border-b border-slate-300 hover:bg-primary/5 transition-colors">
                <td className="py-6 px-4 font-bold">{row.category}</td>
                <td className="py-6 px-4">{row.stack}</td>
                <td className="py-6 px-4 text-right">{row.proficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Skills;
