export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="madmax-logo"
      style={{
        width: '42px',
        height: '42px',
        filter: 'drop-shadow(0px 2px 8px rgba(234, 88, 12, 0.55))',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
    >
      <defs>
        {/* Metal oxidado — gradiente principal */}
        <linearGradient id="rustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="30%" stopColor="#f97316" />
          <stop offset="65%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>

        {/* Hueso curtido */}
        <linearGradient id="boneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fafaf9" />
          <stop offset="55%" stopColor="#e7e5e4" />
          <stop offset="100%" stopColor="#a8a29e" />
        </linearGradient>

        {/* Neón tech para </> */}
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>

        {/* Cámara interior con profundidad */}
        <radialGradient id="chamberGradient" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="60%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>

        {/* Glow suave para </> */}
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ===== ANILLO EXTERIOR ===== */}
      <circle
        cx="100"
        cy="100"
        r="94"
        fill="url(#rustGradient)"
        stroke="#450a0a"
        strokeWidth="1.5"
      />

      {/* Bisel interior del anillo */}
      <circle cx="100" cy="100" r="80" fill="none" stroke="#7c2d12" strokeWidth="1.5" />
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* Remaches metálicos */}
      <g fill="#fbbf24" stroke="#450a0a" strokeWidth="0.8">
        <circle cx="100" cy="12" r="3.5" />
        <circle cx="161" cy="39" r="3.5" />
        <circle cx="188" cy="100" r="3.5" />
        <circle cx="161" cy="161" r="3.5" />
        <circle cx="100" cy="188" r="3.5" />
        <circle cx="39" cy="161" r="3.5" />
        <circle cx="12" cy="100" r="3.5" />
        <circle cx="39" cy="39" r="3.5" />
      </g>

      {/* Brillo superior en los remaches (efecto 3D) */}
      <g fill="#fef3c7" opacity="0.85">
        <circle cx="99" cy="11" r="1" />
        <circle cx="160" cy="38" r="1" />
        <circle cx="187" cy="99" r="1" />
        <circle cx="160" cy="160" r="1" />
        <circle cx="99" cy="187" r="1" />
        <circle cx="38" cy="160" r="1" />
        <circle cx="11" cy="99" r="1" />
        <circle cx="38" cy="38" r="1" />
      </g>

      {/* ===== CÁMARA INTERIOR ===== */}
      <circle cx="100" cy="100" r="80" fill="url(#chamberGradient)" />
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="#ea580c"
        strokeWidth="0.8"
        opacity="0.6"
      />

      {/* ===== CALAVERA ===== */}
      <g>
        {/* Silueta del cráneo y mandíbula */}
        <path
          fill="url(#boneGradient)"
          stroke="#0c0a09"
          strokeWidth="1.3"
          strokeLinejoin="round"
          d="M 100 46
             C 76 46, 62 62, 62 82
             C 62 94, 65 104, 70 110
             C 72 114, 75 117, 78 118
             L 80 118
             L 80 126
             C 80 128, 82 130, 84 130
             L 88 130
             L 88 124
             L 96 124
             L 96 130
             L 104 130
             L 104 124
             L 112 124
             L 112 130
             L 116 130
             C 118 130, 120 128, 120 126
             L 120 118
             L 122 118
             C 125 117, 128 114, 130 110
             C 135 104, 138 94, 138 82
             C 138 62, 124 46, 100 46 Z"
        />

        {/* Cuenca del ojo izquierdo — agresiva, angulosa */}
        <path
          fill="#0c0a09"
          d="M 70 78
             Q 70 66, 80 66
             Q 90 66, 92 76
             L 90 88
             Q 80 92, 72 86
             Z"
        />

        {/* Cuenca del ojo derecho — espejada */}
        <path
          fill="#0c0a09"
          d="M 130 78
             Q 130 66, 120 66
             Q 110 66, 108 76
             L 110 88
             Q 120 92, 128 86
             Z"
        />

        {/* Destello ámbar en los ojos */}
        <circle cx="80" cy="78" r="2" fill="#fbbf24" opacity="0.9" />
        <circle cx="120" cy="78" r="2" fill="#fbbf24" opacity="0.9" />

        {/* Cavidad nasal triangular */}
        <path fill="#0c0a09" d="M 100 92 L 94 106 L 106 106 Z" />

        {/* Grietas en los pómulos */}
        <path
          fill="none"
          stroke="#0c0a09"
          strokeWidth="0.7"
          opacity="0.5"
          d="M 68 96 L 74 100"
        />
        <path
          fill="none"
          stroke="#0c0a09"
          strokeWidth="0.7"
          opacity="0.5"
          d="M 132 96 L 126 100"
        />

        {/* Grieta en la frente */}
        <path
          fill="none"
          stroke="#0c0a09"
          strokeWidth="0.6"
          opacity="0.35"
          d="M 104 50 L 100 58 L 104 64"
        />

        {/* Dientes */}
        <g stroke="#0c0a09" strokeWidth="0.8" fill="none">
          <line x1="82" y1="118" x2="118" y2="118" />
          <line x1="88" y1="118" x2="88" y2="124" />
          <line x1="94" y1="118" x2="94" y2="124" />
          <line x1="100" y1="118" x2="100" y2="124" />
          <line x1="106" y1="118" x2="106" y2="124" />
          <line x1="112" y1="118" x2="112" y2="124" />
        </g>
      </g>

      {/* Línea separadora entre calavera y símbolos */}
      <line
        x1="58"
        y1="140"
        x2="142"
        y2="140"
        stroke="#7c2d12"
        strokeWidth="0.6"
        opacity="0.55"
      />

      {/* ===== SÍMBOLOS </> COMO BANNER INFERIOR ===== */}
      <g
        stroke="url(#neonGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#neonGlow)"
      >
        {/* < */}
        <polyline points="68,148 58,155 68,162" />

        {/* / */}
        <line x1="95" y1="145" x2="105" y2="168" />

        {/* > */}
        <polyline points="132,148 142,155 132,162" />
      </g>
    </svg>
  );
}