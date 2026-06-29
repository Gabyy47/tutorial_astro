// src/components/carruselData.ts

export interface Slide {
  title: string;
  desc: string;
  color: string;
  tag: string;
  link: string;
}

export const slides: Slide[] = [
  {
    title: "Artículos",
    desc: "Mantente al tanto de las últimas publicaciones relacionados al tema de tu interés.",
    color: "#6b46c1", 
    tag: "Tendencia",
    link: "/kpop"
  },
  {
    title: "Manuales",
    desc: "Explora las guías que más te interesa aplicar.",
    color: "#1a202c", 
    tag: "Destacado",
    link: "/metal"
  },
  {
    title: "Contactos",
    desc: "Revisa nuestras cuentas profesionales si necesitas ayuda.",
    color: "#9b2c2c", 
    tag: "Esencial",
    link: "/rock"
  }
];