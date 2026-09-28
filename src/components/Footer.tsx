function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="footer-inner">
        <span className="footer-mark">⚠</span>
        <p className="footer-copy">
          © {year} <span>Agustín Sala</span> — Todos los derechos reservados.
        </p>
        <span className="footer-mark">⚠</span>
      </div>
    </footer>
  );
}

export default Footer;