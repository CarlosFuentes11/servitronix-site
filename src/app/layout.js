import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Servitronix",
  description: "Infraestructura electromecánica industrial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}