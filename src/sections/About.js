export default function About() {
  return (
    <section
      id="sobre"
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
          Sobre Servitronix
        </h2>

        {/* LÍNEA DECORATIVA */}
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
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "900px",
          }}
        >
          Servitronix es una empresa especializada en soluciones para infraestructura
          electromecánica, enfocada en brindar soluciones confiables
          para plantas industriales. Nuestro enfoque se centra en la
          instalación, mantenimiento y optimización de sistemas eléctricos e
          industriales, garantizando eficiencia operativa y continuidad en los
          procesos productivos.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginTop: "20px",
            maxWidth: "900px",
          }}
        >
          Contamos con experiencia en diversos sectores industriales, trabajando
          bajo estándares de calidad y seguridad que nos permiten ofrecer
          resultados sólidos y medibles para cada cliente.
        </p>
      </div>
    </section>
  );
}