"use client";

export default function ValueProposition() {
  return (
    <section
      id="valor"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "#111",
            marginBottom: "10px",
          }}
        >
          ¿Qué gana al trabajar con nosotros?
        </h2>

        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#ff6a00",
            margin: "0 auto 50px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* CARD 1 */}
          <div style={card}>
            <h3 style={cardTitle}>Un solo proveedor</h3>
            <p style={cardText}>
              Centralizamos todos los servicios en un mismo equipo, evitando errores de coordinación, retrasos y sobrecostos en proyectos industriales.
            </p>
          </div>

          {/* CARD 2 */}
          <div style={card}>
            <h3 style={cardTitle}>Menos tiempos muertos</h3>
            <p style={cardText}>
              Planificamos cada intervención para reducir paros no programados y proteger la continuidad operativa de tu planta.
            </p>
          </div>

          {/* CARD 3 */}
          <div style={card}>
            <h3 style={cardTitle}>Menor costo total</h3>
            <p style={cardText}>
              Integramos ingeniería, instalación y soporte para reducir retrabajos y optimizar recursos a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ESTILOS */
const card = {
  backgroundColor: "#f5f5f5",
  padding: "30px",
  borderRadius: "12px",
  transition: "all 0.3s ease",
};

const cardTitle = {
  fontSize: "20px",
  color: "#111",
  marginBottom: "10px",
};

const cardText = {
  fontSize: "14px",
  color: "#444",
  lineHeight: "1.6",
};