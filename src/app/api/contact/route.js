import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    const { nombre, correo, mensaje } = await req.json();

    // 🔒 Validación básica
    if (!nombre || !correo || !mensaje) {
      return new Response(JSON.stringify({ error: "Campos incompletos" }), {
        status: 400,
      });
    }

    // ===== 1. GUARDAR EN BASE DE DATOS =====
    await client.connect();
    const db = client.db("servitronix");

    await db.collection("leads").insertOne({
      nombre,
      correo,
      mensaje,
      fecha: new Date(),
    });

    // ===== 2. ENVÍO DE CORREO =====
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // correo a ti
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nuevo lead - Servitronix",
      html: `
        <h3>Nuevo contacto</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
      `,
    });

    // autoreply al cliente
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: correo,
      subject: "Hemos recibido tu solicitud",
      html: `
        <p>Hola ${nombre},</p>
        <p>Recibimos tu mensaje. Nuestro equipo te contactará en menos de 24 horas.</p>
        <br/>
        <p><b>Servitronix</b></p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
    });
  }
}