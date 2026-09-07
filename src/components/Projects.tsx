import ProjectCard from "./ProjectCard";
import { projects } from "../data/proyect";

function Projects() {
  return (
    <section id="proyectos">

      <div>

        <p>Portfolio</p>

        <h2>
          Mis proyectos
        </h2>

        <p>
          Una selección de sitios web y aplicaciones
          que he desarrollado.
        </p>

      </div>

      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;