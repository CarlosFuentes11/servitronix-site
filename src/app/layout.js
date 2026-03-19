import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Servitronix",
  description: "Soluciones Electromecanicas Industriales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* 🔷 HEADER PROFESIONAL */}
        <Header />

        {/* 🔷 CONTENIDO */}
        {children}

        {/* 🔷 FOOTER */}
        <footer
          style={{
            background: "#111",
            color: "#ffffff",
            padding: "40px 20px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#ffffff", margin: 0 }}>
            © Servitronix — Infraestructura electromecánica industrial
          </p>
        </footer>

      </body>
    </html>
  );
}