function Hero() {
  return (
    <section id="inicio">
      <div className="hero-grid">

        <div className="hero-content">

          <p>Hola, soy Agustín</p>

          <h1>
            Desarrollo sitios web
            <br />
            y experiencias digitales
            <br />
            de alto impacto.
          </h1>

          <p>
           Transformo ideas en aplicaciones web, tiendas online y sitios modernos. Código limpio, alto rendimiento y soluciones pensadas para hacer crecer tu proyecto.
          </p>

          <div className="hero-actions">
            <a href="#proyectos">
              Ver mis proyectos
            </a>

            <a href="#contacto">
              Contactarme
            </a>
          </div>

        </div>

        <div className="hero-photo">
          <div className="hero-photo-glow" />
          <div className="hero-photo-frame">
            <img
              src="/images/yo1.png"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
