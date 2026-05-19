// ═══════════════════════════════════════════════════════════════
//  Footer.jsx — EJEMPLO 4: prop simple con valor por defecto
// ═══════════════════════════════════════════════════════════════
//  Si nadie pasa la prop "texto", se usa "© 2026 Mi App".
// ═══════════════════════════════════════════════════════════════

function Footer({ texto = '© Club de Juegos de Mesa "El Rincón de Hermes" - '}) {
  return (
    <footer className="footer">
      <p>{texto}{new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer