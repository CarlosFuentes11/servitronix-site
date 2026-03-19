import "./globals.css";

export const metadata = {
  title: "Servitronix",
  description: "Soluciones Electromecanicas Industriales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* 🔷 NAVBAR */}
        <header
          style={{
            background: "#1f1f1f",
            padding: "15px 20px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {/* LOGO */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/images/logo-servitronix.png"
                alt="logo"
                style={{ height: "35px" }}
              />
              <span style={{ color: "white", fontWeight: "bold" }}>
                SERVITRONIX
              </span>
            </div>

            {/* NAV */}
            <nav
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a href="#inicio" style={link}>Inicio</a>
              <a href="#servicios" style={link}>Servicios</a>
              <a href="#capacidades" style={link}>Capacidades</a>
              <a href="#proyectos" style={link}>Proyectos</a>
              <a href="#industrias" style={link}>Industrias</a>
              <a href="#contacto" style={link}>Contacto</a>
            </nav>
          </div>
        </header>

        {children}

        {/* 🔷 FOOTER */}
    <footer
        style={{
            background: "#111",
            color: "#ffffff", // 🔥 FORZADO
            padding: "40px",
            textAlign: "center",
  }}
>
          <p style={{ color: "#ffffff" }}>
    © Servitronix — Infraestructura electromecánica industrial
          </p>
        </footer>

      </body>
    </html>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};