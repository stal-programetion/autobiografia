/**
 * ARCHIVO DE DATOS CENTRALIZADO — AUTOBIOGRAFÍA DE CÉSAR ACOSTA
 * 
 * Todo el contenido del sitio web se administra desde este archivo.
 * Puedes modificar textos, agregar certificaciones o ajustar metas
 * sin necesidad de alterar los componentes de la interfaz ni los estilos.
 */

export interface PersonalInfo {
  name: string;
  role: string;
  age: number;
  birthplace: string;
  shortBio: string;
  semester: string;
  degree: string;
  specialties: string[];
  systemSpecs: {
    label: string;
    value: string;
  }[];
  contactInfo: {
    github?: string;
    linkedin?: string;
    email?: string;
    location: string;
  };
}

export interface TimelineMilestone {
  id: string;
  period: string;
  stage: string;
  title: string;
  description: string;
  tag: string;
  highlight?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  type: "formal" | "certification" | "language";
  institution: string;
  degree: string;
  description?: string;
  badge: string;
}

export interface KeyLearningPillars {
  title: string;
  description: string;
  pillars: {
    origin: string;
    impact: string;
  }[];
}

export interface InterestItem {
  id: string;
  category: "Técnico" | "Ciencia" | "Disciplina" | "Personal";
  title: string;
  description: string;
  tools?: string[];
  badge: string;
}

export interface CurrentLife {
  headline: string;
  summary: string;
  routine: {
    area: string;
    description: string;
    focus: string;
  }[];
  projectsStatus: {
    statusNote: string;
    explanation: string;
  };
  primaryGoals: {
    goal: string;
    detail: string;
  }[];
}

export interface FutureVision {
  headline: string;
  aspirations: string;
  strategicObjectives: {
    title: string;
    description: string;
    targetHorizon: string;
  }[];
  technicalVision: string;
}

export interface BiographyData {
  personal: PersonalInfo;
  historyTimeline: TimelineMilestone[];
  education: EducationItem[];
  keyLearnings: KeyLearningPillars;
  interests: InterestItem[];
  currentLife: CurrentLife;
  future: FutureVision;
}

export const biographyData: BiographyData = {
  personal: {
    name: "César Acosta",
    role: "Estudiante de Ingeniería de Sistemas | Datos, ML & Backend",
    age: 20,
    birthplace: "Barranquilla, Atlántico",
    semester: "8vo Semestre",
    degree: "Ingeniería de Sistemas",
    shortBio:
      "Estudiante de 8vo semestre de Ingeniería de Sistemas enfocado en analítica de datos, desarrollo de modelos de machine learning y arquitectura backend. Apasionado por la precisión matemática, la disciplina de entrenamiento y la ingeniería robusta de software.",
    specialties: [
      "Analítica de Datos",
      "Modelos de Machine Learning (PyTorch)",
      "Desarrollo Backend",
      "Fundamentos Matemáticos",
    ],
    systemSpecs: [
      { label: "USER_ID", value: "cesar_acosta" },
      { label: "STATUS", value: "ACTIVO (8vo Semestre)" },
      { label: "ORIGIN_NODE", value: "Barranquilla, Atlántico, CO" },
      { label: "FOCUS_AREAS", value: "Data Analytics // ML // Backend" },
      { label: "CORE_RUNTIME", value: "Python / PyTorch / SQL / TypeScript" },
      { label: "PHILOSOPHY", value: "Disciplina técnica y rigor analítico" },
    ],
    contactInfo: {
      location: "Barranquilla, Atlántico, Colombia",
      github: "https://github.com/stal-programetion",
      linkedin: "https://www.linkedin.com/in/cesar-isaac-acosta-garc%C3%ADa-381737318/",
      email: "cesaracosta.220806@gmail.com",
    },
  },

  // Sección 2: Mi Historia (Cronológica)
  historyTimeline: [
    {
      id: "infancia",
      period: "Etapa Temprana",
      stage: "Infancia",
      title: "Fascinación por el hardware y la lógica de los videojuegos",
      description:
        "Desde muy pequeño le cautivaba el funcionamiento interno de la tecnología: desarmar y volver a armar computadores para entender qué ocurría bajo el chasis. Jugando títulos icónicos como GTA: San Andreas, surgió una pregunta persistente: ¿cómo es posible programar un mundo tan complejo, con tanta lógica, reglas y físicas funcionando en simultáneo?",
      tag: "Curiosidad Inicial",
      highlight: "Inicios desarmando PCs e indagando en la arquitectura de GTA: San Andreas",
    },
    {
      id: "familia",
      period: "Crecimiento",
      stage: "Entorno Familiar",
      title: "Cultura de excelencia y valor por el talento académico",
      description:
        "Creció en un ambiente donde el esfuerzo escolar y el talento académico se reconocían y fomentaban de forma constante. Esta base forjó una alta autoexigencia, curiosidad intelectual permanente y la convicción de que el conocimiento profundo es el mejor diferenciador.",
      tag: "Valores",
      highlight: "Entorno donde el rigor académico y la superación eran prioridad",
    },
    {
      id: "matematicas",
      period: "Adolescencia",
      stage: "Punto de Inflexión",
      title: "Competencias de matemáticas: el puente definitivo hacia la informática",
      description:
        "Durante la adolescencia destacó notablemente en matemáticas, participando activamente en olimpiadas y competencias del área. La abstracción, el razonamiento inductivo y la satisfacción de resolver problemas complejos marcaron el momento exacto en el que la matemática se conectó de manera definitiva y natural con las ciencias de la computación.",
      tag: "Hito Decisivo",
      highlight: "Participación en olimpiadas matemáticas y conexión formal con la computación",
    },
  ],

  // Sección 3: Mi Formación (Cronológica + Certificaciones)
  education: [
    {
      id: "colegio-militar",
      period: "Bachillerato",
      type: "formal",
      institution: "Colegio Militar",
      degree: "Bachiller Académico",
      description:
        "Formación secundaria estructurada bajo un régimen de orden, liderazgo y constancia. Esta etapa cimentó una disciplina de hierro y capacidad de trabajo bajo exigencia.",
      badge: "Formación Militar",
    },
    {
      id: "universidad",
      period: "Pregrado — En curso",
      type: "formal",
      institution: "Universidad (Ingeniería de Sistemas)",
      degree: "8vo Semestre de Ingeniería de Sistemas",
      description:
        "Cálculo avanzado, estructuras de datos, algoritmos, arquitectura de computadores, bases de datos y sistemas operativos. Enfoque personal profundizado hacia analítica y backend.",
      badge: "Educación Superior",
    },
    {
      id: "ingles-ceaa",
      period: "Certificación Idiomas",
      type: "language",
      institution: "CEAA (Centro de Enseñanza y Aprendizaje de Idiomas)",
      degree: "Inglés Nivel B2",
      description:
        "Competencia comunicativa intermedia alta para lectura de documentación técnica, papers de machine learning e interacción profesional en inglés.",
      badge: "Nivel B2",
    },
    {
      id: "ingles-oopt",
      period: "Examen Internacional",
      type: "language",
      institution: "Oxford Online Placement Test (OOPT)",
      degree: "Inglés B1+ Internacional",
      description:
        "Validación estandarizada internacional de destrezas de comprensión oral y auditiva, gramática y vocabulario técnico.",
      badge: "B1+ Oxford",
    },
    {
      id: "coursera-analytics",
      period: "Certificaciones Profesionales",
      type: "certification",
      institution: "Coursera",
      degree: "2x Certificaciones en Analítica de Datos",
      description:
        "Procesamiento, limpieza, análisis exploratorio de datos (EDA), modelado relacional y visualización aplicada para la toma de decisiones informadas.",
      badge: "2 Certificados",
    },
    {
      id: "udemy-pytorch",
      period: "Cursos Especializados",
      type: "certification",
      institution: "Udemy",
      degree: "2x Cursos de Desarrollo de Modelos de IA con PyTorch",
      description:
        "Entrenamiento de redes neuronales profundas con PyTorch, backpropagation, optimización de hiperparámetros, tensores y despliegue de pipelines de inferencia.",
      badge: "2 Cursos PyTorch",
    },
  ],

  keyLearnings: {
    title: "Aprendizajes Fundacionales",
    description:
      "La trayectoria académica y formativa no ha sido únicamente técnica; ha sido un proceso continuo de forja de carácter y método de trabajo:",
    pillars: [
      {
        origin: "Colegio Militar",
        impact: "Resiliencia mental, cumplimiento estricto de rutinas y sentido inquebrantable del deber.",
      },
      {
        origin: "Competencias Matemáticas",
        impact: "Capacidad de modelado abstracto, pensamiento deductivo y tolerancia a la frustración al resolver problemas complejos.",
      },
      {
        origin: "Estudio Autodidacta",
        impact: "Hábito de investigar por cuenta propia en PyTorch, analítica y backend sin esperar a que el aula lo cubra.",
      },
    ],
  },

  // Sección 4: Mis Intereses (Sin música, deportes de equipo ni libros inventados)
  interests: [
    {
      id: "analitica-datos",
      category: "Técnico",
      title: "Analítica de Datos",
      description:
        "Extracción de patrones significativos a partir de conjuntos de datos crudos. Análisis exploratorio, inferencia estadística y formulación de hipótesis para respaldar decisiones críticas.",
      tools: ["Pandas", "NumPy", "SQL", "Exploratory Data Analysis"],
      badge: "Data Core",
    },
    {
      id: "machine-learning",
      category: "Técnico",
      title: "Machine Learning con PyTorch",
      description:
        "Construcción y calibración de modelos de redes neuronales en PyTorch. Comprensión profunda de la matemática detrás del gradiente descendente y las funciones de pérdida.",
      tools: ["PyTorch", "Tensores", "Deep Learning", "Optimización"],
      badge: "AI Modeling",
    },
    {
      id: "desarrollo-backend",
      category: "Técnico",
      title: "Desarrollo Backend",
      description:
        "Diseño de arquitecturas de servidor, APIs eficientes y servicios robustos que puedan servir como columna vertebral de aplicaciones impulsadas por datos e inteligencia artificial.",
      tools: ["Python", "FastAPI / Node", "APIs REST", "Arquitectura de Software"],
      badge: "Engineering",
    },
    {
      id: "matematicas",
      category: "Ciencia",
      title: "Matemáticas Aplicadas",
      description:
        "Álgebra lineal, cálculo multivariable, probabilidad y estadística. La base indiscutible sobre la cual descansan los algoritmos de machine learning modernos.",
      tools: ["Álgebra Lineal", "Cálculo", "Probabilidad", "Estadística"],
      badge: "Fundamentos",
    },
    {
      id: "gimnasio",
      category: "Disciplina",
      title: "Gimnasio & Disciplina Física",
      description:
        "Entrenamiento constante y metódico como pilar de salud, concentración y templanza mental. El progreso medible en fuerza y disciplina física refleja el mismo enfoque iterativo del software.",
      tools: ["Sobrecarga progresiva", "Constancia", "Enfoque mental"],
      badge: "Estilo de Vida",
    },
    {
      id: "videojuegos-retro",
      category: "Personal",
      title: "Videojuegos & Nostalgia por GTA: San Andreas",
      description:
        "Apreciación por los clásicos que marcaron el despertar de su curiosidad tecnológica. San Andreas permanece como el referente nostálgico del potencial que tiene un código bien estructurado para crear mundos.",
      tools: ["GTA: San Andreas", "Lógica de Videojuegos", "Nostalgia 2000s"],
      badge: "Inspiración",
    },
  ],

  // Sección 5: Mi Vida Actual
  currentLife: {
    headline: "Rutina, Enfoque y Consolidación Técnica",
    summary:
      "Actualmente curso el 8vo semestre de Ingeniería de Sistemas, manteniendo una rutina estructurada y sin dispersiones donde la prioridad es la elevación continua del nivel técnico.",
    routine: [
      {
        area: "Academia Universitaria",
        description:
          "Cursando el 8vo semestre de la carrera con alto rendimiento y aprovechamiento intensivo de materias avanzadas.",
        focus: "Ingeniería de Sistemas — 8vo Semestre",
      },
      {
        area: "Preparación Física",
        description:
          "Sesiones diarias de gimnasio programadas que refuerzan la constancia, la energía y el balance mental para largas jornadas de estudio.",
        focus: "Entrenamiento de fuerza y disciplina diaria",
      },
      {
        area: "Laboratorio Personal de Habilidades",
        description:
          "Estudio autodidacta de arquitecturas de PyTorch, profundización en backend y resolución de problemas algorítmicos complejos.",
        focus: "Práctica técnica deliberada y continua",
      },
    ],
    projectsStatus: {
      statusNote: "Fase de consolidación profunda de fundamentos",
      explanation:
        "Actualmente no publico proyectos superficiales de demostración. Mi tiempo está dedicado a dominar la matemática subyacente de los modelos, la estructura interna de PyTorch y las buenas prácticas de backend para construir soluciones sólidas y con valor real.",
    },
    primaryGoals: [
      {
        goal: "Cierre exhaustivo de brechas técnicas",
        detail:
          "Identificar y resolver activamente cualquier vacío en teoría matemática, optimización de código y escalabilidad backend.",
      },
      {
        goal: "Dominio integral del área de datos y ML",
        detail:
          "Alcanzar un nivel de fluidez donde el entrenamiento, depuración y despliegue de modelos de IA se sienta natural y riguroso.",
      },
      {
        goal: "Consistencia y disciplina personal",
        detail:
          "Mantener el rigor entre el entrenamiento físico, el avance universitario y el estudio especializado.",
      },
    ],
  },

  // Sección 6: Mi Futuro
  future: {
    headline: "Aspiraciones Profesionales y Rumbo Técnico",
    aspirations:
      "Trabajar en una empresa de desarrollo de inteligencia artificial o de analítica de datos de vanguardia, integrando equipos donde la excelencia técnica, la innovación y el impacto a escala sean los estándares diarios.",
    strategicObjectives: [
      {
        title: "Inserción en la Industria de IA y Analítica",
        description:
          "Vincularse profesionalmente a compañías punteras dedicadas al desarrollo de soluciones basadas en aprendizaje automático o tratamiento masivo de datos.",
        targetHorizon: "Corto / Mediano Plazo",
      },
      {
        title: "Ingeniería de Datos y ML hacia Producción",
        description:
          "Cerrar la brecha común entre prototipos de Jupyter Notebook y sistemas productivos de alta disponibilidad, garantizando reproducibilidad y bajo tiempo de latencia.",
        targetHorizon: "Mediano Plazo",
      },
      {
        title: "Referente Técnico en el Sector",
        description:
          "Convertirse en un profesional de referencia que domina con igual soltura la matemática y estadística de los modelos, como la ingeniería de software y el backend que los soporta.",
        targetHorizon: "Largo Plazo",
      },
    ],
    technicalVision:
      "La meta no es solo consumir APIs de inteligencia artificial, sino entender la matemática interna de las redes, diseñar arquitecturas backend robustas y liderar la implementación de soluciones de datos con rigor científico y de ingeniería.",
  },
};
