export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  status: "En curso" | "Finalizado";
  description: string;
}


export const education: EducationItem[] = [
  {
    title: "Desarrollador de Software",
    institution: "ISP - Instituto Superior PASCAL",
    period: "2025 - Actualidad",
    status: "En curso",
    description:
      "Formación integral en programación, estructuras de datos, bases de datos y desarrollo de software.",
  },
  {
    title: "Diplomatura en Desarrollo Full Stack",
    institution: "UTN - Universidad Tecnológica Nacional",
    period: "2021 - 2022",
    status: "Finalizado",
    description:
      "Desarrollo de aplicaciones web completas, del frontend al backend,buenas prácticas.",
  },
  {
    title: "Diplomatura en Desarrollo Full Stack",
    institution: "UBP - Universidad Blas Pascal",
    period: "2025 - 2026",
    status: "Finalizado",
    description:
      "Profundización en arquitectura de aplicaciones, APIs REST y bases de datos relacionales y no relacinales.",
  },
];
