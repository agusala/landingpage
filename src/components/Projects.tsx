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


        <h2 style={{ fontSize:"20px", marginBottom: "2rem" }}>
        WordPress
        </h2>

      </div>
      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index + 1}
            {...project}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;