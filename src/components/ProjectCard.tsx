interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

function ProjectCard({
  title,
  type,
  description,
  technologies,
  image,
  url,
}: ProjectCardProps) {
  return (
    <article>

      <div>
        <img
          src={image}
          alt={`Captura de ${title}`}
        />
      </div>

      <div>

        <span>{type}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div>
          {technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>

      </div>

    </article>
  );
}

export default ProjectCard;