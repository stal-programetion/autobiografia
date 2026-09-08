import React from "react";
import { TimelineMilestone } from "../app/data";
import { Clock, Gamepad2, Award, Users, ChevronRight } from "lucide-react";

interface HistoryTimelineProps {
  milestones: TimelineMilestone[];
}

export function HistoryTimeline({ milestones }: HistoryTimelineProps) {
  const getIcon = (stage: string) => {
    switch (stage.toLowerCase()) {
      case "infancia":
        return <Gamepad2 className="w-4 h-4 text-cyan-400" />;
      case "entorno familiar":
        return <Users className="w-4 h-4 text-emerald-400" />;
      case "punto de inflexión":
        return <Award className="w-4 h-4 text-amber-400" />;
      default:
        return <Clock className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section
      id="historia"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-labelledby="historia-heading"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <Clock className="w-3.5 h-3.5" />
          <span>02. CRONOLOGÍA DE VIDA</span>
        </div>
        <h2
          id="historia-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3"
        >
          Mi Historia
        </h2>
        <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
          Los orígenes de mi vocación, el impacto de mi núcleo familiar y el hito matemático que definió mi entrada al mundo de la computación.
        </p>
      </div>

      {/* Chronological Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-slate-800 space-y-10">
        {milestones.map((item, index) => (
          <article
            key={item.id}
            className="relative group"
            aria-label={`${item.stage}: ${item.title}`}
          >
            {/* Timeline Node marker */}
            <div
              className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0b101e] border-2 border-slate-700 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-sm"
              aria-hidden="true"
            >
              {getIcon(item.stage)}
            </div>

            {/* Content Card */}
            <div className="p-6 rounded-xl bg-[#090e1a] border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200">
              {/* Header meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/50">
                    {item.stage}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {item.period}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-100 mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans mb-4">
                {item.description}
              </p>

              {/* Highlight callout if present */}
              {item.highlight && (
                <div className="p-3 rounded-lg bg-[#0d1424] border border-slate-800/90 text-xs text-slate-300 font-mono flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-cyan-300">Detalle clave:</strong> {item.highlight}
                  </span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
