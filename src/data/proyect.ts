export interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Laboratorio John Martin",
    type: "WordPress",
    description:
      "Desarrollo y personalización de sitio web con catálogo de productos.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "PHP",
    ],
    image: "/images/john-martin.jpg",
    url: "https://laboratoriojohnmartin.com",
  },    {
    title: "Liugong Córdoba",
    type: "WordPress",
    description:
      "Sitio web personalizado.",
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
    ],
    image: "/images/proyecto-2.jpg",
    url: "https://liugongcordoba.com.ar/",
  },


  {
    title: "JR Auto Electric",
    type: "WordPress",
    description:
      "Sitio web con integracion de sistema adaptado al cliete con informacion de documentos eh inventario de stock, informcion de cuentas de clientes y pedidos.",
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
      "PHP",
    ],
    image: "/images/proyecto-2.jpg",
    url: "https://jrautoelectric.com.ar/",
  },
    {
    title: "Supermercado Caracol",
    type: "WordPress",
    description:
      "Sitio web personalizado.",
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
    ],
    image: "/images/proyecto-2.jpg",
    url: "https://www.supercaracol.com.ar/",
  },
   {
    title: "Grivelaberturas",
    type: "WordPress",
    description:
      "Sitio web personalizado.",
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
      "PHP",
    ],
    image: "/images/proyecto-2.jpg",
    url: "https://grivelaberturas.com.ar/",
  },
   {
    title: "Abercor",
    type: "WordPress",
    description:
      "Sitio web personalizado.",
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
    ],
    image: "/images/proyecto-2.jpg",
    url: "https://abercor.com.ar/",
  },

];
