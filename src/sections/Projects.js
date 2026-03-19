export default function Projects() {
  return (
    <section
      id="proyectos"
      style={{
        padding: "100px 40px",
        background: "#111",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* TÍTULO */}
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Proyectos industriales
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

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* CARD 1 */}
          <div style={cardStyle}>
            <h3 style={titleStyle}>Instalación eléctrica industrial</h3>
            <p style={textStyle}>
              Desarrollo e instalación de sistemas eléctricos en planta de
              manufactura, garantizando eficiencia y seguridad operativa.
            </p>
          </div>

          {/* CARD 2 */}
          <div style={cardStyle}>
            <h3 style={titleStyle}>Sistemas de iluminación industrial</h3>
            <p style={textStyle}>
              Implementación de soluciones de iluminación para áreas de
              producción y almacenes, optimizando consumo energético.
            </p>
          </div>

          {/* CARD 3 */}
          <div style={cardStyle}>
            <h3 style={titleStyle}>Mantenimiento electromecánico</h3>
            <p style={textStyle}>
              Servicios preventivos y correctivos para asegurar la continuidad
              operativa de instalaciones industriales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🎨 ESTILOS */
const cardStyle = {
  background: "#1f1f1f",
  padding: "30px",
  borderRadius: "10px",
  border: "1px solid #333",
  transition: "0.3s",
};

const titleStyle = {
  fontSize: "20px",
  marginBottom: "10px",
};

const textStyle = {
  fontSize: "16px",
  color: "#ccc",
  lineHeight: "1.6",
};