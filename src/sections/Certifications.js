"use client";

export default function Certifications() {
  return (
    <section
      id="certificaciones"
      style={{
        backgroundColor: "#1f1f1f",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={title}>Certificaciones</h2>
        <div style={line} />

        <div style={grid}>
          {/* REPSE */}
          <div style={card} className="cert-card">
            <h3 style={cardTitle}>Registro REPSE</h3>

            <p style={cardDesc}>
              Registro de Prestadoras de Servicios Especializados ante la STPS.
            </p>

            <p style={cardNumber}>
              STPS/UTD/DGIFT/AR203350/2025
            </p>

            <span style={badge}>Folio: 25542</span>
          </div>

          {/* DUNS */}
          <div style={card} className="cert-card">
            <h3 style={cardTitle}>Número D.U.N.S.</h3>

            <p style={cardDesc}>
              Identificación empresarial internacional emitida por Dun & Bradstreet.
            </p>

            <p style={cardNumber}>95-176-8610</p>

            <span style={badge}>Registro internacional</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cert-card {
          transition: all 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-6px);
          border: 1px solid #ff6a00;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}

/* ESTILOS */
const title = {
  textAlign: "center",
  fontSize: "clamp(28px, 4vw, 40px)",
  color: "#ffffff",
  marginBottom: "10px",
};

const line = {
  width: "60px",
  height: "4px",
  backgroundColor: "#ff6a00",
  margin: "0 auto 50px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const card = {
  backgroundColor: "#2a2a2a",
  padding: "30px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
};

const cardTitle = {
  color: "#ffffff",
  marginBottom: "10px",
};

const cardDesc = {
  color: "#cccccc",
  fontSize: "14px",
  marginBottom: "15px",
};

const cardNumber = {
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: "16px",
  marginBottom: "10px",
};

const badge = {
  fontSize: "11px",
  color: "#ff6a00",
  border: "1px solid #ff6a00",
  padding: "4px 10px",
  borderRadius: "20px",
};