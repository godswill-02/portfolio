import { render } from "@react-email/render";
import React from "react";
import { Resend } from "resend";

/**
 * Envoie un email avec un composant React
 * @param senderName - Nom de l'expéditeur
 * @param senderEmail - Email de l'expediteur
 * @param subject - Sujet de l'email
 * @param reactComponent - Composant React à envoyer
 */
export async function sendEmail(
  senderName: string,
  senderEmail: string,
  subject: string,
  reactComponent: React.ReactElement,
) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!resendApiKey || !adminEmail) {
    throw new Error(
      "Configuration email incomplète : RESEND_API_KEY et ADMIN_EMAIL sont requis.",
    );
  }

  if (!resendApiKey.startsWith("re_") || resendApiKey.includes("xxxxxxxx")) {
    throw new Error(
      "RESEND_API_KEY est absente ou contient encore la valeur d'exemple. Ajoutez votre vraie clé dans .env.local.",
    );
  }

  const html = await render(reactComponent);
  const resend = new Resend(resendApiKey);
  const { data, error } = await resend.emails.send({
    from: `Portfolio <${fromEmail}>`,
    to: [adminEmail],
    replyTo: `${senderName} <${senderEmail}>`,
    subject,
    html,
    text: `Message de ${senderName} (${senderEmail})${subject ? ` - ${subject}` : ""}\n\n${html ? "Consultez la version HTML de cet email." : ""}`,
    headers: {
      "X-Entity-Ref-ID": "portfolio-contact-email",
    },
  });

  if (error) {
    throw new Error(`Resend : ${error.message}`);
  }

  return { success: true, messageId: data?.id };
}
