"use client";

import Image from "next/image";

const logos = [
  "/images/client-empresa1.png",
  "/images/client-empresa2.png",
  "/images/client-empresa3.png",
  "/images/client-empresa4.png",
  "/images/client-empresa5.png",
  "/images/client-empresa6.png",
  "/images/client-empresa7.png",
  "/images/client-empresa8.png",
  "/images/client-empresa9.png",
];

export default function Clients() {
  const loop = [...logos, ...logos];

  return (
    <section
      id="clientes"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={title}>Clientes</h2>
        <div style={line} />

        <div style={viewport}>
          <div className="clients-track">
            {loop.map((logo, index) => (
              <div key={index} style={item} className="client-logo">
                <Image
                  src={logo}
                  alt={`cliente-${index}`}
                  width={220}
                  height={140}
                  style={img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ESTILOS */

const title = {
  textAlign: "center",
  fontSize: "clamp(28px, 4vw, 40px)",
  color: "#111",
  marginBottom: "10px",
};

const line = {
  width: "60px",
  height: "4px",
  backgroundColor: "#ff6a00",
  margin: "0 auto 50px",
};

const viewport = {
  overflow: "hidden",
  width: "100%",
};

const item = {
  flex: "0 0 300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  filter: "grayscale(100%)",
  opacity: 0.7,
};

const img = {
  objectFit: "contain",
  maxWidth: "100%",
  height: "auto",
};