import type { CSSProperties, ComponentType } from "react";
import {
  FaReact,
  FaJs,
  FaWordpress,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiWoocommerce,
  SiElementor,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

type Skill = {
  name: string;
  Icon: ComponentType;
  color: string; // color de marca (se ve en hover)
};

const skills: Skill[] = [
  { name: "", Icon: FaReact, color: "#61DAFB" },
  { name: "", Icon: SiTypescript, color: "#3178C6" },
  { name: "", Icon: FaJs, color: "#F7DF1E" },
  { name: "", Icon: FaWordpress, color: "#21759B" },
  { name: "", Icon: SiWoocommerce, color: "#96588A" },
  { name: "", Icon: SiElementor, color: "#D30C5C" },
  { name: "", Icon: FaPhp, color: "#777BB4" },
  { name: "", Icon: FaHtml5, color: "#E34F26" },
  { name: "", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "", Icon: FaAws, color: "#FF9900" },
  { name: "", Icon: FaDocker, color: "#2496ED" },
  { name: "", Icon: SiMysql, color: "#4479A1" },
  { name: "", Icon: SiPostgresql, color: "#4169E1" },
  { name: "", Icon: SiMongodb, color: "#47A248" },
  { name: "", Icon: FaNodeJs, color: "#5FA04E" },
  { name: "", Icon: SiPostman, color: "#FF6C37" },
  { name: "", Icon: SiSwagger, color: "#85EA2D" },
  { name: "", Icon: FaPython, color: "#3776AB" },
];

function Skills() {
  return (
    <section id="habilidades">

      <div>

        <p>Tecnologías</p>

        <h2>
          Herramientas que utilizo
        </h2>

      </div>

      <div className="skills-grid" data-aos="fade-up">
        {skills.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="skill-card"
            style={{ "--brand": color } as CSSProperties}
          >
            <div className="skill-icon">
              <Icon />
            </div>
            <p className="skill-name">{name}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;