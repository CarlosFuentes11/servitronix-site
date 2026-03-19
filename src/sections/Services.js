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

          {/* 🔷 INFRAESTRUCTURA ELÉCTRICA */}
          <div style={card}>
            <h3 style={cardTitle}>Infraestructura eléctrica</h3>
            <p style={cardText}>
              Instalaciones eléctricas industriales, canalización, tableros y sistemas eléctricos para plantas de manufactura.
            </p>
          </div>

          {/* 🔷 INFRAESTRUCTURA MECÁNICA */}
          <div style={card}>
            <img
              src="/images/servicio-mecanico.jpg"
              alt="Infraestructura mecánica"
              style={{
                width: "100%",
                marginBottom: "15px",
                borderRadius: "6px",
                objectFit: "cover",
              }}
            />

            <h3 style={cardTitle}>Infraestructura mecánica</h3>

            <p style={cardText}>
              Estructuras metálicas, pailería, soldadura y tuberías industriales para instalaciones productivas.
            </p>
          </div>

          {/* 🔷 TRANSPORTADORES */}
          <div style={card}>
            <h3 style={cardTitle}>Sistemas de transporte industrial</h3>
            <p style={cardText}>
              Integración e instalación de transportadores para líneas de producción.
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
  gap: "25px",
};

const card = {
  background: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const cardTitle = {
  marginBottom: "10px",
  fontSize: "18px",
};

const cardText = {
  fontSize: "14px",
  color: "#444",
  lineHeight: "1.5",
};