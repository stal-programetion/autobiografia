import React from "react";
import { Terminal, ArrowUp, ShieldCheck } from "lucide-react";

interface FooterProps {
  name: string;
  birthplace: string;
}

export function Footer({ name, birthplace }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/90 bg-[#060912] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2 font-mono text-sm font-semibold text-slate-200">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>{name}</span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-400 font-normal">Autobiografía Técnica</span>
          </div>

        </div>

        {/* Center accessibility & origin */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Accesibilidad por teclado activa</span>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            {birthplace}, Colombia
          </span>
        </div>

        {/* Right back to top */}
        <div>
          <a
            href="#quien-soy"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-800/50 text-center font-mono text-xs text-slate-400">
        &copy; {new Date().getFullYear()} César Acosta · Todos los derechos reservados.
      </div>
    </footer>
  );
}
