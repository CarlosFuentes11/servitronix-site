"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 🔥 solo mostrar en mobile
    if (window.innerWidth < 768) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={container}>
      <button
        style={btn}
        onClick={() =>
          document
            .getElementById("contacto")
            ?.scrollIntoView({ behavior: "smooth" })
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
  left: "50%",
  transform: "translateX(-50%)", // 🔥 centrado mobile
  zIndex: 999,
  width: "90%",
  maxWidth: "400px",
};

const btn = {
  width: "100%",
  background: "#ff6a00",
  color: "#fff",
  border: "none",
  padding: "16px",
  borderRadius: "30px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
};