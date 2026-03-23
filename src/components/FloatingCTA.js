"use client";

export default function FloatingCTA() {
  return (
    <div style={container}>
      <button
        style={btn}
        onClick={() =>
          document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Cotizar proyecto
      </button>
    </div>
  );
}

const container = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 999,
};

const btn = {
  background: "#ff6a00",
  color: "#fff",
  border: "none",
  padding: "14px 20px",
  borderRadius: "30px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
};