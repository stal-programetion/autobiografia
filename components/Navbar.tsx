"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Shield, Menu, X } from "lucide-react";

interface NavbarProps {
  name: string;
  semester: string;
}

export function Navbar({ name, semester }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#quien-soy", label: "01. Quién Soy" },
    { href: "#historia", label: "02. Mi Historia" },
    { href: "#formacion", label: "03. Formación" },
    { href: "#intereses", label: "04. Intereses" },
    { href: "#vida-actual", label: "05. Vida Actual" },
    { href: "#futuro", label: "06. Futuro" },
  ];

  return (
    <>
      <a
        href="#quien-soy"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-semibold focus:rounded-md shadow-lg"
      >
        Saltar al contenido principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-sm shadow-black/40"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand identifier */}
          <a
            href="#quien-soy"
            className="flex items-center gap-2 group text-slate-200 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md p-1"
          >
            <span className="p-1.5 rounded bg-slate-900 border border-slate-700/80 text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
              <Terminal className="w-4 h-4" />
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                {name}
              </span>
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                sys.bio // {semester}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-900/60 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status Badge */}
          <div className="hidden sm:flex items-center gap-2.5 pl-3 border-l border-slate-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] text-emerald-400/90 font-medium tracking-wider">
              ONLINE
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 py-4 space-y-2 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Estudiante 8vo Semestre — Barranquilla, CO</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
