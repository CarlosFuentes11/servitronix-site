export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        padding: "80px 20px",
        background: "#1f1f1f",
        color: "white",
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
          }}
        >
          Contacto
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
            maxWidth: "600px",
          }}
        >
          ¿Tienes un proyecto industrial? Contáctanos y te ayudamos a desarrollar
          soluciones confiables para tu operación.
        </p>

        <p
          style={{
            marginTop: "10px",
            opacity: "0.8",
            fontSize: "14px",
          }}
        >
          Atendemos proyectos en el norte de México y zonas industriales del país.
        </p>

        {/* DATOS */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "15px",
          }}
        >
          <p>📧 contacto@servitronix.com</p>
          <p>📞 +52 844 535 4897</p>
          <p>📍 Saltillo, Coahuila, México</p>
        </div>

        {/* REGISTROS */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            fontSize: "13px",
            opacity: "0.8",
            lineHeight: "1.6",
          }}
        >
          <p>Registro REPSE: [TU_NUMERO]</p>
          <p>DUNS: [TU_NUMERO]</p>
          <p>
            Cumplimos con regulaciones y estándares para la prestación de
            servicios especializados en el sector industrial.
          </p>
        </div>
      </div>
    </section>
  );
}