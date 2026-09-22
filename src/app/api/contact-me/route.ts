import { sendEmail } from "@/lib/email";
import ContactMeEmail from "@/features/public/components/email/ContactMe";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const ipAddress =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Corps de requête invalide." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim().toLowerCase();
  const phone = payload.phone?.trim();
  const subject = payload.subject?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Champs requis manquants (name, email, message)." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email) || name.length > 120 || email.length > 254 || message.length > 5000) {
    return NextResponse.json(
      { message: "Les données envoyées sont invalides." },
      { status: 400 },
    );
  }

  try {
    await sendEmail(
      name, 
      email, 
      subject || "Nouveau message depuis le portfolio",
      React.createElement(ContactMeEmail, {
        fullName: name,
        email,
        phone,
        subject,
        message,
        ipAddress
      }),
    );
    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
    const isConfigurationError =
      errorMessage.includes("Configuration email") ||
      errorMessage.includes("RESEND_API_KEY");

    return NextResponse.json(
      {
        message: isConfigurationError
          ? errorMessage
          : "Resend n'a pas pu envoyer cet email. Vérifiez la clé API, le destinataire et le domaine expéditeur.",
      },
      { status: isConfigurationError ? 503 : 502 },
    );
  }
}
