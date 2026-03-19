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
          <div style={card}>
            <img
              src="/images/proyecto-electrico.jpg"
              alt="Proyecto eléctrico"
              style={img}
            />
            <h3 style={cardTitle}>Proyecto en planta de manufactura</h3>
            <p style={cardText}>
              Instalación eléctrica completa para línea de producción.
            </p>
          </div>

          {/* PROYECTO 2 */}
          <div style={card}>
            <img
              src="/images/proyecto-iluminacion.jpg"
              alt="Iluminación industrial"
              style={img}
            />
            <h3 style={cardTitle}>Optimización de iluminación industrial</h3>
            <p style={cardText}>
              Implementación de soluciones de iluminación en nave industrial para eficiencia energética.
            </p>
          </div>

          {/* PROYECTO 3 */}
          <div style={card}>
            <img
              src="/images/proyecto-mantenimiento.jpg"
              alt="Mantenimiento industrial"
              style={img}
            />
            <h3 style={cardTitle}>Mantenimiento electromecánico en planta</h3>
            <p style={cardText}>
              Servicios especializados para garantizar continuidad operativa en sistemas industriales.
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
  borderRadius: "8px",
  overflow: "hidden",
  border: "1px solid #ddd",
};

const img = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
};

const cardTitle = {
  padding: "15px 15px 5px",
  fontSize: "18px",
  color: "#111",
};

const cardText = {
  padding: "0 15px 15px",
  fontSize: "14px",
  color: "#444",
  lineHeight: "1.5",
};