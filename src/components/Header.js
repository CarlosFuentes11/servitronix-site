"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
        <a href="#inicio" style={link}>Inicio</a>
        <a href="#servicios" style={link}>Servicios</a>
        <a href="#capacidades" style={link}>Capacidades</a>
        <a href="#proyectos" style={link}>Proyectos</a>
        <a href="#industrias" style={link}>Industrias</a>
        <a href="#contacto" style={link}>Contacto</a>
      </nav>

      {/* BOTÓN MOBILE */}
      <div style={menuButton} onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div style={mobileMenu}>
          <a href="#inicio" style={mobileLink} onClick={() => setOpen(false)}>Inicio</a>
          <a href="#servicios" style={mobileLink} onClick={() => setOpen(false)}>Servicios</a>
          <a href="#capacidades" style={mobileLink} onClick={() => setOpen(false)}>Capacidades</a>
          <a href="#proyectos" style={mobileLink} onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#industrias" style={mobileLink} onClick={() => setOpen(false)}>Industrias</a>
          <a href="#contacto" style={mobileLink} onClick={() => setOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  );
}

/* ===== ESTILOS ===== */

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
  fontSize: "14px",
  fontWeight: "500",
  transition: "0.2s",
};

const menuButton = {
  display: "none",
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