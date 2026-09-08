import React from "react";
import { CurrentLife as CurrentLifeType } from "../app/data";
import { Activity, Dumbbell, BookOpen, Terminal, Target, Info, CheckCircle } from "lucide-react";

interface CurrentLifeProps {
  currentLife: CurrentLifeType;
}

export function CurrentLife({ currentLife }: CurrentLifeProps) {
  const getAreaIcon = (area: string) => {
    if (area.includes("Academia")) {
      return <BookOpen className="w-5 h-5 text-cyan-400" />;
    }
    if (area.includes("Física")) {
      return <Dumbbell className="w-5 h-5 text-emerald-400" />;
    }
    return <Terminal className="w-5 h-5 text-indigo-400" />;
  };

  return (
    <section
      id="vida-actual"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80"
      aria-labelledby="vida-actual-heading"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <Activity className="w-3.5 h-3.5" />
          <span>05. RUTINA &amp; FOCO PRESENTE</span>
        </div>
        <h2
          id="vida-actual-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3"
        >
          Mi Vida Actual
        </h2>
        <p className="text-slate-400 text-base max-w-2xl leading-relaxed font-sans">
          {currentLife.summary}
        </p>
      </div>

      {/* Routine Triad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {currentLife.routine.map((item) => (
          <div
            key={item.area}
            className="p-6 rounded-xl bg-[#090e1a] border border-slate-800/90 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getAreaIcon(item.area)}
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/60 uppercase">
                  En ejecución
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-100 mb-2">
                {item.area}
              </h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-4">
                {item.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 font-mono text-xs text-cyan-400">
              {item.focus}
            </div>
          </div>
        ))}
      </div>

      {/* Transparent Projects & Mastery Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Projects Statement Card */}
        <div className="lg:col-span-6 p-6 rounded-xl bg-[#0b1220] border border-slate-700/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <Info className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">
                Estado de Portafolio &amp; Proyectos
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {currentLife.projectsStatus.statusNote}
            </h3>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              {currentLife.projectsStatus.explanation}
            </p>
          </div>
          <div className="mt-4 p-3 rounded bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-400">
            <code>$ status: sin proyectos provisionales. Prioridad en profundidad matemática y calidad de arquitectura backend.</code>
          </div>
        </div>

        {/* Core Goals Card */}
        <div className="lg:col-span-6 p-6 rounded-xl bg-[#090e1a] border border-slate-800/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-emerald-400">
              <Target className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">
                Metas Clave en Curso
              </span>
            </div>
            <div className="space-y-3">
              {currentLife.primaryGoals.map((g, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 font-mono text-xs px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {g.goal}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">
                      {g.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-800/80 font-mono text-xs text-slate-500">
            Vector de trabajo: constancia diaria y autoexigencia.
          </div>
        </div>
      </div>
    </section>
  );
}
