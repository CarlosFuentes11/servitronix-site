"use client";
export default function Compliance() {
  return (
    <section
      id="normativas"
      style={{
        background: "#1f1f1f",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={title}>Cumplimiento y normativas</h2>
        <div style={line} />

        <div style={grid}>
          <div style={card} className="compliance-card">
            <h3 style={cardTitle}>Normativa eléctrica</h3>
            <p style={cardText}>
              Cumplimiento de NOM-001-SEDE en instalaciones eléctricas industriales.
            </p>
          </div>

          <div style={card} className="compliance-card">
            <h3 style={cardTitle}>Seguridad industrial</h3>
            <p style={cardText}>
              Aplicación de estándares STPS en seguridad laboral y operación.
            </p>
          </div>

          <div style={card} className="compliance-card">
            <h3 style={cardTitle}>Gestión ambiental</h3>
            <p style={cardText}>
              Lineamientos conforme a regulaciones ambientales aplicables.
            </p>
          </div>

          <div style={card} className="compliance-card">
            <h3 style={cardTitle}>Estándares internacionales</h3>
            <p style={cardText}>
              Referencia a ISO 9001, ISO 45001 e ISO 14001 en procesos operativos.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .compliance-card {
          transition: all 0.3s ease;
        }

        .compliance-card:hover {
          transform: translateY(-5px);
          border: 1px solid #ff6a00;
        }
      `}</style>
    </section>
  );
}

/* ESTILOS */
const title = {
  fontSize: "clamp(28px, 4vw, 40px)",
  color: "#ffffff",
  marginBottom: "10px",
};

const line = {
  width: "60px",
  height: "4px",
  background: "#ff6a00",
  marginBottom: "50px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
};

const card = {
  background: "#2a2a2a",
  padding: "25px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
};

const cardTitle = {
  color: "#ffffff",
  marginBottom: "10px",
};

const cardText = {
  color: "#cccccc",
  fontSize: "14px",
  lineHeight: "1.6",
};