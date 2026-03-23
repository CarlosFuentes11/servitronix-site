import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

// 🔥 conexión global (evita reconectar cada vez)
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function POST(req) {
  try {
    const { nombre, correo, mensaje } = await req.json();

    if (!nombre || !correo || !mensaje) {
      return new Response(JSON.stringify({ error: "Campos incompletos" }), {
        status: 400,
      });
    }

    // ===== MONGODB =====
    const client = await clientPromise;
    const db = client.db("servitronix");

    await db.collection("leads").insertOne({
      nombre,
      correo,
      mensaje,
      fecha: new Date(),
    });

    // ===== EMAIL =====
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

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

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: correo,
      subject: "Hemos recibido tu solicitud",
      html: `
        <p>Hola ${nombre},</p>
        <p>Recibimos tu mensaje. Te contactaremos en menos de 24 horas.</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });

  } catch (error) {
    console.error("ERROR API:", error);

    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
}