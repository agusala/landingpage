import { useEffect, useRef } from "react";

interface ProjectCardProps {
  index: number;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  url: string;
}

function ProjectCard({
  index,
  title,
  type,
  description,
  technologies,
  url,
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scalerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && scalerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const virtualWidth = 1280;
                const scale = containerWidth / virtualWidth;
                scalerRef.current.style.transform = `scale(${scale})`;
      }
    };

    handleResize();


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article>

      <div className="project-preview-wrapper" ref={containerRef}>
        <span className="project-index">
          {String(index).padStart(2, "0")}
        </span>


        <div className="iframe-scaler" ref={scalerRef}>
          <iframe
            src={url}
            title={`Vista previa en vivo de ${title}`}
            loading="lazy"
            tabIndex={-1}
          />
        </div>
      </div>

      <div>
        <span>{type}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div>
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
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