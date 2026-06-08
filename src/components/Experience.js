import React from "react";
import { experience, certifications } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-b border-slate-900">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* ── Experience Timeline ── */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold tracking-tighter mb-12">
            04 EXPERIENCE
          </h2>
          <div className="space-y-12">
            {experience.map((item) => (
              <div
                key={item.id}
                className="relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute -left-[9px] top-0 size-4 bg-primary"></div>
                <span className="font-mono text-xs font-bold text-primary">
                  {item.startYear} – {item.endYear ?? "PRESENT"}
                </span>
                <h3 className="text-2xl font-bold mt-2">{item.role}</h3>
                <p className="font-bold text-slate-600 mb-4">
                  {item.organization}
                </p>
                <ul className="space-y-2 text-slate-700 list-disc list-inside">
                  {item.contributions.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Certifications (horizontal scroll) ── */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 opacity-20">
            CERTIFICATIONS
          </h2>

          {/* Scroll hint line */}
          <div className="flex items-center gap-3 mb-5 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            <span>Scroll</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </div>

          <div
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-proximity scroll-smooth"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#ff4400 #e2e8f0",
            }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex-none w-80 snap-start p-4 border border-slate-200 bg-white"
              >
                <div className="group">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-36 object-cover border border-slate-200"
                    />
                  ) : (
                    <div className="w-full h-36 flex items-center justify-center border border-slate-200 bg-slate-50">
                      <span className="material-symbols-outlined text-4xl text-primary">
                        verified_user
                      </span>
                    </div>
                  )}
                  <h4 className="mt-3 font-bold">{cert.name}</h4>

                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-primary hover:underline mt-2 inline-block"
                    >
                      View Certificate →
                    </a>
                  ) : (
                    <span className="text-sm font-mono text-slate-300 mt-2 inline-block cursor-default">
                      Link coming soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
