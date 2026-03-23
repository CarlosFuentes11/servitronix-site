import nodemailer from "nodemailer";

// 🧠 memoria simple para rate limit (anti spam básico)
const requests = new Map();

export async function POST(req) {
  try {
    const { nombre, correo, mensaje, empresa } = await req.json();

    // 🛑 1. HONEYPOT (anti bots silencioso)
    if (empresa) {
      return Response.json({ ok: true });
    }

    // 🛑 2. VALIDACIÓN
    if (!nombre || !correo || !mensaje) {
      return Response.json({ ok: false, error: "Campos incompletos" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return Response.json({ ok: false, error: "Correo inválido" });
    }

    // 🛑 3. RATE LIMIT (1 envío cada 30s por IP)
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    const now = Date.now();
    const lastRequest = requests.get(ip);

    if (lastRequest && now - lastRequest < 30000) {
      return Response.json({ ok: false, error: "Espera antes de reenviar" });
    }

    requests.set(ip, now);

    // 📧 CONFIG SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📩 1. CORREO A TU EMPRESA
    await transporter.sendMail({
      from: `"Web Servitronix" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nuevo mensaje desde la web",
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    // 📩 2. AUTO-REPLY AL CLIENTE
    await transporter.sendMail({
      from: `"Servitronix" <${process.env.EMAIL_USER}>`,
      to: correo,
      subject: "Hemos recibido tu mensaje",
      html: `
        <h2>Gracias por contactarnos</h2>
        <p>Hola ${nombre},</p>
        <p>Hemos recibido tu mensaje y nuestro equipo te responderá en menos de 24 horas.</p>
        <p><strong>Resumen de tu mensaje:</strong></p>
        <p>${mensaje}</p>
        <br/>
        <p>Equipo Servitronix</p>
      `,
    });

    return Response.json({ ok: true });

  } catch (error) {
    console.error(error);
    return Response.json({ ok: false, error: "Error interno" });
  }
}