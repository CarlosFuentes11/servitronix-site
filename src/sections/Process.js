"use client";
export default function Process() {
  return (
    <section
      id="proceso"
      style={{
        background: "#f5f5f5",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={title}>Proceso de trabajo</h2>
        <div style={line} />

        <div style={grid}>
          <div style={card} className="process-card">
            <div style={step}>1</div>
            <h3 style={cardTitle}>Diagnóstico</h3>
            <p style={cardText}>
              Evaluación técnica de necesidades, condiciones y riesgos operativos.
            </p>
          </div>

          <div style={card} className="process-card">
            <div style={step}>2</div>
            <h3 style={cardTitle}>Diseño y cotización</h3>
            <p style={cardText}>
              Desarrollo de soluciones alineadas a normativa y viabilidad operativa.
            </p>
          </div>

          <div style={card} className="process-card">
            <div style={step}>3</div>
            <h3 style={cardTitle}>Ejecución</h3>
            <p style={cardText}>
              Implementación con supervisión técnica y control en campo.
            </p>
          </div>

          <div style={card} className="process-card">
            <div style={step}>4</div>
            <h3 style={cardTitle}>Puesta en marcha</h3>
            <p style={cardText}>
              Validación final y entrega con sistemas operando correctamente.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .process-card {
          transition: all 0.3s ease;
        }

        .process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }
      `}</style>
    </section>
  );
}

/* ESTILOS */
const title = {
  fontSize: "clamp(28px, 4vw, 40px)",
  color: "#111",
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
  background: "#ffffff",
  padding: "30px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const step = {
  width: "45px",
  height: "45px",
  background: "#ff6a00",
  color: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px",
  fontWeight: "bold",
  fontSize: "16px",
};

const cardTitle = {
  fontSize: "18px",
  marginBottom: "10px",
  color: "#111",
};

const cardText = {
  fontSize: "14px",
  color: "#444",
  lineHeight: "1.6",
};