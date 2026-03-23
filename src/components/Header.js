"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleHover = (e, color) => {
    e.target.style.color = color;
  };

  return (
    <header style={header}>
      
      {/* LOGO */}
      <div style={logoContainer}>
        <img
          src="/images/logo-servitronix.png"
          alt="Servitronix"
          style={{ height: "40px" }}
        />
        <span style={logoText}>SERVITRONIX</span>
      </div>

      {/* NAV DESKTOP */}
      <nav style={navDesktop}>
        {links.map((item, index) => (
          <a
            key={index}
            href={item.href}
            style={link}
            onMouseEnter={(e) => handleHover(e, "#ff6a00")}
            onMouseLeave={(e) => handleHover(e, "#ffffff")}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* BOTÓN MOBILE */}
      <div style={menuButton} onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div style={mobileMenu}>
          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* 🔗 LINKS CENTRALIZADOS */

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Proveedores", href: "#proveedores" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Industrias", href: "#industrias" },
  { label: "Contacto", href: "#contacto" },
];

/* ESTILOS */

const header = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  background: "#1f1f1f",
  padding: "15px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const logoText = {
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
};

const navDesktop = {
  display: "flex",
  gap: "25px",
  alignItems: "center",
};

const link = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "500",
  transition: "0.3s",
};

const menuButton = {
  display: "block",
  color: "white",
  fontSize: "26px",
  cursor: "pointer",
};

const mobileMenu = {
  position: "absolute",
  top: "70px",
  left: 0,
  width: "100%",
  background: "#1f1f1f",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "20px",
};

const mobileLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};

