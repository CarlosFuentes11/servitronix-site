"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
    empresa: "", // 🛑 honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        setStatus("success");

        setFormData({
          nombre: "",
          correo: "",
          mensaje: "",
          empresa: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  // 📲 WhatsApp directo
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hola, vengo desde su página web, me interesa una cotización."
    );
    window.open(`https://wa.me/528445354897?text=${text}`, "_blank");
  };

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

        <div style={grid}>

          {/* INFO */}
          <div style={infoBox}>
            <p style={white}>📧 servitronixcontacto@gmail.com</p>
            <p style={white}>📞 +52 844 535 4897</p>
            <p style={white}>📍 Saltillo, Coahuila, México</p>

            {/* BOTÓN WHATSAPP */}
            <button onClick={handleWhatsApp} style={whatsappBtn}>
              Contactar por WhatsApp
            </button>
          </div>

          {/* FORM */}
          <div style={formContainer}>

            <p style={responseText}>
              ⚡ Respondemos en menos de 24 horas.
            </p>

            <form onSubmit={handleSubmit} style={form}>

              {/* 🛑 HONEYPOT (oculto) */}
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={(e) =>
                  setFormData({ ...formData, empresa: e.target.value })
                }
                style={{ display: "none" }}
              />

              <input
                placeholder="Nombre"
                style={input}
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                required
              />

              <input
                placeholder="Correo"
                type="email"
                style={input}
                value={formData.correo}
                onChange={(e) =>
                  setFormData({ ...formData, correo: e.target.value })
                }
                required
              />

              <textarea
                placeholder="Mensaje"
                rows="4"
                style={input}
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                required
              />

              <button style={button} disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>

              {/* 🔔 MENSAJES UX */}
              {status === "success" && (
                <p style={successMsg}>
                  ✅ Mensaje enviado correctamente. Revisa tu correo.
                </p>
              )}

              {status === "error" && (
                <p style={errorMsg}>
                  ❌ Error al enviar. Intenta nuevamente.
                </p>
              )}

            </form>

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

const grid = {
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
};

const infoBox = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const white = { color: "#fff" };

const formContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const responseText = {
  fontSize: "13px",
  color: "#ff6a00",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  background: "rgba(255,255,255,0.05)",
  padding: "20px",
  borderRadius: "8px",
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

const whatsappBtn = {
  marginTop: "15px",
  padding: "12px",
  background: "#25D366",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  borderRadius: "6px",
};

const successMsg = {
  color: "#4CAF50",
  fontSize: "13px",
  marginTop: "10px",
};

const errorMsg = {
  color: "#ff4d4d",
  fontSize: "13px",
  marginTop: "10px",
};