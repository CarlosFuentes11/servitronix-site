export default function Industries() {
  return (
    <section
      id="industrias"
      style={{
        padding: "100px 40px",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* TÍTULO */}
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "20px",
            color: "#111",
          }}
        >
          Industrias atendidas
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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          <div style={itemStyle}>Automotriz</div>
          <div style={itemStyle}>Manufactura</div>
          <div style={itemStyle}>Metal-mecánica</div>
          <div style={itemStyle}>Logística industrial</div>
          <div style={itemStyle}>Electrónica</div>
        </div>
      </div>
    </section>
  );
}

/* 🎨 ESTILO PRO */
const itemStyle = {
  padding: "25px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "600",
  color: "#111",
  background: "#ffffff",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  transition: "0.3s",
};