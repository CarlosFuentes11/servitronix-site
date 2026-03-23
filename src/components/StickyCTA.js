"use client";

export default function StickyCTA() {
  return (
    <div className="sticky-cta">
      <button
        onClick={() =>
          document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Solicitar cotización
      </button>

      <style jsx>{`
        .sticky-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #111;
          padding: 10px;
          display: none;
          z-index: 999;
        }

        button {
          width: 100%;
          padding: 14px;
          background: #ff6a00;
          color: #fff;
          border: none;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .sticky-cta {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}