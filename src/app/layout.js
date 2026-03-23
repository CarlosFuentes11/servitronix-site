import "./globals.css";
import Header from "../components/Header";
import Script from "next/script";

export const metadata = {
  title: "Servitronix | Soluciones Electromecánicas Industriales",
  description:
    "Empresa especializada en infraestructura electromecánica industrial.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

        <Header />

        {children}

        <footer
          style={{
            background: "#111",
            color: "#ffffff",
            padding: "40px 20px",
            textAlign: "center",
            borderTop: "1px solid #222",
          }}
        >
          <p style={{ margin: 0 }}>
            © Servitronix — Infraestructura electromecánica industrial
          </p>
        </footer>

        {/* ✅ SCRIPT MEJORADO */}
        <Script id="fade-in" strategy="afterInteractive">
          {`
            function initObserver() {
              const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                  }
                });
              }, { threshold: 0.15 });

              document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
              });
            }

            // 🔥 ejecuta al cargar
            window.addEventListener("load", initObserver);
          `}
        </Script>

      </body>
    </html>
  );
}