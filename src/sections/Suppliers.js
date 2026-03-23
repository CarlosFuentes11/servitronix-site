"use client";

import Image from "next/image";

const suppliers = [
  "/images/proveedor1.png",
  "/images/proveedor2.png",
  "/images/proveedor3.png",
  "/images/proveedor4.png",
  "/images/proveedor5.png",
  "/images/proveedor6.png",
  "/images/proveedor7.png",
  "/images/proveedor8.png",
  "/images/proveedor9.png",
  "/images/proveedor10.png",
];

export default function Suppliers() {
  return (
    <section
      id="proveedores"
      style={{
        backgroundColor: "#f5f5f5",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        <h2 style={title}>Proveedores</h2>
        <div style={line} />

        <div style={grid}>
          {suppliers.map((logo, index) => (
            <div key={index} style={item} className="card-hover supplier-logo">
              <Image
                src={logo}
                alt={`proveedor-${index}`}
                width={260}
                height={150}
                style={img}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ===== ESTILOS ===== */

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

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "30px",
  alignItems: "center",
};

const item = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  filter: "grayscale(100%)",
  opacity: 0.8,
};

const img = {
  objectFit: "contain",
  maxWidth: "100%",
  height: "auto",
};