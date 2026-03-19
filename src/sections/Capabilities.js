export default function Capabilities() {
  return (
    <section
      id="capacidades"
      style={{
        padding: "100px 40px",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "#111" }}>
          Capacidades técnicas
        </h2>

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
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
         <div style={itemStyle}>Estudio de calidad de energía</div>
          <div style={itemStyle}>Instalación de sistemas eléctricos en planta</div>
          <div style={itemStyle}>Integración de infraestructura electromecánica</div>
          <div style={itemStyle}>Montaje de equipos industriales</div>
          <div style={itemStyle}>Diagnóstico y mantenimiento preventivo</div>
          <div style={itemStyle}>Mantenimiento correctivo especializado</div>
          <div style={itemStyle}>Optimización de sistemas de iluminación</div>
        </div>
      </div>
    </section>
  );
}

const itemStyle = {
  padding: "25px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "15px",
  fontWeight: "600",
  color: "#111",
  background: "#f9f9f9",
};