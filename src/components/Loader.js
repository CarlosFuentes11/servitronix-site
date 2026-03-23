"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("loaded");

    if (!alreadyLoaded) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("loaded", "true");
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={overlay}>
      <div style={content}>
        <div style={logo}>SERVITRONIX</div>
        <div className="spinner" />
      </div>

      <style jsx>{`
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255,255,255,0.2);
          border-top: 3px solid #ff6a00;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-top: 20px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "#111",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const content = {
  textAlign: "center",
  color: "#fff",
};

const logo = {
  fontSize: "20px",
  fontWeight: "bold",
  letterSpacing: "2px",
};