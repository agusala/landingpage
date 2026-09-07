const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "WordPress",
  "WooCommerce",
  "Elementor",
  "PHP",
  "HTML",
  "CSS",
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

      <div>
        {skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}
      </div>

    </section>
  );
}

export default Skills;