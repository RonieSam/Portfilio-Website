import React from 'react';
import { personal, stats } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 border-b border-slate-900">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <h2 className="text-5xl font-bold tracking-tighter mb-4">01 ABOUT</h2>
          <p className="font-mono text-sm text-primary uppercase font-bold tracking-widest">Profile Summary</p>
        </div>
        <div className="lg:w-2/3 space-y-12">
          <p className="text-xl leading-relaxed text-slate-800">
            {personal.bio}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-2 border-slate-900 p-8 hover:bg-primary hover:text-white transition-colors group"
              >
                <span className="font-mono text-xs block mb-2 opacity-60 group-hover:text-white">
                  {stat.label}
                </span>
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="font-bold">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
