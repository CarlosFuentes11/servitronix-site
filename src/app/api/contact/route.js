import nodemailer from "nodemailer";

export async function POST(req) {
  const { nombre, correo, mensaje } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nuevo mensaje - Servitronix",
      html: `
        <h3>Nuevo contacto</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false });
  }
}