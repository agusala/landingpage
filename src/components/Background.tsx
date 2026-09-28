// Fondo animado global: se renderiza una sola vez en App.tsx,
// queda fijo detrás de todo el contenido (position: fixed) y
// se ve en todas las secciones mientras el usuario scrollea.
function Background() {
  return (
    <div className="bg-animated" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-hazard" />
      <div className="bg-blob bg-blob--one" />
      <div className="bg-blob bg-blob--two" />
      <div className="bg-blob bg-blob--three" />
      <div className="bg-dust" />
      <div className="bg-vignette" />
    </div>
  );
}

export default Background;
