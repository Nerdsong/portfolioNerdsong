import type { Locale } from '@/lib/i18n';
import type { LucideIcon } from 'lucide-react';
import {
  Braces,
  Code2,
  Coffee,
  Database,
  FileCode,
  Figma,
  GitBranch,
  Hash,
  Image,
  Layers,
  Paintbrush,
  Puzzle,
  Smartphone,
  Wind,
  Workflow,
} from 'lucide-react';

export type StackItem = {
  name: string;
  description: Record<Locale, string>;
  icon: LucideIcon;
  iconSrc?: string;
};

export const coreStack: StackItem[] = [
  { name: 'React', icon: Code2, iconSrc: '/images/icons/React-icon.png', description: { es: 'Interfaces componentizadas y mantenibles.', en: 'Componentized and maintainable interfaces.' } },
  { name: 'JavaScript', icon: FileCode, iconSrc: '/images/icons/JS-icon.png', description: { es: 'Lenguaje base del ecosistema web moderno.', en: 'Core language of the modern web ecosystem.' } },
  { name: 'TypeScript', icon: Braces, iconSrc: '/images/icons/TS-icon.png', description: { es: 'Tipado estático para código más seguro.', en: 'Static typing for safer code.' } },
  { name: 'Next.js', icon: Layers, iconSrc: '/images/icons/Next-icon.png', description: { es: 'Apps rápidas con SSR y routing moderno.', en: 'Fast apps with SSR and modern routing.' } },
  { name: 'CSS', icon: Paintbrush, iconSrc: '/images/icons/CSS-icon.png', description: { es: 'Estilos, layout y diseño responsive en la web.', en: 'Styling, layout, and responsive web design.' } },
  { name: 'Tailwind', icon: Wind, iconSrc: '/images/icons/Tailwind-icon.png', description: { es: 'Estilos utilitarios y diseño consistente.', en: 'Utility-first styling and consistent design.' } },
  { name: 'Git', icon: GitBranch, description: { es: 'Control de versiones y flujo colaborativo.', en: 'Version control and collaborative workflow.' } },
];

export const alsoWorkedWith: StackItem[] = [
  { name: 'C#', icon: Hash, description: { es: 'Lenguaje orientado a objetos para aplicaciones .NET.', en: 'Object-oriented language for .NET applications.' } },
  { name: 'Java', icon: Coffee, description: { es: 'Desarrollo multiplataforma y aplicaciones empresariales.', en: 'Cross-platform development and enterprise applications.' } },
  { name: 'Android Studio', icon: Smartphone, description: { es: 'IDE para desarrollo de apps Android.', en: 'IDE for Android app development.' } },
  { name: 'Power Automate', icon: Workflow, description: { es: 'Automatización de flujos de trabajo en Microsoft 365.', en: 'Workflow automation in Microsoft 365.' } },
  { name: 'SQL', icon: Database, description: { es: 'Consultas y modelado de datos relacionales.', en: 'Queries and relational data modeling.' } },
  { name: 'TamperMonkey', icon: Puzzle, description: { es: 'Scripts de usuario y personalización del navegador.', en: 'User scripts and browser customization.' } },
  { name: 'GIMP', icon: Image, description: { es: 'Edición y retoque de imágenes de código abierto.', en: 'Open-source image editing and retouching.' } },
  { name: 'Figma', icon: Figma, description: { es: 'Diseño de interfaces y prototipos colaborativos.', en: 'Collaborative interface design and prototyping.' } },
];

export type ExperienceItem = {
  id: string;
  startYear: number;
  endYear: number | null;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tone: 'work' | 'education' | 'freelance' | 'focus';
};

export const experienceTimeline = {
  start: 2022,
  end: 2026,
} as const;

export const experienceItems: ExperienceItem[] = [
  {
    id: 'ncr-atleos',
    startYear: 2022,
    endYear: null,
    tone: 'work',
    title: { es: 'NCR Atleos', en: 'NCR Atleos' },
    description: {
      es: 'Coordinación logística y soporte técnico en entorno corporativo.',
      en: 'Logistics coordination and technical support in a corporate environment.',
    },
  },
  {
    id: 'utn',
    startYear: 2024,
    endYear: null,
    tone: 'education',
    title: { es: 'UTN', en: 'UTN' },
    description: {
      es: 'Tecnicatura en Programación — formación en desarrollo de software.',
      en: 'Programming degree — software development training.',
    },
  },
  {
    id: 'freelance',
    startYear: 2025,
    endYear: null,
    tone: 'freelance',
    title: { es: 'Freelance', en: 'Freelance' },
    description: {
      es: 'Desarrollo de interfaces y proyectos web para clientes independientes.',
      en: 'Interface development and web projects for independent clients.',
    },
  },
  {
    id: 'opportunities',
    startYear: 2026,
    endYear: null,
    tone: 'focus',
    title: { es: 'En búsqueda de proyectos y oportunidades', en: 'Looking for projects and opportunities' },
    description: {
      es: 'Developer abierto a nuevos desafíos.',
      en: 'Developer open to new challenges.',
    },
  },
];
