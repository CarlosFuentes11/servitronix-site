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

      {/* DESKTOP NAV */}
      <nav style={navDesktop} className="nav-desktop">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#capacidades">Capacidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#industrias">Industrias</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* MOBILE BUTTON */}
      <div style={menuButton} onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={mobileMenu}>
          <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#capacidades" onClick={() => setOpen(false)}>Capacidades</a>
          <a href="#proyectos" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#industrias" onClick={() => setOpen(false)}>Industrias</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  );
}

/* STYLES */

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
};

const navDesktop = {
  display: "none",
  gap: "20px",
};

const menuButton = {
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