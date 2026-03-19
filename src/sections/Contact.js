"use client";

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        padding: "80px 20px",
        background: "#1f1f1f",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* TITULO */}
        <h2 style={title}>Contacto</h2>

        {/* LINEA */}
        <div style={line} />

        {/* TEXTO */}
        <p style={text}>
          ¿Tienes un proyecto industrial? Contáctanos y te ayudamos a desarrollar
          soluciones confiables para tu operación.
        </p>

        <p style={subtext}>
          Atendemos proyectos en el norte de México y zonas industriales del país.
        </p>

        {/* GRID */}
        <div style={grid}>

          {/* DATOS */}
          <div style={infoBox}>
            <p>📧 servitronixcontacto@gmail.com</p>
            <p>📞 +52 844 535 4897</p>
            <p>📍 Saltillo, Coahuila, México</p>
          </div>

          {/* FORMULARIO */}
          <form style={form}>
            <input placeholder="Nombre" style={input} />
            <input placeholder="Correo" style={input} />
            <textarea placeholder="Mensaje" rows="4" style={input} />

            <button style={button}>
              Enviar
            </button>
          </form>

        </div>

        {/* REGISTROS */}
        <div style={legal}>
          <p>Registro REPSE: [STPS/UTD/DGIFT/AR203350/2025]</p>
          <p>DUNS: [#95-176-8610]</p>
          <p>
            Cumplimos con regulaciones y estándares para la prestación de
            servicios especializados en el sector industrial.
          </p>
        </div>

      </div>
    </section>
  );
}

const title = {
  fontSize: "clamp(26px, 5vw, 36px)",
  marginBottom: "15px",
};

const line = {
  width: "60px",
  height: "4px",
  background: "#ff6a00",
  marginBottom: "30px",
};

const text = {
  fontSize: "clamp(14px, 2.5vw, 18px)",
  lineHeight: "1.7",
  maxWidth: "600px",
};

const subtext = {
  marginTop: "10px",
  opacity: "0.8",
  fontSize: "14px",
};

const grid = {
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
};

const infoBox = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  fontSize: "15px",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const input = {
  padding: "12px",
  borderRadius: "4px",
  border: "none",
  fontSize: "14px",
};

const button = {
  background: "#ff6a00",
  color: "white",
  padding: "12px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const legal = {
  marginTop: "40px",
  paddingTop: "20px",
  borderTop: "1px solid rgba(255,255,255,0.2)",
  fontSize: "13px",
  opacity: "0.8",
  lineHeight: "1.6",
};