import React from "react";
import { FutureVision } from "../app/data";
import { Rocket, Trophy, GitFork, ArrowUpRight, Cpu } from "lucide-react";

interface FutureSectionProps {
  future: FutureVision;
}

export function FutureSection({ future }: FutureSectionProps) {
  return (
    <section
      id="futuro"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80"
      aria-labelledby="futuro-heading"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <Rocket className="w-3.5 h-3.5" />
          <span>06. VISIÓN &amp; ASPIRACIONES</span>
        </div>
        <h2
          id="futuro-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3"
        >
          Mi Futuro
        </h2>
        <p className="text-slate-400 text-base max-w-2xl leading-relaxed font-sans">
          Hacia dónde apunto: impacto en la industria de inteligencia artificial y liderazgo técnico integral de datos a producción.
        </p>
      </div>

      {/* Main Aspirations Banner */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#091122] via-[#0b162d] to-[#081020] border border-cyan-500/30 mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Cpu className="w-48 h-48 text-cyan-400" />
        </div>

        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 mb-4">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>Aspiración Principal</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
            {future.headline}
          </h3>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans mb-6">
            {future.aspirations}
          </p>

          <div className="p-4 rounded-xl bg-[#060b17]/80 border border-slate-800 text-slate-300 text-sm font-mono flex items-start gap-3">
            <span className="text-cyan-400 font-bold">$</span>
            <span>{future.technicalVision}</span>
          </div>
        </div>
      </div>

      {/* Strategic Roadmap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {future.strategicObjectives.map((obj, index) => (
          <div
            key={obj.title}
            className="p-6 rounded-xl bg-[#090e1a] border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-slate-500">FASE 0{index + 1}</span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                  {obj.targetHorizon}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-2">
                {obj.title}
              </h4>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                {obj.description}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <GitFork className="w-3.5 h-3.5 text-cyan-400" />
              <span>Objetivo de Consolidación</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
