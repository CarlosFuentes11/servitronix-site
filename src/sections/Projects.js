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
          <div style={card}>
            <h3 style={cardTitle}>Proyecto en planta de manufactura</h3>
            <p style={cardText}>
              Instalación eléctrica completa para línea de producción.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Optimización de iluminación industrial</h3>
            <p style={cardText}>
              Optimización de iluminación en nave industrial.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Mantenimiento electromecánico en planta</h3>
            <p style={cardText}>
              Servicios electromecánicos para continuidad operativa.
            </p>
          </div>
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
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const cardTitle = {
  marginBottom: "10px",
};

const cardText = {
  fontSize: "14px",
  color: "#444",
};