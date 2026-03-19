"use client";

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        padding: "100px 40px",
        background: "#111",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* TÍTULO */}
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Contacto
        </h2>

        {/* LÍNEA */}
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "#ff6a00",
            marginBottom: "40px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
          }}
        >
          {/* INFO */}
          <div>
            <p style={{ marginBottom: "20px", color: "#ccc" }}>
              ¿Tienes un proyecto industrial? Contáctanos y te ayudamos a
              desarrollar soluciones confiables para tu operación.
            </p>

            <p style={{ marginBottom: "10px" }}>
              📧 contacto@servitronix.com
            </p>

            <p style={{ marginBottom: "10px" }}>
              📞 +52 844 535 4897
            </p>

            <p>
              📍 Saltillo, Coahuila, México
            </p>
          </div>

          {/* FORMULARIO */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mensaje enviado (simulado)");
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Nombre"
              required
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              required
              style={inputStyle}
            />

            <textarea
              placeholder="Mensaje"
              rows="4"
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                background: "#ff6a00",
                color: "white",
                padding: "15px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* 🎨 ESTILOS */
const inputStyle = {
  padding: "12px",
  border: "1px solid #333",
  background: "#1f1f1f",
  color: "white",
  borderRadius: "5px",
};