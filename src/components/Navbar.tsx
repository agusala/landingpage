function Navbar() {
  return (
    <nav>
      <div className="navbar-container">

        <a href="#inicio" className="navbar-logo">
          AS
        </a>

        <div className="navbar-links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;