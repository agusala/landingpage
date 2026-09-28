import { education } from "../data/education";

function Education() {
  return (
    <section id="formacion">

      <div>
        <p>Formación</p>

        <h2>
          Educación y certificaciones
        </h2>

        <p>
          Mi camino de formación como desarrollador,
          en constante actualización.
        </p>
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <article
            key={item.title + item.institution}
            className="education-card"
          >
            <span
              className={
                item.status === "En curso"
                  ? "education-status is-progress"
                  : "education-status"
              }
            >
              {item.status}
            </span>

            <h3>{item.title}</h3>

            <p className="education-institution">{item.institution}</p>
            <p className="education-period">{item.period}</p>
            <p className="education-description">{item.description}</p>
          </article>
        ))}
      </div>

    </section>
  );
}

export default Education;
