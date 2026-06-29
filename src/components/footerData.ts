// src/components/footerData.ts

export interface FooterLink {
  text: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'tiktok';
  href: string;
  ariaLabel: string;
}

// 1. Columnas de Navegación del Footer
export const footerNavigation: FooterColumn[] = [
  {
    title: "Navegar",
    links: [
      { text: "Internet Y Tecnología", href: "/internet-tecnologia" },
      { text: "Emprendimiento y Negocio en Línea", href: "/emprendimiento" },
      { text: "Comercial", href: "/comercial" },
      { text: "Contacto", href: "/contacto" }
    ]
  },
  {
    title: "Portales",
    links: [
      { text: "Punto.hn", href: "https://punto.hn", external: true },
      { text: "RDS", href: "/rds" },
      { text: "Empleos", href: "/empleos" },
      { text: "Becas", href: "/becas" },
      { text: "Eventos", href: "/eventos" },
      { text: "RDS Radio", href: "/rds-radio" }
    ]
  }
];

// 2. Enlaces de Redes Sociales
export const socialLinks: SocialLink[] = [
  { platform: 'facebook', href: '#', ariaLabel: 'Facebook' },
  { platform: 'instagram', href: '#', ariaLabel: 'Instagram' },
  { platform: 'linkedin', href: '#', ariaLabel: 'LinkedIn' },
  { platform: 'tiktok', href: '#', ariaLabel: 'TikTok' }
];