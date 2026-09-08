import React from "react";
import { InterestItem } from "../app/data";
import {
  BarChart3,
  BrainCircuit,
  Server,
  Variable,
  Dumbbell,
  Gamepad2,
  Compass,
} from "lucide-react";

interface InterestsGridProps {
  interests: InterestItem[];
}

export function InterestsGrid({ interests }: InterestsGridProps) {
  const getInterestIcon = (id: string) => {
    switch (id) {
      case "analitica-datos":
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case "machine-learning":
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case "desarrollo-backend":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "matematicas":
        return <Variable className="w-5 h-5 text-amber-400" />;
      case "gimnasio":
        return <Dumbbell className="w-5 h-5 text-rose-400" />;
      case "videojuegos-retro":
        return <Gamepad2 className="w-5 h-5 text-purple-400" />;
      default:
        return <Compass className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="intereses"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80"
      aria-labelledby="intereses-heading"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>04. FOCO VOCACIONAL &amp; DISCIPLINA</span>
        </div>
        <h2
          id="intereses-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3"
        >
          Mis Intereses
        </h2>
        <p className="text-slate-400 text-base max-w-2xl leading-relaxed font-sans">
          Áreas técnicas, fundamentos matemáticos y hábitos diarios que estructuran mi perfil. Sin agregados genéricos; solo lo que realmente practico y estudio.
        </p>
      </div>

      {/* Grid of 6 concrete interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {interests.map((interest) => (
          <article
            key={interest.id}
            className="p-6 rounded-xl bg-[#090e1a] border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Header Icon + Category */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getInterestIcon(interest.id)}
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900/90 text-slate-400 border border-slate-800">
                  {interest.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-100 mb-2 tracking-tight">
                {interest.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed font-sans mb-5">
                {interest.description}
              </p>
            </div>

            {/* Tags / Tools */}
            {interest.tools && (
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {interest.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#0f172a] text-cyan-300 border border-slate-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
