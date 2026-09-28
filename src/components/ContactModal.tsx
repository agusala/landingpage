import { useEffect, useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    consulta: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Cerrar con ESC + bloquear scroll del body
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (isOpen) {
      document.addEventListener('keydown', onEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ===== OPCIÓN 1: Sin backend (Formspree) =====
    // 1. Creá cuenta en https://formspree.io
    // 2. Copiá tu endpoint y pegalo acá:
    // await fetch('https://formspree.io/f/TU_ID_AQUI', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //   body: JSON.stringify(form),
    // });

    // ===== OPCIÓN 2: Sin backend (solo log) =====
    console.log('Formulario enviado:', form);

    // Simulamos delay
    await new Promise((r) => setTimeout(r, 800));

    setLoading(false);
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({ nombre: '', apellido: '', email: '', consulta: '' });
      onClose();
    }, 2200);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar"
          type="button"
        >
          ×
        </button>

        {sent ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>¡Mensaje enviado!</h3>
            <p>Te voy a responder lo antes posible.</p>
          </div>
        ) : (
          <>
            <span className="section-kicker">Contacto</span>
            <h3 className="modal-title">Contame tu idea</h3>
            <p className="modal-sub">
              Completá el formulario y te respondo en menos de 24h.
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-row">
                <div className="modal-field">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    id="nombre"
                    required
                    type="text"
                    placeholder="Juan"
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({ ...form, nombre: e.target.value })
                    }
                  />
                </div>

                <div className="modal-field">
                  <label htmlFor="apellido">Apellido</label>
                  <input
                    id="apellido"
                    required
                    type="text"
                    placeholder="Pérez"
                    value={form.apellido}
                    onChange={(e) =>
                      setForm({ ...form, apellido: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="modal-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="juan@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="modal-field">
                <label htmlFor="telefono">Telefono</label>
                <input
                  id="telefono"
                  required
                  type="tel"
                  placeholder="351........"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="modal-field">
                <label htmlFor="consulta">Consulta</label>
                <textarea
                  id="consulta"
                  required
                  rows={4}
                  placeholder="Contame sobre tu proyecto..."
                  value={form.consulta}
                  onChange={(e) =>
                    setForm({ ...form, consulta: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="modal-submit"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
                {!loading && <span>↗</span>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactModal;