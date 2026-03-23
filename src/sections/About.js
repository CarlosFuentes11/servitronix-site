export default function About() {
  return (
    <section
      id="sobre"
      style={{
        padding: "80px 20px",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* TITULO */}
        <h2
          style={{
            fontSize: "clamp(26px, 5vw, 36px)",
            marginBottom: "15px",
            color: "#111",
          }}
        >
          Sobre Servitronix
        </h2>

        {/* LINEA */}
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "#ff6a00",
            marginBottom: "30px",
          }}
        />

        {/* TEXTO */}
        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            lineHeight: "1.7",
            color: "#333",
          }}
        >
          Servitronix es una empresa con más de 22 años de experiencia en soluciones electromecánicas industriales, especializada en la integración de infraestructura eléctrica, mecánica y sistemas industriales para plantas de manufactura, industria y PYMES.
        </p>

        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            marginTop: "15px",
            lineHeight: "1.7",
            color: "#333",
          }}
        >
          Nos distinguimos por ofrecer un enfoque integral, permitiendo a nuestros clientes centralizar sus proyectos con un solo proveedor, reduciendo tiempos, costos y riesgos operativos.
        
        </p>
                <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            marginTop: "15px",
            lineHeight: "1.7",
            color: "#333",
          }}
        >
          Trabajamos bajo estándares de seguridad, cumplimiento normativo y eficiencia operativa, asegurando resultados confiables en cada etapa del proyecto.
        
        </p>

        {/* BLOQUES */}
        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={card}>
            <h3 style={cardTitle}>Experiencia técnica</h3>
            <p style={cardText}>
              Amplio conocimiento en infraestructura industrial y sistemas eléctricos.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Enfoque operativo</h3>
            <p style={cardText}>
              Soluciones diseñadas para continuidad y eficiencia en planta.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Calidad y seguridad</h3>
            <p style={cardText}>
              Cumplimiento de estándares industriales en cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const cardTitle = {
  marginBottom: "10px",
  color: "#111",
};

const cardText = {
  color: "#444",
  fontSize: "14px",
  lineHeight: "1.5",
};