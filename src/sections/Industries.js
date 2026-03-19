export default function Industries() {
  return (
    <section
      id="industrias"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        <h2 style={title}>Industrias atendidas</h2>
        <div style={line} />

        <div style={grid}>
          <div style={item}>Automotriz</div>
          <div style={item}>Manufactura</div>
          <div style={item}>Metal-mecánica</div>
          <div style={item}>Logística industrial</div>
          <div style={item}>Electrónica</div>
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
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "15px",
};

const item = {
  background: "#f4f4f4",
  padding: "20px",
  textAlign: "center",
  borderRadius: "6px",
  fontWeight: "600",
};