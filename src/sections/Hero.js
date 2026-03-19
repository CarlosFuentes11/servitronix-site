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

      {/* 🌑 Overlay oscuro */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* 🟢 Contenido */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          padding: "20px",
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          SERVITRONIX
        </h1>

        <p
          style={{
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          Soluciones Electromecanicas Industriales
        </p>

        <p
          style={{
            fontSize: "18px",
            marginTop: "15px",
            opacity: "0.9",
          }}
        >
          Instalación, mantenimiento y servicios especializados para industria y PYMES
        </p>

        {/* 🔘 Botones */}
        <div style={{ marginTop: "30px" }}>
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
              padding: "15px 30px",
              border: "none",
              marginRight: "15px",
              cursor: "pointer",
              fontWeight: "bold",
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
              padding: "15px 30px",
              border: "1px solid white",
              cursor: "pointer",
            }}
          >
            Ver servicios
          </button>
        </div>
      </div>
    </section>
  );
}