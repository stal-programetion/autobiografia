import React from "react";
import { EducationItem, KeyLearningPillars } from "../app/data";
import { GraduationCap, Award, Globe, Shield, Sparkles, BookCheck, CheckCircle2 } from "lucide-react";

interface EducationSectionProps {
  education: EducationItem[];
  keyLearnings: KeyLearningPillars;
}

export function EducationSection({ education, keyLearnings }: EducationSectionProps) {
  const getBadgeIcon = (type: EducationItem["type"]) => {
    switch (type) {
      case "formal":
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case "language":
        return <Globe className="w-4 h-4 text-emerald-400" />;
      case "certification":
        return <Award className="w-4 h-4 text-indigo-400" />;
      default:
        return <BookCheck className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section
      id="formacion"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80"
      aria-labelledby="formacion-heading"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>03. FORMACIÓN &amp; CREDENCIALES</span>
        </div>
        <h2
          id="formacion-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3"
        >
          Mi Formación
        </h2>
        <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
          Evolución académica desde la disciplina del colegio militar hasta el 8vo semestre universitario y la especialización continua en datos y machine learning.
        </p>
      </div>

      {/* Chronological Track for Education & Certifications */}
      <div className="relative pl-6 sm:pl-10 border-l border-slate-800 space-y-8 mb-16">
        {education.map((item) => (
          <article
            key={item.id}
            className="relative group"
            aria-label={`${item.degree} en ${item.institution}`}
          >
            {/* Timeline indicator node */}
            <div
              className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0b101e] border-2 border-slate-700 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-sm"
              aria-hidden="true"
            >
              {getBadgeIcon(item.type)}
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-xl bg-[#090e1a] border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs text-slate-500">
                  {item.period}
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-slate-700">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-1 tracking-tight">
                {item.degree}
              </h3>
              <div className="font-mono text-xs text-emerald-400 mb-3">
                {item.institution}
              </div>

              {item.description && (
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Key Learnings & Discipline Callout Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1426] via-[#090e1a] to-[#0b1122] border border-slate-700/80 shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-cyan-400" />
          <span className="font-mono text-xs tracking-wider uppercase text-cyan-300">
            Sinergia Formativa
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
          {keyLearnings.title}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
          {keyLearnings.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {keyLearnings.pillars.map((pillar) => (
            <div
              key={pillar.origin}
              className="p-4 rounded-xl bg-[#080d18] border border-slate-800/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-slate-200">{pillar.origin}</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {pillar.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
