export default function Capabilities() {
  return (
    <section
      id="capacidades"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={title}>Capacidades técnicas</h2>
        <div style={line} />

        <div style={grid}>
          {items.map((item, i) => (
            <div
              key={i}
              className="card-hover fade-up"
              style={{ ...card, animationDelay: `${i * 0.08}s` }}
            >
              <div style={icon}>{item.icon}</div>
              <div>{item.text}</div>
              <span style={badge}>{item.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const items = [
  { icon: "⚡", text: "Calidad de energía", badge: "Diagnóstico" },
  { icon: "🏭", text: "Instalación en planta", badge: "Ejecución" },
  { icon: "⚙️", text: "Integración electromecánica", badge: "Especializado" },
  { icon: "🔧", text: "Montaje industrial", badge: "Campo" },
  { icon: "📊", text: "Mantenimiento preventivo", badge: "Continuidad" },
  { icon: "🛠️", text: "Correctivo especializado", badge: "Respuesta" },
  { icon: "💡", text: "Optimización iluminación", badge: "Eficiencia" },
];

const title = { fontSize: "clamp(28px,4vw,40px)", marginBottom: "10px" };
const line = { width: "60px", height: "4px", background: "#ff6a00", marginBottom: "40px" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "25px" };

const card = {
  padding: "25px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  textAlign: "center",
  background: "#f9f9f9",
};

const icon = { fontSize: "26px", marginBottom: "10px" };

const badge = {
  fontSize: "11px",
  color: "#ff6a00",
  border: "1px solid #ff6a00",
  padding: "4px 10px",
  borderRadius: "20px",
  marginTop: "10px",
  display: "inline-block",
};