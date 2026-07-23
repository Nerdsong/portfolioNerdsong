export type ProjectLink = {
  type: 'link' | 'file';
  labelKey: string;
  url: string;
  downloadName?: string;
};

export type Project = {
  slug: string;
  cardImage: string;
  images: { src: string; alt: string }[];
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  links: ProjectLink[];
  longDescription: {
    es: string;
    en: string;
  };
  content: {
    es: {
      name: string;
      shortDescription: string;
    };
    en: {
      name: string;
      shortDescription: string;
    };
  };
};

export const projects: Project[] = [
  {
    slug: 'weather-app',
    cardImage: '/projectsFiles/projectImages/Weather-app-image.png',
    images: [
      { src: '/projectsFiles/projectImages/Weather-app-image.png', alt: 'Weather app screenshot' },
      { src: '/projectsFiles/projectImages/Weather-app-image2.png', alt: 'Weather app screenshot 2' },
    ],
    tags: ['React', 'TypeScript', 'API'],
    demoUrl: 'https://weather-app-theta-seven-13.vercel.app/',
    repoUrl: 'https://github.com/Nerdsong/weatherApp',
    links: [
      { type: 'link', labelKey: 'demo', url: 'https://weather-app-theta-seven-13.vercel.app/' },
      { type: 'link', labelKey: 'github', url: 'https://github.com/Nerdsong/weatherApp' },
    ],
    longDescription: {
      es: '/projectsFiles/descriptions/es/Weather-app.txt',
      en: '/projectsFiles/descriptions/en/Weather-app.txt',
    },
    content: {
      es: { name: 'Aplicación del clima', shortDescription: 'Aplicación del clima que obtiene datos desde una API meteorológica.' },
      en: { name: 'Weather App', shortDescription: 'Weather App fetching data from Weather API.' },
    },
  },
  {
    slug: 'paint-board',
    cardImage: '/projectsFiles/projectImages/Paint-board-image2.png',
    images: [
      { src: '/projectsFiles/projectImages/Paint-board-image.png', alt: 'Paint board screenshot' },
      { src: '/projectsFiles/projectImages/Paint-board-image2.png', alt: 'Paint board screenshot 2' },
      { src: '/projectsFiles/projectImages/Paint-board-image3.png', alt: 'Paint board screenshot 3' },
    ],
    tags: ['React', 'Canvas', 'Pixel Art'],
    demoUrl: 'https://paint-board-delta.vercel.app/',
    repoUrl: 'https://github.com/Nerdsong/paintBoard',
    links: [
      { type: 'link', labelKey: 'demo', url: 'https://paint-board-delta.vercel.app/' },
      { type: 'link', labelKey: 'github', url: 'https://github.com/Nerdsong/paintBoard' },
    ],
    longDescription: {
      es: '/projectsFiles/descriptions/es/Paint-board.txt',
      en: '/projectsFiles/descriptions/en/Paint-board.txt',
    },
    content: {
      es: { name: 'Tabla de pintar', shortDescription: 'Emulación de Paint con cuadrícula de píxeles (pixel art).' },
      en: { name: 'Paint Board', shortDescription: 'Desktop Paint emulation using a pixel grid.' },
    },
  },
  {
    slug: 'service-planning-board',
    cardImage: '/projectsFiles/projectImages/SPB-1.png',
    images: [
      { src: '/projectsFiles/projectImages/SPB-1.png', alt: 'Service Planning Board screenshot' },
      { src: '/projectsFiles/projectImages/SPB-2.png', alt: 'Service Planning Board screenshot 2' },
      { src: '/projectsFiles/projectImages/SPB-3.png', alt: 'Service Planning Board screenshot 3' },
      { src: '/projectsFiles/projectImages/SPB-4.png', alt: 'Service Planning Board screenshot 4' },
    ],
    tags: ['React', 'Excel', 'Data'],
    demoUrl: 'https://serviceplanningboard-demo.vercel.app/',
    links: [
      { type: 'file', labelKey: 'excel1', url: '/projectsFiles/demoFiles/Technicians_demo.xlsx', downloadName: 'Technicians_demo.xlsx' },
      { type: 'file', labelKey: 'excel2', url: '/projectsFiles/demoFiles/dc_export_services_data_demo.xls', downloadName: 'dc_export_services_data_demo.xls' },
      { type: 'link', labelKey: 'demo', url: 'https://serviceplanningboard-demo.vercel.app/' },
    ],
    longDescription: {
      es: '/projectsFiles/descriptions/es/Service-planning-board.txt',
      en: '/projectsFiles/descriptions/en/Service-planning-board.txt',
    },
    content: {
      es: { name: 'Service Planning Board', shortDescription: 'Herramienta que procesa hojas Excel y muestra información en pantalla.' },
      en: { name: 'Service Planning Board', shortDescription: 'Tool that generates Excel sheets and displays ordered on-screen data.' },
    },
  },
  {
    slug: 'veka-studio',
    cardImage: '/projectsFiles/projectImages/veka-1.png',
    images: [
      { src: '/projectsFiles/projectImages/veka-1.png', alt: 'VEKA Studio website screenshot' },
      { src: '/projectsFiles/projectImages/veka-2.png', alt: 'VEKA Studio website screenshot 2' },
      { src: '/projectsFiles/projectImages/veka-3.png', alt: 'VEKA Studio website screenshot 3' },
    ],
    tags: ['Next.js', 'TypeScript', 'Sanity', 'Tailwind'],
    demoUrl: 'https://vekastudio-bice.vercel.app/',
    links: [
      { type: 'link', labelKey: 'demo', url: 'https://vekastudio-bice.vercel.app/' },
    ],
    longDescription: {
      es: '/projectsFiles/descriptions/es/Veka-studio.txt',
      en: '/projectsFiles/descriptions/en/Veka-studio.txt',
    },
    content: {
      es: {
        name: 'VEKA Studio',
        shortDescription:
          'Sitio web para VEKA Studio, diseño desde el manual de marca, propuesta de ajustes a la paleta de colores y feedback continuo con el cliente. Next.js + TypeScript. En desarrollo.',
      },
      en: {
        name: 'VEKA Studio',
        shortDescription:
          'Website for VEKA Studio, designed from brand guidelines with proposed color palette adjustments and ongoing client feedback. Next.js + TypeScript. In development.',
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const sectionIds = [
  'hero',
  'about',
  'stack',
  'projects',
  'experience',
  'contact',
] as const;

export type SectionId = (typeof sectionIds)[number];
