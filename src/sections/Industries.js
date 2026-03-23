export default function Industries() {
  const industries = [
    { icon: "🚗", title: "Automotriz", desc: "Producción y ensamble industrial." },
    { icon: "🏭", title: "Manufactura", desc: "Procesos productivos y líneas de fabricación." },
    { icon: "⚙️", title: "Metal-mecánica", desc: "Montaje de equipos y estructuras." },
    { icon: "🚚", title: "Logística", desc: "Sistemas de transporte y flujo industrial." },
    { icon: "💻", title: "Electrónica", desc: "Instalaciones de precisión eléctrica." },
    { icon: "🏗️", title: "Industria general", desc: "Soluciones adaptadas a distintos sectores." },
  ];

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
          {industries.map((item, index) => (
            <div key={index} style={card} className="card-hover">
              <div style={icon}>{item.icon}</div>
              <h3 style={cardTitle}>{item.title}</h3>
              <p style={cardText}>{item.desc}</p>
            </div>
          ))}
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
  marginBottom: "50px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "25px",
};

const card = {
  background: "#f9f9f9",
  padding: "25px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const icon = {
  fontSize: "28px",
  marginBottom: "10px",
};

const cardTitle = {
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "8px",
  color: "#111",
};

const cardText = {
  fontSize: "13px",
  color: "#555",
  lineHeight: "1.5",
};