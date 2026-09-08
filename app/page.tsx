import React from "react";
import { biographyData } from "./data";
import { Navbar } from "../components/Navbar";
import { HeroTerminal } from "../components/HeroTerminal";
import { HistoryTimeline } from "../components/HistoryTimeline";
import { EducationSection } from "../components/EducationSection";
import { InterestsGrid } from "../components/InterestsGrid";
import { CurrentLife } from "../components/CurrentLife";
import { FutureSection } from "../components/FutureSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-200 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Floating accessible navbar */}
      <Navbar
        name={biographyData.personal.name}
        semester={biographyData.personal.semester}
      />

      {/* Main one-page container */}
      <main id="main-content" className="flex-1 w-full">
        {/* 1. Quién soy & Hero Terminal */}
        <HeroTerminal personal={biographyData.personal} />

        {/* 2. Mi historia (Cronológica) */}
        <HistoryTimeline milestones={biographyData.historyTimeline} />

        {/* 3. Mi formación (Cronológica & Aprendizajes clave) */}
        <EducationSection
          education={biographyData.education}
          keyLearnings={biographyData.keyLearnings}
        />

        {/* 4. Mis intereses (Cuadrícula técnica sin timelines) */}
        <InterestsGrid interests={biographyData.interests} />

        {/* 5. Mi vida actual (Rutina, proyectos transparentes y metas) */}
        <CurrentLife currentLife={biographyData.currentLife} />

        {/* 6. Mi futuro (Aspiraciones y objetivos estratégicos) */}
        <FutureSection future={biographyData.future} />
      </main>

      {/* Footer */}
      <Footer
        name={biographyData.personal.name}
        birthplace={biographyData.personal.birthplace}
      />
    </div>
  );
}
