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
  },

  {
    title: "Proyecto Web 2",
    type: "WordPress",
    description:
      "Sitio web desarrollado y personalizado según las necesidades del proyecto.",
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
    ],
    image: "/images/proyecto-2.jpg",
    url: "#",
  },

  {
    title: "Proyecto React",
    type: "React",
    description:
      "Aplicación web desarrollada utilizando React y TypeScript.",
    technologies: [
      "React",
      "TypeScript",
      "CSS",
    ],
    image: "/images/proyecto-3.jpg",
    url: "#",
  },
];