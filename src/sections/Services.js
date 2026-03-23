"use client";

export default function Services() {
  return (
    <section
      id="servicios"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={title}>Servicios industriales</h2>
        <div style={line} />

        <div style={grid}>
          
          <div style={card} className="card-hover">
            <img src="/images/servicio-electrico.jpg" alt="" style={img} />
            <h3 style={cardTitle}>Infraestructura eléctrica</h3>
            <ul style={list}>
              <li>Instalaciones en baja, media y alta tensión</li>
              <li>Subestaciones eléctricas</li>
              <li>Tableros y distribución</li>
              <li>Ingeniería eléctrica</li>
            </ul>
          </div>

          <div style={card} className="card-hover">
            <img src="/images/servicio-mecanico.png" alt="" style={img} />
            <h3 style={cardTitle}>Infraestructura mecánica</h3>
            <ul style={list}>
              <li>Pailería y soldadura industrial</li>
              <li>Estructuras metálicas</li>
              <li>Sistemas hidráulicos y neumáticos</li>
              <li>Fabricación en planta</li>
            </ul>
          </div>

          <div style={card} className="card-hover">
            <img src="/images/servicio-transporte.jpg" alt="" style={img} />
            <h3 style={cardTitle}>Automatización</h3>
            <ul style={list}>
              <li>Transportadores industriales</li>
              <li>Líneas de producción</li>
              <li>Sistemas automatizados</li>
              <li>Optimización operativa</li>
            </ul>
          </div>

          <div style={card} className="card-hover">
            <img src="/images/servicio-mantenimiento.jpg" alt="" style={img} />
            <h3 style={cardTitle}>Mantenimiento industrial</h3>
            <ul style={list}>
              <li>Preventivo y correctivo</li>
              <li>Diagnóstico de fallas</li>
              <li>Reubicación de maquinaria</li>
              <li>Soporte en planta</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ESTILOS */

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
  background: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
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
  marginBottom: "10px",
  fontSize: "18px",
  color: "#111",
};

const list = {
  paddingLeft: "18px",
  margin: 0,
  color: "#333",
  fontSize: "14px",
  lineHeight: "1.8",
};