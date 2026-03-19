"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        height: "90vh",
        width: "100%",
      }}
    >
      {/* 🖼 Imagen de fondo */}
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
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* 🟢 Contenido */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          {/* TÍTULO */}
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            SERVITRONIX
          </h1>

          {/* SUBTÍTULO */}
          <p
            style={{
              fontSize: "clamp(18px, 3vw, 24px)",
              fontWeight: "500",
            }}
          >
            Soluciones Electromecánicas Industriales
          </p>

          {/* DESCRIPCIÓN */}
          <p
            style={{
              fontSize: "clamp(14px, 2.5vw, 18px)",
              marginTop: "15px",
              opacity: "0.9",
              lineHeight: "1.5",
            }}
          >
            Instalación, mantenimiento, servicios especializados e integración de infraestructura para
            plantas industriales y PYMES
          </p>

          {/* 🔘 BOTONES */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              alignItems: "center",
            }}
          >
            {/* BOTÓN 1 */}
            <button
              onClick={() => {
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "#ff6a00",
                color: "white",
                padding: "14px 28px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%",
                maxWidth: "280px",
              }}
            >
              Solicitar cotización
            </button>

            {/* BOTÓN 2 */}
            <button
              onClick={() => {
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "transparent",
                color: "white",
                padding: "14px 28px",
                border: "1px solid white",
                cursor: "pointer",
                width: "100%",
                maxWidth: "280px",
              }}
            >
              Ver servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}