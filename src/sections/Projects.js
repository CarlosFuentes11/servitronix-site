export default function Projects() {
  return (
    <section
      id="proyectos"
      style={{
        padding: "80px 20px",
        background: "#f5f5f5",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={title}>Proyectos industriales</h2>
        <div style={line} />

        <div style={grid}>
          
          {/* PROYECTO 1 */}
          <div className="card-hover fade-up" style={card}>
            <img
              src="/images/proyecto-electrico.jpg"
              alt="Proyecto eléctrico"
              className="project-img"
              style={img}
            />
            <h3 style={cardTitle}>
              Instalaciones eléctricas completas para líneas de producción
            </h3>
            <p style={cardText}>
              Implementación completa en planta de manufactura.
            </p>
          </div>

          {/* PROYECTO 2 */}
          <div
            className="card-hover fade-up"
            style={{
              ...card,
              animationDelay: "0.1s",
            }}
          >
            <img
              src="/images/proyecto-iluminacion.jpg"
              alt="Iluminación industrial"
              className="project-img"
              style={img}
            />
            <h3 style={cardTitle}>Optimización de iluminación industrial</h3>
            <p style={cardText}>
              Reducción de consumo energético en nave industrial.
            </p>
          </div>

          {/* PROYECTO 3 */}
          <div
            className="card-hover fade-up"
            style={{
              ...card,
              animationDelay: "0.2s",
            }}
          >
            <img
              src="/images/proyecto-mantenimiento.jpg"
              alt="Mantenimiento industrial"
              className="project-img"
              style={img}
            />
            <h3 style={cardTitle}>
              Mantenimiento electromecánico especializado
            </h3>
            <p style={cardText}>
              Corrección y prevención de fallas en sistemas críticos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ESTILOS */

const title = {
  fontSize: "clamp(28px, 4vw, 40px)",
  marginBottom: "10px",
  color: "#111",
};

const line = {
  width: "60px",
  height: "4px",
  background: "#ff6a00",
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
};

const card = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const img = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "6px",
  marginBottom: "15px",
};

const cardTitle = {
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "8px",
  color: "#111",
};

const cardText = {
  fontSize: "14px",
  color: "#555",
};