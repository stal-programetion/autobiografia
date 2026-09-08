"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Database, Network, Check, Copy, Sparkles, MapPin, Calendar, BookOpen } from "lucide-react";
import { PersonalInfo } from "../app/data";

interface HeroTerminalProps {
  personal: PersonalInfo;
}

export function HeroTerminal({ personal }: HeroTerminalProps) {
  const [activeTab, setActiveTab] = useState<"whoami" | "specs" | "focus">("whoami");
  const [copied, setCopied] = useState(false);

  const copyProfileSnippet = () => {
    const text = `César Acosta | 20 años | Barranquilla, Atlántico | 8vo Semestre Ingeniería de Sistemas | Enfoque: Analítica de datos, ML (PyTorch) y Backend.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="quien-soy"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto initial-load-fade"
      aria-labelledby="hero-heading"
    >
      {/* Background subtle technical grid/ambient pattern */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-25 pointer-events-none overflow-hidden">
        <div className="w-[600px] h-[350px] bg-cyan-950/20 rounded-full blur-3xl" />
        <div className="w-[450px] h-[300px] bg-indigo-950/20 rounded-full blur-3xl" />
      </div>

      {/* Breadcrumb / System identifier */}
      <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-xs text-slate-400">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 font-medium">
          <Terminal className="w-3 h-3" /> HOST: cesar-local
        </span>
        <span className="text-slate-600">/</span>
        <span className="text-slate-400">autobiography.sys</span>
        <span className="text-slate-600">/</span>
        <span className="text-emerald-400 font-mono flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          READY
        </span>
      </div>

      {/* Main heading - single h1 for SEO and clarity */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>Perfil Técnico &amp; Autobiografía</span>
        </div>
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4"
        >
          {personal.name}
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
          {personal.shortBio}
        </p>
      </div>

      {/* Quick metadata badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="bg-[#0b101d] border border-slate-800/80 rounded-lg p-3.5 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
          <div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Edad</div>
            <div className="font-mono text-sm font-semibold text-slate-200">{personal.age} años</div>
          </div>
        </div>

        <div className="bg-[#0b101d] border border-slate-800/80 rounded-lg p-3.5 flex items-center gap-3">
          <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
          <div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Origen</div>
            <div className="font-mono text-sm font-semibold text-slate-200">{personal.birthplace}</div>
          </div>
        </div>

        <div className="bg-[#0b101d] border border-slate-800/80 rounded-lg p-3.5 flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Estado</div>
            <div className="font-mono text-sm font-semibold text-slate-200">{personal.semester}</div>
          </div>
        </div>

        <div className="bg-[#0b101d] border border-slate-800/80 rounded-lg p-3.5 flex items-center gap-3">
          <Cpu className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Carrera</div>
            <div className="font-mono text-sm font-semibold text-slate-200">{personal.degree}</div>
          </div>
        </div>
      </div>

      {/* Hero Visual Core: Terminal / System Console */}
      <div className="rounded-xl overflow-hidden border border-slate-800/90 bg-[#090e1a] shadow-2xl shadow-black/60">
        {/* Terminal Titlebar */}
        <div className="bg-[#0f1629] px-4 py-3 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-slate-700/80 border border-slate-600/50"></span>
              <span className="w-3 h-3 rounded-full bg-slate-700/80 border border-slate-600/50"></span>
              <span className="w-3 h-3 rounded-full bg-slate-700/80 border border-slate-600/50"></span>
            </div>
            <span className="font-mono text-xs text-slate-400 ml-2">
              cesar@terminal: ~/identity
            </span>
          </div>

          {/* Interactive Command Tabs */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("whoami")}
              className={`px-2.5 py-1 rounded font-mono text-xs transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeTab === "whoami"
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              $ whoami
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`px-2.5 py-1 rounded font-mono text-xs transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeTab === "specs"
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              $ specs.env
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("focus")}
              className={`px-2.5 py-1 rounded font-mono text-xs transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeTab === "focus"
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              $ focus.log
            </button>

            <button
              type="button"
              onClick={copyProfileSnippet}
              title="Copiar resumen del perfil"
              aria-label="Copiar resumen del perfil"
              className="ml-2 p-1.5 rounded bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed">
          {activeTab === "whoami" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400">cesar@workstation:~$</span>
                <span>whoami --verbose</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-slate-300">
                <div className="p-3 rounded bg-[#0f172a]/60 border border-slate-800/70">
                  <span className="text-xs text-slate-500 block mb-1">IDENTIDAD_OFICIAL</span>
                  <span className="font-semibold text-white">{personal.name}</span> ({personal.age} años)
                </div>
                <div className="p-3 rounded bg-[#0f172a]/60 border border-slate-800/70">
                  <span className="text-xs text-slate-500 block mb-1">ORIGEN_GEOGRÁFICO</span>
                  <span className="text-slate-200">{personal.birthplace}, Colombia</span>
                </div>
                <div className="p-3 rounded bg-[#0f172a]/60 border border-slate-800/70">
                  <span className="text-xs text-slate-500 block mb-1">SITUACIÓN_ACADÉMICA</span>
                  <span className="text-emerald-400 font-medium">8vo Semestre</span> · {personal.degree}
                </div>
                <div className="p-3 rounded bg-[#0f172a]/60 border border-slate-800/70">
                  <span className="text-xs text-slate-500 block mb-1">LÍNEAS_DE_ESPECIALIZACIÓN</span>
                  <span className="text-cyan-300 font-medium">Analítica de Datos · ML (PyTorch) · Backend</span>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded bg-slate-900/70 border-l-2 border-cyan-400 text-xs sm:text-sm text-slate-300 font-sans">
                <span className="font-mono text-cyan-400 font-semibold mr-2">[BIO]</span>
                {personal.shortBio}
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400">cesar@workstation:~$</span>
                <span>cat /etc/cesar/system_specs.env</span>
              </div>
              <div className="bg-[#0a0f1d] p-4 rounded-lg border border-slate-800 space-y-2 text-xs sm:text-sm">
                {personal.systemSpecs.map((spec) => (
                  <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/50 pb-1.5 last:border-b-0 last:pb-0">
                    <span className="text-cyan-400 font-medium">{spec.label}</span>
                    <span className="text-slate-300 font-mono text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "focus" && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400">cesar@workstation:~$</span>
                <span>inspect --technologies --priority</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {personal.specialties.map((item, idx) => (
                  <div
                    key={item}
                    className="p-3 rounded bg-slate-900/60 border border-slate-800 flex items-start gap-3"
                  >
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-200 text-sm">{item}</h3>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        Línea de estudio activa con rigor matemático y foco ingenieril.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Terminal prompt footer */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Modo consola interactiva — haz clic en los comandos para inspeccionar
            </span>
            <span className="hidden sm:inline">UTF-8 // zsh</span>
          </div>
        </div>
      </div>
    </section>
  );
}
