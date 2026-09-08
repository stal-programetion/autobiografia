import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "César Acosta | Perfil Técnico & Autobiografía",
  description:
    "Autobiografía de César Acosta — Estudiante de 8vo semestre de Ingeniería de Sistemas en Barranquilla. Analítica de datos, modelos de Machine Learning con PyTorch y desarrollo backend.",
  keywords: [
    "César Acosta",
    "Ingeniería de Sistemas",
    "Analítica de Datos",
    "Machine Learning",
    "PyTorch",
    "Backend",
    "Barranquilla",
    "Autobiografía",
  ],
  authors: [{ name: "César Acosta" }],
  creator: "César Acosta",
  openGraph: {
    title: "César Acosta | Perfil Técnico & Autobiografía",
    description:
      "Trayectoria, formación y visión técnica de César Acosta. Analítica de datos, ML y backend.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#070a12] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
