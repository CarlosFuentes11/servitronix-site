"use client";

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        padding: "80px 20px",
        background: "#1f1f1f",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <h2 style={title}>Contacto</h2>
        <div style={line} />

        <p style={text}>
          ¿Tienes un proyecto industrial? Contáctanos y te ayudamos a desarrollar
          soluciones confiables para tu operación.
        </p>

        <p style={subtext}>
          Atendemos proyectos en el norte de México y zonas industriales del país.
        </p>

        <div style={grid}>

          {/* INFO */}
          <div style={infoBox}>
            <p style={white}>📧 servitronixcontacto@gmail.com</p>
            <p style={white}>📞 +52 844 535 4897</p>
            <p style={white}>📍 Saltillo, Coahuila, México</p>
          </div>

          {/* FORM */}
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
          <p>Registro REPSE: STPS/UTD/DGIFT/AR203350/2025</p>
          <p>DUNS: 95-176-8610</p>
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
  color: "#fff",
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
  color: "#fff",
};

const subtext = {
  marginTop: "10px",
  opacity: "0.8",
  fontSize: "14px",
  color: "#ccc",
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
};

const white = {
  color: "#fff",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  background: "rgba(255,255,255,0.05)",
  padding: "20px",
  borderRadius: "8px",
};

const input = {
  padding: "12px",
  borderRadius: "4px",
  border: "none",
  fontSize: "14px",
  color: "#111",
  background: "#fff",
};

const button = {
  background: "#ff6a00",
  color: "#fff",
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