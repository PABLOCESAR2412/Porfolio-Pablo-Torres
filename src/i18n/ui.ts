export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.about': 'Sobre mi',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'sidebar.title': 'Portafolio',
    'hero.pretitle': 'SOY',
    'hero.name': 'PABLO CESAR TORRES GILSE',
    'hero.role': 'Desarrollador Full Stack',
    'hero.desc': 'Desarrollador Full Stack con experiencia en Next.js, React, Angular, Astro y Node.js. He desarrollado un sistema web completo desde cero y múltiples landing pages optimizadas para conversión. Enfoque en resultados y aprendizaje continuo.',
    'hero.status': 'Abierto a trabajo',
    'hero.location': 'Quito, Ecuador',
    'projects.title': 'Proyectos',
    'skills.title': 'Habilidades',
    'experience.title': 'Experiencia',
    'contact.title': 'Contacto',
    'contact.subtitle': 'INICIAR CONEXIÓN // DISPONIBLE PARA TRABAJO FREELANCE Y CONTRATACIÓN DIRECTA.',
    'contact.email': 'Transmisión [Email]',
    'contact.links': 'Enlaces de Red',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'sidebar.title': 'Portfolio',
    'hero.pretitle': 'I AM',
    'hero.name': 'PABLO CESAR TORRES GILSE',
    'hero.role': 'Full Stack Developer',
    'hero.desc': 'Full Stack Developer with experience in Next.js, React, Angular, Astro, and Node.js. I have developed a complete web system from scratch and multiple conversion-optimized landing pages. Focus on results and continuous learning.',
    'hero.status': 'Open to work',
    'hero.location': 'Quito, Ecuador',
    'projects.title': 'Projects',
    'skills.title': 'Skills',
    'experience.title': 'Experience',
    'contact.title': 'Contact',
    'contact.subtitle': 'INITIATE CONNECTION // AVAILABLE FOR FREELANCE & DIRECT HIRE.',
    'contact.email': 'Transmission [Email]',
    'contact.links': 'Network Links',
  }
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
