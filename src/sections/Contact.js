"use client";

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        padding: "80px 20px",
        background: "#1f1f1f",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <h2 style={title}>Contacto</h2>
        <div style={line} />

        <p style={text}>
          ¿Tienes un proyecto industrial? Contáctanos y te ayudamos a desarrollar
          soluciones confiables para tu operación.
        </p>

        <p style={subtext}>
          Atendemos proyectos en el norte de México y zonas industriales del país.
        </p>

        {/* 🔥 MENSAJE DE RESPUESTA (CORRECTO) */}
        <p style={response}>
         ⚡ Respondemos en menos de 24 horas, garantizamos la atención al cliente. ⚡
        </p>

        <div style={grid}>

          {/* INFO */}
          <div style={infoBox}>
            <p style={white}>📧 servitronixcontacto@gmail.com</p>
            <p style={white}>📞 +52 844 535 4897</p>
            <p style={white}>📍 Saltillo, Coahuila, México</p>
          </div>

          {/* FORM */}
          <form
                action="https://formsubmit.co/servitronixcontacto@gmail.com"
                method="POST"
                style={form}
          >
            <input type="text" name="name" placeholder="Nombre" required style={input} />
            <input type="email" name="email" placeholder="Correo" required style={input} />
            <textarea name="message" placeholder="Mensaje" rows="4" required style={input} />

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://tu-dominio.vercel.app" />

            <button style={button}>
                    Enviar
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

/* ESTILOS */

const title = {
  fontSize: "clamp(26px, 5vw, 36px)",
  marginBottom: "15px",
  color: "#fff",
};

const line = {
  width: "60px",
  height: "4px",
  background: "#ff6a00",
  marginBottom: "30px",
};

const text = {
  fontSize: "clamp(14px, 2.5vw, 18px)",
  lineHeight: "1.7",
  maxWidth: "600px",
  color: "#fff",
};

const subtext = {
  marginTop: "10px",
  opacity: "0.8",
  fontSize: "14px",
  color: "#ccc",
};

/* 🔥 NUEVO ESTILO */
const response = {
  marginTop: "25px",
  marginBottom: "10px",
  textAlign: "right",
  fontSize: "14px",
  color: "#ff6a00",
  fontWeight: "500",
};

const grid = {
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
};

const infoBox = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const white = {
  color: "#fff",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  background: "rgba(255,255,255,0.05)",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.1)", // 🔥 mejora visual
};

const input = {
  padding: "12px",
  borderRadius: "4px",
  border: "none",
  fontSize: "14px",
  color: "#111",
  background: "#fff",
};

const button = {
  background: "#ff6a00",
  color: "#fff",
  padding: "12px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const legal = {
  marginTop: "40px",
  paddingTop: "20px",
  borderTop: "1px solid rgba(255,255,255,0.2)",
  fontSize: "13px",
  lineHeight: "1.6",
  color: "#ffffff",
};