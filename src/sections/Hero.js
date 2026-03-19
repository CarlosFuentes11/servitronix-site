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

          <h1 style={h1}>
            SERVITRONIX
          </h1>

          <p style={subtitle}>
            Soluciones Electromecánicas Industriales
          </p>

          <p style={desc}>
            Instalación, mantenimiento, servicios especializados e integración de infraestructura para
            plantas industriales y PYMES
          </p>

          {/* BOTONES */}
          <div style={buttons}>

            <button
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={btnPrimary}
            >
              Solicitar cotización
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={btnSecondary}
            >
              Ver servicios
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

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

const buttons = {
  marginTop: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
};

const btnPrimary = {
  background: "#ff6a00",
  color: "#fff",
  padding: "14px 28px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  width: "100%",
  maxWidth: "280px",
};

const btnSecondary = {
  background: "transparent",
  color: "#fff",
  padding: "14px 28px",
  border: "1px solid #fff",
  cursor: "pointer",
  width: "100%",
  maxWidth: "280px",
};