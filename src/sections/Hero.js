"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "70vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* 🖼 Imagen */}
      <Image
        src="/images/hero-servitronix.jpg"
        alt="Servitronix industrial"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* 🌑 Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />

      {/* CONTENIDO */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "70vh",
          padding: "40px 20px",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <h1 style={h1}>SERVITRONIX</h1>

          <p style={subtitle}>
            Soluciones Electromecánicas Industriales Integrales
          </p>

          <p style={desc}>
            Más de 22 años desarrollando infraestructura, mantenimiento y sistemas industriales para garantizar continuidad operativa, seguridad y eficiencia en planta.
          </p>

          {/* BOTONES */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "25px",
              justifyContent: "center", // 🔥 ESTO LOS CENTRA
              flexWrap: "wrap", // 🔥 RESPONSIVE
            }}
          >
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Solicitar cotización
            </button>

            <button
              className="btn-secondary"
              onClick={() =>
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ESTILOS */

const h1 = {
  fontSize: "clamp(32px, 6vw, 56px)",
  fontWeight: "bold",
  letterSpacing: "2px",
  marginBottom: "15px",
  color: "#ffffff",
};

const subtitle = {
  fontSize: "clamp(18px, 3vw, 24px)",
  fontWeight: "500",
  color: "#ffffff",
};

const desc = {
  fontSize: "clamp(14px, 2.5vw, 18px)",
  marginTop: "15px",
  opacity: "0.9",
  lineHeight: "1.5",
  color: "#ffffff",
};