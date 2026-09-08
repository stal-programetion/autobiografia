# Autobiografía Técnica — César Acosta (One-Page Next.js)

Sitio web autobiográfico one-page desarrollado con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**. Diseñado con una identidad visual propia técnica, sobria y minimalista (paleta oscura grafito/obsidiana con acentos de precisión en cian y esmeralda), libre de bases de datos y completamente desacoplado del contenido.

Todo el contenido del sitio vive de forma centralizada en [`app/data.ts`](app/data.ts).

---

## 📋 Requisitos Previos

- **Node.js**: versión 18.17.0 o superior (recomendado v20+ o v22+).
- **npm**: gestor de paquetes incluido con Node.js.

---

## 🚀 Instalación y Ejecución

> **IMPORTANTE**: Asegúrate de ejecutar los comandos en la carpeta raíz del proyecto (`cesar-biografia`), **no** dentro del subdirectorio `app`.

```bash
# 1. Asegúrate de estar en el directorio raíz del proyecto
cd cesar-biografia

# 2. Instala las dependencias del proyecto
npm install

# 3. Inicia el servidor de desarrollo local
npm run dev
```

Una vez iniciado el servidor, abre tu navegador en:
👉 **[http://localhost:3000](http://localhost:3000)**

### Comandos Adicionales

- **Compilar para producción**:
  ```bash
  npm run build
  ```
- **Ejecutar la versión compilada**:
  ```bash
  npm run start
  ```
- **Chequeo de tipos y linter**:
  ```bash
  npm run lint
  ```

---

## 🛠️ Cómo Editar el Contenido Sin Tocar el Diseño

Todo el contenido textual, cronológico y técnico se encuentra en el archivo [`app/data.ts`](app/data.ts). **No es necesario modificar ningún archivo `.tsx` ni `.css` para actualizar tu información**.

El archivo exporta el objeto `biographyData`, el cual está tipado con TypeScript para prevenir errores.

### 1. Datos Personales y Hero Terminal (`personal`)
Modifica la sección `personal` para actualizar tu edad, presentación, semestre o enlaces:

```typescript
// app/data.ts
export const biographyData: BiographyData = {
  personal: {
    name: "César Acosta",
    role: "Estudiante de Ingeniería de Sistemas | Datos, ML & Backend",
    age: 20, // Cambia tu edad aquí
    birthplace: "Barranquilla, Atlántico",
    semester: "8vo Semestre", // Actualiza el semestre actual
    degree: "Ingeniería de Sistemas",
    shortBio: "Tu presentación breve...",
    // Especificaciones que aparecen en la terminal interactiva:
    systemSpecs: [
      { label: "USER_ID", value: "cesar_acosta" },
      { label: "STATUS", value: "ACTIVO (8vo Semestre)" },
      // Agrega o ajusta parámetros...
    ],
    // ...
  },
  // ...
};
```

### 2. Mi Historia — Línea de Tiempo Cronológica (`historyTimeline`)
Para editar o agregar una etapa en tu historia:

```typescript
historyTimeline: [
  {
    id: "nuevo-hito",
    period: "Año o Etapa",
    stage: "Nombre de la Etapa",
    title: "Título del hito",
    description: "Descripción detallada del evento o aprendizaje...",
    tag: "Etiqueta",
    highlight: "Detalle clave a resaltar",
  },
  // ...
]
```

### 3. Mi Formación y Certificaciones (`education`)
Para registrar un nuevo curso, certificación o examen internacional:

```typescript
education: [
  {
    id: "nueva-certificacion",
    period: "2026",
    type: "certification", // "formal" | "certification" | "language"
    institution: "Plataforma o Universidad",
    degree: "Nombre del Curso o Título",
    description: "Competencias adquiridas...",
    badge: "Etiqueta distintiva",
  },
  // ...
]
```

### 4. Mis Intereses (`interests`)
Agrega o modifica áreas de enfoque técnico o hábitos personales:

```typescript
interests: [
  {
    id: "nuevo-interes",
    category: "Técnico", // "Técnico" | "Ciencia" | "Disciplina" | "Personal"
    title: "Nombre del interés",
    description: "Explicación del interés...",
    tools: ["Herramienta 1", "Herramienta 2"],
    badge: "Tag",
  },
  // ...
]
```

### 5. Mi Vida Actual y Mi Futuro (`currentLife` y `future`)
Modifica las metas a corto plazo, la rutina semanal o tus aspiraciones profesionales en las secciones correspondientes de `app/data.ts`.

---

## 🎨 Lineamientos de Diseño Implementados

- **Tratamiento Cronológico Selectivo**: Se reservaron las líneas de tiempo estrictamente para las secciones con progresión temporal (*Mi Historia* y *Mi Formación*). Las demás secciones emplean cuadrículas modulares y tarjetas asimétricas.
- **Hero Técnico Personalizado**: En lugar de un encabezado genérico, cuenta con un módulo de terminal interactiva con pestañas de comandos (`$ whoami`, `$ specs.env`, `$ focus.log`) que reflejan el perfil técnico de César.
- **Paleta Oscura Sobria**: Fondo en obsidiana profundo (`#070a12`), paneles en superficie slate (`#090e1a`), bordes sutiles en `slate-800` y acentos de precisión en cian y esmeralda.
- **Accesibilidad**: Navegación por teclado completa con indicador de foco de alta visibilidad (`focus-visible:ring-cyan-400`), etiquetas ARIA y enlace de salto directo al contenido principal.
- **Animaciones Discretas**: Solo en carga inicial; sin transiciones molestas o distractivas en cada tarjeta.

---

## 📁 Estructura del Proyecto

```
cesar-biografia/
├── app/
│   ├── data.ts            # Fuente de verdad de todo el contenido autobiográfico
│   ├── globals.css        # Estilos globales, foco accesible y paleta técnica
│   ├── layout.tsx         # Layout raíz con metadatos SEO y fuentes
│   └── page.tsx           # Ensamblado de las 6 secciones autobiográficas
├── components/
│   ├── Navbar.tsx         # Menú flotante con indicadores y navegación accesible
│   ├── HeroTerminal.tsx   # Hero con estética de consola de comandos interactiva
│   ├── HistoryTimeline.tsx# Línea de tiempo cronológica para "Mi Historia"
│   ├── EducationSection.tsx # Línea de tiempo para formación y aprendizajes clave
│   ├── InterestsGrid.tsx  # Cuadrícula de intereses técnicos y hábitos
│   ├── CurrentLife.tsx    # Sección de rutina, proyectos transparentes y metas
│   ├── FutureSection.tsx  # Aspiraciones en IA y liderazgo técnico
│   └── Footer.tsx         # Pie de página y atajos de navegación
├── tailwind.config.ts     # Configuración de diseño de Tailwind CSS
├── package.json           # Dependencias y scripts
└── README.md              # Documentación de instalación y uso
```
